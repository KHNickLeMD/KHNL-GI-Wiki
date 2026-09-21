import os, re, collections
root='/repo/KHNL-GI-Wiki/wiki'
pages={}
for dp,dn,fn in os.walk(root):
    for f in fn:
        if f.endswith('.md'):
            pages.setdefault(f[:-3], os.path.join(dp,f))
link_re=re.compile(r'\[\[([^\]\[#|\\]+?)(?:\\?\|[^\]]*)?\]\]')
inbound=collections.Counter()
broken=collections.defaultdict(list)
for slug,path in pages.items():
    if os.path.basename(path)=='log.md': continue
    txt=open(path,encoding='utf-8').read()
    txt=re.sub(r'```.*?```','',txt,flags=re.S)
    txt=re.sub(r'`[^`]*`','',txt)
    seen=set()
    for m in link_re.finditer(txt):
        t=m.group(1).strip()
        if t.startswith('#') or t.lower().endswith(('.png','.jpg','.jpeg','.gif')): continue
        if t not in pages:
            broken[slug].append(t)
        elif t!=slug:
            seen.add(t)
    for t in seen: inbound[t]+=1
print("TOTAL PAGES:", len(pages))
skip={'index','log','overview','README','needed-sources'}
orph=[s for s in pages if inbound[s]==0 and s not in skip]
print("\n=== ORPHANS (%d) ==="%len(orph))
for s in sorted(orph): print("  ", s, "->", pages[s].replace(root,''))
print("\n=== BROKEN LINKS ===")
tot=set()
for s,ts in sorted(broken.items()):
    u=sorted(set(ts)); tot.update(u)
    print("  ",s,":", ", ".join(u))
print("distinct broken targets:", len(tot))
