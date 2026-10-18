#!/usr/bin/env python3
"""Download one open-access paper into raw/ for the daily source-fetch step of the lint pass.

  fetch-paper.py <DOI | PMID | PMCID> --out <raw subfolder> --name "<Author> <Year> <Short Title>"
  fetch-paper.py <id> --lookup      print the citation + canonical link only, download nothing
  fetch-paper.py --search 'AUTH:"Lewis SJ" AND PUB_YEAR:1997 AND TITLE:stool'   top 5 Europe PMC hits,
                                    to find the DOI (fielded queries; bare words rank badly)
  fetch-paper.py --label "<brand or generic>" --out "raw/Drug Labels" --name "<Brand> Label"
                                    FDA prescribing information from DailyMed (official NLM API)
  fetch-paper.py --test

Only the PMC Open Access bucket (pmc-oa-opendata on AWS, NIH's documented route for automated
retrieval) is used. Publisher sites, PMC article pages and Europe PMC's renderer sit behind
bot challenges (Cloudflare, proof-of-work cookies); this script never tries to get past them.
A paper that is free-to-read but not in the open-access subset therefore comes back as
not_open_access, with its link, for Nick to download by hand.

Prints one JSON line: {"status": downloaded | not_open_access | exists | error, "link", ...}.
Exit code 0 = downloaded or exists, 3 = not open access, 1 = error.
"""
import json
import re
import subprocess
import sys
import urllib.parse
import urllib.request
from pathlib import Path

EPMC = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search'
BUCKET = 'https://pmc-oa-opendata.s3.amazonaws.com'
DAILYMED = 'https://dailymed.nlm.nih.gov/dailymed'
UA = 'digestpedia-fetch-paper/1.0 (GI wiki source fetch; one request per paper)'
# Every file this script saves is listed here (repo root, gitignored). Uningested raw/ files NOT
# listed are Nick's own drops, which the lint pass ingests first (CLAUDE.md, Nick 2026-10-18).
MANIFEST = Path(__file__).resolve().parents[2] / '.fetched-files'
MIN_BYTES = 60_000   # a saved challenge page or abstract stub is ~5-30 KB (IANS 2024 was 6 KB)


def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def record_fetch(dest):
    """Append the saved file's path relative to raw/ (falls back to the full path) to the manifest."""
    parts = dest.resolve().parts
    rel = '/'.join(parts[parts.index('raw') + 1:]) if 'raw' in parts else str(dest)
    with open(MANIFEST, 'a') as f:
        f.write(rel + '\n')


def query_for(ident):
    ident = ident.strip()
    if re.fullmatch(r'PMC\d+', ident, re.I):
        return f'PMCID:{ident.upper()}'
    if re.fullmatch(r'\d{5,9}', ident):
        return f'EXT_ID:{ident} AND SRC:MED'
    if ident.startswith('10.'):
        return f'DOI:"{ident}"'
    raise ValueError(f'not a DOI, PMID or PMCID: {ident}')


def epmc(query, n=1):
    q = urllib.parse.urlencode({'query': query, 'format': 'json', 'resultType': 'core', 'pageSize': n})
    return [record(r) for r in json.loads(get(f'{EPMC}?{q}'))['resultList']['result']]


def lookup(ident):
    hits = epmc(query_for(ident))
    return hits[0] if hits else None


def record(r):
    doi, pmid = r.get('doi'), r.get('pmid')
    return {
        'title': r.get('title', '').rstrip('.'),
        'authors': r.get('authorString', ''),
        'journal': r.get('journalInfo', {}).get('journal', {}).get('isoabbreviation', ''),
        'year': r.get('pubYear', ''),
        'doi': doi, 'pmid': pmid, 'pmcid': r.get('pmcid'),
        'link': f'https://doi.org/{doi}' if doi else f'https://pubmed.ncbi.nlm.nih.gov/{pmid}/' if pmid else None,
    }


def bucket_pdf(pmcid):
    """Key of the newest PDF version for this PMCID in the open-access bucket, or None."""
    xml = get(f'{BUCKET}/?list-type=2&prefix={pmcid}.&max-keys=50').decode()
    keys = re.findall(r'<Key>([^<]+\.pdf)</Key>', xml)
    return max(keys, key=lambda k: int(re.search(r'\.(\d+)/', k).group(1))) if keys else None


def title_words(s):
    return {w for w in re.findall(r'[a-z]{5,}', s.lower())}


