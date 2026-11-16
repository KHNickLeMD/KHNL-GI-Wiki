#!/usr/bin/env python3
"""Mechanical source-fidelity check (2026-11-15) — does every number and grade on a wiki page
exist in the raw source it cites, next to the passage that says the same thing?

  fidelity-check.py <page.md> [...]     check these pages (source pages or topic pages)
  fidelity-check.py --evidence <page>   also print the matched source passage for every flag
  fidelity-check.py --rank [N]          every topic page, most ABSENT flags first (review priority)
  fidelity-check.py --sources [N]       every source page, most ABSENT flags first
  fidelity-check.py --unmapped          source pages with no usable `raw:` frontmatter

How it works. A source page names its file in frontmatter (`raw: "GI Guidelines/ACG/x.pdf"`, a
list for several files). For each line of a page that carries a checkable token — a percentage,
a number with a unit, a decimal, an integer >= 10, a comparison, a GRADE pair — the script finds
the best-matching passage in the cited source (IDF-weighted word overlap over sliding windows of
the pdftotext output) and looks for each token near that passage.

Flags, worst first:
  ABSENT   the token is in none of the page's sources            -> invented, mistyped or derived
  OTHER    not in the source cited on the line, but in another   -> wrong attribution
  FAR      in the cited source, but not near the matching passage -> spliced from elsewhere, or
           the line condenses distant passages (check it)
  SIGN     the line has a comparison sign (>= <= < >) — pdftotext drops these; the script prints
           the PDF page to render and read (pdftoppm -r 110 -f N -l N -png file.pdf out)
  NOMATCH  no passage in the cited source resembles the line at all -> possible invention

This is a net for invention, splicing and misattribution. It cannot judge meaning: an inverted
or narrowed recommendation built from the source's own numbers passes. Every flag is a line a
human or a verifier agent must read against the source; zero flags is necessary, not sufficient.
Exit status: 0 always (report tool); --strict exits 1 when any ABSENT/OTHER/NOMATCH remains."""
import glob, hashlib, math, os, re, subprocess, sys, tempfile
from collections import Counter, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..', '..', 'KHNL-GI-Wiki'))
WIKI = os.path.join(ROOT, 'wiki')
SRC = os.path.join(WIKI, 'sources')
RAW_DIRS = [d for d in [*os.environ.get('RAW_DIR', '').split(os.pathsep), os.path.join(ROOT, 'raw'),
                        '/mnt/LeStorage/Drive/KHNL/##3Resources/#KHNL GI Wiki/raw',
                        os.path.expanduser('~/Desktop/KHNL Drive/##3Resources/#KHNL GI Wiki/raw')] if d]
CACHE = os.path.join(tempfile.gettempdir(), 'fidelity-cache')
SKIP = {'index.md', 'log.md', 'overview.md', 'needed-sources.md'}
WIN, STRIDE, NEAR = 80, 25, 90        # window words, stride, extra words each side for "near"
CTX, FAR_BELOW, GRADE_BELOW = 50, 0.10, 0.0   # words each side of a token; context share below this = FAR (tuned on 36 planted errors, 2026-11-15: higher thresholds flag ~40% of all lines)

STOP = set("""the a an of and or in on for with to from by at as is are be been was were this that these
those it its not no than then when who whom which while into per via vs versus also may can should
would could has have had do does did after before during over under between within without each
any all more most less least other such only both either neither same there their they them if but
so we our us you your he she his her use used using see table figure source sources page pages
patients patient study studies trial trials data evidence guideline guidelines recommendation
recommendations statement""".split())

