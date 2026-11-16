#!/usr/bin/env python3
"""Release quality sweep queue (Nick, 2026-11-10) — which wiki pages / card files to review next.
Python so the cron sandbox can run it.

  review-queue.py --pages N      next N topic pages for the page quality review
  review-queue.py --cards N      next N card files for the card quality review
  review-queue.py --sources N    next N source pages for the independent check (no `verified:`), most-cited first
  review-queue.py --status       how far each sweep has got

Pages: never-reviewed (no `quality_reviewed:` frontmatter) first, fewest visuals (tables + Mermaid +
figures) first, then longest first; then reviewed pages with no `verified:` (they need only the
independent check — CLAUDE.md, Verification), oldest review first; after that, oldest `verified:` first.
Skips index, log, overview, needed-sources, sources/ and stubs.
Cards: card files whose page has gained `verified:` since their last card review come first (the
deck was built from unverified pages); then finished card files (have `page_updated:`) with no
`cards_reviewed:`, most notes first; then oldest `cards_reviewed:` first. Unfinished files belong to
the card queue, not this one."""
import glob, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
WIKI = os.path.normpath(os.path.join(HERE, '..', '..', 'KHNL-GI-Wiki', 'wiki'))
CARDS = next((d for d in [os.environ.get('CARDS_DIR'), '/cards',
                          '/mnt/LeStorage/Drive/KHNL/##3Resources/#KHNL GI Wiki/cards'] if d and os.path.isdir(d)), None)
SKIP = {'index.md', 'log.md', 'overview.md', 'needed-sources.md'}
FIRM_CUT = '2026-11-12'   # Nick: firm ~30% deck cut; card reviews older than this count as not reviewed


def fm(src):
    m = re.match(r'^---\n([\s\S]*?)\n---\n', src)
    if not m:
        return {}, src
    out = {}
    for line in m[1].split('\n'):
        kv = re.match(r'^(\w+):\s*(.*)$', line)
        if kv:
            out[kv[1]] = kv[2].strip().strip('"\'')
    return out, src[m.end():]


def pages():
    rows = []
    for f in sorted(glob.glob(os.path.join(WIKI, '**', '*.md'), recursive=True)):
        rel = os.path.relpath(f, WIKI)
        if rel in SKIP or rel.startswith('sources' + os.sep):
            continue
        meta, body = fm(open(f, encoding='utf8').read())
        b = body.strip()
        if b.startswith('*Stub') or 'stub — to be expanded' in b.lower():
            continue
        tables = len(re.findall(r'^\s*\|?\s*:?-{3,}:?\s*\|', body, re.M))
        mermaid = body.count('```mermaid')
        figures = len(re.findall(r'!\[\[|!\[[^\]]*\]\(', body))
        words = len(re.sub(r'```[\s\S]*?```', '', body).split())
        srcs = [s.strip().strip('"\'') for s in meta.get('sources', '').strip('[]').split(',') if s.strip()]
        rows.append(dict(rel=rel, reviewed=meta.get('quality_reviewed', ''), verified=meta.get('verified', ''),
                         sources=srcs, tables=tables, mermaid=mermaid, figures=figures, words=words))
    return rows


def sources():
    cited = {}
    for r in pages():
        for s in r['sources']:
            cited[s] = cited.get(s, 0) + 1
    rows = []
    for f in sorted(glob.glob(os.path.join(WIKI, 'sources', '*.md'))):
        src = open(f, encoding='utf8').read()
        meta, _ = fm(src)
        slug = os.path.basename(f)[:-3]
        rows.append(dict(slug=slug, verified=meta.get('verified', ''), partial='ingest' in meta,
                         has_raw=bool(re.search(r'^raw:', src[:3000], re.M)), cited=cited.get(slug, 0)))
    return rows


