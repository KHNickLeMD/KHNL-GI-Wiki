#!/usr/bin/env python3
"""Figure-license gate (Nick, 2026-11-11) — which embedded source figures have no verified open licence.
Python so the cron sandbox can run it.

  figure-licenses.py                 every page: licensed vs unverified figures, unverified listed by page
  figure-licenses.py PAGE.md ...     only these pages; prints each unverified figure, exit 1 if any
  figure-licenses.py --cards         also card images whose file is not a licensed page figure

A figure counts as licensed only when one of the italic caption lines under it names a Creative
Commons licence: `open access (CC BY 4.0)`, `(CC BY-NC-ND 4.0)` etc. Anything else — no caption,
"figure 3 of [[source]]", "free access" — is unverified and must not ship (CLAUDE.md → Copyright)."""
import glob, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
WIKI = os.path.normpath(os.path.join(HERE, '..', '..', 'KHNL-GI-Wiki', 'wiki'))
CARDS = next((d for d in [os.environ.get('CARDS_DIR'), '/cards',
                          '/mnt/LeStorage/Drive/KHNL/##3Resources/#KHNL GI Wiki/cards'] if d and os.path.isdir(d)), None)
SKIP = {'index.md', 'log.md', 'needed-sources.md'}
EMBED = re.compile(r'!\[\[([^\]|]+\.(?:png|jpe?g|gif|webp|svg|heic))(?:\|[^\]]*)?\]\]', re.I)
LICENCE = re.compile(r'\(CC[ -]BY[A-Z0-9 .-]*\)', re.I)
CARD_IMG = re.compile(r'raw/assets/([^"\'?\s)]+)')


def figures(path):
    """(file, licensed, line_no) for every image embed on one page."""
    lines = open(path, encoding='utf-8').read().split('\n')
    out = []
    for i, line in enumerate(lines):
        for m in EMBED.finditer(line):
            caption = []
            for nxt in lines[i + 1:i + 6]:
                if not re.match(r'^\s*\*[^*].*\*\s*$', nxt):
                    break
                caption.append(nxt)
            out.append((m[1], any(LICENCE.search(c) for c in caption), i + 1))
    return out


def all_pages():
    return [f for f in sorted(glob.glob(os.path.join(WIKI, '**', '*.md'), recursive=True))
            if os.path.relpath(f, WIKI) not in SKIP]


def main(argv):
    cards = '--cards' in argv
    paths = [a for a in argv if not a.startswith('--')]
    if paths:
        bad = 0
        for p in paths:
            for name, ok, n in figures(p):
                if not ok:
                    bad += 1
                    print(f'{p}:{n}: {name} — caption names no CC licence')
        return 1 if bad else 0

    licensed, unverified, by_page = set(), 0, {}
    total = 0
    for p in all_pages():
        for name, ok, n in figures(p):
            total += 1
            if ok:
                licensed.add(name)
            else:
                unverified += 1
                by_page.setdefault(os.path.relpath(p, WIKI), []).append(f'{n}: {name}')
    print(f'{total} page figures: {total - unverified} licensed, {unverified} unverified on {len(by_page)} pages')
    for page, items in sorted(by_page.items()):
        print(f'\n{page}')
        for it in items:
            print(f'  {it}')

    if cards:
        if not CARDS:
            print('\ncards: no cards directory here (server only)')
        else:
            hits = []
            for f in sorted(glob.glob(os.path.join(CARDS, '**', '*.md'), recursive=True)):
                for m in CARD_IMG.finditer(open(f, encoding='utf-8').read()):
                    if m[1] not in licensed:
                        hits.append(f'{os.path.relpath(f, CARDS)}: {m[1]}')
            print(f'\ncards: {len(hits)} image uses with no licensed page figure behind them')
            for h in hits:
                print(f'  {h}')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
