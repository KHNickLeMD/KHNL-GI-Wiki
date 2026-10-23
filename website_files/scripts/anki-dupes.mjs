#!/usr/bin/env node
// Find Anki notes that likely test the same fact, so the card pass can merge them (Nick, 2026-10-22).
//   node anki-dupes.mjs [--limit 20]            → most similar unjudged pairs, most similar first
//   node anki-dupes.mjs --mark <guid> <guid> merged|distinct   → record a verdict in the ledger
//   node anki-dupes.mjs --test
//
// Finding candidates is mechanical (TF-IDF cosine over the card fronts); deciding is not, so the
// model judges each pair. Every verdict goes in <cards>/dedup-ledger.tsv so no pair is judged twice.
// Reads <cards>/dist/khnl-gi-wiki.json, so run build-anki.mjs first.
import { readFileSync, existsSync, appendFileSync } from 'node:fs'
import { join } from 'node:path'

const CARDS_DIRS = [
  process.env.CARDS_DIR,
  '/Users/nickel/Desktop/KHNL Drive/##3Resources/#KHNL GI Wiki/cards',
  '/mnt/LeStorage/Drive/KHNL/##3Resources/#KHNL GI Wiki/cards'
].filter(Boolean)
// ponytail: 0.4 picked by eye on the 3,643-note deck: above ~0.6 nearly all real duplicates,
// 0.4–0.6 mixed, below 0.4 mostly neighbours. The model filters, so err low.
const MIN_SCORE = 0.4

const STOP = new Set('a an the of to in for and or with without is are be by on at as vs from that this when which what how than per if not no its it into after before over under'.split(' '))
const plain = t => t.replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '$1').replace(/<[^>]*>/g, ' ').toLowerCase()
const tokens = t => new Set((plain(t).match(/[a-z0-9≥≤<>%.]+/g) ?? [])
  .map(w => w.replace(/\.$/, '')).filter(w => w.length > 1 && !STOP.has(w)))

export function pairs (notes, judged = new Set(), min = MIN_SCORE) {
  const docs = notes.map(n => tokens(n.text))
  const df = {}
  for (const d of docs) for (const w of d) df[w] = (df[w] || 0) + 1
  const vec = docs.map(d => {
    const v = new Map()
    for (const w of d) v.set(w, Math.log(notes.length / df[w]))
    const norm = Math.hypot(...v.values()) || 1
    for (const [w, x] of v) v.set(w, x / norm)
    return v
  })
  const out = []
  for (let i = 0; i < notes.length; i++) {
    for (let j = i + 1; j < notes.length; j++) {
      if (judged.has(key(notes[i].guid, notes[j].guid))) continue
      const [a, b] = vec[i].size < vec[j].size ? [vec[i], vec[j]] : [vec[j], vec[i]]
      let s = 0
      for (const [w, x] of a) s += x * (b.get(w) ?? 0)
      if (s >= min) out.push({ score: s, a: notes[i], b: notes[j] })
    }
  }
  return out.sort((x, y) => y.score - x.score)
}

const key = (g, h) => [g, h].sort().join(' ')

const show = n => [`  ${n.file} [${n.id}] (${n.section}, guid ${n.guid})`,
  ...n.text.split('<br>').map(l => '    ' + l),
  ...n.extra.replace(/^<hr>/, '').split('<br>').slice(0, -1).map(l => '    > ' + l)].join('\n')

function main (args) {
  const cards = CARDS_DIRS.find(existsSync)
  if (!cards) throw new Error('no cards dir found; set CARDS_DIR')
  const ledger = join(cards, 'dedup-ledger.tsv')
  if (args[0] === '--mark') {
    const [g, h, verdict] = args.slice(1)
    if (!g || !h || !['merged', 'distinct'].includes(verdict)) throw new Error('--mark <guid> <guid> merged|distinct')
    appendFileSync(ledger, [new Date().toISOString().slice(0, 10), g, h, verdict].join('\t') + '\n')
    return
  }
  const judged = new Set(existsSync(ledger)
    ? readFileSync(ledger, 'utf8').split('\n').filter(Boolean).map(l => { const [, g, h] = l.split('\t'); return key(g, h) })
    : [])
  const notes = JSON.parse(readFileSync(join(cards, 'dist', 'khnl-gi-wiki.json'), 'utf8')).filter(n => n.section !== 'retired')
  const limit = +(args[args.indexOf('--limit') + 1] || 20)
  const found = pairs(notes, judged)
  console.log(`${found.length} unjudged candidate pair(s) at ≥${MIN_SCORE}; showing ${Math.min(limit, found.length)}\n`)
  for (const p of found.slice(0, limit)) console.log(`${p.score.toFixed(2)}\n${show(p.a)}\n${show(p.b)}\n`)
}

function test () {
  const n = (guid, text) => ({ guid, text, file: guid + '.md', id: guid, section: 'draft', extra: '<hr><small>f</small>' })
  const notes = [
    n('a', 'Crohn disease — thiopurine dosing<br>- azathioprine {{c1::1.5–2.5 mg/kg/day}}'),
    n('b', 'Thiopurine dosing in IBD<br>- azathioprine {{c1::1.5–2.5 mg/kg/day::dose}}'),
    n('c', 'Achalasia — first-line therapy {{c1::POEM}}'),
    n('d', 'Hepatitis B — tenofovir in pregnancy {{c1::third trimester}}')
  ]
  const found = pairs(notes)
  if (found.length !== 1 || key(found[0].a.guid, found[0].b.guid) !== 'a b') throw new Error('expected only a~b')
  if (pairs(notes, new Set(['a b'])).length !== 0) throw new Error('judged pair came back')
  if ([...tokens('{{c1::POEM::hint}} the')].join() !== 'poem') throw new Error('cloze hint or stopword leaked')
  process.stderr.write('ok\n')
}

if (process.argv.includes('--test')) test()
else main(process.argv.slice(2))
