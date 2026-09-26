#!/usr/bin/env python3
"""Two-way sync between the card .md files and the "KHNL GI Wiki" deck, straight through AnkiWeb.

  anki-sync.py login        one-time: prompts for the AnkiWeb password, stores only the sync key
  anki-sync.py [--dry-run]  each cron pass: pull AnkiWeb → reconcile with /cards → push AnkiWeb
  anki-sync.py --test

The server keeps its own copy of the collection. A base snapshot (what the last run left in Anki)
tells which side changed each note since:
  edited / deleted in Anki, or khnl::unreviewed removed  → written back into the card .md
  card added / edited / deleted in the .md               → applied to the Anki note
Both sides edited one note → Anki wins (that edit was made by hand) and the run logs it.
Only notes in the "KHNL GI Wiki" deck tree are ever read or written.
"""
import getpass
import html
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

DECK = 'KHNL GI Wiki'
DATA = Path(os.environ.get('ANKI_SYNC_DIR', Path.home() / 'anki-sync'))
CARDS = Path(os.environ.get('CARDS_DIR', '/cards'))
BUILD = Path(__file__).with_name('build-anki.mjs')
MAX_DELETE = 25   # per side per run; more than this is far likelier a broken sync than a real cleanup


class Fail(Exception):
    pass


# ---- Anki field HTML ⇄ card .md lines ----------------------------------------------------------
# The build only swaps \n for <br>, so the way back is the same swap, plus undoing what Anki's
# editor adds when you type into a field (<div> lines, &nbsp;).

def lines_of(field):
    s = re.sub(r'<br\s*/?>|</?div>|</?p>', '\n', field, flags=re.I).replace('&nbsp;', ' ')
    return [l.rstrip() for l in s.split('\n') if l.strip()]


def extra_of(back):
    """'<hr>' + extra + '<br>' + footer → extra lines; None if the <hr>…<small> frame is gone."""
    m = re.match(r'\s*<hr\s*/?>(.*)<small>', back, re.S | re.I)   # greedy: the LAST <small> is the footer
    return lines_of(m[1]) if m else None


def same(a, b):
    """Equal as displayed — editor re-escaping and whitespace are not an edit."""
    key = lambda f: [' '.join(html.unescape(l).split()) for l in lines_of(f)]
    return key(a) == key(b)


# ---- card .md block surgery -------------------------------------------------------------------
# Blocks are blank-line separated; a block may open with a "# Draft" / "# Retired" heading line
# before its [id]{source} line (build-anki.mjs parse()). Separators are kept verbatim so an edit
# touches only its own block.

CARD_LINE = r'\[[0-9a-f]{6}\]\{[a-z0-9-]+\}\s*'


def _blocks(src):
    """→ (frontmatter + leading blank lines, [block, sep, block, …], trailing whitespace)"""
    m = re.match(r'---\n.*?\n---\n\s*', src, re.S)
    head = m[0] if m else ''
    body = src[len(head):].rstrip()
    return head, re.split(r'(\n\s*\n)', body), src[len(head) + len(body):]


def _find(parts, cid):
    for i in range(0, len(parts), 2):
        if re.search(rf'^\[{cid}\]\{{', parts[i], re.M):
            return i
    raise Fail(f'card [{cid}] not found')


def _split_block(block):
    lines = block.split('\n')
    k = next(i for i, l in enumerate(lines) if re.match(CARD_LINE, l))
    return lines[:k], lines[k:]   # (heading lines, card lines)


def md_edit(src, cid, text, extra):
    head, parts, tail = _blocks(src)
    i = _find(parts, cid)
    heading, card = _split_block(parts[i])
    prefix = re.match(CARD_LINE, card[0])[0]
    parts[i] = '\n'.join(heading + [prefix + text[0], *text[1:], *('> ' + e for e in extra)])
    return head + ''.join(parts) + tail


def _cut(parts, i):
    """Remove block i, keeping any section heading it opened with. Returns the card lines."""
    heading, card = _split_block(parts[i])
    if heading and i + 2 < len(parts):
        parts[i:i + 3] = ['\n'.join(heading) + '\n' + parts[i + 2]]   # heading moves onto the next card
    elif heading:
        parts[i] = '\n'.join(heading)
    elif i + 1 < len(parts):
        del parts[i:i + 2]   # the block and the separator after it
    else:
        del parts[max(i - 1, 0):i + 1]   # last block: the separator before it
    return card


def md_delete(src, cid):
    head, parts, tail = _blocks(src)
    _cut(parts, _find(parts, cid))
    return head + ''.join(parts) + tail


