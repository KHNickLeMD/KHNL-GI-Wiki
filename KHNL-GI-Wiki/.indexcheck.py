import os, re

pages = {}
for dp, _, fns in os.walk('wiki'):
    for fn in fns:
        if fn.endswith('.md'):
            pages[fn[:-3]] = os.path.join(dp, fn)

idx = open('wiki/index.md', encoding='utf-8').read()
listed = set()
for m in re.finditer(r'\[\[([^\]#|]+?)(?:\\?\|[^\]]*)?\]\]', idx):
    listed.add(m.group(1).rstrip('\\').strip())

skip = {'index', 'log', 'overview', 'README'}
missing = sorted(s for s in pages if s not in skip and s not in listed)
ghosts = sorted(s for s in listed if s not in pages)

print("pages on disk (excl index/log/overview):", len(pages) - len([s for s in skip if s in pages]))
print("distinct slugs in index.md:", len(listed))
print("\n=== ON DISK, NOT IN INDEX ===")
for s in missing:
    print("  ", s, "->", pages[s])
print("\n=== IN INDEX, NO SUCH PAGE ===")
for s in ghosts:
    print("  ", s)

# counts stated in index headers
print("\n=== NUMBERS STATED IN index.md ===")
for line in idx.split('\n'):
    if re.search(r'\b\d{2,4}\b', line) and (line.startswith('#') or line.startswith('**') or line.startswith('_') or line.startswith('*') or 'total' in line.lower() or 'Total' in line):
        print("  ", line.strip()[:160])
