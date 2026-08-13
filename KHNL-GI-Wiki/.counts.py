import os

folders = {
    'sources': 'wiki/sources',
    'disease scripts': 'wiki/1-disease-scripts',
    'diagnostic schemas': 'wiki/2-diagnostic-schemas',
    'general procedures': 'wiki/3-general-gi-procedures',
    'advanced procedures': 'wiki/4-advanced-gi-procedures',
    'meds': 'wiki/5-meds',
    'concepts': 'wiki/7-concepts',
    'syntheses': 'wiki/syntheses',
}
for name, path in folders.items():
    n = 0
    for dp, _, fns in os.walk(path):
        n += sum(1 for f in fns if f.endswith('.md'))
    print("%-22s %d" % (name, n))