def cards():
    rows = []
    if not CARDS:
        sys.exit('cards dir not found (set CARDS_DIR)')
    for f in sorted(glob.glob(os.path.join(CARDS, '**', '*.md'), recursive=True)):
        rel = os.path.relpath(f, CARDS)
        if rel.startswith('dist' + os.sep):
            continue
        src = open(f, encoding='utf8').read()
        meta, body = fm(src)
        if not meta.get('page_updated'):
            continue
        live = body.split('\n# Retired', 1)[0]
        notes = len(re.findall(r'^\[[0-9a-f]{6}\]\{', live, re.M))
        extras = len(re.findall(r'^>.*(<table|<img)', live, re.M))
        rev = meta.get('cards_reviewed', '')
        if rev and rev < FIRM_CUT:   # reviewed under the lighter rule -> back in the queue
            rev = ''
        page = os.path.join(WIKI, rel)
        pv = fm(open(page, encoding='utf8').read())[0].get('verified', '') if os.path.exists(page) else ''
        rows.append(dict(rel=rel, reviewed=rev, notes=notes, visuals=extras, page_verified=pv,
                         recheck=bool(pv) and rev < pv))   # page verified after (or without) a card review
    return rows


def main(a):
    if not a or a[0] not in ('--pages', '--cards', '--sources', '--status'):
        sys.exit(__doc__)
    if a[0] == '--status':
        p, s = pages(), sources()
        print(f"pages: {sum(1 for r in p if r['reviewed'])}/{len(p)} quality-reviewed; "
              f"{sum(1 for r in p if r['verified'])}/{len(p)} verified (independent check); "
              f"{sum(1 for r in p if not (r['tables'] or r['mermaid'] or r['figures']))} have no table, diagram or figure")
        print(f"source pages: {sum(1 for r in s if r['verified'])}/{len(s)} verified; "
              f"{sum(1 for r in s if not r['has_raw'])} without a raw: file; {sum(1 for r in s if r['partial'])} ingest: partial")
        if CARDS:
            c = cards()
            print(f"card files: {sum(1 for r in c if r['reviewed'])}/{len(c)} quality-reviewed; "
                  f"{sum(1 for r in c if r['page_verified'])} on a verified page; {sum(1 for r in c if r['recheck'])} "
                  f"to re-check against a newly verified page; "
                  f"{sum(r['notes'] for r in c)} live notes; {sum(r['visuals'] for r in c)} Back Extra tables/images")
        return
    n = int(a[1]) if len(a) > 1 else 5
    if a[0] == '--pages':
        def key(r):
            if not r['reviewed']:                       # never reviewed: full review + independent check
                return (0, '', r['tables'] + r['mermaid'] + r['figures'], -r['words'])
            if not r['verified']:                       # reviewed, never independently checked
                return (1, r['reviewed'], 0, -r['words'])
            return (2, r['verified'], 0, -r['words'])
        for r in sorted(pages(), key=key)[:n]:
            todo = 'review+verify' if not r['reviewed'] else ('verify-only' if not r['verified'] else 're-review')
            print(f"wiki/{r['rel']}\ttodo={todo}\treviewed={r['reviewed'] or 'never'}\t"
                  f"verified={r['verified'] or 'never'}\twords={r['words']}\t"
                  f"tables={r['tables']} mermaid={r['mermaid']} figures={r['figures']}")
    elif a[0] == '--sources':
        rows = sorted((r for r in sources() if not r['verified'] and r['has_raw'] and not r['partial']),
                      key=lambda r: (-r['cited'], r['slug']))
        for r in rows[:n]:
            print(f"wiki/sources/{r['slug']}.md\tcited_by={r['cited']} topic pages")
    else:
        rows = sorted(cards(), key=lambda r: (not r['recheck'], r['reviewed'] != '', r['reviewed'], -r['notes']))
        for r in rows[:n]:
            print(f"{r['rel']}\treviewed={r['reviewed'] or 'never'}\tnotes={r['notes']}\tvisuals={r['visuals']}\t"
                  f"page_verified={r['page_verified'] or 'no'}" + ('\tRE-CHECK: page verified since last card review' if r['recheck'] else ''))


if __name__ == '__main__':
    main(sys.argv[1:])
