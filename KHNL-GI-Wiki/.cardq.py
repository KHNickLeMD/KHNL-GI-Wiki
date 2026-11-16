import os,re
WIKI='wiki'; CARDS='/cards'
SKIP={'index.md','log.md','overview.md','needed-sources.md','README.md'}
DIRS=('1-disease-scripts','2-diagnostic-schemas','3-general-gi-procedures','4-advanced-gi-procedures','5-meds','6-anatomy','7-concepts','syntheses')
nocard=[]; stale=[]
for root,dirs,files in os.walk(WIKI):
    rel=os.path.relpath(root,WIKI)
    if rel.startswith('sources'): continue
    for f in files:
        if not f.endswith('.md') or f in SKIP: continue
        rp=os.path.normpath(os.path.join(rel,f)) if rel!='.' else f
        if rp.split(os.sep)[0] not in DIRS: continue
        s=open(os.path.join(root,f)).read()
        m=re.search(r'^updated:\s*(\S+)',s,re.M)
        pu=m.group(1).strip('"') if m else '?'
        srcs=re.search(r'^sources:\s*\[(.*?)\]',s,re.M|re.S)
        srcl=[x.strip().strip('"\'') for x in srcs.group(1).split(',')] if srcs else []
        srcl=[x for x in srcl if x]
        cp=os.path.join(CARDS,rp)
        if not os.path.exists(cp):
            nocard.append((rp,pu,srcl))
        else:
            cs=open(cp).read()
            cm=re.search(r'^page_updated:\s*(\S+)',cs,re.M)
            cu=cm.group(1) if cm else None
            if cu and cu < pu: stale.append((rp,pu,cu,srcl))
print("NO CARD FILE:",len(nocard))
for r,pu,sl in sorted(nocard,key=lambda x:x[1],reverse=True):
    print("  %s  %s  :: %s"%(pu,r,",".join(sl[:5])))
print()
print("STALE:",len(stale))
for r,pu,cu,sl in sorted(stale,key=lambda x:x[1],reverse=True):
    print("  page %s cards %s  %s  :: %s"%(pu,cu,r,",".join(sl[:5])))
