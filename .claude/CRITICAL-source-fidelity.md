# CRITICAL: source-fidelity errors across the wiki and Anki deck

**Opened:** 2026-11-15 · **Owner:** Nick · **Status:** open, in progress

## Problem

Most wiki pages contain factual errors when they are checked against their own source guidelines, and close to half contain an error that could change a management decision. The Anki deck is built from these pages and inherits their errors. Digestpedia is a clinical reference, so this blocks release.

## Evidence

Source: the release quality sweep (`Quality review` step in `lint-cron.sh`, CLAUDE.md → *Quality review — release sweep*), tallied from `wiki/log.md` for 2026-11-11 to 11-16. The tally is a judgement call from free-text log entries, about ±15%.

| Metric | Value |
|---|---|
| Pages reviewed | 127 of 369 |
| Pages with ≥1 factual/source-fidelity error | **109 (86%)** |
| Pages with ≥1 error that could change management | **59 (46%)** |
| Errors per page | mean 2.6, median 2, max 8 (tacrolimus, MUTYH polyposis) |
| Total errors | ~330 (~96 management-changing, ~234 attribution/grade/strength) |
| Decision gaps closed (missing decision-critical info) | ~200 on 79 pages |
| Pages with no error | 18 |
| Card errors corrected by the card review | ~79 across ~79 card files, plus ~8 during page reviews |

**Representative management-changing errors (all now fixed):**
- `noninvasive-liver-disease-assessment`: FIB-4 rule for patients over 65 inverted (cutoff <2.0, not <1.3).
- `paracentesis`: invented "1 g/kg albumin with large-volume paracentesis" (that is the AKI regimen).
- `cryptosporidiosis`: nitazoxanide called "not applicable" with effective cART; IDSA 2017 makes nitazoxanide + cART first choice.
- `proton-pump-inhibitors`: a fabricated aspirin + PPI Barrett's chemoprevention recommendation (ACG 2022 made none); "stop PPI if *on*-therapy testing is negative" (should be off-therapy).
- `endoscopic-management-of-perforation`: invented closure size bands.
- `polymerase-proofreading-associated-polyposis`: endometrial cancer risk swapped between *POLD1* and *POLE*, and the same swap in card `ba0003`.
- `eus-guided-gallbladder-drainage`: a trial stopped early for harm cited as supporting drainage.

**Error types seen:** numbers spliced from different trials or arms; recommendations invented, inverted or narrowed; guideline grades invented (several *source pages* carry invented grades, which then propagate); superseded guidance presented as current; facts attributed to the wrong guideline, table column or drug class; populations mis-scoped.

## Likely root causes (unverified, to investigate)

1. **Ingest-time synthesis.** Pages and source pages were written partly from model knowledge or loose paraphrase rather than verbatim from the PDF. Invented grades on source pages (`acg-2020-achalasia`, `asge-2020-achalasia`, `acg-2024-focal-liver-lesions`, `sages-2024-poem`, `acg-2024-hp-treatment`) support this.
2. **`pdftotext` loses signs and table structure** (≥, <, column alignment). The AI-endoscopy review hit this, and it can produce column misattributions like the tacrolimus voriconazole case.
3. **Fixes stayed local.** Reviews logged "same error on page X, not fixed" and moved on. Fixed by the 2026-11-15 rule below.
4. **Cards were written from unreviewed pages,** so page errors were copied into notes.
5. **Unknown reviewer accuracy.** No page has had a second independent review, so we don't know the reviewer's own error or miss rate.

## Done so far

- 2026-11-10: release quality sweep started (page review on every cron run, card review in each card pass).
- 2026-11-15: budgets raised (review $45, cards $25 per run). About 30 pages and 25 card files a day.
- 2026-11-15: CLAUDE.md rule **Fix every copy, this pass**, in both page and card review. When a fidelity error is found, grep `wiki/`, `sources/`, `index.md` and the cards for the same claim and fix all verified copies in the same pass. Known errors are no longer deferred.
- 2026-11-15: errors logged as unfixed were corrected from the raw PDFs in an interactive session: `hiv-aids-related-diarrhea` (nitazoxanide + cART), `gerd` (off-therapy), `acute-diarrhea` (Campylobacter claim), `calcineurin-inhibitors` (voriconazole column, hyperlipidemia, brand name, MMF link-out), `achalasia` (grades, circular pointer, timed barium), `biliary-stricture` / `cholangiocarcinoma` / `ampullary-adenoma` (IDUS). See `wiki/log.md` 2026-11-15 entry.

