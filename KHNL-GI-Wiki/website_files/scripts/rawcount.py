import os, collections

root = 'raw'
cnt = collections.Counter()
loose = []
for dp, dn, fn in os.walk(root):
    rel = os.path.relpath(dp, root)
    if rel.startswith('assets'):
        continue
    for f in fn:
        if f == '.DS_Store':
            continue
        if rel == '.':
            loose.append(f)
            continue
        parts = rel.split(os.sep)
        key = os.sep.join(parts[:2]) if parts[0] == 'GI Guidelines' else parts[0]
        cnt[key] += 1

baseline = {
    'GI Guidelines/AASLD': 35, 'GI Guidelines/ACG': 61, 'GI Guidelines/AFS': 2,
    'GI Guidelines/AGA': 189, 'GI Guidelines/APA': 1, 'GI Guidelines/ASGE': 50,
    'GI Guidelines/EASL': 2, 'GI Guidelines/NCCN': 7, 'GI Guidelines/Other': 21,
    'GI Guidelines/SAGES': 3, 'GI Guidelines/USPG': 1,
    'GI Lectures+Chalk Talks': 60, 'GI Other Studies': 6, 'GI RCTs': 12,
}
total = 0
for k in sorted(set(list(cnt) + list(baseline))):
    have, want = cnt.get(k, 0), baseline.get(k, 0)
    total += have
    flag = '' if have == want else '   <<<< DELTA %+d' % (have - want)
    print('%-32s have=%-4d baseline=%-4d%s' % (k, have, want, flag))
print('TOTAL non-asset: %d  (baseline 450)' % total)
print('loose files directly in raw/:', loose)
