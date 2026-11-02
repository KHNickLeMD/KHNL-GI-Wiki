import os

# Baseline re-audited 2026-11-02: every folder verified file-by-file against
# wiki/sources/ (all matched -> raw/ fully ingested bar the 60 gated lectures and
# the broken IANS 2024 file). Keys are the exact folder names the script prints.
BASE = {
    'AASLD': 35, 'ACG': 61, 'AFS': 3, 'AGA': 190, 'APA': 1, 'ASGE': 55,
    'EASL': 2, 'NCCN': 7, 'Other': 45, 'SAGES': 5, 'USPG': 1,
    'Drug Labels': 14, 'GI Lectures+Chalk Talks': 60,
    'GI Other Studies': 23, 'GI RCTs': 12,
}
BASE_TOTAL, BASE_ASSETS = 514, 106

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
    # exact keys only — substring matching used to alias 'Other' onto
    # 'GI Other Studies' and invent drift that was not there
    b = BASE.get(k)
    d = '' if b is None else (now - b)
    if b is not None and now != b:
        drift.append((k, b, now))
    print('%-28s %6d %6s %s' % (k, now, b if b is not None else '?', d))
print()
print('TOTAL non-asset:', total, '(baseline %d)' % BASE_TOTAL)
print('assets:', assets, '(baseline %d)' % BASE_ASSETS)
print('TOTAL all:', total + assets, '(baseline %d)' % (BASE_TOTAL + BASE_ASSETS))
print()
print('DRIFT:', drift or 'NONE — no new arrivals')
