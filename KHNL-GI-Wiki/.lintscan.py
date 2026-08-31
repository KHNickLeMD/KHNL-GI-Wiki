import os, re

allmd = []
for root, d, fs in os.walk('wiki'):
    for f in fs:
        if f.endswith('.md'):
            allmd.append(os.path.join(root, f))

def parse_fm(p):
    t = open(p, encoding='utf-8', errors='ignore').read()
    if not t.startswith('---'):
        return {}, t
    end = t.find('\n---', 3)
    if end < 0:
        return {}, t
    block = t[3:end]
    body = t[end + 4:]
    out, key = {}, None
    for line in block.split('\n'):
        if not line.strip():
            continue
        m = re.match(r'^(\w+):\s*(.*)$', line)
        if m:
            key = m.group(1)
            v = m.group(2).strip()
            if v.startswith('[') and v.endswith(']'):
                out[key] = [x.strip().strip('"\'') for x in v[1:-1].split(',') if x.strip()]
            elif v:
                out[key] = v.strip('"\'')
            else:
                out[key] = []
        elif line.lstrip().startswith('- ') and key:
            if not isinstance(out.get(key), list):
                out[key] = []
            out[key].append(line.lstrip()[2:].strip().strip('"\''))
    return out, body

skip = {'wiki/log.md', 'wiki/index.md'}
FM = {p: parse_fm(p) for p in allmd}

print('=== FRONTMATTER DEFECTS ===')
n = 0
for p in sorted(allmd):
    if p in skip:
        continue
    f, _ = FM[p]
    if not f:
        print(p, '-> no frontmatter'); n += 1; continue
    for k in ('title', 'category', 'created', 'updated'):
        if not f.get(k):
            print(p, '-> missing', k); n += 1
    for k in ('created', 'updated'):
        v = f.get(k)
        if isinstance(v, str) and not re.fullmatch(r'\d{4}-\d{2}-\d{2}', v):
            print(p, '-> bad', k, repr(v)); n += 1
print('defects:', n)

print()
print('=== STALEST 14 ENTITY PAGES ===')
ent = [p for p in allmd if p not in skip and '/sources/' not in p]
for d, p in sorted((FM[p][0].get('updated', ''), p) for p in ent)[:14]:
    print(d, p)

print()
print('=== INDEX source counts vs frontmatter ===')
idx = open('wiki/index.md', encoding='utf-8', errors='ignore').read()
by_slug = {os.path.basename(p)[:-3]: p for p in allmd}
bad = []
for m in re.finditer(r'^\s*-\s*\[\[([^\]|#]+?)(?:\\?\|[^\]]*)?\]\]\s*—\s*(.*?)$', idx, re.M):
    slug, desc = m.group(1), m.group(2)
    cm = re.search(r'\((\d+)\s+sources?\)', desc)
    if not cm or slug not in by_slug:
        continue
    srcs = FM[by_slug[slug]][0].get('sources', [])
    if not isinstance(srcs, list):
        srcs = [srcs]
    srcs = [s for s in srcs if s]
    if int(cm.group(1)) != len(srcs):
        bad.append((slug, cm.group(1), len(srcs)))
for s, a, b in bad:
    print('%-48s index=%s actual=%d' % (s, a, b))
print('mismatched:', len(bad))

print()
print('=== sources: entries pointing at nonexistent source pages ===')
n = 0
for p in sorted(allmd):
    if p in skip:
        continue
    srcs = FM[p][0].get('sources', [])
    if not isinstance(srcs, list):
        srcs = [srcs]
    for s in srcs:
        if s and not os.path.exists('wiki/sources/%s.md' % s):
            print(p, '->', s); n += 1
print('phantom source refs:', n)

print()
print('=== ## Sources section slugs vs frontmatter sources ===')
n = 0
for p in sorted(allmd):
    if p in skip or '/sources/' in p:
        continue
    f, body = FM[p]
    if 'Stub — to be expanded' in body or '## Sources' not in body:
        continue
    sec = body.split('## Sources', 1)[1]
    listed = set(re.findall(r'\[\[([^\]|#]+?)(?:\\?\|[^\]]*)?\]\]', sec))
    front = set(x for x in (f.get('sources') or []) if x)
    if listed != front:
        print(p)
        if front - listed:
            print('   in frontmatter, not in ## Sources:', sorted(front - listed))
        if listed - front:
            print('   in ## Sources, not in frontmatter:', sorted(listed - front))
        n += 1
print('mismatched:', n)
