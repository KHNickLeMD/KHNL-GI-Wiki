import os, re, collections

root = 'wiki'
pages = {}
for dp, dn, fn in os.walk(root):
    for f in fn:
        if f.endswith('.md'):
            pages[f[:-3]] = os.path.join(dp, f)

skip = set(['log', 'needed-sources', 'index', 'overview'])
link_re = re.compile(r'\[\[([^\]\|#!]+?)(?:\\?\|[^\]]*)?\]\]')
inbound = collections.defaultdict(set)
broken = collections.defaultdict(list)

for slug, path in pages.items():
    if slug in skip:
        continue
    txt = open(path, encoding='utf-8').read()
    txt = re.sub(r'```.*?```', '', txt, flags=re.S)
    txt = re.sub(r'`[^`\n]*`', '', txt)
    for m in link_re.finditer(txt):
        t = m.group(1).strip()
        if t.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
            continue
        base = t.split('/')[-1]
        if base in pages:
            if base != slug:
                inbound[base].add(slug)
        else:
            broken[slug].append(t)

print("=== BROKEN LINKS ===")
n = 0
for s, ts in sorted(broken.items()):
    print(s, '->', sorted(set(ts)))
    n += len(set(ts))
print("total broken tokens:", n)
print()
print("=== ORPHANS (no inbound links) ===")
excl = set(['index', 'log', 'overview', 'needed-sources'])
orph = [s for s in sorted(pages) if s not in inbound and s not in excl]
srcorph = [s for s in orph if pages[s].startswith('wiki/sources')]
other = [s for s in orph if not pages[s].startswith('wiki/sources')]
print("source-page orphans (%d):" % len(srcorph))
for s in srcorph:
    print("   ", s)
print("non-source orphans (%d):" % len(other))
for s in other:
    print("   ", s, pages[s])
print()
print("=== COUNTS BY FOLDER ===")
cnt = collections.Counter()
for s, p in pages.items():
    parts = p.split(os.sep)
    cnt[parts[1] if len(parts) > 2 else 'ROOT'] += 1
for k, v in sorted(cnt.items()):
    print(v, k)
print("total pages:", len(pages))
print()
print("=== MISSING See Also / Sources (substantive non-source pages) ===")
for s in sorted(pages):
    p = pages[s]
    if p.startswith('wiki/sources') or s in excl:
        continue
    txt = open(p, encoding='utf-8').read()
    if 'Stub — to be expanded' in txt:
        continue
    miss = []
    if '## See Also' not in txt:
        miss.append('See Also')
    if '## Sources' not in txt:
        miss.append('Sources')
    for bad in ['## Related Pages', '## Cross-References', '## Related Wiki Pages']:
        if bad in txt:
            miss.append('BANNED:' + bad)
    if miss:
        print("   ", s, miss)
print()
print("=== STUBS ===")
for s in sorted(pages):
    txt = open(pages[s], encoding='utf-8').read()
    if 'Stub — to be expanded' in txt:
        print("   ", s, pages[s])
