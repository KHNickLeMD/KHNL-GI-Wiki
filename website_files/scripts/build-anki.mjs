#!/usr/bin/env node
// Export KHNL-GI-Wiki/cards/**.md to one Anki-importable TSV.
//   node build-anki.mjs         → writes KHNL-GI-Wiki/cards/dist/khnl-gi-wiki.txt
//   node build-anki.mjs --test
//
// The #guid column is the whole point: re-importing an edited file updates notes
// in place, so review scheduling survives a reword.
import { readFileSync, readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'KHNL-GI-Wiki')
const SITE = 'https://giwiki.khnicklemd.com'

// Cards live OUTSIDE the repo, in the Nextcloud folder beside raw/ — they sync to the server and
// are shared by link, not by git, so releasing cards stays a deliberate act. Keep them out of
// raw/ itself: the lint cron rsyncs raw/ into the repo and commits it.
const CARDS_DIRS = [
  process.env.CARDS_DIR,
  '/Users/nickel/Desktop/KHNL Drive/##3Resources/#KHNL GI Wiki/KHNL-GI-Wiki/cards',
  '/mnt/LeStorage/Drive/KHNL/##3Resources/#KHNL GI Wiki/KHNL-GI-Wiki/cards'
].filter(Boolean)
const CAPS = { words: 40, bullets: 5, bulletWords: 12 }

// ponytail: acronym fixups only; add entries when a deck name reads wrong
const ACRONYMS = { gi: 'GI', emr: 'EMR', esd: 'ESD', ercp: 'ERCP', eus: 'EUS', ibd: 'IBD' }

const guidOf = (page, id) => createHash('sha1').update(page + id).digest('hex').slice(0, 16)

const walk = dir => readdirSync(dir).flatMap(f => {
  const p = join(dir, f)
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : []
}).sort()

const frontmatter = src => {
  const m = src.match(/^---\n([\s\S]*?)\n---\n/)
  if (!m) return [{}, src]
  const fm = {}
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (kv) fm[kv[1]] = kv[2].trim().replace(/^["'\[]|["'\]]$/g, '')
  }
  return [fm, src.slice(m[0].length)]
}

const titleCase = s => s.replace(/^\d+-/, '').split('-')
  .map(w => ACRONYMS[w] ?? w[0].toUpperCase() + w.slice(1)).join(' ')

// Strip cloze wrappers, hints, and HTML so length caps measure what you actually read.
// {{c1::answer::hint}} shows as either the answer or the hint, never both — count the answer.
const plain = t => t.replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '$1').replace(/<[^>]*>/g, ' ')
const wordCount = t => plain(t).split(/\s+/).filter(Boolean).length

