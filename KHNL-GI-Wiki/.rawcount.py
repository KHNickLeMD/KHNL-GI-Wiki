import os

BASE = {
    'AASLD': 35, 'ACG': 61, 'AFS': 2, 'AGA': 189, 'APA': 1, 'ASGE': 50,
    'EASL': 2, 'NCCN': 7, 'Other': 20, 'SAGES': 3, 'USPG': 1,
    'Lectures': 60, 'Other Studies': 6, 'RCTs': 12,
}

counts = {}
loose = []
for fn in sorted(os.listdir('raw')):
    p = os.path.join('raw', fn)
    if os.path.isfile(p) and not fn.startswith('.'):
        loose.append(fn)

def count(path):
    n = 0
    for dp, _, fns in os.walk(path):
        n += sum(1 for f in fns if not f.startswith('.'))
    return n

# guideline societies
gl = 'raw/GI Guidelines'
for d in sorted(os.listdir(gl)):
    if os.path.isdir(os.path.join(gl, d)):
        counts[d] = count(os.path.join(gl, d))

for d in sorted(os.listdir('raw')):
    p = os.path.join('raw', d)
    if os.path.isdir(p) and d not in ('GI Guidelines', 'assets'):
        counts[d] = count(p)

assets = count('raw/assets') if os.path.isdir('raw/assets') else 0

total = sum(counts.values())
print('LOOSE FILES DIRECTLY IN raw/:', loose or 'none')
print()
print('%-28s %6s %6s %s' % ('folder', 'now', 'base', 'delta'))
keys = sorted(set(list(counts) + list(BASE)))
drift = []
for k in keys:
    now = counts.get(k, 0)
    # match baseline by prefix/alias
    b = None
    for bk, bv in BASE.items():
        if k == bk or k.startswith(bk) or bk in k:
            b = bv
            break
    d = '' if b is None else (now - b)
    if b is not None and now != b:
        drift.append((k, b, now))
    print('%-28s %6d %6s %s' % (k, now, b if b is not None else '?', d))
print()
print('TOTAL non-asset:', total, '(baseline 449)')
print('assets:', assets, '(baseline 90)')
print('TOTAL all:', total + assets, '(baseline 539)')
print()
print('DRIFT:', drift or 'NONE — no new arrivals')
