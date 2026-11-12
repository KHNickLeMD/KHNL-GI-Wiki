#!/usr/bin/env python3
"""Release quality sweep queue (Nick, 2026-11-10) — which wiki pages / card files to review next.
Python so the cron sandbox can run it.

  review-queue.py --pages N      next N topic pages for the page quality review
  review-queue.py --cards N      next N card files for the card quality review
  review-queue.py --status       how far each sweep has got

Pages: never-reviewed (no `quality_reviewed:` frontmatter) first, fewest visuals (tables + Mermaid +
figures) first, then longest first; after that, oldest `quality_reviewed:` first. Skips index, log,
overview, needed-sources, sources/ and stubs.
Cards: finished card files (have `page_updated:`) with no `cards_reviewed:` first, most notes first;
then oldest `cards_reviewed:` first. Unfinished files belong to the card queue, not this one."""
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
        rows.append(dict(rel=rel, reviewed=meta.get('quality_reviewed', ''), tables=tables,
                         mermaid=mermaid, figures=figures, words=words))
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
        rows.append(dict(rel=rel, reviewed=rev, notes=notes, visuals=extras))
    return rows


def main(a):
    if not a or a[0] not in ('--pages', '--cards', '--status'):
        sys.exit(__doc__)
    if a[0] == '--status':
        p, c = pages(), cards()
        print(f"pages: {sum(1 for r in p if r['reviewed'])}/{len(p)} quality-reviewed; "
              f"{sum(1 for r in p if not (r['tables'] or r['mermaid'] or r['figures']))} have no table, diagram or figure")
        print(f"card files: {sum(1 for r in c if r['reviewed'])}/{len(c)} quality-reviewed; "
              f"{sum(r['notes'] for r in c)} live notes; {sum(r['visuals'] for r in c)} Back Extra tables/images")
        return
    n = int(a[1]) if len(a) > 1 else 5
    if a[0] == '--pages':
        rows = sorted(pages(), key=lambda r: (r['reviewed'] != '', r['reviewed'],
                                             r['tables'] + r['mermaid'] + r['figures'], -r['words']))
        for r in rows[:n]:
            print(f"wiki/{r['rel']}\treviewed={r['reviewed'] or 'never'}\twords={r['words']}\t"
                  f"tables={r['tables']} mermaid={r['mermaid']} figures={r['figures']}")
    else:
        rows = sorted(cards(), key=lambda r: (r['reviewed'] != '', r['reviewed'], -r['notes']))
        for r in rows[:n]:
            print(f"{r['rel']}\treviewed={r['reviewed'] or 'never'}\tnotes={r['notes']}\tvisuals={r['visuals']}")


if __name__ == '__main__':
    main(sys.argv[1:])
