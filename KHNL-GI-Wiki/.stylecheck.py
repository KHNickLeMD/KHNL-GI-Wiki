import os,re
pages={}
for root,d,files in os.walk('wiki'):
    for fn in files:
        if fn.endswith('.md'): pages[os.path.join(root,fn)]=open(os.path.join(root,fn),encoding='utf-8',errors='replace').read()

print("=== Mermaid labels containing literal \\n ===")
n=0
for p,t in pages.items():
    for m in re.finditer(r'```mermaid(.*?)```',t,re.S):
        if '\\n' in m.group(1):
            print("  ",p); n+=1; break
print("  total:",n)

print("=== ToC indentation not a multiple of 2 / flat ToC ===")
for p,t in pages.items():
    m=re.search(r'^## Contents\s*\n(.*?)(?=\n## |\Z)',t,re.S|re.M)
    if not m: continue
    lines=[l for l in m.group(1).split('\n') if l.strip().startswith('-')]
    if not lines: continue
    bad=[l for l in lines if (len(l)-len(l.lstrip(' ')))%2]
    has_sub=bool(re.search(r'^### ',t,re.M))
    flat = has_sub and all((len(l)-len(l.lstrip(' ')))==0 for l in lines)
    hashlabel=[l for l in lines if re.search(r'\[\[#[^\]]*\|\s*#',l)]
    if bad or flat or hashlabel:
        print("  ",p,"odd-indent" if bad else "","flat-despite-subsections" if flat else "","hash-in-label" if hashlabel else "")

print("=== See Also NOT a single comma-separated line ===")
for p,t in pages.items():
    if '/sources/' in p: continue
    m=re.search(r'^## See Also\s*\n(.*?)(?=\n---|\n## |\Z)',t,re.S|re.M)
    if not m: continue
    body=[l for l in m.group(1).split('\n') if l.strip()]
    if len(body)>1 or (body and body[0].lstrip().startswith('-')):
        print("  ",p,"->",len(body),"lines |",body[0][:70] if body else "")

print("=== See Also containing a source slug ===")
srcs={f[:-3] for f in os.listdir('wiki/sources') if f.endswith('.md')}
for p,t in pages.items():
    if '/sources/' in p: continue
    m=re.search(r'^## See Also\s*\n(.*?)(?=\n---|\n## |\Z)',t,re.S|re.M)
    if not m: continue
    hits=[s for s in re.findall(r'\[\[([^\]\|]+)',m.group(1)) if s.rstrip('\\') in srcs]
    if hits: print("  ",p,"->",hits)

print("=== deprecated See-Also headings ===")
for p,t in pages.items():
    for h in ('## Related Pages','## Cross-References','## Related Wiki Pages','## Related'):
        if re.search(r'^'+re.escape(h)+r'\s*$',t,re.M): print("  ",p,h)

print("=== frontmatter sources: vs ## Sources mismatch ===")
n=0
for p,t in pages.items():
    if '/sources/' in p or p.endswith(('index.md','log.md','overview.md')): continue
    fm=re.search(r'^---\n(.*?)\n---',t,re.S)
    if not fm: continue
    sm=re.search(r'^sources:\s*\[(.*?)\]\s*$',fm.group(1),re.M|re.S)
    if not sm: continue
    front={x.strip().strip('"\'') for x in sm.group(1).split(',') if x.strip()}
    body=re.search(r'^## Sources\s*\n(.*)$',t,re.S|re.M)
    blist={s.rstrip('\\') for s in re.findall(r'\[\[([^\]\|]+)',body.group(1))} if body else set()
    if front!=blist:
        n+=1
        if n<=25: print("  ",p,"| only-frontmatter:",sorted(front-blist),"| only-body:",sorted(blist-front))
print("  total mismatches:",n)
