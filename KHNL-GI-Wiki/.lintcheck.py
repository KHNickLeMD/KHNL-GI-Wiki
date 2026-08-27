import os,re,collections

pages={}
for root,d,files in os.walk('wiki'):
    for fn in files:
        if fn.endswith('.md'):
            pages[fn[:-3]]=os.path.join(root,fn)
print("total pages:",len(pages))

txt={k:open(v,encoding='utf-8',errors='replace').read() for k,v in pages.items()}

link_re=re.compile(r'\[\[([^\]\|#\\]+)\\?(?:\|[^\]]*)?\]\]')
broken=collections.defaultdict(list)
inbound=collections.Counter()
for k,t in txt.items():
    t2=re.sub(r'```.*?```','',t,flags=re.S)
    t2=re.sub(r'`[^`]*`','',t2)
    for m in link_re.finditer(t2):
        tgt=m.group(1).strip()
        if tgt.lower().endswith(('.png','.jpg','.jpeg','.gif','.svg')): continue
        if tgt.startswith('#'): continue
        if tgt not in pages: broken[k].append(tgt)
        elif tgt!=k: inbound[tgt]+=1

print("pages with broken links:",len(broken))
for k,v in list(broken.items())[:40]:
    print("   ",k,"->",sorted(set(v)))

skip={'index','log','overview','README'}
orph=[k for k in pages if inbound[k]==0 and k not in skip]
print("orphans:",len(orph))
print("   ",orph[:60])

stubs=[k for k,t in txt.items() if 'Stub' in t and 'to be expanded' in t]
print("stubs:",len(stubs),stubs)

bad=[]
for k,t in txt.items():
    for i,line in enumerate(t.split('\n'),1):
        if line.strip().startswith('|') and re.search(r'\[\[[^\]]*[^\\]\|',line):
            bad.append((k,i,line[:110]))
print("unescaped alias pipes in tables:",len(bad))
for b in bad[:25]: print("   ",b)

rows=[]
for k,t in txt.items():
    if k in skip: continue
    m=re.search(r'^---\n(.*?)\n---',t,re.S)
    if not m:
        rows.append(('NO-FRONTMATTER',k,pages[k])); continue
    fm=m.group(1)
    up=re.search(r'^updated:\s*(\S+)',fm,re.M)
    rows.append(((up.group(1) if up else 'NONE'),k,pages[k]))
rows.sort()
print("--- 15 stalest pages ---")
for r in rows[:15]: print("   ",r)

print("--- empty sources: frontmatter (non-source, non-stub) ---")
for k,t in txt.items():
    if k in skip or '/sources/' in pages[k]: continue
    if re.search(r'^sources:\s*\[\s*\]\s*$',t,re.M) and 'to be expanded' not in t:
        print("   ",pages[k])

print("--- disease scripts lacking a *Workup: see [[schema]].* pointer at top of ## Differential Diagnosis ---")
miss=[]
for k,t in txt.items():
    if '/1-disease-scripts/' not in pages[k]: continue
    m=re.search(r'^## Differential Diagnosis\s*\n+(.{0,200})',t,re.S|re.M)
    if not m:
        miss.append((k,'NO-DDX-SECTION')); continue
    head=m.group(1).lstrip()
    if not (head.startswith('*') and 'see [[' in head[:180].lower()):
        miss.append((k,head.split('\n')[0][:70]))
print("   total:",len(miss))
for k,v in sorted(miss): print("   ",k,"|",v)

print("--- missing ## See Also or ## Sources ---")
n=0
for k,t in txt.items():
    if k in skip or '/sources/' in pages[k]: continue
    miss=[]
    if '## See Also' not in t: miss.append('SeeAlso')
    if '## Sources' not in t: miss.append('Sources')
    if miss:
        n+=1
        if n<=40: print("   ",pages[k],miss)
print("   total:",n)
