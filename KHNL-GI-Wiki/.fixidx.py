import re

FIX = {
    'ulcerative-colitis': 15,
    'pouchitis': 6,
    'postinfectious-ibs': 3,
    'nafld-masld': 9,
    'budd-chiari-syndrome': 3,
    'acute-lower-gi-bleeding': 3,
    'ercp': 11,
    'antibiotic-prophylaxis-cirrhosis': 5,
    'hcc-surveillance': 3,
}

path = 'wiki/index.md'
lines = open(path, encoding='utf-8').read().split('\n')
out = []
hits = 0
for line in lines:
    m = re.match(r'^\s*-\s*\[\[([^\]|#]+?)\]\]', line)
    if m and m.group(1) in FIX:
        slug = m.group(1)
        new, n = re.subn(r'\((\d+) sources?\)\s*$',
                         lambda mm: '(%d source%s)' % (FIX[slug], '' if FIX[slug] == 1 else 's'),
                         line)
        if n:
            old = re.search(r'\((\d+) sources?\)\s*$', line).group(1)
            print('%-34s %s -> %d' % (slug, old, FIX[slug]))
            line = new
            hits += 1
    out.append(line)
open(path, 'w', encoding='utf-8').write('\n'.join(out))
print('lines rewritten:', hits)