def md_undraft(src, cid):
    """Move a card from the # Draft section to the end of the active cards (just above # Draft)."""
    head, parts, tail = _blocks(src)
    card = _cut(parts, _find(parts, cid))
    j = next((i for i in range(0, len(parts), 2) if re.match(r'\s*#\s*Draft', parts[i], re.I)), None)
    if j is None:
        raise Fail(f'card [{cid}]: no # Draft heading')
    parts[j:j] = ['\n'.join(card), '\n\n']
    return head + ''.join(parts) + tail


# ---- the reconcile ----------------------------------------------------------------------------

def load_md():
    """Run the build and return {guid: note} from its JSON (the md side, rendered as Anki fields)."""
    t0 = time.time()
    out = CARDS / 'dist' / 'khnl-gi-wiki.json'
    r = subprocess.run(['node', str(BUILD)], env={**os.environ, 'CARDS_DIR': str(CARDS)},
                       capture_output=True, text=True)
    if not out.exists() or out.stat().st_mtime < t0 - 1:   # exit 1 alone is fine: stale-card warnings
        raise Fail('build-anki.mjs crashed:\n' + r.stderr[-1500:])
    return {n['guid']: n for n in json.loads(out.read_text())}


def anki_side(col):
    notes = {}
    for nid in col.find_notes(f'"deck:{DECK}"'):
        n = col.get_note(nid)
        deck = col.decks.name(col.get_card(n.card_ids()[0]).did)
        notes[n.guid] = (n, deck)
    return notes


def reconcile(col, base, load, cards=CARDS, dry=False, log=print):
    """One pass. `base` is {} on a first run (md wins everywhere). Returns the new base."""
    md = load()
    anki = anki_side(col)
    elsewhere = lambda g: col.db.scalar('select id from notes where guid=?', g) is not None

    # 1. Anki → md
    edits, deletes, undrafts, held = {}, [], [], set()
    for g, b in base.items():
        m = md.get(g)
        if g not in anki:
            if m and elsewhere(g):
                log(f'  {m["file"]} [{m["id"]}]: moved out of {DECK} in Anki; left alone')
                held.add(g)
            elif m:
                deletes.append(g)
            continue
        if not m or m['section'] == 'retired':
            continue
        n, _ = anki[g]
        if not same(n['Text'], b['text']) or not same(n['Back Extra'], b['extra']):
            text, extra = lines_of(n['Text']), extra_of(n['Back Extra'])
            if not text or extra is None:
                log(f'  {m["file"]} [{m["id"]}]: Anki edit not written back (empty text or source line deleted); fix it in Anki')
                held.add(g)
                continue
            if not same(m['text'], b['text']) or not same(m['extra'], b['extra']):
                log(f'  {m["file"]} [{m["id"]}]: edited on both sides; keeping the Anki version')
            edits[g] = (text, extra)
        if 'khnl::unreviewed' in b['tags'] and 'khnl::unreviewed' not in n.tags and m['section'] == 'draft':
            undrafts.append(g)
    if len(deletes) > MAX_DELETE:
        raise Fail(f'{len(deletes)} notes vanished from Anki in one run (cap {MAX_DELETE}); not deleting their cards. '
                   'If that was really you, rerun with MAX_DELETE raised.')

    ops = [(g, md_edit, v) for g, v in edits.items()] + [(g, md_undraft, None) for g in undrafts] \
        + [(g, md_delete, None) for g in deletes]
    for g, fn, v in ops:
        m = md[g]
        log(f'  → md {fn.__name__[3:]}: {m["file"]} [{m["id"]}]')
        if dry:
            continue
        p = cards / m['file']
        try:
            p.write_text(fn(p.read_text(), m['id'], *(v or ())))
        except Fail as e:
            log(f'  {m["file"]}: {e}; skipped')
            held.add(g)
    if ops and not dry:
        md = load()   # re-render so Anki gets the canonical form of what was just written

    # 2. md → Anki
    gone = [g for g in base if g in anki and g not in md]
    if len(gone) > MAX_DELETE:
        raise Fail(f'{len(gone)} cards vanished from the .md files in one run (cap {MAX_DELETE}); not deleting notes')
    model = col.models.by_name('Cloze')
    adds = 0
    changed = []
    for g, m in md.items():
        if g in held or (g not in anki and g in base):   # held, or deleted in Anki (card already removed)
            continue
        if not m['deck'].startswith(DECK):
            raise Fail(f'refusing to write outside {DECK}: {m["deck"]}')
        if g not in anki:
            if elsewhere(g):
                log(f'  {m["file"]} [{m["id"]}]: note exists outside {DECK}; not re-adding')
                held.add(g)
                continue
            log(f'  → anki add: {m["file"]} [{m["id"]}]')
            adds += 1
            if dry:
                continue
            n = col.new_note(model)
            n.guid, n['Text'], n['Back Extra'], n.tags = g, m['text'], m['extra'], list(m['tags'])
            try:
                col.add_note(n, col.decks.id(m['deck']))
            except Exception as e:   # e.g. a draft with no cloze yet: Anki won't make a card
                log(f'  {m["file"]} [{m["id"]}]: Anki refused the note ({e}); will retry next run')
                held.add(g)
            continue
        n, deck = anki[g]
        own = set(base.get(g, {}).get('tags', []))   # tags we pushed last time; everything else is yours
        tags = list(m['tags']) + [t for t in n.tags if t not in own and t not in m['tags'] and not t.startswith('khnl::')]
        if (n['Text'], n['Back Extra'], sorted(n.tags)) != (m['text'], m['extra'], sorted(tags)):
            n['Text'], n['Back Extra'], n.tags = m['text'], m['extra'], tags
            changed.append(n)
        if deck != m['deck'] and not dry:
            col.set_deck(n.card_ids(), col.decks.id(m['deck']))
    updates = len(changed)
    if changed and not dry:
        col.update_notes(changed)
    if gone:
        log(f'  → anki delete: {len(gone)} note(s) whose card was removed')
        if not dry:
            col.remove_notes([anki[g][0].id for g in gone])

    log(f'anki-sync: md ← {len(edits)} edit(s), {len(undrafts)} reviewed, {len(deletes)} delete(s); '
        f'anki ← {adds} add(s), {updates} update(s), {len(gone)} delete(s); {len(held)} held'
        + (' [dry run]' if dry else ''))
    new = {g: {k: m[k] for k in ('text', 'extra', 'tags', 'deck')} for g, m in md.items() if g not in held}
    new.update({g: base[g] for g in held if g in base})   # held notes keep their old base → retried next run
    return new


