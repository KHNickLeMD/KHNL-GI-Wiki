import os, re, glob
STOP=set("the of and for in on a an to with by from at as guideline guidelines clinical practice update cpu consensus statement management diagnosis role society american association college document review evidence summary recommendations part".split())
def toks(s):
    s=s.lower().replace('_',' ').replace('-',' ')
    t=re.findall(r"[a-z]+|\d{4}",s)
    return set(x for x in t if x not in STOP and len(x)>2)

srcs=[]
for p in glob.glob('wiki/sources/*.md'):
    txt=open(p,encoding='utf-8',errors='ignore').read().lower()
    srcs.append((os.path.basename(p), txt, toks(txt[:3000])))

rows=[]
for root,dirs,files in os.walk('raw/GI Guidelines'):
    for f in files:
        if not f.lower().endswith('.pdf'): continue
        base=os.path.splitext(f)[0]
        bt=toks(base)
        yrs=set(re.findall(r'\b(?:19|20)\d{2}\b', base))
        best=(0.0,None)
        for name,txt,st in srcs:
            inter=bt & st
            score=len(inter)/max(1,len(bt))
            if yrs and not (yrs & set(re.findall(r'\b(?:19|20)\d{2}\b', txt[:3000]))):
                score*=0.5
            if score>best[0]: best=(score,name)
        rows.append((best[0], os.path.join(root,f), best[1]))
rows.sort()
un=[r for r in rows if r[0]<0.55]
print("TOTAL guideline PDFs:", len(rows))
print("LIKELY UNINGESTED (score<0.55):", len(un))
for s,p,n in un:
    print("%.2f  %s   ~closest:%s" % (s,p,n))