UNITS = {  # canonical -> regex alternatives as they appear in sources
    'mg': r'mg|milligrams?', 'g': r'g|grams?|gm', 'kg': r'kg|kilograms?', 'mcg': r'mcg|µg|μg|ug|micrograms?|mg',   # pdftotext often prints µg as mg
    'ml': r'ml|millilit(?:er|re)s?|cc', 'l': r'l|lit(?:er|re)s?', 'mm': r'mm|millimet(?:er|re)s?',
    'cm': r'cm|centimet(?:er|re)s?', 'iu': r'iu|units?|u', 'mmhg': r'mm\s?hg', 'kpa': r'kpa',
    'week': r'w(?:ee)?ks?|wk', 'month': r'mo(?:nth)?s?', 'year': r'y(?:ea)?rs?|y', 'day': r'd(?:ay)?s?',
    'hour': r'h(?:ou)?rs?|h', 'minute': r'min(?:ute)?s?', 'fr': r'fr(?:ench)?', 'j': r'j(?:oules?)?',
    'w': r'w(?:atts?)?', 'ng': r'ng', 'meq': r'meq', 'mmol': r'mmol', 'µmol': r'[µμu]mol', 'cells': r'cells?',
    'eos': r'eos(?:inophils)?', 'kcal': r'kcal', 'mosm': r'mosm', 'gy': r'gy', 'uln': r'(?:x|×)?\s?uln',
}
UNIT_OF = {}
for canon, alt in UNITS.items():
    for a in re.sub(r'\(\?:|\)|\?|\\s|\[|\]', ' ', alt).replace('|', ' ').split():
        UNIT_OF.setdefault(a.lower(), canon)
for k in ('mg', 'g', 'kg', 'mcg', 'µg', 'μg', 'ml', 'l', 'mm', 'cm', 'iu', 'units', 'unit', 'u', 'mmhg', 'kpa',
          'weeks', 'week', 'wk', 'wks', 'months', 'month', 'mo', 'years', 'year', 'yr', 'yrs', 'y', 'days', 'day',
          'd', 'hours', 'hour', 'h', 'hr', 'hrs', 'min', 'minutes', 'minute', 'fr', 'j', 'w', 'ng', 'meq', 'mmol',
          'µmol', 'μmol', 'cells', 'kcal', 'gy'):
    UNIT_OF.setdefault(k, next((c for c, alt in UNITS.items() if re.fullmatch(alt, k, re.I)), k))
UNIT_WORDS = '|'.join(sorted(map(re.escape, UNIT_OF), key=len, reverse=True))
NUM = r'\d+(?:\.\d+)?'
LABEL_BEFORE = re.compile(r'(?:\b(?:recs?|recommendations?|statements?|tables?|figures?|figs?|bpa|advice|'
                          r'questions?|q|steps?|types?|grades?|class|stages?|zones?|phases?|levels?|loe|kq|pico|'
                          r'criteri(?:on|a)|items?|sections?|box|panel|rome|chicago|li-rads|lr|forrest|paris|'
                          r'child-pugh|ctp|asa|ecog|nyha|version|v|no\.?|#|ref|refs|references?|segments?|category|'
                          r'tier|line|cohort|group|arm|week|day|month|year|cycle|dose|visit)\s*[-–]?\s*)$', re.I)
GRADE = re.compile(r'\b(strong|conditional|weak)\b[^|\n]{0,40}?\b(very[\s-]low|low|moderate|high)\b', re.I)


def norm(s):
    s = s.replace('­', '').replace(' ', ' ').replace(' ', ' ').replace(' ', ' ')
    s = re.sub(r'[‐-―−]', '-', s)
    s = re.sub(r'(?<=\d)[·∙](?=\d)', '.', s)                 # Lancet-style decimal point
    s = re.sub(r'(?<=\d),(?=\d{3}(?!\d))', '', s)            # thousands separators
    s = re.sub(r'(\w)-\n\s*(\w)', r'\1\2', s)                # hyphenated line breaks
    return s


def fm(src):
    m = re.match(r'^---\n([\s\S]*?)\n---\n', src)
    if not m:
        return {}, src
    out, key = {}, None
    for line in m[1].split('\n'):
        kv = re.match(r'^(\w+):\s*(.*)$', line)
        if kv:
            key, val = kv[1], kv[2].strip()
            if val.startswith('[') and val.endswith(']'):
                out[key] = [x.strip().strip('"\'') for x in val[1:-1].split(',') if x.strip()]
            else:
                out[key] = val.strip('"\'')
        elif key and re.match(r'^\s+-\s+', line):
            if not isinstance(out.get(key), list):
                out[key] = []
            out[key].append(re.sub(r'^\s+-\s+', '', line).strip().strip('"\''))
    return out, src[m.end():]


def find_raw(rel):
    for d in RAW_DIRS:
        p = os.path.join(d, rel)
        if os.path.isfile(p):
            return p
    return None