# ---- AnkiWeb ----------------------------------------------------------------------------------

def sync(col, auth, allow_download):
    """Normal sync. Returns True if the local copy was replaced by a full download.
    Never uploads a full collection: that would overwrite everything in your AnkiWeb account."""
    out = col.sync_collection(auth, sync_media=False)   # card images are URLs, no media to sync
    if out.new_endpoint:
        auth.endpoint = out.new_endpoint
        save_auth(auth)
    if out.required in (out.NO_CHANGES, out.NORMAL_SYNC):
        return False
    if allow_download and out.required in (out.FULL_DOWNLOAD, out.FULL_SYNC):
        col.close_for_full_sync()
        col.full_upload_or_download(auth=auth, server_usn=None, upload=False)
        col.reopen(after_full_sync=True)
        return True
    raise Fail(f'AnkiWeb asked for a full sync (code {out.required}); refusing to upload over your collection')


def save_auth(auth):
    p = DATA / 'auth.json'
    p.write_text(json.dumps({'hkey': auth.hkey, 'endpoint': auth.endpoint}))
    p.chmod(0o600)


def open_col():
    from anki.collection import Collection
    DATA.mkdir(parents=True, exist_ok=True)
    return Collection(str(DATA / 'collection.anki2'))


def main(argv):
    from anki.sync import SyncAuth
    col = open_col()
    try:
        if argv[:1] == ['login']:
            auth = col.sync_login(input('AnkiWeb email: '), getpass.getpass('AnkiWeb password: '), None)
            save_auth(auth)
            print('logged in; sync key saved to', DATA / 'auth.json')
            return
        if not (DATA / 'auth.json').exists():
            raise Fail('not logged in to AnkiWeb (run: anki-sync.py login)')
        a = json.loads((DATA / 'auth.json').read_text())
        auth = SyncAuth(hkey=a['hkey'], **({'endpoint': a['endpoint']} if a.get('endpoint') else {}))
        dry = '--dry-run' in argv
        base_p = DATA / 'base.json'
        base = json.loads(base_p.read_text()) if base_p.exists() else {}
        if sync(col, auth, allow_download=True):
            print('anki-sync: full download from AnkiWeb; md wins this run (base reset)')
            base = {}   # a replaced collection makes the base meaningless: its diffs aren't your edits
        new = reconcile(col, base, load_md, dry=dry)
        if dry:
            return
        sync(col, auth, allow_download=False)
        base_p.write_text(json.dumps(new))   # only after the push landed, so base never runs ahead of AnkiWeb
    finally:
        col.close()


