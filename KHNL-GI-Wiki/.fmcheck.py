import os, re

REQ = ['title', 'category', 'tags', 'created', 'updated', 'sources']
EXPECT = {
    'wiki/1-disease-scripts': 'disease-script',
    'wiki/2-diagnostic-schemas': 'diagnostic-schema',
    'wiki/3-general-gi-procedures': 'general-procedure',
    'wiki/4-advanced-gi-procedures': 'advanced-procedure',
    'wiki/5-meds': 'med',
    'wiki/7-concepts': 'concept',
    'wiki/sources': 'source',
    'wiki/syntheses': 'synthesis',
}

problems = []
for dp, _, fns in os.walk('wiki'):
    for fn in sorted(fns):
        if not fn.endswith('.md'):
            continue
        path = os.path.join(dp, fn)
        if fn in ('index.md', 'log.md', 'overview.md'):
            continue
        txt = open(path, encoding='utf-8').read()
        m = re.match(r'^---\n(.*?)\n---\n', txt, re.S)
        if not m:
            problems.append((path, 'NO FRONTMATTER'))
            continue
        fm = m.group(1)
        keys = dict(re.findall(r'^([a-z]+):\s*(.*)$', fm, re.M))
        for k in REQ:
            if k not in keys:
                problems.append((path, 'missing frontmatter key: ' + k))
        for folder, cat in EXPECT.items():
            if path.startswith(folder) and keys.get('category', '').strip() != cat:
                problems.append((path, 'category=%r expected %r' % (keys.get('category'), cat)))
        for k in ('created', 'updated'):
            v = keys.get(k, '').strip()
            if v and not re.fullmatch(r'\d{4}-\d{2}-\d{2}', v):
                problems.append((path, '%s not ISO date: %r' % (k, v)))
        # See Also / Sources sections on non-source pages
        if not path.startswith('wiki/sources'):
            body = txt[m.end():]
            if len(body) > 1500:
                if '## See Also' not in body:
                    problems.append((path, 'missing "## See Also"'))
                if '## Sources' not in body:
                    problems.append((path, 'missing "## Sources"'))
                for bad in ('## Related Pages', '## Cross-References', '## Related Wiki Pages'):
                    if bad in body:
                        problems.append((path, 'nonstandard section ' + bad))

for p, msg in problems:
    print("%-72s %s" % (p, msg))
print("\nTOTAL PROBLEMS:", len(problems))