def raw_text(path):
    """-> list of page strings (normalised). PDFs via pdftotext -layout, text files as one page."""
    ext = os.path.splitext(path)[1].lower()
    if ext in ('.md', '.txt'):
        return [norm(open(path, encoding='utf8', errors='replace').read())]
    if ext != '.pdf':
        return None
    os.makedirs(CACHE, exist_ok=True)
    key = hashlib.sha1(f'{path}:{os.path.getmtime(path)}:{os.path.getsize(path)}'.encode()).hexdigest()
    c = os.path.join(CACHE, key + '.txt')
    if not os.path.exists(c):
        r = subprocess.run(['pdftotext', '-layout', path, c], capture_output=True)
        if r.returncode != 0 or not os.path.exists(c):
            return None
    return [norm(p) for p in open(c, encoding='utf8', errors='replace').read().split('\f')]


class Source:
    """One source slug -> its raw text, word index and sliding windows."""
    cache = {}

    def __init__(self, slug):
        self.slug, self.ok, self.why, self.files = slug, False, '', []
        p = os.path.join(SRC, slug + '.md')
        if not os.path.exists(p):
            self.why = 'not a source page'
            return
        meta, _ = fm(open(p, encoding='utf8').read())
        raws = meta.get('raw')
        raws = [raws] if isinstance(raws, str) and raws else (raws or [])
        if not raws:
            self.why = 'no raw: in frontmatter'
            return
        words, pages = [], []
        for rel in raws:
            path = find_raw(rel)
            if not path:
                self.why = f'raw file not found: {rel}'
                continue
            txt = raw_text(path)
            if txt is None:
                self.why = f'unreadable (not PDF/text): {rel}'
                continue
            self.files.append(path)
            for i, page in enumerate(txt, 1):
                for w in re.findall(r'\S+', page):
                    words.append(w)
                    pages.append((len(self.files) - 1, i))
        if len(words) < 200:
            self.why = self.why or 'source text too short (scanned PDF?)'
            return
        self.ok, self.words, self.pages = True, words, pages
        self.low = [re.sub(r'[^a-z0-9.%<>=≥≤/+-]', '', w.lower()) for w in words]
        self.text = ' '.join(words)
        self.index = defaultdict(set)
        self.nwin = max(1, (len(words) - WIN) // STRIDE + 2)
        self.parts, self.numpos = [], defaultdict(list)
        for i, w in enumerate(words):
            w = re.sub(r'(?<![\d.])\.(?=\d)', '0.', w)      # journal style ".72" -> "0.72"
            ps = re.findall(r'[a-z]{3,}|\d+(?:\.\d+)?', w.lower())
            self.parts.append(ps)
            for x in ps:
                if x[0].isdigit():
                    self.numpos[x].append(i)
        for wi in range(self.nwin):
            for ps in self.parts[wi * STRIDE: wi * STRIDE + WIN]:
                for part in ps:
                    self.index[part].add(wi)
        self.df = Counter()
        for part, wins in self.index.items():
            self.df[part] = len(wins)

    def weight(self, term):
        return math.log((self.nwin + 1) / (self.df.get(term, 0) + 1)) + 0.2

    def context(self, tok, terms):
        """best share (0..1) of the line's words found within CTX words of any place the token
        occurs in this source; None if the token occurs nowhere."""
        words = [t for t in terms if not t[0].isdigit()]
        total = sum(self.weight(t) for t in words) or 1.0
        best = None
        for pos in self.numpos.get(tok[0], ()):
            if not has_token(' '.join(self.words[pos: pos + 5]), tok):
                continue
            seen = set()
            for ps in self.parts[max(0, pos - CTX): pos + CTX]:
                seen.update(ps)
            sc = sum(self.weight(t) for t in words if t in seen) / total
            if best is None or sc > best[0]:
                best = (sc, pos)
        return best

    def grade_context(self, pat, terms):
        words = [t for t in terms if not t[0].isdigit()]
        total = sum(self.weight(t) for t in words) or 1.0
        best = None
        for m in pat.finditer(self.text):
            pos = self.text.count(' ', 0, m.start())
            seen = set()
            for ps in self.parts[max(0, pos - 2 * CTX): pos + CTX]:
                seen.update(ps)
            sc = sum(self.weight(t) for t in words if t in seen) / total
            if best is None or sc > best[0]:
                best = (sc, pos)
        return best

    def around(self, pos, pad=60):
        a, b = max(0, pos - pad), min(len(self.words), pos + pad)
        fi, pg = self.pages[min(pos, len(self.pages) - 1)]
        return ' '.join(self.words[a:b]), f'{os.path.basename(self.files[fi])} p.{pg}'

    @classmethod
    def get(cls, slug):
        if slug not in cls.cache:
            cls.cache[slug] = cls(slug)
        return cls.cache[slug]

    def locate(self, terms):
        """best window for a bag of terms -> (score 0..1, start word, end word)"""
        if not terms:
            return 0.0, 0, 0
        score, total = Counter(), 0.0
        for t in terms:
            hits = self.index.get(t)
            w = math.log((self.nwin + 1) / (len(hits) + 1)) + 0.2 if hits else math.log(self.nwin + 1) + 0.2
            if re.match(r'\d', t):
                w *= 1.5
            total += w
            for wi in hits or ():
                score[wi] += w
        if not score:
            return 0.0, 0, 0
        wi, s = max(score.items(), key=lambda kv: kv[1])
        return s / total, wi * STRIDE, min(len(self.words), wi * STRIDE + WIN)

    def span(self, a, b, pad=NEAR):
        a, b = max(0, a - pad), min(len(self.words), b + pad)
        return ' '.join(self.words[a:b]), self.pages[min(a + pad, len(self.pages) - 1)]


def has_token(text, tok):
    num, unit, kind = tok
    # Elsevier PDFs print signs as other glyphs in the text layer: ">98%" -> ".98%", "≥4" -> "$4",
    # "<.001" -> ",.001", "=" -> "Z"; and journal style drops the leading zero (".72"). So a
    # leading "." may be a sign or a decimal point: accept both readings.
    alt = re.sub(r'(?<![\d.])\.(?=\d)', '0.', text)
    # lenient on what follows: pdftotext glues reference superscripts on ("6595).52", "1000,51")
    pat = r'(?<!\d)(?<!\d\.)' + re.escape(num) + (r'(?!\d)' if '.' in num else r'(?!\d|\.\d(?!\d?\b))')
    if '.' in num:
        return re.search(pat, text) is not None or re.search(pat, alt) is not None
    if kind == 'pct':
        if re.search(pat + r'(?:\s*%|[^%\n]{0,14}%)', text):
            return True
        # tables print the % in the header only: accept "(18)" or a free-standing cell value
        return re.search(r'\(' + re.escape(num) + r'\)', text) is not None or \
            (float(num) >= 10 and re.search(r'(?<![\w.,/-])' + re.escape(num) + r'(?![\w.,/-])', text) is not None)
    if unit and float(num) < 10 and '.' not in num:
        return re.search(pat + r'\s*-?\s*(?:' + UNITS.get(unit, re.escape(unit)) + r')\b', text, re.I) is not None \
            or re.search(pat + r'\s*(?:to|-|or)\s*' + NUM + r'\s*-?\s*(?:' + UNITS.get(unit, re.escape(unit)) + r')\b', text, re.I) is not None
    return re.search(pat, text) is not None


def clean(line):
    line = re.sub(r'!\[\[[^\]]*\]\]|!\[[^\]]*\]\([^)]*\)', ' ', line)           # embeds
    line = re.sub(r'\[\[([^\]|\\]+)(?:\\?\|([^\]]+))?\]\]', lambda m: m[2] or ' ', line)  # links -> alias
    line = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', line)
    line = re.sub(r'https?://\S+', ' ', line)
    line = re.sub(r'<br\s*/?>', ' ', line)
    return norm(re.sub(r'[*_`]', '', line))


def tokens(text):
    out = []
    for m in re.finditer(r'(?<![\w.])(' + NUM + r')(?![\d])', text):
        num = m[1]
        before, after = text[max(0, m.start() - 24): m.start()], text[m.end(): m.end() + 14]
        if LABEL_BEFORE.search(before):
            continue
        um = re.match(r'\s*-?\s*(' + UNIT_WORDS + r')\b', after, re.I)
        unit = UNIT_OF.get(um[1].lower()) if um else None
        pct = re.match(r'\s*%|\s*(?:-|to)\s*' + NUM + r'\s*%', after) is not None
        cmp_ = re.search(r'(?:[<>≥≤=]|\b(?:OR|RR|HR|aOR|aHR|CI|NNT|NNH|AUROC|AUC|P)\b)\s*$', before) is not None
        v = float(num)
        if not unit and not pct and '.' not in num and 1900 <= v <= 2035:
            continue                                   # a year
        if pct:
            out.append((num, None, 'pct'))
        elif unit:
            out.append((num, unit, 'unit'))
        elif '.' in num or v >= 10 or cmp_:
            out.append((num, None, 'num'))
    return out


def units_of(body):
    """checkable lines of a page: (line number, raw line, context words from the table header)"""
    out, fence, header, skip = [], None, '', False
    for n, line in enumerate(body.split('\n'), 1):
        s = line.strip()
        if s.startswith('```'):
            fence = None if fence else (s[3:].strip() or 'code')
            continue
        if fence and fence != 'mermaid':
            continue
        if s.startswith('#'):
            skip = bool(re.match(r'#+\s*(Contents|See Also|Sources|Bibliographic Info|Relevance to Wiki)\b', s, re.I))
            header = ''
            continue
        if skip or not s or re.match(r'^\|?\s*:?-{3,}', s) or s.startswith('![['):
            continue
        if re.match(r'^\*[^*].*\*$', s) and not s.startswith('**'):
            continue                                   # caption line
        if s.startswith('|'):
            if not header:
                header = s
                continue
        else:
            header = ''
        out.append((n, line, header))
    return out


def check_page(path, evidence=False):
    src = open(path, encoding='utf8').read()
    meta, body = fm(src)
    off = src[:len(src) - len(body)].count('\n')
    slug = os.path.basename(path)[:-3]
    is_source = os.path.abspath(os.path.dirname(path)) == os.path.abspath(SRC) or meta.get('category') == 'source'
    page_slugs = [slug] if is_source else list(meta.get('sources') or [])
    page_srcs = [Source.get(s) for s in page_slugs]
    notes = [f'{s.slug}: {s.why}' for s in page_srcs if not s.ok]
    usable = [s for s in page_srcs if s.ok]
    flags, checked = [], 0
    if not usable:
        return dict(path=path, flags=[], checked=0, notes=notes or ['no usable source'])
    for n, line, header in units_of(body):
        text = clean(line)
        toks = tokens(text)
        grades = [(g[1].lower(), re.sub(r'[\s-]+', ' ', g[2].lower())) for g in GRADE.finditer(text)]
        signs = re.findall(r'[≥≤<>]', re.sub(r'-->|->|<br|<[a-z/][^>]*>', ' ', text))
        if not toks and not grades and not signs:
            continue
        cited = [m for m in re.findall(r'\[\[([^\]|\\#]+)', line) if os.path.exists(os.path.join(SRC, m + '.md'))]
        cited = [Source.get(c) for c in dict.fromkeys(cited)]
        cited_ok = [c for c in cited if c.ok]
        targets = cited_ok or usable
        terms = set(t for t in re.findall(r'[a-z]{3,}', (text + ' ' + clean(header)).lower()) if t not in STOP)
        terms |= {t[0] for t in toks}
        best = None
        for s in targets:
            sc, a, b = s.locate(terms)
            if best is None or sc > best[0]:
                best = (sc, a, b, s)
        sc, a, b, bs = best
        near, (fi, pg) = bs.span(a, b)
        where = f'{os.path.basename(bs.files[fi])} p.{pg}'
        checked += 1
        wordy = len([t for t in terms if not t[0].isdigit()]) >= 4
        if wordy and sc < 0.22 and (toks or grades):
            flags.append(('NOMATCH', n + off, line.strip(), f'best passage score {sc:.2f} in {bs.slug}', where, near))
        for tok in toks:
            label = tok[0] + ('%' if tok[2] == 'pct' else (' ' + tok[1] if tok[1] else ''))
            ctx = [(s.context(tok, terms), s) for s in targets]
            ctx = [(c, s) for c, s in ctx if c]
            if ctx:
                (csc, pos), s = max(ctx, key=lambda x: x[0][0])
                if wordy and csc < FAR_BELOW:
                    ev, wh = s.around(pos)
                    flags.append(('FAR', n + off, line.strip(), f'{label} (context {csc:.2f})', wh, ev))
                continue
            others = [s for s in usable if s not in targets and s.context(tok, terms)]
            if others:
                flags.append(('OTHER', n + off, line.strip(), f'{label} — found in {others[0].slug}, not in '
                              f'{", ".join(t.slug for t in targets)}', where, near))
            else:
                flags.append(('ABSENT', n + off, line.strip(), label, where, near))
        for strength, cert in grades:
            pat = re.compile(r'\b' + strength + r'\b[^.]{0,60}?\b' + cert.replace(' ', r'[\s-]*') + r'\b|\b'
                             + cert.replace(' ', r'[\s-]*') + r'\b[^.]{0,60}?\b' + strength + r'\b', re.I)
            ctx = [(s.grade_context(pat, terms), s) for s in targets]
            ctx = [(c, s) for c, s in ctx if c]
            if not ctx:
                flags.append(('ABSENT', n + off, line.strip(), f'grade "{strength} / {cert}"', where, near))
                continue
            (csc, pos), s = max(ctx, key=lambda x: x[0][0])
            if wordy and csc < GRADE_BELOW:
                ev, wh = s.around(pos)
                flags.append(('FAR', n + off, line.strip(), f'grade "{strength} / {cert}" (context {csc:.2f})', wh, ev))
        if signs:
            flags.append(('SIGN', n + off, line.strip(), 'comparison sign: ' + ' '.join(dict.fromkeys(signs)), where, near))
    return dict(path=path, flags=flags, checked=checked, notes=notes)


ORDER = ['ABSENT', 'OTHER', 'NOMATCH', 'FAR', 'SIGN']


def report(res, evidence=False):
    c = Counter(f[0] for f in res['flags'])
    rel = os.path.relpath(res['path'], WIKI) if res['path'].startswith(WIKI) else res['path']
    print(f"== {rel} — {res['checked']} lines checked · " + ' · '.join(f'{k} {c[k]}' for k in ORDER))
    for nt in res['notes']:
        print(f'   note: {nt}')
    for kind in ORDER:
        for f in res['flags']:
            if f[0] != kind:
                continue
            print(f'{kind:7} L{f[1]}: {f[3]}  [{f[4]}]')
            print(f'        {f[2][:220]}')
            if evidence and kind != 'SIGN':
                print(f'        source ≈ …{f[5][:700]}…')


def topic_pages():
    for f in sorted(glob.glob(os.path.join(WIKI, '**', '*.md'), recursive=True)):
        rel = os.path.relpath(f, WIKI)
        if rel in SKIP or rel.startswith('sources' + os.sep):
            continue
        yield f


def main(a):
    if not a:
        sys.exit(__doc__)
    strict = '--strict' in a
    a = [x for x in a if x != '--strict']
    if a[0] == '--unmapped':
        for f in sorted(glob.glob(os.path.join(SRC, '*.md'))):
            s = Source.get(os.path.basename(f)[:-3])
            if not s.ok:
                print(f'{s.slug}: {s.why}')
        return
    if a[0] in ('--rank', '--sources'):
        files = sorted(glob.glob(os.path.join(SRC, '*.md'))) if a[0] == '--sources' else list(topic_pages())
        rows = []
        for f in files:
            r = check_page(f)
            c = Counter(x[0] for x in r['flags'])
            rows.append((c['ABSENT'], c['OTHER'], c['NOMATCH'], c['FAR'], c['SIGN'], r['checked'], os.path.relpath(f, WIKI)))
        rows.sort(reverse=True)
        n = int(a[1]) if len(a) > 1 else len(rows)
        print('ABSENT OTHER NOMATCH FAR SIGN lines  page')
        for r in rows[:n]:
            print('%6d %5d %7d %3d %4d %5d  %s' % r)
        return
    evidence = a[0] == '--evidence'
    files = a[1:] if evidence else a
    bad = 0
    for f in files:
        if not os.path.isfile(f):
            hits = glob.glob(os.path.join(WIKI, '**', os.path.basename(f).replace('.md', '') + '.md'), recursive=True)
            if not hits:
                print(f'== {f}: not found')
                continue
            f = hits[0]
        res = check_page(f, evidence)
        report(res, evidence)
        bad += sum(1 for x in res['flags'] if x[0] in ('ABSENT', 'OTHER', 'NOMATCH'))
    if strict and bad:
        sys.exit(1)


if __name__ == '__main__':
    main(sys.argv[1:])