def looks_right(path, title):
    """First two pages mention at least half the title's long words (catches wrong-paper and stub files)."""
    try:
        text = subprocess.run(['pdftotext', '-l', '2', str(path), '-'], capture_output=True, text=True, timeout=60).stdout
    except FileNotFoundError:
        return True   # no pdftotext: the size + magic checks still ran
    want = title_words(title)
    return not want or len(want & title_words(text)) >= len(want) / 2


def fetch(ident, out, name):
    meta = lookup(ident)
    if not meta:
        return {'status': 'error', 'error': f'no Europe PMC record for {ident}'}, 1
    dest = Path(out) / f'{name}.pdf'
    if dest.exists():
        return {'status': 'exists', 'file': str(dest), **meta}, 0
    key = bucket_pdf(meta['pmcid']) if meta['pmcid'] else None
    if not key:
        return {'status': 'not_open_access', **meta}, 3
    data = get(f'{BUCKET}/{key}')
    if not data.startswith(b'%PDF') or len(data) < MIN_BYTES:
        return {'status': 'error', 'error': f'{key}: not a full PDF ({len(data)} bytes)', **meta}, 1
    dest.parent.mkdir(parents=True, exist_ok=True)
    tmp = dest.with_suffix('.part')
    tmp.write_bytes(data)
    if not looks_right(tmp, meta['title']):
        tmp.unlink()
        return {'status': 'error', 'error': 'downloaded PDF does not match the title', **meta}, 1
    tmp.rename(dest)
    record_fetch(dest)
    return {'status': 'downloaded', 'file': str(dest), 'bytes': len(data), **meta}, 0


def label(drug, out, name):
    """Newest DailyMed SPL for the drug name, saved as its prescribing-information PDF."""
    q = urllib.parse.urlencode({'drug_name': drug, 'pagesize': 5})
    hits = json.loads(get(f'{DAILYMED}/services/v2/spls.json?{q}'))['data']
    if not hits:
        return {'status': 'error', 'error': f'no DailyMed label for {drug}'}, 1
    h = hits[0]
    meta = {'title': h['title'], 'setid': h['setid'],
            'link': f"{DAILYMED}/drugInfo.cfm?setid={h['setid']}", 'others': [x['title'] for x in hits[1:]]}
    dest = Path(out) / f'{name}.pdf'
    if dest.exists():
        return {'status': 'exists', 'file': str(dest), **meta}, 0
    data = get(f"{DAILYMED}/downloadpdffile.cfm?setId={h['setid']}")
    if not data.startswith(b'%PDF') or len(data) < MIN_BYTES:
        return {'status': 'error', 'error': f'not a full PDF ({len(data)} bytes)', **meta}, 1
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    record_fetch(dest)
    return {'status': 'downloaded', 'file': str(dest), 'bytes': len(data), **meta}, 0


def test():
    assert query_for('PMC123') == 'PMCID:PMC123'
    assert query_for('8675081') == 'EXT_ID:8675081 AND SRC:MED'
    assert query_for('10.1136/gut.38.3.316') == 'DOI:"10.1136/gut.38.3.316"'
    assert title_words('Risk assessment after acute upper GI haemorrhage') == {'assessment', 'after', 'acute', 'upper', 'haemorrhage'}
    print('ok')


def main(argv):
    if argv[:1] == ['--test']:
        return test()
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('ident')
    p.add_argument('--out')
    p.add_argument('--name')
    p.add_argument('--lookup', action='store_true')
    p.add_argument('--search', action='store_true', help='treat ident as free-text search terms')
    p.add_argument('--label', action='store_true', help='treat ident as a drug name (DailyMed)')
    if argv[:1] in (['--search'], ['--label']):
        argv = argv[1:2] + argv[2:] + argv[:1]
    a = p.parse_args(argv)
    try:
        if a.label:
            if not (a.out and a.name):
                p.error('--out and --name are required with --label')
            res, rc = label(a.ident, a.out, a.name)
        elif a.search:
            hits = epmc(a.ident, 5)
            res, rc = {'status': 'found' if hits else 'error', 'hits': hits}, 0 if hits else 1
        elif a.lookup:
            meta = lookup(a.ident)
            res, rc = ({'status': 'found', **meta}, 0) if meta else ({'status': 'error', 'error': 'not found'}, 1)
        elif not (a.out and a.name):
            p.error('--out and --name are required to download')
        else:
            res, rc = fetch(a.ident, a.out, a.name)
    except Exception as e:   # network / parse failure: report, never crash the pass
        res, rc = {'status': 'error', 'error': f'{type(e).__name__}: {e}'}, 1
    print(json.dumps(res))
    sys.exit(rc)


if __name__ == '__main__':
    main(sys.argv[1:])
