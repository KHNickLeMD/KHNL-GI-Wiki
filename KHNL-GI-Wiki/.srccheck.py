import os, re

srcslugs = {fn[:-3] for fn in os.listdir('wiki/sources') if fn.endswith('.md')}
problems = []
for dp, _, fns in os.walk('wiki'):
    for fn in sorted(fns):
        if not fn.endswith('.md') or fn in ('index.md', 'log.md', 'overview.md'):
            continue
        path = os.path.join(dp, fn)
        if path.startswith('wiki/sources'):
            continue
        txt = open(path, encoding='utf-8').read()
        m = re.match(r'^---\n(.*?)\n---\n', txt, re.S)
        if not m:
            continue
        fmm = re.search(r'^sources:\s*\[(.*?)\]\s*$', m.group(1), re.M)
        fm = set()
        if fmm:
            fm = {s.strip() for s in fmm.group(1).split(',') if s.strip()}
        body = txt[m.end():]
        sec = re.search(r'^## Sources\s*\n(.*?)(?=\n## |\Z)', body, re.S | re.M)
        listed = set()
        if sec:
            for mm in re.finditer(r'\[\[([^\]\|]+)(?:\\?\|[^\]]*)?\]\]', sec.group(1)):
                listed.add(mm.group(1).strip().rstrip('\\'))
        # source slugs referenced that don't exist
        for s in (fm | listed):
            if s not in srcslugs:
                problems.append((path, 'NONEXISTENT source slug: ' + s))
        if sec:
            only_fm = fm - listed
            only_sec = listed - fm
            if only_fm:
                problems.append((path, 'in frontmatter but not in ## Sources: ' + ', '.join(sorted(only_fm))))
            if only_sec:
                problems.append((path, 'in ## Sources but not in frontmatter: ' + ', '.join(sorted(only_sec))))
        # See Also must not contain source slugs
        sa = re.search(r'^## See Also\s*\n(.*?)(?=\n## |\n---|\Z)', body, re.S | re.M)
        if sa:
            for mm in re.finditer(r'\[\[([^\]\|]+)(?:\\?\|[^\]]*)?\]\]', sa.group(1)):
                if mm.group(1).strip().rstrip('\\') in srcslugs:
                    problems.append((path, 'SOURCE SLUG IN SEE ALSO: ' + mm.group(1)))

for p, msg in problems:
    print("%-70s %s" % (p, msg))
print("\nTOTAL:", len(problems))
