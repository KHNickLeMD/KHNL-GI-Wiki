import os, re, collections

root = 'wiki'
pages = {}
for dp, _, fns in os.walk(root):
    for fn in fns:
        if fn.endswith('.md'):
            pages[fn[:-3]] = os.path.join(dp, fn)

links = collections.defaultdict(set)
broken = collections.defaultdict(set)
for slug, path in pages.items():
    txt = open(path, encoding='utf-8').read()
    txt = re.sub(r'```.*?```', '', txt, flags=re.S)
    txt = re.sub(r'`[^`]*`', '', txt)
    for m in re.finditer(r'(!?)\[\[([^\]#]+)\]\]', txt):
        if m.group(1) == '!':
            continue
        t = m.group(2).replace('\\|', '|').strip().split('|')[0].strip().rstrip('\\').strip()
        if not t or t.startswith('#'):
            continue
        t = re.sub(r'\.md$', '', t)
        if t in pages:
            links[t].add(slug)
        else:
            broken[t].add(slug)

skip = {'index', 'log', 'overview', 'README'}
orphans = [s for s in pages if s not in skip and not (links[s] - {s})]
print("TOTAL PAGES:", len(pages))
print("\n=== ORPHANS (no inbound links) ===")
for o in sorted(orphans):
    print("  ", o, "->", pages[o])
print("\n=== BROKEN LINKS (no page with that basename) ===")
for t, srcs in sorted(broken.items()):
    print("  [[%s]]  <- %s" % (t, sorted(srcs)[:4]))
