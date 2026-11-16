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

## Open work

1. **The 241 pages not yet reviewed** probably have the same error rate. At the current pace that is about 8 days.
2. **Known-bad source pages need re-ingest, not patching:** `acg-2020-achalasia`, `asge-2020-achalasia`, `acg-2024-focal-liver-lesions`, `sages-2024-poem`, `acg-2024-hp-treatment`. There may be others. Every `wiki/sources/` page should be audited for invented grades, numbers and authors, since entity pages inherit them.
3. **Other "owed" fixes in `wiki/log.md`.** Search the log since 2026-11-10 for "not fixed", "not made", "later pass", "owed", "needs the identical fix", "for the card pass". Example: `wiki/sources/aga-2025-cade-colonoscopy.md` says there is no SSL detection gain, but Table 2 gives RR 1.21.
4. **Cards built from unreviewed pages.** Card review currently corrects about one note per file. The deck needs the same treatment as the pages, ideally re-checked after the owner page is reviewed.
5. **Measure reviewer accuracy.** Independently re-review a random sample of about 10 already-reviewed pages against the PDFs and report the miss rate. If it is high, the review method needs changing, not just more budget.
6. **Prevent recurrence at ingest.** Tighten INGEST so source pages quote recommendation text, grade and table values verbatim with page/table references, and add a verification step before propagation.

## Constraints

- Source fidelity rules in CLAUDE.md are binding: ingested raw sources only, no outside knowledge, no maintainer notes on public pages.
- Cards are **server only** (`/cards` in the `giwiki` container on TrueNAS). Never recreate a laptop copy.
- The cron (`/mnt/LeStorage/Applications/giwiki/lint-cron.sh`, q6h at 00/06/12/18 PT) hard-resets `/repo`. Commit and push interactive edits; patch the script atomically (temp file + `mv`).
- Spend: about 75% of the weekly plan across cron and Nick/Mimi's use. NCCN content is off-limits (EULA).
- Progress: `python3 website_files/scripts/review-queue.py --status` in the container.
