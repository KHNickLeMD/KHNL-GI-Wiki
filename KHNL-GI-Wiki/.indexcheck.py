import os,re
pages={}
for root,d,files in os.walk('wiki'):
    for fn in files:
        if fn.endswith('.md'):
            pages[fn[:-3]]=os.path.join(root,fn)
idx=open('wiki/index.md',encoding='utf-8').read()
listed=set(re.findall(r'^- \[\[([^\]\|]+)',idx,re.M))
content=set(pages)-{'index','log'}
print("pages(excl index,log):",len(content),"listed:",len(listed))
print("NOT in index:",sorted(content-listed))
print("in index but no page:",sorted(listed-content))
