#!/usr/bin/env python3
"""Section anchors for Anki notes — {at:heading-id} on a card header makes the footer's page link
jump to that section (build-anki.mjs; site deep link /page#heading-id). Python, not node, so the
cron sandbox can run it.

  anki-at.py --status                    untagged-note count
  anki-at.py --next N [--skip K]         dump the next N card files that still have untagged notes:
                                         the page's sections (id + text) and each untagged note
  anki-at.py --files a.md b.md           same dump for named card files (paths relative to cards dir)
  anki-at.py --apply map.json            write tags; map = {"<card file rel path>": {"<note id>": "<heading-id>|-"}}

Heading ids mirror index.html buildPageTOC / build-anki headingIds. "-" = judged, no single section.
Unknown heading ids are refused, never written."""
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
WIKI = os.path.join(HERE, '..', '..', 'KHNL-GI-Wiki', 'wiki')
CARDS = next((d for d in [os.environ.get('CARDS_DIR'), '/cards',
                          '/mnt/LeStorage/Drive/KHNL/##3Resources/#KHNL GI Wiki/cards'] if d and os.path.isdir(d)), None)
HDR = re.compile(r'^(\[([0-9a-f]{6})\]\{[a-z0-9-]+\})((?:\{(?:also:[a-z0-9,-]+|at:[a-z0-9_-]+)\})*)')
NOT_SECTIONS = re.compile(r'(contents|see-also|sources)(-\d+)?$')


def heading_ids(md):
    """[(id, level, line_index)] for h2/h3, as the site slugs them."""
    seen, out, fence = {}, [], False
    for i, line in enumerate(md.split('\n')):
        if re.match(r'^\s*(```|~~~)', line):
            fence = not fence
            continue
        h = None if fence else re.match(r'^(#{2,3})\s+(.*?)\s*#*\s*$', line)
        if not h:
            continue
        t = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', r'\2', h[2])
        t = re.sub(r'\[\[([^\]]+)\]\]', r'\1', t)
        t = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', t)
        t = re.sub(r'[*`]', '', re.sub(r'<[^>]*>', '', t))
        sid = re.sub(r'\s+', '-', re.sub(r'[^\w\s-]', '', t.lower(), flags=re.A).strip())[:60] or f'h-{len(out)}'
        if sid in seen:
            seen[sid] += 1
            sid = f'{sid}-{seen[sid]}'
        else:
            seen[sid] = 1
        out.append((sid, len(h[1]), i))
    return out


def page_of(card_src):
    m = re.search(r'^page:\s*(\S+)', card_src, re.M)
    return m and m[1]


def body(md):
    m = re.match(r'---\n.*?\n---\n', md, re.S)
    return md[m.end():] if m else md


def untagged(card_src):
    """[(note_id, front_text)] for active/draft notes with no {at:}."""
    out, retired = [], False
    for blk in re.split(r'\n\s*\n', card_src):
        if re.match(r'\s*#\s*Retired', blk):
            retired = True
        if retired:
            continue
        lines = blk.split('\n')
        j = next((i for i, l in enumerate(lines) if HDR.match(l)), None)
        if j is None:
            continue
        h = HDR.match(lines[j])
        if '{at:' in h[3]:
            continue
        front = [lines[j][h.end():].strip()] + [l for l in lines[j + 1:] if not l.startswith('>')]
        out.append((h[2], ' / '.join(x.strip() for x in front if x.strip())))
    return out


def card_files():
    return sorted(f for f in glob.glob(os.path.join(CARDS, '**', '*.md'), recursive=True) if '/dist/' not in f)


def dump(rel):
    src = open(os.path.join(CARDS, rel)).read()
    page = page_of(src)
    notes = untagged(src)
    if not page or not notes:
        return
    md = body(open(os.path.join(WIKI, page)).read())
    lines = md.split('\n')
    ids = heading_ids(md)
    print(f'=== CARD FILE {rel}  (page {page})')
    print('--- SECTIONS')
    for k, (sid, lvl, i) in enumerate(ids):
        if NOT_SECTIONS.match(sid):
            continue
        end = ids[k + 1][2] if k + 1 < len(ids) else len(lines)
        text = re.sub(r'\s+', ' ', ' '.join(lines[i + 1:end])).strip()
        print(f'[{sid}]{" (h3)" if lvl == 3 else ""} {text[:1500]}')
    print('--- UNTAGGED NOTES')
    for nid, front in notes:
        print(f'{nid}: {front}')
    print()


def queue():
    return [os.path.relpath(f, CARDS) for f in card_files() if untagged(open(f).read())]


def apply(path):
    mapping = json.load(open(path))
    wrote = refused = 0
    for rel, tags in mapping.items():
        f = os.path.join(CARDS, rel)
        src = open(f).read()
        valid = {sid for sid, _, _ in heading_ids(body(open(os.path.join(WIKI, page_of(src))).read()))} | {'-'}
        parts = re.split(r'(\n\s*\n)', src)
        for k, blk in enumerate(parts):
            lines = blk.split('\n')
            for j, l in enumerate(lines):
                h = HDR.match(l)
                if not h or h[2] not in tags or '{at:' in h[3]:
                    continue
                at = tags[h[2]]
                if at not in valid:
                    print(f'REFUSED {rel} [{h[2]}]: no heading {at}')
                    refused += 1
                    continue
                lines[j] = h[1] + '{at:' + at + '}' + h[3] + l[h.end():]
                wrote += 1
            parts[k] = '\n'.join(lines)
        open(f, 'w').write(''.join(parts))
    print(f'wrote {wrote}, refused {refused}')


if __name__ == '__main__':
    a = sys.argv[1:]
    if not CARDS:
        sys.exit('cards dir not found')
    if '--status' in a:
        q = queue()
        print(f'{sum(len(untagged(open(os.path.join(CARDS, r)).read())) for r in q)} untagged notes in {len(q)} files')
    elif '--next' in a:
        n = int(a[a.index('--next') + 1])
        skip = int(a[a.index('--skip') + 1]) if '--skip' in a else 0
        for rel in queue()[skip:skip + n]:
            dump(rel)
    elif '--files' in a:
        for rel in a[a.index('--files') + 1:]:
            dump(rel)
    elif '--apply' in a:
        apply(a[a.index('--apply') + 1])
    else:
        print(__doc__)
