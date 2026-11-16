import json,re,sys
d=json.load(open('/cards/dist/khnl-gi-wiki.json'))
notes = d if isinstance(d,list) else d.get('notes',d)
for p in sys.argv[1:]:
    print('===',p)
    for n in notes:
        t=(n.get('text') or '')+' '+(n.get('extra') or '')
        if re.search(p,t,re.I):
            print('  ',n.get('id'),'|',n.get('file'),'|',t[:150].replace('<br>',' / '))