def test():
    import tempfile
    from anki.collection import Collection

    # field ⇄ lines
    assert lines_of('a<br>b<div>c</div>&nbsp;') == ['a', 'b', 'c']
    assert extra_of('<hr>x<br>y<br><small>foot</small>') == ['x', 'y']
    assert extra_of('<hr><small>foot</small>') == []
    assert extra_of('no frame') is None
    assert same('a &lt; b<br>c', 'a < b<div>c</div>') and not same('a', 'b')

    A, B, C = '[aaaaaa]{s} {{c1::one}}\n> ex', '[bbbbbb]{s} {{c1::two}}', '[cccccc]{s} {{c1::three}}'
    fm = '---\npage: p.md\n---\n\n'
    src = f'{fm}{A}\n\n# Draft\n{B}\n\n{C}\n'
    assert md_edit(src, 'aaaaaa', ['X', '- x'], []) == src.replace('{{c1::one}}\n> ex', 'X\n- x')
    assert md_edit(src, 'cccccc', ['X'], ['e']) == src.replace('{{c1::three}}', 'X\n> e')
    assert md_delete(src, 'aaaaaa') == f'{fm}# Draft\n{B}\n\n{C}\n'
    assert md_delete(src, 'bbbbbb') == f'{fm}{A}\n\n# Draft\n{C}\n'
    assert md_delete(src, 'cccccc') == f'{fm}{A}\n\n# Draft\n{B}\n'
    assert md_undraft(src, 'cccccc') == f'{fm}{A}\n\n{C}\n\n# Draft\n{B}\n'
    assert md_undraft(src, 'bbbbbb') == f'{fm}{A}\n\n{B}\n\n# Draft\n{C}\n'

    # end-to-end against a throwaway collection; the md loader is a mini build-anki.mjs
    tmp = Path(tempfile.mkdtemp())
    (tmp / 'p.md').write_text(src)
    deck = f'{DECK}::T'

    def load():
        out, section = {}, 'active'
        _, parts, _ = _blocks((tmp / 'p.md').read_text())
        for b in parts[::2]:
            if re.match(r'\s*#\s*Draft', b):
                section = 'draft'
            try:
                _, card = _split_block(b)
            except StopIteration:
                continue
            cid = card[0][1:7]
            text = [re.sub(CARD_LINE, '', card[0])] + [l for l in card[1:] if not l.startswith('>')]
            extra = [l[2:] for l in card[1:] if l.startswith('>')]
            tags = ['khnl::t'] + (['khnl::unreviewed'] if section == 'draft' else [])
            out['g' + cid] = {'file': 'p.md', 'id': cid, 'section': section, 'deck': deck, 'tags': tags,
                              'text': '<br>'.join(text), 'extra': '<hr>' + ''.join(e + '<br>' for e in extra) + '<small>f</small>'}
        return out

    col = Collection(str(tmp / 'c.anki2'))
    quiet = lambda *_: None
    base = reconcile(col, {}, load, tmp, log=quiet)   # first run: everything added, guids kept
    by = lambda g: anki_side(col)[g][0]
    assert set(anki_side(col)) == {'gaaaaaa', 'gbbbbbb', 'gcccccc'}
    assert by('gaaaaaa')['Back Extra'] == '<hr>ex<br><small>f</small>'

    n = by('gaaaaaa'); n['Text'] = '<div>{{c1::ONE}}</div><div>- new</div>'; n.tags += ['marked']; col.update_note(n)
    n = by('gcccccc'); n.remove_tag('khnl::unreviewed'); col.update_note(n)
    col.remove_notes([by('gbbbbbb').id])
    base = reconcile(col, base, load, tmp, log=quiet)
    md = (tmp / 'p.md').read_text()
    assert '[aaaaaa]{s} {{c1::ONE}}\n- new\n> ex' in md and 'bbbbbb' not in md
    assert md.index('cccccc') < md.index('# Draft'), md
    assert by('gaaaaaa')['Text'] == '{{c1::ONE}}<br>- new'   # canonical form pushed back
    assert 'marked' in by('gaaaaaa').tags               # your own tags survive a push

    (tmp / 'p.md').write_text(md_delete(md_edit(md, 'cccccc', ['{{c1::THREE}}'], []), 'aaaaaa'))
    base = reconcile(col, base, load, tmp, log=quiet)
    assert set(anki_side(col)) == {'gcccccc'} and by('gcccccc')['Text'] == '{{c1::THREE}}'
    assert reconcile(col, base, load, tmp, log=quiet) == base   # converged: nothing left to do
    col.close()
    print('ok')


if __name__ == '__main__':
    if '--test' in sys.argv:
        test()
    else:
        try:
            main(sys.argv[1:])
        except Exception as e:   # one greppable line for lint-cron.sh's failure email
            print(f'ANKI SYNC FAILED: {type(e).__name__}: {e}')
            sys.exit(1)
