import os, re, collections

pages = {}          # slug -> path
for dp, dns, fns in os.walk('wiki'):
    for f in fns:
        if f.endswith('.md'):
            pages[f[:-3]] = os.path.join(dp, f)

META = {'index', 'log', 'overview', 'needed-sources', 'README'}

def strip_code(t):
    t = re.sub(r'```.*?```', '', t, flags=re.S)
    t = re.sub(r'`[^`]*`', '', t)
    return t

LINK = re.compile(r'(?<!!)\[\[([^\]\|#]+)(?:\\?\|[^\]]*)?\]\]')

broken = collections.Counter()
inbound = collections.Counter()
stubs = []
no_seealso = []
no_sources = []
badpipe = []
updated = {}

for slug, path in pages.items():
    raw = open(path, encoding='utf-8', errors='replace').read()
    t = strip_code(raw)
    m = re.search(r'^updated:\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})', raw, re.M)
    if m:
        updated[slug] = m.group(1)
    if '*Stub — to be expanded.*' in raw or '*Stub - to be expanded.*' in raw:
        stubs.append(slug)
    for tgt in LINK.findall(t):
        tgt = tgt.strip().rstrip('\\').strip()
        if tgt.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
            continue
        base = os.path.basename(tgt)
        if base not in pages:
            if slug != 'needed-sources':
                broken[(slug, base)] += 1
        elif base != slug:
            inbound[base] += 1
    if slug not in META:
        if '## See Also' not in raw:
            no_seealso.append(slug)
        if '## Sources' not in raw:
            no_sources.append(slug)
    # unescaped alias pipe inside a table row
    for line in t.splitlines():
        if re.match(r'^\s*\|', line) and re.search(r'\[\[[^\]]*[^\\]\|', line):
            badpipe.append((slug, line.strip()[:90]))

orphans = [s for s in pages if s not in META and inbound[s] == 0]
src_orphans = [s for s in orphans if pages[s].startswith('wiki/sources')]
other_orphans = [s for s in orphans if not pages[s].startswith('wiki/sources')]
near = [(s, inbound[s]) for s in pages
        if s not in META and 0 < inbound[s] <= 2 and not pages[s].startswith('wiki/sources')]

print('PAGES:', len(pages))
print('BROKEN LINKS:', sum(broken.values()))
for (s, t), n in sorted(broken.items()):
    print('   ', s, '->', t, '' if n == 1 else '(x%d)' % n)
print('STUBS:', stubs or 'none')
print('MISSING See Also:', no_seealso or 'none')
print('MISSING Sources:', no_sources or 'none')
print('UNESCAPED ALIAS PIPES:', len(badpipe))
for s, l in badpipe:
    print('   ', s, '|', l)
print('SOURCE-PAGE ORPHANS:', src_orphans or 'none')
print('NON-SOURCE ORPHANS:', other_orphans or 'none')
print('NEAR-ORPHANS (1-2 inbound, non-source):', len(near))
for s, n in sorted(near, key=lambda x: x[1]):
    print('   ', s, n)
print()
print('=== 12 STALEST PAGES by updated: ===')
for s, d in sorted(updated.items(), key=lambda x: x[1])[:12]:
    print('   ', d, s, '  ', pages[s])
print('PAGES WITH NO updated:', [s for s in pages if s not in updated] or 'none')
