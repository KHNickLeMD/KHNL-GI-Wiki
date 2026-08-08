import os, re
pages = set(open('.lint-pageslugs.txt').read().split('\n'))
srcs = set(open('.lint-sourceslugs.txt').read().split('\n'))
allslugs = pages | srcs
linkre = re.compile(r'\[\[([^\]]+)\]\]')
inbound = {}
broken = []
files = []
for root, _, fs in os.walk('wiki'):
    for f in fs:
        if f.endswith('.md'):
            files.append(os.path.join(root, f))
for path in files:
    txt = open(path).read()
    txt = re.sub(r'```.*?```', '', txt, flags=re.S)
    txt = re.sub(r'`[^`]*`', '', txt)
    base = os.path.basename(path)[:-3]
    for m in linkre.finditer(txt):
        raw = m.group(1).replace('\\|', '|')
        tgt = raw.split('|')[0].split('#')[0].rstrip('\\').strip()
        if not tgt:
            continue
        if tgt.endswith('.png') or tgt.endswith('.HEIC'):
            continue
        if tgt not in allslugs:
            broken.append((base, tgt))
        else:
            inbound.setdefault(tgt, set()).add(base)
print('=== BROKEN LINKS ({}) ==='.format(len(broken)))
for b, t in broken[:60]:
    print('  {} -> [[{}]]'.format(b, t))
skip = {'index', 'log', 'overview', 'README', 'MEMORY'}
orphans = [p for p in pages if p not in inbound and p not in skip]
print('=== ORPHAN PAGES ({}) ==='.format(len(orphans)))
for o in sorted(orphans):
    print('  ', o)