export function parse (src, page) {
  const notes = []
  let section = 'active'
  for (const raw of src.split(/\n\s*\n/)) {
    const lines = raw.split('\n').filter(l => l.trim())
    if (!lines.length) continue
    if (/^#\s*Retired/i.test(lines[0])) { section = 'retired'; lines.shift() }
    else if (/^#\s*Draft/i.test(lines[0])) { section = 'draft'; lines.shift() }
    if (!lines.length) continue
    const m = lines[0].match(/^\[([0-9a-f]{6})\]\{([a-z0-9-]+)\}\s*/)
    if (!m) throw new Error(`${page}: block must start with [id]{source-slug} — ${lines[0].slice(0, 50)}`)
    lines[0] = lines[0].slice(m[0].length)
    notes.push({
      id: m[1],
      source: m[2],
      section,
      text: lines.filter(l => !l.startsWith('>')),
      extra: lines.filter(l => l.startsWith('>')).map(l => l.replace(/^>\s?/, ''))
    })
  }
  return notes
}

export function lint (note, page) {
  const errs = []
  const text = note.text.join(' ')
  const bullets = note.text.filter(l => l.trim().startsWith('- '))
  if (wordCount(text) > CAPS.words) errs.push(`${wordCount(text)} words (max ${CAPS.words})`)
  if (bullets.length > CAPS.bullets) errs.push(`${bullets.length} bullets (max ${CAPS.bullets})`)
  for (const b of bullets) {
    if (wordCount(b) > CAPS.bulletWords) errs.push(`bullet ${wordCount(b)} words: ${plain(b).trim().slice(0, 40)}`)
  }
  if (!/\{\{c\d+::/.test(text) && note.section === 'active') errs.push('no cloze')
  return errs.map(e => `${page} [${note.id}]: ${e}`)
}

const tsv = s => s.replace(/\t/g, ' ').replace(/\n/g, '<br>')

// Rule sits above everything on the back, extra notes included — not just the source line.
const backExtra = (extra, footer) => '<hr>' + (extra ? extra + '<br>' : '') + footer

function main () {
  const cardsDir = CARDS_DIRS.find(existsSync)
  if (!cardsDir) {
    process.stderr.write(`no cards dir found; set CARDS_DIR. Tried:\n${CARDS_DIRS.join('\n')}\n`)
    process.exit(1)
  }
  const rows = []
  const problems = []
  const seen = new Set()

  for (const file of walk(cardsDir)) {
    const [fm, body] = frontmatter(readFileSync(file, 'utf8'))
    const page = fm.page
    if (!page) throw new Error(`${file}: frontmatter missing 'page:'`)

    const wikiFile = join(ROOT, 'wiki', page)
    if (!existsSync(wikiFile)) throw new Error(`${file}: page not found — ${page}`)
    const [pageFm] = frontmatter(readFileSync(wikiFile, 'utf8'))
    if (fm.page_updated !== pageFm.updated) {
      problems.push(`${page}: cards stale (page ${pageFm.updated}, cards ${fm.page_updated})`)
    }

    const slug = page.split('/').pop().replace(/\.md$/, '')
    const deck = ['KHNL GI Wiki', ...page.split('/').slice(0, -1).map(titleCase), pageFm.title].join('::')
    // One source per card, not the page's whole source list — 7 slugs on every card was
    // noise. Which guideline said it is the useful bit, especially where they disagree.
    const srcLabel = s => {
      const [org, year] = s.split('-')
      return /^\d{4}$/.test(year) ? `${org.toUpperCase()} ${year}` : org.toUpperCase()
    }
    const footerFor = src => `<small><a href="${SITE}/${slug}">${pageFm.title}</a>`
      + ` · <a href="${SITE}/${src}">${srcLabel(src)}</a></small>`

    for (const note of parse(body, page)) {
      const guid = guidOf(page, note.id)
      if (seen.has(guid)) throw new Error(`${page}: duplicate id [${note.id}]`)
      seen.add(guid)
      problems.push(...lint(note, page))

      const tags = [`khnl::${page.split('/')[0].replace(/^\d+-/, '')}`, `khnl::${slug}`]
      if (note.section === 'retired') tags.push('khnl::retired')
      if (note.section === 'draft') tags.push('khnl::unreviewed')

      if (!existsSync(join(ROOT, 'wiki', 'sources', `${note.source}.md`))) {
        problems.push(`${page} [${note.id}]: unknown source ${note.source}`)
      }

      const text = note.section === 'retired'
        ? 'RETIRED — no longer maintained. {{c1::delete me}}'
        : note.text.join('\n')
      rows.push([guid, deck, tags.join(' '), tsv(text), backExtra(tsv(note.extra.join('\n')), footerFor(note.source))].join('\t'))
    }
  }

  const out = join(cardsDir, 'dist', 'khnl-gi-wiki.txt')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, [
    '#separator:tab', '#html:true', '#notetype:Cloze',
    '#guid column:1', '#deck column:2', '#tags column:3',
    '#columns:guid\tdeck\ttags\tText\tBack Extra', ''
  ].join('\n') + '\n' + rows.join('\n') + '\n')

  if (problems.length) {
    process.stderr.write(`\n${problems.length} problem(s):\n` + problems.join('\n') + '\n')
    process.exitCode = 1
  }
  process.stderr.write(`\n${rows.length} notes → ${out}\n`)
}

async function test () {
  const { strict: assert } = await import('node:assert')
  const fixture = `[a1b2c3]{acg-2020-thing} Anchor line
- one {{c1::x}}
- two {{c1::y}}
> extra line

[d4e5f6]{aga-2024-other} Atomic {{c1::fact}}

# Retired

[999999]{acg-2020-thing} gone`

  const notes = parse(fixture, 'p.md')
  assert.equal(notes.length, 3)
  assert.equal(notes[0].source, 'acg-2020-thing')
  assert.deepEqual(notes[0].extra, ['extra line'])
  assert.throws(() => parse('[abc123] no source', 'p.md'), /source-slug/)
  assert.equal(notes[0].text.length, 3)
  assert.equal(notes[2].section, 'retired')

  // guid is stable across a reword, distinct across ids
  assert.equal(guidOf('p.md', 'a1b2c3'), guidOf('p.md', 'a1b2c3'))
  assert.notEqual(guidOf('p.md', 'a1b2c3'), guidOf('p.md', 'd4e5f6'))
  assert.notEqual(guidOf('q.md', 'a1b2c3'), guidOf('p.md', 'a1b2c3'))

  // caps measure visible words, not cloze syntax
  assert.equal(wordCount('a {{c1::b c}} d'), 4)
  assert.equal(wordCount('a {{c1::b::a long hint here}} d'), 3)
  assert.equal(lint(notes[0], 'p.md').length, 0)
  assert.equal(lint({ ...notes[0], text: ['- ' + 'w '.repeat(20)] }, 'p.md').length, 2)

  assert.equal(titleCase('4-advanced-gi-procedures'), 'Advanced GI Procedures')
  assert.equal(tsv('a\tb\nc'), 'a b<br>c')
  assert.equal(backExtra('note', 'FOOT'), '<hr>note<br>FOOT')
  assert.equal(backExtra('', 'FOOT'), '<hr>FOOT')
  process.stderr.write('ok\n')
}

if (process.argv.includes('--test')) await test()
else main()