- 2026-11-16: **reviewer accuracy measured.** 12 random reviewed pages re-checked blind against their PDFs by fresh agents (852 claims): 25 leftover errors on 11 pages, 3 pages with a management-changing one; 18 missed by the review, 7 introduced by it (all minor). Calibration: 36 of 36 planted errors caught. All 25 fixed; the 12 pages carry `verified:`.
- 2026-11-16: **five known-bad source pages rebuilt from their PDFs and independently checked** (`acg-2020-achalasia`, `asge-2020-achalasia`, `sages-2024-poem`, `acg-2024-focal-liver-lesions`, `acg-2024-hp-treatment`); copies fixed on 10 topic pages. Worst finds: an invented H. pylori salvage table and <55 test-and-treat age; an invented cirrhosis-surveillance row and LI-RADS criteria credited to ACG 2024; SAGES type III stated as a conditional recommendation (it is expert opinion).
- 2026-11-16: **36 owed items in the log checked: 30 fixed, 5 already correct, 1 not checked** (Givlaari label wording; file only on the server).
- 2026-11-16: **system changes** (commit "Source fidelity: verified ingest…"):
  - `raw:` frontmatter on 456/457 source pages (file each page was built from).
  - `website_files/scripts/fidelity-check.py` — mechanical net for numbers/grades not in the cited file (about a third of planted errors; cannot judge meaning).
  - CLAUDE.md: *No file, no claim*; *Verified ingest* (extract → gate → independent check → propagate → gate + check → cards); *Verification* brief; `verified:` frontmatter; Quality review ends with the independent check and verifies source pages first; new cards only from verified pages.
  - `review-queue.py`: verify-only rows, `--sources` queue, card re-check queue, verified counts in `--status`.
  - Patched cron script staged on the server as `lint-cron.sh.staged-2026-11-16` (prompts + allowed tool; budgets unchanged). **Not active until the repo commit is pushed and the file is moved into place.**

## Open work

1. **Push + activate.** `git push` the local commit, then on the server: `cp lint-cron.sh lint-cron.sh.bak-2026-11-16 && mv lint-cron.sh.staged-2026-11-16 lint-cron.sh` in `/mnt/LeStorage/Applications/giwiki/`. Do it in that order: the new prompts need the new CLAUDE.md and script in `/repo`.
2. **Coverage.** Topic pages: 136/370 reviewed, 12/370 verified. Source pages: 5/457 verified. The cron works both queues inside the existing budgets, so pages per run drop (each page now also gets its source pages checked and a blind check). Watch `review-queue.py --status`; if the pace is too slow, the lever is budget, which is Nick's call.
3. **Cards.** New cards are gated on `verified:`; card files requeue for re-check when their page is verified. A one-off pass on 2026-11-16 corrected the notes carrying the facts fixed that day (see `wiki/log.md`). The rest of the deck is only as good as the pages it was built from until the queue reaches it.
4. **Source pages with no real file:** `acg-2017-hp-guidelines` (claims removed), `chang-2024-endoscopic-oncologist`, `nejm-2023-fever-returning-traveler` (citation-only pages mapped to a Notion note). Decide: delete, or add the full text to `raw/`.
5. **Raw folder drift.** The server's `/repo` raw holds 56 files the laptop's Nextcloud copy lacks (13 drug labels, old-named duplicates of renamed AGA files). Duplicates confuse the "uningested file" audit; labels never reached Nextcloud.
6. **`fidelity-check.py` limits.** Values inside image-only tables and `.docx` supplements show as ABSENT; they need the rendered page. Flags are a worklist, not a verdict.
7. **Not yet done:** a wrapper-level check in `lint-cron.sh` that runs `fidelity-check.py` on the pages each pass changed and emails when a pass leaves ABSENT/OTHER flags; risk-ordering the review queue by flag count.

## Constraints

- Source fidelity rules in CLAUDE.md are binding: ingested raw sources only, no outside knowledge, no maintainer notes on public pages.
- Cards are **server only** (`/cards` in the `giwiki` container on TrueNAS). Never recreate a laptop copy.
- The cron (`/mnt/LeStorage/Applications/giwiki/lint-cron.sh`, q6h at 00/06/12/18 PT) hard-resets `/repo`. Commit and push interactive edits; patch the script atomically (temp file + `mv`).
- Spend: about 75% of the weekly plan across cron and Nick/Mimi's use. NCCN content is off-limits (EULA).
- Progress: `python3 website_files/scripts/review-queue.py --status` in the container.
