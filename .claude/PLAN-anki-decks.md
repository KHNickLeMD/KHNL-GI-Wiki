# Anki Cards Synced to Wiki Pages — Plan

Requested 2026-08-05. Grilled and substantially revised 2026-08-06/07 — **this file supersedes the
original plan**, which assumed a public deck, Python + genanki, and AnkiCollab from day one. All
three moved to v2 or were dropped.

Goal unchanged: every wiki page has matching cards; when the page changes the cards change, and
edits don't reset scheduling.

---

## Decisions locked in the grill

### 1. Audience — **me now, public later**

Nick is the only reviewer on day one. Everything that exists to serve strangers is deferred:

- ~~AnkiCollab account, add-on, publish runbook~~ → v2
- ~~GitHub Release asset + `anki.yml` CI~~ → v2
- ~~Download button on the site, README "📇 Flashcards" section~~ → v2

Consequence: **no site changes and no CI in v1.** The How-to-Use sync rule isn't triggered because
no user-facing feature ships.

### 2. Build — **plain `.txt`, no dependency**

Cards are exported to one tab-separated file that Anki imports natively. No Python, no genanki,
no second runtime in a Node repo.

```
#separator:tab
#html:true
#notetype:Cloze
#guid column:1
#deck column:2
#tags column:3
#columns:guid	deck	tags	Text	Back Extra
```

`#guid column` is the whole mechanism: each row carries a stable ID, so re-importing an edited file
**updates that note in place** and review history survives.

Exporter: `website_files/scripts/build-anki.mjs`, ~40 lines of string joining. Newlines → `<br>`.

Known cost of `.txt` over `.apkg`: images must be remote `<img src="https://giwiki.khnicklemd.com/
KHNL-GI-Wiki/raw/assets/…">` and need internet to render. Accepted for a solo deck. Writing
`build-anki.py` + genanki is the v2 move when offline packaging matters.

### 3. Note type — **stock `Cloze` only**

Nick's existing cards are stock Cloze (`Text`, `Back Extra`). Q→A cards are written as clozes with
a question stem, so no `Basic` type is needed. No custom note types at all — nothing to pin, and
the note-type-edit hazard from the original plan disappears.

### 4. Card shape — **mix, per fact type**

- **List block** for workups, criteria sets, classifications, differentials, staging — one note,
  c-numbers grouping items into reveal batches (`c1` reused across several items on purpose).
- **Atomic** for an isolated number, dose, threshold, or score cutoff with no list around it.

### 5. Length — hard caps the linter enforces

| Rule | Limit |
|---|---|
| Text field total | ≤ 40 words |
| Bullet items | ≤ 5 |
| Words per bullet | ≤ 12 |
| Topic anchor | 1 line, required |

**Abbreviate freely** — CSP, EMR, SMI, LVI, bx, hx, dx, mo/y. Fragments over sentences. The driving
complaint: cards that are too wordy get skimmed instead of recalled.

**Qualifiers, mechanisms, and "why" go to Back Extra**, never the front. This is the rule that does
most of the shortening — "UA to rule out nephrotic/nephritic syndrome" on the front becomes
`{{c1::UA}}` with the reason in Back Extra.

### 6. No answer leakage

A card must carry **enough context to be answerable** and must **not reveal its own answer**
elsewhere on the card. This constrains the topic anchor: anchor by the *dimension* being tested,
not the answer's category.

- ✅ `Polyp resection by size` — ❌ `Cold snare vs hot snare` (narrows to two options)
- ✅ `NICE → dx + action` — ❌ `NICE 3 → surgical referral`

### 7. Coverage — **no hard cap, minimize, zero overlap**

Cards may cover a page fully (`polypectomy-emr.md` needs ~40), but the generator writes the fewest
cards that cover the decision-critical content. **No two cards test the same thing.**

### 8. Cross-page dedup — **owner page + dedup lint**

The constraint the parallel sweep breaks. Shared concepts are mentioned on many pages:

| Concept | Pages |
|---|---|
| Chicago Classification | 22 |
| Paris classification | 13 |
| NICE | 12 |
| Milan criteria | 8 |
| Forrest, Kudo | 7 each |

Blind parallel agents would emit 22 Chicago cards. Fix, both halves required:

1. **Owner page** — a concept is carded only on the page that *defines* it (holds the table or
   figure). Every other page mentions and links, and cards nothing.
2. **`dedup-lint.mjs`** — normalizes card fronts across all files and flags pairs >85% similar.
   Catches what the ownership rule misses.

### 9. Retirement — **retire tag + saved search**

Text import never deletes, so a superseded card would quiz outdated management forever (e.g. the
old "deep SMI ≥1 mm → surgery" card, reversed by the AGA 2025 CPU).

Mechanism: move the block to a `# Retired` section in the card file. The exporter still emits the
row — same guid, so it reaches the existing note — with tag `khnl::retired` and blanked text.
One saved Anki search (`tag:khnl::retired`) surfaces them for deletion.

### 10. Standing rules (added 2026-08-07)

Once generation starts, these become permanent conventions — to go into `KHNL-GI-Wiki/CLAUDE.md`
alongside the existing ingest rules:

1. **Every lint cycle generates some cards.** The 05:00 pass picks up pages with no card file (or
   a stale one) and drafts cards for a few of them. Chips away at the backlog without a big sweep.
2. **Editing a wiki page edits its cards in the same change.** Clinical content change → card file
   updated in the same commit. Never leave cards behind.
3. **Every ingest creates cards.** New or updated page from a raw drop → its card file is written
   in the same run, by the same subagent that wrote the page.

