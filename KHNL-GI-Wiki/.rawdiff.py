import os, re, unicodedata

# collect raw source files (excluding assets)
raw = []
for root, d, files in os.walk('raw'):
    if 'assets' in root: continue
    for fn in files:
        if fn.startswith('.'): continue
        raw.append(os.path.join(root, fn))

# collect source page titles + slugs + any 'raw file' mention
srcs = {}
for fn in os.listdir('wiki/sources'):
    if not fn.endswith('.md'): continue
    t = open('wiki/sources/' + fn, encoding='utf-8', errors='replace').read()
    srcs[fn[:-3]] = t

def norm(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()

blob = norm(' '.join(srcs.keys()) + ' ' + ' '.join(
    ' '.join(re.findall(r'^title:.*$', v, re.M)) for v in srcs.values()))

STOP = set('the of and for in on a an with to guideline guidelines clinical practice update '
           'management diagnosis pdf docx txt md consensus statement acg aga asge aasld easl '
           'nccn sages study rct trial'.split())

print('RAW FILES:', len(raw))
print()
lect, other = [], []
for p in sorted(raw):
    base = os.path.splitext(os.path.basename(p))[0]
    toks = [t for t in norm(base).split() if t not in STOP and len(t) > 2]
    hits = sum(1 for t in toks if t in blob.split())
    ratio = hits / max(len(toks), 1)
    if ratio < 0.55:
        (lect if 'Lecture' in p or 'Chalk' in p else other).append((round(ratio, 2), p))

print('=== LIKELY UNINGESTED — non-lecture ({}) ==='.format(len(other)))
for r, p in sorted(other):
    print('  {:.2f}  {}'.format(r, p))
print()
print('=== LIKELY UNINGESTED — lectures/chalk talks (GATED, {}) ==='.format(len(lect)))
for r, p in sorted(lect)[:80]:
    print('  {:.2f}  {}'.format(r, p))