**Cron-generated cards are unreviewed — resolved 2026-08-10, shipped.** The original plan's rule was
"CI never calls an LLM," so no card reached reviews without a human diff. Rule 1 breaks that. Fix,
reusing the retirement mechanism: cron-drafted cards go in a `# Draft` section and export tagged
`khnl::unreviewed` — importable and studiable, but `tag:khnl::unreviewed` shows what Nick hasn't
vetted. Promoting a card = moving it out of `# Draft`. Live in `lint-cron.sh` (job 7, 05:00): a
second `claude -p` pass after the lint drafts 5 pages/night at `--effort high`, then runs
`CARDS_DIR=/cards node /repo/website_files/scripts/build-anki.mjs`. Commits nothing — the `giwiki`
container bind-mounts the Nextcloud cards dir at `/cards`.

---

## Card file format

`KHNL-GI-Wiki/cards/**.md`, mirroring the wiki tree, one file per page. Outside `wiki/`, so
`build-embeddings.mjs` and `wiki-bundle.json` never see it and the site is unaffected.

```markdown
---
page: 4-advanced-gi-procedures/colorectal-procedures/polypectomy-emr.md
page_updated: 2026-07-28
tags: GI::Organs::Colon::ColorectalPolyps GI::Procedures::Interventional
---

[p1a3f9] Paris — type 0
- 0-Ip {{c1::pedunculated}}
- 0-Is {{c1::sessile}}
- 0-IIa {{c2::sup. elevated <2.5mm}}
- 0-IIb {{c2::flat}}
- 0-IIc {{c3::depressed}}
> 0-IIa+IIc = mixed

[p2c07e] Paris 0-IIc → SMI risk {{c1::27–36%}}
> nearly all 0-IIc >20mm have SMI
```

- `[id]` = 6 hex chars, opens a note. Note GUID = `sha1(page_path + id)`, so **rewording a card
  keeps its scheduling**. The generator mints ids only for genuinely new cards, never rewrites one.
- `>` lines = `Back Extra`.
- Blank line separates notes.
- Parser: split on blank lines, require the `[id]` prefix. ~20 lines.
- `tags:` = **required**, space-separated, hand-written in Nick's own tag tree
  (`GI::Organs::<Organ>::<Topic>`, `GI::Procedures::General|Interventional`). Not derived from the
  slug — the tree uses his naming (`UC`, `GERD`, `ColorectalCancer`). Export appends them to the
  automatic `khnl::<section>` / `khnl::<slug>` tags. Missing `tags:` is a lint problem, not a throw.
- Deck = `KHNL GI Wiki::<N. Section>::<Subsection>::<page title>`, straight off the wiki path, so
  the deck tree matches the wiki index. The section number is kept because Anki sorts A–Z.

Reviewed and approved as the reference sample: 13 cards on `polypectomy-emr.md` (Paris, 0-IIc risk,
LST subtypes, NICE, non-lifting sign image card, resection by size, hot forceps, pedunculated
ligation, prophylactic clipping, unfavorable histology, T1 deep-SMI reversal, post-EMR surveillance,
tattoo).

---

## Open — resume here

Grill stopped mid-tree. Unanswered, roughly in dependency order:

1. **v1 scope.** Pilot 3 pages → batch by category with review at each batch · vs on-demand only
   (cards for the page you're studying that week) · vs sweep all 251 at once. *Asked, not answered.*
2. **Back Extra ownership.** Nick's existing Back Extra is hand-written clinical prose. Does the
   generated footer (page title · giwiki link · source slugs) go there too, below a rule? And does
   regeneration preserve hand-written Back Extra text?
3. **Regeneration semantics.** Page edited → `page_updated` ≠ page `updated` → regenerate. But how
   does the generator preserve existing `[id]`s while rewriting content, and what protects Nick's
   hand-edits to a card file from being clobbered?
4. **Deck naming depth.** Category::Page, or Category::Page::Section? Big pages like
   `polypectomy-emr` split cleanly by H2; thin med pages don't.
5. **Tags.** Which of: page frontmatter `tags`, `khnl::<category>`, source slugs. All three is a
   lot of tag noise on a solo deck.
6. **Concept ownership map.** Who decides the owner for the ~30 shared concepts, and where is the
   map stored so the lint can check it?
7. **`[id]` minting.** Random hex from an LLM collides. Sequential per file? Hash of first mint?
8. **Lint integration.** Does the staleness + dedup + length check join the server's 05:00 lint
   cron, or stay a local script?

## Sequence (revised)

| # | Step | Blocks |
|---|---|---|
| 1 | Resolve the 8 open questions above | — |
| 2 | `build-anki.mjs` + `dedup-lint.mjs` + `test-anki.mjs` (asserts only) | 1 |
| 3 | Pilot card files, Nick imports and reviews in Anki | 2 |
| 4 | Card conventions into `KHNL-GI-Wiki/CLAUDE.md` | 3 |
| 5 | Sweep, batched per the scope decision | 4 |
| 6 | v2: `.apkg` build, CI release, site button, AnkiCollab | 5 |

## Tests (`test-anki.mjs`, asserts, no framework)

1. Fixture card file parses to the expected note count.
2. GUID unchanged when a card's text is edited but its `[id]` isn't.
3. Two exports of the same input → identical output.
4. Every `cards/**.md` maps to an existing `wiki/**.md`.
5. Length caps enforced (≤40 words, ≤5 bullets, ≤12 words/bullet).

Plus one manual check no test covers: import v1 → review a card → import v2 → confirm the interval
survived.

## Deliberately skipped

- Automating AnkiCollab (headless Anki + AnkiConnect). Add if releases become more than weekly.
- Per-page individual downloads.
- Cards for the 246 `sources/` pages — duplicates of the entity cards.
- Image occlusion cards — needs a third note type.
- Audio/TTS, leech reports, shared review stats.
