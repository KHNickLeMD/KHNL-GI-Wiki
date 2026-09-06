# Wiki Log

Append-only chronological record. Each entry: `## [YYYY-MM-DD] TYPE | Title`

Parse last 5 entries: `grep "^## \[" wiki/log.md | tail -5`

---

## [2026-09-06] lint | Four-batch parallel sweep — ASGE 2023's EAC ESD size threshold had been deleted from its source page; 2 AGA CPUs ingested; IL-23 class page created

**The finding that mattered — a size threshold lost in summarization.**

- [[asge-2023-esd]]'s *Key Recommendations* had flattened Table 2 into four bullets. The EAC row lost its threshold entirely — it read *"ESD over EMR for early-stage lesions (especially larger/nodular); smaller flat lesions may use either,"* with **no mention of the >20 mm cutoff that is the decision**. The GAC **20–30 mm** band (where ESD *is* preferred) was gone, and two rows where the guideline explicitly says *"we do not make a recommendation"* had been rewritten as *"either ESD or EMR"* — a recommendation the ASGE declined to make.
- Verified against Table 2 of the raw PDF and rebuilt as a 9-row table with an inline correction notice. The source is itself internally inconsistent: its **abstract** says "either ESD or EMR" for ESCC ≤15 mm while **Table 2** says no recommendation. Both recorded, table flagged as the formal set.
- This is the threshold that separates ASGE 2023 from [[aga-2024-barretts-eet]] (which selects by morphology and prior failure, not size) — the divergence is now surfaced on [[barretts-esophagus]] too.

**Sources ingested (2 — the per-pass cap; queue items #1 and #2):**

- [[aga-2021-bleeding-gastric-varices]] — all **12 BPA verbatim**. Location-based classification (cardiofundal / lesser curve / distal) proposed over Sarin, plus size and high-risk stigmata; Saad-Caldwell vascular classification. Pathway is hemostasis → **portal-venous-phase CT/MR** → multidisciplinary decision. **Cardiofundal → cyanoacrylate is the only definitive endoscopic therapy** (butyl over octyl, no lipiodol, embolization 0.7%); **lesser curve → band ligation is often definitive**. **GRS present → BRTO**; **coronary-vein inflow or comorbid pHTN → TIPS, always with embolization**. Full Table 2 initial-management algorithm. **No primary prophylaxis** (BPA 1).
- [[aga-2021-gi-perforations-endoscopic-management]] — all **16 BPA verbatim**. Closure device chosen by **defect size**, organ by organ, captured as a size × organ table; the two absolute surgical indications (unstable, or delayed with peritoneal signs); ERCP **type 1 vs type 2** perforations with sphincterotomy-technique prevention rules; ESD/EMR/POEM/colonoscopy perforation rates and risk factors.

**Pages created (1 — coverage-gap queue item #3):**

- [[il-23-and-il-12-23-inhibitors]] — ustekinumab (anti-p40) vs risankizumab / mirikizumab / guselkumab (anti-p19). **Dosing differs by indication, not just by drug** (risankizumab 1200 mg IV in UC vs 600 mg IV in CD; mirikizumab IV in UC, SC in CD; guselkumab has two separate CD regimens) — recorded as the predictable substitution error. The one evidence-based intra-class split is **risankizumab over ustekinumab after anti-TNF exposure in CD** (SEQUENCE). Surfaced that AGA 2024 tiers mirikizumab below ustekinumab in UC while ACG 2025 grades them equally.

**Source-fidelity corrections beyond the ASGE one:**

- [[liver-transplantation]] — four *Recurrent Disease Management* blocks (PSC, AIH, ALD, MASLD) cited **entity pages instead of the source** and carried **wrong recommendation numbers** that collided with the correctly-cited HBV/HCV/PBC blocks on the same page. Re-cited to [[aasld-2012-liver-transplant-long-term]] with the actual numbers (Rec 85; 86; 87–90; 91–92).
- [[abnormal-liver-chemistries]] — over-linking had produced a factual error: "MRCP preferred for PSC diagnosis" had become "cholangioscopy for sclerosing cholangitis evaluation." Restored.
- [[gastric-polyps]] — `[[helicobacter-pylori-infection|ACG 2024]]` pointed at the disease page while the alias named the guideline; retargeted to [[acg-2024-hp-treatment]], which was also missing from the source list despite its claim being asserted in the body.
- [[colorectal-cancer]] — `## Sources` #9 cited [[usmstf-2014-lynch-syndrome]] under a title it does not have; corrected.
- [[subepithelial-lesion]] — reproduced the ASGE 2017 GIST size × mitotic-rate table that [[gastrointestinal-stromal-tumor]] already carries in its **newer NCCN 2026 form** and records as superseded; replaced with a pointer (one home per fact).
- [[biofeedback-therapy]] — asserted ACG 2021's "ARM *and* BET required" with no Rome V caveat, contradicting [[anorectal-manometry]] and [[defecation-disorders]], which both assert Rome V's 1-of-3 rule. Version caveat added.
- [[distal-esophageal-spasm]], [[esophagogastric-junction-outflow-obstruction]] — the pre-antireflux-surgery decision from [[padova-2025-hrm-antireflux]] was on sibling pages but missing here.
- Cited-but-undeclared sources added to frontmatter and `## Sources`: [[upper-gi-bleeding]] (cites [[aga-2020-nvugib-endoscopic-therapies]] 5×, including the whole AIMS65 table), [[celiac-disease]] ([[aga-2022-refractory-celiac]] backs its entire NRCD/RCD half), [[hepatic-encephalopathy]] ([[baveno-vii-2022-portal-hypertension]]).

**Hygiene fixes:**

- **11 broken wiki links** repaired or de-linked (`masld`→`nafld-masld`; `polypectomy-emr`→`polypectomy` / `endoscopic-mucosal-resection`; `epinephrine`, `chromoendoscopy`, `mesalamine`, `budesonide`, `ct-enterography`, `malabsorption`, `small-bowel-bacterial-overgrowth`, `ileal-pouch-anal-anastomosis`, `jak-inhibitors`).
- **24 stale index source counts** reconciled against page frontmatter.
- 2 unescaped alias pipes escaped in `index.md`; 1 redundant alias (`[[ascites|ascites]]`) simplified.
- Index footer counts corrected (**275 sources**, 6 general procedures, 33 meds), and the ingest-backlog line rewritten — it still claimed **≈77** uningested files against a re-audited **46**.
- **Solitary rectal ulcer syndrome** — five references across the wiki aliased to `[[rectal-prolapse]]` as a whole. The corpus supports only what already lives in that page's SRUS section, so a separate page would duplicate it; all five now anchor to `[[rectal-prolapse#Solitary Rectal Ulcer Syndrome]]`. Removed from *Needs a source* with the reasoning recorded.

**Connectivity:**

- [[il-23-and-il-12-23-inhibitors]] was created mid-pass and was orphaned except from the index; now linked from 10 pages that named its agents in plain text — [[ulcerative-colitis]], [[crohns-disease]], [[pouchitis]], [[chronic-hepatitis-b]], [[sclerosing-mesenteritis]], [[vedolizumab]], [[anti-tnf-agents]], [[ibd-preventive-care]], [[ibd-in-malignancy]], [[intestinal-ultrasound]].
- [[endoscopic-hemostasis]] (created 2026-09-06) had the same problem — four procedure pages predating it discussed the bleeding it treats without linking it; [[upper-endoscopy]], [[colonoscopy]], [[polypectomy]] and [[ercp]] now link it inline and in See Also.
- [[postinfectious-ibs]] gained *Shigella* as a trigger, cited to [[idsa-2017-infectious-diarrhea]] Table 5 — kept **separate** from the ACG-sourced pathogen bullet, which does not name it.
- ~60 further inline first-mention links added across the four batches.

**Method:** four parallel batch subagents (foregut + hepatology / colorectal + pancreaticobiliary + other / schemas + procedures / meds + concepts), which themselves fanned out to sub-workers. Shared files (`index.md`, `log.md`, `overview.md`) and every cross-batch entity edit were serialized centrally.

**Verified clean wiki-wide after the pass:** 555 pages, **0 orphans**, **0 broken links**, 0 dangling frontmatter source slugs, 0 frontmatter defects, 0 stubs, 0 unescaped alias pipes, 0 legacy See-Also headings, 0 `.DS_Store`. 140/141 disease scripts carry the italic DDx schema pointer; the exception, [[post-transplant-lymphoproliferative-disorder]], documents why it has none.

**For user triage — cross-page contradictions found but NOT adjudicated.** Each needs a raw-PDF read that did not fit this pass's budget:

- **VCE false-negative rate — same citation, two answers.** [[capsule-endoscopy]] says **10–36%**; [[device-assisted-enteroscopy]] says **11%** (19% for neoplasms). Both cite [[acg-2015-small-bowel-bleeding]].
- **Post-POEM abnormal acid exposure.** [[heller-myotomy]] says **~39%** (ACG 2020); [[poem]] says **41–56%** (AGA 2024, newer). Unreconciled.
- **POEM after failed Heller.** [[heller-myotomy]] and [[pneumatic-dilation]] say **94%–95.7%** (case series); [[poem]] says **62% vs 27%** (RCT). Different designs, unstated on either page.
- **eFTR size ceiling.** [[colorectal-esd]] says **<30 mm** (USMSTF 2020) while its own text elsewhere says ≤20 mm; [[endoscopic-full-thickness-resection]] says **<15 mm SEL / ≤20 mm mucosal** (AGA 2024, newer).
- **APC probe distance.** [[argon-plasma-coagulation]] — the declared settings home — says **1–3 mm**; [[endoscopic-hemostasis]] says **2–10 mm** for ulcers. The APC page's settings-by-site table also has no ulcer row despite [[acg-2021-ugib]] being one of its sources.
- **[[aga-2022-hamartomatous-polyposis]] does not satisfy the guideline recommendation-capture rule** — a ~50-line summary, while [[peutz-jeghers-syndrome]], [[juvenile-polyposis-syndrome]] and [[cowden-syndrome]] carry detail that clearly came from the raw PDF, including an NCCN 2020 comparison column with no traceable provenance. Worth a re-ingest.
- **[[inflammatory-bowel-disease]] sits in `7-concepts/`** as a navigational hub, but its *Inpatient Management* section carries real clinical content from [[aga-2026-inpatient-ibd]]. Either move that section into the two disease scripts or ratify the page as a deliberate cross-cutting framework. Not moved — needs Nick's call.

**Remaining ingest backlog:** **46** AGA Clinical Practice Updates, all in `raw/GI Guidelines/AGA/`, enumerated in `index.md` → *Coverage Gaps* → *Blocked on ingest*. Every other society folder is fully ingested. The **34 gated lecture/chalk-talk transcripts** were not touched and never will be on a scheduled pass — Nick names which to ingest.

---

## [2026-09-04] lint | Vedolizumab's induction schedule was fabricated on two ACG source pages; orphaned AGA 2020 pancreas-screening CPU integrated; SBS + AIP ingested

**The finding that mattered — an invented dose, propagated.**

- `wiki/sources/acg-2025-uc.md` and `wiki/sources/acg-2025-crohns.md` both listed **"Vedolizumab IV — 300 mg wk 0, 2, 6"** in their Drug Dosing Summary tables, and `crohns-disease.md` had inherited it.
- **No ingested source states a week-6 vedolizumab induction dose for IBD.** Verified directly against both raw PDFs: ACG 2025 UC gives *"300 mg at weeks 0 and 2"* with responders randomised at week 6 (GEMINI 1, VISIBLE); ACG 2025 CD gives *"300 mg at week 0 and week 2"* and Rec 16 says *"2 intravenous induction doses."* `grep "300 mg"` returns no 0/2/6 in either file.
- The "0, 2, 6" pattern is the **infliximab** row directly above it in both tables — it was carried across. The only 0/2/6 vedolizumab schedule anywhere in the corpus is in [[aga-2021-ici-colitis-hepatitis]], for **ICI colitis**, not IBD.
- Corrected in all three places with an explicit do-not-restore note. This is the failure mode the source-fidelity rule exists to catch: a plausible number, adjacent to a real one, never in the source.

**Second finding — a tier-1 source ingested yesterday had landed on no entity page.**

- [[aga-2020-pancreas-cancer-screening]] (ingested 2026-09-03) was a whole-wiki orphan. Integrated into [[pancreatic-cancer-screening]]: the lesion-based interval ladder (12 mo / 6–12 / 3–6 / 3 mo, BPA 9), the new-onset-diabetes trigger, the stop rule (BPA 12 — the only one in the corpus), the screening target (BPA 8), and the registry/Center-of-Excellence requirements.
- **Two contradictions with the newer [[asge-2022-pancreatic-cancer-screening|ASGE 2022]] surfaced but not followed** (per source priority — newer wins within tier 1): AGA requires MRI **and** EUS *in combination*; AGA requires ≥1 affected first-degree relative for BRCA1/2, PALB2 and ATM. Both stated on the page because readers carry the old rules.
- That page had also carried a stale gap note saying this CPU "would be needed" for an operative threshold. It is now ingested and **explicitly scopes itself out** of managing abnormal findings, so the gap stands with only Goggins 2020 (CAPS) named.
- This is the **third consecutive pass** to find an orphaned tier-1 source (cf. 2026-08-29 ×2). Worth treating as a standing check, not an incident.

**Sources ingested (2, the per-pass cap — both from the top of the queue):**

- [[aga-2022-short-bowel-syndrome]] — AGA 2022 CPU, 12 Best Practice Advice, captured in full → new page [[short-bowel-syndrome]].
- [[aga-2019-autoimmune-pancreatitis]] — → new page [[autoimmune-pancreatitis]]. **Confirmed on reading that it is *not* a CPU**: an AGA "Here and Now" expert column with zero numbered BPAs and no GRADE ratings. Recorded as such, and **no Anki cards written** — it does not meet the tier-1 guideline/CPU/consensus test.

**Coverage gap filled (1):**

- [[vedolizumab]] — queue item #2. Built on **[[acg-2025-uc]], not `acg-2019-uc`** as the queue specified; the 2025 UC guideline supersedes it. Queue items 3–7 named the 2019 guideline too and were corrected.

**Decision gaps closed:**

- [[esophageal-adenocarcinoma]] — T-stage definitions (what the pathologist must see for Tis/T1a/T1b sm1/sm2–3, with the 500 µm boundary) and the endoscopic-vs-surgical resection criteria: the sm1 exception needs **all four** low-risk features, and adverse histology overrides depth.
- [[brca-pathogenic-variants]] — surveillance interval (annual) and modality, which the page had deferred entirely; plus ASGE's "initiate with caution" directive for BRCA1.
- [[brush-cytology]] — how to act on the result (a positive is acted on; a negative excludes nothing and converts the stricture to indeterminate) and when brushing is the wrong test.

**Source-fidelity defects corrected (beyond vedolizumab):**

- [[esophageal-adenocarcinoma]] + [[barretts-esophagus]] — the "changes management in ~30%" figure was attributed to [[asge-2018-barretts-eet]], which in fact states that outcome "was not consistently reported across published studies." It is **[[acg-2022-barretts]]** (30–40%). Re-attributed on both pages.
- [[esophageal-adenocarcinoma]] + [[endoscopic-eradication-therapy]] — the 500 µm / sm1–sm3 depth thresholds were attributed to ASGE 2018, which gives only "T1b sm2-3." Re-attributed to ACG 2022.
- [[brca-pathogenic-variants]] — start ages were labelled ASGE 2022 "Rec 5"; they are Rec 6(a)/6(b).

**Decision gaps left open (flagged, not filled — no ingested source supports them):**

- [[autoimmune-pancreatitis]] — **the entire steroid regimen.** The article carries its treatment algorithm in Figure 1, a raster image with no text layer; no milligram and no interval appears anywhere in the prose. Missing: agent, induction dose/duration, taper, reassessment interval, immunomodulator and rituximab regimens, maintenance duration. Needs figure capture or **Okazaki 2017, *Pancreatology* 17:1–6**. The ICDC's component criteria are likewise named but not printed — needs **Shimosegawa 2011, *Pancreas* 40:352–358**.
- [[short-bowel-syndrome]] — teduglutide dose (source gives route only), PN kcal/protein targets, malabsorption test thresholds. Table 1's microgram units are rendered "mg" by the PDF text layer for four entries; transcribed as extracted with a visible verify-before-dosing caveat rather than substituted from outside knowledge.
- [[vedolizumab]] — infusion reaction rates, TB/HBV pre-screening, immunogenicity, escalated dosing: none stated for this agent in any ingested source (the anti-TNF data do not transfer).
- [[brush-cytology]] — no numeric specificity/PPV exists in either ingested source.
- [[brca-pathogenic-variants]] — non-GI (breast/ovarian) surveillance is not in the corpus; NCCN Genetic/Familial High-Risk Assessment is absent from `raw/GI Guidelines/NCCN/`.

**Hygiene fixes:**

- **24 stale index source counts** corrected (all undercounts).
- **23 inline links** added across the wiki, converting first plain-text mentions to `[[slug|Alias]]`; the two new disease pages went from orphan to 5 inbound links each.
- Index updated: 3 new page entries, 2 new source entries, queue items struck through, footer counts corrected (267 sources / 141 disease scripts / 32 meds).
- Verified clean: **0 broken links, 0 orphan pages, 0 unescaped alias pipes in tables, 0 OS artifacts, 0 frontmatter/date anomalies** across 545 pages.

**Ingest-detection correction (recorded in `index.md`):**

- `raw/`'s content subfolders are **git-ignored** (only `raw/assets/` is tracked), so newly synced files **never appear in `git status`**, and the rsync rewrites mtimes so `find -newermt` is useless. Detect arrivals by matching raw basenames against `wiki/sources/` titles.
- A stricter match puts the backlog at **≈77 uningested guideline files**, not the ~50 previously recorded. Two high-value non-AGA targets surfaced that the queue table omitted: **ASGE 2025 GERD** (newest tier-1 guideline on a core topic) and **AFS 2024 GE-valve assessment**. ASGE 2025 GERD placed at the head of the queue.

**Remaining for user triage:**

- **83 pages over 4 KB carry no `## Contents` ToC.** Left alone — the right-rail outline is auto-built from headings, so this is a consistency question, not a rendering break. Say the word and it's a mechanical pass.
- Gated lecture/chalk-talk corpus: **34 transcripts**, untouched and never auto-ingested. Name the ones you want and they go in.

---

## [2026-09-04] lint | The index was declaring the ingest queue empty while ~50 tier-1 AGA CPUs sat uningested; 2 ingested; ICI-hepatitis grade-4 gap closed

**The finding that mattered — `index.md` was wrong about the state of `raw/`.**

- *Coverage Gaps → Blocked on ingest* read **"empty — every remaining uningested file in `raw/` is a gated lecture/chalk talk."** That was **false**. An inbox sync has delivered a large batch of **tier-1 AGA Clinical Practice Updates** (mostly 2016–2023) into `raw/GI Guidelines/AGA/`.
- `raw/` now holds **430** non-asset files against **265** source pages. Roughly **50 AGA CPUs are uningested** — all tier-1, all ahead of the gated lecture corpus in ingestion priority. The index was telling every future pass there was nothing left to ingest but lectures.
- Replaced the false line with the **full uningested queue as a table**, each row naming the wiki topic it unblocks.
- Detection note: the previous pass's raw-vs-sources diff missed this because raw PDFs are gitignored and the rsync touches mtimes, so neither `git status` nor `find -newermt` reveals new arrivals. A **token-overlap match of raw filenames against source-page titles** is what surfaced it; recommend that as the standing check.

**Three entries were misfiled in *Needs a source*** — all three had support sitting in the repo:

- **Autoimmune pancreatitis** and **short bowel syndrome / intestinal failure** — the PDFs are in `raw/GI Guidelines/AGA/`. Moved to *Blocked on ingest*.
- **STEC/HUS** — [[idsa-2017-infectious-diarrhea]] (Recs 6/8/21/23/26/35/60) and [[acg-2016-acute-diarrhea]] already support it, including the do-not-give-antibiotics rule. Promoted to *Fillable now* (#31).

**Sources created (2 — the per-pass ingest cap):**

- [[aga-2021-ici-colitis-hepatitis]] — Dougan, Wang, Rubio-Tapia, Lim. *Gastroenterology* 2021;160:1384–1393. All **15** Best Practice Advice statements verbatim (ungraded by design); CTCAE v5 GI grading, MD Anderson and Mayo endoscopic scores, and the grade-directed hepatitis table recreated as native Markdown.
- [[aga-2022-ppi-deprescribing]] — Targownik, Fisher, Saini. *Gastroenterology* 2022;162:1334–1342. All **10** BPA verbatim; Table 1 (indications × long-term/acute) and Table 2 (six societies' gastroprotection populations) recreated in full.

**Pages created (2):**

- [[immune-checkpoint-inhibitor-colitis]] (`1-disease-scripts/colorectal-diseases/inflammation/`) — the wiki had an ICI *hepatitis* page but none for ICI colitis, the far more common toxicity. Full ADDT: CTCAE grading, the endoscopy-before-steroids rule, stool-marker triage, both endoscopic severity tools, the glucocorticoid → biologic ladder with escalation triggers, budesonide's two opposite answers, retreatment risk, and the IBD population data.
- [[anti-tnf-agents]] (`5-meds/`) — coverage-gap queue #1, cleared.

**Pages updated (3, by me centrally):**

- [[immune-checkpoint-inhibitor-hepatitis]] — **four flagged decision gaps closed.** The page previously warned that a patient with ALT >20× ULN "falls outside every row" because [[aasld-2022-dili]] writes a bounded 5–20× range under a label reading "grade 3 **or higher**" and never defines grade 4. BPA 13 supplies it verbatim (AST/ALT >20× ULN, bilirubin >10× ULN, or hepatic decompensation). Also closed: the **steroid non-response interval** (3–5 days), the **taper duration** (4–6 weeks), a **role for [[tacrolimus]]**, and the **agent behind "IV steroids"** — the page had explicitly refused to assume methylprednisolone from memory; BPA 12/13 name it. Added incidence (<5% mono vs ~25% ipi+nivo), BPA 10 monitoring, the full alternative-etiology workup, the ALP/bilirubin → biliary-imaging rule, biopsy timing, and histology. *Still open: no dose for MMF/azathioprine/tacrolimus.*
- [[proton-pump-inhibitors]] — new de-prescribing framework: the indications grid, the UGIB high-risk criteria that forbid stopping, BID→daily step-down, rebound acid hypersecretion with its mechanism and 2-month red flag, taper-vs-abrupt, and BPA 10.
- [[aga-2026-electrosurgery]] — stripped leaked `</content>`/`</invoke>` tool-call artifacts from the file tail (the recurring corruption class; see entries at lines 612, 645, 857, 1138).

**Contradictions surfaced:**

- **Rebound acid hypersecretion — resolved for the newer source.** [[acg-2021-gerd]] says "strong evidence for increased symptoms after abrupt withdrawal is lacking"; [[aga-2022-ppi-deprescribing]] treats RAHS as real and warrant of an explicit patient warning, citing a double-blinded RCT. Same tier, 2022 > 2021 → wiki asserts AGA; ACG wording recorded inline.
- **Infliximab points opposite ways in the two organs** — first-choice rescue in ICI colitis, but *cautioned* in ICI hepatitis (idiosyncratic liver toxicity, no demonstrated benefit). In a patient with both, the source defers to case-by-case. Stated on both pages.
- **CTCAE grade is not prognostic in ICI colitis** — the CPU is explicit that colonic ulceration predicts need for second-line therapy and CTCAE grading does not, even though oncology-side algorithms are built on CTCAE grade.
- **[[aga-2022-ppi-deprescribing]] contradicts itself on the UGIB age cutoff** — synthesized criteria say **>60 years**, its own Table 2 (ACG 2009) says **>65**. Both recorded; neither reconciled by the source.
- **Grade-3 steroid dose differs between sources** — [[aasld-2022-dili]] 1–1.5 mg/kg/d vs [[aga-2021-ici-colitis-hepatitis]] 1–2 mg/kg. AASLD is newer and governs; the AGA figure is named beside it.
- **BPA 10 vs the PAAE literature** — concordant with [[aga-2026-cdiff-adults]] (continue if indicated, never dose-reduce), so no conflict; noted explicitly so the *C. difficile* risk data on the PPI page isn't misread as a reason to stop.

**Method:** six parallel batch agents (foregut / colorectal / hepatology / pancreaticobiliary+other / schemas+procedures / meds+concepts) over all 271 non-source pages; shared files (`index.md`, `log.md`, cross-batch pages) written centrally afterward.

**Batch fixes (26 pages edited across the six batches):**

- **Schemas:** `## Red Flags / Alarm Features` was out of canonical order on 4 diagnostic schemas ([[acute-diarrhea]], [[gastric-outlet-obstruction]], [[small-bowel-bleeding]], [[biliary-stricture]]) — moved after `## Key Tests`, ToCs reordered. `upper-gi-bleeding` ToC was missing 4 anchors.
- **Frontmatter/`## Sources` desync — 9 pages** cited a source slug in the body that was absent from `sources:` and `## Sources`: [[ascites]], [[tips]], [[upper-gi-bleeding]], [[acute-diarrhea]], [[cholangioscopy]], [[eus-guided-gallbladder-drainage]], [[spontaneous-bacterial-peritonitis]], [[autoimmune-hepatitis]], [[primary-biliary-cholangitis]].
- **Two stale internal Baveno cross-references** — [[budd-chiari-syndrome]] and [[portal-vein-thrombosis]] pointed at "the Baveno VII definition above" when the section above is now Baveno VIII. On BCS this mattered: endoluminal neoplastic obstruction is precisely the limb VIII added.
- **Dedup** — the RETREAT score block was printed **twice verbatim** on [[hepatocellular-carcinoma]]; second copy replaced with a pointer. [[hepatocellular-carcinoma]] also mis-labelled the [[cirrhosis]] formula as MELD-Na when that page explicitly flags it as MELD 3.0.
- ~20 inline `[[slug|alias]]` links added across foregut, colorectal, pancreaticobiliary, meds and concepts batches; several See Also lines completed where a page was body-linked but missing from See Also.
- Whole-wiki link scan: **0 broken wiki-links, 0 broken image embeds, 0 unescaped alias pipes in tables, 0 literal `\n` in Mermaid** after fixes.

**Left for user triage (not fixed — these need a decision or a raw-PDF check, not a link edit):**

- **[[colorectal-polyposis]] and [[serrated-polyposis-syndrome]] give different SPS criteria.** The schema page prints WHO 2010/ACG 2015 and asserts "no ingested source carries the revision" — but the disease page carries newer [[usmstf-2020-followup-colonoscopy]] thresholds. One of the two is wrong.
- **[[crohns-disease]] says NBI should *not* be used for IBD dysplasia surveillance (ACG 2018); [[ulcerative-colitis]] accepts it (ACG 2019).** The CD claim rests on the superseded `acg-2018-crohns` while [[acg-2025-crohns]] is ingested — likely stale.
- **[[ulcerative-colitis]] reproduces Truelove & Witts with the fever and heart-rate cutoffs dropped** ("fever, tachycardia, anemia"). Exactly the dropped-qualifier failure the Content Guide names; fixable from raw [[acg-2025-uc]].
- **[[interventional-eus-vascular]] contradicts itself** on the Wang 2026 Delphi consensus size — "43-statement" (line 33) vs "53 statements" (line 109). Needs a raw-PDF check.
- **[[helicobacter-pylori-infection]]** states in its own gap box that the ACG 2017 PDF is **not in `raw/`**, yet `acg-2017-hp-guidelines` remains in its frontmatter and backs an inline claim. Restore the raw file or rest that claim on [[acg-2024-hp-treatment]].
- **[[clostridioides-difficile]]** — "post-infection IBS ~25%" is uncited and absent from both relevant source pages.
- **[[cowden-syndrome]]** prints CRC risk three ways (9–16%, 9–18%, 9.0%) — likely a transcription slip.
- **[[chronic-idiopathic-constipation]]** vs [[irritable-bowel-syndrome]] on plecanatide 6 mg ("never approved" is in neither source page); vs [[defecation-disorders]] on whether the balloon expulsion test uses a Foley; and a stale "withdrawn in US" parenthetical on tegaserod.
- **[[nonampullary-duodenal-adenoma]]** flags Spigelman-interval differences from [[familial-adenomatous-polyposis]] (stage IV **6–12 mo vs 3–6 mo**) but FAP carries no reciprocal flag.
- **[[alcohol-associated-liver-disease]]** prints MELD "severe ≥21" in one table and "MELD >20" as its operative rule 20 lines earlier.
- **[[microscopic-colitis]] has an empty Therapeutics section** and lacks its defining histologic thresholds — needs a dedicated microscopic-colitis guideline (not in `raw/`).
- **The Sydney biopsy protocol is written out in full on four gastric pages** — one home + links would satisfy one-home-per-fact.

**Tooling gaps (unchanged):** PyMuPDF is still absent, so no figure crops. This blocks, among others, the **LA grade A–D** and **Hill I–IV** criteria — which gate ≥6 recommendations across [[gerd]], [[upper-endoscopy]] and [[antireflux-surgery]] — even though both are printed as figures in already-ingested sources. Also blocks OLGA/OLGIM staging grids, EREFS per-feature points, Forrest endoscopic images, and Figures 1–4 of the ICI CPU (two of which are exactly the "diagnosis made by looking" images the Style Guide requires). **`pdftotext` silently drops `≥`, `≤` and `×`** from these PDFs; thresholds in both ingests were reconstructed from internal consistency and the reconstruction is documented on each source page.

**Structural note:** `wiki/6-anatomy/` is defined in the CLAUDE.md schema but **does not exist on disk** and never has — the index's "0 anatomy" count is accurate but the folder is absent, not empty.

---

## [2026-09-03] ingest | Baveno VIII (2026) — Advancing Consensus in Portal Hypertension

**Source created:**

- [[baveno-viii-2026-portal-hypertension]] — EASL/ESGE/ERN RARE-LIVER consensus, J Hepatol 2026 (accepted pre-proof), doi:10.1016/j.jhep.2026.07.030. All **272** statements captured verbatim/near-verbatim with LoE, SoR, change status and % agreement, by panel; plus a 45-row *What changed from Baveno VII* table, the 5 figures recreated as text/Mermaid, and the prior-Baveno still-valid box.

**Supersession:**

- Baveno VIII replaces [[baveno-vii-2022-portal-hypertension]] as the wiki's portal-hypertension authority. Every page below states the VIII position and names the old value beside it, per Content Guide → *if a rule changed between guideline versions, say what changed*. Baveno VII was also moved out of the `### AASLD` index section, where it had been mis-filed, into a new `### EASL` section beside VIII and flagged as superseded.

**Pages updated (16):**

- [[portal-hypertension]] — new 3-limb non-invasive CSPH diagnosis (ANTICIPATE/NICER ≥75%, LSM ≥25 kPa, SSM 100 Hz >55 kPa); revised endoscopy-sparing rule and 2 y/3 y repeat-EGD intervals; NITs in HCC; statin/anticoagulation reversal; gastric-variceal primary prophylaxis; pre-operative TIPS; paediatric statements; NSBB-stop rules after recompensation
- [[cirrhosis]] — Baveno VIII stage definitions, the event-specific further-decompensation table, and the rewritten recompensation criteria (CTP A5/A6, >6 months, TIPS eligible)
- [[porto-sinusoidal-vascular-disorder]] — rewritten: PSVD/NCPF dual nomenclature, point-scoring diagnosis, ≥15 mm biopsy, SSM+bilirubin endoscopy escape, 2 y/1 y surveillance
- [[portal-vein-thrombosis]] — VALDIG remnant-lumen occlusion criteria, risk-factor-stratified long-term anticoagulation, 3-month stopping rule, cirrhotic-PVT surveillance and post-TIPS AC, new paediatric section
- [[budd-chiari-syndrome]] — biopsy rules, AFP >15 ng/mL, LI-RADS exclusion, 2-weekly response assessment, prognostic scores demoted to research use
- [[variceal-upper-gi-bleeding]], [[tips]] — p-TIPS band and delayed window, futility-rule withdrawal, 24 h vasoactive option, individualized antibiotics, EUS coil + glue for GOV2/IGV1, EVL over APC for GAVE, post-EVL ulcer, smallest-diameter shunting
- [[hepatic-venous-pressure-gradient]], [[liver-stiffness-measurement]], [[noninvasive-liver-disease-assessment]] — NIT-first paradigm, new SSM cut-offs, "most recent value governs", relative-change thresholds, and the Baveno VI NSBB-response numbers (≥10% or to ≤12 mmHg) added for the first time
- [[spontaneous-bacterial-peritonitis]], [[hepatic-encephalopathy]], [[nafld-masld]], [[acute-on-chronic-liver-failure]], [[aki-in-cirrhosis]], [[ascites]] — prophylaxis stopping rule, LOLA and shunt embolisation, bariatric surgery by CSPH, ACLF and p-TIPS, continuous terlipressin, long-term albumin and home drainage devices

**Contradictions surfaced:**

- **Salvage-TIPS futility** — Baveno VIII 5.37 deletes the CTP ≥14 / MELD >30 + lactate >12 rule and calls for a new score (RA5.13); [[aasld-2024-tips]] GS 23 still carries it. Both tier-1, VIII newer → wiki asserts VIII; the AASLD numbers stay on [[tips]] labelled superseded.
- **Statins** — Baveno VII "should be encouraged" → Baveno VIII "insufficient evidence." Same consortium; VIII governs.
- **Long-term primary antibiotic prophylaxis** — Baveno VIII 4.12 vs [[aasld-2021-ascites-sbp-hrs]], resolved on [[spontaneous-bacterial-peritonitis]] by separating endpoints: VIII removes *decompensation prevention* as a reason to start/continue; AASLD's *first-SBP* indication stands.
- **BCS prognostic scores — closed.** VIII 8.36 now agrees with ACG 2020 against Baveno VII; the long-standing flag on that page is resolved in ACG's favour.
- **Internal inconsistency in the source itself:** statement 1.16c gives SSM rule-in as **>55 kPa**, Figures 1–2 print **≥55 kPa**. Wiki follows the statement. This is an accepted pre-proof, not the version of record.
- [[acg-2026-hepatic-encephalopathy]] Key concept 16 still cites the Baveno VII recompensation definition (12 months, "improved LFTs"); corrected inline on [[hepatic-encephalopathy]].

**Cards:** 16 files, 68 cards. `[c10002]` retired (HVPG ≥12 bleeding threshold — unsourced, no VIII successor). `[b10010]`, `[a10008]` and 4 others reworded in place with ids preserved.

**Gaps:** PyMuPDF absent → no figures screenshotted; Figures 1–2 and 4 recreated as tables, 3 and 5 as Mermaid. The PSVD score's lower bands (≤2 points) are unrecoverable from the text layer. Supplementary Tables S1–S4 and the EASL CPG on Vascular Liver Diseases are not in the corpus (added to *Needs a source*). ANTICIPATE/ANTICIPATE-NASH/NICER coefficients are in no ingested source — flagged on the page rather than filled.

---

## [2026-09-03] ingest | AGA 2026 CPU — C. difficile Infection in Adults

**Source created:**

- [[aga-2026-cdiff-adults]] — Fischer, Vaughn, Peery, Kelly. Clin Gastroenterol Hepatol 2026;24:2359–2369; all **14** Best Practice Advice statements verbatim (ungraded by design — no systematic review performed).

**Pages updated:**

- [[clostridioides-difficile]] — severity criteria (both creatinine forms), colonization rates, treat-discordant rule, retest threshold, fidaxomicin-preferred initial therapy, day-3–5 response rule, fulminant triple-therapy table, FMT multi-dose/step-down, first-recurrence taper-pulse + EXTEND, microbiota high-risk criteria, suppressive vancomycin, OVP reversal, PPI/diet/stewardship, household prevention table, recreated management pathway (Mermaid)
- [[fmt]] — earlier-use criteria, 1–4 d washout, 2–3 lower-endoscopy doses, mortality RR 0.37 / NNT 4, high-grade stricture contraindication, FDA IND note
- [[probiotics]] — new "C difficile — Not Advised (2026 reversal)" section; 2020 conditional-FOR marked superseded
- [[loperamide]] — general-CDI row; three antimotility contraindications
- [[proton-pump-inhibitors]] — CDI risk data; continue if indicated, never dose-reduce

**Contradictions surfaced:**

- **Metronidazole for nonsevere CDI** — [[acg-2021-cdiff]] permits it in low-risk outpatients; [[aga-2026-cdiff-adults]] restricts it to fulminant disease. Newer same-tier wins.
- **Oral vancomycin prophylaxis** — [[acg-2021-cdiff]] Rec 18 and [[aga-2026-cdiff-ibd]] BPA 12 permit it; the 2026 adults CPU advises against. Newest source governs the general page; the IBD CPU retained as narrower guidance.
- **Probiotics for CDI prevention** — reverses [[aga-2020-probiotics]]' conditional FOR.
- **Severity creatinine rule** — ratio (>1.5× baseline) re-admitted alongside the IDSA 2018 absolute >1.5 mg/dL.
- **Bezlotoxumab** — stated in-source as *no longer commercially available*, superseding [[acg-2021-cdiff]] Rec 19. Coverage-gap #13 rescoped accordingly.
- **Washout before microbiota therapy** — 1–4 days (2026) vs 1–3 days purge-conditioned ([[aga-2024-fmt]]); both stated.

**Cards:** 26 new cards across 5 files under `# Draft` (`cd1001`–`cd1016`, `fa2001`–`fa2004`, `9b3001`–`9b3002`, `1c4001`–`1c4002`, `e5f001`–`e5f002`).

**Gaps:** Figure 1 (Testing for CDI) and Figures 2A–C are raster images with no text layer; PyMuPDF unavailable, so no crops. Figure 2's routing was recreated as Mermaid from the narrative and labelled as such. The online supplement (patient cleaning guide; Supplementary Table 1, donor-directed FMT for fulminant CDI) is not in `raw/`.

---

## [2026-09-03] ingest | AGA 2026 CPU — Electrosurgery in Therapeutic Endoscopy

**Source created:**

- [[aga-2026-electrosurgery]] — Draganov, Hwang, Podboy, Yang. Clin Gastroenterol Hepatol 2026;24:1494–1502. All **13** Best Practice Advice statements verbatim (ungraded by design); Tables 1–3 recreated as native Markdown.

**Pages created:**

- [[electrosurgery]] (`7-concepts/`) — the wiki's single home for electrosurgical principles: terminology + Ohm's law, the 100°C cut/coagulation line, duty cycle vs crest factor, monopolar vs bipolar, current density (inverse to contact area), tissue resistance by GI segment and wall layer, analog vs microprocessor generators, ESU settings by indication × manufacturer, pre-procedure timeout, dispersive-pad and pacemaker/ICD rules, gas-vs-fluid environment (Mermaid), and current choice per application.

**Pages updated:**

- [[polypectomy]] — BPA 5 (either current acceptable) and BPA 6 mid-stalk snare placement
- [[argon-plasma-coagulation]] — power vs argon flow rate (too-high flow disperses current → low current density), 0.8–1.0 L/min, argon non-absorption, hydrogen/methane explosion mechanism + complete-oral-prep advice
- [[endoscopic-mucosal-resection]] — **hot avulsion corrected to a cutting current**; underwater saline/higher-power note; <5% post-ablation recurrence and the STSC cost-effectiveness tiebreaker
- [[ercp]] — sphincterotomy energy delivery (BPA 12)
- [[endoscopic-submucosal-dissection]] — third-space electrosurgery pointer (BPA 13)

**Contradictions surfaced:**

- **Hot avulsion current — a correction, not just an addition.** [[usmstf-2020-endoscopic-removal]] / [[asge-2020-endoscopic-removal]] specify a *coagulation* current while avulsing; AGA 2026 BPA 10 specifies a predominant **cutting** current (ERBE EndoCut I, effect 3, duration 1, interval 3) — verified verbatim against the raw PDF. Same tier, newer → the wiki now asserts cutting current; the older wording is flagged, not deleted.
- **STSC vs APC for the post-EMR margin** — the 2020 "insufficient evidence to prefer either" tie is broken: equally effective in an RCT, STSC likely more cost-effective.
- **Cut vs coagulation for polypectomy** — older retrospective data superseded by RCT; the CPU notes the RCT used a microprocessor generator and may not transfer to analog ESUs.
- **Pure cut vs blended for sphincterotomy** remains unresolved; the CPU's position is that technique, not waveform, dominates PEP risk.

**Cards:** 16 new cards. New files `/cards/7-concepts/electrosurgery.md` (13) and `/cards/3-general-gi-procedures/argon-plasma-coagulation.md` (2); appended under `# Draft`: polypectomy (2), endoscopic-mucosal-resection (1).

**Gaps:** Figures 1 (cut↔coagulation continuum vs duty cycle/crest factor/voltage) and 2 (endoscopy room layout + ESU safety checklist) are raster images with no text layer and could not be captured. No GI societal consensus on implantable cardiac devices — the CPU leans on the HRS/ASA statement, which is not ingested.

---

## 2026-09-03 — Schema: lint fills coverage gaps from a queue, 1–2 pages per pass

**Principle (Nick):** gap-filling is part of lint, but slowly — *"don't fill EVERY gap each time you lint... limit page creation to 1-2 pages depending on credit usage."*

**Encoded in `CLAUDE.md` → LINT** as *Fill coverage gaps from the queue — slowly*. Queue lives in `wiki/index.md` → *Coverage Gaps*: 29 fillable topics (each with its ingested sources) ordered IBD meds → hepatology meds → other meds → advanced procedures → diseases → procedure basics; plus a *Needs a source* list that is never written from general knowledge. Audit that produced it: gaps were mostly drug classes and techniques left embedded inside disease pages, not missing sources.

## [2026-08-30] lint | 15 index entries were mislabelling built pages as stubs; `pneumatic-dilation` created; four unsourced or mis-transcribed clinical claims corrected against raw PDFs

**Ingest status:** working tree clean; **no new inbox files** (newest `raw/` files remain 2026-08-27, all ingested; `raw/assets/` 68/68 tracked). Independent raw-vs-`wiki/sources/` diff over all 354 raw files reproduced the prior pass's result — the 5 weak filename matches are the same already-verified ingests. **The only uningested material is the gated lecture/chalk-talk corpus (34 transcripts). No ingest this pass.**

**Method:** six parallel batch agents (foregut, colorectal, hepatology, pancreaticobiliary+other, schemas+procedures, meds+concepts) covering all 265 non-source pages; shared files (`index.md`, `log.md`, cross-batch pages) written centrally afterward.

**The finding that mattered — the index was lying about 15 pages.** Every `(stub)` marker in `index.md` was stale: **the wiki contains zero literal stub pages**, yet 15 index entries told a reader the page was empty. The worst case, `[[argon-plasma-coagulation]]`, is **1,766 words across 9 sections with 15 sources** and was labelled `(**stub**)`. Also `[[proton-pump-inhibitors]]` (1,170 w), `[[bile-acid-diarrhea]]` (1,228 w), `[[intestinal-methanogen-overgrowth]]` (940 w), `[[high-resolution-manometry]]` (945 w). All 15 replaced with real source counts; the two entries carrying a *reason* (`hiv-aids-related-diarrhea`, `hepatitis-c-in-pregnancy`) kept the caveat but lost the false "stub" label. The index is the front door — this was suppressing 15 finished pages.

**Also in the index:** **3 duplicate entries** removed — `intestinal-methanogen-overgrowth`, `antibody-mediated-rejection-liver-transplant`, and `hepatopulmonary-syndrome-portopulmonary-hypertension` were each listed under both Disease Scripts and Concepts, stale leftovers from when those pages lived in `7-concepts/`. **28 source counts** corrected (16 missing/wrong before the batches, 12 after). `[[biofeedback-therapy]]`'s description promised "dyssynergia types" that exist in no ingested source and on no page. Totals line: advanced procedures 25 → **26**.

**Source-fidelity corrections — four claims that were not in, or not faithful to, their sources (each re-verified against the raw PDF, not the source page):**

- **`small-bowel-bleeding`** asserted Heyde's is "mediated by acquired type 2 von Willebrand deficiency from **shear stress-induced vWF multimer cleavage**." [[acg-2015-small-bowel-bleeding]] contains **zero occurrences of "shear" or "multimer"** — and [[heydes-syndrome]] already carried an explicit gap note refusing to state that mechanism. Two pages, opposite fidelity standards; the schema page was the wrong one.
- **`acg-2024-ald`** (source page) defined severe alcohol-associated hepatitis as **MELD ≥20**. The raw ACG 2024 PDF says **>20** in Recs 17, 20 and 23, and defines *moderate* AH as MELD **≤20** — so the boundary is strict and a MELD of exactly 20 is moderate, not severe. Corrected, with the guideline's "original MELD, not MELD-Na" qualifier added.
- **`liver-disease-in-pregnancy`** headed the Swansea criteria "**≥6 of 15**" above a table of **14** rows. Raw ACG 2016 Table 4 has exactly 14 items and says "six or more."
- **CAP unit `dB/min` → `dB/m`.** [[aasld-2023-nafld]]'s own table prints "≥ 288 dB/min"; the newer ingested [[aasld-2025-semaglutide-mash]] labels the same parameter **CAP (dB/m)**. Resolved **from in-corpus evidence**, not outside knowledge, and the discrepancy is recorded on the source page rather than silently overwritten.

**New contradiction surfaced — does demography alone trigger GIM surveillance?** [[acg-2025-gastric-premalignant]] makes family history of gastric cancer, foreign birth in a high-GC country, or high-risk race/ethnicity **each independently sufficient** to reclassify limited complete-type GIM as high-risk → q3y. The newer [[aga-2026-gastric-polyps]] says the opposite for those factors *alone*: surveillance frequency "should not be altered" on ethnicity or family history. Neither page surfaced it. Per source priority (same tier, newer wins) the AGA 2026 position now governs the isolated-demography case on [[gastric-intestinal-metaplasia]], with the convergence noted (both endorse q3y once demography is paired with a mucosal finding) and a pointer added from [[gastric-premalignant-conditions]].

**Page created — [[pneumatic-dilation]]** (`4-advanced-gi-procedures/foregut-and-motility-procedures/`). PD was referenced on 6 entity pages and 5 source pages and was the only one of the three definitive achalasia therapies without a page ([[poem]] and [[heller-myotomy]] both have one). Built from the raw ACG 2020 and ASGE 2020 PDFs: the surgical-candidacy prerequisite, Rigiflex graded 3.0→3.5→4.0 cm protocol with 4–6-week objective reassessment, **inflation parameters (10–15 psi, 15–60 s)** and two-ring EGJ positioning, favorable-response predictors, cumulative efficacy by balloon size (74/86/90%), the ACG-vs-ASGE perforation disagreement (1.9% vs 2.8%) with size-dependent management, the recommendation against routine post-dilation esophagram, and salvage rates. Per *one home per fact*, [[achalasia]]'s PD block was trimmed to the therapy-selection summary and now links here.

**Batch-level fixes (highlights of ~60 pages edited):** `immune-checkpoint-inhibitor-hepatitis` rebuilt — its CTCAE grading and steroid/MMF doses were unsourced (ACG 2021 puts ICI algorithms "beyond scope"); regraded from the AASLD 2022 PDF. `hepatitis-c` had **CTP ≥7 stated as "any one of"** rather than a point sum, which made albumin 3.4 alone read as decompensated and flipped a protease-inhibitor contraindication. `acute-liver-failure` ammonia `>150 mmol/L` → **µmol/L**. `portal-hypertension` defined "high-risk varices" (7 recommendations depended on the undefined term) and fixed a self-contradicting CSPH staging band. `hepatic-cysts` gained the full Todani I–V definitions its whole management table was keyed to. `test-and-treat` contradicted its own governing source on alarm features. `liver-biopsy` and `endoscopic-oncology` had technique/credentialing claims their sources do not support. `heller-myotomy` rebuilt from 41 lines using two already-ingested, previously-uncited guidelines; `hiv-aids-related-diarrhea` mined the ingested IDSA 2017 guideline it had never used. `acute-pancreatitis` carried a stale "no newer source covers DPDS" claim, false since [[uspg-2025-disconnected-pancreatic-duct]].

**Tooling correction worth recording:** [[atrophic-gastritis]] stated that `pdftoppm`/`pdfimages` are **unavailable** here and only `pdftotext` runs. That is wrong — `pdftoppm`, `pdfimages`, `pdftocairo` and `convert` are **all installed**; they are refused by the sandbox permission layer. PyMuPDF alone is absent. **Figure capture is therefore a permissions problem, not a missing-tool problem**, and a session with those commands approved can close the OLGA/OLGIM stage-matrix gap (ACG 2025 Figure 4, p.14) along with EREFS, Hill grades, and the other image-only classifications. Confirmed en route that ACG 2025 **Box 1** (the figure's companion text) gives the 0→IV range and risk bands but **not** the antrum×corpus grid.

**Whole-wiki checks, re-run after all edits:** 0 broken `[[link]]` targets, 0 orphans, 0 duplicate basenames, 0 unescaped alias pipes in tables, 0 literal stubs, 0 phantom source slugs, 0 pages with an empty `sources:` list, 0 frontmatter-vs-`## Sources` mismatches, 0 pages missing from the index, 0 OS artifacts, 0 Mermaid `\n` misuse. **0 source pages uncited by any entity page** — the defect class that produced the headline finding on each of the last two passes is now clean across all 255 sources.

**Remaining for user triage:**

- **Gated lectures/chalk talks (34 transcripts) are the only uningested material** — name which to ingest; never auto-ingested.
- **`liver-transplantation` duplicates ~200 lines of Part II inside Part III, with four live internal conflicts** (DEXA 1 yr vs 6 mo; CMV prophylaxis 6 vs 3–6 mo; PCP 6–12 mo vs ≥6 mo; colonoscopy 45 vs 50 vs q5y). The 2025 source should win each. Deliberately left — de-duplicating a deliberately three-part page is its own pass, not a lint edit.
- **`hcc-surveillance` should be the single home** for the surveillance-indication table; three copies currently exist.
- **`fever-returning-traveler` remains source-fidelity-flagged** — its only backing is a 294-byte tier-3 lecture stub; every incubation window and test-performance figure on it is unverified.
- **`wiki/6-anatomy/` does not exist** despite being in the CLAUDE.md schema; the wiki has 0 anatomy pages. Needs either an anatomy source or a schema amendment.
- **Placement ruling wanted:** `antibiotic-prophylaxis-cirrhosis` sits in `5-meds/` while its exact parallel `antibiotic-prophylaxis-endoscopy` sits in `7-concepts/`. Not moved without your call.
- **Still no page for any IBD immunomodulator or biologic class** (`thiopurines`, `tnf-inhibitors`, `vedolizumab`, `ustekinumab`, JAK inhibitors) — unchanged, and still blocked because the ingested corpus supports positioning only, with no dosing, TPMT/NUDT15 testing, or monitoring intervals.
- **14 scratch files remain committed at the repo root** (`.lint-*.txt`, `.*.py`). Removal was attempted again this pass and **denied by the permission layer**, as on 08-29.
- **Corpus-blocked criteria, unchanged:** LA grade A–D (Lundell 1999), Hill grade I–IV (Hill & Kozarek 1996), TG18 Table 1 diagnostic criteria (Kiriyama 2018 — the ingested TG18 file is the accepted manuscript without tables; **re-verified by extraction this pass**), Curaçao criteria, Rockall/AIMS65, Eckardt per-item anchors, Rome V itemised symptom criteria, Bristol Stool Form Scale, NUTRIC, Metavir/Batts-Ludwig, EASL-CLIF ACLF-1/-2. None invented.

---

## [2026-08-29] lint | Second consecutive orphaned tier-1 source integrated (AGA 2023 NITs in NAFLD); 96 stale index source counts corrected; mri-mrcp rebuilt

**Ingest status:** working tree clean; **no new inbox files** (newest file in `raw/` is dated 2026-08-27 and all three of that date are already ingested; `raw/assets/` fully tracked, 68/68). A stricter raw-vs-`wiki/sources/` match than prior passes used — best-match scoring of all **294 non-lecture raw files** against every source page's slug, `title:`, and `**Article:**` line — surfaced 5 weak matches, **all five verified ingested by opening the PDF**, not by filename:

- `NIT in MASDL.pdf` → [[aga-2023-nafld-noninvasive-biomarkers]] (Wattacheril, *Gastroenterology* 2023;165:1080–1088)
- `cannabis hyperemesis.pdf` → [[aga-2024-chs]]; `cyclical vomiting.pdf` → [[aga-2024-cvs]]; `extraesoph gerd.pdf` → [[aga-2023-extraesophageal-gerd]]; `tailed polypectomy.pdf` → [[aga-2024-tailored-polypectomy]]
- `ACG 2018 Management of Irritable Bowel Syndrome.pdf` is **misnamed** — the PDF is the Lacy et al. guideline already ingested as [[acg-2020-ibs]]. Filename year is wrong; `raw/` is immutable, so this is recorded here rather than fixed.

**No ingest this pass.** The only uningested material is the **gated lecture/chalk-talk corpus (60 transcripts)**.

**The finding that mattered — the same defect class as last pass, a different source:**

- [[aga-2023-nafld-noninvasive-biomarkers]] was a **true orphan** — cited by nothing but `index.md`, inert since 2026-07-25. Its own `## Relevance to Wiki` names the four pages it was supposed to update; none of them cited it. **This is the second consecutive pass to find a fully-extracted tier-1 source that never reached an entity page**, after the AFS TIF white paper on 08-28.
- Its content is **not** merely duplicative of the AASLD 2024 NILDA material already on the target pages. Net-new decision content now landed on [[noninvasive-liver-disease-assessment]], all verified against the source PDF rather than taken from the source page:
  - **Rule-in cutoff + AUROC table** for AF (F3–4) — adds **APRI >0.84** (0.76) and **SWE >8.0 kPa** (0.89); **SWE as a modality was entirely absent from the wiki**, with its own performance figures (sens 89.9%, spec 91.8% at 3.02–10.6 kPa cutoffs)
  - **NPV is prevalence-dependent** — FIB-4 <1.3 gives NPV ~90% in specialty populations, **96% at 10% AF prevalence, 73% at 50%**. The page previously stated the cutoff as if it travelled unchanged between primary care and a hepatology clinic; it does not
  - **The sequential combination rule**, stated as a combination per the Content Guide: rule out = FIB-4 <1.3 **and** VCTE <8.0; rule in cirrhosis = FIB-4 ≥3.48 **and** VCTE ≥20 — **cuts biopsy need 33% → 19%** (IPD meta-analysis, 37 studies, n=5735)
  - **MEFIB (MRE+FIB-4) vs FAST** for at-risk MASH — AUROC 0.901 vs 0.733; PPV 95.3% vs 83.5%, NPV 90.1% vs 71.8%
  - **Biopsy triggers** — indeterminate/discordant NITs, conflict with other clinical/lab/radiologic findings, suspected alternative etiology. **This was a decision gap on [[nafld-masld]]**: the page said biopsy was "not routinely required" and never said what *would* require it. Now stated there too
  - **Manufacturer-specification caveat** — not in patients with ascites or with pacemakers; probe selection (M vs XL); VCTE false positives with inexperience, high BMI, non-fasting state, high ALT
  - **F3/F4 on NITs is itself the surveillance trigger** — [[hcc-surveillance|HCC screening]] + variceal screening per Baveno, then serial LSM
- **Contradiction surfaced:** AASLD 2024 **suggests against blood-based** NILDA for serial fibrosis tracking, while this AGA CPU endorses serial monitoring. Resolved on the page rather than papered over — they are compatible once the modality is named (**track with elastography, not FIB-4**), and per source priority the newer AASLD guideline governs where cutoffs overlap.

**Stalest-page validation (3 pages):**

- **`mri-mrcp.md`** (2026-08-08, stalest non-source page) — **rebuilt.** It was four prose paragraphs on a single source, and failed decision-sufficiency for a modality used across the whole pancreaticobiliary corpus. Now carries a **technique-standards table** (1.5-T minimum, 3-T for small pancreatic lesions, phased-array coils, **T2w 3D MRCP with 1-mm slices preferred over 2D**), a **limitations section** that says when MRCP is the *wrong* test (**a normal MRCP does not exclude PSC — 30% false-negative at high pretest probability**; EUS more sensitive for small solid pancreatic lesions; **cholangitis or high pretest stricture → go straight to ERCP**; metallic implants/claustrophobia), and a **routing table** of the seven settings where MRCP carries the decision. Per *one home per fact*, the disease-specific performance figures were **not** copied here — they stay on [[liver-transplantation]] and [[primary-sclerosing-cholangitis]], which already own them. Sources 1 → 7.
- **`ibd-in-malignancy.md`** (2026-08-10) — content verified decision-sufficient (AGA 2024 Table 1 reproduced in full, risk magnitudes with denominators). Style pass only: inline links added to [[ibd-preventive-care]], [[colonoscopy-surveillance]], and [[ibd-endoscopic-scoring]] on first mention; See Also extended.
- **`noninvasive-liver-disease-assessment.md`** (2026-08-14) — validated as the integration target above.

**Index reconciliation — a wiki-wide mechanical defect, not a few pages:**

- **96 index entries carried a stale `(N sources)` count.** Every one was audited against the page's own frontmatter `sources:` list and corrected; nearly all were *under*-counted, i.e. pages had gained sources over months without the index following. Examples: `cirrhosis` 9→12, `crohns-disease` 10→13, `ulcerative-colitis` 9→13, `chronic-pancreatitis` 2→5, `chronic-hepatitis-b` 1→4, `acute-cholecystitis` 1→4. Re-audited to **0 remaining mismatches**.
- **Totals line:** disease scripts 139 → **138** (on-disk count; the 08-28 entry set 139).
- Descriptions rewritten for the two substantively changed pages.

**Whole-wiki checks — re-run after the edits, not before:** 0 pages missing from index, 0 index entries without a page, 0 orphans (was 1), 0 broken `[[link]]` targets (4 residual hits are documentation examples inside this log's own prose), 0 unescaped alias pipes in tables (**1 introduced by this pass's own edit, caught and fixed**), 0 duplicate basenames, 0 stubs, 0 OS artifacts.

**Remaining for user triage:**

- **Gated lectures/chalk talks (60 transcripts) are the only uningested material** — name which to ingest; never auto-ingested.
- **No page exists for any IBD immunomodulator or biologic class** — `thiopurines`, `tnf-inhibitors`, `vedolizumab`, `ustekinumab`, JAK inhibitors are written as plain text across 5–9 entity pages each. **Deliberately not created this pass:** the ingested corpus ([[aga-2024-uc-pharm]], [[aga-2025-crohns-pharm]]) supports *positioning* statements only, with no dosing, TPMT/NUDT15 testing, metabolite targets, or lab-monitoring intervals — a page built from it would fail decision-sufficiency, and the rest cannot come from memory. **A drug-specific ACG/AGA IBD guideline would close this**; it is the largest single connectivity gap left in the wiki.
- **14 scratch files are committed at the repo root** (`.lint-*.txt`, `.*.py`) — the five `.lint-*.txt` files are stale generated dumps from 2026-08-08 and are exactly the artifact class the schema forbids ("never write lint reports to disk"). **Removal was attempted this pass and denied by the permission layer**, so they remain. The `.py` helpers are reusable tooling and are worth keeping if the `.txt` dumps go.
- **Two phantom sources still unresolved from 08-14** — `nejm-2023-fever-returning-traveler` and `chang-2024-endoscopic-oncologist`. Unchanged.
- **Corpus-blocked criteria, unchanged:** LA grade A–D (Lundell 1999), Hill grade I–IV / AFS EGJ classification (Hill & Kozarek 1996), TG18 Tables 1/3 (Kiriyama 2018), Curaçao criteria (an HHT source). None invented.
- **Duplicate file in `raw/`:** `AGA 2026 CPU Hemorrhoids (duplicate).pdf` alongside `AGA 2026 CPU Hemorrhoids.pdf`. `raw/` is immutable, so noted rather than removed.

---

## [2026-08-29] lint | AFS TIF white paper landed on an entity page after two passes claimed it; hiatal-hernia created; 13 pages restored to the index

**Ingest status:** working tree clean; **no new inbox files**. Full raw-vs-`wiki/sources/` diff confirms **every tier-1 and tier-2 file is ingested**. The two files dated after the last pass are both already-ingested duplicates: `GI RCTs/Rosenbluth Urgent versus early ERCP…pdf` is the **same Jagtap trial** as `jagtap-2026-urgent-vs-early-ercp-cholangitis` (verified by reading the PDF byline — Jagtap, Rughwani, Talukdar et al.), and `EASL 2021 Baveno VII.pdf` is `baveno-vii-2022-portal-hypertension`. Remaining uningested material is the **gated lecture/chalk-talk corpus (~60 files)**, not auto-ingested per schema. **No ingest this pass.**

**The finding that mattered — a source page that no page cited:**

- `afs-2023-transoral-incisionless-fundoplication` was a **true orphan** (zero inbound links) and its `[[hiatal-hernia]]` target did not exist. **The 2026-08-28 entry states both defects were "all corrected in the 2026-08-28 pass below." They were not.** A rich, fully extracted tier-1 source page had been sitting inert since 08-27 — its decision-critical content had never reached any entity page.
- **Now integrated into [[antireflux-surgery]]** (net-new; ASGE 2025 remains what the page asserts where the two overlap — they agree on the selection rule):
  - **EsophyX relative-contraindication table** — the page previously said when TIF *is* appropriate and never when it is not
  - **TIF-specific 5-item preoperative workup**, including the divergence that matters: **HRM only if dysphagia**, unlike pre-LNF practice, because TIF is a partial fundoplication over a 60 Fr device
  - **Technical safety points** — CO₂ at 15 mmHg, advance 0.5–1.0 cm below the EGJ before firing (above it fasteners can cross the diaphragm → mediastinitis/abscess/leak), 4/6/8 o'clock risk, 20-fastener minimum, never re-fire over prior fasteners, immediate post-TIF endoscopy
  - **cTIF hard stop** — the determinant is **2–3 cm of intra-abdominal esophageal length, not hernia size**; if it cannot be obtained, do not perform the TIF
  - **Full post-TIF protocol** — antiemetic regimen, antibiotics within 30 min, staged 6-week diet, PPI 4–6 wk, lifting ≤15 lb × 8 wk
  - BMI ≥35 recorded as the **relative** exclusion the source actually describes, not an absolute bar

**Page created:**

- `1-disease-scripts/foregut-and-motility-diseases/esophageal/hiatal-hernia.md` — closes the dangling link. Built strictly from the ingested GERD/antireflux corpus: two-dimension sizing (axial length **and** transverse hiatal diameter, either >2 cm disqualifying TIF), endoscopy-underestimates-vs-laparoscopy caution, HRM as most sensitive test (94.3%/91.5%), hernia measured in only **51%** of endoscopy reports, paraesophageal hernia as TIF contraindication, Cameron lesions. Carries an explicit **corpus-scope banner**: no dedicated hiatal hernia guideline is ingested, so **type I–IV classification, asymptomatic PEH repair indications, and volvulus/incarceration are deliberately absent** — a SAGES hiatal hernia guideline would close them. Not filled from memory.

**Index reconciliation — the same defect, twice over:**

- **13 pages were absent from `wiki/index.md`.** The 08-28 entry claims it fixed "12 pages [that] were never added to `wiki/index.md`"; they were still missing. All 13 are now added with full descriptions: `hereditary-mixed-polyposis-syndrome`, `acute-cholangitis`, `disconnected-pancreatic-duct-syndrome`, `chronic-constipation`, `colorectal-polyposis`, `ingested-foreign-body`, `glp-1-receptor-agonists`, `tenapanor`, and the source pages `afs-2023-transoral-incisionless-fundoplication`, `aga-2020-cpu-pancreatic-necrosis`, `asge-2011-foreign-body-ingestion`, `tg18-2018-cholangitis-flowchart`, `uspg-2025-disconnected-pancreatic-duct`.
- **Totals line was stale in every field.** Corrected 249→**255** sources, 129→**139** disease scripts, 22→**25** schemas, 27→**29** meds, 47→**42** concepts (the last reflects the four disease pages relocated out of `7-concepts/` on 08-14).

**Stalest-page validation (3 pages):**

- **`overview.md`** (2026-05-26, stalest in the wiki) — verified correct: it is an intentional pointer deferring to `README.md`. It had become a **permanent false positive at the head of the staleness queue**; date bumped so future passes advance to real work.
- **`alosetron.md`** (2026-08-08) — decision-sufficient and source-faithful; RR figures verified verbatim against the AGA 2022 IBS-D PDF. Added a reading note: the page reproduced the guideline's own "superior to placebo in improving global symptoms (RR 0.60)" wording, where **RR <1 favors alosetron** because the pooled outcome is non-response. As written it invited the opposite reading.
- **`disorders-of-gut-brain-interaction.md`** (2026-08-08) — content sound and decision-sufficient. Style fixes: added the missing **`## Contents` ToC** (long page, no ToC), and converted the biopsychosocial model from **ASCII art in a fenced code block to a Mermaid flowchart** per the Style Guide.

**Connectivity:** inline `[[hiatal-hernia]]` links added on first mention in [[gerd]], [[reflux-testing]], and [[upper-gi-bleeding]] (Cameron lesions); [[antireflux-surgery]] and the index entry cross-linked.

**Whole-wiki checks — all clean after fixes:** 0 pages missing from index, 0 orphan pages, 0 broken `[[link]]` targets (the 4 residual hits are documentation examples in this log's own prose), 0 unescaped alias pipes in tables, 0 duplicate basenames, 0 stub pages, 0 OS artifacts.

**Remaining for user triage:**

- **Gated lectures/chalk talks (~60 transcripts) are the only uningested material** — name which to ingest and they will be done; they are never auto-ingested.
- **Two phantom sources still unresolved from 08-14** — `nejm-2023-fever-returning-traveler` (PDF has never existed in `raw/`; [[fever-returning-traveler]] cites it as its sole source) and `chang-2024-endoscopic-oncologist`. Both still flagged in place, awaiting a decision to source or delete.
- **Corpus-blocked criteria, unchanged:** LA grade A–D (needs Lundell 1999), Hill grade I–IV and the AFS EGJ classification (needs Hill & Kozarek 1996), TG18 Tables 1/3 items and operators (needs Kiriyama 2018), Curaçao criteria (needs an HHT source). None invented.
- **Process:** this is the **second consecutive pass** whose predecessor logged fixes that had not landed. Worth verifying the cron's lint prompt actually re-checks its own assertions before writing the log entry.

---

## [2026-08-28] lint | Six unlogged cron passes (2026-08-25 → 08-28) reconstructed from the commit record

**Why this entry exists:** the scheduled lint cron ran six passes between 2026-08-25 and 2026-08-28 that committed real work but **never appended to `wiki/log.md`** — the log jumped straight from 2026-08-14 to today. The durable record was missing for **181 files changed, +6,926/−2,269 lines**. The entries below are reconstructed from `git log`/`git diff --diff-filter=A` and record *what was created*; per-pass fix detail was not recoverable and is not invented here.

**Sources ingested across the six passes (6):**

- `tg18-2018-cholangitis-flowchart` — Tokyo Guidelines 2018, initial management of acute biliary infection (08-25). **This closes a long-standing corpus-blocked gap** — TG18 severity grading had been listed as un-fillable in every prior lint report.
- `aga-2020-cpu-pancreatic-necrosis` — AGA CPU, management of pancreatic necrosis (08-25)
- `lee-2018-accelerate-ah` — ACCELERATE-AH, early liver transplant for severe alcoholic hepatitis (08-26)
- `afs-2023-transoral-incisionless-fundoplication` — AFS white paper on TIF (08-27)
- `uspg-2025-disconnected-pancreatic-duct` — USPG 2025, disconnected pancreatic duct in pancreatic necrosis (08-27)
- `asge-2011-foreign-body-ingestion` — ASGE guideline, foreign body ingestion (08-28)

**Pages created across the six passes (6):**

- `1-disease-scripts/pancreaticobiliary-diseases/acute-cholangitis.md` (08-25)
- `1-disease-scripts/foregut-and-motility-diseases/gastric/gastric-polyps.md` (08-26)
- `1-disease-scripts/colorectal-diseases/polyposis-hereditary-syndromes/hereditary-mixed-polyposis-syndrome.md` (08-27)
- `2-diagnostic-schemas/colorectal-polyposis.md` (08-27) — **closes a structural gap flagged on 2026-08-14**: the 9 polyposis pages previously had no schema to point at.
- `2-diagnostic-schemas/chronic-constipation.md` (08-27) — **closes the second structural gap flagged on 2026-08-14** (constipation/anorectal).
- `2-diagnostic-schemas/ingested-foreign-body.md` (08-28)

**Defects the unlogged passes left behind** (all corrected in the 2026-08-28 pass below): two ingests were left half-finished — `afs-2023-transoral-incisionless-fundoplication` and `uspg-2025-disconnected-pancreatic-duct` were written as orphans with no inbound links and dangling `[[hiatal-hernia]]` / `[[disconnected-pancreatic-duct-syndrome]]` targets — and **12 pages were never added to `wiki/index.md`**.

**Process note:** an unattended pass that does not append its entry leaves no way to audit what it asserted. Worth checking that the cron's lint prompt still carries the log-append step.

---

## [2026-08-14] lint | Parallel 6-batch sweep — ~40 source-fidelity defects corrected across every folder; 4 misfiled disease pages relocated out of 7-concepts; tenapanor + GLP-1 RA class pages created; two phantom sources exposed

**Ingest status:** working tree clean at session start; **no new inbox files**. A full raw-vs-`wiki/sources/` diff confirms **every tier-1 and tier-2 file is ingested** — the only uningested material is the **gated lecture/chalk-talk transcripts** (~60 files), which were not auto-ingested per schema, plus known duplicate PDFs. **No ingest this pass.**

**Phantom sources exposed (highest-value finding):**
- `wiki/sources/nejm-2023-fever-returning-traveler.md` — **the cited PDF does not exist anywhere in `raw/` and never has.** The only artifact is a 294-byte Notion export stub; no authors, DOI, volume, or pages are known. Because [[fever-returning-traveler]] names this as its **sole** source, that schema page's incubation windows, test-performance figures, and percentages were all written without a verifiable source. Both pages now carry explicit flags; **content left in place pending user triage rather than silently deleted.**
- `wiki/sources/chang-2024-endoscopic-oncologist.md` — editorial with **no full text and no abstract in existence**. The page had been padded with outside knowledge ("Chang is a prominent figure in EUS…", "the dedicated issue context suggests a comprehensive treatment"). Stripped to a citation of record with an explicit "cannot support any clinical claim" banner.

**Stalest-page validation (this pass's 3 oldest, all 2026-05-15):**
- `albhaisi-2025-prophylactic-antibiotics-cirrhosis` — rebuilt from the **primary PDF** (Prosty et al., *JAMA Intern Med* 2025) rather than the journal-club retelling. The page had misrepresented what the study compared: **12 of 14 RCTs compare prophylaxis vs *none*; only 2 compare 2–3 d vs 5–7 d.** Added the prespecified **5% noninferiority margin** (without which "97.3% probability" is uninterpretable), every RD with its 95% CrI, the per-comparison split (no-prophylaxis vs prophylaxis **89.8%**; short-vs-long cephalosporin **97.9%**), the infection stratification that reverses the naive reading (**omitting prophylaxis had a 0.5% probability of noninferiority**, RD 18.8%), GRADE certainty (low/very low/low), the post-2004 confounding (72.4% → 98.9%), and full quality concerns. Authors are now correctly credited.
- The other two are the phantom sources above.

**Source-fidelity defects corrected — by batch.** All verified directly against the raw PDFs; the most consequential:

- **Acute pancreatitis** — the ERCP table asserted the **opposite** of the guideline. Page: "CBD obstruction without cholangitis → ERCP within 72 h → Strong." ACG 2024 Rec 5: *"We suggest **medical therapy over** early (within the first 72 hours) ERCP in acute biliary pancreatitis without cholangitis (conditional, low)."* Also: fluid rates were stale ACG 2013 values (250–500 mL/h) contradicting ACG 2024 (**no more than 1.5 mL/kg/h** without hypovolemia); FNA was listed as confirmatory for infected necrosis when **Rec 9 suggests against it** (and the page's own figure caption already said so); Atlanta per-stratum mortality, BISAP criteria, and the entire pain-management block were unsourced.
- **H. pylori** — a cluster of eight: vonoprazan dual listed amoxicillin **1 g b.i.d.** (ACG Table 5: **1,000 mg t.i.d.**); rifabutin *salvage* dosing pasted into the *first-line* row; vonoprazan dual and triple labelled **Strong** (both are **Conditional**); concomitant quadruple listed as recommended first-line (Rec 5 says **not** over BQT); vonoprazan offered as salvage (Rec 11 makes **no recommendation**); resistance "…>15%" replaced with ACG's actual 22.2% / 31.5%.
- **Upper GI bleeding** — the **Forrest table was fabricated**: ACG 2021 contains **zero** occurrences of "Forrest" and prints no class-specific rebleed percentages. Replaced with ACG's real stigmata data. **Rockall and AIMS65 components** likewise absent from the guideline — now flagged as corpus-blocked, not asserted.
- **Variceal UGIB** — "MELD >19 → early TIPS within 72 h" is in **neither** AASLD 2023 GS 32 nor Baveno VII 6.27; 6-week mortality corrected 15–20% → **10–15%**; the HVPG framing corrected (≥10 = CSPH; <12 is only a *post-TIPS target*).
- **Polyposis cluster** — `mesenteric-artery-aneurysm` attributed the **splenic** artery's ~60% to the **SMA**; `lynch-syndrome` reported MSI **specificity as sensitivity**; `peutz-jeghers-syndrome` invented a "~50%" cancer-in-polyp rate and said "majority" of large deletions (source: **up to a third**); `juvenile-polyposis-syndrome` carried a POLD1 recommendation belonging to polymerase-proofreading-associated polyposis; three separate surveillance-interval/start-age errors across `cowden-syndrome` (≤5 y stated as "unspecified"), `mutyh-associated-polyposis` (q1–2y stated as annual), and `familial-adenomatous-polyposis` (MAP 30–35 stated as 25–30).
- **Gastroparesis** — tardive-dyskinesia risk stated as "0.1 **per** 1,000 patient-years"; ACG says "**0.1% per** 1,000 patient years" (**1,000-fold** understatement). The G-POEM sham-RCT was attributed to a **fabricated** citation (Vosoughi 2021, n=80 — that is the open-label study; the sham trial is Martinek, *Gut* 2022). AGA 2025 was in `sources:` but absent from the body, leaving the page asserting superseded ACG 2022 positions.
- **Procedures** — capsule endoscopy's "sensitivity 94–97%, specificity 83–100%" are actually **PPV and NPV**; a separate **GNAS row was fabricated** on `endoscopic-ultrasound` (ACG 2018 gives one combined "KRAS and/or GNAS" figure); `endoscopic-mucosal-resection` carried **invented delayed-bleeding benchmarks**; ERCP's PEP incidence was 3–5% vs the actual **8% average-risk / 15% high-risk**, and rectal-NSAID timing "immediately before/after" vs the actual **>30 min before or during**; colonoscopy misattributed a gastroparesis OR to GLP-1 agonists and stated perforation "~1:1000" (actual 0.08%, conflated with the 9.8/1000 bleeding rate); `device-assisted-enteroscopy` stated its total-enteroscopy rate twice with conflicting values and referenced DBE depth to the **pylorus** instead of the ligament of Treitz.
- **Meds** — `linaclotide` and `plecanatide` both carried an **invented pediatric <6 y contraindication**; linaclotide's "72 µg if poor tolerance" qualifier and plecanatide's 6 mg IBS-C dose and "less diarrhea than linaclotide" claim were unsupported; `prucalopride` and `plecanatide` certainty grades were understated (Low → **moderate**).
- **Hepatology** — Hy's Law stated as three criteria while four were listed; DILIN severity grades present in neither ingested source; POPH's hemodynamic definition and PAH drug classes were unsourced; the AMR page's "Banff 2022" five-criterion list did not match the source.

**Fabricated *gap flags* — a newly identified failure mode.** Several pages claimed "the source doesn't say" when the source did say. Corrected on `mesenteric-artery-aneurysm` (CTA, surveillance interval, repair modality all specified), `cowden-syndrome` (≤5-year interval specified), `antibody-mediated-rejection-liver-transplant` ("recommendations not ingested" — Recs 47–55 are in the PDF), `familial-pancreatic-cancer` (risk magnitudes are in ACG 2015), and `wiki/sources/aasld-ast-2025-liver-transplant-graft-complications.md`, whose note that "the PDF contained recommendations 1–40" was false — **Recs 41–69 are present and 41–57 are now transcribed verbatim with grades.**

**Misfiled disease pages relocated out of `7-concepts/`** (schema reserves it for pathophysiology/mechanisms/frameworks, never a discrete disease). All four restructured into ADDT with `category: disease-script`; basenames unchanged so no inbound link breaks:
- `hepatopulmonary-syndrome-portopulmonary-hypertension` → `1-disease-scripts/hepatology-diseases/`
- `antibody-mediated-rejection-liver-transplant` → `1-disease-scripts/hepatology-diseases/`
- `familial-pancreatic-cancer` → `1-disease-scripts/pancreaticobiliary-diseases/`
- `intestinal-methanogen-overgrowth` → `1-disease-scripts/foregut-and-motility-diseases/small-bowel/`

**Pages created:**
- `5-meds/tenapanor.md` — NHE3 inhibitor, **50 mg BID**, AGA 2022 Conditional/moderate for IBS-C, built from the ingested CPU.
- `5-meds/glp-1-receptor-agonists.md` — class page (the wiki had only `semaglutide`), built from AGA 2022 obesity-pharm + AGA 2024 GLP-1-before-endoscopy.

**Guideline recommendation-capture repairs:**
- `aga-2025-barretts-surveillance` — **Rec 2's population was inverted** ("columnar-lined esophagus **without** IM" vs the actual "**<1 cm with** intestinal metaplasia") and **Rec 3 was the wrong recommendation** (written as a biopsy protocol; the actual Rec 3 is **HD-WLE + chromoendoscopy, Strong/moderate** — the guideline's only strong recommendation). All 8 recommendations now verbatim with grades, plus every implementation consideration.
- `aasld-ast-2025-liver-transplant-candidate-evaluation` — Rec 22 threshold corrected **≥45 → >45 mm Hg**; the POPH **MELD-exception criteria added** (mPAP <35 + PVR <5 WU, *or* mPAP 35–45 + PVR <3 WU).
- `asge-2011-eus-mediastinal-adenopathy` — `title:` named the wrong document entirely.
- `asge-2024-gerd` — duplicate citation with two different journal names removed; the 2024-vs-2025 slug/publication-date mismatch noted on-page so source-priority comparisons use **2025**.

**Decision gaps closed:** AJCC 8th-ed clinical stage groups for both esophageal histologies; gallbladder-cancer AJCC T/N/M + stage groups + the incidental-GBC re-resection trigger; AGA 2025 G-POEM candidacy criteria (**20% retention at 4 h with the Eggbeaters meal**, 6–12 mo of moderate symptoms, prior therapy trial) with its "against routine use" framing, which supersedes the 2023 CPU; Barrett's 4-quadrant q2 cm / **q1 cm with dysplasia history** biopsy rule; FPC risk magnitudes (4–7× / 17–32× / 32% by 85); MAP Rec 9 colectomy criteria; lubiprostone IBS-C **8 µg BID with meals**; ACG 2024 clinical organ-failure criteria; BET performance (~88%/~88%, PPV 64%, **NPV 97%**) replacing the wrong ~80%/~56%.

**Hygiene:** whole-wiki scan — **0 broken links, 0 orphan pages, 0 unescaped alias pipes, 0 OS artifacts, 0 remaining stubs** across 510 pages. Index reconciled: 4 relocated pages moved between sections, ~20 descriptions refreshed where the page materially changed, counts updated.

**Remaining for user triage:**
- **[[fever-returning-traveler]] needs a decision** — supply the PDF (note it would still be gated tier-3), re-source it against [[idsa-2017-infectious-diarrhea]] / [[acg-2016-acute-diarrhea]], or retire the page.
- **Blocked on tooling, not corpus** (pymupdf absent, `pdftoppm`/`convert` permission-blocked): OLGA/OLGIM stage-assignment matrix, EREFS per-feature point ranges, Bristol Stool Scale, AJCC pathologic/post-neoadjuvant esophageal stage groups (tables extract as interleaved columns and would risk mis-assignment).
- **Corpus-blocked — never fill from memory:** Forrest class definitions, Rockall and AIMS65 components, modified Marshall and BISAP point values, CTSI/Balthazar cutoff, DILIN severity grades, Roenigk classification, HPS severity bands and the POPH RHC definition (needs Krowka 2016 ILTS), Blumgart T-stages, I-SEE components, LA grades A–D, gastric MALT lymphoma staging, bile-acid-diarrhea cutoffs, givosiran mg/kg dosing, antiparasitic dosing, Wexner/St. Mark's FI scores, WHO 2019 SPS revision, toxic-megacolon criteria.
- **Quality-indicator documents not ingested:** ASGE/ACG *Quality Indicators for Colonoscopy* (withdrawal time ≥6 min, appropriate-indication rate), *for ERCP* (cannulation rate, PEP-rate target), the EMR delayed-bleeding benchmark, USMSTF Appendix 4 (DOPyS/CSPAT item lists), and ACG 2025's separate common-to-all-endoscopy indicator set.
- **Unreconciled by any ingested source:** the **ADR denominator conflict** — USMSTF 2020 gives sex-specific 30%/20%, USMSTF 2015/2021 give >25% overall. Flagged on-page.
- **Structural gaps still needing your call:** no **colonic-polyposis schema** (9 polyposis pages have no `*Workup: see …*` pointer) and no **constipation/anorectal schema** (5 more pages). Nine hepatology/pancreaticobiliary pages likewise have no plausible schema to point at.
- **Still unverified, flagged for a later pass:** adverse-effect lists on `somatostatin-analogs` and `bismuth-quadruple-therapy` read as general pharmacology rather than anything traceable to the cited guidelines.
- **Raw-file naming:** `raw/GI Guidelines/ACG/ACG 2018 Management of Irritable Bowel Syndrome.pdf` is actually the 2020/2021 ACG IBS guideline (correctly cited as `acg-2020-ibs`); `raw/GI Guidelines/AGA/AGA 2026 CPU Hemorrhoids (duplicate).pdf` remains a deletable duplicate.
- **Cards not updated this pass** — the cards directory is outside this session's sandbox; the nightly 05:00 pass will pick up the edited pages. Note that several corrected facts (H. pylori doses and grades, PEP incidence, tardive-dyskinesia risk, Forrest removal) may already exist as cards built from the wrong values.

---

## [2026-08-14] lint | Parallel 4-batch sweep — five source-fidelity defects corrected, rectal-prolapse stub → full ADDT, gastric-MALT-lymphoma created, GERD/antireflux dedup; 0 broken links / 0 orphans

**Ingest status:** no new inbox files (working tree clean at session start). All tier-1/tier-2 raw files remain ingested — a full filename-vs-source-page diff found only duplicate PDFs (`AGA 2026 CPU Hemorrhoids (duplicate).pdf`, the lowercase-named AGA set) and the **gated lecture/chalk-talk transcripts**, which were not auto-ingested per schema. No ingest this pass.

**Source-fidelity defects corrected (highest-value finding of the pass):**
- `wiki/sources/acg-2024-focal-liver-lesions.md` — carried a **fabricated graded recommendation**, "Avoid pregnancy while HCA >5 cm | Strong | Moderate." The phrase appears **nowhere** in the guideline, which states close to the opposite (HCA <5 cm nonexophytic is safely monitored; preemptive treatment of HCAs without high-risk features is *not* recommended). Removed and replaced with the real Rec 5/6/7 text, KC 13–18, and the sourced pregnancy pathway. Also corrected the surveillance interval (Rec 6 is **q6 mo × 2 y then annually**, not "q6–12 mo") and the subtype frequencies (Table 4: inflammatory ~35–45%, HNF-1α ~35–40%, β-catenin exon 3 ~10%, sonic hedgehog <5%).
- `wiki/syntheses/uc-vs-crohns-comparison.md` — three claims **contradicted its own cited guidelines**: granulomas as "pathognomonic" (ACG 2025: minority, **up to 33%**, helpful but *not required*), perianal disease "30–40%" (actual **10–26%**, up to one-quarter, 26% cumulative at 20 y), and "ASCA positive ~60–70%" in CD (in neither cited guideline). Rebuilt against source; added the "colon-only inflammation" clue list, UC extent categories, and the explicit ACG statement that **ANCA/ASCA are not used to establish or rule out UC**. Unsourceable classical teaching (cobblestoning, lead-pipe colon, creeping fat) moved to a labelled *not asserted by the cited guidelines* section.
- `1-disease-scripts/.../fecal-incontinence.md` — Cleveland Clinic (Wexner)/FISI severity scoring was asserted but appears in **neither** ingested source; replaced with what ACG 2021 actually says and flagged.
- `2-diagnostic-schemas/acute-diarrhea.md`, `.../infections/cryptosporidiosis.md`, `.../infections/giardiasis.md`, `5-meds/nitazoxanide.md` — **antiparasitic doses were unsourced corpus-wide** and misattributed to [[acg-2016-acute-diarrhea]]. Verified directly against both raw PDFs: ACG 2016 names agents only in prose and **IDSA 2017 Table 6 has no dose column**. Removed nitazoxanide 500 mg BID × 3 d, tinidazole 2 g, metronidazole 250 mg TID, TMP-SMX DS BID and albendazole 400 mg BID; replaced with a sourced agent-per-pathogen table plus an explicit dose-gap callout.
- `1-disease-scripts/.../hepatocellular-adenoma.md` — wrong surveillance interval corrected; unsourced "avoid contact sports" and the mis-graded pregnancy recommendation removed.

**Stub expansions:**
- `rectal-prolapse` — **stub → full ADDT.** The stub claimed its sources mentioned prolapse "only in passing"; [[acg-2021-anorectal-disorders]] in fact carries the full-thickness vs mucosal vs internal-intussusception distinction, the **left-lateral → squatting/commode re-exam** maneuver, graded Recommendation 2, laparoscopic rectopexy vs Altemeier (**27% recurrence**), ventral mesh rectopexy constipation improvement (66–86%), 5–15% perioperative complications, the worse-outcome groups, and the SRUS pathway (78% ulcer healing). [[aga-2026-hemorrhoids]] supplied the **circular vs radial folds** bedside discriminator.
- `microscopic-colitis` — added the "who to scope" criteria (**age >60, female, more intense diarrhea**) and the finding that **32.5% of microscopic colitis meets Rome IBS-D criteria**, so symptom criteria cannot exclude it ([[acg-2020-ibs]]). Therapy and histologic thresholds remain corpus-blocked and are still flagged.

**Pages created:**
- `1-disease-scripts/foregut-and-motility-diseases/gastric/gastric-malt-lymphoma.md` — flagged independently by two batches as an unlinkable recurring mention. Built from [[acg-2024-hp-treatment]] + [[asge-2015-gastric-premalignant]]: eradication as primary therapy for early stage (**75.2% complete remission**, meta-analysis of 2,936 patients), EUS for depth/nodal prognosis, and post-eradication surveillance **q3–6 mo × 2 y then q6–12 mo**. Existing plain-text mentions on [[helicobacter-pylori-infection]] and [[gastric-premalignant-conditions]] now link to it.

**Dedup (one home per fact):**
- ~75 duplicated lines removed from [[gerd]] Steps 3–4 (TIF 2.0 / cTIF / Stretta / ARMS / ARMA / GERDx / MUSE efficacy, safety and cost figures; SAGES technique trade-offs) that restated [[antireflux-surgery]] almost verbatim. gerd.md now carries the **eligibility gate** (objective GERD, GEJ assessment, MDT review, mandatory HRM) and the hernia-size/Hill-grade decision table; the unique detail it held (cTIF cohort data, Stretta RCT/cohort figures, the investigational-technique table) was **moved to** antireflux-surgery.md rather than dropped.

**Decision gaps closed:** Goligher's classification named with the source's own dentate-line criteria ([[hemorrhoids]]); AJCC 8th-ed T/N/M tables + high-risk stage II features + IDEA duration table ([[colorectal-cancer]]); pancreatic-cancer relative-risk table ([[fammm-syndrome]]); ACG 2021 Table 3 biofeedback protocol, 7 components ([[biofeedback-therapy]]); the full "what must fail first" criteria ([[sacral-nerve-stimulation]]); Siewert classification pointer ([[esophageal-cancer]]); 4-hour gastric-emptying protocol qualifiers ([[nausea-and-vomiting]]); EoE biopsy rule qualifiers ([[dysphagia]]); AGA 2021 PICO 1A–6 table ([[cirrhosis-hemostasis]]); DAA doses and CTP ≥7 decompensation definition ([[direct-acting-antivirals]]).

**Hygiene:** `dysphagia` and `nausea-and-vomiting` had **empty frontmatter `sources:`** — populated (5 and 4 verified slugs) and `## Sources` sections added. `hiv-aids-related-diarrhea` restructured into diagnostic-schema section order. Index reconciled (129 disease scripts; dysphagia/nausea/nitazoxanide/DAA/cirrhosis-hemostasis descriptions refreshed). **0 broken links, 0 orphans, 0 unescaped alias pipes, 0 OS artifacts across 508 pages.**

**Remaining for user triage:**
- **Blocked on tooling, not corpus:** the **OLGA/OLGIM stage-assignment matrix** ([[atrophic-gastritis]]), the **Bristol Stool Scale** figure, and **EREFS per-feature point ranges** ([[eosinophilic-esophagitis]]) all exist only as figures in already-ingested PDFs. `pdftoppm`/`pdfimages`/`convert` are permission-blocked and PyMuPDF is not installed in the container, so none could be captured. Flagged on-page rather than filled from memory.
- **Corpus-blocked (never fill from memory):** Wexner/St. Mark's FI scores; IBS-SSS components; PDAI/mPDAI subscore point values; toxic-megacolon formal criteria + Ho index; CDAI item weights; Tokyo TG18 cholecystitis grades; Blumgart T-stages; modified-NIH/Joensuu GIST risk; Curaçao criteria; PREMM1,2,6 components; AFS hiatal-hernia grade; Barcelona/Toronto cleanliness scales; LA grade A–D; antiparasitic dosing.
- **Structural gaps proposed, not created (need your call):** a **constipation diagnostic schema** (four pages currently have no schema pointer because none fits) and a **colonic-polyposis schema** (seven polyposis pages likewise); a `bristol-stool-scale` concept page.
- **Candidate pages with ingested support:** `fibrolamellar-hepatocellular-carcinoma` (ACG 2024 KC 37–39), `zollinger-ellison-syndrome`, `ursodeoxycholic-acid`, `cholestyramine`, `rifampin`, `glp-1-receptor-agonists`, *Cyclospora cayetanensis*, *Cystoisospora belli*.
- **Cards not updated this pass** — the cards directory is outside the sandbox for this session; the nightly 05:00 card pass will pick up the edited pages.
- `raw/GI Guidelines/AGA/AGA 2026 CPU Hemorrhoids (duplicate).pdf` is a duplicate of its neighbour and can be deleted.

---

## [2026-08-12] update | Paris classification rebuilt as a picture-per-type table; cold-forceps size cutoff reconciled (polypectomy)

**Pages updated:**
- `wiki/3-general-gi-procedures/polypectomy.md` — Paris section rebuilt as a per-type table: profile schematic + endoscopic example + source definition + SMI risk for each subtype. Adds **0-III (excavated)**, the 0-IIa/0-IIb/0-IIc definitions from Table 2 of [[usmstf-2020-endoscopic-removal]] (0-IIa <2.5 mm, or height < ½ lesion diameter), 0-IIa SMI risk 0.7–2.4%, and 0-IIc detail (1–6% of non-polypoid lesions; >40% SMI at 6–10 mm). Replaces the whole-figure embed — panels are crops of the same Figure 1.
- Same page, `### ≤5mm (Diminutive)` — **cold-forceps exception was a single unattributed number**; now shows both tier-1 cutoffs and which one the page follows: **≤2 mm** (USMSTF/ASGE 2020, jumbo forceps, single-bite anticipated) vs **1–3 mm** ([[aga-2024-tailored-polypectomy]] BPA 2, newer → what the page follows). Cold forceps remain not recommended for diminutive (≤5 mm) lesions generally; ≤5 mm is the *diminutive* size band, never a cold-forceps indication.

**Assets created (crops of `polypectomy-2020-paris-classification-07.png`):**
- `raw/assets/polypectomy-2020-paris-schematic-{0ip,0is,0iia,0iib,0iic,0iii}-07.png`
- `raw/assets/polypectomy-2020-paris-endoscopic-{0is,0iia,0iic}-07.png` (white light + image-enhanced pair)
- `raw/assets/polypectomy-2020-paris-endoscopic-unlabeled-07.png` (labels cropped off, card front)

**Cards:** `cards/3-general-gi-procedures/polypectomy.md` — `[c22f8a]` 0-IIc SMI risk corrected 27–36% → **27–35.9%** with the 6–10 mm and 0-IIa-contrast figures in Back Extra; new `[5d7b92]` image-front recognition card (name the Paris type of three white-light lesions, labelled figure as the answer key). `[8e4d19]` already carried the AGA 1–3 mm cutoff — unchanged.

**Card hygiene (build now reports 0 problems, 87 notes):**
- `tags:` added to the 5 files that lacked it — hepatic-encephalopathy, hepatocellular-carcinoma, portal-hypertension (`GI::Organs::Liver::…`), gastrointestinal-stromal-tumor (`GI::Organs::Stomach::GIST`), hepatic-venous-pressure-gradient. Leaf names follow the documented tree but were not dictated by Nick — correct in place if they don't match his collection.
- Stale-card flags on `hepatic-encephalopathy` and `endoscopic-mucosal-resection` cleared by bumping `page_updated:` only — the 2026-08-12 lint pass changed those pages cosmetically (alias-pipe escape, source-title trim), no clinical content, so no card text needed to change.

---

## [2026-08-11] ingest | DDW 2026 abstract — Vasopressor-indexed ERCP timing in TG III cholangitis with septic shock (Aloysius)

**Source created:**
- `wiki/sources/aloysius-2026-ercp-timing-septic-shock-cholangitis.md` — retrospective TriNetX propensity-matched cohort presented at DDW 2026. Timing of ERCP indexed to **vasopressor initiation** rather than admission. ERCP <24 h (n=887) vs 24–48 h (n=420): 30-day mortality HR 1.07 (0.81–1.42), p=0.65; vs 48–72 h (n=217): HR 1.47 (1.00–2.16), p=0.046; vs 24 h–7 d: HR 1.25 (0.98–1.60), p=0.07. Authors conclude "stabilize, then drain."

**Pages updated:**
- `[[choledocholithiasis]]` — *Acute Cholangitis — Drainage Timing*: sub-bullet under the severe-cholangitis line flagging that <24 h drainage showed no survival benefit in TG III septic shock, explicitly marked as abstract-level evidence that does **not** displace [[asge-2021-cholangitis]].
- `[[ercp]]` — same nuance on the cholangitis indication, pointing at [[choledocholithiasis]] for the detail (one home per fact).
- `[[index]]` — new source entry; choledocholithiasis (4→5 sources) and ercp (9→10 sources) descriptions refreshed; total 246 → 247 sources.

**Evidence handling:** conference abstract + retrospective database ranks below guideline and RCT, so the guideline recommendation (severe cholangitis → emergent drainage) remains what both pages assert; the abstract is surfaced as a contradiction, not adopted.

**Flagged on the source page:**
- **Internal inconsistency** — Results report higher mortality in the <24 h arm vs 48–72 h (HR 1.47), while the Conclusions state mortality rises when ERCP is delayed beyond 48 h. Opposite directions; the "delay beyond 48 h" claim was deliberately kept **off** entity pages.
- "1:1 propensity-matched" cohorts are 887 vs 420 and 887 vs 217 — not 1:1.
- No lactate/vasopressor dose; confounding by indication (authors' own reading of HR 1.47) and immortal-time bias both plausible.

**Still open:** the wiki has no dedicated **acute cholangitis** disease script and TG18 severity criteria are not fully ingested — timing content continues to live on `choledocholithiasis` and `ercp`. Second ingest in a row to hit this gap.

**Raw filed:** two abstract screenshots → `raw/GI RCTs/Aloysius 2026 DDW - Vasopressor-indexed timing of ERCP in TG III cholangitis (abstract|baseline table).png`. Kaplan–Meier figure not embedded — the abstract's curves are unlabelled (no arm legend, no risk table), so the HRs carry the finding better than the picture.

---

## [2026-08-11] update | Split polypectomy-emr into polypectomy (general) + EMR and ESD (advanced)

**Rationale:** `polypectomy-emr` bundled a bread-and-butter colonoscopy skill with two advanced-endoscopy techniques on one 453-line page. Polypectomy belongs under General GI Procedures; EMR and ESD are advanced procedures with their own pages.

**Pages created:**
- `3-general-gi-procedures/polypectomy.md` — lesion assessment (Paris/LST/NICE/WASP/non-lifting), resection by size and morphology incl. AGA 2024 tailored-polypectomy BPAs, tattoo, malignant polyp recognition and management (Haggitt/Kikuchi, favorable vs unfavorable histology, specimen handling, CAP reporting), quality standards and competency tools. 4 sources.
- `4-advanced-gi-procedures/colorectal-procedures/endoscopic-mucosal-resection.md` — inject-and-cut + ERBE settings, submucosal lifting agents (AGA 2025), post-resection margin ablation/clipping/bleeding benchmarks, underwater EMR, cold snare EMR, hot avulsion, post-EMR piecemeal ≥20mm surveillance. 4 sources.

- `4-advanced-gi-procedures/colorectal-procedures/colorectal-esd.md` — colorectal ESD indications (limited), hybrid ESD, eFTR, and the whole *Early (T1) CRC — Endoscopic Resection (AGA 2025 CPU)* section. Split out from the generic ESD page rather than merged into it: the colon has a narrower indication set, a thinner wall, and a different source base. 2 sources.

**Pages updated:**
- `[[endoscopic-submucosal-dissection]]` — narrowed to **esophagogastric** ESD (title and lede say so); keeps the generic definitions, en-bloc/R0 principle, depth of invasion, ASGE 2023 lesion-based selection, gastric criteria, outcomes and adverse events. Slug unchanged — most inbound links are foregut, and it stays the landing page for "ESD" in general. Still 1 source (`asge-2023-esd`). No longer a stub.
- `[[index]]` — `[[polypectomy]]` added under General GI Procedures; `[[endoscopic-mucosal-resection]]` and `[[colorectal-esd]]` under Colorectal Procedures; ESD description rewritten as esophagogastric; footer counts 4 → 5 general, 24 → 25 advanced.

**Page deleted:** `4-advanced-gi-procedures/colorectal-procedures/polypectomy-emr.md` (content fully redistributed, nothing dropped).

**Link rewrite:** 105 `[[polypectomy-emr]]` references across 47 pages retargeted — EMR-worded aliases (`|EMR`, `|Endoscopic mucosal resection`) → `[[endoscopic-mucosal-resection]]`, all others → `[[polypectomy]]`; redundant `[[polypectomy|polypectomy]]` aliases collapsed. Colorectal-context `[[endoscopic-submucosal-dissection]]` links (colorectal-cancer, colonoscopy, polypectomy, EMR, eFTR, anticoagulation table row, and the USMSTF/AGA-CRC/IBD/eFTR source pages) retargeted to `[[colorectal-esd]]`; esophagogastric, duodenal, and generic-technique links left on the original slug. Slugs resolve by basename, so no other path fixes were needed. Whole-wiki link audit: 0 unresolved targets. Historical `log.md` mentions of the old slug left as written.

**Anki:** the one card file split three ways to match (21 polypectomy / 8 EMR / 4 colorectal ESD), all 33 note ids preserved. `build-anki.mjs` gained a `guid_page:` frontmatter field that pins the GUID hash to the original page path, so re-import moves the existing notes into the new decks and retags them **without losing review scheduling** — verified: `sha1(polypectomy-emr.md + id)` still produces every exported guid. Deck tree now `3. General GI Procedures::Polypectomy (Colorectal)` plus two under `4. Advanced GI Procedures::Colorectal Procedures`.

---

## [2026-08-10] ingest | Jagtap 2026 (Gut) RCT — urgent vs early ERCP in mild-to-moderate acute cholangitis

**Source created:**
- `[[jagtap-2026-urgent-vs-early-ercp-cholangitis]]` — single-centre open-label superiority RCT (AIG Hyderabad), n=304, NCT05920954. Raw file is named "Rosenbluth" but that name is not among the authors; slugged to the actual first author (Jagtap N).

**Key findings:**
- Urgent ERCP (<24 h) vs early (24–48 h) in **mild-to-moderate** cholangitis: no difference in 30-day mortality (3.95% vs 6.58%; HR 0.70, 95% CI 0.25–1.93) or organ failure.
- Urgent ~**doubled post-ERCP adverse events** (17.1% vs 9.2%; RR 2.03), driven by **haemorrhage** (10.5% vs 3.3%). DSMB halted enrolment for lost equipoise (NNT 38 to prevent one death vs NNH 13).
- Independent predictors: urgent ERCP + biliary sphincterotomy → post-ERCP AE/bleeding; **malignant obstruction the sole predictor of 30-day mortality** (HR ~5), not timing. Underpowered for the observed small mortality difference (~18% power).

**Pages updated:**
- `[[ercp]]` — cholangitis timing indication refined (<48 h; urgent <24 h only for severe) + post-ERCP bleeding section; +1 source, `updated:` bumped.
- `[[choledocholithiasis]]` — new "Acute Cholangitis — Drainage Timing" subsection; +2 sources (asge-2021-cholangitis, jagtap-2026); index count 1→4.
- `[[asge-2021-cholangitis]]` — added RCT refinement + contradiction cross-reference to the "ERCP within 48 h" recommendation.
- `index.md` — new source entry under Other; ercp (6→9) and choledocholithiasis (1→4) descriptions/counts refreshed.

**Not done (environment limit):** Anki card files for `ercp`/`choledocholithiasis` were not updated — the cards dir is not mounted in this (`/repo`-only) container. Needs a rebuild where the cards dir is reachable.

**Flagged (coverage gap):** the wiki still has **no dedicated acute-cholangitis disease script** (TG18 diagnostic/severity criteria not ingested); cholangitis content lives across choledocholithiasis, jaundice, and ercp.

---

## [2026-08-10] lint | Parallel 4-batch sweep + Jagtap RCT ingest; colon-ischemia + portal-hypertension decision gaps closed; PVT TIPS-mislink fixed; 0 broken links / 0 orphans

**Scope:** Full-wiki health check. Ingested the one new inbox-sync file (Jagtap 2026 RCT, logged separately above). Fanned out across parallel subagents (1 stalest-page validator + folder batches for hepatology/pancreaticobiliary, diagnostic-schemas, meds, and concepts A–L / M–Z); whole-wiki concerns reconciled centrally.

**Decision gaps closed (from ingested sources, PDF-verified):**
- `[[colon-ischemia]]` — replaced paraphrased severity strata with **ACG 2015 Table 6** operative criteria (moderate = up to 3 of 10 named factors; severe = >3 or any of peritoneal signs / pneumatosis-PVG / gangrene / pancolonic-IRCI). Removed an unsupported CT "sens/spec >80%" claim (guideline calls CT findings nonspecific).
- `[[portal-hypertension]]` — added the **Sarin gastric-varices classification** (GOV1/GOV2/IGV1/IGV2 criteria) the cyanoacrylate recommendation was conditioned on; sourced to AASLD 2023.

**Stalest-page validation:** `[[colon-ischemia]]`, `[[hereditary-diffuse-gastric-cancer]]` (fixed a false "figures" internal reference), `[[bmmrd-syndrome]]` (verified faithful to USMSTF 2017) — all bumped.

**Link densification / hygiene:** targeted inline first-mention links added across `glp-2-agonists`, `abdominal-bloating-and-distention`, `intestinal-ultrasound`, `nutrition-in-hospitalized-patients`, `liver-biopsy`, `ibd-in-malignancy`, and several hepatology pages; `asge-2023-post-ercp-pancreatitis` added to `[[acute-pancreatitis]]` and `[[sphincter-of-oddi-dysfunction]]` `## Sources` (was inline-cited only); index counts reconciled (acute-pancreatitis 4→7, SOD 2→3).
- **Correctness fix:** `[[portal-vein-thrombosis]]` TIPS bullet pointed at `[[ercp]]` → retargeted to `[[tips]]`.

**Health:** 0 broken links, 0 orphans, 0 duplicate basenames, 0 broken table-alias-pipes, 0 OS artifacts, 0 stray report files.

**Stubs:** none expandable this pass — all remaining stubs (rectal-prolapse, microscopic-colitis, bile-acid-diarrhea, argon-plasma-coagulation, bariatric-surgery) are correctly documented as source-blocked (bariatric has only a gated lecture).

**Reported for user triage (not fixable without new/ingested sources — no fabrication):**
- **Missing `## Sources` entirely** on `[[dysphagia]]` and `[[nausea-and-vomiting]]` (empty frontmatter `sources:`) — needs human source attribution (candidates exist in-wiki; retro-attribution would be guessing).
- **Missing IBD drug-class pages** repeatedly referenced but unlinked: thiopurines, anti-TNF/TNF-inhibitors, vedolizumab, ustekinumab, JAK inhibitors — deferred (each needs careful multi-CPU sourcing; too heavy for this pass's budget).
- **Corpus-blocked score/criteria gaps** (need original papers, never fill from memory): ABIC/GAHS (alcohol-associated hepatitis), Rockall point values, Tokyo TG18 severity grades, CTSI cutoff, Curaçao criteria (HHT), Roenigk (MTX), PAGE-B/REAL-B components, HPS PaO₂ severity bands, Rotterdam/AUROC BCS, FPC lifetime risk.
- `[[chronic-pancreatitis]]` Sources #6 (Catalano 2009, Rosemont) is a plain-text citation with no source page and the paper not in `raw/`.

---

## [2026-08-09] lint | Parallel sweep — H. pylori BQT dosing correction, stalest-page validation, 7-concepts link densification

**Scope:** Full-wiki health check. Fanned out across 3 parallel subagents (2 stalest-page validators + 1 `7-concepts/` link-densifier); whole-wiki concerns (broken links, orphans, ingest queue, dosing consistency, index/log) reconciled centrally.

**Inbox sync / ingest queue:** No untracked files in `raw/` (git clean) — inbox sync added nothing this pass. All 247 tier-1/2 guidelines/CPUs/RCTs remain ingested; the extra `raw/` files are the known lowercase-shorthand AGA duplicates (+ `AGA 2026 CPU Hemorrhoids (duplicate).pdf`) plus ~40 gated lecture/chalk-talk transcripts. Per schema, lectures are **never auto-ingested** — reported, awaiting user selection by name.

**Decision-critical fix — H. pylori BQT dosing (corrected from raw ACG 2024 PDF):**
- `[[bismuth-quadruple-therapy]]` was citing only the superseded **ACG 2017** guideline and carried an **under-dosed metronidazole** (250 mg q.i.d. = 1,000 mg/day). Rebuilt to **ACG 2024 "optimized" BQT** and re-sourced (`sources:` → `[acg-2024-hp-treatment, acg-2017-hp-guidelines]`): metronidazole **500 mg t.i.d.–q.i.d. (1,500–2,000 mg/day)**, bismuth subsalicylate **300 mg** or subcitrate 120–300 mg q.i.d., tetracycline 500 mg q.i.d. (doxycycline not an acceptable substitute), PPI b.i.d., **14 days preferred (≥10)**; Pylera-10-day vs Helidac-14-day distinction; first-line-vs-salvage reframed to 2024. Removed redundant body `# H1`.
- Propagated the corrected dosing to the two other pages that carried the stale figures: `[[helicobacter-pylori-infection]]` first-line table (subsalicylate 525 → 300 mg; metronidazole → t.i.d.–q.i.d. 1,500–2,000 mg/day) and the **source page** `sources/acg-2024-hp-treatment.md` (its regimen tables listed subsalicylate **525 mg** and did not state the nitroimidazole daily total — both corrected against the raw ACG 2024 Table 5; verified no "525" appears anywhere in the source PDF).
- Left the **ACG 2017 source page** (`sources/acg-2017-hp-guidelines.md`) unchanged — its 525 mg / 250 mg figures faithfully represent that older guideline. Left `acute-diarrhea.md`'s 525 mg (bismuth-for-diarrhea dosing, correct per ACG 2016).

**Stalest-page validation (decision-sufficiency + style):**
- `[[focal-liver-lesions]]`, `[[subepithelial-lesion]]` (both 2026-07-16) — validated against raw ACG 2024 / ACG 2023 PDFs; both decision-sufficient (multiphasic imaging matrix; GIST size×mitotic-rate, EUS layer-of-origin, NET size thresholds; LI-RADS correctly one-homed on `[[li-rads]]`, not duplicated). Rectal-NET metastasis figures spot-checked against raw ACG 2023 (66%/73%) — exact match. Only fix: added the missing `## Contents` ToC to each; dates bumped.
- `[[chronic-diarrhea]]`, `[[acute-diarrhea]]` — reviewed, already decision-sufficient (osmotic-gap cutoffs, fever/duration thresholds, full drug doses, alarm features); not churned.

**Link densification (`7-concepts/`, 47 pages):** folder already densely linked from prior passes; added HVPG↔NIT connections — `[[liver-biopsy]]` and `[[liver-stiffness-measurement]]` now inline-link `[[hepatic-venous-pressure-gradient]]`, with the reciprocal `[[liver-stiffness-measurement]]` added to the HVPG See Also.

**Whole-wiki checks (clean):** 0 broken links; 0 orphan pages; 503 pages / 247 sources; no `.DS_Store`/OS artifacts; no empty files; See Also / Sources bottom-section format compliant.

**Stubs (all corpus-blocked — NOT expanded, no fabrication):** `[[microscopic-colitis]]`, `[[bile-acid-diarrhea]]`, `[[argon-plasma-coagulation]]`, `[[bariatric-surgery]]`, `[[rectal-prolapse]]` — each already documents that no dedicated source is ingested; expansion needs a not-yet-ingested source.

**Remaining for user triage:**
- **Lectures/chalk talks** await explicit selection — name which to ingest.
- **`## Contents` ToC convention** is inconsistent wiki-wide (only ~1/22 diagnostic-schema and ~6/27 med pages carry one). If the ToC is meant to be standard, a dedicated pass could add it to the rest (cosmetic — the website auto-builds the outline regardless).
- **`[[subepithelial-lesion]]`** could incorporate `[[aga-2024-full-thickness-resection]]` (ingested, on-topic for EFTR) in a dedicated content pass — currently cites ACG 2023 + ASGE 2017 only.
- **`[[chronic-diarrhea]]`** mechanistic classification / osmotic-gap cutoffs are standard but not traceable to its sole cited endoscopy-role source (`asge-2010-diarrhea`); a dedicated chronic-diarrhea guideline would properly source them.
- Possible future disease-script: **systemic sclerosis / scleroderma** (drives esophageal dysmotility + SIBO; currently referenced as plain text across several pages).

---

## [2026-08-07] lint | Parallel 4-batch sweep — EAC stub expanded, decision-gap validation, inline-link densification

**Scope:** Full-wiki health check, fanned out across 4 parallel folder-batch subagents (disease-scripts × 3 regions + procedures/meds/concepts), with whole-wiki concerns (orphans, broken links, ingest queue, index/log) handled centrally.

**Ingest queue:** No tier-1/2 files uningested — all 247 guidelines/CPUs/RCTs in `raw/` have source pages. Remaining uningested `raw/` files are **all gated lecture/chalk-talk transcripts** (~40); per schema these are never auto-ingested — reported, awaiting user selection by name.

**Stub expanded:**
- `[[esophageal-adenocarcinoma]]` — stub → full ADDT disease script, built strictly from already-ingested `[[asge-2018-barretts-eet]]`, `[[asge-2019-barretts-screening-surveillance]]`, `[[nccn-2026-esophageal-egj-cancer]]`. Centered on the depth-of-invasion decision (Tis/T1a → EET vs T1b sm2–3/poor-diff/LVI → esophagectomy) with the sourced LN-metastasis-risk table (0% / ~0–2% / ≥20%); links out to `[[barretts-esophagus]]`/`[[endoscopic-eradication-therapy]]`/`[[esophageal-cancer]]` per one-home rule rather than duplicating.

**Decision-gap validation (stalest pages per batch):** All validated pages carried their operative criteria/thresholds in full (BMMRD penetrance/surveillance ages; colon-ischemia ACG-2015 severity criteria; Chicago v4.0 IRP/DCI cutoffs; pancreatic-cyst CEA 192/MPD >5 mm/size thresholds; celiac Marsh; GIST size×mitotic-rate). No fillable gaps found.

**Decision gaps flagged (corpus/licensing-blocked — NOT filled from memory):**
- `[[esophageal-cancer]]` — Siewert classification cm-criteria and PD-L1 CPS cutoffs absent (sole source NCCN 2026, reproduction EULA-blocked; needs a non-NCCN source).
- `[[drug-induced-liver-injury]]` — Roenigk classification (methotrexate) not in ingested DILI sources.
- `[[pancreatic-cancer]]` — resectable/borderline-resectable vascular criteria absent (no NCCN pancreatic / surgical source in `raw/`).
- `[[rectal-prolapse]]`, `[[mesenteric-artery-aneurysm]]`, `[[postinfectious-ibs]]` — grading/imaging/surveillance/PI-IBS-specific detail need dedicated sources not yet ingested (already flagged on-page).

**Inline links / hygiene fixes:**
- `[[drug-induced-liver-injury]]` — `MELD` → `[[cirrhosis|MELD]]` (score home is cirrhosis.md); added `[[cirrhosis]]` to See Also.
- `[[rotavirus]]` — linked `[[toxic-megacolon]]` on first mention.
- `[[diverticulitis]]` — linked `[[inflammatory-bowel-disease|IBD]]` (SCAD bullet).
- `[[rectal-prolapse]]` — linked `[[defecation-disorders]]` on first mention.
- `[[pancreatic-cysts]]` — removed a duplicate body `# H1` (title already in frontmatter).
- `[[chicago-classification-v4]]` — added the missing `## Contents` nested ToC (renderer builds the right-rail outline from it).

**Whole-wiki checks (clean):** 0 orphan pages; 0 broken links in content pages (only placeholder tokens/historical slugs inside this append-only log); no `.DS_Store`/OS artifacts; no empty files; See Also / Sources bottom-section format compliant across all batches; no new contradictions (existing cross-source tensions already surfaced in-page).

**Remaining for user triage:**
- **Lectures/chalk talks** in `raw/GI Lectures+Chalk Talks/` await explicit selection — name which to ingest.
- `[[pancreatic-cancer]]` is prose-heavy — candidate for a future bulletization pass (deferred to avoid fidelity risk).
- Corpus-blocked decision gaps above need their originating sources ingested before they can be filled.

---

## [2026-08-05] ingest | EUS-PPG International Expert Delphi Consensus (Wang 2026, CGH) — 53 statements; new HVPG concept page; 4 entity pages updated

**Source created:**
- `[[wang-2026-eus-ppg-delphi-consensus]]` — International Expert Delphi Consensus on EUS-guided Portosystemic Pressure Gradient: Best Practices and Future Directions (Wang TJ, Chang K, Rubin RA, et al. *Clin Gastroenterol Hepatol* 2026; DOI 10.1016/j.cgh.2025.12.007; © 2025 AGA Institute). Tier-1 consensus. All **53 consensus statements** reproduced verbatim/near-verbatim, grouped by domain (indications, pre-procedure, intra-procedure technique, future research) with % agreement / Likert scores; Round-2 revisions annotated. Arrived via inbox sync (`raw/GI Guidelines/Other/`); was uningested.

**New page created (resolves a would-be broken link):**
- `[[hepatic-venous-pressure-gradient]]` (7-concepts) — the Wang source links `[[hepatic-venous-pressure-gradient|HVPG]]` and no page existed. Built ONLY from already-ingested `[[baveno-vii-2022-portal-hypertension]]` + `[[aasld-2023-portal-hypertension]]`: definition (WHVP−FHVP), balloon-occlusion technique, interpretation ladder (normal 1–5; >5 sinusoidal PH; ≥10 CSPH; ≥12 variceal bleeding; ≥16/≥20 prognostic), limitations → EUS-PPG segue. Classic "≥20%/<12 mmHg" HVPG-response cutoff deliberately NOT invented (not in ingested material; noted "not established" per Baveno 3.6).

**Entity pages updated (all cite `[[wang-2026-eus-ppg-delphi-consensus]]`):**
- `[[interventional-eus-vascular]]` (primary technique home) — new best-practice consensus subsection: indications (S1–5), MAC/GA (S13), no platelet/INR cutoff → TEG/TEM (S11), recreated intra-procedure protocol table (zero-to-atmosphere + heparinized-saline flush S18/S21; transgastric-through-parenchyma tamponade S23–24; ideal targets left+middle hepatic veins / umbilical left portal vein / intrahepatic-IVC fallback S26/S28/S30; reproducibility ≥3 within ≤2 mmHg report mean, plateau ≥10 s within ≤1 mmHg, repeat if >60 s S31–34), safety <1% AE, HVPG correlation (ICC 0.82; r=0.91 post-TIPS).
- `[[portal-hypertension]]`, `[[endoscopic-ultrasound]]`, `[[tips]]` — concise sourced EUS-PPG notes (one-home rule; technique not duplicated).

**Index/log:** index source entry + HVPG concept entry added; per-page source counts bumped (interventional-eus-vascular 1→2, endoscopic-ultrasound stale 4→7, portal-hypertension 5→6, tips 4→5).

**Gap flagged:** Supplementary Fig 1 (intra-procedure checklist) lives in online supplementary material, not the main-article PDF → cannot be cropped from the ingested file.

---

## [2026-08-05] lint | Parallel 4-batch link/decision-gap sweep + EUS-PPG ingest; jaundice source-attributed; UCEIS band + Cowden interval + Gilbert threshold fixed; 2 stub expansions (fmt, heller-myotomy); 0 broken links / 0 orphans

**Parallel processing:** 4 fan-out lint subagents with disjoint folder ownership (colorectal+anorectal; foregut+gastric+SB+panc+other; hepatology+diagnostic-schemas; meds+procedures+concepts+syntheses) + 1 ingest subagent + 1 propagation subagent. Each edited only its owned pages; shared files (`index.md`, `log.md`) serialized centrally by the orchestrator.

**Ingest status:** ONE new tier-1 source ingested this pass — see the `ingest` entry above (Wang 2026 EUS-PPG consensus). Backlog otherwise remains CLEARED; only gated lecture/chalk-talk transcripts uningested (NOT auto-ingested — awaiting user selection by name). A HEIC algorithm image also arrived (see hygiene).

**Stalest-page validation (6 pages, 07-16/07-17):**
- `[[jaundice]]` — was decision-sufficient but had empty `sources:`; attributed backing `[[acg-2017-liver-chemistries]]` (R-ratio framework faithfully matches) + added `## Sources`; added sourced Gilbert threshold (total bilirubin <4 mg/dL → presumptive, no workup). `updated:` bumped.
- `[[focal-liver-lesions]]`, `[[prucalopride]]`, `[[probiotics]]`, `[[tacrolimus]]`, `[[reflux-testing]]` — validated decision-sufficient/source-faithful; `tacrolimus` fixed a drug-name typo (Nirmitrelavir→Nirmatrelvir).

**Decision-gap fixes (from ingested sources only):**
- `[[ulcerative-colitis]]` — added dropped **UCEIS severity-band row** (0–1 remission / 2–4 mild / 5–7 moderate / 7–8 severe) to the ACG UC Activity Index table from `[[acg-2025-uc]]` Table 4 (closes the "UCEIS ≥7" reference gap).
- `[[cowden-syndrome]]` — replaced vague "interval by polyp burden" with sourced **every-2-years** colonoscopy interval (`[[acg-2015-hereditary-gi-cancer]]`).
- `[[jaundice]]` — Gilbert threshold (above).

**Stub expansions (2, at cap; from ingested sources):**
- `[[fmt]]` — stub → Overview / Indications + AGA 2024 recommendations table (7 recs w/ immune-status gates) / Place in Therapy, from `[[aga-2024-fmt]]`.
- `[[heller-myotomy]]` — stub → Efficacy / Selection-vs-POEM / Salvage-Sequencing, from `[[acg-2020-achalasia]]` + `[[sages-2024-poem]]`.

**Stale stub markers cleared (content already sourced-complete):** `[[prucalopride]]`, `[[linaclotide]]`, `[[plecanatide]]`, `[[small-bowel-motility]]`, `[[brca-pathogenic-variants]]`. Index `(stub)` tags removed for these + fmt + heller-myotomy (7 total).

**Page-local fixes (~13 pages):** `[[crohns-disease]]` (CRC first-mention link relocation), `[[pouchitis]]` (dup probiotics link), `[[hiv-aids-related-diarrhea]]` (non-standard `## Related` heading folded into `## See Also`), `[[gastric-premalignant-conditions]]` + `[[helicobacter-pylori-infection]]` (inline links), plus See-Also/one-link-per-entity hygiene. No XML corruption found this pass.

**Health check:** **0 broken wiki-links** (checker verified after edits; table-escaped `\|` pipes and `#section` anchors resolve), **0 orphan pages**, no OS artifacts, no scratch files.

**Remaining for user triage:**
- **Corpus-blocked decision gaps** (each needs a specific score's/guideline's original paper ingested — never filled from memory): ABIC/GAHS component points (ALD); GERD **LA A–D** + Hill I–IV + AFS grade (`acg-2021-gerd` omits criteria → needs LA classification paper); Siewert types + TNM (esophageal/CRC — NCCN license); **Cambridge** ductal-morphology grade (chronic-pancreatitis, NEW); Ho index (toxic-megacolon); Tokyo TG18 (acute-cholecystitis); CTSI cutoff; gallbladder-cancer re-resection T-stage; Beighton score (hEDS); Truelove-Witts numeric cutpoints (UC — ACG uses its own Activity Index).
- **2 uncited diagnostic schemas** — `[[dysphagia]]`, `[[nausea-and-vomiting]]` carry decision-sufficient content but empty `sources:`; no single faithful backer confidently identified → left for user attribution (not over-attributed).
- **Stubs expandable next pass** (reported, cap hit): `[[tegaserod]]`, `[[alosetron]]` (→`acg-2020-ibs`). Corpus-blocked stubs: `glp-2-agonists`, `bariatric-surgery`, `argon-plasma-coagulation`, `bile-acid-diarrhea` (only gated diarrhea chalk talks would cover it), `rectal-prolapse`, `microscopic-colitis` (Therapeutics).
- **Missing pages flagged** (need a backing source): Zollinger-Ellison/gastrinoma, gastric MALT lymphoma, Ménétrier's, SMA syndrome, classification homes (los-angeles-classification, siewert-classification, hill-grade, beighton-score), dermatitis-herpetiformis, IgG4-related disease, rituximab, dieulafoy-lesion, paracentesis, acute-abdominal-pain schema (would give acute-pancreatitis its DDx pointer). `[[esophageal-adenocarcinoma]]` is a partial stub expandable from ingested Barrett's/NCCN sources next pass.
- **New HEIC image** — `raw/assets/Algorithm for Management of Acute Gastric Variceal Bleeding.HEIC` committed as raw source; **could not be converted to PNG or embedded** — ImageMagick `convert` requires an approval not granted in this environment and no other HEIC→PNG tool is installed. Needs conversion + embedding on `[[variceal-upper-gi-bleeding]]`/`[[portal-hypertension]]` once tooling is available.
- **Gated lectures** — transcripts await user selection by name before ingest.

---

## [2026-08-04] lint | Parallel folder-batch link/decision-gap sweep; givosiran+hemin stub markers cleared; gastric-adenocarcinoma T1a-resection gap fixed; Meckel's XML-corruption removed; 0 broken links / 0 orphans

**Ingest status (nothing ingested — correct per rules):**
- No new raw files (inbox sync brought none; `git status` clean of untracked `raw/`). 399 raw files, 246 sources — backlog remains CLEARED; all guidelines/CPUs/RCTs ingested. Only **gated lecture/chalk-talk transcripts** remain uningested — **not auto-ingested** (unattended pass; awaiting user selection by name).

**Parallel processing:** 4 fan-out lint subagents with disjoint folder ownership (colorectal; foregut+panc+other; hepatology+schemas; meds+procedures+concepts), which further sub-fanned to per-subfolder workers. Each edited only its owned pages; shared files (`index.md`, `log.md`) serialized centrally by orchestrator.

**Stalest-page validation (3 pages, all validated clean, `updated:` bumped):**
- `[[proctalgia-syndromes]]` — Rome IV duration criteria (chronic ≥20 min / fugax <20 min), ARM+BET indication, biofeedback protocol all present. Decision-sufficient.
- `[[cryptosporidiosis]]` — dx (EIA / mod acid-fast / multiplex PCR) + tx (nitazoxanide 500 mg BID ×3 d; immune reconstitution) sourced; DDx schema pointer to `[[acute-diarrhea]]` present.
- `[[rotavirus]]` — recommendation capture with grades; supportive care + vaccine guidance complete.

**Stub markers cleared (2, content already sourced-complete):**
- `[[givosiran]]`, `[[hemin]]` — carried leftover `*Stub — to be expanded.*` markers despite full source-faithful content (dosing, route, monitoring, cautions) verified against `[[aga-2023-acute-hepatic-porphyria]]`. Markers removed; `updated:` bumped. (Not new expansion — completing pages that were already written.)

**Decision-gap fix (from ingested source):**
- `[[gastric-adenocarcinoma]]` — "early T1a → endoscopic resection" bullet stated the conclusion but omitted the criteria; added sourced criteria (well-differentiated, nonulcerated, mucosa-confined T1a; ESD preferred over EMR; <20 mm either acceptable) from already-ingested `[[asge-2023-esd]]`; added source to frontmatter + numbered Sources; index count 1→3.

**Page-local fixes (inline links + hygiene, ~11 pages):**
- `[[meckels-diverticulum]]` — removed leaked `</content>`/`</invoke>` XML corruption from a prior bad write; added `[[hereditary-hemorrhagic-telangiectasia|Osler–Weber–Rendu]]` + `[[gastroenteropancreatic-neuroendocrine-tumors|carcinoid]]` DDx links.
- `[[barretts-esophagus]]` — added missing `[[esophageal-cancer|esophageal SCC]]` DDx link; removed duplicate second `[[gerd]]` link (one-link-per-entity).
- `[[acute-hepatic-porphyria]]` — moved `[[hepatocellular-carcinoma]]` link to first mention; fixed mislabeled alias.
- `[[small-intestinal-bacterial-overgrowth]]` (PPI + CDI links, de-duped later C. diff), `[[chronic-pancreatitis]]` + `[[hereditary-pancreatitis]]` (`[[pancreas-divisum]]`), `[[segmental-colitis-associated-with-diverticulosis]]` (colonoscopy), `[[enteral-access]]` + `[[poem]]` (obesity), `[[interventional-eus-vascular]]` (EGD) — first-mention inline links.

**Health check:** 0 broken wiki-links (escaped `\|` table pipes verified), 0 orphan pages, no OS artifacts, removed one stray `.tmp_all_slugs.txt` scratch file left by a subagent. Index `updated:` → 2026-08-04.

**Remaining for user triage:**
- **3 uncited diagnostic schemas** (`dysphagia`, `jaundice`, `nausea-and-vomiting`) carry decision-sufficient content but empty `sources:`. Candidate ingested backers identified (jaundice→`acg-2017-liver-chemistries` R-ratio framework; N/V→`acg-2022-gastroparesis`/`aga-2024-cvs`/`aga-2024-chs`; dysphagia→`acg-2025-eoe`/`acg-2020-achalasia`/`chicago-classification-v4`). Left for user to confirm attribution (synthesized schemas — not filled to avoid over-attribution).
- **Corpus-blocked decision gaps** (each needs a specific score's/guideline's original paper ingested — never filled from memory): GAHS/ABIC component points (Forrest 2005 / Dominguez 2008); Rockall point table (Rockall 1996); Tokyo TG18 dx + severity criteria (acute-cholecystitis); CTSI numeric cutoff; GIST modified-NIH/AFIP recurrence table; Beighton age-adjusted cutoffs (hEDS); Curaçao criteria (HHT); WHO PTLD subclassification; PAGE-B/REAL-B component weights; NCCN-licensed staging tables (gallbladder-cancer re-resection T-stage; gastric PD-L1 CPS cutoff).
- **Stubs expandable from ingested sources next pass** (reported, not done — cap): `fmt` (→`aga-2024-fmt`), `heller-myotomy` (→`sages-2024-poem`/`acg-2020-achalasia`). Corpus-blocked stubs: `glp-2-agonists` (no SBS/teduglutide source), `bariatric-surgery` (lecture-only/gated), `bile-acid-diarrhea` (no SeHCAT/C4/FGF19 source), `argon-plasma-coagulation` (no dedicated APC technique source).
- **Missing pages flagged** (need not-yet-ingested sources): `autoimmune-pancreatitis`, `acute-cholangitis`, `hellp-syndrome`, `hepatitis-a`/`hepatitis-e`, `pyogenic-liver-abscess`.
- **`hepatic-encephalopathy.md` scaffolding** deviates from ADDT (uses Definition/Classification/Epidemiology, no top-level `## Differential Diagnosis`) — content complete, only section headers off; flagged for a dedicated restructure pass.
- **Gated lectures** — transcripts await user selection by name before ingest.

---

## [2026-08-03] lint | Parallel 5-batch link/decision-gap sweep; Meckel's stub→full ADDT; NRS-2002 scoring added; eluxadoline corruption fixed; 0 broken links / 0 orphans

**Ingest status (nothing ingested — correct per rules):**
- Verified backlog CLEARED: fuzzy-matched all 283 non-lecture raw files against `wiki/sources/` — only 3 weak matches, all confirmed already ingested (`NIT in MASDL.pdf`→[[aga-2023-nafld-noninvasive-biomarkers]], `GLP1 before endo.pdf`→[[aga-2024-glp1-endoscopy]], `Abx PPX for EUS FNA Panc Cysts RCT.pdf`→[[colan-hernandez-2020-eus-fna-panc-cyst-antibiotics]]). All guidelines/CPUs/RCTs ingested; only **gated lecture/chalk-talk transcripts** remain — **not auto-ingested** (unattended pass; awaiting user selection by name).

**Parallel processing:** 5 read/link subagents (disjoint folder ownership: colorectal; foregut+panc+other; hepatology+schemas; meds+procedures; concepts+syntheses) + 2 follow-up subagents (sourced decision-gap fixes; stub expansion). Shared-file writes (`index.md`, `log.md`) serialized centrally.

**Decision-gap fixes (from ingested sources only):**
- `nutrition-in-hospitalized-patients` — added full **NRS-2002** scoring table (nutritional-status 0–3, disease-severity 0–3, +1 for age ≥70; ≤3 low / >3 high risk) recreated verbatim from [[acg-2016-nutrition-hospitalized]] Table 5.
- Corpus-blocked (flagged, NOT filled from memory): **GAHS/ABIC** component point-values (AASLD 2020 ALD lists which variables but not the points → needs Forrest 2005 / Dominguez 2008); **Rockall** point table (ACG 2021 UGIB uses ≥6 only as RCT eligibility → needs Rockall 1996); Tokyo TG18 criteria; CTSI numeric cutoff; NCCN-licensed staging tables; Rotterdam/CLIF-C/NACSELD component weights; Curaçao criteria.

**Stub expansion:**
- `meckels-diverticulum` — stub → full ADDT from [[acg-2015-small-bowel-bleeding]] + [[asge-2017-small-bowel-bleeding]] (Meckel scan indication/performance, DDx w/ `[[small-bowel-bleeding]]` pointer, therapeutics). **Removed prior unsourced content** (Rule of 2s, "most common congenital anomaly," vitelline-duct anatomy) not present in either SBB source. Index entry + `(2 sources)` updated.
- `narcotic-bowel-syndrome` — NOT created: no page exists (tag + passing mention only), and [[aga-2024-ibd-pain]] covers it too thinly to build without fabrication. Reported.

**Page-local fixes (24 pages edited):**
- `eluxadoline` — removed leaked `</content>`/`</invoke>` corruption from a prior bad write.
- `gerd` — removed redundant double-links in DDx table (one-link-per-entity).
- `budd-chiari-syndrome` — removed duplicate bullets left by the parallel Baveno VII reconciliation.
- `liver-disease-in-pregnancy` — replaced stale ACG-2016 "deliver at 37 wk" red flag with AGA-2024 bile-acid-stratified timing (≥100→36 wk; <100→36 or 39 wk), resolving an internal contradiction.
- `alcohol-associated-liver-disease` — added inline-cited [[acg-2019-hereditary-hemochromatosis]] to frontmatter/Sources (was body-cited only).
- ~18 inline-link densifications across concepts/hepatology/schemas (LSM↔NILDA reciprocal links completed; scleroderma, ESD, NILDA, HHT, amoebic-abscess, HH, acute-cholecystitis first-mention links, etc.).

**Health check:** 0 broken wiki-links (table-escaped `\|` pipes verified), 0 orphan pages, no OS artifacts, no global count drift. Index `updated:` bumped to 2026-08-03.

**Remaining for user triage:**
- **Missing high-value pages** (need not-yet-ingested sources): individual IBD biologics (infliximab/adalimumab/vedolizumab/ustekinumab/risankizumab/upadacitinib), terlipressin, short-bowel-syndrome, bariatric-surgery, HELLP, narcotic-bowel-syndrome.
- **Corpus-blocked decision gaps** (see above) — each needs a specific score's original paper ingested.
- **3 uncited diagnostic schemas** (`dysphagia`, `jaundice`, `nausea-and-vomiting`) carry decision-sufficient content but empty `sources:` — need source assignment.
- **Search embeddings** (`website_files/search/`, repo root) not rebuilt — outside this pass's sandbox; rebuild separately.
- **Gated lectures** — 60 transcripts await user selection by name before ingest.

---

## [2026-08-02] lint | Parallel link/decision-gap sweep; pouchitis + eluxadoline decision-gap fixes; stale CTSI note corrected; index reconciled (246 sources); 0 broken links / 0 orphans

**Ingest status (nothing ingested — correct per rules):**
- All guidelines/CPUs/RCTs in `raw/` verified ingested (spot-checked the newest 2026 ACG/AGA/NCCN + Rome V, all 6 RCTs incl. Prosty→`[[albhaisi-2025-prophylactic-antibiotics-cirrhosis]]`). Only the **60 gated lecture/chalk-talk transcripts** remain uningested — **not auto-ingested** (unattended pass; awaiting user selection by name).

**Stalest-page validation (2 pages):**
- `[[pouchitis]]` — **decision-gap fix from `[[aga-2024-pouchitis]]`** (re-read raw PDF): added the sourced cutoffs **active pouchitis = PDAI >7** and **mPDAI remission = score ≤4 + ≥2-point reduction from baseline** (EARNEST endpoint). Full PDAI subscore point-values (Sandborn 1994) are **not** in the AGA source → flagged, not filled. `updated:` bumped.
- `[[colon-ischemia]]` — validated decision-sufficient + format-clean (severity/typing criteria, DDx schema pointer, See Also/Sources all correct); no edits.

**Stub expanded (1, from ingested sources):**
- `[[eluxadoline]]` — stub → full med page from `[[aga-2022-ibs-d]]` + `[[acg-2020-ibs]]` (re-read raw PDFs): dosing (100 mg BID; **75 mg** if 100-mg intolerance / mild–moderate hepatic impairment / concomitant OATP1B1 inhibitor; avoid in **Child-Pugh C**), full contraindications (no gallbladder; >3 alcohol/day; pancreatitis or SOD history), efficacy (FDA responder 27.2% vs 16.7%; RR 0.87), AEs, NNH. Index entry updated (stub → 2 sources).

**Parallel link/decision-gap sweep (3 fan-out subagents, per-folder, shared writes centralized):**
- Disease-scripts batch: **13 inline-link edits** (e.g. hepatology pages → `[[albumin]]`; CHS/CVS → `[[nausea-and-vomiting-of-pregnancy]]`; `[[diverticulitis]]` → C. diff; `[[toxic-megacolon]]` → ostomy; IBS → `[[fmt]]`; PSVD → variceal-UGIB/ascites).
- Meds/concepts + schemas/procedures batches: already densely linked / format-compliant — **no edits needed**.

**Stale-claim fix:**
- `[[acute-pancreatitis]]` — corrected an outdated inline note that claimed the `[[acg-2024-acute-pancreatitis]]` source page "still lists ≥8 = severe." The source page was already corrected and now states ACG 2024 assigns **no CTSI cutoff** (Revised Atlanta governs); note rewritten to match. `updated:` bumped.

**Hygiene / reconciliation:**
- Whole-wiki broken-link scan (escaped `\|` table pipes + code-span/image tokens excluded): **0 broken links.** Orphan scan: **0 orphan entity pages.**
- Index footer + frontmatter date reconciled to **2026-08-02**; counts unchanged and accurate: **246 sources | 128 disease scripts | 22 diagnostic schemas | 4 general procedures | 24 advanced procedures | 27 meds | 0 anatomy | 46 concepts | 1 synthesis.** No OS artifacts.

**Decision gaps flagged for triage (NOT filled — criteria absent from ingested *text* or corpus; source-fidelity):**
- **Child-Pugh (CTP) point-value bands / class A-B-C cutoffs** — corpus-wide stratifier; `[[cirrhosis]]` lists the CTP *components* (ACG 2025 Table 4) but not the 1/2/3-point bands, and the full table is **image-locked** in the ingested PDFs (pdftotext yields no table; **pymupdf unavailable** for figure crops). Needs a text-extractable source or a pre-made crop via inbox sync. Same blocker: MELD-Na formula.
- **Fillable from an ingested source next pass (text-extractable):** `[[gerd]]` Hill/AFS grade criteria; `[[esophageal-cancer]]` Siewert + PD-L1 CPS thresholds (`nccn-2026-esophageal-egj-cancer`); `[[portal-hypertension]]` Sarin GOV/IGV definitions (`aasld-2023-portal-hypertension`); `[[colorectal-cancer]]` TNM 8th-ed stage groups (NCCN/ASGE); `[[fecal-incontinence]]` Wexner/FISI items (`acg-2021-anorectal-disorders`); `[[irritable-bowel-syndrome]]` IBS-SSS 5 items (`acg-2020-ibs`); `[[atrophic-gastritis]]` OLGA/OLGIM 0–3 rule (`aga-2021-atrophic-gastritis`); `[[chronic-pancreatitis]]` Cambridge ductal grades; `[[chronic-hepatitis-b]]` PAGE-B components (`aasld-idsa-2025`).
- **Corpus-blocked (source not ingested — flag only):** `[[acute-cholecystitis]]` Tokyo TG18; `[[acute-pancreatitis]]` CTSI/Balthazar cutoff (Balthazar/Bollen); `[[budd-chiari-syndrome]]` Rotterdam/AUROC components; `[[microscopic-colitis]]` histologic thresholds; `[[toxic-megacolon]]` Ho index; `[[gallbladder-cancer]]`/`[[gastrointestinal-stromal-tumor]]` NCCN-licensed AJCC/AFIP tables; HHT Curaçao criteria.
- **Style deferral:** schemas `[[dysphagia]]`, `[[jaundice]]`, `[[nausea-and-vomiting]]` still carry empty `sources: []` and lack a `## Sources` section (navigation syntheses that defer criteria to home pages) — not fabricated; deferred to a deliberate hygiene pass.

**Missing pages noticed (reported, not created — insufficient text-extractable source or out of scope):** meds `terlipressin` (recurs plain-text in `[[albumin]]`/`[[somatostatin-analogs]]`), mesalamine/5-ASA, IBD biologics (infliximab/adalimumab/vedolizumab/ustekinumab/JAK/S1P), C. diff antimicrobials (vancomycin/fidaxomicin/metronidazole/bezlotoxumab), n-acetylcysteine, neostigmine; diseases `zollinger-ellison-syndrome`, `gastric-malt-lymphoma`, `pernicious-anemia`, `autoimmune-pancreatitis`, `acute-cholangitis`, `solitary-rectal-ulcer-syndrome`.

**Uningested raw remaining:** only tier-3 lecture/chalk-talk transcripts (60 files, gated).

---

## [2026-08-01] merge | Reconciled two parallel Baveno VII ingests (laptop + server lint pass) — deeper statement capture folded into the lint-pass tree

**Why:** the same Baveno VII ingest ran twice — once in a laptop session whose commit never reached origin (Nextcloud syncs vault files but not `.git`), once in the 05:00 server lint pass, which pushed. Both trees were valid; the laptop's captured statements at greater depth, the server's added the figure embed, `[[liver-stiffness-measurement]]`, and a repo-wide link sweep. Three-way merged against the common ancestor rather than discarding either.

**Resolved toward the deeper capture:**
- `[[baveno-vii-2022-portal-hypertension]]` — source page rebuilt on the fuller body: **all ~200 GRADE-rated statements verbatim** across the 9 topics (25 KB → 68 KB), with the lint pass's frontmatter/tags and its `### Table 1` (standardised PVT/cavernoma nomenclature) grafted in, plus a `## Contents` TOC.
- `[[portal-hypertension]]` — union of both: keeps the lint pass's Fig. 1 rule-of-5 embed, SSM cut-offs (21/40/50 kPa) and recompensation block; restores the laptop tree's **"Does this patient need a screening EGD?" decision block + Mermaid** and the expanded Diagnostics section. `[[liver-stiffness-measurement]]` added to See Also.
- `[[cirrhosis]]` — restored the full **`### Recompensation (Baveno VII)`** section (3 required criteria C.2/7.23, the "not recompensation" corollary B.1/7.25, do-not-stop-NSBBs B.1/7.24) and the Baveno VII stage-definitions table, in place of the one-paragraph pointer.
- `[[portal-vein-thrombosis]]`, `[[variceal-upper-gi-bleeding]]`, `[[budd-chiari-syndrome]]`, `[[rifaximin]]`, `[[noninvasive-liver-disease-assessment]]` — laptop-tree detail folded in (non-cirrhotic PVT management block, AVB adjuncts, BCS anticoagulation incl. the avoid-UFH statement 8.20, rifaximin's not-indicated-beyond boundary 4.10, the Baveno-vs-AASLD non-interchangeability note).

**Resolved toward the lint pass:** frontmatter dates/tags, `sources:` ordering, source-list numbering, and See Also additions (`[[tips]]` on BCS).

**Hygiene:** no new pages, so `index.md` needs no change (stays 246 sources / 128 disease scripts). Link check over all wiki pages: **0 broken links.**

---

## [2026-08-01] lint | Ingested EASL Baveno VII 2022 (portal hypertension consensus) — sole uningested guideline; new PSVD disease script + LSM concept; embedded rule-of-5 figure; parallel per-folder link sweep; index reconciled (246 sources); 0 broken links

**Source ingested (1 — the only genuinely uningested guideline/RCT in `raw/`; all others verified ingested or duplicate uploads; lectures remain gated):**
- `[[baveno-vii-2022-portal-hypertension]]` — Baveno VII consensus (de Franchis, Bosch, Garcia-Tsao, Reiberger, Ripoll; *J Hepatol* 2022;76:959–974; DOI 10.1016/j.jhep.2021.12.022). EASL-endorsed, 9 topics, GRADE-graded. Source page captures all decision-critical statements near-verbatim with grades + change-status: CSPH = HVPG ≥10 mmHg; LSM "rule of 5" (10-15-20-25 kPa); LSM <15+plt >150 rules out CSPH / ≥25 rules in; Baveno VI criteria (LSM <20+plt >150) rule out high-risk varices; SSM <21/>50 cutoffs; carvedilol preferred for CSPH (obviates screening endoscopy); pre-emptive TIPS (CP-C <14 / CP-B >7 active bleed / HVPG >20); recompensation criteria; PSVD framework (Table 2); splanchnic-vein-thrombosis (BCS-TIPS PI >7, PVT nomenclature Table 1).

**Figure captured (from prior inbox-synced crop — orphan PNG committed this pass):**
- `raw/assets/portal-hypertension-2022-baveno7-cacld-csph-algorithm-05.png` (Fig. 1, rule-of-5 cACLD/CSPH algorithm) embedded on `[[portal-hypertension]]`.

**Pages created (2):**
- `[[porto-sinusoidal-vascular-disorder]]` — NEW disease script (ADDT); filled a real gap (PSVD referenced in DDx across hepatology pages, no page existed). Baveno VII 3-criteria definition + Table 2 (specific/nonspecific PH features + PSVD histology), suspicion triggers (HVPG <10, LSM <10), adequate-biopsy ≥20 mm requirement, PVT coexistence, varices-screening caveat (Baveno VI criteria do NOT apply).
- `[[liver-stiffness-measurement]]` — NEW concept page (VCTE/pSWE/2D-SWE/MRE modalities, TE cutoff anchors, 12-mo monitoring, confounders); resolves recurring plain-text "liver stiffness measurement" mentions; clinical algorithm kept single-home on `[[portal-hypertension]]`.

**Entity pages updated (decision-critical Baveno content; AASLD 2023 still governs `[[portal-hypertension]]` overlaps — newer guideline):**
- `[[portal-hypertension]]` — embedded rule-of-5 figure; added SSM rule-in/out (<21/>50) + SSM <40 to avoid endoscopy; HVPG ≥16 mmHg non-hepatic-surgery mortality threshold; recompensation criteria (7.22–7.24); PSVD in DDx; Baveno source added.
- `[[budd-chiari-syndrome]]` — BCS-TIPS prognostic index >7 → LT before TIPS (partially fills prior AUROC/Rotterdam decision-gap flag; component point values still absent); primary vs secondary definition; long-term AC for all primary BCS + avoid UFH (HIT); ALF → urgent LT + emergency TIPS. Source added.
- `[[portal-vein-thrombosis]]` — Baveno VII standardized PVT/cavernoma nomenclature (concordant with newer AGA 2025) + PSVD-coexistence in DDx. Source added.
- `[[cirrhosis]]` — recompensation pointer (detail single-homed on portal-hypertension). Source added.

**Parallel lint sweep (fan-out subagents over non-hepatology folders; ~30 inline links added):**
- Foregut+colorectal batch: `barretts-esophagus`→infectious-esophagitis; `toxic-megacolon`→loperamide/fmt; `fecal-incontinence`→ostomy-management; `peutz-jeghers-syndrome`→colorectal-cancer.
- Meds/concepts/schemas/procedures batch: 26 links across 21 pages (most-common gap: EGJOO plain-text on motility pages; also PCAB→vonoprazan, extraesophageal-reflux→PPI/reflux-testing/barretts, several schema→cirrhosis links).
- Stalest-page validation (3 oldest): `rotavirus` + `bmmrd-syndrome` decision-sufficient/format-clean (no edits); **`cowden-syndrome` — fixed a source-fidelity error**: breast surveillance ages were mis-transcribed from the CDH1/HDGC row → corrected to ACG 2015 Table 10 Cowden values (self-exam monthly from 25; mammography + MRI annual from 30–35); `updated:` bumped.

**Hygiene / reconciliation:**
- Index footer reconciled: **246 sources | 128 disease scripts | 22 diagnostic schemas | 4 general procedures | 24 advanced procedures | 27 meds | 46 concepts | 1 synthesis** (as of 2026-08-01); frontmatter date bumped. Broken-link scan on all touched pages = **0 broken links**.
- Ingest-backlog reconciled: the raw `AGA/` folder (113 files vs 76 aga- sources) is **duplicate uploads + terse-named copies**, not a backlog — every candidate verified ingested (hEDS→aga-2025-heds-gi, 2021 CD→aga-2021-crohns-pharm, 2024 FMT→aga-2024-fmt, 2024 IDA→aga-2024-ida-management, extraesoph GERD→aga-2023-extraesophageal-gerd, PCAB/CHS/CVS/EPI/GLP1/PVT all ingested).

**Decision gaps flagged for triage (NOT fixed — criteria absent from ingested sources; source-fidelity):**
- **LA (Los Angeles) esophagitis grade A–D** criteria still have no home page (needed by `[[gerd]]`, `[[proton-pump-inhibitors]]`, `[[vonoprazan]]`, `[[potassium-competitive-acid-blockers]]`, `[[ambulatory-reflux-monitoring]]`, `[[antireflux-surgery]]`) — needs original Lundell 1999 / LA-classification source.
- BCS-TIPS PI / Rotterdam BCS index component point values (`[[budd-chiari-syndrome]]`); PAGE-B/REAL-B components (`[[hcc-surveillance]]`/`[[li-rads]]`); Rockall point values + Glasgow-Blatchford (`[[upper-gi-bleeding]]`/`[[upper-endoscopy]]`); Wexner/FISI (`[[fecal-incontinence]]`); IBS-SSS 5 items (`[[irritable-bowel-syndrome]]`); OLGA/OLGIM staging matrix (`[[atrophic-gastritis]]`/`[[gastric-intestinal-metaplasia]]`); CHADS₂/CHA₂DS₂-VASc components (`[[anticoagulation-gi-bleeding]]`); NRS-2002/NUTRIC; Milan criteria components (`[[tacrolimus]]`/`[[calcineurin-inhibitors]]`); TNM/Siewert (`[[esophageal-cancer]]`, licensing); IDEA/high-risk stage II criteria (`[[colorectal-cancer]]`, source ingested — fixable next pass).
- Empty `sources: []` frontmatter on schemas `[[dysphagia]]`, `[[jaundice]]`, `[[nausea-and-vomiting]]`; `[[dysphagia]]` lacks a `## Sources` section — future hygiene pass.

**Missing entity pages noticed (insufficient ingested source or deferred):** GAVE/gastric antral vascular ectasia, Hirschsprung disease, short bowel syndrome, individual IBD biologics/antibiotics (infliximab, vedolizumab, vancomycin, fidaxomicin, cyclosporine, etc.), amitriptyline/TCAs, metoclopramide, ondansetron, zollinger-ellison-syndrome, gastric-outlet-obstruction. Reported, not created.

**Uningested raw remaining:** only tier-3 lecture/chalk-talk transcripts (60 files, gated — never auto-ingested; awaiting user selection). All guidelines/CPUs/RCTs in `raw/` are now ingested.

---

## [2026-07-31] lint | Expanded toxic-megacolon stub → full disease script (ACG 2025 UC + ACG 2021 C. difficile)

**Page expanded:**
- `[[toxic-megacolon]]` — full ADDT disease script built strictly from `[[acg-2025-uc]]` and `[[acg-2021-cdiff]]`. Captured: radiographic dilation predictor (transverse colon >5.5 cm on plain film), severe-colitis film features, ASUC systemic-toxicity definition (≥6 BM/day + tachycardia/fever/Hgb <10.5/ESR >30), CDI severity ladder (severe = WBC ≥15k or Cr >1.5; fulminant = severe + hypotension/ileus/megacolon — toxic megacolon = the megacolon limb), colectomy-predictor indices (Oxford/Travis, Ho, UCEIS ≥7), diagnostics (flex-sig within 24–72 h, avoid full colonoscopy, CT only for perforation/extraluminal), and cause-split therapeutics (ASUC IVCS→day-3 rescue infliximab/cyclosporine; fulminant CDI vanc 500 mg PO q6h ± IV metronidazole ± vanc enema, FMT after 48–72 h; surgical indications + procedure choice). Added escalation Mermaid.

**Decision gap flagged (needs a dedicated source — NOT filled from memory):**
- No ingested source states a formal consensus/Jalan diagnostic-criteria set for toxic megacolon (colonic dilation ≥6 cm + defined toxicity criteria). The classic ≥6 cm cut-point was deliberately omitted; the sourced >5.5 cm figure is a poor-outcome predictor in severe colitis, not an explicit TM definition.

**Cross-batch links wanted but pages absent (not created — no stubs per task):** `colectomy`, `acute-severe-ulcerative-colitis`, `cytomegalovirus-colitis`/`cmv-colitis`, `infliximab`, `cyclosporine`, `fecal-microbiota-transplantation`, `vancomycin`, `fidaxomicin`. ASUC/colectomy mentions currently alias-linked to `[[ulcerative-colitis]]`.

**Hygiene:**
- `index.md` toxic-megacolon entry updated (stub → 2 sources; description now carries the >5.5 cm threshold).

---

## [2026-07-30] lint | Ingested AGA 2023 AI-in-Colon-Polyp CPU + Colán-Hernández 2020 EUS-FNA-cyst antibiotic RCT; new AI-in-endoscopy concept page; ESD stub expanded; parallel per-folder link/decision-gap sweep; index reconciled (245 sources); 0 broken links

**Sources ingested (2 — CPU + RCT, per ingestion priority; no lectures auto-ingested; these were the only 2 uningested source files in `raw/`):**
- `[[aga-2023-ai-colon-polyp]]` — AGA 2023 CPU Commentary (Samarasena, Yang, Berzin; *Gastroenterology* 2023;165:1568–1573; DOI 10.1053/j.gastro.2023.07.010). Expert-commentary CPU (no numbered BPA statements) — full key claims captured: CADe (ADR RR 1.43 meta-analysis vs inconsistent pragmatic/UK-RCT data; Shaukat APC 0.83→1.05), CADx + ASGE PIVI thresholds (≥90% NPV rectosigmoid HP <5 mm; >90% surveillance-interval agreement), computer-aided quality assessment, adoption barriers.
- `[[colan-hernandez-2020-eus-fna-panc-cyst-antibiotics]]` — RCT (*Gastroenterology* 2020;158:1642–1649; DOI 10.1053/j.gastro.2020.01.025; NCT02261896). First RCT of antibiotic prophylaxis for EUS-FNA of pancreatic cysts: n=226, ciprofloxacin vs placebo, infection 0.44% (only case in placebo arm), non-inferior without prophylaxis; no difference in fever/AEs.

**Pages created (2):**
- `[[artificial-intelligence-endoscopy]]` — new concept page (CADe/CADx/computer-aided quality assessment); single home integrating the 2023 CPU with the existing `[[aga-2025-cade-colonoscopy]]` living guideline (newer guideline's "no recommendation for/against CADe" governs; CPU is home for CADx/quality content).
- 2 source pages above.

**Stub expanded (1, from already-ingested source):**
- `[[endoscopic-submucosal-dissection]]` — stub → full advanced-procedure page from `[[asge-2023-esd]]`: ESD-vs-EMR-vs-surgery lesion/size thresholds (ESCC >15 mm, EAC >20 mm, GAC 20–30 mm intestinal-type), curative-R0 criteria, M1–SM3 depth, gastric absolute/expanded criteria, outcomes (clinical success 93.3% vs 72.1%; recurrence 0.5% vs 5.2%) and AEs (perforation 5.7% vs 0.8%).

**Pages updated (entity, by main agent):**
- `[[colonoscopy]]` — added AI/CADe·CADx subsection + source; `[[pancreatic-cysts]]`, `[[endoscopic-ultrasound]]`, `[[antibiotic-prophylaxis-endoscopy]]` — added the EUS-FNA-cyst antibiotic RCT with the ASGE-2015-vs-RCT contradiction surfaced (guideline still "suggests"; RCT shows not needed; duplication/mediastinal cysts excluded → still cover).

**Parallel lint sweep (5 folder batches via subagents; shared writes consolidated centrally):** inline `[[links]]` densified on first-mention across all folders (e.g. gerd→PPI, hepatitis-c-in-pregnancy→ICP/AFLP, colorectal-cancer→eFTR, acute-pancreatitis→acute-cholecystitis, HCC→RFA, vonoprazan→NERD/PUD); See-Also enrichment; format fixes (removed duplicate Sources entry on `[[hypercontractile-esophagus]]`; added missing `---` rule before See Also on `[[small-bowel-bleeding]]`, `[[upper-gi-bleeding]]`).

**Hygiene:** whole-wiki broken-link scan = **0 broken links** (table-escaped `\|` and log-only example tokens excluded); index counts reconciled to on-disk (245 sources, 45 concepts).

**Decision gaps flagged for triage (NOT fixed — criteria absent from ingested sources; source-fidelity — do not fill from memory):**
- `[[gerd]]` — **LA (Los Angeles) grade, Hill grade, AFS grade** defining criteria (mucosal-break sizes / flap-valve appearance) are used for major decisions but the numeric definitions are NOT in `acg-2021-gerd` or `lyon-2024` (verified by text search). Needs the original LA-classification (Lundell 1999) / Hill / AFS sources.
- `[[budd-chiari-syndrome]]` — AUROC / Rotterdam BCS index components not on page (source `acg-2020-hepatic-mesenteric-circulation`).
- `[[colorectal-cancer]]` TNM 8th-ed stage groups, `[[cholangiocarcinoma]]`/`[[gallbladder-cancer]]` TNM, `[[gastrointestinal-stromal-tumor]]` NIH/AFIP risk table — blocked by NCCN/AJCC licensing.
- `[[acute-cholecystitis]]` Tokyo TG18 dx/severity criteria (source not ingested); `[[pouchitis]]` PDAI/mPDAI components; `[[fecal-incontinence]]` Wexner/FISI; `[[upper-gi-bleeding]]` Rockall point values; `[[portal-hypertension]]` Sarin GOV classification; `[[hypermobile-ehlers-danlos-syndrome]]` Beighton cutoffs.

**Stub-expansion candidates for future passes (need not-yet-ingested sources or a later pass):** `[[proton-pump-inhibitors]]` (expandable from acg-2021-gerd/acg-2024-hp-treatment; also lacks a `## Sources` section), `[[toxic-megacolon]]` (from acg-2021-cdiff/acg-2025-uc), `[[argon-plasma-coagulation]]`, `[[heller-myotomy]]`, `[[bariatric-surgery]]` (needs dedicated source), high-value med stubs (IBD biologics, metronidazole/vancomycin/fidaxomicin, neostigmine).

**Uningested raw remaining:** only tier-3 lecture/chalk-talk transcripts (gated — never auto-ingested; awaiting user selection). All guidelines/CPUs/RCTs in `raw/` are now ingested.

**Citation inconsistencies flagged (not auto-changed):** `[[alcohol-associated-liver-disease]]` cites `acg-2019-hereditary-hemochromatosis` inline but not in its Sources; `[[sphincter-of-oddi-dysfunction]]`/`[[acute-pancreatitis]]` cite `asge-2023-post-ercp-pancreatitis` inline as see-also pointers not in Sources.

---

## [2026-07-29] lint | Ingested 2 AGA CPUs (Recurrent AP/CP Endoscopy 2022 + Advances in POEM 2024); 5 new pages; parallel per-folder link/decision-gap sweep; index reconciled (243 sources); 0 broken links

**Sources ingested (2 — guideline/CPU tier, per ingestion priority; no lectures auto-ingested):**
- `[[aga-2022-recurrent-pancreatitis-endoscopy]]` — AGA 2022 CPU (Strand, Law, Yang, Elmunzer; *Gastroenterology* 2022;163:1107–1114; DOI 10.1053/j.gastro.2022.07.079). All **8 Best Practice Advice statements** captured verbatim (EUS-first eval of unexplained (R)AP; minor-papilla endotherapy in pancreas divisum only with objective outflow obstruction; ERCP controversy in standard anatomy; CP MPD stone ≤5 mm vs ESWL, stricture 6–12 mo plastic upsizing/FCSEMS caveat; surgery > endoscopy for painful obstructive CP per ESCAPE 58% vs 39%; FCSEMS for CP biliary strictures; EUS-CPB not routine).
- `[[aga-2024-poem-advances]]` — AGA 2024 CPU (Yang, Bechara, Dunst, Konda; *Gastroenterology* 2024;167:1483–1490; DOI 10.1053/j.gastro.2024.08.038). All **12 Best Practice Advice statements** captured near-verbatim (preprocedure workup; achalasia subtype selection, Type III preferred; EGJOO/spastic disorders case-by-case only; single-dose antibiotics; anterior=posterior tunnel; myotomy tailoring/blown-out-myotomy; same-day discharge; post-POEM reflux management ladder + surveillance; failed-myotomy POEM 62% vs PD 27%).

**Pages created (5):**
- `[[pancreas-divisum]]` — new disease script (ADDT; minor-papilla endotherapy indications, PEP/stenosis risk).
- `[[recurrent-acute-pancreatitis]]` — new diagnostic schema (≥2 AP episodes ≥3 mo apart; EUS-first algorithm; occult-malignancy red flags).
- `[[esophagogastric-junction-outflow-obstruction]]` — new disease script (Chicago v4.0 criteria, mimics, less-invasive-first ladder); resolves a previously dangling `[[link]]`.
- `[[poem]]` — expanded stub → full advanced-procedure page (workup, indications, technique, post-op care, post-POEM reflux, surveillance, adverse events, failed myotomy).
- 2 source pages above.

**Pages updated (decision-critical content):**
- `[[acute-pancreatitis]]`, `[[chronic-pancreatitis]]`, `[[ercp]]`, `[[endoscopic-ultrasound]]` — EUS-first eval, CP endotherapy thresholds/stent durations, EUS-CPB caveat.
- `[[achalasia]]`, `[[distal-esophageal-spasm]]`, `[[hypercontractile-esophagus]]` — post-POEM reflux figures + surveillance, failed-myotomy RCT, spastic-disorder POEM caveat.

**Parallel lint sweep (6 batch subagents: hepatology, colorectal ×7 subfolders, meds/concepts/schemas; + 3 stalest-page validation):**
- Inline-link/cross-reference densification applied across ~15 pages (hemorrhoids, clostridioides-difficile, ulcerative-colitis, diverticulitis, SCAD, acute-mesenteric-ischemia, angioectasia, FAP, JPS, PJS, fmt, glp-2-agonists, acute-lower-gi-bleeding, nausea-and-vomiting, small-bowel-bleeding, ambulatory-reflux-monitoring, disorders-of-gut-brain-interaction, ibd-endoscopic-scoring, endoscopy-ergonomics, nutrition-in-hospitalized-patients, nutrition-in-ibd) + reciprocal cross-batch links.
- Stalest pages validated (`[[proctalgia-syndromes]]`, `[[cryptosporidiosis]]`, `[[giardiasis]]`) — decision-sufficient & format-compliant vs ingested sources; no edits.
- Hepatology (33 pages) & polyposis/hereditary already compliant — minimal edits.

**Hygiene:** 0 real broken links (whole-wiki scan), no `.DS_Store`/OS artifacts, no untracked `raw/` files (corpus gitignored). Footer counts reconciled to on-disk: 243 sources | 127 disease scripts | 22 diagnostic schemas.

**Flagged for user triage (decision gaps needing a NOT-yet-ingested source — not filled from memory):**
- **UC UCEIS ≥7 threshold** on `[[ulcerative-colitis]]` may conflict with `[[ibd-endoscopic-scoring]]` (AGA 2024 states UCEIS severity bands undefined) — verify provenance against `acg-2025-uc`.
- **Post-myotomy esophageal-cancer risk magnitude:** AGA 2024 HR 4.6 (all esophageal ca) vs ACG 2020 ~28× (SCC-specific) — both retained on `[[achalasia]]`/`[[poem]]`; different cohorts/endpoints.
- `[[pouchitis]]` PDAI/mPDAI component criteria absent (source: aga-2024-pouchitis, ingested — candidate for a future targeted pass).
- LA-grade criteria have no home page (needed by `[[potassium-competitive-acid-blockers]]`/`[[vonoprazan]]`); Rockall point breakdown (`[[upper-gi-bleeding]]`); PAGE-B/REAL-B/GALAD components (`[[hcc-surveillance]]`/`[[li-rads]]`); HHT Curaçao criteria; arterial-AMI & visceral-artery-aneurysm management — all need dedicated sources.
- **Expandable stubs (already-ingested sources):** `[[toxic-megacolon]]` (acg-2025-uc + acg-2021-cdiff), `proton-pump-inhibitors`, `brca-pathogenic-variants` — deferred to a stub-expansion pass (per-pass cap).
- **Missing entity pages noticed (insufficient ingested source to write):** solitary-rectal-ulcer-syndrome, sinusoidal-obstruction-syndrome, Dieulafoy lesion, GAVE, portal hypertensive gastropathy, Mallory-Weiss tear, Zenker's diverticulum.
- Pre-existing mis-alias: "Shiga-toxin E. coli" → `[[enterotoxigenic-e-coli]]` (STEC≠ETEC) on campylobacter/salmonella/shigellosis pages — future fix.
- No anorectal-pain diagnostic schema exists for the `[[proctalgia-syndromes]]` DDx pointer.

**Figures not captured:** pymupdf/fitz still not installed → could not crop AGA-2022 Fig 1 or AGA-2024 Figs 1–3; all decision-critical content captured as text, so no decision gap (illustrative visuals only).

---

## [2026-07-28] lint | Ingested 2 AGA 2024 CPUs (Tailored Polypectomy + Esophageal Dysfunction from Immunity/Infection); 3 new esophageal pages; ~53 inline links added via parallel subagents; 3 stalest pages validated; index reconciled (241 sources); 0 broken links/orphans

**Sources ingested (2 — guideline/CPU tier, per ingestion priority; no lectures auto-ingested):**
- `[[aga-2024-tailored-polypectomy]]` — AGA 2024 CPU (Expert Review): Appropriate and Tailored Polypectomy (Copland, Kahi, Ko, Ginsberg; *CGH* 2024;22:470–479). All **12 Best Practice Advice statements verbatim** + optical-diagnosis Table 1 (Paris/NICE/WASP/Kudo/JNET) and technique-selection thresholds (CSP <10 mm; large-capacity CFP noninferior for 3 mm; intermediate 10–19 mm cold-vs-hot RCT data; clips only ≥20 mm proximal, OR 0.62).
- `[[aga-2024-esophageal-immunity-infection]]` — AGA 2024 CPU (Expert Review): Esophageal Dysfunction Due to Disordered Immunity and Infection (Reddy, McGowan, Yadlapati, Peterson; *CGH* 2024;22:2378–2387). All **10 Best Practice Advice statements verbatim** + infectious-esophagitis dx/treatment doses, LyE, HES/EGPA (AEC >1500), connective-tissue/dermatologic esophageal disease, secondary achalasia.

**Pages created (3):**
- `[[infectious-esophagitis]]` (1-disease-scripts/esophageal, ADDT) — Candida (fluconazole 200–400 mg × 14–21 d), HSV (acyclovir/valacyclovir/famciclovir 10–21 d), CMV (ganciclovir up to 6 wk); endoscopic appearance + biopsy/brushing dx; immunocompromise + refractory-symptom pathways.
- `[[lymphocytic-esophagitis]]` (1-disease-scripts/esophageal, ADDT) — peripapillary lymphocytosis histology, women >60, dx of exclusion (biopsy off PPI ≥2–4 wk, r/o EoE/Crohn's); PPI/topical steroids/dilation.
- `[[esophageal-dysfunction-systemic-disease]]` (7-concepts) — home for the systemic/immune content: HES/EGPA, connective-tissue disease (SSc/MCTD/SLE/Sjögren/myositis) esophageal involvement, esophageal Crohn's, dermatologic (ELP/pemphigus + DIF), and the secondary-achalasia framework.

**Pages updated (ingest wiring):**
- `[[polypectomy]]` — new "Tailored Technique Selection (AGA 2024)" subsection: scenario→technique table + intermediate-size RCT data + prophylactic-clip rule; cross-references existing optical-diagnosis/post-resection sections (no duplication). Source added.
- `[[eosinophilic-esophagitis]]` — BPA 4: persistent symptoms despite histologic+endoscopic remission → evaluate for subtle stricture/motility disorder; EoE→achalasia risk. Source added; See Also wired to 3 new pages.
- `[[achalasia]]` — BPA 10: secondary/mimic achalasia (COVID/Chagas/eosinophilic/mast-cell; autoimmune hypothesis) added to DDx; source + See Also wired.
- `[[dysphagia]]` (schema) — DDx expanded with an immune-mediated/systemic category (LyE, connective-tissue disease, esophageal Crohn's, HES/EGPA, ELP/pemphigus) + infectious-esophagitis inline link.

**Parallel lint (4 subagents over disjoint folder batches; ~53 inline links added, no shared-file writes):**
- Disease-scripts batch: 25 inline links across 13 pages; hygiene — removed stray literal `</content>`/`</invoke>` tags left on `[[hepatitis-c-in-pregnancy]]` by a prior bad write.
- Schemas/meds batch: 12 inline links (APC/FMT/tegaserod/acute-pancreatitis/etc.); no decision gaps.
- Procedures/concepts batch: 16 inline links (gastric-cancer-screening polyposis syndromes, HCC-surveillance, APC, etc.).
- Stalest-page validation (3 oldest entity pages, `updated: 2026-07-16`): `[[chronic-idiopathic-constipation]]`, `[[defecation-disorders]]`, `[[fecal-incontinence]]` — all decision-complete against ingested sources; `updated:` bumped to 2026-07-28.

**Hygiene / reconciliation:**
- `index.md` — 2 AGA source entries, 2 esophageal disease scripts, 1 concept; EoE/achalasia descriptions + source counts refreshed; totals → **241 sources | 125 disease scripts | 21 diagnostic schemas | 4 general procedures | 24 advanced procedures | 27 meds | 44 concepts | 1 synthesis** (as of 2026-07-28); frontmatter date bumped.
- Whole-wiki scan (escaped-pipe/embed-aware): **0 broken links, 0 orphans, 0 duplicate basenames**.
- Git: no untracked files under `raw/` (raw PDFs are gitignored; inbox sync added ACG-2026-Diverticulitis/APA-2014/AGA-2022-recurrent-pancreatitis PDFs since last pass but nothing new to commit — assets unchanged).

**Flagged for user / future passes (not fixed — no outside info used):**
- **Remaining uningested non-lecture backlog (3, guideline/CPU + RCT tier):** AGA 2024 CPU *Advances in POEM*, AGA 2023 CPU *AI in Colon Polyp Diagnosis & Management*, and the RCT *Antibiotic Prophylaxis for EUS-FNA of Pancreatic Cysts*. Reported, not ingested (2-file cap).
- **Decision gaps needing a not-yet-ingested scoring source:** Bristol Stool Scale (no page), Wexner/FISI fecal-incontinence scoring, NUTRIC/NRS-2002 and GLIM/PG-SGA nutrition scores, LA-grade/Hill-grade/Forrest home pages, Child-Pugh/MELD component tables (TIPS/antireflux pages reference them without a host page), PAGE-B components. Reported by subagents; fill when the primary scoring papers are ingested.
- **Cross-batch connections for next pass:** `[[g-poem]]`→`[[gastroparesis]]` backlink; `[[alosetron]]`/`[[tegaserod]]`←`[[colon-ischemia]]` inbound.
- **Dedup question:** `[[ampullary-adenoma]]` and `[[nonampullary-duodenal-adenoma]]` overlap on nonampullary content — scope decision for a maintainer.
- **Stub expandable next pass:** `[[small-bowel-motility]]` from ingested `[[acg-2020-sibo]]`; `[[toxic-megacolon]]` from `[[acg-2021-cdiff]]`/`[[acg-2025-uc]]`.
- Lecture/chalk-talk transcripts remain **gated** — 60 available, not auto-ingested; awaiting user selection by name.

---

## [2026-07-26] update | Visual expansion of polypectomy-emr: 11 source figures embedded; new Style Guide rule for endoscopic classifications

**Page updated:**
- `[[polypectomy]]` — 11 figures captured at 300 dpi from already-ingested PDFs and embedded with captions: Paris classification (schematic + endoscopic examples), LST-G vs LST-NG, NICE types 1–3 with NBI images, SSL-like features (WASP), non-lifting sign, colorectal lesion management algorithm, cancer depth/AJCC T staging, Kudo pit pattern I–VN, malignant polyp algorithm, Haggitt levels, Kikuchi SM1–3.

**Assets added:** `raw/assets/polypectomy-2020-*.png` (6, from [[usmstf-2020-endoscopic-removal]]), `raw/assets/malignant-polyp-2020-*.png` (5, from [[usmstf-2020-malignant-colorectal-polyps]]).

**Schema change:** CLAUDE.md Style Guide → Images gained a required rule — endoscopic diagnoses and visual classification/grading systems must embed the source's diagrams and example images, not just the criteria table (Nick, 2026-07-26).

---

## [2026-07-26] lint | Ingested 2 AGA 2024 CPUs (IBD-in-Malignancy + Pregnancy-Related GI & Liver); new ibd-in-malignancy concept + ICP/AFLP/NVP-of-pregnancy disease scripts; stalest ACPO/volvulus decision-gaps fixed; index reconciled (238 sources); 0 broken links

**Sources ingested (2 — guideline/CPU tier, per ingestion priority; the only uningested non-lecture backlog is 6 AGA CPUs — see below; no lectures auto-ingested):**
- `[[aga-2024-ibd-malignancy]]` — AGA 2024 CPU Commentary: Management of IBD in Patients With Malignancy (Axelrad, Hashash, Itzkowitz; *CGH* 2024;22:1365–1372). Commentary → no numbered BPA; **Table 1 recreated verbatim** (drug-class action per cancer type) plus quantified cancer-risk data (inflammation-driven and drug-driven) and prior-cancer registry reassurance (CESAME/ENEIDA/NYCCO/SAPPHIRE).
- `[[aga-2024-pregnancy-gi-liver]]` — AGA 2024 CPU Expert Review: Pregnancy-Related GI and Liver Disease (*Gastroenterology* 2024; DOI 10.1053/j.gastro.2024.06.014). **All 13 Best Practice Advice statements verbatim**; Table 2 (fetal-radiation measures) + Table 3 (ICP/HELLP/AFLP) recreated as Markdown.

**Pages created (4):**
- `[[ibd-in-malignancy]]` (7-concepts) — home for the malignancy CPU: cancer-risk-by-inflammation table, cancer-risk-by-drug table, AGA Table 1 (drug × cancer-type action grid), prior-cancer data, cancer-treatment effects on IBD (chemo/hormone/ICI colitis).
- `[[intrahepatic-cholestasis-of-pregnancy]]` (1-disease-scripts/hepatology, ADDT) — dx serum bile acids >10 μmol/L, UDCA 10–15 mg/kg/d, bile-acid-stratified delivery timing.
- `[[acute-fatty-liver-of-pregnancy]]` (1-disease-scripts/hepatology, ADDT) — Swansea criteria, prompt delivery + LT evaluation, DDx vs HELLP.
- `[[nausea-and-vomiting-of-pregnancy]]` (1-disease-scripts/foregut-and-motility/gastric, ADDT) — PUQE score, pyridoxine (B6) + doxylamine first-line, HG management (no prior NVP/HG disease page existed; `nausea-and-vomiting` is the schema).

**Pages updated (ingest wiring):**
- `[[crohns-disease]]` — expanded Pregnancy block (BPA 7: remission before/through/after pregnancy; continue biologics, stop MTX/thalidomide/ozanimod ≥6 mo preconception; med safety; calprotectin/IUS/unsedated flex-sig monitoring; perianal-CD delivery caveat) + Malignancy-risk block pointer to `[[ibd-in-malignancy]]` (thiopurine/anti-TNF as drugs of concern; prior cancer ≠ withhold therapy). 2 AGA sources added.
- `[[ulcerative-colitis]]` — Malignancy & Pregnancy blocks (UC-weighted: UC exacerbates more than CD in pregnancy). 2 AGA sources added.
- `[[liver-disease-in-pregnancy]]` (schema) — ICP delivery-timing table, pre-eclampsia aspirin prophylaxis, AFLP; 3 new-page cross-links.
- `[[chronic-hepatitis-b]]` (BPA 12 antiviral in 3rd trimester; page keeps newer AASLD 2025 week-28 figure — contradiction surfaced), `[[hepatitis-c-in-pregnancy]]`, `[[ercp]]` (ERCP-in-pregnancy + 9 radiation-minimization measures), `[[choledocholithiasis]]`, `[[acute-cholecystitis]]` (laparoscopic cholecystectomy safe, ideally 2nd tri), `[[acute-pancreatitis]]`, `[[nausea-and-vomiting]]` schema.
- Backlinks to `[[ibd-in-malignancy]]` added from `[[colorectal-cancer]]` and `[[immune-checkpoint-inhibitor-hepatitis]]` See Also.

**Stalest-page validation (Content + Style Guides; 2 pages, oldest `updated: 2026-07-16`; verified against ASGE 2020 ACPO/volvulus PDF):**
- `[[acute-colonic-pseudo-obstruction]]` — decision gaps closed: **surgery indications broadened** (peritonitis/ischemia/perforation/deterioration/**cecal diameter >12 cm**, not just overt perforation) with cecostomy/subtotal-colectomy options + ~44% surgical mortality with ischemic/perforated bowel; added spontaneous-perforation risk (~3–25%, up to ~50% mortality), neostigmine non-response predictor (male sex), endoscopic decompression success ~95% / ~2% perforation / ~40% recurrence without tube; inline CRC link. `updated:` → 2026-07-26.
- `[[colonic-volvulus]]` — added endoscopic detorsion success (~55–94%) + predictors, sharpened sigmoid-volvulus demographics; inline CRC link. `updated:` → 2026-07-26.

**Hygiene / reconciliation:**
- **Broken-link cleanup (8 pre-existing dead links, none from this pass):** created 5 guarded, source-backed stubs so links resolve — `[[alosetron]]`, `[[eluxadoline]]`, `[[tegaserod]]` (5-meds, ACG 2020 IBS), `[[fmt]]` (5-meds, AGA 2024 FMT), `[[toxic-megacolon]]` (1-disease-scripts/inflammation, ACG 2021 CDI + ACG 2025 UC). Unlinked 3 non-GI-entity mentions to plain text (Guillain-Barré, reactive arthritis, HUS) — not encyclopedia entities.
- `index.md` — 2 source entries, 4 disease-script entries (ICP, AFLP, NVP-of-pregnancy, toxic-megacolon), 4 med stubs, 1 concept entry; crohns 9→10 & UC 8→9 source counts; totals → **238 sources | 123 disease scripts | 21 diagnostic schemas | 4 general procedures | 24 advanced procedures | 27 meds | 43 concepts | 1 synthesis** (as of 2026-07-26); frontmatter date bumped.
- Whole-wiki scan after edits: **0 broken links, 0 duplicate basenames**.
- No untracked files under `raw/` (inbox sync had no new arrivals this pass).

**Flagged for user / future passes (not fixed — no outside info used):**
- **Remaining uningested AGA CPU backlog (6, guideline tier):** AI in Colon Polyp Diagnosis & Management (2023), Advances in POEM (2024), Esophageal Dysfunction from Immunity & Infection (2024), Tailored Polypectomy (2024) — plus IBD-in-Malignancy & Pregnancy done this pass. Reported, not ingested (2-file cap).
- **Missing entity pages surfaced by ACPO/volvulus validation:** `neostigmine` (med — ASGE 2020 supports it), `large-bowel-obstruction` (schema), `toxic-megacolon`, `percutaneous-endoscopic-colostomy`, `flexible-sigmoidoscopy` — highest value: a `neostigmine` med page. Left as plain text.
- **Med stubs surfaced by Pregnancy CPU** (ursodeoxycholic-acid, doxylamine, pyridoxine, ondansetron, tenofovir): written as plain text, no stubs created (avoid link-to-nonexistent-page).
- **No ICI-colitis page** (only `[[immune-checkpoint-inhibitor-hepatitis]]`); this CPU covers ICI colitis only tangentially — needs a dedicated AGA ICI colitis/hepatitis source.
- Lecture/chalk-talk transcripts remain **gated** — 60 available, not auto-ingested; awaiting user selection by name.

---

## [2026-07-24] lint | Ingested 2 AGA CPUs (PVT-in-cirrhosis + IDA management); new iron-deficiency-anemia disease script + APC stub; PVT page given AGA-2025 CTP-class AC table; stalest anorectal pages validated; index reconciled (234 sources); 0 broken links

**Sources ingested (2 — guideline/CPU tier, per ingestion priority; all 5 RCTs and both non-lecture backlog RCTs already ingested; no lectures auto-ingested):**
- `[[aga-2025-pvt-cirrhosis]]` — AGA 2025 CPU: Management of Portal Vein Thrombosis in Cirrhosis (Davis, Lim, Francis, Ahn; *Gastroenterology* 2025;168:396–404). All 11 Best Practice Advice statements captured verbatim, plus Table 1 (AC-treatment studies) and Supplementary Table 1 (anticoagulant properties by CTP class). Newest guideline-tier source specific to **cirrhotic** PVT.
- `[[aga-2024-ida-management]]` — AGA 2024 CPU: Management of Iron Deficiency Anemia (DeLoughery, Jackson, Ko, Rockey; *CGH* 2024;22:1575–1583). All 15 Best Practice Advice statements verbatim, plus Table 1 (oral iron preparations) and Table 2 (IV iron preparations); the repletion companion to the already-ingested `[[aga-2020-ida]]` (GI evaluation).

**Pages created (2):**
- `[[iron-deficiency-anemia]]` (1-disease-scripts/other, ADDT) — closes a long-flagged missing-entity gap (dangling `[[iron-deficiency-anemia]]` links already existed on `[[small-bowel-bleeding]]` and `[[capsule-endoscopy]]` — now resolve). Built from both AGA IDA sources: ferritin <45 dx + confirmatory tests, bidirectional-endoscopy workup, oral vs IV iron tables, and a condition-specific repletion table (bariatric/IBD/PHG/GAVE/celiac/small-bowel angioectasias).
- `[[argon-plasma-coagulation]]` (3-general-gi-procedures, **stub**) — APC was referenced as plain text on ≥6 pages with no page; created a minimal sourced stub so links resolve. Flagged for expansion.

**Pages updated (ingest wiring):**
- `[[portal-vein-thrombosis]]` — new AGA-2025 cirrhotic-PVT block: chronicity/occlusion stratification table (recent <6mo >50%/main-PV/mesenteric → AC; ischemia → urgent AC; chronic cavernoma → no AC), timing/monitoring (reimage q3mo, futility at 6mo), and a **CTP-class anticoagulant selection table**. Source added to frontmatter + Sources; contradiction surfaced (AGA/AASLD "AC ASAP" vs EASL deferral / Baveno VII ligation-on-VKA).
- Inline `[[iron-deficiency-anemia]]` links wired on first mention across `[[celiac-disease]]`, `[[helicobacter-pylori-infection]]`, `[[colorectal-cancer]]`, `[[esophageal-cancer]]`, `[[upper-gi-bleeding]]`, `[[acute-lower-gi-bleeding]]`, `[[chronic-diarrhea]]` (7 inline) + See-Also on `[[atrophic-gastritis]]`, `[[angioectasia]]`, `[[iron-overload-and-iron-metabolism]]` (3).

**Stalest-page validation (Content + Style Guides; 2 pages, oldest `updated:`):**
- `[[anal-fissure]]` — decision sufficiency confirmed vs ACG 2021 (chronic def >8–12wk, topical regimens/doses diltiazem 2%/nifedipine 0.2–0.5%/GTN 0.2–0.4%/Botox 5–100u, LIS escalation, GRADE strengths). Fix: Botox indication corrected to "CCB failure **or** alternative to CCB" (ACG Rec 2). `updated:` → 2026-07-24.
- `[[hemorrhoids]]` — grade I–IV table verified verbatim vs ACG 2021; fixes: added **bipolar coagulation** as a grade 1–2 RBL alternative (ACG Rec 3), added inline `[[chronic-idiopathic-constipation|constipation]]` link. `updated:` → 2026-07-24.

**Hygiene / reconciliation:**
- `index.md` — added 2 AGA source entries, `[[iron-deficiency-anemia]]` (Other), `[[argon-plasma-coagulation]]` (General Procedures); refreshed `[[portal-vein-thrombosis]]` description (now 4 sources); totals → **234 sources | 119 disease scripts | 21 diagnostic schemas | 4 general procedures | 24 advanced procedures | 23 meds | 42 concepts | 1 synthesis** (as of 2026-07-24). Frontmatter date bumped.
- Whole-wiki scan (escaped-pipe/embed-aware): **0 broken links, 0 duplicate basenames**.
- Git: no untracked files under `raw/` (inbox sync had no new arrivals this pass).

**Flagged for user / future passes (not fixed — no outside info used):**
- **Missing entity pages surfaced by the IDA CPU:** `gastric-antral-vascular-ectasia` (GAVE) and `portal-hypertensive-gastropathy` (PHG) — both discrete disease entities referenced in-text with no page; the IDA CPU covers them only tangentially. Left as plain text; would benefit from a dedicated source (e.g. a portal-hypertension/GI-bleeding source) before writing.
- `[[argon-plasma-coagulation]]` stub needs expansion from a hemostasis/LGIB source.
- Remaining uningested **AGA CPU backlog (~8):** PVT already done this pass; still uningested — Advances in POEM, Esophageal Dysfunction from Immunity/Infection, IBD in Malignancy, Pregnancy-Related GI & Liver Disease, Tailored Polypectomy, AI in Colon Polyps (2023), CRC Screening & Post-Polypectomy Risk (2023), Noninvasive NAFLD Biomarkers (2023). Reported, not ingested (2-file cap).
- Lecture/chalk-talk transcripts remain **gated** — not auto-ingested; awaiting user selection by name.

---

## [2026-07-23] update | Reconciled a manual daytime lint against the scheduled cron; re-applied 15 net-new pages the cron hadn't ingested

**Context:** two manual daytime lint passes (stub expansion + ingest) diverged from the nightly scheduled cron, which had independently ingested overlapping AGA CPUs — sometimes under different slugs (`aga-2024-cvs` vs `aga-2024-cyclic-vomiting-syndrome`; `nutrition-in-ibd` vs `ibd-diet-and-nutrition`; `abdominal-bloating-and-distention` vs `bloating-and-distention`; `aga-2023-acute-hepatic-porphyria` vs `…-porphyrias`). Per user: **keep the cron's version for all collisions**, and re-apply only the manual work the cron had *not* produced.

**Resolution:** took origin (cron) as the base wholesale; parked the full manual branch locally (`parked-manual-lint-0723`) for reference. Re-applied only self-contained net-new clusters where origin has neither the page nor a topical-synonym slug.

**Pages re-applied (15) + backing sources (11):**
- Disease scripts: [[diverticulitis]] (+ [[acg-2026-diverticulitis]]), [[segmental-colitis-associated-with-diverticulosis]], [[acute-cholecystitis]], [[nonampullary-duodenal-adenoma]] (+ [[aga-2025-nonampullary-duodenal]]), [[sphincter-of-oddi-dysfunction]].
- Procedures: [[enteral-access]] (+ [[aga-2025-endoscopic-enteral-access]]), [[endoscopic-full-thickness-resection]] (+ [[aga-2024-full-thickness-resection]]), [[g-poem]] (+ [[aga-2023-gpoem-gastroparesis]]), [[eus-guided-gallbladder-drainage]] (+ [[aga-2023-eus-gallbladder-drainage]]), [[interventional-eus-vascular]] (+ [[aga-2023-interventional-eus-vascular]]).
- Meds/concepts: [[albumin]], [[gastric-cancer-screening]] (+ [[aga-2025-gastric-cancer-screening]]), [[ibd-endoscopic-scoring]] (+ [[aga-2024-ibd-endoscopic-scoring]]), [[ibd-pain-management]] (+ [[aga-2024-ibd-pain]]), [[ostomy-management]] (+ [[aga-2023-ostomies]]).

**Deliberately NOT re-applied (cron's version kept, per user):** all topical duplicates — `ibd-diet-and-nutrition`/`aga-2024-ibd-diet-nutrition` (cron: `nutrition-in-ibd`), `bloating-and-distention`+`belching-disorders` (cron: `abdominal-bloating-and-distention`), `extraesophageal-reflux`, `cyclic-vomiting-syndrome`, `cannabinoid-hyperemesis-syndrome`, `intestinal-ultrasound`, `potassium-competitive-acid-blockers`, `alpha-gal-syndrome`, `acute-hepatic-porphyria`, `exocrine-pancreatic-insufficiency`, `glp-1-agonists-periprocedural` (cron folded into `endoscopy-sedation`), plus their duplicate source slugs. The manual stub-expansions of pages the cron also expanded (PTLD, preprocedure-testing, poem, etc.) were dropped in favor of the cron's.

**Validation:** whole-wiki scan after re-apply — **0 broken links, 0 duplicate basenames, 0 index gaps** (all 15 new pages' `sources:` resolve). 467 md files (235 pages / 232 sources).

**Process fix:** added a project `SessionStart` hook (`.claude/settings.json`) running `git pull --ff-only` so a manual daytime session always starts from the cron's latest push — preventing the multi-commit backlog that caused this divergence. Guidance for future daytime lints: pull at start, commit+push same session, and prefer a different work-lane than the cron (targeted decision-gap/link/synthesis work) to avoid duplicate-slug ingests.

---

## [2026-07-22] lint | Ingested 2 AGA 2024 CPUs (GLP-1 RAs before endoscopy + Diet/Nutrition in IBD); new nutrition-in-ibd concept + glp-2-agonists stub; wired into sedation/EGD/colonoscopy/semaglutide + Crohn's/UC; stalest ICI-hepatitis validated; index reconciled (219 sources); 0 broken links

**Sources ingested (2 — guideline/CPU tier, per ingestion priority; no lectures auto-ingested):**
- `[[aga-2024-glp1-endoscopy]]` — AGA 2024 Rapid CPU (Communication): GLP-1 Receptor Agonists Prior to Endoscopy (Hashash, Thompson, Wang; CGH 2024;22:705–707). Captured ASA consensus hold guidance (day-of daily / 1 wk weekly) vs the AGA individualized position (standard 8h-solid/2h-liquid fast + no GI symptoms → proceed), solid-vs-liquid emptying thresholds, gastric-US and RSI escalation, and the multisociety "no data to support stopping" statement.
- `[[aga-2024-diet-nutrition-ibd]]` — AGA 2024 CPU (Expert Review): Diet and Nutritional Therapies in IBD (Hashash, Elkins, Lewis, Binion; Gastroenterology 2024;166:521–532). All 12 Best Practice Advice statements captured verbatim, plus Table 1 (diets studied), EEN/CDED protocols, PN indications/thresholds (fistula >500 mL/24 h; ostomy >2000 mL/24 h; <60% goals ×7–10 d; NPO ≥7 d), SBS/GLP-2 weaning, malnutrition criteria, and micronutrient monitoring.

**Pages created:**
- `[[nutrition-in-ibd]]` (7-concepts) — home page for the diet CPU: diet-by-clinical-state table, Mediterranean baseline + diets-studied table, EEN/CDED (Crohn's), PN & short bowel syndrome, malnutrition screening, micronutrient monitoring.
- `[[glp-2-agonists]]` (5-meds, **stub**) — teduglutide-class for SBS/PN weaning; flagged that no ingested source covers agent-level dosing/monitoring (needs a dedicated SBS/intestinal-failure source).

**Pages updated (ingest wiring):**
- `[[endoscopy-sedation]]` — new "GLP-1 Receptor Agonists Before Endoscopy" subsection (ASA vs AGA table) as the home for that guidance; ToC + Sources updated.
- `[[semaglutide]]`, `[[upper-endoscopy]]`, `[[colonoscopy]]` — periprocedural GLP-1 rows/notes current-ized to the AGA 2024 position and linked to the sedation home; source added to each.
- `[[crohns-disease]]` — new "Dietary & Nutritional Therapy" subsection (EEN/CDED induction, preop prehab, malnutrition/micronutrients); Mild-Ileocecal diet cell linked to `[[nutrition-in-ibd]]`.
- `[[ulcerative-colitis]]` — new "Diet & Nutrition (Adjunct)" subsection (Mediterranean, limited EN role, malnutrition screening).

**Stalest-page validation (Content + Style Guides):**
- `[[immune-checkpoint-inhibitor-hepatitis]]` (was stalest entity page, `updated` 2026-07-12) — checked decision sufficiency: CTCAE ALT/AST cutoffs, grade-directed immunosuppression doses, ICI-vs-other-DILI distinguishing features, DDx schema link, See Also/Sources all present and correct. No changes needed; `updated` bumped to 2026-07-22.

**Hygiene / reconciliation:**
- `index.md` — added 2 source entries (AGA), `[[nutrition-in-ibd]]` (Concepts), `[[glp-2-agonists]]` (Meds); refreshed `[[endoscopy-sedation]]` description (now 2 sources); totals → **219 sources | 22 meds | 38 concepts** (as of 2026-07-22).
- Whole-wiki broken-link scan (escaped-pipe/embed-aware): **0 genuinely broken links**.

**Flagged for user / future passes (not fixed — no outside info used):**
- No `iron-deficiency-anemia` entity page exists (only `[[iron-overload-and-iron-metabolism]]`); `[[aga-2020-ida]]` is already ingested and could seed one — deferred (out of this pass's 2-file scope).
- No `g-poem` advanced-procedure page (referenced by gastroparesis pages); the AGA 2023 CPU G-POEM is uningested — kept as plain text, not linked.
- Large uningested AGA CPU backlog remains (~20: e.g. Extraesophageal GERD, G-POEM, Ostomies, EUS-GB drainage, IBD scoring/pain/malignancy, Tailored Polypectomy, Vasoactive+Albumin, Enteral Access, Gastric Cancer Screening, Nonampullary Duodenal, PVT-in-cirrhosis, Advances in POEM, AI/NAFLD-biomarker CPUs). Reported, not ingested (2-file cap).
- 60 lecture/chalk-talk transcripts remain **gated** — not auto-ingested; awaiting user selection by name.

---

## [2026-07-21] lint | Ingested 2 AGA 2024 CPUs (Cyclic Vomiting Syndrome + P-CABs); new P-CAB drug-class + PPI stub; Child-Pugh/MELD/ALBI operative tables added to cirrhosis (top wiki-wide decision gap closed); 14-batch parallel link pass; PTLD stub expanded; index reconciled (217 sources); 0 broken links

**Sources ingested (2 — guideline/CPU tier, per ingestion priority; no lectures auto-ingested):**
- `[[aga-2024-cvs]]` — AGA 2024 CPU (Commentary) on Diagnosis & Management of Cyclic Vomiting Syndrome (Levinthal, Staller, Venkatesan; Gastroenterology 2024;167:804–811). Rome IV Dx criteria, ANMS-CVSA severity strata, 4-phase model, mimic workup, and the full prophylactic/abortive medication table (Table 1) captured.
- `[[aga-2024-pcab]]` — AGA 2024 CPU (Expert Review) on Integrating Potassium-Competitive Acid Blockers Into Clinical Practice (Patel, Laine, Moayyedi, Wu; Gastroenterology 2024;167:1228–1238). All 9 Best Practice Advice statements captured verbatim.

**Pages created:**
- `[[potassium-competitive-acid-blockers]]` — new P-CAB drug-class page (`5-meds/`); mechanism-vs-PPI table + indication-by-indication BPA guidance (GERD/HP/PUD).
- `[[proton-pump-inhibitors]]` — new PPI stub (`5-meds/`); flagged real core gap — many pages reference PPIs with no home page. Expandable from ingested GERD/PUD/HP sources.

**Pages updated (ingest):**
- `[[cyclic-vomiting-syndrome]]` — expanded with dedicated CVS CPU: added Severity Assessment (mild vs moderate–severe drives prophylaxis), CVS-vs-CHS boundary, full workup (no routine gastric emptying scan), prophylactic/abortive medication tables, ED management. Now sourced to `aga-2024-cvs` + `aga-2024-chs`.
- `[[cirrhosis]]` — **added the full Child-Turcotte-Pugh operative point table + class bands, MELD-Na formula, and ALBI grade** (sourced to `[[nccn-2026-hcc]]`). Closes the single most-flagged wiki-wide decision gap: ~10 hepatology/variceal/TIPS/transplant pages name CTP class / MELD thresholds; the score criteria now have a computable home the others defer to.
- `[[gerd]]`, `[[helicobacter-pylori-infection]]`, `[[peptic-ulcer-disease]]`, `[[vonoprazan]]` — folded in the P-CAB CPU positioning (LA A/B vs C/D split; "P-CABs in place of PPIs for HP" BPA 7; PUD BPA 8–9). Frontmatter + `## Sources` updated.

**Stalest-page validation (3 oldest `updated:`):**
- `[[post-transplant-lymphoproliferative-disorder]]` (was 2026-06-09, a stub) — **expanded to full ADDT page** from its ingested source `[[aasld-2012-liver-transplant-long-term]]` (incidence, risk factors, histopath-required Dx, IS-reduction-first treatment ladder). Source lacks WHO histologic subclassification/staging → flagged, not invented.
- `[[preprocedure-testing]]`, `[[norovirus]]` — validated decision-sufficient against their sources; dates bumped only.

**Parallel link + decision-gap pass (14 subagent batches across all wiki folders):**
- Inline `[[links]]` densified wiki-wide (esp. new `[[proton-pump-inhibitors]]` first-mentions across esophageal/gastric/hepatology/meds/schemas); cross-references added (disease↔med↔concept↔schema). All additive; every target verified.
- Whole-wiki broken-link scan: **0 broken links** (2 introduced by PTLD expansion — `immunosuppression`, `rituximab` — de-linked rather than stubbed).

**Decision gaps remaining (for user triage / future passes — NOT invented from memory):**
- **Child-Pugh/MELD now on `[[cirrhosis]]`**, but pages that name it (portal-hypertension, portal-vein-thrombosis, SBP, variceal-UGIB, TIPS, HCC, ACLF, Budd-Chiari, PBC) should be cross-linked to it — partially done; finish next pass.
- **LA grade A–D esophagitis criteria** have no home page (referenced by GERD, Barrett's, ambulatory-reflux-monitoring, P-CAB). Candidate concept page (criteria in ingested GERD/Barrett's sources).
- Named-without-criteria: Rutgeerts score (`crohns-disease`), Truelove-Witts numeric cutoffs (`ulcerative-colitis`), CHADS2/CHA2DS2-VASc components (`anticoagulation-gi-bleeding`), Siewert + PD-L1 CPS (`esophageal-cancer`/`gastric-adenocarcinoma`), TNM/IDEA (`colorectal-cancer`), Rockall (`upper-gi-bleeding`). CTSI ≥7-vs-≥8 conflict (`acute-pancreatitis` vs its source) needs the ACG 2024 PDF to adjudicate.

**Missing-page candidates flagged (not created):** reflux-hypersensitivity, EGJOO, Dieulafoy lesion, GAVE, portal-hypertensive-gastropathy, SRUS, cyclosporine, lactulose, mesalamine, ursodeoxycholic-acid, AIP, PERT, amitriptyline/TCA class, IBD biologics (vedolizumab/ustekinumab/infliximab/upadacitinib).

**Uningested raw remaining (guideline/CPU tier — report only, 2-file/pass cap reached):** ~25 AGA lowercase CPUs still uningested (e.g. extraesophageal GERD, gastric-cancer screening, GLP-1 before endoscopy, portal vein thrombosis, ostomies, IBD-pain, nonampullary duodenal lesions, EUS-guided GB drainage, advances in POEM, g-POEM, NIT in MASLD, vasoconstrictors+albumin in cirrhosis). Lectures/chalk-talks present but **gated — not auto-ingested**; await user selection by name.

---

## [2026-07-20] lint | Ingested 2 AGA CPUs (alpha-gal syndrome + acute hepatic porphyrias → 2 new disease scripts + 2 med stubs); 3 stalest pages validated; index reconciled (215 sources); 0 broken links / 0 orphans wiki-wide

**Sources ingested (2 — guideline/CPU tier, per ingestion priority; no lectures auto-ingested):**
- `[[aga-2023-alpha-gal-syndrome]]` — AGA 2023 CPU Commentary on Alpha-Gal Syndrome for the GI Clinician (McGill et al., CGH 2023;21:891–896). Take-Home Messages captured verbatim.
- `[[aga-2023-acute-hepatic-porphyria]]` — AGA 2023 CPU on Diagnosis & Management of Acute Hepatic Porphyrias (Wang et al., Gastroenterology 2023;164:484–491). All 12 Best Practice Advice statements captured verbatim.

**Pages created (4):**
- `[[alpha-gal-syndrome]]` (`1-disease-scripts/other/`) — ADDT; 3-part diagnosis (symptoms + ↑alpha-gal IgE + ≥1-mo avoidance-diet response; positive IgE alone insufficient, 31–35% asymptomatic seroprevalence); red-flag exclusions; full mammalian-product avoidance list + acceptable foods; acute-exposure management (antihistamine + self-injectable epinephrine); tick/permethrin precautions; cetuximab/gelatin/pancreatic-enzyme/bioprosthetic-valve cross-reactivity; 6–12-mo IgE recheck + quarter-serving self-challenge; cofactors (fat/NSAIDs/exercise/alcohol).
- `[[acute-hepatic-porphyria]]` (`1-disease-scripts/hepatology-diseases/`) — ADDT; 4-type classification table (AIP/HCP/VP/ALAD, gene/inheritance); diagnostic cutoff (random urine ALA+PBG ≥5× ULN, creatinine-normalized) + testing-timing caveats + genetic confirmation; hemin 3–4 mg/kg/day ×~4d + IV carbohydrate ~300 g/day + porphyrinogenic-drug avoidance; givosiran SC monthly for ≥4 attacks/year; HCC surveillance from age 50 (US q6mo), ferritin >1000 → phlebotomy, ALT >3× ULN monitoring on givosiran, annual eGFR. Tables 1–2 recreated as markdown.
- `[[givosiran]]`, `[[hemin]]` — sourced med stubs (`5-meds/`).

**Stalest-page validation (Content + Style Guide):**
- `[[preprocedure-testing]]` — PASS, no changes (all 8 ASGE selective-testing criteria + qualifiers present; links resolve).
- `[[norovirus]]` — PASS, no changes (antimotility qualifier + supportive-only decision fully stated; DDx schema pointer present).
- `[[entamoeba-histolytica-infection]]` — fixed Sources #2 alias (stray colon) to match source-page title; `updated:` bumped.

**Connectivity added:** `[[alpha-gal-syndrome]]` → See Also of `[[irritable-bowel-syndrome]]` and `[[chronic-diarrhea]]` (IgE-mediated mimic); `[[acute-hepatic-porphyria]]` → See Also of `[[hepatocellular-carcinoma]]` (predisposing, non-cirrhotic) and `[[liver-transplantation]]` (metabolic indication).

**Hygiene:** whole-wiki scan — 0 broken wiki links, 0 orphan pages, 0 duplicate basenames. Index `updated:` → 2026-07-20; 2 disease + 2 med + 2 source entries added.

**Reported (not actioned this pass):**
- **Figures uncaptured (pymupdf/fitz still unavailable):** alpha-gal Figs 1–2 (mechanism; dx/mgmt algorithm) and AHP Fig 1 (diagnostic workflow) — decision content is reproduced in text/tables, so no clinical detail lost; screenshot on a future pass when figure tooling returns.
- **Uningested raw remaining (guideline/CPU tier, per-pass cap = 2):** several AGA CPUs still lack pages — `esophageal immunity and infection`, `ibd pain`, `diet and nutrition in ibd`, AGA `portal vein thrombosis` CPU, and others in `raw/GI Guidelines/AGA/`. Next passes continue at 2/pass.
- **Missing med pages named as plain text:** `metronidazole`/`tinidazole`/`paromomycin`/`iodoquinol` (referenced across C. diff/SBP/amebiasis) and `amebic-liver-abscess` — deferred; building real pages needs sources beyond the two acute-diarrhea guidelines (no thin stubs invented).
- **Lectures/chalk talks:** ~60 transcripts remain gated — not auto-ingested; awaiting user selection by name.

**Sources ingested (2 — guideline/CPU tier, per ingestion priority):**
- `[[aga-2023-bloating]]` — AGA 2023 CPU on Belching, Abdominal Bloating, and Distention (Gastroenterology 2023;165:791–800). All 15 Best Practice Advice statements captured verbatim.
- `[[aga-2024-intestinal-ultrasound]]` — AGA 2024 CPU (Commentary) on Intestinal Ultrasound in IBD (Clin Gastroenterol Hepatol 2024;22:1790–1795).

**Pages created:**
- `[[abdominal-bloating-and-distention]]` (diagnostic schema) — belching subtypes (gastric/supragastric/aerophagia), Rome IV criteria, symptom-driven workup, neuromodulator/behavioral therapy, probiotics-not-recommended, APD.
- `[[intestinal-ultrasound]]` (concept) — BWT + Doppler metrics, IUS-vs-MRE/CTE table, treat-to-target thresholds (CD sonographic response ≥25% BWT reduction, postop BWT ≥3mm+FC≥50; UC BWT <2.8mm, ASUC ≥20% at 48h), special populations, no-dysplasia-surveillance limit.

**Stub expanded (1):**
- `[[obesity]]` — full ADDT from ingested AGA obesity-pharm + intragastric-balloon guidelines (ranked pharmacotherapy, IGB peri-procedural detail + safety, lifestyle, bariatric surgery). Was the stalest page (stub since 2026-06-09).

**Pages updated / connectivity:**
- `[[crohns-disease]]`, `[[ulcerative-colitis]]` — IUS mention converted to inline link + treat-to-target thresholds; source added to frontmatter + See Also + Sources.
- New bloating schema linked from `[[disorders-of-gut-brain-interaction]]` (B3/C4 rows + See Also), `[[irritable-bowel-syndrome]]`, `[[small-intestinal-bacterial-overgrowth]]`.
- `[[atrophic-gastritis]]` (stalest non-stub) validated: added `*Workup: see [[dyspepsia]].*` DDx pointer, de-duplicated dyspepsia link, added to See Also, date bumped.

**Hygiene:**
- Index counts reconciled: **213 sources | 111 disease scripts | 20 diagnostic schemas | 2 general procedures | 20 advanced procedures | 17 meds | 0 anatomy | 37 concepts | 1 synthesis**; index `updated:` → 2026-07-19.
- Whole-wiki broken-link scan: **0 broken links**. No `.DS_Store`/OS artifacts. No untracked `raw/` files (inbox sync added none this pass).

**Remaining for user triage:**
- **Decision gap (needs not-yet-ingested source):** `[[atrophic-gastritis]]` names OLGA/OLGIM staging with "Stage III–IV = elevated cancer risk" but lacks the full stage-assignment matrix; the cited AGA 2021 CPU does not contain it — would need the original Rugge/Capelle OLGA/OLGIM papers. Not filled (source fidelity).
- **Missing entity pages** referenced in atrophic-gastritis DDx (no stubs created): pernicious-anemia, autoimmune-gastritis, reactive-gastropathy, lymphocytic-gastritis, eosinophilic-gastritis, ménétrier-disease, iron-deficiency-anemia, vitamin-b12-deficiency. Create when a supporting ingested source is confirmed.
- **Uningested queue:** ~28 AGA CPUs remain (lowercase-named PDFs in `raw/GI Guidelines/AGA/`) plus a handful of ACG/ASGE items; all tier-1. Lectures/chalk talks (~60) remain gated — report only, ingest on user naming. 4 RCTs already ingested.

---

## [2026-07-18] lint | raw/ corpus RESTORED via inbox sync + pdftotext works → ingest era reopened; ingested AGA EPI + AGA CHS CPUs (3 new disease pages); somatostatin-analogs stub expanded; nausea/gastroparesis/pancreatic links wired

**⚠ Structural reversal — ingest is possible again:**
- The 2026-07-17 entry declared `raw/` permanently removed and the ingest era closed (no PDF tooling). **Both premises are now false.** The inbox sync has repopulated `raw/` with **245 source files** (241 guidelines + 4 RCTs), and **`pdftotext` is installed** (`/usr/bin/pdftotext`), so text extraction and ingest work again.
- `raw/GI Guidelines/`, `raw/GI RCTs/`, and `raw/GI Lectures+Chalk Talks/` remain **gitignored** (only `raw/assets/` is tracked) — raw PDFs are never committed, per schema. No lecture/chalk-talk files present (0).
- Uningested gap: ~30+ files, mostly recent **AGA Clinical Practice Updates** (the lowercase-named AGA files) plus a few ASGE/AGA MSTF duplicates of already-ingested USMSTF versions.

**Sources created (2 ingests, tier-1 CPUs — within per-pass cap):**
- `wiki/sources/aga-2023-epi.md` — AGA CPU Exocrine Pancreatic Insufficiency (all 15 Best Practice Advice statements captured).
- `wiki/sources/aga-2024-chs.md` — AGA CPU Cannabinoid Hyperemesis Syndrome (CVS Rome IV + proposed CHS criteria).

**Pages created:**
- [[exocrine-pancreatic-insufficiency]] (`pancreaticobiliary-diseases/`, ADDT) — filled a gap referenced by ≥6 pages; FE-1 thresholds (<100 / 100–200 µg/g), PERT dosing (≥40,000 USP lipase/meal), DXA q1–2y.
- [[cyclic-vomiting-syndrome]] and [[cannabinoid-hyperemesis-syndrome]] (`foregut-and-motility-diseases/gastric/`, ADDT) — decision criteria + amitriptyline/capsaicin management.

**Stub expanded (from already-ingested sources):**
- [[somatostatin-analogs]] — octreotide/lanreotide across variceal bleeding ([[aasld-2023-portal-hypertension]]), GEP-NET/carcinoid ([[nccn-2026-net]]), refractory small-bowel bleeding ([[acg-2015-small-bowel-bleeding]]); 1 → 3 sources.

**Links wired:**
- `nausea-and-vomiting.md` (DDx + See Also), `gastroparesis.md` (DDx) → CVS/CHS inline links.
- `chronic-diarrhea.md`, `chronic-pancreatitis.md` → EPI inline links.

**Hygiene:** `index.md` updated (3 disease + 2 source entries added, somatostatin-analogs description refreshed, date → 2026-07-18); all new-page wiki-links validated (no broken links); no `.DS_Store`/OS artifacts; stubs 17 → 16.

**Remaining for triage (reported, not done — per-pass ingest cap):**
- ~30 uningested AGA CPUs on genuinely new topics (e.g. acute hepatic porphyria, alpha-gal syndrome, PCABs/potassium-competitive acid blockers, cyclical vomiting already covered, intestinal ultrasound for IBD, extraesophageal GERD, EPI-adjacent). High-value next targets.
- Stalest remaining stubs needing not-yet-ingested or thin-coverage sources: [[obesity]], [[post-transplant-lymphoproliferative-disorder]].
- Duplicate raw files (AGA MSTF 2020/2022 = already-ingested USMSTF versions; ASGE USMSTF 2016/2017; `AGA 2026 CPU Hemorrhoids (duplicate).pdf`) — do not re-ingest.

---

## [2026-07-17] lint | raw/ corpus permanently removed → ingest era closed; 3 unlogged 2026-07-16 pages indexed (incl. cirrhosis); 6-batch parallel pass over 85 files; stubs 34 → 17; unsourced content purged from 3 pages

**⚠ Structural change — `raw/` is no longer a source corpus:**

- Commit `dd214ba` (2026-07-16, Nick) **removed all 208 guideline/RCT PDFs from the repo** ("moved to local GI Resources"); `a466778` added a root `.gitignore` (`KHNL-GI-Wiki/raw/*`, `!KHNL-GI-Wiki/raw/assets`) so the nightly rsync inbox never re-commits them. `raw/` now holds **only `assets/`**.
- **Consequences, permanent unless the corpus returns:** (1) **Ingest is impossible** — 0 raw source files reachable; the GI Resources folder is outside the sandbox. (2) New raw files will **never appear as untracked** in `git status` — the ignore rule is the point. (3) **`wiki/sources/` (209 pages) is now the sole evidence layer.** Every page in this pass was linted against source pages only; no outside/general-medical knowledge was admitted.
- **New fragility this introduces:** entity pages carry operative detail (Balthazar bands, Marshall point values, HPS RHC criteria) that their source pages never preserved. That detail is now **unverifiable** — likely captured faithfully from the PDF at ingest, so it was **not deleted**, but it can no longer be checked. Flagged per-page.

**Unlogged 2026-07-16 work found and reconciled (created by the prior session, never indexed or logged):**

- `[[cirrhosis]]` — 231 lines, full ADDT, 9 sources. **The top structural gap flagged by the last two lint passes.** Now indexed; had **zero inbound links** — now linked from 29 pages.
- `[[tips]]` — 230 lines, 4 sources. Now indexed.
- `[[asge-2015-bowel-preparation]]` — the long-standing ingest target, ingested just before the PDFs were removed; carries a proper supersession table vs the 2025 statement. Was the wiki's **only orphan** — now resolved.
- **Tool-call artifacts (`</content>`, `</invoke>`) had leaked into the committed `cirrhosis.md`** and rendered as visible garbage. Stripped from **6 files** total; whole-wiki re-scan clean.

**Ingest:** **0** (impossible — see above). Lectures remain gated regardless.

**Decision-sufficiency fixes (Content Guide → *clinical reference*):**

- `[[colonoscopy]]` — the page told readers to **document prep quality but never defined how to score it**. Added the **BBPS / Ottawa / Aronchick** scales table (ranges + per-segment anchors) + the USMSTF adequate-exam definition from `[[asge-2015-bowel-preparation]]`; source wired into frontmatter + `## Sources`.
- `[[wilson-disease]]` — Leipzig score had interpretation bands (≥4 / 2–3 / 0–1) but **no criteria**. Full Table 7 point table added; **verified row-by-row against `[[aasld-2022-wilson-disease]]` — 20/20 rows match verbatim.**
- `[[mesenteric-artery-aneurysm]]` — had *no* criteria at all → SMA ~60%, **<2 cm observe (Conditional/Low) / >2 cm treat (Strong/Low)**.
- `[[hereditary-pancreatitis]]` — stub → full ADDT: gene table, testing rec (Strong/Low, esp. <35 y), **53-fold** cancer RR, surveillance from **age 40 (flat)**.
- `[[loperamide]]` — **8 mg/day self-treatment vs 16 mg/24 h with antibiotics** (the qualifier *is* the decision); `[[lubiprostone]]` CIC **24 mcg BID** + grade/qualifier; `[[antireflux-surgery]]` hiatal-size × Hill-grade table; `[[sacral-nerve-stimulation]]` Strong/Low for FI but **not for constipation**.

**⚠ Source-fidelity purges (unsourced clinical content removed — user triage):**

- `[[microscopic-colitis]]` — asserted **budesonide 9 mg daily first-line**, collagen band >10 µm, IELs >20/100, and drug/smoking associations. **No ingested source supports any of it**; its only source (`[[asge-2010-diarrhea]]`) explicitly predates current MC therapy guidance. An unsourced drug dose is the highest-risk failure mode → removed; page rebuilt from what the sources do carry (~10% of chronic-diarrhea referrals, normal mucosa, random R+L biopsies, 7–32% yield). **Needs an ACG/AGA microscopic-colitis guideline.**
- `[[heller-myotomy]]` — GERD-vs-POEM claim was unsourced (`sources: []`); traced to `[[sages-2024-poem]]` and restated faithfully.
- `[[noninvasive-liver-disease-assessment]]` — removed two false "not yet ingested (see `raw/GI Guidelines/AASLD/`)" notes; both guidelines are ingested and already in its own frontmatter.

**⚠ Contradictions surfaced (source priority applied; both numbers preserved):**

- `[[rifaximin]]` **reversal** — page asserted *against* rifaximin for post-TIPS HE (AASLD/EASL **2014**, Grade III/B/1). **`[[acg-2026-hepatic-encephalopathy]]`: start 14 days before elective TIPS, continue ≥6 months.** Both guidelines → newer wins; page now asserts ACG 2026 with a `## Contradictions` section, since readers carry the old rule. **Verified against the source page.**
- `[[acute-pancreatitis]]` **CTSI cutoff conflicts with its own source page** — page says **≥7 = severe**, `[[acg-2024-acute-pancreatitis]]` says **≥8**. Same guideline, raw PDF unreachable → **not adjudicated**; an explicit ⚠ warning was added on-page rather than guessing. **Needs the original PDF.**
- `[[variceal-upper-gi-bleeding]]` — ceftriaxone "5–7 days" (journal-club characterization) vs AASLD 2023 GS 27 "up to 5 days" → guideline wins.
- `[[cowden-syndrome]]`-style precedent applied on `[[lubiprostone]]` (ACG 2020 vs AGA 2022 on IBS-C).

**Dedup (one home per fact):** `[[high-resolution-manometry]]` (4 blocks duplicating `[[chicago-classification-v4]]`), `[[liver-transplantation]]` (~30-line duplicated Metabolic Complications section — richer copy retained), `[[chronic-pancreatitis]]` (gene table → `[[hereditary-pancreatitis]]`), `[[achalasia]]` (FLIP), `[[rumination-syndrome]]` (whole `## Clinical Pearls` section restated the page), `[[endoscopy-ergonomics]]`, `[[postinfectious-ibs]]` (fact stated 3×).

**Hygiene:** malformed frontmatter (`sources:` as quoted wiki-links) on `[[achalasia]]`, `[[hepatocellular-carcinoma]]`, `[[liver-transplantation]]`; `sources: []` contradicting the body on `[[endoscopic-submucosal-dissection]]`, `[[heller-myotomy]]`; `## Sources` titles corrected to match source frontmatter verbatim; index list-splitting blank line under `[[hereditary-hemorrhagic-telangiectasia]]`; **`wiki/.fuse_hidden0000000a00000001` deleted** (three prior passes reported this as permission-blocked; it succeeded this time).

**Link integrity:** **0 broken links**, **0 orphans**, 0 broken index links across 411 non-source + 209 source pages. `[[cirrhosis]]` +29 inbound, `[[tips]]` +9.

**Index reconciliation:** was stale at **208 sources / 107 disease scripts / 19 advanced procedures**; on-disk truth is **209 / 108 / 20**. Three missing entries added; **16 descriptions rewritten** (all stub→full transitions + the reversed rifaximin line). Count line + frontmatter dated 2026-07-17.

**Stubs: 34 → 17.** Expanded this pass: `hereditary-pancreatitis`, `antireflux-surgery`, `biofeedback-therapy`, `sacral-nerve-stimulation`, `mesenteric-artery-aneurysm`, `hereditary-hemorrhagic-telangiectasia`, `lubiprostone`, `loperamide`, `familial-pancreatic-cancer`, plus stale markers cleared from substantive pages.

**⛔ Blocked on the removed corpus — cannot fix, needs a source (highest priority first):**

- **Child-Pugh point bands + MELD/MELD-Na formula — absent from the entire wiki.** Independently flagged by 3 agents. Gates decisions on **≥6 pages** (`tips` preemptive CTP C 10–13 / futility MELD >30; `variceal-upper-gi-bleeding` CTP B>7; `ascites` MELD <18; LT listing MELD >14). `cirrhosis` lists component *variables* only. **The single worst decision gap in the wiki.**
- **LA grade A–D mucosal-break criteria** — nowhere in the wiki, yet `gerd`, `upper-endoscopy`, `laryngopharyngeal-symptoms` all condition actions on it.
- **Curaçao criteria (HHT)** — the word appears nowhere in the corpus.
- **`[[ercp]]` reproduces the exact `choledocholithiasis` failure mode** CLAUDE.md names: ASGE high/intermediate/low criteria absent despite citing `asge-2019-choledocholithiasis`; "high-risk for PEP" undefined; SOD types I/II/III missing. **May be fixable from source pages — targeted follow-up recommended.**
- Others: Hill grade, OLGA/OLGIM matrix, PD-L1 CPS cutoffs, Siewert, Marshall point values, CTSI/Balthazar B–D, Sarin classification, GIST size×mitotic bands and gallbladder-cancer T-stage (both barred by the NCCN licence note), arterial AMI/NOMI, microscopic-colitis therapy, bariatric BMI thresholds.

**For user triage (not actioned):**

- **Mis-routed `7-concepts/` pages that are discrete diseases** (schema: any discrete disease is a disease script): `hepatopulmonary-syndrome-portopulmonary-hypertension` (arguably split into two), `intestinal-methanogen-overgrowth` (its sibling `small-intestinal-bacterial-overgrowth` already is one), `antibody-mediated-rejection-liver-transplant`, `familial-pancreatic-cancer`. Procedures filed as concepts: `liver-biopsy`, `mri-mrcp`, `brush-cytology`, `confocal-laser-endomicroscopy`, `ambulatory-reflux-monitoring`.
- **Cross-page triplication:** `gastric-premalignant-conditions` / `gastric-intestinal-metaplasia` / `atrophic-gastritis` triplicate Sydney protocol + ACG 2025 high-risk defs + eradication + chemoprevention. `endoscopic-eradication-therapy` ↔ `radiofrequency-ablation` duplicate AE/efficacy tables. `polypectomy-emr` has **two LST tables with conflicting numbers** (0.5% vs <2%; 31.6% vs 32.4%).
- `achalasia` says "Chicago Classification **v3.0** defines subtypes" while linking the v4 page (ACG 2020 genuinely predates v4.0 — source-faithful but reads as stale).
- `hepatic-encephalopathy` ADDT violation (top-level `## Definition`/`## Classification`); ~10 diagnostic schemas deviate from the 5-section order (`hiv-aids-related-diarrhea` has none); `dysphagia`/`jaundice`/`nausea-and-vomiting` have `sources: []` and zero citations — attribution unreconstructable without guessing.
- `irritable-bowel-syndrome` still calls microscopic colitis "older women" — the descriptor just purged as unsourced from `[[microscopic-colitis]]`; may be sourced to `acg-2020-ibs`. **Worth a human check.**
- `antibody-mediated-rejection-liver-transplant` lists **5** Banff criteria but says "all **4** should ideally be present."
- 8 pages carry a redundant H1 duplicating the frontmatter title; ~46 don't.
- `raw/GI Guidelines/AGA/AGA 2026 CPU Hemorrhoids (duplicate).pdf` deletion note is now moot — `raw/` is empty.

---

## [2026-07-16] lint | Whole-wiki link + structure pass (172 pages), one genuinely uningested guideline found, index reconciled; PDF tooling unavailable so ingest + stub expansion deferred

**Scope:** Parallel subagent pass across all wiki folders (13 batches). Link/structure only — **no clinical claims added or altered**, because PDF tooling was unavailable (see Blocked).

**Blocked — PDF tooling missing:**
- PyMuPDF/poppler are not installed and installing them required an approval unavailable on this pass. `raw/*.pdf` was therefore unreadable.
- **Ingest: 0 files** (schema allows up to 2/pass). **Stub expansion: 0** (schema allows 1–2/pass). Both need the raw PDFs; per the Content Guide hard constraint, nothing was filled in from general knowledge.

**Ingest-queue reconciliation (fuzzy-matched all 212 raw guideline/RCT files against 208 source slugs):**
- **`raw/GI Guidelines/ASGE/ASGE 2015 Bowel Preparation Before Colonoscopy.pdf` has no source page — the one genuine gap found.** Superseded by [[usmstf-2025-bowel-prep]] but may still contribute net-new non-conflicting detail. **Ingest target for the next pass with PDF access.**
- `ASGE 2025 Bowel Preparation Quality.pdf` is the *same document* as [[usmstf-2025-bowel-prep]] / [[acg-2025-bowel-prep]] (one consensus statement published simultaneously in three society journals) — already ingested, no action.
- `AGA 2026 CPU Hemorrhoids (duplicate).pdf` is a byte-level duplicate of the ingested `AGA 2026 CPU Hemorrhoids.pdf` — **user triage: safe to delete from `raw/`.**
- All other raw files reconcile to an existing source page. Lecture/chalk-talk transcripts remain **gated — not auto-ingested** (see User Triage).

**Link integrity (whole wiki, 410 pages):** 0 broken links, 0 orphan pages, 0 duplicate basenames, 8,180 wiki-links. Index: 0 unindexed pages, 0 unindexed sources, 0 index entries without a page.

**Hygiene fixes:**
- `index.md`: added missing `[[rumination-syndrome]]` entry (only unindexed entity page); collapsed the stray `#### Gastric (continued)` split back into one `#### Gastric` section and removed the blank line breaking its list; `updated: 2026-07-16`.
- `[[liver-transplantation]]`: unwrapped 5 backticked `` `[[source-slug]]` `` citations in clinical prose that rendered as literal code instead of links (the same sentences already used the plain link form).

**Key contributions (across 172 pages):**
- **~330 inline `[[slug|Displayed Words]]` links added** on first mentions; ~25 DDx diagnostic-schema pointers added.
- **Rendering bugs fixed:** ~20 backticked pseudo-links that never rendered ([[liver-biopsy]] worst — 8, incl. every link in its Indications section; also [[cholangiocarcinoma]], [[biliary-stricture]], [[ercp]], [[cholangioscopy]], [[brush-cytology]], [[fish]], [[confocal-laser-endomicroscopy]]).
- **Malformed frontmatter `sources:`** (quoted wiki-links instead of bare slugs) normalized on [[ampullary-adenoma]], [[semaglutide]], [[biliary-stricture]], [[acute-lower-gi-bleeding]], [[subepithelial-lesion]]; frontmatter/`## Sources` desync fixed on 8 more.
- **Mis-targeted links repaired:** [[dysphagia]] pointed "web/ring" at the EoE page; [[colorectal-cancer-screening]] had `[[colorectal-cancer|FIT]]`; [[probiotics]] had `[[inflammatory-bowel-disease|microbiome]]`; [[high-resolution-manometry]] left ".0" outside the Chicago v4.0 link.
- **ADDT/structure:** [[peptic-ulcer-disease]] `## Differential` → `## Differential Diagnosis`; [[hereditary-diffuse-gastric-cancer]] `### Cancer Risk Profile` → `### Severity Assessment` (a wiki-link in the heading was breaking anchor slugification); [[mutyh-associated-polyposis]] rebuilt into ADDT by re-filing its existing facts; [[focal-liver-lesions]], [[ascites]], [[acute-lower-gi-bleeding]] heading fixes.
- **Dedup (one home per fact):** removed ~15 redundant trailing `*Cross-references:*` / "See [[x]]" lines that duplicated `## See Also` verbatim; de-duplicated repeated figures on [[hereditary-diffuse-gastric-cancer]] and links on [[hepatocellular-carcinoma]].
- `## See Also` spacing/format normalized on ~40 pages.

**Deliberately NOT changed (reported for triage):**
- Backticked `[[slugs]]` inside source pages' `## Relevance to Wiki` sections (17 files) — a consistent section-level convention using slugs as identifiers, not navigation. Mass-unwrapping is a judgment call for the user.
- 24 source pages carry source slugs in `## See Also`, against the Style Guide. Pre-existing; `wiki/sources/` was out of this pass's batch scope.

---

## [2026-07-14] update | gastric-intestinal-metaplasia — folded in ACG 2025 GPMC recommendations (Nick-directed)

`[[gastric-intestinal-metaplasia]]` was citing only [[aga-2020-gastric-intestinal-metaplasia]] while the fully-ingested [[acg-2025-gastric-premalignant]] source existed unlinked. Added ACG 2025 content throughout: **updated Sydney containering** (antrum+incisura / corpus / targeted separate), **5-component high-quality endoscopy** prerequisite (HDWLE, CO₂, cleansing, photodocumentation, inspection time), expanded **histology reporting** (subtype complete/incomplete/mixed + extent limited-vs-extensive + severity), **ACG high-/low-risk definitions** and q3y surveillance (+q1–2y for multiple risk factors; against repeat EGD <12mo for nondysplastic GPMC), new **dysplasia/ESD management** subsection (resect if visible margins, ESD at high-volume center, post-resection surveillance), and **against aspirin/NSAID/COX-2/antioxidant chemoprevention**. Frontmatter `sources:` +`acg-2025-gastric-premalignant`; added source #2 to `## Sources`; `updated: 2026-07-14`. Index line refreshed to (2 sources).

## [2026-07-14] lint | Ingest queue re-confirmed exhausted (no-op), radiofrequency-ablation + li-rads stubs expanded, LI-RADS de-duplicated to one home page, polyposis cluster validated against newer USMSTF 2022 (scheduled ingest-and-lint pass)

**Ingest:** None. Re-verified all **208** `raw/GI Guidelines/` PDFs and all **4** `raw/GI RCTs/` files against `wiki/sources/` slugs (fuzzy title+year match). Priority queue exhausted → lint-only pass. Only uningested guideline files remain `ASGE 2015 Bowel Preparation Before Colonoscopy` and `ASGE 2025 Bowel Preparation Quality` — both deliberately skipped on prior passes (the 2025 file is the *same* multi-society document already ingested as `[[acg-2025-bowel-prep]]` / `[[usmstf-2025-bowel-prep]]`, DOI 10.14309/ajg.0000000000003287; the 2015 file is superseded by it). Lectures gated, not auto-ingested.

**Stubs expanded (2 — from already-ingested sources only):**

- `[[radiofrequency-ablation]]` — cleared `*Stub*` marker; built out as the **modality home page** (Indications → Technique → Outcomes → Adverse Events → Alternatives). Sources expanded 1 → 6: [[asge-2018-barretts-eet]] (catheter types, ~3 sessions to CE-IM, EMR-then-ablate sequence, pooled AE 8.8% / stricture 5.6% / bleed 1% / perforation 0.6%, AE 22.2% with EMR vs 5% RFA alone, cEMR strongly recommended against), [[acg-2022-barretts]] (SURF 26.5% → 1.5%; cryotherapy CED/CE-IM rates; 75% of recurrences at GEJ, ~80% endoscopically invisible; buried-BE yield ~1%), [[aga-2024-barretts-eet]] (Rec 3 — against EET in NDBE), [[asge-2019-radiation-proctopathy]] (Rec 1 — RFA alongside APC/bipolar/heater probe), [[acg-2023-biliary-strictures]] (Rec 9–10 — intraductal RFA/PDT + plastic stent for unresectable perihilar CCA; hemobilia ~4%), [[aasld-2023-hcc]] (GS 39 — thermal ablation for HCC ≤3 cm). `updated: 2026-07-14`.
- `[[li-rads]]` — cleared `*Stub*` marker (page was frontmatter + one line). Built as the **single home** for the LI-RADS framework: applicability table (apply vs do-not-apply, PAGE-B ≥10 threshold), major features, LR-5 criteria by size, full category/management table (LR-1 → LR-TIV), imaging-modality performance (MRI 82%/92% vs CT 66%/91%), pitfalls. All claims from [[aasld-2023-hcc]] (GS 16–22, Figures 6/7/8), [[acg-2024-focal-liver-lesions]], [[nccn-2026-hcc]]. `updated: 2026-07-14`.

**De-duplication (Content Guide — "one home per fact"):**

- `[[hepatocellular-carcinoma]]` was reproducing the **entire LI-RADS framework** (applicability list, category table, major features, LR-5 size criteria, imaging-modality data) that now lives on `[[li-rads]]`. Replaced with a `### Imaging Diagnosis` section carrying only the HCC-specific implications (GS 16/16a/16c, GS 17, GS 18, GS 22 biopsy-for-LR-M) plus an italic pointer to `[[li-rads]]`. IHC-marker paragraph retained. Added `[[li-rads]]`, `[[hcc-surveillance]]`, `[[radiofrequency-ablation]]` to See Also. `updated: 2026-07-14`.

**Stalest-page validation (3 pages, all `updated: 2026-05-19`):**

- `[[cowden-syndrome]]` — **stale claim superseded by a newer guideline.** Page carried only [[acg-2015-hereditary-gi-cancer]] (colonoscopy **from age 15, q2y**); the newer [[aga-2022-hamartomatous-polyposis|USMSTF/AGA 2022]] hamartomatous-polyposis guideline sets PTEN/Cowden colonoscopy start at **age 35**. Per source priority (same tier → newer publication wins), the page now leads with age 35 and **surfaces the contradiction inline** in Diagnostics. Added the 2022 source to frontmatter + `## Sources`; added cascade-screening/extraintestinal-coordination content; renamed `### Cancer Risk Profile` → `### Severity Assessment — Cancer Risk Profile` (ADDT compliance); fixed See Also spacing; added `[[lynch-syndrome]]`, `[[polypectomy]]`.
- `[[juvenile-polyposis-syndrome]]` — same missing-source gap, but **2015 and 2022 are concordant** (colonoscopy + EGD at age 12–15, intervals by polyp burden, *SMAD4*/HHT overlap). Added [[aga-2022-hamartomatous-polyposis]] to frontmatter + `## Sources` with an explicit concordance note; added `[[capsule-endoscopy]]` to See Also; fixed spacing.
- `[[peutz-jeghers-syndrome]]` — already carried both sources and correct ADDT order; See Also spacing fixed only. All three bumped to `updated: 2026-07-14`.

**Broken-link scan:** Whole-wiki basename-resolution scan (excluding `![[embeds]]`, code fences/spans, `log.md`/`index.md`). **0 broken links** across 409 non-source pages + 208 source pages after fixes.

**Structural gap found (user triage):** **There is no `cirrhosis` page.** "Cirrhosis" is referenced in-text across the hepatology cluster but has no home page — links written as `[[cirrhosis]]` during this pass did not resolve and were unlinked rather than left broken. Adjacent pages exist ([[portal-hypertension]], [[aki-in-cirrhosis]], [[hepatic-encephalopathy]], [[spontaneous-bacterial-peritonitis]], [[acute-on-chronic-liver-failure]], [[cirrhosis-hemostasis]], [[nutrition-in-liver-disease]]) but the parent disease script is missing. Ample ingested sourcing exists ([[aasld-2023-portal-hypertension]], [[aasld-2021-ascites-sbp-hrs]], [[acg-2025-perioperative-cirrhosis]], [[aga-2025-ascites-cirrhosis]], NILDA set). **Recommend creating `[[cirrhosis]]` (disease script, hepatology) as the top item next pass.**

**Index reconciliation:** On-disk counts unchanged: 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 17 meds, 0 anatomy, 36 concepts, 208 sources, 1 synthesis. Two `(stub)` markers cleared (radiofrequency-ablation, li-rads); four index descriptions rewritten (RFA, LI-RADS, Cowden, JPS). Count line and index frontmatter dated 2026-07-14.

**Hygiene flagged (not fixed — permission blocked):** `.DS_Store` OS artifacts across repo and a stray `wiki/.fuse_hidden0000000a00000001` mount artifact; sandbox-mount deletion returns "Operation not permitted" (unchanged). Also: `raw/GI Guidelines/AGA/AGA 2026 CPU Hemorrhoids (duplicate).pdf` is a literal duplicate raw file — `raw/` is immutable, so flagged for user deletion rather than removed.

**Stubs remaining (flagged, not expanded — token budget):** **34** files still carry a `*Stub — to be expanded*` marker (down from 36). High-value candidates expandable from already-ingested sources next pass: `[[noninvasive-liver-disease-assessment]]` (AASLD 2024 NILDA blood/imaging/portal-HTN trio), `[[iron-overload-and-iron-metabolism]]` ([[acg-2019-hereditary-hemochromatosis]], [[aasld-2011-hemochromatosis]]), `[[obesity]]` ([[aga-2022-obesity-pharm]], [[aga-2021-intragastric-balloons]]), `[[endoscopic-submucosal-dissection]]` ([[asge-2023-esd]]), `[[anorectal-manometry]]` ([[acg-2021-anorectal-disorders]]). `[[acute-mesenteric-ischemia]]` still needs a dedicated arterial-AMI source — cannot expand without one.

**Lectures available (gated — NOT auto-ingested):** ~62 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name.

---

## [2026-07-12] lint | Ingest queue re-confirmed exhausted (no-op), rotavirus + entamoeba stubs expanded (ADDT), ICI-hepatitis + UC-vs-Crohn's stalest pages validated, whole-wiki link scan (scheduled ingest-and-lint pass)

**Ingest:** None. Re-verified all **208** `raw/GI Guidelines/` PDFs and all **4** `raw/GI RCTs/` files against `wiki/sources/` slugs (fuzzy title+year match, 0 low-confidence misses). No raw file is newer than 2026-06-28 (already ingested). Only uningested guideline files remain `ASGE 2015 Bowel Preparation` and `ASGE 2025 Bowel Preparation Quality`, deliberately skipped on prior passes as superseded duplicates fully covered by `[[acg-2025-bowel-prep]]` / `[[usmstf-2025-bowel-prep]]`. Priority queue exhausted → lint-only pass. Lectures gated, not auto-ingested.

**Stubs expanded (2 — from already-ingested sources only):**
- `[[rotavirus]]` — cleared `*Stub*` marker; full **ADDT** restructure (Assessment: Establishing Dx + Severity → Differential with `*Workup: see [[acute-diarrhea]].*` → Diagnostics table → Therapeutics). Claims from `[[acg-2016-acute-diarrhea]]` (Rec 1–6, 10 — stool-testing thresholds, culture-independent panels, no antibiotics for community-acquired viral diarrhea, balanced electrolyte rehydration, probiotics only post-antibiotic) + `[[idsa-2017-infectious-diarrhea]]` (Rec 11, 12, 19, 36, 56, 57 — fresh stool for viral agents, outbreak panels, no empiric abx for watery diarrhea, **rotavirus vaccine for all infants** *(strong, high)*, "tests not to use": serology/WBC/fecal leukocytes/lactoferrin; loperamide <18 y contraindication, ondansetron, zinc). Added `idsa-2017-infectious-diarrhea` to frontmatter. `updated: 2026-07-12`. Index desc `(stub)` → `(2 sources)`.
- `[[entamoeba-histolytica-infection]]` — cleared `*Stub*` marker; ADDT restructure. Retained ACG 2016 parasite-specific therapy (metronidazole *or* tinidazole, then a luminal agent — paromomycin/iodoquinol) and *E. histolytica* vs *E. dispar* antigen-EIA/PCR speciation; added net-new `[[idsa-2017-infectious-diarrhea]]` content (Rec 12 immunocompromised/AIDS broad differential, Rec 21 serology not for etiology, Rec 24 endoscopy/proctoscopy indications, Rec 32 empiric abx only in immunocompromised with severe bloody diarrhea). New inline links to `[[hiv-aids-related-diarrhea]]`, `[[ulcerative-colitis]]`, `[[loperamide]]`. `updated: 2026-07-12`. Index desc `(stub)` → `(2 sources)`.

**Stalest-page validation (2 pages, both `updated: 2026-05-16`):**
- `[[immune-checkpoint-inhibitor-hepatitis]]` (disease-script) — **frontmatter `sources: []` was empty while the page cited ACG 2021** (Content Guide violation); fixed to `sources: [acg-2021-dili, aasld-2022-dili]`. Cleared both `*Stub*` markers; restructured to full ADDT with a Severity Assessment section (CTCAE grade table), added DDx schema pointer `*Workup: see [[abnormal-liver-chemistries]].*`, converted grade-directed management to a table, and added corroborating `[[aasld-2022-dili]]` content (stop the agent; corticosteroids for checkpoint-inhibitor hepatitis; monitor for `[[acute-liver-failure]]` and transplant referral). `updated: 2026-07-12`.
- `[[uc-vs-crohns-comparison]]` (synthesis) — frontmatter `sources: []` and **no `## Sources` section**; added `[[acg-2025-uc]]` + `[[acg-2025-crohns]]` (the guidelines backing the two disease pages it synthesizes) to frontmatter and a standardized numbered `## Sources` section; densified See Also (+`[[colorectal-cancer]]`, `[[pouchitis]]`, `[[microscopic-colitis]]`). `updated: 2026-07-12`. **Flagged for user triage:** several table rows (ANCA/ASCA ~60–70%, granuloma/cobblestoning specifics) are classic teaching not traceable to a specific ingested recommendation — left in place, not re-sourced, pending review.

**Broken-link scan:** Whole-wiki basename-resolution scan (excluding `![[embeds]]`, code fences/spans, `log.md`/`index.md`). **0 genuine broken links** across 409 non-source pages + 208 source pages; all 97 flagged targets were the known false positives from escaped `\|` table-alias pipes. All new rotavirus/entamoeba/ICI links resolve.

**Index reconciliation:** On-disk counts unchanged: 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 17 meds, 0 anatomy, 36 concepts, 208 sources, 1 synthesis. Three `(stub)` markers cleared. Count line and index frontmatter dated 2026-07-12.

**Hygiene flagged (not fixed — permission blocked):** 15 `.DS_Store` OS artifacts across repo; sandbox-mount deletion returns "Operation not permitted" (unchanged). Untracked via `.gitignore`; user action needed.

**Stubs remaining (flagged, not expanded — token budget):** **36** files still carry a `*Stub — to be expanded*` marker (down from 39). High-value candidates for the next pass, expandable from already-ingested sources: hepatology cluster (`[[noninvasive-liver-disease-assessment]]`, `[[li-rads]]`, `[[iron-overload-and-iron-metabolism]]`) from ingested AASLD NILDA/HCC/hemochromatosis sources; `[[radiofrequency-ablation]]` from Barrett's EET sources; `[[microscopic-colitis]]` from ingested IBD/diarrhea sources; polyposis-adjacent concepts (`[[brca-pathogenic-variants]]`, `[[familial-pancreatic-cancer]]`, `[[fammm-syndrome]]`) from `[[acg-2018-pancreatic-cysts]]`/pancreatic-cancer-screening sources. `[[acute-mesenteric-ischemia]]` still needs a dedicated arterial-AMI source — cannot expand without one.

**Lectures available (gated — NOT auto-ingested):** ~60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name.

---

## [2026-07-07] lint | Ingest queue re-confirmed exhausted (no-op), norovirus + cryptosporidiosis stubs expanded (ADDT), 2 stalest pages validated, 2 med stubs created, whole-wiki link scan (scheduled ingest-and-lint pass)

**Ingest:** None. Re-verified all **208** `raw/GI Guidelines/` PDFs and all **4** `raw/GI RCTs/` files against `wiki/sources/` slugs — every priority-tier source is ingested; newest raw file is 2026-06-28 (already ingested). Only uningested guideline files remain `ASGE 2015 Bowel Preparation` and `ASGE 2025 Bowel Preparation Quality`, deliberately skipped as superseded duplicates fully covered by `[[acg-2025-bowel-prep]]` / `[[usmstf-2025-bowel-prep]]`. Priority queue exhausted → lint-only pass. Lectures gated, not auto-ingested.

**Stubs expanded (2 — from already-ingested sources only):**
- `[[norovirus]]` — cleared `*Stub*` marker; full **ADDT** restructure (Assessment: Establishing Dx + Severity → Differential with `*Workup: see [[acute-diarrhea]].*` → Diagnostics → Therapeutics). All claims from `[[acg-2016-acute-diarrhea]]` (Rec 10 no-antibiotics; Rec 15 outbreak hand-hygiene exception) + `[[idsa-2017-infectious-diarrhea]]` (multiplex GI PCR, fresh stool for viral, serology/fecal-leukocytes not for etiology, loperamide age/inflammatory limits). Added source `idsa-2017-infectious-diarrhea` to frontmatter. `updated: 2026-07-07`. Index desc `(stub)` → `(2 sources)`.
- `[[cryptosporidiosis]]` — cleared `*Stub*` marker; ADDT restructure from `[[acg-2016-acute-diarrhea]]` (stool antigen EIA / modified acid-fast / multiplex PCR; nitazoxanide 500 mg BID ×3 d; chlorine-resistant oocysts → filtration/UV/ozone) + `[[idsa-2017-infectious-diarrhea]]` (Rec 12 — AIDS persistent-diarrhea *Cryptosporidium* testing). Added `idsa-2017-infectious-diarrhea` to frontmatter. `updated: 2026-07-07`. Index desc `(stub)` → `(2 sources)`.

**Med stubs created (2 — to resolve new inline links, per "create the stub first" rule):**
- `[[loperamide]]` (`5-meds/`) — peripheral μ-opioid antimotility; immunocompetent-adult watery diarrhea only, avoid <18 y and febrile/inflammatory diarrhea. Frontmatter `sources: []` (referenced by ACG 2016 / IDSA 2017; full page pending).
- `[[nitazoxanide]]` (`5-meds/`) — antiprotozoal for `[[cryptosporidiosis]]` / `[[giardiasis]]`. Both added to `index.md` Meds and counted.

**Stalest-page validation (2 pages):**
- `[[gerd]]` (disease-script, was `updated: 2026-05-16`) — removed double blank line under `## See Also`; ADDT order, Lyon 2.0 framework, See Also/Sources format otherwise compliant; `updated: 2026-07-07`.
- `[[irritable-bowel-syndrome]]` (disease-script, was `updated: 2026-05-19`) — removed double blank line under `## See Also`; DDx pointer, secretagogue content, See Also/Sources compliant; `updated: 2026-07-07`.

**Broken-link scan:** Whole-wiki basename-resolution scan (excluding `![[embeds]]`, code fences/spans, escaped `\|` table aliases, `log.md`). **0 broken links** across 412 pages, both before and after adding the loperamide/nitazoxanide stubs (which resolve the new norovirus/cryptosporidiosis links).

**Index reconciliation:** Meds **15 → 17** (loperamide, nitazoxanide added). On-disk counts now: 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 17 meds, 0 anatomy, 36 concepts, 208 sources, 1 synthesis. Count line and index frontmatter dated 2026-07-07. Two `(stub)` markers cleared (norovirus, cryptosporidiosis).

**Hygiene flagged (not fixed — permission blocked):** 15 `.DS_Store` OS artifacts across repo; sandbox-mount deletion returns "Operation not permitted" (unchanged). Untracked via `.gitignore`; user action needed.

**Stubs remaining (flagged, not expanded — token budget):** ~37 files still carry a `*Stub — to be expanded*` marker (plus 2 new thin med stubs). High-value candidates expandable next pass from already-ingested sources: remaining enteric cluster (`[[rotavirus]]`, `[[entamoeba-histolytica-infection]]`) from `[[acg-2016-acute-diarrhea]]`/`[[idsa-2017-infectious-diarrhea]]`; `[[radiofrequency-ablation]]` from Barrett's EET sources; hepatology stubs (`[[noninvasive-liver-disease-assessment]]`, `[[li-rads]]`, `[[iron-overload-and-iron-metabolism]]`) from ingested AASLD sources. `[[acute-mesenteric-ischemia]]` still needs a dedicated arterial-AMI source.

**Lectures available (gated — NOT auto-ingested):** ~60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name.

---

## [2026-07-06] lint | Ingest queue re-confirmed exhausted (no-op), shigellosis + ETEC stubs expanded (ADDT), 2 stalest pages validated, whole-wiki link scan (scheduled ingest-and-lint pass)

**Ingest:** None. Re-verified all **208** `raw/GI Guidelines/` PDFs and all **4** `raw/GI RCTs/` files against `wiki/sources/` slugs — every priority-tier source is ingested; no raw file is newer than 2026-06-28. Only uningested guideline files remain `ASGE 2015 Bowel Preparation` and `ASGE 2025 Bowel Preparation Quality`, deliberately skipped as superseded duplicates fully covered by `[[acg-2025-bowel-prep]]` / `[[usmstf-2025-bowel-prep]]`. Priority queue exhausted → lint-only pass. Lectures gated, not auto-ingested.

**Stubs expanded (2 — from already-ingested sources only):**
- `[[shigellosis]]` — cleared stale `*Stub*` marker; restructured content-rich page into full **ADDT** (Assessment: Establishing Dx + Severity → Differential with `*Workup: see [[acute-diarrhea]].*` → Diagnostics → Therapeutics). All claims retained from existing `[[acg-2016-acute-diarrhea]]` + `[[idsa-2017-infectious-diarrhea]]` (azithromycin first-line, ampicillin/TMP-SMX resistance, emerging *S. sonnei* azithro resistance, empiric-therapy dysentery exception, *S. dysenteriae* type-1 Shiga toxin/HUS, very-low-inoculum infection control, no rifaximin). `updated: 2026-07-06`. Index desc updated, `(stub)` → `(2 sources)`.
- `[[enterotoxigenic-e-coli]]` — cleared stale `*Stub*` marker; ADDT restructure from `[[acg-2016-acute-diarrhea]]` (most common TD pathogen, watery/non-bloody/afebrile, FQ or azithromycin + loperamide adjunct per Rec 8, rifaximin appropriate for non-invasive ETEC, high inoculum vs *Shigella*, STEC/EHEC contrast — no antibiotics). `updated: 2026-07-06`. Index desc updated, `(stub)` → `(1 source)`.

**Stalest-page validation (2 pages, both `updated: 2026-05-16`; the three stalest are source pages, exempt from ADDT/Style validation):**
- `[[drug-induced-liver-injury]]` (disease-script) — added missing DDx diagnostic-schema pointer `*Workup: see [[abnormal-liver-chemistries]].*`; fixed double blank line under `## See Also`; removed unrelated `[[helicobacter-pylori-infection]]` from See Also; `updated: 2026-07-06`. Content otherwise ADDT-compliant (R-value, Hy's Law, RUCAM, biopsy indications, culprit table all sourced).
- `[[gastric-intestinal-metaplasia]]` (disease-script) — validated fully compliant (ADDT order, OLGA/OLGIM staging, Sydney protocol, surveillance guideline-disagreement table, inline links, See Also/Sources); no schema pointer applicable (no dedicated GIM workup schema); `updated: 2026-07-06`.

**Broken-link scan:** Whole-wiki basename-resolution scan (excluding `![[embeds]]`, code fences, escaped `\|` table aliases, `index.md`/`log.md`). **0 broken links.** New shigellosis/ETEC/DILI links all resolve. Confirmed candidate links `travelers-diarrhea`, `azithromycin`, `fluoroquinolones` have no page — left as plain text (no broken links, no premature stubs).

**Index reconciliation:** On-disk counts re-verified and unchanged: 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 15 meds, 0 anatomy, 36 concepts, 208 sources, 1 synthesis. Two `(stub)` markers cleared. Count-line and index frontmatter dated 2026-07-06.

**Hygiene flagged (not fixed — permission blocked):** 15 `.DS_Store` OS artifacts across repo; sandbox-mount deletion returns "Operation not permitted" (unchanged). Untracked via `.gitignore`; user action needed.

**Stubs remaining (flagged, not expanded — token budget):** ~37 files still carry a `*Stub — to be expanded*` marker. High-value candidates expandable next pass from already-ingested sources: remaining enteric cluster (`[[norovirus]]`, `[[cryptosporidiosis]]`, `[[entamoeba-histolytica-infection]]`, `[[rotavirus]]`) from `[[acg-2016-acute-diarrhea]]`/`[[idsa-2017-infectious-diarrhea]]`; `[[radiofrequency-ablation]]` from Barrett's EET sources; hepatology stubs (`[[noninvasive-liver-disease-assessment]]`, `[[li-rads]]`, `[[iron-overload-and-iron-metabolism]]`) from ingested AASLD sources. `[[acute-mesenteric-ischemia]]` still needs a dedicated arterial-AMI source (cannot expand without one).

**Lectures available (gated — NOT auto-ingested):** ~60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name.

---

## [2026-07-02] lint | Ingest queue exhausted (no-op), salmonella + campylobacter stubs expanded (ADDT), 3 stalest pages validated, whole-wiki link scan (scheduled ingest-and-lint pass)

**Ingest:** None. No new raw files since the prior pass (newest raw = 2026-06-28, already ingested). All **208** guideline files and all 4 RCTs are ingested; the only uningested guideline files remain `ASGE 2015 Bowel Preparation` and `ASGE 2025 Bowel Preparation Quality`, deliberately skipped as superseded duplicates fully covered by `[[acg-2025-bowel-prep]]` / `[[usmstf-2025-bowel-prep]]`. Priority-tier (guideline/RCT) queue exhausted → lint-only pass. Lectures gated, not auto-ingested.

**Stubs expanded (2 — from already-ingested sources only):**
- `[[salmonella-infection]]` — restructured `*Stub*` → full **ADDT** (Assessment: Establishing Dx + Severity → Differential with `*Workup: see [[acute-diarrhea]].*` → Diagnostics → Therapeutics). All claims retained from existing `[[acg-2016-acute-diarrhea]]` + `[[idsa-2017-infectious-diarrhea]]` content (no antibiotics in immunocompetent — prolongs carriage; treat severe/invasive/high-risk; endovascular-seeding imaging; typhoid distinction; no rifaximin). Densified DDx inline links (`[[campylobacter-infection]]`, `[[shigellosis]]`, `[[enterotoxigenic-e-coli]]`, `[[clostridioides-difficile]]`); `updated: 2026-07-02`. Index desc updated, `(stub)` → `(2 sources)`.
- `[[campylobacter-infection]]` — same ADDT restructure from `[[acg-2016-acute-diarrhea]]` + `[[idsa-2017-infectious-diarrhea]]` (most common bacterial enteritis; FQ resistance → azithromycin 500 mg ×3d in SE Asia/India; reserve empiric abx; no rifaximin; Guillain-Barré via ganglioside mimicry, IDSA Rec 7). Densified DDx inline links; `updated: 2026-07-02`. Index desc updated, `(stub)` → `(2 sources)`.

**Stalest-page validation (3 pages, all `updated: 2026-05-16`; the two stalest 05-15 pages `[[laryngopharyngeal-symptoms]]`/`[[upper-gi-bleeding]]` already validated on prior passes):**
- `[[defecation-disorders]]` (disease-script) — content compliant; fixed double blank line under `## See Also`; `updated: 2026-07-02`. (No `constipation`/anorectal-pain diagnostic schema exists, so the DDx-pointer rule N/A.)
- `[[proctalgia-syndromes]]` (disease-script) — fixed double blank line under `## See Also`; `updated: 2026-07-02`.
- `[[vonoprazan]]` (med) — compliant; densified thin See Also (+`[[peptic-ulcer-disease]]`, `[[gerd]]`); `updated: 2026-07-02`.

**Broken-link scan:** Whole-wiki basename-resolution scan (excluding `![[embeds]]`, code spans, escaped `\|` table aliases, `index.md`/`log.md`). **0 genuine broken links** (all 97 flagged targets were false positives from escaped `\|` table-alias pipes; real pages exist). All new salmonella/campylobacter links resolve.

**Index reconciliation:** On-disk counts re-verified and unchanged: 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 15 meds, 0 anatomy, 36 concepts, 208 sources, 1 synthesis. Two `(stub)` markers cleared from index for the expanded pages. Index frontmatter dated 2026-07-02.

**Hygiene flagged (not fixed — permission blocked):** 9 `.DS_Store` OS artifacts remain; sandbox-mount deletion returns "Operation not permitted" (unchanged). Untracked via `.gitignore`; user action needed.

**Stubs remaining (flagged, not expanded — token budget):** ~32 files still carry a `*Stub — to be expanded*` marker. High-value candidates expandable next pass from already-ingested sources: remaining enteric cluster (`[[shigellosis]]` — already content-rich, marker cleanup; `[[norovirus]]`, `[[cryptosporidiosis]]`, `[[entamoeba-histolytica-infection]]`, `[[enterotoxigenic-e-coli]]`) from `[[acg-2016-acute-diarrhea]]`/`[[idsa-2017-infectious-diarrhea]]`; `[[radiofrequency-ablation]]` from Barrett's EET sources. `[[acute-mesenteric-ischemia]]` still needs a dedicated AMI source (cannot expand without one).

**Lectures available (gated — NOT auto-ingested):** ~60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name.

---

## [2026-07-02] lint | Guideline queue confirmed exhausted, giardiasis stub expanded (ADDT), 2 stalest pages validated, whole-wiki link scan (scheduled ingest-and-lint pass)

**Ingest:** None. Cross-checked all **208** raw guideline files in `raw/GI Guidelines/` against ingested `wiki/sources/` slugs — every guideline is ingested. The only uningested guideline files are `ASGE 2015 Bowel Preparation` and `ASGE 2025 Bowel Preparation Quality`, both deliberately skipped on prior passes as superseded duplicates fully covered by `[[acg-2025-bowel-prep]]` / `[[usmstf-2025-bowel-prep]]`. No new priority-tier ingest available; proceeded to lint only.

**Stub expanded (1):**
- `[[giardiasis]]` — was carrying a `*Stub — to be expanded*` marker despite substantial content; restructured into full **ADDT** disease-script format (Assessment/Establishing Dx + Severity → Differential with `*Workup: see [[acute-diarrhea]].*` → Diagnostics → Therapeutics). Added net-new detail from `[[idsa-2017-infectious-diarrhea]]` (duodenal aspirate for suspected *Giardia*/*Strongyloides*/*Cystoisospora*/microsporidia; weak/low). Sources 1→2 (`+idsa-2017-infectious-diarrhea`); densified inline DDx links; `updated: 2026-07-02`. Index description updated, `(stub)` → `(2 sources)`.

**Stalest-page validation (2 pages, both `updated: 2026-05-15/16`):**
- `[[hrm-antireflux-surgery]]` (concept, 2026-05-15) — content compliant; fixed double blank line under `## See Also` and **densified** See Also (+`[[high-resolution-manometry]]`, `[[antireflux-surgery]]`, `[[gerd]]`, `[[chicago-classification-v4]]`, `[[poem]]`); `updated: 2026-07-02`.
- `[[anal-fissure]]` (disease-script, 2026-05-16) — removed a non-standard `*Cross-references: …*` line duplicating See Also (Style Guide violation); fixed double blank line under `## See Also`; `updated: 2026-07-02`.

**Stub NOT expanded (flagged):** `[[acute-mesenteric-ischemia]]` — its only candidate source `[[acg-2020-hepatic-mesenteric-circulation]]` covers mesenteric **vein** thrombosis (MVT) and mesenteric artery aneurysms, **not** the arterial-AMI disease script (embolic/thrombotic SMA occlusion, NOMI, revascularization). Cannot expand without fabricating — left as stub per the no-outside-information rule. Would need a dedicated AMI source ingested.

**Broken-link scan:** Whole-wiki basename-resolution scan (excluding `![[embeds]]`, code spans, table `\|` aliases, `index.md`/`log.md`). **0 broken links**; all new giardiasis links and densified See-Also links resolve.

**Index reconciliation:** On-disk counts re-verified and unchanged: 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 15 meds, 0 anatomy, 36 concepts, 208 sources, 1 synthesis. Index frontmatter dated 2026-07-02.

**Hygiene flagged (not fixed — permission blocked):** 9 `.DS_Store` OS artifacts remain; sandbox-mount deletion returns "Operation not permitted" (unchanged). Untracked via `.gitignore`; user action needed.

**Stubs remaining (flagged, not expanded — token budget):** ~46 files still carry a `*Stub — to be expanded*` marker. High-value candidates expandable next pass from already-ingested sources: enteric-infection cluster (`[[cryptosporidiosis]]`, `[[entamoeba-histolytica-infection]]`, `[[campylobacter-infection]]`, `[[salmonella-infection]]`, `[[shigellosis]]`, `[[norovirus]]`) from `[[acg-2016-acute-diarrhea]]`/`[[idsa-2017-infectious-diarrhea]]`; `[[radiofrequency-ablation]]` from Barrett's EET sources.

**Lectures available (gated — NOT auto-ingested):** ~60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name.

---

## [2026-07-01] ingest | 4 RCTs — WATERFALL fluids, SER-109 for recurrent C. diff, constipation-therapy in gastroparesis, semaglutide for AUD (scheduled ingest-and-lint pass)

**Scope:** Scheduled `ingest-and-lint` run. All remaining raw **guidelines are exhausted** — every uningested guideline is either already ingested or a superseded ASGE bowel-prep duplicate (ASGE 2015 / ASGE 2025 Bowel-Prep, both heavily covered by `[[acg-2025-bowel-prep]]` / `[[usmstf-2025-bowel-prep]]`). The genuine remaining priority-tier (tier-2 primary research) uningested sources were the **4 RCTs**, which the earlier 2026-07-01 pass had flagged as high-value. Ingested all 4. Added **net-new, non-conflicting** detail only.

**Sources created:**
- `[[demadaria-2022-waterfall]]` — WATERFALL RCT (NEJM 2022;387:989-1000). Aggressive vs moderate goal-directed LR in acute pancreatitis; aggressive tripled fluid overload (20.5% vs 6.3%, RR 2.85) without reducing progression (22.1% vs 17.3%, NS); halted early.
- `[[feuerstadt-2022-ser109-cdiff]]` — SER-109 / ECOSPOR III (NEJM 2022;386:220-9). Oral purified Firmicutes spores after SOC antibiotics; 8-wk recurrence 12% vs 40% (RR 0.32); FDA-approved 2023.
- `[[surjanhata-2025-constipation-gastroparesis]]` — Neurogastroenterol Motil 2025;37:e70013. Treating coexisting slow colonic transit improved GCSI in gastroparesis-symptom patients (delayed-emptying subgroup driving benefit); whole-gut WMC evaluation.
- `[[hendershot-2025-semaglutide-aud]]` — JAMA Psychiatry 2025;82:395-405 (Keck USC). Phase 2, n=48; low-dose semaglutide ↓ lab alcohol self-administration, drinks/drinking day, craving; off-label/investigational.

**Pages updated:**
- `[[acute-pancreatitis]]` — Fluid Resuscitation: added WATERFALL evidence block supporting moderate goal-directed LR. Sources +`demadaria-2022-waterfall` (3→4).
- `[[clostridioides-difficile]]` — Recurrent CDI: added SER-109 oral fecal-spore therapeutic option (ECOSPOR III data, FDA 2023). Sources +`feuerstadt-2022-ser109-cdiff` (3→4).
- `[[gastroparesis]]` — Clinical Pearls: added pearl on treating coexisting slow colonic transit to improve upper-GI symptoms. Sources +`surjanhata-2025-constipation-gastroparesis` (2→3).
- `[[semaglutide]]` — new "Investigational: Alcohol Use Disorder (off-label)" section; flagged off-label explicitly. Sources +`hendershot-2025-semaglutide-aud` (2→3).

**Contradictions surfaced:** None conflicting. WATERFALL corroborates the existing ACG 2024 moderate-resuscitation stance; SER-109 complements `[[aga-2024-fmt]]`; the two behavioral/cohort trials are hypothesis-generating with no conflict.

**Index:** added 4 RCT entries under Sources → Other; source total **204→208**; updated 4 entity descriptions/source-counts; concepts unchanged (36). Count-line and index frontmatter dated 2026-07-01.

**Note:** interpreted the task's "up to 4 guidelines" liberally as up to 4 uningested priority-tier sources, since the true guideline queue is exhausted and RCTs outrank lectures in the ingestion priority order.

---

## [2026-07-01] lint | Stalest-page validation (3 pages), stale-stub-marker cleanup, See-Also densification, index reconciliation (scheduled pass)

**Index reconciliation:** On-disk source count **208** matches the updated index count-line (204→208 this pass). All folder counts re-verified on disk: 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 15 meds, 0 anatomy, 36 concepts, 1 synthesis.

**Broken-link scan:** Whole-wiki scan (basename resolution; excluded `![[embeds]]`, code spans, `\|` table aliases, `log.md`/`index.md`). **0 broken links** in content pages; all 4 new source slugs and all new See-Also links resolve. (Avoided a broken `[[fecal-microbiota-transplant]]` link on the C. diff page — no such page exists — used plain text instead; candidate for a future FMT concept page.)

**Stalest-page validation (3 pages, all `updated: 2026-05-15`; the two stalest — `[[laryngopharyngeal-symptoms]]`, `[[upper-gi-bleeding]]` — were already validated on the 2026-06-29 / 2026-07-01 passes):**
- `[[upper-endoscopy]]` — section order/inline links fine; fixed double blank line under `## See Also` and **densified See Also** (+`[[peptic-ulcer-disease]]`, `[[barretts-esophagus]]`, `[[celiac-disease]]`); `updated: 2026-07-01`.
- `[[disorders-of-gut-brain-interaction]]` — thin single-item See Also; **densified** to `[[irritable-bowel-syndrome]], [[dyspepsia]], [[gastroparesis]], [[test-and-treat]]`; `updated: 2026-07-01`.
- `[[endoscopic-oncology]]` — well-developed concept page carrying a **stale `*Stub — to be expanded*` marker**; removed the marker (page is substantively complete), fixed double blank line; index description corrected to (2 sources); `updated: 2026-07-01`.

**Hygiene flagged (not fixed — permission blocked):** 9 `.DS_Store` OS artifacts remain; sandbox-mount deletion returns "Operation not permitted" (unchanged from prior passes). `.gitignore` lists `.DS_Store` so they are untracked — user action needed.

**Stubs remaining (flagged, not expanded — token budget):** ~46 files still contain a `*Stub — to be expanded*` marker. No stub expanded this pass to respect the "do not exceed token limit" constraint after a 4-RCT ingest. High-value candidates expandable from already-ingested sources next pass: `[[acute-mesenteric-ischemia]]` (`[[acg-2020-hepatic-mesenteric-circulation]]`), `[[radiofrequency-ablation]]` (Barrett's EET sources), enteric-infection cluster (`[[giardiasis]]`, `[[norovirus]]`, `[[cryptosporidiosis]]`) from `[[acg-2016-acute-diarrhea]]`/`[[idsa-2017-infectious-diarrhea]]`.

**Lectures available (gated — NOT auto-ingested):** ~60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name.

---

## [2026-07-01] ingest | 4 older ASGE Standards-of-Practice guidelines — antithrombotics, preprocedure lab testing, EUS mediastinal adenopathy, enteral feeding (scheduled ingest-and-lint pass)

**Scope:** Scheduled `ingest-and-lint` run. Ingested **4** of the remaining uningested raw guidelines (all older ASGE technical/Standards-of-Practice docs) per the task's "up to 4 guidelines" directive. These are the genuine remaining gap-fillers flagged by the 2026-06-29 pass. Per source-priority rules, added **net-new, non-conflicting** detail only — did not overwrite claims from newer ACG/ASGE guidelines already on the entity pages.

**Sources created:**
- `[[asge-2016-antithrombotic]]` — The Management of Antithrombotic Agents for Patients Undergoing GI Endoscopy (Gastrointest Endosc 2016;83:3-16). Full verbatim recs (elective + urgent, AC + APA).
- `[[asge-2014-lab-testing-endoscopy]]` — Routine Laboratory Testing Before Endoscopic Procedures (Gastrointest Endosc 2014;80:28-33). 8 GRADE recs (verbatim).
- `[[asge-2011-eus-mediastinal-adenopathy]]` — EUS-Guided FNA in the Diagnosis of Mediastinal Adenopathy (Gastrointest Endosc 2011;74:239-245). 4 recs (verbatim).
- `[[asge-2011-enteral-feeding]]` — The Role of Endoscopy in Enteral Feeding (Gastrointest Endosc 2011;74:7-12). 6 GRADE recs (verbatim).

**Pages updated / created:**
- `[[anticoagulation-gi-bleeding]]` — added the drug-specific **duration-of-action / hold-interval / reversal reference table** (ASGE Table 2, erratum-corrected) + pre-procedure hold intervals as net-new content complementing the ACG/CAG 2022 framework. Sources +`asge-2016-antithrombotic` (1→2).
- `[[preprocedure-testing]]` — **new concept page** (selective, risk-based pre-endoscopy labs; test-by-test table; pregnancy testing before fluoroscopy). From `asge-2014-lab-testing-endoscopy`.
- `[[endoscopic-ultrasound]]` — added "EUS in Mediastinal Adenopathy / Lung-Cancer Staging" section (EUS vs EBUS accessible stations, combined-modality NPV ≈ mediastinoscopy, station-5 first-line, lymphoma flow cytometry + core biopsy). Sources +`asge-2011-eus-mediastinal-adenopathy` (3→4).
- `[[nutrition-in-hospitalized-patients]]` — expanded Enteral Access with the 30-day nasoenteric-vs-percutaneous rule, PEGJ/DPEJ indications ([[gerd]]/[[gastroparesis]]/aspiration), IV antibiotic prophylaxis, early feeding, and PEG complications. Sources +`asge-2011-enteral-feeding` (2→3).

**Contradictions surfaced (newer source governs):** ASGE 2016 suggests bridging for high-thrombotic-risk patients and readier warfarin reversal (PCC/FFP); the newer `[[acg-cag-2022-anticoag-gi-bleeding]]` suggests **against** routine bridging (BRIDGE/PERIOP-2, except mechanical valves) and reserves reversal agents for life-threatening bleeding — wiki claim follows ACG/CAG 2022. Flagged on both the source page and the concept page.

**Index:** added 4 ASGE source entries + `[[preprocedure-testing]]` concept; updated 3 entity descriptions/source-counts; source total 200→204 on disk, concepts 35→36.

**Remaining uningested guidelines (reported, not ingested — older/superseded):** ASGE 2015 Bowel Preparation Before Colonoscopy (superseded by ACG/ASGE 2025), ASGE 2025 Bowel Preparation Quality (heavily covered by `[[acg-2025-bowel-prep]]`/`[[usmstf-2025-bowel-prep]]`). ASGE/USMSTF 2016 CRC-surveillance and 2017 FIT co-publications confirmed to be **already ingested** as the USMSTF versions (`[[usmstf-2015-crc-surveillance]]`, `[[usmstf-2016-fit-screening]]`); "ASGE 2025 GERD" = already-ingested `[[asge-2024-gerd]]` (VideoGIE 2025, DOI 2024). **RCTs (tier-2, uningested):** WATERFALL, constipation-on-gastroparesis, oral-microbiome C. diff, semaglutide-AUD — high-value for a future pass.

---

## [2026-07-01] lint | Index reconciliation (2 unindexed sources), empty See-Also fix, stub expansion (scheduled pass)

**Index reconciliation:** On-disk source count is **204** (index count-line was stale at 198). Found **2 pre-existing source pages missing from the index Sources section** — `[[asge-2015-gastric-premalignant]]` and `[[asge-2016-solid-pancreatic-neoplasia]]` — and added index entries for both. Count-line corrected to **204 sources | 36 concepts** and dated 2026-07-01. All folder counts re-verified on disk (107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 15 meds, 0 anatomy, 36 concepts, 1 synthesis).

**Broken-link scan:** Whole-wiki scan (excluding `![[embeds]]`, code spans, `log.md`/`index.md`, and escaped `\|` table aliases). One genuine broken link found and fixed — `[[endoscopic-sedation]]` → `[[endoscopy-sedation]]` in `[[asge-2014-lab-testing-endoscopy]]` (introduced this pass). No other broken links; no duplicate basenames.

**Stalest-page validation:** Checked the stalest non-source content pages (`updated: 2026-05-15`).
- `[[upper-gi-bleeding]]` — diagnostic-schema section order correct, inline links present, `## See Also` + `## Sources` well-formed → no changes.
- `[[fever-returning-traveler]]` — **empty `## See Also` (style violation)**; added a comma-separated link line (`[[acute-diarrhea]], [[entamoeba-histolytica-infection]], [[giardiasis]], [[chronic-hepatitis-b]], [[acute-liver-failure]], [[abnormal-liver-chemistries]]`); `updated: 2026-07-01`.

**Stub expanded (1; from already-ingested source only):** `[[colonoscopy-surveillance]]` — expanded from `*Stub*` to a full concept page using the already-ingested `[[usmstf-2020-followup-colonoscopy]]` (adenoma / serrated-polyp / serial-surveillance interval tables, high-quality-exam prerequisite, definitions). Frontmatter `sources:` +`usmstf-2020-followup-colonoscopy`; index description updated (stub marker removed); `updated: 2026-07-01`.

**Hygiene flagged (not fixed — permission blocked):** 9 `.DS_Store` OS artifacts remain; sandbox-mount deletion returns "Operation not permitted" (unchanged from prior passes). `.gitignore` lists `.DS_Store` so they are untracked — user action needed to remove working-copy files.

**Stubs remaining (flagged for triage):** 38 `*Stub*` pages remain after this expansion. High-value candidates expandable from already-ingested sources next pass: `[[radiofrequency-ablation]]` (Barrett's EET sources), `[[acute-mesenteric-ischemia]]` (`[[acg-2020-hepatic-mesenteric-circulation]]`), the enteric-infection cluster (`[[giardiasis]]`, `[[norovirus]]`, `[[rotavirus]]`, `[[cryptosporidiosis]]`) from `[[acg-2016-acute-diarrhea]]`/`[[idsa-2017-infectious-diarrhea]]`. Cap is 1-2/pass.

**Lectures available (gated — NOT auto-ingested):** ~60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/` remain gated; require explicit human selection by name (not ingested on this unattended pass).

---

## [2026-06-29] lint | Link integrity + index reconciliation + stalest-page validation + stub expansion (scheduled pass)

**Link integrity:** Whole-wiki broken-link scan (399 pages; basename resolution, excluding `![[embeds]]`, code spans, and fenced blocks) — **0 broken `[[links]]` in wiki content pages**. The only 3 unresolved targets (`[[esophageal-manometry]]`, `[[hrem]]`, `[[wiki-links]]`) appear solely in `log.md` historical entries / the log-format example — not in pages; no stubs created (per the guard against stubbing from documentation/example text).

**Index reconciliation:** On-disk category counts verified against the index count-line — all exact: 198 sources, 107 disease scripts, 19 diagnostic schemas, 2 general procedures, 19 advanced procedures, 15 meds, 0 anatomy, 35 concepts, 1 synthesis. Count-line date bumped to 2026-06-29 (done in ingest).

**Stalest-page validation:** Checked the next-stalest pages not covered by the 2026-06-28 pass (all `updated: 2026-05-15`):
- `[[laryngopharyngeal-symptoms]]` — diagnostic-schema order correct, inline links present, `## See Also` + `## Sources` well-formed, not a stub, source resolves → no changes (date left as-is).
- `[[antibiotic-prophylaxis-cirrhosis]]` — **stub expanded** (see below).

**Stub expanded (1; from already-ingested source only):** `[[antibiotic-prophylaxis-cirrhosis]]` — removed the `*Stub*` marker and expanded using the already-ingested `[[aasld-2021-ascites-sbp-hrs]]` guideline (tier-1, supersedes the journal-club review for the agent/duration claims): added the SBP-primary-prophylaxis framing + acute-GI-hemorrhage indication, and corrected the agent guidance (**norfloxacin withdrawn from US market 2014 → ciprofloxacin 500 mg/day**; IV ceftriaxone during hemorrhage). Frontmatter `sources:` +`aasld-2021-ascites-sbp-hrs`, `## Sources` updated, index description updated, `updated: 2026-06-29`.

**Hygiene flagged (not fixed — permission blocked):** 13 `.DS_Store` OS artifacts remain across the vault; sandbox-mount deletion returns "Operation not permitted" (unchanged from prior passes). `.gitignore` already lists `.DS_Store`, so they are untracked — user action needed to remove the working-copy files.

**Stubs remaining (flagged for triage — not expanded this pass, token budget):** ~47 `*Stub*` pages remain. High-value candidates expandable from already-ingested sources for the next pass: `[[hereditary-pancreatitis]]`, `[[microscopic-colitis]]`, `[[acute-mesenteric-ischemia]]`, `[[obesity]]`, `[[poem]]`, `[[endoscopic-submucosal-dissection]]`, `[[antireflux-surgery]]`, and the bacterial-enteritis cluster (`[[salmonella-infection]]`, `[[campylobacter-infection]]`, `[[shigellosis]]`) likely covered by `[[acg-2016-acute-diarrhea]]`/`[[idsa-2017-infectious-diarrhea]]`. Cap is 1–2/pass.

**Lectures available (gated — NOT auto-ingested):** 60 lecture/chalk-talk transcripts in `raw/GI Lectures+Chalk Talks/`. Per the lecture-gating rule these require explicit human selection by name and were not ingested on this unattended pass. The user should name which (if any) to ingest.

---

## [2026-06-29] ingest | 3 older ASGE Standards-of-Practice guidelines — FAP endoscopy, biliary neoplasia, benign pancreatic disease (scheduled ingest-and-lint pass)

**Scope:** Scheduled `ingest-and-lint` run. Ingested 3 of the remaining uningested raw guidelines (all older ASGE Standards-of-Practice docs). Per source-priority rules, added **net-new, non-conflicting** detail only — did not overwrite claims from newer ACG/ASGE/NCCN guidelines already on the entity pages. Done serially (3 sources) to respect the token budget; remaining uningested ASGE technical reviews + 4 RCTs reported below for a future pass. Targeted 3 (not 4) because the highest-value gap-fillers with existing home pages were exhausted and the remainder are niche/superseded or need a new page.

**Sources created:**
- `[[asge-2020-fap]]` — Role of Endoscopy in Familial Adenomatous Polyposis Syndromes (Gastrointest Endosc 2020;91:963–982). 17 GRADE recs (verbatim).
- `[[asge-2013-biliary-neoplasia]]` — Role of Endoscopy in the Evaluation and Treatment of Patients With Biliary Neoplasia (Gastrointest Endosc 2013;77:167–174). 7 GRADE recs (verbatim).
- `[[asge-2015-benign-pancreatic-disease]]` — Role of Endoscopy in Benign Pancreatic Disease (Gastrointest Endosc 2015;82:203–214). 11 GRADE recs (verbatim).

**Pages updated:**
- `[[familial-adenomatous-polyposis]]` — added clinical-polyposis testing threshold (≥10/one exam, ≥20/lifetime); ASGE endoscopic upper-GI management (interval by most-affected organ, random+targeted biopsy for Spigelman staging, Spigelman score 7 ↔ duodenal HGD, resect gastric/duodenal polyps >1 cm + all antral polyps, ampullary exam with duodenoscope/cap-assisted gastroscope, biopsy ampulla only if mucosal abnormality, no routine chromoendoscopy/deep enteroscopy); pouch/ileoscopy 1–2 y + IRA sigmoidoscopy 6 mo–1 y; sulindac+erlotinib (71% duodenal-polyp reduction) + tertiary-center/trial chemoprevention. Frontmatter sources `acg-2015-hereditary-gi-cancer` → +`asge-2020-fap`.
- `[[gallbladder-cancer]]` — added Gallbladder Polyps risk-stratification table (symptomatic or >10 mm → cholecystectomy; 6–10 mm no risk factors → US q12mo; any GBP in PSC → cholecystectomy); +`asge-2013-biliary-neoplasia`.
- `[[acute-pancreatitis]]` — added Idiopathic/recurrent AP + SOD block (no diagnostic ERCP for a single episode; EUS for idiopathic AP >40 y; treat SOD type 1 / manometry-confirmed type 2; never scope type 3 — EPISOD-aligned; rectal indomethacin ± PD stent for PEP prophylaxis); +`asge-2015-benign-pancreatic-disease`.

**Not duplicated (newer source governs):** `[[cholangiocarcinoma]]` — ASGE 2013's EUS/MRC/ERCP-tissue points already covered by newer `[[asge-2021-malignant-hilar-obstruction]]`/`[[asge-2023-indeterminate-biliary-strictures]]`/`[[nccn-2026-biliary-tract-cancers]]`; only the GBP-polyp content was net-new (→ gallbladder-cancer). `[[chronic-pancreatitis]]` — ASGE 2015's CP endotherapy (ERP dilation/stent, ESWL, PD-leak stenting, EUS/ePFT) already present from newer `[[asge-2024-chronic-pancreatitis-endoscopy]]`; no edit.

**Index:** added 3 ASGE source entries; updated `[[familial-adenomatous-polyposis]]` (1→2 sources), `[[gallbladder-cancer]]` (1→2), `[[acute-pancreatitis]]` (2→3) descriptions; total source count 195 → 198; count-line date bumped to 2026-06-29.

**Remaining uningested (reported, not ingested):**
- *Older ASGE Standards-of-Practice guidelines:* ASGE 2011 EUS for Mediastinal Adenopathy, ASGE 2011 Endoscopy in Enteral Feeding (no feeding-tube/PEG home page yet — would need a new general-procedure page), ASGE 2014 Laboratory Testing Before Endoscopy, ASGE 2015 Bowel Preparation Before Colonoscopy (superseded by ACG/ASGE 2025), ASGE 2015 Endoscopy in Benign Pancreatic Disease (done), ASGE 2015 Premalignant/Malignant Conditions of the Stomach (superseded by ACG 2025 gastric premalignant), ASGE 2016 Antithrombotic Agents (superseded by ACG-CAG 2022), ASGE 2016 Solid Pancreatic Neoplasia (superseded by ASGE 2024), ASGE 2025 Bowel Preparation Quality, ASGE/USMSTF 2016 & 2017 (likely duplicates of already-ingested USMSTF versions).
- *RCTs (tier-2, uningested):* WATERFALL (fluid resuscitation in AP), Constipation therapies on gastroparesis severity, Oral microbiome therapy for C. diff, Semaglutide for AUD. High-value candidates for the next pass.

---

## [2026-06-28] ingest | 3 older ASGE procedural guidelines — PUD endoscopy, ERCP for benign biliary, inflammatory pancreatic fluid collections (scheduled ingest-and-lint pass)

**Scope:** Scheduled `ingest-and-lint` run. Ingested 3 of the remaining uningested raw guidelines (all older ASGE Standards-of-Practice docs). Per source-priority rules, added **net-new, non-conflicting** procedural detail only — did not overwrite claims from newer ACG/ASGE guidelines already on the entity pages. Done serially (3 sources) to respect the token budget; remaining uningested ASGE technical reviews reported below for a future pass.

**Sources created:**
- `[[asge-2010-pud]]` — The Role of Endoscopy in the Management of Patients With Peptic Ulcer Disease (Gastrointest Endosc 2010;71:663–668). 12 GRADE recs (verbatim).
- `[[asge-2015-ercp-benign-biliary]]` — The Role of ERCP in Benign Diseases of the Biliary Tract (Gastrointest Endosc 2015;81:795–803). 10 GRADE recs (verbatim).
- `[[asge-2016-pancreatic-fluid-collections]]` — Endoscopy in Inflammatory Pancreatic Fluid Collections (Gastrointest Endosc 2016;83:481–488). 12 GRADE recs (verbatim).

**Pages updated:**
- `[[peptic-ulcer-disease]]` — added DU-no-routine-biopsy, individualized GU biopsy/surveillance, early EGD + repeat therapy for bleeding, no scope in perforation, benign gastric-outlet-obstruction balloon dilation; de-stubbed; fixed empty frontmatter `sources:` (now lists `acg-2021-ugib`, `asge-2010-pud`).
- `[[ercp]]` — expanded stub: SOD typing (treat I, not III — EPISOD), first-line ERCP for bile leaks, congenital choledochocele/choledochal cyst, no routine pre-cholecystectomy ERCP; filled Key Concepts (EPLBD, cholangioscopy-guided lithotripsy, FCSEMS for benign strictures, altered-anatomy access).
- `[[acute-pancreatitis]]` — added endoscopic PFC drainage indications/thresholds (exclude neoplasm/pseudoaneurysm, wait for wall maturation, drain symptomatic/enlarging pseudocysts + infected PFCs + sterile necrosis >8 wk, EUS when no bulge/portal HTN, surgical/IR backup).

**Index:** added 3 ASGE source entries; updated `[[peptic-ulcer-disease]]` (2 sources, de-stub), `[[acute-pancreatitis]]` (1→2 sources), `[[ercp]]` (→6 sources, de-stub) descriptions; total source count 192 → 195; count-line date bumped to 2026-06-28.

**Remaining uningested (reported, not ingested — older ASGE technical reviews/guidelines):** `ASGE 2011 EUS for Mediastinal Adenopathy`, `ASGE 2011 Endoscopy in Enteral Feeding`, `ASGE 2013 Biliary Neoplasia`, `ASGE 2014 Laboratory Testing Before Endoscopy`, `ASGE 2015 ERCP in Benign Biliary` (done), `ASGE 2015 Endoscopy in Benign Pancreatic Disease`, `ASGE 2015 Premalignant/Malignant Conditions of the Stomach`, `ASGE 2016 Antithrombotic Agents` (superseded by ACG-CAG 2022), `ASGE 2016 Solid Pancreatic Neoplasia` (superseded by ASGE 2024), `ASGE 2020 Endoscopy in FAP`. Candidates for next pass: FAP endoscopy, benign pancreatic disease, EUS-mediastinal.

---

## [2026-06-28] lint | Hygiene + link integrity + stalest-page check (scheduled pass)

**Link integrity:** Whole-wiki broken-link scan (basename resolution, excluding code spans/fences and escaped table pipes `\|`) — **0 genuinely broken `[[links]]`**. All links added this pass (`cholangioscopy`, `choledocholithiasis`, `biliary-stricture`, `endoscopic-ultrasound`, `pancreatic-cysts`, `endoscopic-ultrasound`) resolve to existing pages.

**Stalest-page validation:** Checked the 3 least-recently-updated entity pages (`[[upper-gi-bleeding]]`, `[[upper-endoscopy]]`, `[[fever-returning-traveler]]`, all `updated: 2026-05-15`) — all have correct `## See Also` + `## Sources` bottom sections, none are stubs, no format violations found. Left as-is (dates not bumped — no edits needed).

**Hygiene flagged (not fixed — permission blocked):** 13 `.DS_Store` OS artifacts remain across the vault (root, `KHNL-GI-Wiki/`, several `wiki/` and `raw/` subdirs, `.obsidian/`, `.git/`); deletion returned "Operation not permitted" from the sandbox mount. No `.gitignore` present at repo root — recommend adding one with `.DS_Store` so these stop being tracked. User action needed to remove them.

**Connectivity:** Ingest pass added inbound links to `[[cholangioscopy]]`, `[[choledocholithiasis]]`, `[[endoscopic-ultrasound]]`, `[[biliary-stricture]]` from the 3 updated entity pages.

---

## [2026-06-27] ingest | 8 guidelines via 4 parallel subagents — AGA CRC resection/blood tests, noncolorectal IBD, hEDS; ASGE sedation, antibiotic prophylaxis, ampullary adenoma, subepithelial lesions (3rd pass)

**Scope:** User-requested 3rd `ingest-and-lint` pass. Fanned out **4 parallel `general-purpose` subagents** (2 sources each) per the schema's parallel-ingest pattern; subagents did per-source page work and returned proposals; coordinator serialized all shared writes (`index.md`, `log.md`). 8 previously-uningested guidelines ingested (4 AGA, 4 ASGE). Net-new/corroborating only.

**Sources created:**
- `[[aga-2025-endoscopic-resection-crc]]` — Endoscopic Resection for Early CRC (Gastroenterology 2025;169:1558–1564). Commentary.
- `[[aga-2025-crc-blood-tests]]` — Blood Tests for CRC Screening (Clin Gastroenterol Hepatol 2025;23:1486–1491). Commentary.
- `[[aga-2025-noncolorectal-cancer-ibd]]` — Noncolorectal Cancer Screening & Vaccinations in IBD (Clin Gastroenterol Hepatol 2025;23:695–706). 13 BPA (verbatim).
- `[[aga-2025-heds-gi]]` — GI Manifestations & Autonomic/Immune Dysfunction in Hypermobile EDS (Clin Gastroenterol Hepatol 2025;23:1291–1302). 16 BPA (verbatim).
- `[[asge-2018-sedation]]` — Sedation & Anesthesia in GI Endoscopy (Gastrointest Endosc 2018;87:327–337). 8 GRADE recs.
- `[[asge-2015-antibiotic-prophylaxis]]` — Antibiotic Prophylaxis for GI Endoscopy (Gastrointest Endosc 2015;81:81–89). 12 GRADE recs.
- `[[asge-2015-ampullary-duodenal-adenomas]]` — Endoscopy in Ampullary & Duodenal Adenomas (Gastrointest Endosc 2015;82:773–781). 6 recs.
- `[[asge-2017-subepithelial-lesions]]` — Subepithelial Lesions of the GI Tract (Gastrointest Endosc 2017;85:1117–1132). 11 recs.

**Pages created:**
- `[[ampullary-adenoma]]` — new ADDT disease script (HPB): side-viewing exam/biopsy, EUS/ERCP staging, endoscopic papillectomy (PD stent + rectal NSAID prophylaxis), nonampullary duodenal EMR, sporadic vs FAP/PJS, surveillance.
- `[[hypermobile-ehlers-danlos-syndrome]]` — new ADDT disease script (Other): GI manifestations, DGBI overlap, POTS/MCAS associations, Beighton/2017 criteria, motility/pelvic-floor testing, multidisciplinary management.
- `[[endoscopy-sedation]]` — new concept: sedation continuum, ASA class, propofol/MAC vs moderate sedation, capnography, reversal agents.
- `[[antibiotic-prophylaxis-endoscopy]]` — new concept: when periprocedural antibiotics are/aren't indicated (not for IE; incomplete biliary drainage, PEG/PEJ, EUS-FNA of cysts, cirrhosis + GI bleed).

**Pages updated (net-new + sources/cross-links):**
- `[[colorectal-cancer-screening]]` → blood-based screening section (Shield/Freenome performance, CMS criteria, positioning vs FIT/colonoscopy). →2 sources.
- `[[polypectomy]]` → early-T1 CRC endoscopic resection (en-bloc imperative, ESD/eFTR, curative criteria, deep-SMI reappraisal, surveillance). →6 sources.
- `[[colorectal-cancer]]` → early-T1 en-bloc/ESD/eFTR bullet pointing detail to polypectomy-emr. →7 sources.
- `[[ibd-preventive-care]]` → anal cancer surveillance, HPV/HepB seroprotection algorithm, pneumococcal/RSV sequencing, skin-cancer TBSE. →3 sources (was understated as 1 in index — corrected).
- `[[subepithelial-lesion]]` → EUS entity table, tissue-acquisition yields (FNA/FNB/SINK/unroofing), resection-vs-surveillance thresholds (ACG 2023 remains higher-priority on overlap). →2 sources.

**Lint (this pass):** index updated — 8 source entries (AGA ×4, ASGE ×4, reverse-chron), 2 disease-script entries (`ampullary-adenoma` HPB, `hypermobile-ehlers-danlos-syndrome` Other), 2 concept entries; per-page counts corrected. Footer reconciled to live on-disk counts: **192 sources | 107 disease scripts | 19 diagnostic schemas | 2 general procedures | 19 advanced procedures | 15 meds | 0 anatomy | 35 concepts | 1 synthesis**; index Sources section verified to list all 192. Whole-page `[[link]]` scan on all created/edited pages — all resolve by basename; subagents avoided broken links (POTS/MCAS/dysautonomia, FIT/Cologuard/eFTR/tumor-budding rendered as plain text — candidate future pages). Stalest-page validation (`[[celiac-disease]]`, `[[biliary-stricture]]`, both `2026-05-15`): compliant; fixed double blank line under `## See Also`; `updated:` bumped.

**Contradictions surfaced:** deep submucosal invasion as a surgical trigger (USMSTF 2020) vs AGA 2025 individualized organ-preservation (~2.6% LNM, not independent) — flagged on `[[polypectomy]]`; cervical/melanoma screening intensity and RSV vaccination age — AGA 2025 vs existing ACG/ACIP content surfaced on `[[ibd-preventive-care]]`; ASGE 2017 SEL net-new only under newer ACG 2023.

**Remaining for user triage:** `.DS_Store` removal still blocked on mounted volume. Pre-existing source-count drift on `[[polypectomy]]` frontmatter vs `## Sources` (followup-colonoscopy listed in numbered list, not frontmatter) — left as-is. Candidate new pages flagged by subagents: POTS, MCAS, FIT, multitarget-stool-DNA, eFTR. Still-uningested: AGA hemorrhoids duplicate; remaining older ASGE backlog (2010 PUD, 2011 EUS mediastinal/enteral feeding, 2013 biliary neoplasia, 2014 lab testing, 2015 abx-prophylaxis-done, bowel-prep, ERCP benign biliary, benign pancreatic, premalignant stomach, 2016 fluid collections/antithrombotics/solid-pancreatic, 2020 FAP). Persistent source-needed stubs: `[[microscopic-colitis]]`, `[[hiv-aids-related-diarrhea]]`; expandable stub `[[endoscopic-submucosal-dissection]]`.

---

## [2026-06-27] ingest | 4 more AGA CPUs — FLIP esophageal, sclerosing mesenteritis, lifting agents, therapeutic endoscopy in IBD (scheduled ingest-and-lint, 2nd pass)

**Scope:** User-requested second `ingest-and-lint` pass (same day). Ingested 4 additional uningested AGA CPUs from `raw/GI Guidelines/AGA/`. FLIP is an Expert Review with 10 BPA (verbatim); the other three are Commentaries (narrative, no formal BPA) — key clinical claims captured. Net-new/corroborating only; no overwrite of newer content.

**Sources created:**
- `[[aga-2025-flip-esophageal]]` — Incorporating FLIP Into Esophageal Practice (Gastroenterology 2025;169:726–736). 10 BPA verbatim.
- `[[aga-2025-sclerosing-mesenteritis]]` — Sclerosing Mesenteritis (Clin Gastroenterol Hepatol 2025;23:902–907). Commentary.
- `[[aga-2025-lifting-agents]]` — Endoscopic Lifting Agents (Clin Gastroenterol Hepatol 2025;23:1102–1108). Commentary.
- `[[aga-2026-therapeutic-endoscopy-ibd]]` — Role of Therapeutic Endoscopy in IBD (Clin Gastroenterol Hepatol 2026;24:595–601). Commentary.

**Pages created:**
- `[[sclerosing-mesenteritis]]` — new ADDT disease script (`1-disease-scripts/other/`): CT signs (misty mesentery, fat ring sign, tumoral pseudocapsule), biopsy only for atypical/malignancy-concern features, presentation-based management (observe; prednisone 30–40 mg/day + tamoxifen 10 mg BID; thalidomide/cyclophosphamide/methotrexate alternatives; surgery non-curative).

**Pages updated (net-new + sources/cross-links):**
- `[[flip-panometry]]` → new "Indications & Use (AGA 2025)" subsection (EGD before FLIP; use when HRM/TBE inconclusive; normal EGJ opening high NPV; not for GERD; intraprocedural myotomy; EoE remodeling). Source added; `updated:` bumped.
- `[[polypectomy]]` → new "Submucosal Lifting Agents (AGA 2025)" subsection (cushion separates MP, contrast demarcation, saline acceptable, SSLs lift with any agent, ESD needs injection, dynamic injection); added `[[endoscopic-submucosal-dissection]]` See-Also link. Source added; `updated:` bumped.
- `[[crohns-disease]]` → endoscopic stricture-dilation expanded with AGA 2026 therapeutic-endoscopy details (EBD 18–20 mm wire-guided CRE, no intralesional steroids, ≤5 cm predicts surgery-free survival; periprocedural drug holds; fistula drainage > closure). Source added; `## Sources` →9.

**Lint (this pass):** index updated — 4 AGA source entries (reverse-chron in AGA subsection) + `[[sclerosing-mesenteritis]]` (Other disease scripts); per-page counts corrected (`crohns-disease` →9, `flip-panometry` →2, `polypectomy-emr` →5). Footer reconciled to live on-disk counts: **184 sources | 105 disease scripts | 19 diagnostic schemas | 2 general procedures | 19 advanced procedures | 15 meds | 0 anatomy | 33 concepts | 1 synthesis**. Whole-page `[[link]]` scan on all created/edited pages — all resolve by basename (broken candidate links rewritten to plain text or valid slugs: lymphoma/peritoneal carcinomatosis/corticosteroids/mesenteric-panniculitis/EGJOO).

**Remaining for user triage (unchanged + carried):** `.DS_Store` removal still blocked on mounted volume. Still-uningested high-value AGA CPUs: Noncolorectal Cancer Screening/Vaccinations in IBD, Endoscopic Resection for Early CRC, Blood Tests for CRC Screening, GI Manifestations in hypermobile EDS. Uningested ASGE backlog persists. Persistent source-needed stubs: `[[microscopic-colitis]]`, `[[hiv-aids-related-diarrhea]]`. New stub `[[endoscopic-submucosal-dissection]]` is expandable from `[[asge-2023-esd]]` on a future pass.

---

## [2026-06-27] ingest | 4 AGA 2026 Clinical Practice Updates (C. difficile in IBD, HCC surveillance, gastric polyps, inpatient IBD) (scheduled ingest-and-lint)

**Scope:** Automated scheduled `ingest-and-lint`. Ingested 4 high-value, gap-filling AGA 2026 CPUs from `raw/GI Guidelines/AGA/` (task cap = up to 4). All four are the newest same-tier sources on their topics; layered as net-new/corroborating content onto existing pages — no overwrite of newer content. Raw `AGA 2026 CPU Hemorrhoids (duplicate).pdf` and prior duplicates left un-ingested.

**Sources created:**
- `[[aga-2026-cdiff-ibd]]` — Management of C. difficile Infection in IBD (Gastroenterology 2026;171:184–192). 12 BPA (verbatim).
- `[[aga-2026-hcc-surveillance]]` — Risk Stratification and Emerging Surveillance Strategies for HCC (Gastroenterology 2026;170:1606–1615). 8 BPA (verbatim) + Table 1 at-risk populations.
- `[[aga-2026-gastric-polyps]]` — Management of Gastric Polyps (Clin Gastroenterol Hepatol 2026;24:893–905). 14 BPA (verbatim) + subtype/natural-history detail.
- `[[aga-2026-inpatient-ibd]]` — Inpatient Management of Adults With IBD (Gastroenterology 2026;170:408–417). 13 BPA (verbatim).

**Pages created:**
- `[[hcc-surveillance]]` — **stub expanded** into a full concept framework (who to survey [Table 1], US+AFP modality/interval, harms, emerging biomarkers [GALAD; no MCD panels], risk scores [PAGE-B/REAL-B], prevention). Sourced to `[[aga-2026-hcc-surveillance]]` + `[[aasld-2023-hcc]]`.
- `[[gastric-polyps]]` — new concept page (subtype table with background mucosa + malignant potential; evaluate polyp + field; H. pylori test/treat; resection; histology-keyed surveillance).
- `[[endoscopic-submucosal-dissection]]` — stub created (warranted; resolves links from `[[gastric-polyps]]`; expandable from `[[asge-2023-esd]]`).

**Pages updated (net-new content + sources/cross-links):**
- `[[clostridioides-difficile]]` → IBD special-population block expanded with AGA 2026 guidance (fidaxomicin-preferred initial CDI; multistep toxin testing; treat end-ileostomy/pouch; CMV exclusion at 48–72h; continue immunosuppression, no drug-class differential risk; loperamide adjunct; microbiome therapy [RBL/VOS/FMT] after ≥1 recurrence; OVP secondary prophylaxis). Source added; `updated:` bumped.
- `[[hepatocellular-carcinoma]]` → emerging-biomarker caveat bullet (GALAD/MCD panels not for surveillance; PAGE-B/REAL-B for non-cirrhotic HBV) + link to `[[hcc-surveillance]]`. Source added; `updated:` bumped.
- `[[inflammatory-bowel-disease]]` → new "Inpatient Management of Hospitalized IBD" framework (admission criteria, workup, VTE prophylaxis, discharge). Source + `## Sources` section added.
- `[[ulcerative-colitis]]` → ASUC practice points (colectomy counseling + early surgical consult; JAK-inhibitor inpatient interest; accelerated-vs-standard infliximab equivalence). Source added; `updated:` bumped.
- `[[crohns-disease]]` → inpatient CD complications (obstruction, intra-abdominal abscess, perianal) + VTE prophylaxis. Source added; `## Sources` renumbered; `updated:` bumped.

**Constraint honored:** "do not overwrite newer with older / only add net-new." Contradiction surfaced: AGA 2026 prefers **fidaxomicin** for initial CDI in IBD vs vancomycin-first in older `[[acg-2021-cdiff]]` — newer same-tier guideline wins the page assertion; flagged inline on `[[clostridioides-difficile]]` and on the source page.

---

## [2026-06-27] lint | Index reconciliation + stalest-page validation + gastric-cluster connections (scheduled ingest-and-lint)

**Index (`index.md`):** added 4 AGA 2026 source entries (top of AGA subsection) + `[[gastric-polyps]]` (Concepts) and `[[endoscopic-submucosal-dissection]]` (Advanced Procedures). De-stubbed `[[hcc-surveillance]]` and `[[inflammatory-bowel-disease]]` descriptions. Corrected per-page source counts on touched pages (`clostridioides-difficile` →3, `hepatocellular-carcinoma` →7, `ulcerative-colitis` →8, `crohns-disease` →8). Footer reconciled to live on-disk counts: **180 sources | 104 disease scripts | 19 diagnostic schemas | 2 general procedures | 19 advanced procedures | 15 meds | 0 anatomy | 33 concepts | 1 synthesis**.

**Connections built:** gastric cluster cross-linked — `[[gastric-polyps]]` added to See Also of `[[gastric-intestinal-metaplasia]]`, `[[atrophic-gastritis]]`, `[[gastric-premalignant-conditions]]`; `[[hcc-surveillance]]` ↔ `[[hepatocellular-carcinoma]]`; inpatient IBD framework links `[[inflammatory-bowel-disease]]` ↔ `[[ulcerative-colitis]]`/`[[crohns-disease]]`/`[[clostridioides-difficile]]`.

**Stalest-page validation (2 oldest, both `updated: 2026-05-15`):**
- `[[atrophic-gastritis]]` — compliant (ADDT order, inline links, See Also/Sources format); fixed double blank line under `## See Also`; added `[[gastric-polyps]]` link. `updated:` bumped.
- `[[gastroparesis]]` — compliant (ADDT order); fixed double blank line under `## See Also`. `updated:` bumped.

**Link integrity:** whole-page `[[link]]` scan on all created/edited pages — all resolve by basename (apparent misses were `![[*.png]]` image embeds resolved from `raw/assets/`, not page links).

**Remaining for user triage:**
- **`.DS_Store` removal blocked** — artifacts remain under repo; `rm` returns "Operation not permitted" on the mounted volume. Delete locally.
- **Many AGA CPU PDFs still uningested** in `raw/GI Guidelines/AGA/` (≤4/pass): Therapeutic Endoscopy in IBD, Noncolorectal Cancer Screening/Vaccinations in IBD, Endoscopic Resection for Early CRC, Endoscopic Lifting Agents, Blood Tests for CRC Screening, Sclerosing Mesenteritis, FLIP in Esophageal Practice, GI Manifestations in hypermobile EDS. Several uningested **ASGE** files also exist (e.g., 2010 PUD, 2011 EUS mediastinal adenopathy, 2013 biliary neoplasia, 2015 antibiotic prophylaxis, 2016 antithrombotics) — pick up future passes.
- **Pre-existing index/page source-count drift** noted on some IBD pages (frontmatter vs `## Sources` list) — touched pages reconciled this pass.
- Persistent source-needed stubs (unchanged): `[[microscopic-colitis]]`, `[[hiv-aids-related-diarrhea]]`.

---

## [2026-06-27] ingest | 4 AGA Clinical Practice Updates (ascites, hemorrhoids, refractory constipation, hepatitis delta) (scheduled ingest-and-lint)

**Scope:** Automated scheduled `ingest-and-lint`. The `raw/GI Guidelines/AGA/` folder gained a batch of descriptively-named AGA Clinical Practice Update PDFs not yet mapped to a `wiki/sources/` page (last pass counted 173 raw files; now 218). Ingested 4 high-value, gap-filling CPUs (task cap = up to 4). Only net-new/corroborating content added to existing pages; newer same-tier content not overwritten.

**Sources created:**
- `[[aga-2025-ascites-cirrhosis]]` — AGA CPU on Ascites, Volume Overload, and Hyponatremia in Cirrhosis (Gastroenterology 2025;169:1547–1557). 13 Best Practice Advice statements (verbatim).
- `[[aga-2026-hemorrhoids]]` — AGA CPU on Diagnosis and Treatment of Hemorrhoids (Clin Gastroenterol Hepatol 2026;24:1773–1781). 11 BPA (verbatim). *Note: raw `PIIS154235652600282X.pdf` is a duplicate of this article — not separately ingested.*
- `[[aga-2026-refractory-constipation]]` — AGA CPU on Evaluation and Management of Refractory Constipation (Clin Gastroenterol Hepatol 2026;24:296–305). 14 BPA (verbatim).
- `[[aga-2025-hepatitis-delta]]` — AGA CPU on Management of Hepatitis Delta (Gastroenterology 2025;169:1063–1069). Commentary (narrative; no formal BPA) — full key clinical claims captured.

**Pages created:**
- `[[hepatitis-d]]` — new ADDT disease script (HPB folder): HDV requires HBV; universal anti-HDV screening → reflex HDV RNA (Mermaid testing cascade); VCTE/FIB-4 staging + HCC surveillance; peg-IFN-α (only US therapy, ~50% relapse) + nucleos(t)ide analogue if HBV DNA elevated; bulevirtide (EMA-approved, US expanded-access NCT06780579) and pipeline (BJT-778, tobevibart+elebsiran, lonafarnib).

**Pages updated (net-new content + sources/cross-links):**
- `[[ascites]]` → new Hepatic Hydrothorax and Inpatient Volume Overload / Refractory Anasarca subsections; expanded hyponatremia workup + escalation ladder (vasoconstrictors, hypertonic saline, vaptans, RRT). Source added; See Also expanded.
- `[[hemorrhoids]]` → Special Populations table (active IBD defer to remission; pregnancy conservative; cirrhosis distinguish from rectal varices, IRC preferred if platelets <50k or INR >2.0); topical-steroid ≤2-wk cap; pre-treatment anoscopy + pelvic-sepsis informed consent. Source added.
- `[[chronic-idiopathic-constipation]]` → "Refractory/Slow-Transit" thin bullet expanded into a full Refractory Constipation pathway (ARM+BET/biofeedback before labeling; secondary-cause exclusion; transit testing off and on max laxatives; defecography; OTC/FDA + off-label pyridostigmine; non-pharm adjuncts; surgical algorithm with diverting loop ileostomy as diagnostic trial). Source added.
- `[[chronic-hepatitis-b]]` → universal anti-HDV screening note + `[[hepatitis-d]]` link (co-infection screening line and See Also).

**Constraint honored:** AGA CPUs (2025/2026) are the newest same-tier sources; layered onto existing AASLD/ACG/ASGE pages as additions, not overwrites. Contradiction surfaced: AGA 2025 Hepatitis Delta suggests **universal** anti-HDV screening of all HBV patients (vs prior AASLD risk-based testing) — flagged on `[[hepatitis-d]]` and source page.

---

## [2026-06-27] lint | Index reconciliation + stalest-page validation + connections (scheduled ingest-and-lint)

**Index (`index.md`):** added 4 AGA source entries (reverse-chron in AGA subsection) and the `[[hepatitis-d]]` disease-script entry; corrected stale per-page source counts on touched pages (`chronic-idiopathic-constipation` →4, `hemorrhoids` →3, `ascites` →2). Footer reconciled to live on-disk counts: **176 sources | 104 disease scripts | 19 diagnostic schemas | 2 general procedures | 18 advanced procedures | 15 meds | 0 anatomy | 32 concepts | 1 synthesis**.

**Stalest-page validation (2 oldest, both `updated: 2026-05-15`):**
- `[[spontaneous-bacterial-peritonitis]]` — compliant (ADDT, inline links, See Also/Sources format); added missing `## Contents` ToC (long page) and fixed double blank line under `## See Also`. `updated:` bumped.
- `[[aki-in-cirrhosis]]` — compliant and well-sourced; added missing `## Contents` ToC and fixed double blank under `## See Also`. `updated:` bumped.

**Connections built:** ascites ↔ SBP ↔ AKI-in-cirrhosis cluster cross-linked bidirectionally; `[[hepatitis-d]]` ↔ `[[chronic-hepatitis-b]]`; ascites See Also expanded (`[[portal-hypertension]]`, `[[hepatic-encephalopathy]]`, `[[liver-transplantation]]`).

**Link integrity:** whole-page `[[link]]` scan on all created/edited pages — all resolve by basename (apparent misses were escaped table-pipe aliases `[[slug\|Alias]]`, same artifact noted previously).

**Remaining for user triage:**
- **`.DS_Store` removal blocked** — 3 `.DS_Store` artifacts remain (`wiki/`, plus others under repo); `rm` returns "Operation not permitted" on the mounted volume. Delete locally.
- **Many AGA CPU PDFs still uningested** in `raw/GI Guidelines/AGA/` (folder grew ~45 files). High-value remaining candidates: Therapeutic Endoscopy in IBD, Inpatient Management of IBD, C. diff in IBD, Noncolorectal Cancer Screening/Vaccinations in IBD, Gastric Polyps, Endoscopic Resection for Early CRC, Endoscopic Lifting Agents, Blood Tests for CRC Screening, Risk Stratification/Surveillance for HCC, Sclerosing Mesenteritis, FLIP in Esophageal Practice, GI Manifestations in hypermobile EDS. Pick up ≤4/pass next runs.
- Persistent source-needed stubs (unchanged): `[[microscopic-colitis]]`, `[[hiv-aids-related-diarrhea]]`.

---

## [2026-06-26] lint | Index Sources full reconciliation (133→172) + stub expansion + stalest-page validation (scheduled ingest-and-lint)

**Ingest:** None. All 173 raw guideline files in `raw/GI Guidelines/` map to an existing `wiki/sources/` page — no uningested guidelines this pass. Verified that apparent mismatches are abbreviation/year artifacts, not gaps: `ACG 2018 IBS.pdf` is the same Lacy guideline as `[[acg-2020-ibs]]` (PDF first page confirms "first-ever ACG clinical guideline … GRADE"); `ASGE 2025 GERD.pdf` = `[[asge-2024-gerd]]`; AGA MSTF files (colonoscopy follow-up, malignant polyps, CRC start-stop age) are co-publications of the already-ingested USMSTF versions.

**Index Sources reconciliation (major):** `index.md` Sources section listed only **133 of 172** source pages; added the **39 missing entries** in their society subsections (chronological): **AASLD** ×8 (`[[aasld-2024-nilda-imaging]]`, `[[aasld-2024-nilda-portal-htn]]`, `[[aasld-2024-tips]]`, `[[aasld-2022-dili]]`, `[[aasld-2022-palliative-cirrhosis]]`, `[[aasld-2021-malnutrition-cirrhosis]]`, `[[aasld-2021-reproductive-liver]]`, `[[aasld-2021-vascular-pvt]]`); **ACG** ×2 (`[[acg-2026-hepatic-encephalopathy]]`, `[[acg-2025-perioperative-cirrhosis]]`); **AGA** ×19 (AGA subsection rebuilt in reverse-chron — 2025 crohns-pharm/gastroparesis/hbv-reactivation/barretts-surveillance/cade-colonoscopy, 2024 uc-pharm/pouchitis/fmt/barretts-eet, 2023 biomarkers-cd/biomarkers-uc, 2022 hcc-systemic/ibs-c/ibs-d/obesity-pharm/hamartomatous-polyposis, 2021 cirrhosis-coagulation, 2020 eoe/ida); **ASGE** ×10 (`[[asge-2025-gastrostomy-tubes]]`, `[[asge-2024-therapeutic-eus-biliary]]`, `[[asge-2024-solid-pancreatic-masses]]`, `[[asge-2024-chronic-pancreatitis-endoscopy]]`, `[[asge-2023-esd]]`, `[[asge-2023-post-ercp-pancreatitis]]`, `[[asge-2021-cholangitis]]`, `[[asge-2021-malignant-hilar-obstruction]]`, `[[asge-2020-achalasia]]`, `[[asge-2019-choledocholithiasis]]`). Index Sources section now lists **172/172**.

**Stub expanded:** `[[choledocholithiasis]]` — built into a full ADDT disease script from the already-ingested `[[asge-2019-choledocholithiasis]]` (risk-stratification table: high → ERCP, intermediate → EUS/MRCP, low → cholecystectomy + IOC; EUS≈MRCP; large-balloon dilation after sphincterotomy for large/difficult stones; early ERCP only for cholangitis/persistent obstruction in gallstone pancreatitis). Added Contents ToC, inline links, `## See Also` + `## Sources`; frontmatter `sources:`/`updated:` set; index entry de-stubbed (now "1 source").

**Stalest-page validation (2 pages):**
- `[[flip-panometry]]` (was oldest non-source, `updated: 2026-05-15`) — compliant; fixed double blank line under `## See Also` and added `[[high-resolution-manometry]]`, `[[ineffective-esophageal-motility]]` (both linked inline). `updated:` bumped.
- `[[anticoagulation-gi-bleeding]]` (`updated: 2026-05-15`) — compliant and well-sourced; added the missing `## Contents` ToC (long page rendered without one). `updated:` bumped.

**Hygiene / integrity:**
- Fixed mis-categorization: `[[hiv-aids-related-diarrhea]]` frontmatter `category: synthesis` → `diagnostic-schema` (it is a diagnostic schema, lives in `2-diagnostic-schemas/`, and was inflating the synthesis count).
- Footer reconciled to live on-disk counts: **172 sources | 103 disease scripts | 19 diagnostic schemas | 2 general procedures | 18 advanced procedures | 15 meds | 0 anatomy | 32 concepts | 1 synthesis**.
- New links verified to resolve by basename (no broken links introduced).

**Remaining for user triage:**
- **`.DS_Store` removal blocked** — 8 `.DS_Store` artifacts remain under the repo (root, `KHNL-GI-Wiki/`, `wiki/`, `wiki/1-disease-scripts/…`, `raw/…`); `rm` returns "Operation not permitted" on the mounted volume this pass. Delete locally on the user's machine, or they will be re-flagged.
- Persistent source-needed stubs (cannot expand without ingesting a new primary source): `[[microscopic-colitis]]`, `[[hiv-aids-related-diarrhea]]`.
- Next-stalest batch for a future pass (`updated: 2026-05-15`): `[[disorders-of-gut-brain-interaction]]`, `[[endoscopic-oncology]]`, `[[hrm-antireflux-surgery]]`, `[[ibd-preventive-care]]`, `[[ascites]]`, `[[biliary-stricture]]`.

---

## [2026-06-23] update | Remove mislabeled HCC PDF + restructure index Sources to mirror raw folders (user request)

**File removed:** `raw/GI Guidelines/AASLD/AASLD 2011 HCC Management.pdf` — was a mislabeled duplicate of the AASLD 2023 HCC Guidance (already ingested as `[[aasld-2023-hcc]]`). Deleted per user instruction; no source page was ever created for it.

**Index Sources section restructured** to mirror the `raw/GI Guidelines/` folder structure. Subsections reordered to **AASLD, ACG, AGA, ASGE, NCCN, Other, SAGES**; `Consensus Statements & Other` renamed to **Other**; the **USMSTF** subsection dissolved and its entries redistributed per user rule ("joint USMSTF + ACG/ASGE → that society; USMSTF-alone → Other"):
- **→ ACG:** `[[usmstf-2014-lynch-syndrome]]` (titled "Practice Guideline from the American College of Gastroenterology"), `[[acg-2014-bowel-cleansing]]` (ACG-slugged; ACG folder).
- **→ ASGE:** `[[usmstf-2015-crc-surveillance]]`, `[[usmstf-2016-fit-screening]]` (both have explicit "ASGE USMSTF" co-published versions in the raw ASGE folder).
- **→ Other:** `[[usmstf-2025-bowel-prep]]`, `[[usmstf-2021-crc-screening-age]]`, `[[usmstf-2020-endoscopic-removal]]`, `[[usmstf-2020-followup-colonoscopy]]`, `[[usmstf-2020-malignant-colorectal-polyps]]`, `[[usmstf-2017-bmmrd]]`.

**Integrity:** No source entries lost or duplicated (133 unique entries before and after). Footer reconciliation note updated (index now lists 133 source entries). Only section grouping/order changed — entry text preserved verbatim.

**Note for user:** several of the "Other" USMSTF papers (e.g. 2020 endoscopic-removal, follow-up, malignant polyps) are also multi-society (co-published in the ACG/AGA/ASGE journals); they were left in Other because their source-page titles read "USMSTF"/"US Multi-Society Task Force" without a single-society co-brand. Easy to move to ACG/ASGE if you'd prefer.

---

## [2026-06-23] ingest | ASGE 2010 Diarrhea + ASGE 2015 Endoscopy in IBD (scheduled ingest-and-lint)

**Scope:** Automated scheduled `ingest-and-lint` run. Of the 3 guidelines flagged uningested last pass, **2 were genuine and ingested**; the third was a mislabeled duplicate (see below). Per task constraint, only net-new/corroborating content added — newer guideline content not overwritten.

**Sources created:**
- `[[asge-2010-diarrhea]]` — 10 GRADE recs (verbatim); stool/labs first; colonoscopy + random R+L biopsies for chronic unexplained diarrhea (microscopic colitis is patchy, left-only sampling misses it); TI intubation; EGD + ≥4 duodenal biopsies for celiac/malabsorption; CE/enteroscopy not routine; HIV (CD4<100, proximal-colon yield, CMV biopsy) and GVHD (distal-colon biopsy, duodenal-hematoma risk) strategies.
- `[[asge-2015-ibd]]` — 21 GRADE recs (verbatim); colonoscopy + ileoscopy + multisite biopsy for dx/subtyping; backwash ileitis vs CD ileitis; CE algorithm for small-bowel CD (patency capsule/enterography first); EUS for perianal fistula; Montreal classification; neoterminal-ileum (Rutgeerts) postop eval 6–12 mo; chromoendoscopy-preferred dysplasia surveillance; pouch surveillance; endoscopic balloon dilation for benign strictures ≤4 cm.

**Pages updated (net-new content + sources/cross-links):**
- `[[chronic-diarrhea]]` → new "Role of Endoscopy (ASGE 2010)" subsection; added missing `## Sources` section + frontmatter source.
- `[[hiv-aids-related-diarrhea]]` → new "Endoscopic Evaluation (ASGE 2010)" section (CMV biopsy, sig-vs-colonoscopy, CD4<100, GVHD distal-colon biopsy); source added.
- `[[microscopic-colitis]]` (stub) → added patchy-distribution/left-only-miss point sourced to ASGE 2010 + `## Sources`; remains a stub (no dedicated MC guideline in `raw/`).
- `[[crohns-disease]]` → new "Endoscopic Stricture Dilation" subsection (balloon dilation for benign strictures ≤4 cm); source added.
- `[[ulcerative-colitis]]` → ileoscopy backwash-vs-CD-ileitis distinction, cecal patch, "UC colon stricture malignant until proven otherwise"; source added.
- `[[pouchitis]]` → pouch/afferent-limb assessment in symptomatic patients + pouch-neoplasia surveillance (beyond AGA 2024 scope); source added.

**Constraint honored:** ASGE 2015 dysplasia-surveillance content deferred to `[[asge-2015-scenic-ibd-dysplasia]]` (not duplicated); ASGE 2010/2015 endoscopic content layered onto existing newer pharmacologic guidelines without overwriting.

**Index:** `index.md` — 2 ASGE source entries added; per-page source counts updated (`crohns-disease` 7, `ulcerative-colitis` 7, `pouchitis` 3, `chronic-diarrhea` 1); new `[[hiv-aids-related-diarrhea]]` schema entry added (was missing).

**Filename/content mismatch flagged (NOT ingested):** `raw/GI Guidelines/AASLD/AASLD 2011 HCC Management.pdf` actually contains the **AASLD 2023 HCC Practice Guidance** (Singal et al., Hepatology 2023;78:1922–1965, DOI 10.1097/HEP.0000000000000466), already ingested as `[[aasld-2023-hcc]]`. No 2011 HCC source page created — would have duplicated existing content. **User action:** rename or remove the mislabeled file.

**No remaining uningested guidelines** in `raw/GI Guidelines/` after this pass (all source PDFs now map to a `wiki/sources/` page).

---

## [2026-06-23] lint | Hygiene + stalest-page validation + link integrity (scheduled ingest-and-lint)

**Hygiene:** Removed 8 `.DS_Store` OS artifacts (4 under `wiki/`, 1 root, 3 under `raw/`).

**Link integrity:** Whole-wiki broken-link scan (all `[[links]]` resolved by basename). **No genuine broken links** — every apparent miss was an escaped table-pipe alias (`[[slug\|Alias]]`, the `\` captured by the scanner), confirming resolution. All new ingest links resolve.

**Stalest-page validation (3 oldest, all `updated: 2026-05-07`):**
- `[[acute-pancreatitis]]` — compliant (ADDT order, frontmatter, figures captured, Sources/See Also format). Fixed double blank line under `## See Also`; added `[[choledocholithiasis]]` to See Also (already linked inline). `updated:` bumped.
- `[[hepatic-cysts]]` — compliant. Added required diagnostic-schema pointer `*Workup: see [[focal-liver-lesions]].*` at top of Differential Diagnosis (Style Guide); fixed See Also spacing + added `[[focal-liver-lesions]]`. `updated:` bumped.
- `[[nutrition-in-liver-disease]]` — compliant. Fixed See Also spacing. `updated:` bumped. (Note: categorized as `disease-script` though it is a management framework — left in place to avoid breaking links; flagged for user.)

**Remaining for user triage:**
- Mislabeled `AASLD 2011 HCC Management.pdf` (see ingest entry) — rename/remove.
- `[[microscopic-colitis]]` and `[[hiv-aids-related-diarrhea]]` remain stubs — need a dedicated microscopic-colitis source and a primary HIV/GI opportunistic-infection guideline respectively (not in `raw/`); do not expand from secondary sources without permission.
- Next stalest batch (per 2–3/pass cap): `[[clostridioides-difficile]]`, `[[atrophic-gastritis]]`, `[[gastroparesis]]` (all `updated: 2026-05-15`).

---

## [2026-06-22] ingest | ASGE 2015 Deep Enteroscopy + ASGE 2013 CRC Staging + ASGE 2014 Constipation + ASGE 2010 Anorectal (scheduled ingest-and-lint)

**Scope:** Automated scheduled `ingest-and-lint` run. Identified 7 remaining uningested guidelines (all older/superseded: AASLD 2011 HCC; ASGE 2010 anorectal, 2010 diarrhea, 2013 CRC staging, 2014 constipation, 2015 deep enteroscopy, 2015 endoscopy-in-IBD). Ingested the 4 with the clearest existing home pages and lowest conflict risk. Per task constraint, **only net-new/corroborating content added — newer guideline content not overwritten.**

**Sources created:**
- `[[asge-2015-deep-enteroscopy]]` — 7 GRADE recs (verbatim); DBE/SBE/spiral; DBE best for total enteroscopy; VCE-first then DE; DE for small-bowel tumors + Crohn's lesions within reach.
- `[[asge-2013-crc-staging-management]]` — 8 GRADE recs (verbatim); EUS rectal staging performance; endoscopic-vs-surgical malignant-polyp criteria; SEMS bridge-to-surgery.
- `[[asge-2014-constipation]]` — 4 GRADE recs (verbatim); no scope without alarm features; low yield in isolated constipation; therapeutic stricture dilation/cecostomy; no role in disimpaction.
- `[[asge-2010-anorectal-disorders]]` — 9 GRADE recs (verbatim); APC for radiation proctopathy; RBL for hemorrhoids; fissure ladder; flex sig/colonoscopy + EAUS/MRI for fecal incontinence.

**Pages updated (net-new content + sources/cross-links):**
- `[[device-assisted-enteroscopy]]` → added non-bleeding indications (small-bowel tumors, Crohn's), total-enteroscopy definition; linked `[[crohns-disease]]`.
- `[[colorectal-cancer]]` → new "Endoscopic Staging & Management (ASGE 2013)" subsection (EUS rectal staging, malignant-polyp endoscopic-vs-surgical criteria, SEMS for obstruction).
- `[[chronic-idiopathic-constipation]]` → new "Role of Endoscopy (ASGE 2014)" subsection (when to scope, low yield, therapeutic uses, no disimpaction).
- `[[fecal-incontinence]]` → added structural endoscopic-evaluation recommendation.
- `[[hemorrhoids]]` → RBL endoscopic-treatment-of-choice corroboration; added source.

**Constraint honored:** ASGE 2013 oncologic content did not displace `[[nccn-2026-colon-cancer]]`; ASGE 2014 Rome III / ">50" framing did not overwrite Rome IV criteria or age-45 screening; ASGE 2010 anorectal additions layered on top of newer `[[acg-2021-anorectal-disorders]]` / `[[asge-2019-radiation-proctopathy]]`.

**Index:** `index.md` — 4 ASGE source entries added to ASGE block.

**Reported, not ingested (older/superseded; flagged for user triage):** AASLD 2011 HCC (superseded by `[[aasld-2023-hcc]]` / `[[aasld-2025-hcc-critical-update]]`); ASGE 2010 Diarrhea; ASGE 2015 Endoscopy in IBD.

---

## [2026-06-22] lint | Hygiene + stalest-page validation + connectivity (scheduled ingest-and-lint)

**Hygiene:** Removed 7 `.DS_Store` OS artifacts (3 under `wiki/`, 4 under `raw/`).

**Link integrity:** Whole-wiki broken-link scan — no genuine broken `[[links]]` from content pages (apparent hits were escaped `\|` alias false-positives or example tokens inside `log.md`). All new ingest links resolve to existing pages.

**Stalest-page validation:** `[[gastric-premalignant-conditions]]` (stalest, `updated: 2026-05-07`) — expanded thin `## See Also` (was single link) to comma-delimited related set (`[[atrophic-gastritis]]`, `[[gastric-intestinal-metaplasia]]`, `[[gastric-adenocarcinoma]]`, `[[upper-endoscopy]]`); `updated:` bumped. Page otherwise compliant (frontmatter, ADDT-style sections, Sources format).

**Remaining for user triage:** Deep stalest-page audits of `[[acute-pancreatitis]]`, `[[hepatic-cysts]]`, `[[nutrition-in-liver-disease]]` (next pass, per 2–3/pass cap). 3 older uningested guidelines above remain as reported.

---

## [2026-06-22] ingest | ASGE 2019 Radiation Proctopathy + ASGE 2017 Small-Bowel Bleeding + ASGE 2014 LGIB (scheduled ingest-and-lint)

**Scope:** Automated scheduled `ingest-and-lint` run. 3 uningested ASGE technical-standard guidelines ingested (high-value gaps); lint follows in entry below.

**Sources created:**
- `[[asge-2019-radiation-proctopathy]]` — 3 GRADE recs (verbatim); APC/bipolar/heater probe/RFA all effective for chronic radiation proctopathy bleeding; suggest against 4% formalin vs APC; cryoablation insufficient evidence.
- `[[asge-2017-small-bowel-bleeding]]` — 8 GRADE recs (verbatim); VCE-first algorithm, DAE/push enteroscopy for therapy, DAE-first in altered anatomy/angiectasia suspicion.
- `[[asge-2014-lgib]]` — 12 GRADE recs (verbatim); colonoscopy first-line, EGD-first for melena/unstable hematochezia, colonoscopy <24h for severe hematochezia, diverticular/angioectasia hemostasis.

**Pages created:**
- `[[radiation-proctopathy]]` — new disease script (colorectal inflammation), ADDT format; acute vs chronic typing table, endoscopic dx (biopsy discouraged), endoscopic therapy options.

**Pages updated (sources + cross-links added):**
- `[[small-bowel-bleeding]]`, `[[capsule-endoscopy]]`, `[[device-assisted-enteroscopy]]` → added `[[asge-2017-small-bowel-bleeding]]` to frontmatter + `## Sources`.
- `[[acute-lower-gi-bleeding]]` → added `[[asge-2014-lgib]]` source; linked `[[radiation-proctopathy]]` inline in DDx (was plain text).

**Constraint honored:** Older ASGE 2014 LGIB content not used to overwrite newer `[[acg-2023-lgib]]` risk-stratification/timing; ASGE 2017 SBB added as corroboration without displacing more detailed `[[acg-2015-small-bowel-bleeding]]` content.

**Index/log:** `index.md` — 3 ASGE source entries + `[[radiation-proctopathy]]` disease entry added; counts/dates updated.

---

## [2026-06-22] lint | Scheduled ingest-and-lint pass — stub expansion, stalest-page validation, cross-links

**Stub expansions (covered by ingested sources):**
- `[[capsule-endoscopy]]` — removed stub marker; restructured into Overview / Indications / Limitations sections from `[[acg-2015-small-bowel-bleeding]]` + `[[asge-2017-small-bowel-bleeding]]`; index entry de-stubbed (2 sources).
- `[[device-assisted-enteroscopy]]` — removed stub marker; added Overview/Indications headings + ASGE 2017 DAE-first point; index entry de-stubbed (2 sources).

**Stalest pages validated (`updated: 2026-05-07`):**
- `[[eosinophilic-esophagitis]]` — ADDT order + See Also/Sources compliant; **fix:** added diagnostic-schema pointer `*Workup: see [[dysphagia]].*` at top of Differential Diagnosis; date bumped.
- `[[helicobacter-pylori-infection]]` — compliant; **fix:** added `*Workup: see [[dyspepsia]].*` at top of Differential Diagnosis; date bumped.
- `[[gastric-premalignant-conditions]]` — compliant (ADDT, See Also/Sources); DDx is histologic (no symptom-workup schema pointer applicable); no change, date not bumped.

**Verification:**
- Whole-wiki broken-link scan (basename resolution, excluding image embeds and fenced code): **0 broken links** after all edits.

**Flagged for user (could not auto-fix):**
- 8 `.DS_Store` artifacts remain (repo root, `wiki/`, `wiki/1-disease-scripts/…`, `raw/GI Guidelines/…`) — deletion blocked by filesystem permissions (Operation not permitted) in this environment; `.DS_Store` is git-ignored. Safe to remove manually.
- Remaining uningested raw guidelines (reported, not ingested this pass): ASGE 2010 Anorectal, ASGE 2010 Diarrhea, ASGE 2013 CRC Staging, ASGE 2014 Constipation, ASGE 2015 Deep Enteroscopy, ASGE 2015 Endoscopy in IBD, AASLD 2011 HCC (superseded by 2023/2025), ACG 2018 IBS (superseded by `[[acg-2020-ibs]]`/2021 Lacy).

---

## [2026-06-22] lint | Scheduled ingest-and-lint pass — hygiene, stalest-page validation, cross-links

**Scope:** Automated scheduled `ingest-and-lint` run (2 guidelines ingested per entry below; lint follows).

**Stalest pages validated (`updated: 2026-05-07`):**
- `[[crohns-disease]]` — compliant with ADDT order + See Also/Sources format; **connection added**: CRC-surveillance row now links HD + dye-spray chromoendoscopy to `[[asge-2015-scenic-ibd-dysplasia|SCENIC]]`; source added to frontmatter + `## Sources`; date bumped.
- `[[test-and-treat]]` — compliant (sourced claims, inline links, format); **densified sparse See Also** (added `[[dyspepsia]]`, `[[upper-endoscopy]]`, `[[peptic-ulcer-disease]]`); date bumped. No older-vs-newer conflict introduced (page scope = ACG 2017 strategy/selection; 2024 H. pylori treatment content not overwritten).

**Cross-references built (inbound links to new pages):**
- `[[colonoscopy]]` (IBD-surveillance indication + See Also/Sources), `[[ulcerative-colitis]]` and `[[crohns-disease]]` → `[[asge-2015-scenic-ibd-dysplasia]]`.
- `[[nausea-and-vomiting]]`, `[[chronic-idiopathic-constipation]]` → `[[acute-colonic-pseudo-obstruction]]` / `[[colonic-volvulus]]` (See Also).

**Hygiene fixes:**
- Index source-count corrections (pre-existing miscounts): `[[ulcerative-colitis]]` 2→6, `[[crohns-disease]]` 2→6, `[[colonoscopy]]` 5→9; index `updated:` 2026-06-15 → 2026-06-22.

**Verification:**
- Whole-wiki broken-link scan (basename resolution, excluding image embeds, escaped-pipe table links, and `log.md` example tokens): **0 real broken links**.

**Flagged for user (could not auto-fix):**
- 3 `.DS_Store` artifacts remain under `wiki/` (`./`, `1-disease-scripts/`, `1-disease-scripts/foregut-and-motility-diseases/`) — deletion blocked by filesystem permissions in this environment. Safe to remove manually / via git.

---

## [2026-06-22] ingest | ASGE 2015 SCENIC + ASGE 2020 ACPO/Colonic Volvulus

**Context:** Scheduled `ingest-and-lint` pass; ingested 2 high-value uningested ASGE guidelines filling real gaps (no SCENIC, ACPO, or volvulus content existed). Summarize-and-cite; full verbatim recommendation lists preserved per the guideline-recommendation-capture rule.

**Sources created:**
- `[[asge-2015-scenic-ibd-dysplasia]]` — SCENIC international consensus (ASGE/AGA), Laine et al. Gastrointest Endosc 2015;81:489–501. All 9 GRADE recommendations verbatim; modified-Paris terminology (visible polypoid/nonpolypoid vs invisible; DALM/adenoma-like abandoned); HD > SD, chromoendoscopy > white-light, NBI not substituted; resect-and-survey over colectomy for resectable visible dysplasia.
- `[[asge-2020-acpo-volvulus]]` — ASGE Standards of Practice, Naveed et al. Gastrointest Endosc 2020;91:228–235. All 10 recommendations verbatim with evidence symbols; sigmoid-volvulus endoscopic detorsion-first + index-admission surgical consult; cecal-volvulus surgery-first; ACPO conservative ×72h → neostigmine 2 mg IV → endoscopic decompression; surgery for perforation/peritonitis.

**Pages created:**
- `[[acute-colonic-pseudo-obstruction]]` (disease script, `colorectal-diseases/functional-motility/`) — Ogilvie's syndrome; ADDT + management Mermaid algorithm; neostigmine dosing/contraindications, cecal-diameter thresholds.
- `[[colonic-volvulus]]` (disease script, same folder) — sigmoid vs cecal; CT preferred; detorsion vs surgery-first table; recurrence data.

**Pages updated:**
- `[[ulcerative-colitis]]` — added SCENIC surveillance-technique + management block to CRC-surveillance section; source added.
- `[[colonoscopy]]` — IBD-surveillance indication now specifies HD + chromoendoscopy (SCENIC).
- `[[index]]` — added 2 source entries + 2 disease-script entries.

**Source fidelity:** all content drawn from the two ASGE raw PDFs; no outside information used.

---

## [2026-06-20] update | Expand pouchitis stub + add LINT stub-expansion step

**Pages updated:**
- `[[pouchitis]]` — expanded from stub to full ADDT disease script from the original raw PDF `raw/GI Guidelines/AGA/AGA 2024 Pouchitis & Inflammatory Pouch Disorders.pdf`. Added epidemiology, pragmatic subtype definitions (intermittent / chronic antibiotic-dependent / chronic antibiotic-refractory / Crohn's-like disease of the pouch / cuffitis), diagnostics (pouchoscopy, PDAI/mPDAI), subtype-driven therapeutics (ciprofloxacin/metronidazole 2–4 wk; De Simone 8-strain probiotic for secondary prevention; chronic antibiotics vs advanced therapy; vedolizumab EARNEST 18/51 vs 5/51; corticosteroids; cuffitis topical mesalamine/steroids), and a table of all 13 AGA 2024 recommendations with certainty. Frontmatter `sources:` → `[aga-2024-pouchitis, aga-2020-probiotics]`; `updated: 2026-06-20`.
- `[[aga-2024-pouchitis]]` already existed as a source page (no new source page created).

**Schema (`CLAUDE.md`) changes:**
- `### 3. LINT` → **Check for:** added "Stub pages that can be expanded from already-ingested sources."
- `### 3. LINT` → **Behavior:** added "Expand stubs from already-ingested sources only (every pass)" — expand a stub into a full page **only** when an already-ingested raw source (or existing source page) substantively covers it; read the original raw source; update frontmatter/index/log. **Hard constraint:** never pull outside/internet information to expand a stub — if raw files are insufficient, leave it as a stub and flag which source is needed. Capped at 1–2 stub expansions per pass.

**Hygiene:**
- `index.md` pouchitis entry rewritten (stub → full; 1 → 2 sources).

**Source fidelity:** all pouchitis content drawn from the AGA 2024 raw PDF + existing `[[aga-2020-probiotics]]`; no outside information used.

---

## [2026-06-20] lint | Page Styling Guide consolidation + benign-liver-lesion validation

**Schema (`CLAUDE.md`) changes:**
- Renamed `## Page Conventions` → `## Page Styling Guide` and made it the single home for all page-authoring rules (folded the former `## Website Rendering Conventions` in as a subsection).
- Added `### Authoring Principles`: (1) accuracy / source fidelity — no unsourced or fabricated content, no outside info without asking; (2) concise, skimmable bullets, no large text blocks; (3) no repetition within a page or across pages (one home page per algorithm/table/figure, link elsewhere — Chicago Classification example).
- `### 3. LINT`: added the staleness-ordered validation step — each pass validates the 2–3 least-recently-updated pages (oldest `updated:` first) against the Page Styling Guide, capped at 2–3/pass for token budget.
- `### 1. INGEST`: step 4 now points to the Page Styling Guide for all created/edited pages.

**Pages validated (stalest, `updated: 2026-05-07`):**
- `[[focal-nodular-hyperplasia]]` — **source contradiction fixed**: fibrolamellar HCC listed as "elevated AFP"; ACG 2024 states AFP is typically *not* elevated in FLHCC → changed to "AFP typically normal." Removed within-page OCP repetition (redundant bullet duplicated the dedicated OCP subsection). Date bumped.
- `[[hepatocellular-adenoma]]` — fixed mislabeled Bordeaux table cell (Inflammatory "Malignant Risk" column read "Moderate bleed risk" → "Lower than β-catenin; bleed-prone (sinusoidal dilation)," per ACG: β-catenin = highest malignant risk). Aligned subtype frequencies to ACG Table 5 (Inflammatory 40–50%→35–45%; HNF1α 30–40%→35–40%). Date bumped.
- `[[hepatic-hemangioma]]` — content reviewed (compliant); later linked to the new `[[focal-liver-lesions]]` page (Imaging + See Also) and date bumped (see follow-up).

**Verification:**
- Accuracy fixes verified against the source PDF `raw/GI Guidelines/ACG/ACG 2024 Focal Liver Lesions.pdf` (FLHCC AFP statement; Table 5 subtype frequencies & malignant-risk ordering). No outside information used.

**Follow-up (user-approved, same session):**
- **Sonic hedgehog subtype added** to the `[[hepatocellular-adenoma]]` table; reworked it to ACG Table 5 "Complications" data with separate hemorrhage / malignancy columns — HNF1α low/low, inflammatory low/moderate, β-catenin low/high (≤46% exon 3), sonic hedgehog **high/low**, unclassified uncertain. This corrected an earlier over-edit (inflammatory is **not** bleed-prone — ACG lists its hemorrhage risk as low; the initial "bleed-prone" note was wrong).
- **Created `[[focal-liver-lesions]]`** (diagnostic schema) as the single home for the FNH/HCA/hemangioma/HCC imaging comparison table (gadoxetate hepatobiliary phase = key discriminator). Added to `index.md`.
- **New convention — diagnostic-schema link at top of Differential Diagnosis (disease scripts).** Added to `CLAUDE.md` (Cross-references + LINT validation step). Applied: `[[achalasia]]` DDx now opens with `*Workup: see [[dysphagia]].*`; FNH/HCA/hemangioma DDx open with `*Workup & imaging comparison: see [[focal-liver-lesions]].*`. Moved the schema link to the DDx top (off the Imaging section / out of an earlier symptom mention in achalasia) to keep one body link per entity; schema also kept in `## See Also`.
- **Split the guide into `## Content Guide` + `## Style Guide`** in `CLAUDE.md`. Content = what to include (source fidelity, no duplication, include source algorithms/figures/tables). Style = how it looks (concise bullets, prefer visuals, frontmatter, naming, page structures, cross-links, rendering). Added a "Navigation & collapsing sections (auto-generated)" note (collapsible sidebar + right-rail outline are built from headings/`## Contents`; no manual `<details>`). Updated INGEST/LINT references to point at both guides.

---

## [2026-06-18] lint | Cross-link densification for NCCN oncology cluster

**Scope:** Targeted lint of the newly ingested NCCN oncology pages and their connections to the rest of the wiki (not a full-wiki pass).

**Cross-references added (inbound links to new pages):**
- `[[subepithelial-lesion]]` → `[[gastrointestinal-stromal-tumor]]` and `[[gastroenteropancreatic-neuroendocrine-tumors]]` (inline lead lines under the GIST and gNET sections + both added to See Also). This schema discussed GIST/gNET extensively with no links — the largest gap.
- `[[biliary-stricture]]` → `[[gallbladder-cancer]]` (differential table).
- `[[primary-sclerosing-cholangitis]]` → `[[gallbladder-cancer]]` (gallbladder-cancer surveillance section).
- `[[pancreatic-cysts]]` → `[[gastroenteropancreatic-neuroendocrine-tumors]]` (cystic PNET).
- `[[atrophic-gastritis]]` → `[[gastroenteropancreatic-neuroendocrine-tumors]]` (type I gastric NET).
- `[[gastric-premalignant-conditions]]` → `[[gastroenteropancreatic-neuroendocrine-tumors]]` (type 1 carcinoid risk).

**Hygiene fixes:**
- Index source-count corrections (pre-existing miscounts): `[[hepatocellular-carcinoma]]` 5→6; `[[colorectal-cancer]]` 2→5 (also enriched CRC description with NCCN content).

**Verification:**
- Whole-wiki broken-link scan: **no broken links**. Apparent hits were (a) example tokens inside `log.md` documentation text (correctly not stubbed per schema), and (b) valid escaped-pipe table links in `7-concepts/pancreatic-cancer-screening.md` (`[[slug\|Alias]]`) — render correctly, targets exist.
- No contradictions found in the oncology cluster; NCCN ingest was additive and concordant with existing AASLD/ACG/ASGE/USMSTF content.

**Flagged for user (could not auto-fix):**
- 3 `.DS_Store` artifacts remain under `wiki/` — deletion was blocked by filesystem permissions in this environment. Safe to remove manually / via git.

---

## [2026-06-18] ingest | NCCN 2026 GI/Hepatology guidelines — Batch 3 (Colon + GIST + NET finish)

**Context:** Final batch of the NCCN GI/Hep ingest. Proceeded straight through (rather than pausing) to resolve forward-links created in batch 2 to GIST and GEP-NET. Summarize-and-cite + original Mermaid recreations maintained.

**Sources created:**
- `[[nccn-2026-colon-cancer]]` — NCCN Colon Cancer v2.2026 (04/07/26). Universal MMR/MSI; RAS/BRAF/HER2/NTRK/DPYD; adjuvant FOLFOX/CAPOX (IDEA duration); metastatic biomarker- & sidedness-directed therapy.
- `[[nccn-2026-gist]]` — NCCN GIST v1.2026 (01/13/26). KIT/PDGFRA/SDH mutational testing; risk by size/mitoses/site/rupture; surgery + neoadjuvant/adjuvant imatinib; TKI sequence; avapritinib for PDGFRA D842V.

**Entity pages created:**
- `[[gastrointestinal-stromal-tumor]]` — new disease script (`1-disease-scripts/other/`), full ADDT + original Mermaid algorithm.

**Pages updated (additive):**
- `[[colorectal-cancer]]` — added "Oncologic Management (NCCN 2026)" subsection + original Mermaid algorithm; source added to frontmatter + Sources.
- `[[gastroenteropancreatic-neuroendocrine-tumors]]` — added original Mermaid treatment algorithm (per user diagram request; source page + page already existed from prior run); fixed self-referential differential link → `[[gastrointestinal-stromal-tumor]]`; added GIST to See Also.

**Index:** Added `[[gastrointestinal-stromal-tumor]]` to Disease Scripts › Other; added Colon + GIST to `### NCCN` sources; refreshed NET description (Mermaid).

**Ingest complete:** All 7 NCCN 2026 GI/Hep guidelines ingested (HCC, Biliary Tract, Esophageal/EGJ, Gastric, Colon, GIST, NET). NET guideline kept to GI/pancreatic scope per user (lung/thymus/adrenal/pheo excluded). All disease-script pages carry an original Mermaid algorithm recreation (NCCN figures not reproduced, per license).

---

## [2026-06-18] ingest | NCCN 2026 GI/Hepatology guidelines — Batch 2 (Esophageal/EGJ + Gastric)

**Context:** Batch 2 of the user-requested NCCN GI/Hep ingest. User confirmed: keep algorithm diagrams as **original Mermaid recreations** (not NCCN figure screenshots), per NCCN licensing. Summarize-and-cite convention maintained.

**Sources created:**
- `[[nccn-2026-esophageal-egj-cancer]]` — NCCN Esophageal & EGJ Cancers v3.2026 (06/03/26). Adeno vs SCC pathways; endoscopic resection T1a; perioperative FLOT ± durvalumab (MATTERHORN; no benefit in diffuse-type); definitive chemoRT for SCC; metastatic biomarker therapy (HER2/PD-L1 CPS/MSI-H).
- `[[nccn-2026-gastric-cancer]]` — NCCN Gastric Cancer v3.2026 (06/03/26). Perioperative FLOT + D2 gastrectomy; MSI-H/dMMR neoadjuvant dostarlimab; metastatic HER2→trastuzumab (later-line T-DXd cat 1), PD-L1 CPS→nivo/pembro, claudin 18.2→zolbetuximab.

**Pages expanded (stub → full ADDT, with Mermaid algorithm):**
- `[[esophageal-cancer]]` — full ADDT page + original NCCN treatment-algorithm Mermaid.
- `[[gastric-adenocarcinoma]]` — full ADDT page + original NCCN treatment-algorithm Mermaid.

**Pages updated (additive):**
- `[[esophageal-adenocarcinoma]]` — linked oncologic staging to `[[esophageal-cancer]]`; NCCN source added to frontmatter + Sources.

**Index:** Added both new sources to `### NCCN`; upgraded esophageal-cancer / esophageal-adenocarcinoma / gastric-adenocarcinoma descriptions (removed "stub", noted Mermaid + biomarker therapy).

**Remaining batches:** Colon, GIST, NET (finish NET disease script — source page exists). Mermaid algorithms to be added there too.

---

## [2026-06-18] ingest | NCCN 2026 GI/Hepatology guidelines — Batch 1 (HCC + Biliary Tract)

**Context:** User-requested ingest of the 7 NCCN 2026 PDFs in `raw/GI Guidelines/NCCN/`, GI/Hepatology scope only, paced in batches. This is batch 1. Follows the NCCN licensing convention established by `[[nccn-2026-net]]`: **summarize and cite**, do not reproduce proprietary algorithm pages verbatim (NCCN EULA prohibits redistribution + use with AI tools).

**Sources created:**
- `[[nccn-2026-hcc]]` — NCCN Hepatocellular Carcinoma v1.2026 (03/10/26). Headline change: ipilimumab+nivolumab elevated to Preferred category 1 first-line (CheckMate-9DW); strengthened EBRT/SBRT role; SC checkpoint-inhibitor substitutions.
- `[[nccn-2026-biliary-tract-cancers]]` — NCCN Biliary Tract Cancers v1.2026 (03/10/26). Emphasis on RNA-based molecular profiling (FGFR2/IDH1/HER2/BRAF/NTRK/RET/NRG1/MSI-H), gem+cis+checkpoint 1st-line, adjuvant capecitabine (BILCAP), iCCA transplant exception; core biopsy preferred over FNA.

**Entity pages created:**
- `[[gallbladder-cancer]]` — new disease script (HPB), ADDT format; previously only a differential mention.

**Pages updated (additive):**
- `[[hepatocellular-carcinoma]]` — added NCCN first-line systemic tiering + RT note to Therapeutics; source added to frontmatter + Sources list.
- `[[cholangiocarcinoma]]` — added "Oncologic Management (NCCN 2026)" subsection (molecular profiling, systemic therapy, adjuvant, iCCA transplant); source added; `[[gallbladder-cancer]]` linked in See Also.

**Index:** Added `### NCCN` source subsection (relocated `[[nccn-2026-net]]` into it; added HCC + Biliary). Updated HCC/cholangiocarcinoma descriptions + source counts; added gallbladder-cancer entry.

**Pending (user request mid-batch):** Add original **Mermaid** recreations of the key NCCN clinical algorithms to the relevant disease-script pages (license-safe alternative to screenshotting NCCN's copyrighted figures). Applies to this batch and subsequent batches.

**Remaining batches:** Esophageal/EGJ, Gastric, Colon, GIST, NET (finish NET disease script — source page already exists from prior run).

---

## [2026-06-18] ingest | NCCN 2026 Neuroendocrine & Adrenal Tumors (GI scope)

**Context:** Scheduled `ingest-and-lint` run (autonomous). Task = "ingest up to 4 uningested guidelines + lint." This instance ingested the GI scope of the **NCCN Neuroendocrine and Adrenal Tumors v1.2026** guideline.

**⚠ Concurrency observed (flag for user):** The raw `GI Guidelines/NCCN/` folder was populated mid-run with 7 NCCN 2026 PDFs (HCC, NET, Gastric, Colon, Biliary Tract, Esophageal/EGJ, GIST). A **second process was ingesting them concurrently** during this run — `[[nccn-2026-hcc]]` (08:07, integrated into `[[hepatocellular-carcinoma]]`) and `[[nccn-2026-biliary-tract-cancers]]` (08:09) were created by that other process, not this one. To avoid write-races on shared files, this instance owned **only the NET ingest** and deliberately left HCC/Biliary/Gastric/Colon/Esophageal/GIST to the concurrent run. Index/log writes here were kept minimal and additive for the same reason.

**Mislabeled-file duplicate skipped:** `raw/.../AASLD/AASLD 2011 HCC Management.pdf` is **not** a 2011 guideline — its content is the Singal et al. AASLD Practice Guidance (Hepatology 2023;78:1922–1965), already ingested as `[[aasld-2023-hcc]]`. No new page created (filename year is wrong).

**Source created:**
- `[[nccn-2026-net]]` — NCCN NET v1.2026. Per NCCN's End-User License (prohibits redistribution + use with AI tools), the page **summarizes and cites** rather than reproducing proprietary algorithm pages verbatim; entity content written in original language with NCCN cited.

**Entity pages created:**
- `[[gastroenteropancreatic-neuroendocrine-tumors]]` (disease script, `1-disease-scripts/other/`) — ADDT: WHO grading (Ki-67/mitoses; NET G1/2/3 vs NEC), gastric types 1/2/3, site/size-based endoscopic vs surgical resection (incl. appendiceal >2 cm → hemicolectomy), SSTR-PET, somatostatin analogs, PRRT (Lu-177 dotatate), everolimus/sunitinib, functioning-tumor syndromes (gastrinoma/insulinoma/glucagonoma/VIPoma, carcinoid syndrome).
- `[[somatostatin-analogs]]` (med stub, `5-meds/`) — octreotide LAR/lanreotide; SSTR-positive NET symptom + antiproliferative control.

**Connectivity:** Added inline links within the new pages (atrophic-gastritis, gastric-premalignant-conditions, peptic-ulcer-disease/ZES, pancreatic-cancer, pancreatic-cysts, colorectal-cancer, EUS/EGD/colonoscopy). Added back-link `[[gastroenteropancreatic-neuroendocrine-tumors]]` to `[[atrophic-gastritis]]` See Also (type 1 gastric NET ↔ autoimmune atrophic gastritis).

**Index:** Added `[[gastroenteropancreatic-neuroendocrine-tumors]]` (Other), `[[somatostatin-analogs]]` (Meds), and `[[nccn-2026-net]]` (Consensus Statements & Other) to `index.md`.

**Lint (light, no subagent fan-out — token budget + active concurrent writer):** Verified 0 broken links in the 3 new pages (basename resolution, 344 pages total on disk). Did **not** run a full parallel lint pass this cycle to avoid colliding with the concurrent NCCN ingest.

**Remaining for user triage:**
- `index.md` Sources section + footer counts need reconciliation once the concurrent NCCN ingest finishes — `[[nccn-2026-hcc]]` and `[[nccn-2026-biliary-tract-cancers]]` are on disk but were **not** yet in the index at the time of this entry; Gastric/Colon/Esophageal/GIST NCCN files remained uningested mid-run.
- Pre-existing items unchanged: `wiki/.fuse_hidden0000000a00000001` (stale FUSE dup) and `.DS_Store` files (sandbox could not unlink from mount).
- No git commit/push performed (matches existing workflow).

---

## [2026-06-15] lint | Scheduled ingest-and-lint — connectivity pass + hygiene

**Context:** Scheduled `ingest-and-lint` run (autonomous). Ingest step was a no-op — full reconciliation of all 154 raw `GI Guidelines/` PDFs against `wiki/sources/` confirmed **0 uningested guidelines** (consistent with the 2026-06-14 entry noting the last one was captured).

**Wiki health (clean):**
- 339 wiki pages, 6,177 wiki-links, 154 source pages, 181 entity pages.
- **0 orphan pages**, **0 genuinely broken links**, **0 unbalanced `[[ ]]`**. The only non-resolving `[[...]]` tokens are in this append-only `log.md` (`[[esophageal-manometry]]`, `[[hrem]]`, `[[wiki-links]]`) — historical/documentation text; real page is `[[high-resolution-manometry]]`, no stubs created per schema.
- Links flagged in `[[7-concepts/pancreatic-cancer-screening]]` were false positives: escaped table-cell pipes (`[[slug\|alias]]`), all targets exist.

**Connectivity added (13 new links across 13 pages):**
- Inline first-mention links: `[[hypercontractile-esophagus]]`→[[dysphagia]], `[[primary-sclerosing-cholangitis]]`→[[tacrolimus]], `[[portal-vein-thrombosis]]`→[[colonoscopy]], `[[abnormal-liver-chemistries]]`→[[portal-vein-thrombosis]], `[[acute-diarrhea]]`→[[probiotics]], `[[pancreatic-cancer-screening]]`→[[colonoscopy]], `[[flip-panometry]]`→[[antireflux-surgery]], `[[capsule-endoscopy]]`→[[colonoscopy]], `[[poem]]`→[[dysphagia]], `[[semaglutide]]`→[[bariatric-surgery]].
- See Also additions (target only appeared in a heading/frontmatter): `[[achalasia]]`+[[heller-myotomy]], `[[alcohol-associated-liver-disease]]`+[[liver-biopsy]], `[[ulcerative-colitis]]`+[[pouchitis]].

**Hygiene fixes:** `wiki/index.md` `updated:` date corrected 2026-06-04 → 2026-06-15 (was stale despite 06-14 ingest).

**Remaining for user triage (sandbox could not delete — host file lock / mount perms):**
- `wiki/.fuse_hidden0000000a00000001` — stale git-tracked duplicate of an old `index.md` (FUSE leftover from the prior vault-corruption recovery). Remove on host: `git rm wiki/.fuse_hidden0000000a00000001` then delete.
- 8 `.DS_Store` files (gitignored, cosmetic) could not be unlinked from the sandbox mount.
- No git commit/push performed (matches existing workflow — prior edits remain uncommitted for manual review).

---

## [2026-06-14] ingest | ACG 2017 Preventive Care in IBD (last remaining uningested guideline)

**Context:** Scheduled `ingest-and-lint` run; task = "ingest up to 4 guidelines + lint." Full raw-vs-`wiki/sources/` reconciliation of all 154 raw guideline PDFs found only **one** genuinely uningested file. Captured as a standalone **historical** source page, additive only (per the "do not overwrite newer info" instruction).

**Skipped as duplicates (already ingested under different/mislabeled names):**
- `ACG 2018 Management of Irritable Bowel Syndrome.pdf` = Lacy et al. → already `[[acg-2020-ibs]]` (filename year mislabeled).
- `ACG 2014 Lynch.pdf` = already `[[usmstf-2014-lynch-syndrome]]` (re-confirmed dup, as in prior runs).
- `AGA 2020 Colonoscopy Follow-Up (MSTF)`, `AGA 2020 Endoscopic Removal (MSTF)`, `AGA 2020 Malignant Colorectal Polyps (MSTF)`, `AGA 2022 CRC Screening Start-Stop (MSTF)` = the multi-society USMSTF docs already ingested as `[[usmstf-2020-followup-colonoscopy]]`, `[[usmstf-2020-endoscopic-removal]]`, `[[usmstf-2020-malignant-colorectal-polyps]]`, `[[usmstf-2021-crc-screening-age]]`.
- `ASGE 2025 GERD.pdf` = already `[[asge-2024-gerd]]` (epub 2024 / print 2025).

**Source created (historical, near-verbatim recommendation capture, bibliographic links):**
- `[[acg-2017-ibd-preventive-care]]` — Farraye et al., Am J Gastroenterol 2017;112:241–258 (doi:10.1038/ajg.2016.537). All 14 GRADE statements verbatim (influenza/pneumococcal/zoster/varicella/yellow fever/meningococcal/Tdap-HAV-HBV-HPV vaccination, cervical screening, depression/anxiety, melanoma + NMSC, osteoporosis BMD, smoking cessation in CD). Flagged **superseded** by `[[acg-2025-ibd-preventive-care]]` (vaccine products/schedules dated — predates recombinant zoster vaccine).

**Pages updated (additive only — no overwrite):**
- `[[ibd-preventive-care]]` — appended historical source to frontmatter `sources:` + `## Sources`. (UC/CD disease scripts left untouched — the current 2025 version is likewise cited only on the concept page; mirrored that convention.)

**Index/hygiene:** Added the new source entry to the ACG subsection of `index.md`; footer reconciled to 154 sources (index `## Sources` now lists 115 of 154). No `melanoma` stub created (out-of-scope non-GI disease — links removed from the source page instead).

---

## [2026-06-14] lint | Reconciliation + broken-link verification (post-ingest)

**Scope:** Light lint paired with the ingest above (small, targeted — no parallel subagent fan-out needed).

**Done:**
- Whole-corpus raw-vs-sources audit (154 raw guideline PDFs): confirmed the wiki is now **fully caught up** on raw `GI Guidelines/` — 0 genuinely uningested guideline files remain after this pass (remainder are confirmed duplicates listed above).
- Broken-link scan on the new/edited pages (basename resolution): **0 broken links** introduced.
- `index.md` footer counts + Sources-listed tally reconciled to on-disk (154 sources).

**Flagged for user triage (unchanged):**
- `.DS_Store` cleanup still **blocked by mount permissions** (12 files across repo root + `wiki/`/`raw/` subtrees) — delete locally.
- `index.md` `## Sources` section still lists only 115 of 154 source pages — full source-list reconciliation remains pending a future dedicated lint pass.
- Website needs no HTML rebuild (fetches `index.md`/`README.md` live).

---

## [2026-06-10] ingest | 4 remaining historical guidelines (AASLD 2011 Hemochromatosis, AASLD/IDSA 2011 HCV Gt1, USMSTF 2014 Bowel Cleansing, SAGES 2021 POEM)

**Context:** Scheduled `ingest-and-lint` run; task = "ingest 4 guidelines + lint." These were the only genuinely uningested raw guideline PDFs left (verified vs `wiki/sources/`; the previously flagged mislabeled "AASLD 2011 HCC" and "ACG 2014 Lynch" PDFs remain duplicates of already-ingested sources and were correctly skipped again). All four are older/superseded editions — captured as standalone historical source pages, additive only per the "do not overwrite newer info" instruction.

**Sources created (each flagged historical, near-verbatim recommendation capture, bibliographic links):**
- `[[aasld-2011-hemochromatosis]]` — 16 GRADE recs verbatim; TS+ferritin→*HFE* testing, biopsy if ALT/AST↑ or ferritin >1000 µg/L, phlebotomy to ferritin 50–100 µg/L, HCC surveillance in HH cirrhosis (RR≈20), no population screening. Complements `[[acg-2019-hereditary-hemochromatosis]]`.
- `[[aasld-idsa-2011-hcv-genotype1]]` — 18 recs verbatim; boceprevir/telaprevir triple therapy + response-guided therapy + IL28B. **Obsolete** (pre-DAA); fully superseded by `[[aasld-idsa-2023-hcv]]`. Flagged "do not apply."
- `[[acg-2014-bowel-cleansing]]` (USMSTF 2014) — 23 recs verbatim; split-dose superiority, 4–6 h/2 h timing rule, ≥85% adequate-prep per-physician benchmark, Mg/NaP cautions. Superseded for products by `[[acg-2025-bowel-prep]]`/`[[usmstf-2025-bowel-prep]]`.
- `[[sages-2021-poem]]` — 4 GRADE recs; strong POEM>PD; POEM or LHM+fundoplication for subtypes I/II; POEM favored for subtype III; post-POEM GERD the key trade-off. Foundational to `[[sages-2024-poem]]` update.

**Pages updated (additive only — no overwrite of newer content):**
- `[[hereditary-hemochromatosis]]` — +source (frontmatter + `## Sources`).
- `[[hepatitis-c]]` — +source (labeled historical/obsolete).
- `[[poem]]` — +source; inline `[[heller-myotomy|LHM]]` link added; See Also expanded (`[[heller-myotomy]]`, `[[high-resolution-manometry]]`).
- `[[achalasia]]` — +source (frontmatter + `## Sources`).
- `[[colonoscopy]]` — +source.

**Stub created (new connection, correct folder):**
- `[[heller-myotomy]]` in `4-advanced-gi-procedures/foregut-and-motility-procedures/` — resolves new See Also links from `[[poem]]`/`[[sages-2021-poem]]`; LHM is a distinct advanced procedure warranting its own page.

**Index/hygiene:**
- Added all 4 new source entries + `[[heller-myotomy]]` + the previously-unlisted `[[sages-2024-poem]]` to `index.md`; `[[poem]]` count corrected to 2 sources.
- Footer reconciled to current on-disk counts (152 sources | 97 disease scripts | 18 dx schemas | 2 general proc | 18 advanced proc | 14 meds | 0 anatomy | 32 concepts | 1 synthesis). Index `## Sources` now lists 113 of 152 — full source-list reconciliation still pending.

**Verification:** Full-wiki broken-link scan run post-edits (basename resolution); 0 broken links introduced by this pass. Website needs no HTML rebuild (fetches `index.md`/`README.md` live).

---

## [2026-06-09] lint | Inline text relations pass (wiki-wide)

**Scope:** Scheduled `ingest-and-lint` run; lint task = "create inline text relations." Deterministic densification of in-text `[[slug|Displayed Words]]` links on first plain-text mention of any entity that already has a page.

**Method:** Built a phrase→slug dictionary from every non-source wiki page (title + de-hyphenated slug; ≥6 chars or a whitelisted GI abbreviation; generic anatomy/common words stop-listed). For each page, added the first un-linked plain-text mention of each *other* entity as an inline alias link — skipping frontmatter, headings, code fences, `## Contents`/`## See Also`/`## Sources`, image embeds, and existing links/links-in-tables. One link per target per page (first-mention rule).

**Result:**
- **530 inline links added across 131 pages.** Highest-density: `[[liver-transplantation]]` (22), `[[abnormal-liver-chemistries]]` (15), `[[primary-sclerosing-cholangitis]]` (13), `[[upper-endoscopy]]` (11), `[[acute-liver-failure]]` (10).
- Tidied **157** redundant `[[x|x]]` aliases → `[[x]]`.
- Links built only from existing slugs ⇒ **zero broken links introduced** (verified by full-wiki scan).

**Pre-existing items flagged for triage (not changed):**
- `log.md` historical references to renamed/never-created slugs: `barrett-esophagus`, `esophageal-manometry`, `hrem`, `gastric-dysplasia`, `2021-chicago-classification` (old log prose; harmless).
- `wiki/7-concepts/pancreatic-cancer-screening.md` uses intentional escaped-pipe table links (`[[slug\|Label]]`) — correct for Markdown table cells, left as-is.

**Hygiene:** `.DS_Store` removal attempted but **blocked by filesystem permissions** on the mounted folder (8 files remain: repo root, `wiki/`, `raw/` subtrees) — flagged for the user to delete locally. Website needs no HTML rebuild (it fetches `index.md`/`README.md` live).

---

## [2026-06-09] ingest | 4 historical guidelines (AASLD 2011 ALF, ACG 2013 EoE, ACG 2018 Crohn's, ACG 2019 UC)

**Context:** Scheduled `ingest-and-lint` run. All remaining uningested raw guidelines are superseded older editions; per user direction (and the explicit "only add information not already present — do not overwrite newer info" instruction), these were captured as standalone **historical** source pages. Entity therapeutic content was left untouched; only additive citations were made.

**Note on selection:** "AASLD 2011 HCC Management.pdf" actually contains the AASLD 2023 HCC guidance (already ingested as `[[aasld-2023-hcc]]`) and "ACG 2014 Lynch.pdf" is the USMSTF statement already ingested as `[[usmstf-2014-lynch-syndrome]]` — both skipped as duplicates and replaced with ACG 2018 Crohn's and ACG 2019 UC.

**Sources created (each flagged historical/superseded, near-verbatim recommendation capture, bibliographic links):**
- `[[aasld-2011-alf]]` — 48 graded recs (AASLD I/II/III); etiology-directed workup, NAC, ICP/cerebral-edema management, transplant referral. Superseded by `[[acg-2023-alf]]`. ⚠ No confirmable online DOI — citation left as plain text for user to supply.
- `[[acg-2013-eoe]]` — 21 recs verbatim; historical PPI-REE construct + mandatory PPI trial. Superseded by `[[acg-2025-eoe]]`.
- `[[acg-2018-crohns]]` — 60 recs near-verbatim; pre-IL-23/JAK drug positioning. Superseded by `[[acg-2025-crohns]]`.
- `[[acg-2019-uc]]` — 54 GRADE recs near-verbatim; pre-ustekinumab/ozanimod/upadacitinib in UC. Superseded by `[[acg-2025-uc]]`.

**Pages updated (additive only — no overwrite):**
- Appended the historical source to `## Sources` + frontmatter `sources:` on `[[acute-liver-failure]]`, `[[eosinophilic-esophagitis]]`, `[[crohns-disease]]`, `[[ulcerative-colitis]]`. No therapeutic prose altered.

**Index:** Added 4 entries to the `## Sources` society subsections (ACG ×3, AASLD ×1); bumped entity source counts (EoE/Crohn's/UC 1→2, ALF 2→3).

---

## [2026-06-07] update | Wiki-wide overhaul — Sources sections + Bibliographic links

**Scope:** Full retroactive sweep following the approved achalasia pilot ([[achalasia]] / [[acg-2020-achalasia]]). Conventions applied as documented in `CLAUDE.md` and `.claude/PROGRESS-wiki-overhaul.md`.

**#1 Sources sections (DONE):**
- Swept all non-source pages across `1-disease-scripts`, `2-diagnostic-schemas`, `3-general-gi-procedures`, `4-advanced-gi-procedures`, `5-meds`, `7-concepts`, `syntheses` (179 scanned).
- Moved source slugs out of `## See Also` into a new numbered `## Sources` section (below See Also, after a `---`), alias-linked with each source's full title. `## See Also` now holds entity/concept/procedure/med links only. Frontmatter `sources:` fields left intact. 154 pages updated; pages with no sources left untouched.

**#2 Bibliographic links (DONE — 144/144):**
- Added a clickable `**Article:**` citation line and linkified `**DOI:**` (`https://doi.org/<doi>`) in `## Bibliographic Info` on every source page.
- DOIs sourced reliably: 29 from existing in-file DOI values; ~90 extracted directly from the published PDFs in `raw/` (DOI printed on the article), constrained to each society's journal-DOI prefix and home folder, with duplicate-DOI collisions excluded; the final 24 web-verified by parallel `Agent` subagents (PubMed/LWW/Springer cross-checked). Cross-validated against 31 known-correct DOIs (≥97% agreement before subagent pass).
- One exception: `[[nejm-2023-fever-returning-traveler]]` — citation left as plain text (no confirmable online article found); flagged for the user to supply the reference.

**#3 Figures (DONE — 39 figures across 22 high-traffic pages):**
- Cropped algorithm/decision/staging figures from guideline PDFs with PyMuPDF @300dpi → `raw/assets/`, embedded with cited italic captions (gold-standard pilot format). Tables left for native-Markdown recreation, not screenshotted (≤2 figures/page).
- Pages done: [[gerd]], [[eosinophilic-esophagitis]], [[barretts-esophagus]], [[gastroparesis]], [[clostridioides-difficile]], [[acute-pancreatitis]], `upper-gi-bleeding`, `acute-lower-gi-bleeding`, [[ulcerative-colitis]] (ASUC), [[celiac-disease]] (Dx + monitoring), [[helicobacter-pylori-infection]] (first-line + salvage), `dyspepsia` (undiagnosed + functional), [[chronic-pancreatitis]] (Dx + mechanistic), [[pancreatic-cysts]] (approach + surveillance), [[hepatocellular-carcinoma]] (BCLC staging + surveillance recall), [[portal-hypertension]] (noninvasive staging), `small-bowel-bleeding` (brisk + sub-acute), `abnormal-liver-chemistries` (AST/ALT + moderate-elevation), [[hereditary-hemochromatosis]] (Dx/Tx), `acute-diarrhea` (empiric approach), [[defecation-disorders]] (constipation evaluation), [[alcohol-associated-liver-disease]] (AAH dx/mgmt), [[gastric-premalignant-conditions]] (nondysplastic + dysplastic), [[atrophic-gastritis]] (clinical management). All crops visually verified; no broken embeds; no scratch files left in `raw/assets/`.
- PDFs with no extractable algorithm figure (skipped): ACG Crohn's 2025, ACG biliary strictures 2023, ACG CRC screening 2021/2026 HE/2023 ALF/2020 SIBO/2015 colon-ischemia, AASLD AIH/NAFLD/Wilson/PBC/PSC, AGA IDA/GIM/obesity, ASGE Barrett's (image-only or no flowchart). Essentially all guideline PDFs with a usable algorithm figure are now covered.

**Tooling notes:** Mechanical transforms (Sources sections, DOI linking) done by deterministic scripts — no parallel write conflicts. Most DOIs extracted locally with PyMuPDF (`fitz`), which beat Crossref top-hits for reliability; residual DOIs + all figure cropping done by parallel `Agent` subagents (each owning distinct files). Figure crops visually verified.

**Shared files:** `wiki/index.md` unchanged (no pages added/removed — catalog counts still valid). This entry is the only `log.md` addition.

---

## [2026-06-05] ingest | ASGE 2023 Ergonomics in Endoscopy

**Sources created:**
- `[[asge-2023-ergonomics]]` — all 5 GRADE recommendations verbatim (2 strong: ergonomics education, neutral monitor position, + neutral bed height; 2 conditional: micro/macrobreaks, antifatigue mats), plus epidemiology and expert-opinion considerations (hand size, lead aprons, scope maintenance).

**Pages created:**
- Concept: `[[endoscopy-ergonomics]]` — ERI epidemiology (57.7% pooled rate), risk factors (female OR 1.79, procedure volume), neutral posture, and the five interventions with specifics.

**Notes:** Final ingest of the high-value backlog. The originating subagent hit the session limit after writing the source page but before the concept page; orchestrator completed the concept page and index/log entries so the ingest was not left partial.

**Remaining raw guidelines are all superseded older editions** (AASLD 2011 ALF/HCC/Hemochromatosis, AASLD-IDSA 2011 HCV, ACG 2013 EoE, ACG 2014 Lynch, ACG 2014 Bowel Cleansing, ACG 2017 IBD Preventive Care, ACG 2018 Crohn's, ACG 2018 IBS, ACG 2019 UC) — newer editions of each are already ingested. Left uningested intentionally to avoid stale/contradictory entity content; await user direction on whether to capture as historical source pages.

---

## [2026-06-04] ingest | 5-guideline parallel ingest (ASGE 2018 Barrett's EET, ASGE 2019 Barrett's Screening/Surveillance, ASGE 2023 Post-Transplant Biliary Strictures, AGA 2021 Crohn's pharm, AASLD 2009 Liver Biopsy)

**Sources created:**
- `[[asge-2018-barretts-eet]]` — 7 GRADE recs verbatim; EET over esophagectomy for HGD/IMC; resect visible lesions before ablation; strong against complete EMR.
- `[[asge-2019-barretts-screening-surveillance]]` — 6 GRADE statements; at-risk screening strata; chromoendoscopy + Seattle protocol; against routine EUS/CLE; WATS-3D adjunct.
- `[[asge-2023-post-transplant-biliary-strictures]]` — 4 conditional GRADE recs; ERCP over PTBD (8.47× allograft-failure odds); cSEMS over multiple plastic stents.
- `[[aga-2021-crohns-pharm]]` — 11 recommendation groups verbatim; foundational, largely superseded for drug positioning by `[[aga-2025-crohns-pharm]]`/`[[acg-2025-crohns]]`.
- `[[aasld-2009-liver-biopsy]]` — 34 graded recs; no validated INR/platelet cutoff predicts bleeding; ideal specimen ~3 cm/16-gauge/>11 portal tracts.

**Pages created:**
- Procedures: `[[endoscopic-eradication-therapy]]`, `[[radiofrequency-ablation]]` (stub).
- Disease scripts: `[[esophageal-adenocarcinoma]]` (stub; resolves pre-existing dangling links from Barrett's source pages; cross-linked to `[[esophageal-cancer]]`).
- Concepts: `[[liver-biopsy]]`.

**Pages updated:**
- `[[barretts-esophagus]]` — ASGE screening strata, advanced-imaging GRADE positions, EET indication grades, EMR-first, post-CE-IM surveillance.
- `[[biliary-stricture]]` + `[[liver-transplantation]]` + `[[ercp]]` — post-LT anastomotic vs non-anastomotic stricture management.
- `[[crohns-disease]]` — 2021 AGA positioning (anti-TNF response framework, combo therapy, natalizumab against), flagged as superseded by 2025.

**Notes:** 5 parallel ingest subagents (one handled both Barrett's docs to avoid write conflict). One subagent exceeded its brief — reorganized index.md Sources into society sub-headers and authored the 4 diagnostic schemas logged below; all prior index entries verified preserved. Pre-existing index gap surfaced: Sources section lists ~103 of 143 source pages — flagged for a future lint reconciliation.

---

## [2026-06-04] update | New diagnostic schemas (dysphagia, chronic diarrhea, nausea & vomiting, jaundice)

**Pages created (diagnostic schemas):**
- `[[dysphagia]]` — oropharyngeal vs. esophageal localization, solids-vs-liquids discriminator, EGD-first algorithm with mandatory EoE biopsies, HRM/FLIP for normal-EGD motility workup, alarm features.
- `[[chronic-diarrhea]]` — >4 wk definition, watery/inflammatory/fatty + secretory/osmotic classification with stool osmotic gap, calprotectin-guided algorithm, microscopic colitis/bile acid diarrhea/celiac/EPI workup, positive IBS-D diagnosis.
- `[[nausea-and-vomiting]]` — vs. regurgitation/rumination, acute/chronic split, GI/CNS/metabolic/functional DDx, mandatory pregnancy test, EGD + 4-hr gastric emptying, CVS/CHS recognition.
- `[[jaundice]]` — bilirubin fractionation, hemolysis vs. Gilbert, R-ratio hepatocellular vs. cholestatic, RUQ US → MRCP/EUS/ERCP for biliary dilation, cholangitis/painless-jaundice red flags.

**Stubs created (to support inline links):**
- `[[esophageal-cancer]]`, `[[microscopic-colitis]]`, `[[bile-acid-diarrhea]]`, `[[choledocholithiasis]]`

**Index updated:** added 4 schemas under Diagnostic Schemas + 4 disease-script stubs in their subcategories.

**Notes:** Schemas authored from established GI knowledge (no new source ingested; `sources: []`). All inline links resolved against existing pages or newly created stubs; each page includes a Contents TOC, mermaid algorithm, and standardized See Also line.

---

## [2026-06-04] ingest | 4-guideline parallel ingest (ASGE 2022 Pancreatic Cancer Screening, ASGE 2023 Indeterminate Biliary Strictures, AGA 2021 Intragastric Balloons, AGA 2020 Probiotics)

**Sources created:**
- `[[asge-2022-pancreatic-cancer-screening]]` — all 5 GRADE recommendations + condition-specific starting-age table verbatim; all BRCA1/2 carriers screened regardless of family history.
- `[[asge-2023-indeterminate-biliary-strictures]]` — all 3 GRADE recommendations verbatim (fluoroscopic biopsy + brush cytology; cholangioscopy for nondistal; EUS for distal/nodal/nondiagnostic).
- `[[aga-2021-intragastric-balloons]]` — all 7 GRADE recommendations (2 strong: concomitant lifestyle, PPI prophylaxis).
- `[[aga-2020-probiotics]]` — all 8 GRADE recommendations (FOR/AGAINST/no-rec by condition).

**Pages created:**
- Disease scripts: `[[pancreatic-cancer]]` (full ADDT PDAC), `[[hereditary-pancreatitis]]` (stub), `[[pouchitis]]` (stub).
- Concepts: `[[pancreatic-cancer-screening]]`, `[[mri-mrcp]]`, `[[brca-pathogenic-variants]]`, `[[familial-pancreatic-cancer]]`, `[[fammm-syndrome]]`, `[[brush-cytology]]`, `[[fish]]`, `[[confocal-laser-endomicroscopy]]`, `[[probiotics]]`, `[[obesity]]`.
- Procedures: `[[intragastric-balloon]]`, `[[bariatric-surgery]]` (stub), `[[cholangioscopy]]`.

**Pages updated:**
- `[[cholangiocarcinoma]]` — expanded from stub to full ADDT with diagnostic modality-sensitivity table and transplant needle-track-seeding caution.
- `[[biliary-stricture]]` — multimodality sampling sensitivities and location-based tissue-acquisition recommendations.

**Key contributions:**
- Combined-modality biliary sampling sensitivities: brush cytology ~0.40, +fluoroscopic biopsy ~0.66, +cholangioscopy ~0.72, +EUS ~0.88 (all conditional/very-low-quality).
- AGA "against probiotics in pediatric acute gastroenteritis" conflicts with older ESPGHAN/IDSA positions (flagged on `[[probiotics]]`).

**Method:** 4 parallel ingest subagents; shared writes (index/log) consolidated centrally.

---

## [2026-06-03] lint | Vault corruption recovery + concepts/ merge + cross-ref standardization

**Critical fix — vault-wide newline corruption:**
- Discovered 227 of 247 wiki pages had every newline stripped (single-line, unparseable). Root cause: commit `02ddc1d` ("vault backup: 2026-06-02 23:32:30"), an obsidian-git auto-backup that committed disk files after some process removed their newlines. Prior commit `82e6c3b` was healthy.
- Restored all of `wiki/` from `82e6c3b` (verified content-identical except whitespace — zero content loss), bringing all 247 pages back to healthy markdown.
- `log.md` itself was corrupted the same way and is restored here.
- **Action item for user:** an automated process is stripping newlines; review obsidian-git (`autoSaveInterval: 30`, `autoBackupAfterFileChange: true`) and any markdown-rewriting plugin (mermaid-next, image-converter) to prevent recurrence.

**Stray `concepts/` folder merged and removed:**
- A prior lint had created `wiki/concepts/` with 162 empty auto-generated stubs (not part of the schema). Resolved: 140 were exact duplicates of existing pages (deleted; links resolve by basename); 8 repointed to canonical pages under different slugs (`barrett-esophagus`→`barretts-esophagus`, `esophageal-manometry`/`hrem`→`high-resolution-manometry`, `hepatorenal-syndrome-aki`→`aki-in-cirrhosis`, `gastric-dysplasia`→`gastric-premalignant-conditions`, `pcab`→`vonoprazan`, `intrahepatic-cholestasis-of-pregnancy`→`liver-disease-in-pregnancy`, `mesenteric-ischemia`→`acute-mesenteric-ischemia`); 12 genuine gaps relocated to correct schema folders as stubs (`cholangiocarcinoma`, `gastric-adenocarcinoma`, `rectal-prolapse`, `acute-mesenteric-ischemia`, `mesenteric-artery-aneurysm`, `li-rads`, `colonoscopy-surveillance`, `hcc-surveillance`, `antireflux-surgery`, `sacral-nerve-stimulation`, `biofeedback-therapy`, `lubiprostone`); 2 junk stubs deleted (an image-embed `.png.md`, `wiki-links`). Folder removed.

**Inline cross-linking pass (subagents):**
- Ran the new inline-linking convention across all 80 disease-script pages (3 parallel subagents) and most concept/med/schema/procedure pages (2 subagents, interrupted by session limit). First-mention entity names in body text are now `[[slug|words]]` links. Total wiki links now ~3,424; 0 broken links in content pages (verified).
- Completed `## See Also` standardization wiki-wide deterministically (derived from each page's body links + frontmatter sources): now present on 229/244 content pages (remaining 15 are empty stubs or link-less source pages).
- Fixed real broken links found during validation: `[[raw/...Gastroparesis]]` → `[[gastroparesis]]` (dyspepsia, poem, acg-cag-2017-dyspepsia), a full-path `wiki/...` link, and unlinked a non-existent `esophageal-dilation` reference.
- Inline-linked all 94 `sources/` summary pages (4 parallel subagents; 0 broken links, verified).
- **Remaining for a future pass:** candidate new stub pages surfaced by subagents (e.g. TIPS, UDCA/tenofovir/entecavir/NAC/carvedilol and the IBD biologics as med pages, zollinger-ellison-syndrome, microscopic-colitis, esophageal-adenocarcinoma, gastric-net, EGJOO) — reported, not auto-created to avoid re-bloating the wiki.

**Cross-reference standardization:**
- Standardized 39 bottom cross-reference sections to the new format: a single `## See Also` heading followed by one comma-delimited line of wiki links (consolidated from `Related Pages`, `Cross-References`, `Related Wiki Pages`, and bulleted variants).

**Hygiene:**
- Fixed malformed full-path link in `peptic-ulcer-disease.md` (`[[wiki/1-disease-scripts/.../gastroparesis]]` → `[[gastroparesis]]`).
- Deleted orphaned lint tooling left by a prior agent: `scripts/lint-all-markdown.js` and `.markdownlint.config.js` (unused, not part of the LLM-driven lint).

**Schema (`CLAUDE.md`) updates:**
- Inline body-text linking is now required (link the word, not just bottom lists); lints must add inline links every pass.
- Lint parallelization guidance (fan out per-folder subagents; serialize shared-file writes).
- Never create new folders; lint reports are ephemeral (log-only, never written to disk).
- Standardized log location/format and bottom `## See Also` format.
- Stub-creation guards: check basename existence anywhere before stubbing; never stub image embeds or doc-example `[[tokens]]`; place stubs in correct schema folder.

---

## [2026-05-31] ingest | AASLD MASLD/MASH cluster (4 sources): NAFLD Guidance, Nomenclature, Resmetirom, Blood-Based NILDA

**Sources created (4):**

- `wiki/sources/aasld-2023-nafld.md` — AASLD 2023 Practice Guidance on Clinical Assessment and Management of NAFLD (Rinella et al. Hepatology 2023;77:1797–1835). All 29 guidance statements verbatim; Table 5 NIT cut-points (steatosis/at-risk NASH/advanced fibrosis/cirrhosis); Table 6 medications; treatment detail (weight-loss dose-response, Mediterranean diet, coffee, bariatric, pioglitazone/vitamin E/semaglutide).
- `wiki/sources/aasld-2023-masld-nomenclature.md` — Kanwal et al. Hepatology 2024;79:1212–1219. SLD/MASLD/MASL/MASH/MetALD schema; full 5-item CMRF criteria with thresholds; MetALD alcohol ranges; >99% NAFLD↔MASLD overlap; Table 1 key points verbatim.
- `wiki/sources/aasld-2024-resmetirom.md` — Chen et al. Hepatology 2025;81:312–320. All practice recommendations verbatim (patient selection, pretreatment, monitoring, efficacy/futility); MAESTRO-NASH efficacy; dosing + CYP2C8/statin DDIs; thyroid/SHBG/gallstone considerations; response thresholds (VCTE ≥25%, MRE ≥20%, MRI-PDFF <30% futility).
- `wiki/sources/aasld-2024-nilda-blood.md` — Sterling et al. Hepatology 2024 (blood-based NILDA; created via parallel subagent). 6 PICOs / 10 GRADE statements verbatim; FIB-4 / NFS / ELF diagnostic cut-points; confounders; against blood steatosis indices and serial monitoring.

**Pages updated:**

- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/nafld-masld.md` — major sourcing overhaul: nomenclature section now cites primary Delphi/Guidance sources with full SLD schema + 5 CMRF criteria + MetALD gram ranges; rebuilt NIT section with the two-tier FIB-4→VCTE/MRE/ELF diagnostic pathway (rule-in/rule-out + cirrhosis cut-points + age caveats), blood-NIT confounders, and a separate F2–F3 pharmacotherapy-candidacy table; resmetirom section fully fleshed out (dosing/DDI/pretreatment/monitoring/futility); added AASLD guidance-statement attributions (GS 1–29) across lifestyle/pharmacotherapy/bariatric/statin sections. Sources frontmatter expanded 3 → 7.
- `wiki/index.md` — nafld-masld entry rewritten (2 → 7 sources); 4 new source entries added; total 90 → 94 sources; updated date 2026-05-31.

**Note:** Applied user's standing preference to ingest in parallel — the blood-based NILDA source was read + drafted by a subagent concurrently while the other 3 source pages were written; the shared `nafld-masld.md` entity page was consolidated in a single pass to avoid write conflicts.

---

## [2026-05-28] ingest | AASLD 2023 Practice Guidance: Prevention, Diagnosis, and Treatment of HCC

**Source:** Singal AG, Llovet JM, Yarchoan M, Mehta N, Heimbach JK, Dawson LA, et al. AASLD Practice Guidance on Prevention, Diagnosis, and Treatment of Hepatocellular Carcinoma. Hepatology 2023;78:1922–1965. DOI: 10.1097/HEP.0000000000000466

**Pages created:**

- `wiki/sources/aasld-2023-hcc.md` — complete verbatim capture of all 50 guidance statements with evidence levels and recommendation strengths; surveillance populations (Table 1); recall algorithm (Figure 5); LI-RADS CT/MRI criteria (Figure 6–8); BCLC 2022 staging table (Figure 9); surgical algorithm (Figure 10); recurrence algorithm (Figure 11); LT criteria tables (Tables 3–4); TACE/TARE-unsuitability/refractoriness criteria (Tables 5–6); systemic therapy Phase III trial efficacy data (Tables 7–8)

**Pages updated:**

- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/hepatocellular-carcinoma.md` — major comprehensive update: complete HCC surveillance table (Table 1: cirrhosis ≥1%/yr, non-cirrhotic HBV ≥0.2%/yr, PAGE-B ≥10); full recall algorithm per US Vis score and AFP; BCLC 2022 full staging table with treatment options and expected survival per stage; LI-RADS complete category definitions with CT/MRI criteria (LR-1 to LR-TIV) and IHC markers; locoregional therapy ladder (resection→ablation→TACE→systemic) with TACE and TARE unsuitability/refractoriness criteria; systemic therapy dosing for all agents (atezo+bev, durvalumab+tremelimumab, sorafenib 400 mg BID, lenvatinib 12/8 mg QD weight-based, regorafenib, cabozantinib, ramucirumab, pembrolizumab); treatment sequencing algorithm; LT candidacy (Milan, UCSF, Up-to-Seven, Extended Toronto, Kyoto, UNOS-DS exact criteria; AFP thresholds; RETREAT score); GS 49 (no ICI post-LT); ACP guidance; adjuvant section confirmed consistent with [[aasld-2025-hcc-critical-update]] (atezo+bev contraindicated, GS 32 Revised, Strong Level 1)
- `wiki/index.md` — HCC entry description expanded; aasld-2023-hcc added to Sources; total 89 → 90 sources

**Key gaps filled over prior HCC page:**

- BCLC 2022 staging detail (fills gap noted in task brief)
- Sorafenib and lenvatinib dosing (fills gap noted in task brief)
- Complete surveillance criteria table with HCC incidence rates by population
- LI-RADS management algorithm by category
- TACE/TARE unsuitability and refractoriness criteria
- Weight-based lenvatinib dosing (12 mg ≥60 kg; 8 mg <60 kg)
- Pre-atezo+bev EGD requirement and variceal management
- GS 49: ICIs absolutely contraindicated post-LT; sorafenib/lenvatinib only
- T1 HCC wait-and-not-ablate algorithm
- RETREAT post-LT recurrence scoring
- Adjuvant GS 32 original text preserved with superseded notice per 2025 update

---

## [2026-05-28] ingest | AASLD 2020 Alcohol-Associated Liver Disease

**Source ingested:**

- `wiki/sources/aasld-2020-ald.md` — AASLD 2019/2020 Practice Guidance: Diagnosis and Treatment of Alcohol-Associated Liver Diseases (Crabb, Im, Szabo, Mellinger, Lucey. Hepatology 2020;71:306–333). 22 guidance statements. Key content: definite/probable/possible AH consensus classification (with confounding-factor criteria); MDF ≥32 as primary corticosteroid threshold; MELD ≥20 prompts steroid consideration; prednisolone 40 mg × 28 days supported by Mathurin IPD meta-analysis (11 RCTs, n=2,111; HR 0.64, 36% risk reduction at 28 days) and STOPAH post hoc analysis; IV NAC combination "of potential benefit" (30-day improvement per Nguyen-Khac RCT and network meta-analysis of 22 RCTs); pentoxifylline explicitly abandoned (GS-19); AKI with creatinine >2.5 mg/dL = relative contraindication; GIB is NOT an absolute contraindication (prednisolone can be initiated ~5 days post-GIB); Lille score at day 7 guides continuation/cessation; early LT for severe AH non-responders endorsed (GS-22); no fixed abstinence interval for LT listing (GS-21); baclofen/acamprosate preferred AUD pharmacotherapy in ALD; PEth preferred alcohol biomarker (not affected by liver disease); PNPLA3/TM6SF2/MBOAT7 risk genes; HSD17B13 protective variant. This guideline is distinct from ACG 2024 ALD (already ingested): AASLD 2020 provides deeper AH-specific scoring, detailed steroid evidence base, STOPAH data, formal pentoxifylline abandonment, explicit GI bleeding guidance, early LT evidence summary, and comprehensive alcohol biomarker table.

**Pages updated:**

- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/alcohol-associated-liver-disease.md` — expanded significantly. Added: AASLD 2020 three-category AH classification (definite/probable/possible) with confounding-factor criteria; natural history progression rates; revised severity section with ABIC/GAHS scores and Lille/MELD combination data; corticosteroid evidence base (STOPAH, Mathurin IPD meta-analysis) with specific GIB and AKI guidance; NAC classified per AASLD 2020 evidence tier; pentoxifylline abandonment section; expanded AUD pharmacotherapy table with 5 agents and ALD-specific hepatotoxicity data; comprehensive alcohol biomarker section (PEth/EtG/EtS/CDT performance table); AKI in AH management subsection; genetic susceptibility subsection (PNPLA3/TM6SF2/MBOAT7/HSD17B13); expanded early LT section with Mathurin + Lee multicenter survival data and SALT score; 6-month rule critique; cross-links to [[aki-in-cirrhosis]] and [[hepatic-encephalopathy]] added. Sources expanded from 2 to 5.
- `wiki/index.md` — ALD entry updated to 5 sources description; new source entry added; total updated to 89 sources.

## [2026-05-28] ingest | AASLD 2022 Practice Guidance: PSC and Cholangiocarcinoma

**Source:** AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma. Bowlus CL, Arrivé L, Bergquist A, et al. Hepatology. 2023;77:659–702. DOI: 10.1002/hep.32771

**Pages created:**

- `wiki/sources/aasld-2022-psc.md` — complete verbatim capture of all 53 guidance statements; full diagnostic, surveillance, management, and CCA sections

**Pages updated:**

- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/primary-sclerosing-cholangitis.md` — major comprehensive update; added AASLD 2022 as third source
- `wiki/index.md` — PSC entry description updated; aasld-2022-psc added to Sources section; total count incremented to 88 sources

**Key contributions (AASLD 2022 vs prior ACG 2015):**

- Diagnostic: 3D MRI/MRCP formalized (T1w+T2w+contrast, 1.5T, 1-mm slices); ERCP explicitly contraindicated for diagnosis (GS 3)
- New stricture terminology: dominant (ERCP-based ≤1.5 mm CBD / ≤1 mm hepatic duct) vs. high-grade (>75% reduction on MRI) vs. relevant stricture (clinically defined with symptoms)
- Fibrosis staging: LS by TE or MRE replaces liver biopsy (GS 9–10); TE cutoffs 9.6 kPa = F3, 14.4 kPa = F4
- Prognostic tools: Amsterdam-Oxford, UK-PSC, PRESTo, SCOPE models with calculator URLs (Table 3)
- UDCA nuance: ≥28 mg/kg/d remains contraindicated; 13–23 mg/kg/d conditionally acceptable if persistent ALP/GGT and trial ineligible (GS 12); oral vancomycin insufficient evidence (GS 13)
- CCA surveillance: annual MRI/MRCP ± CA 19-9 (not US alone); not recommended <18y or small-duct PSC (GS 18); FISH for all relevant strictures at ERCP (GS 19); Figure 5 stricture management algorithm embedded
- CRC surveillance: HD colonoscopy q1–2y from age 15 in PSC-IBD (GS 22); chromoendoscopy when only SD available
- Gallbladder: polyps ≤8 mm → US q6mo; >8 mm → cholecystectomy (GS 20)
- LT: MELD exception criteria (recurrent cholangitis; CCA protocol); rPSC 10–37% with diagnostic criteria; Roux-en-Y preferred biliary reconstruction (GS 30–31)
- Nutrition/bone: vitamin dosing tables; DEXA q2–3y; bisphosphonate algorithm by variceal status (GS 28–29)
- New: comprehensive CCA management (iCCA/pCCA/dCCA); Mayo neoadjuvant LT protocol for pCCA ≤3 cm; gem/cis first-line; FOLFOX second-line; NGS at diagnosis; FGFR inhibitors (GS 32–53)

---

## [2026-05-28] ingest | AASLD 2018 + 2021 Primary Biliary Cholangitis guidelines

**Sources ingested:**

- `wiki/sources/aasld-2018-pbc.md` — AASLD 2018 Practice Guidance: Primary Biliary Cholangitis (Lindor et al. Hepatology 2019;69:394–419). 21 guidance statements covering diagnosis, UDCA, OCA, fibrates, pruritus management, sicca syndrome, bone disease, hyperlipidemia, portal hypertension, HCC surveillance, liver transplantation, recurrent PBC post-LT, and PBC-AIH overlap (Paris criteria).
- `wiki/sources/aasld-2021-pbc.md` — AASLD 2021 Practice Guidance Update: PBC (Lindor et al. Hepatology 2022;75:1012–1013). Focused 2-statement revision: OCA contraindicated in advanced cirrhosis (prior/current decompensation or portal hypertension) per May 2021 FDA warning; fibrates discouraged in decompensated liver disease; careful monitoring for all cirrhotics on OCA.

**Pages updated:**

- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/primary-biliary-cholangitis.md` — expanded from stub to full ADDT page incorporating both guidelines. Covers: diagnostic criteria (2-of-3), AMA/AMA-negative PBC (sp100/gp210/anti-kelch-like 12), histologic staging (Ludwig I–IV), GLOBE/UK-PBC prognostic scores, 8 biochemical response criteria table (Paris I/II, Rotterdam, Toronto, Barcelona, Rochester), UDCA 13–15 mg/kg/day, OCA 5→10 mg/day (POISE trial data, 2021 contraindication update), fibrates (bezafibrate BEZURSO trial, fenofibrate), pruritus stepwise ladder (resins→rifampicin→naltrexone→sertraline), fatigue (no effective Rx; NOT an LT indication), sicca syndrome management, bone disease (alendronate), hyperlipidemia (statins safe), portal hypertension in PBC (including precirrhotic NRH), HCC surveillance criteria, LT indications (MELD >14), recurrent PBC post-LT (20–50% at 10–20 years), PBC-AIH overlap (Paris criteria), pregnancy management, family screening.
- `wiki/index.md` — PBC entry updated from stub to full ADDT description; 2 new source entries added; total updated to 87 sources.

**Key clinical points:**

- OCA contraindication was tightened in 2021: now "advanced cirrhosis" (prior/current decompensation or portal hypertension) is broader than the prior Child-Pugh B/C threshold — thrombocytopenia alone qualifies
- Fatigue in PBC is NOT an LT indication; pruritus IS
- Bezafibrate (BEZURSO trial) achieves 67% ALP normalization vs. 0% placebo but is unavailable in US; fenofibrate is the available off-label alternative
- PBC-AIH overlap requires Paris criteria (ALT >5× ULN and/or IgG ≥2× ULN/anti-SMA and/or interface hepatitis on biopsy) — not merely ANA/SMA positivity alone

## [2026-05-28] lint | Extra high-effort lint pass + HE ingest

**Hygiene fixes (auto-corrected):**

- Deleted 5 `.DS_Store` files: vault root, wiki/, raw/, wiki/1-disease-scripts/, raw/GI Guidelines/
- `wiki/index.md` footer count corrected: was `85 sources | 77 disease scripts | 25 concepts` → now `85 sources | 76 disease scripts | 26 concepts` (sources correctly reflects 84 files + 1 new = 85 after HE ingest; disease scripts reconciled to 76 actual files; concepts +1 for new HE page)
- `wiki/index.md` updated: field `updated:` 2026-05-25 → 2026-05-28

**New page created:**

- `7-concepts/hepatic-encephalopathy.md` — created as stub during lint (gap flagged by previous lint, referenced heavily by ACLF and portal-hypertension pages), then immediately upgraded to full concept page via AASLD/EASL 2014 HE guideline ingest

**YAML frontmatter verified:**

- All 4 new disease scripts from today's parallel ingest (`hepatitis-c.md`, `portal-hypertension.md`, `acute-on-chronic-liver-failure.md`, `direct-acting-antivirals.md`): correct category, tags, created/updated dates, sources fields — all verified correct
- All 4 new source pages: correct category: source, created 2026-05-28 — verified correct
- `variceal-upper-gi-bleeding.md`: `aasld-2023-portal-hypertension` correctly in sources list — confirmed

**Cross-links added:**

- `aki-in-cirrhosis.md` — added `[[portal-hypertension]]` and `[[acute-on-chronic-liver-failure]]`
- `alcohol-associated-liver-disease.md` — added `[[portal-hypertension]]` and `[[acute-on-chronic-liver-failure]]`
- `nafld-masld.md` — added `[[portal-hypertension]]` and `[[acute-on-chronic-liver-failure]]`
- `chronic-hepatitis-b.md` — added `[[hepatitis-c]]` (HBV/HCV coinfection context) plus `[[portal-hypertension]]`, `[[acute-on-chronic-liver-failure]]`
- `rifaximin.md` — added `[[hepatic-encephalopathy]]` with sourced content from new AASLD/EASL 2014 guideline

**Confirmed cross-links already present in new pages:**

- `hepatitis-c.md` → `[[portal-hypertension]]`, `[[chronic-hepatitis-b]]`, `[[liver-transplantation]]`, `[[hepatocellular-carcinoma]]` — all confirmed present in cross-references footer
- `portal-hypertension.md` → `[[variceal-upper-gi-bleeding]]`, `[[ascites]]`, `[[spontaneous-bacterial-peritonitis]]`, `[[aki-in-cirrhosis]]`, `[[hepatic-encephalopathy]]`, `[[hepatopulmonary-syndrome-portopulmonary-hypertension]]` — all confirmed present
- `acute-on-chronic-liver-failure.md` → `[[aki-in-cirrhosis]]`, `[[hepatic-encephalopathy]]`, `[[spontaneous-bacterial-peritonitis]]`, `[[liver-transplantation]]` — all confirmed present

**Uningested file ingested (1 of max 2):**

- `aasld-easl-2014-hepatic-encephalopathy` — AASLD/EASL 2014 Practice Guideline: Hepatic Encephalopathy in Chronic Liver Disease (Vilstrup et al. Hepatology 2014;60:715–735). 33 recommendations; 4-axis classification system; WHC/GCS grading; ammonia has no diagnostic/staging/prognostic value (Rec 9); lactulose first-line (Rec 19); rifaximin add-on after 2nd episode (Rec 26); protein restriction never indicated (1.2–1.5 g/kg/day, Rec 31); late-night snack (Rec 32); post-TIPS HE: no prophylaxis benefit (Rec 27); recurrent intractable OHE = LT indication (Rec 13). Expands `hepatic-encephalopathy.md` from stub to full concept page.

**Index updates:** 84 → 85 sources (+1 HE guideline); concepts 25 → 26 (+1 hepatic-encephalopathy)

**Issues for user triage (priority order):**

1. `primary-biliary-cholangitis.md` is still a stub — AASLD 2018 PBC guideline (635 KB) and AASLD 2021 PBC update (117 KB) both available in raw/; second high-priority ingest available for next lint pass
2. `hepatocellular-carcinoma.md` — BCLC staging detail and sorafenib/lenvatinib dosing remain stubs; AASLD 2023 HCC Prevention/Diagnosis/Treatment (raw/AASLD/) is large and available
3. `alcohol-associated-liver-disease.md` — AASLD 2020 ALD guideline not yet ingested (distinct from ACG 2024 ALD already ingested); available in raw/
4. `AASLD 2022 PSC` (raw/GI Guidelines/AASLD/) — distinct from ACG 2015 PSC already ingested; would expand `primary-sclerosing-cholangitis.md`
5. `AASLD 2021 Malnutrition Frailty Sarcopenia Cirrhosis.pdf` — no cirrhosis malnutrition/frailty page exists; would fill gap referenced by ACLF page

---

## [2026-05-28] ingest | 4-guideline parallel ingest (AASLD 2022 Wilson Disease, AASLD 2023 Portal Hypertension, AASLD 2024 ACLF, AASLD-IDSA 2023 HCV)

**Sources ingested (4):**

- `aasld-2022-wilson-disease` — AASLD 2022 Practice Guidance on Wilson Disease (Schilsky, Roberts et al. Hepatology 2025;82:E41–E90); 38 guidance statements; Leipzig score table; NWI prognostic scoring; treatment monitoring targets (Table 10); trientine tetrahydrochloride (FDA 2022); decompensated cirrhosis combination protocol; ALF→immediate LT; HCC surveillance; pregnancy guidance
- `aasld-2023-portal-hypertension` — AASLD 2023 Practice Guidance: Portal Hypertension and Varices (Kaplan et al. Hepatology 2024;79:1180–1211); 58 guidance statements; cACLD/CSPH staging (Rule of Five); carvedilol as preferred NSBB (6.25–12.5 mg/day); preemptive TIPS (CTP B>7 active bleeding or CTP C 10–13, within 72h); no FFP/platelets by INR/platelet targets; secondary prophylaxis NSBB + EVL; gastric/ectopic varices management
- `aasld-2024-aclf` — AASLD 2024 Practice Guidance: ACLF (Karvellas, Bajaj et al. Hepatology 2024;79:1463–1502); 51 guidance statements; minimum ACLF definition; NACSELD/EASL-CLIF/APASL comparison; terlipressin contraindicated in ACLF-3 (CONFIRM trial respiratory failure signal); protein restriction never indicated; LT candidacy (trajectory-based); futility thresholds (CLIF-C>70/lactate>9); palliative care mandatory
- `aasld-idsa-2023-hcv` — AASLD-IDSA 2023 HCV Guidance Update (Bhattacharya et al. Clin Infect Dis 2023; doi:10.1093/cid/ciad319); G/P 8 wk now approved for compensated cirrhosis (EXPEDITION-8); simplified algorithm includes HIV coinfected; incomplete adherence algorithm (new); retreatment MAGELLAN-3 (G/P+SOF+RBV 96% SVR); viremic donor organs → DAA within first week; pediatric treatment ≥3 years

**New entity pages created:**

- `portal-hypertension.md` — full ADDT (new page; cACLD, CSPH, NSBB, primary/secondary prophylaxis, AVH management, gastric/ectopic varices, PHG, special situations)
- `acute-on-chronic-liver-failure.md` — full ADDT (new page; all 51 guidance statements integrated into organ-by-organ ICU management framework)
- `hepatitis-c.md` — full ADDT (new page; universal screening, simplified algorithm, decompensated regimens, retreatment, post-SVR care, key populations)
- `direct-acting-antivirals.md` — concept stub (new)

**Entity pages expanded/updated:**

- `wilson-disease.md` — expanded from stub to full ADDT: Leipzig score, NWI, complete diagnostics, all drug dosing, monitoring targets, combination therapy for decompensated cirrhosis, ALF biochemical criteria, Korman criteria, HCC surveillance, pregnancy, neuropsychiatric management
- `variceal-upper-gi-bleeding.md` — major update: AASLD 2023 GS 25–39 incorporated; no FFP/platelets mandate; preemptive TIPS criteria; NSBB timing at vasoactive discontinuation; no routine PPI; secondary prophylaxis protocol; gastric varices added

**Index updates:** 80 → 85 sources (+5); disease scripts 73 → 77 (+4); concepts 24 → 25 (+1)

---

## [2026-05-25] lint | Extra high-effort lint pass

**Hygiene fixes:**

- `index.md` — tacrolimus trough targets corrected (was 8–12/5–10/3–7, correct 2025 values: mo1 7–10, mo2–12 4–8, mo12+ 4 ng/mL)
- `index.md` — malformed gastroparesis wiki-link fixed (`[[wiki/1-disease-scripts/.../gastroparesis]]` → `[[gastroparesis]]`)
- 4× `.DS_Store` files deleted from vault root and raw/ subdirectories

**Cross-links added:**

- `autoimmune-hepatitis.md` — `[[wilson-disease]]`, `[[primary-biliary-cholangitis]]`
- `semaglutide.md` — `[[gastroparesis]]` (contraindication)
- `hepatopulmonary-syndrome-portopulmonary-hypertension.md` — `[[budd-chiari-syndrome]]`
- `antibody-mediated-rejection-liver-transplant.md` — `[[post-transplant-lymphoproliferative-disorder]]`
- `hepatocellular-carcinoma.md` — `[[immune-checkpoint-inhibitor-hepatitis]]`, `[[post-transplant-lymphoproliferative-disorder]]`

**Uningested files ingested (2):**

- `aasld-2020-autoimmune-hepatitis` — AASLD 2020 AIH Practice Guideline (Mack et al. Hepatology 2020); `autoimmune-hepatitis.md` fully expanded from stub to ADDT with type 1/2 comparison, treatment withdrawal criteria, overlap syndromes, HCC surveillance
- `aasld-ast-2025-liver-transplant-non-graft-complications` — AASLD/AST 2025 LT Non-Graft Complications (70 recs); `liver-transplantation.md` Part III added (CMV pre-emptive strategy, maribavir for resistance, hydrophilic statins, GLP-1RA post-LT, cancer SIR table, bone/reproductive health, PTLD surveillance)

**Index updates:** 78 → 80 sources; liver-transplantation now 4 sources; autoimmune-hepatitis stub upgraded

**Issues for user triage (priority order):**

1. `wilson-disease.md` stub — AASLD 2022 Wilson Disease guideline available in raw/
2. `primary-biliary-cholangitis.md` stub — AASLD 2018 + 2021 PBC guidelines available in raw/
3. `variceal-upper-gi-bleeding.md` stub — AASLD 2023 Portal Hypertension/Varices guideline available in raw/
4. ACLF: no wiki page exists — AASLD 2024 ACLF guideline available in raw/
5. HCV/DAA: no wiki page exists — AASLD/IDSA 2023 HCV guideline available in raw/
6. Hepatic encephalopathy: no standalone concept page — referenced across multiple pages
7. HCC `hepatocellular-carcinoma.md` — BCLC staging, sorafenib/lenvatinib dosing remain stubs

---

## [2026-05-25] ingest | 4-guideline parallel ingest (AASLD 2025 HCC Critical Update, AASLD 2025 Semaglutide MASH, AASLD/AST 2025 LT Candidate Evaluation, AASLD/AST 2025 LT Graft Complications)

**Sources ingested (4):**

- `aasld-2025-hcc-critical-update` — AASLD 2025 Critical Update: Guidance Statement 32 Revised (Level 1, Strong) — atezo+bev adjuvant therapy explicitly contraindicated after HCC resection/ablation; IMbrave050 second interim analysis non-significant (RFS HR=0.90); active surveillance remains standard of care
- `aasld-2025-semaglutide-mash` — AASLD 2025 Practice Guidance: Semaglutide for MASH — 20 guidance statements; FDA approval Aug 2025; ESSENCE trial data; NIT candidacy (VCTE/MRE/ELF cutoffs); prior source stub language ("not yet approved") corrected
- `aasld-ast-2025-liver-transplant-candidate-evaluation` — AASLD/AST 2025 Guideline: LT Candidate Evaluation — 59 recommendations; referral criteria; multidisciplinary workup framework; ALD fixed abstinence interval explicitly NOT a listing exclusion criterion (conflicts with pre-2025 practice); HPS/POPH candidacy thresholds
- `aasld-ast-2025-liver-transplant-graft-complications` — AASLD/AST 2025 Guideline: LT Graft Complications — 57 recommendations; machine perfusion (NMP/HMP); vascular/biliary complication ladders; TCMR/PCR/AMR management; 2025 TAC trough targets (supersede 2012); protocol biopsy no longer recommended (Rec 34); ATG induction contraindicated (Rec 26); mTOR for HCC within-Milan (Rec 32–33)

**New entity pages created:**

- `5-meds/semaglutide.md` — full medication page (GLP-1RA mechanism, MASH indication, ESSENCE trial, NIT candidacy table, dosing/monitoring, safety table, cardiometabolic benefit, resmetirom comparison)
- `7-concepts/antibody-mediated-rejection-liver-transplant.md` — Banff 2022 diagnostic criteria, management ladder
- `7-concepts/hepatopulmonary-syndrome-portopulmonary-hypertension.md` — definitions, screening, candidacy thresholds for LT

**Updated entity pages:**

- `1-disease-scripts/hepatopancreaticobiliary-diseases/hepatocellular-carcinoma.md` — adjuvant therapy post-resection/ablation (atezo+bev contraindicated), recurrence algorithm, LT candidacy (Milan/AFP), post-LT IS (mTOR sirolimus for within-Milan)
- `1-disease-scripts/hepatopancreaticobiliary-diseases/nafld-masld.md` — semaglutide approval + NIT staging framework; post-LT MASLD section added
- `1-disease-scripts/hepatopancreaticobiliary-diseases/liver-transplantation.md` — major expansion: pre-transplant candidate evaluation (Part I) + graft complications (2025 trough targets, vascular/biliary tables, rejection management)
- `1-disease-scripts/hepatopancreaticobiliary-diseases/alcohol-associated-liver-disease.md` — post-LT ALD monitoring; fixed abstinence interval NOT exclusion criteria
- `1-disease-scripts/hepatopancreaticobiliary-diseases/acute-liver-failure.md` — urgent LT center referral expanded (AASLD/AST Recs 3–4)
- `1-disease-scripts/hepatopancreaticobiliary-diseases/portal-vein-thrombosis.md` — Yerdel grade IV PVT = relative (not absolute) LT contraindication
- `5-meds/tacrolimus.md` — 2025 trough targets, XR equivalence, full side effect profile, drug interactions (Paxlovid)
- `5-meds/calcineurin-inhibitors.md` — TAC vs CSA table, basiliximab/ATG induction evidence, IS minimization ladder, CSA DDIs
- `7-concepts/operational-tolerance.md` — meta-analysis data, pre-withdrawal biopsy, Rec 36 (against routine withdrawal)

**Key conflicts resolved:**

- Protocol liver biopsy now NOT recommended (Rec 34 Strong, Level 4) — supersedes 2012 AASLD q1y/5y approach
- ATG induction now explicitly contraindicated (Rec 26) — supersedes older use
- Steroid-free IS cannot be routinely recommended (Rec 28) — TAC trough targets now more granular and lower than 2012 values
- Adjuvant atezo+bev post-resection/ablation now contraindicated (Guidance 32 Revised) — corrects earlier positive IMbrave050 first interim

**Index updates:** 74 → 78 sources; 8 → 9 meds (semaglutide); 22 → 24 concepts (AMR-LT, HPS/POPH)

---

## [2026-05-24] ingest | 4-guideline parallel ingest (ACG 2025 Bowel Prep, ASGE 2020 Endoscopic Removal, USMSTF 2016 FIT Screening, USMSTF 2017 BMMRD)

**Sources ingested (4):**

- `acg-2025-bowel-prep` — ACG 2025: Bowel Preparation Quality for Colonoscopy (Jacobson et al.) — same document as usmstf-2025-bowel-prep; 25 recommendations; adds GLP-1 agonist 1-week hold guidance and simethicone evidence
- `asge-2020-endoscopic-removal` — ASGE 2020: Endoscopic Removal of Colorectal Lesions (Kaltenbach et al.) — same document as usmstf-2020-endoscopic-removal (GIE journal version); 36 recommendations; adds ERBE settings, cold snare/underwater EMR/eFTR recurrence data, hot avulsion technique, DOPyS/CSPAT competency tools
- `usmstf-2016-fit-screening` — USMSTF 2016: FIT to Screen for CRC (Robertson et al.) — CRC sensitivity ~79%/specificity ~94%; advanced adenoma sensitivity 20–30%; threshold analysis; multi-round programmatic data; programmatic quality targets
- `usmstf-2017-bmmrd` — USMSTF 2017: BMMRD Syndrome Surveillance and Management (Durno et al.) — 8 consensus recommendations; new disease script created

**New entity pages created:**

- `1-disease-scripts/colorectal-diseases/bmmrd-syndrome.md` — full ADDT (biallelic MMR, pediatric CRC/brain/hematologic tumors, surveillance table, subtotal colectomy, immunotherapy)

**Updated entity pages:**

- `3-general-gi-procedures/colonoscopy.md` — added acg-2025-bowel-prep source; new GLP-1 receptor agonist subsection in bowel prep
- `4-advanced-gi-procedures/colorectal-procedures/polypectomy-emr.md` — added asge-2020-endoscopic-removal source; ERBE settings, cold snare/underwater/eFTR data, hot avulsion, difficult location guidance, post-polypectomy bleeding benchmark, DOPyS/CSPAT
- `1-disease-scripts/colorectal-diseases/colorectal-cancer.md` — added usmstf-2016-fit-screening source; new FIT screening section with performance data, threshold table, programmatic quality targets
- `1-disease-scripts/colorectal-diseases/lynch-syndrome.md` — expanded BMMRD DDx entry; [[bmmrd-syndrome]] link added

**Notable findings:**

- ACG 2025 Bowel Prep = same multi-society document as usmstf-2025-bowel-prep (published simultaneously in AJG, Gastroenterology, GIE). No conflicts; source page cross-references canonical entry.
- ASGE 2020 Endoscopic Removal = same document as usmstf-2020-endoscopic-removal (published simultaneously in AJG and GIE). No conflicts; additional procedural detail added to entity page.

**Index updates:** 71 → 74 sources; 73 disease scripts (1 new: bmmrd-syndrome)

---

## [2026-05-24] ingest | USMSTF 2017 BMMRD Syndrome consensus statement

**Source ingested:**

- `usmstf-2017-bmmrd` — USMSTF 2017: Recommendations on Surveillance and Management of Biallelic Mismatch Repair Deficiency (BMMRD) Syndrome — Durno et al. *Am J Gastroenterol* 2017;112:682–690

**New entity pages created:**

- `1-disease-scripts/colorectal-diseases/bmmrd-syndrome.md` — full ADDT (penetrance/age-of-onset tables for all tumor types, complete 8-recommendation surveillance protocol, surgical management, immunotherapy considerations, genetic counseling, MMR IHC diagnostic nuances, full DDx vs. Lynch syndrome/FAP/MAP/NF1)

**Updated entity pages:**

- `1-disease-scripts/colorectal-diseases/lynch-syndrome.md` — BMMRD DDx entry expanded with key distinguishing features (biallelic, childhood onset, brain/hematologic tumors, café-au-lait macules, IHC in normal tissue, PMS2 predominance, surveillance timing); `[[bmmrd-syndrome]]` link added; `[[bmmrd-syndrome]]` added to "See also" footer; `usmstf-2017-bmmrd` added to sources frontmatter

**Index updates:**

- `[[bmmrd-syndrome]]` added to Colorectal Diseases disease scripts
- `[[usmstf-2017-bmmrd]]` added to Sources
- Totals updated: 71 sources | 73 disease scripts

---

## [2026-05-21] ingest | 4-guideline parallel ingest (colon ischemia, Lynch syndrome 2014, nutrition hospitalized, hepatic/mesenteric circulation)

**Sources ingested (4):**

- `acg-2015-colon-ischemia` — ACG 2015: Epidemiology, Risk Factors, Patterns of Presentation, Diagnosis, and Management of Colon Ischemia (Brandt et al.)
- `usmstf-2014-lynch-syndrome` — USMSTF 2014: Genetic Evaluation and Management of Lynch Syndrome (Giardiello et al.)
- `acg-2016-nutrition-hospitalized` — ACG 2016: Nutrition Therapy in the Adult Hospitalized Patient (McClave et al.) — 38-item recommendations table
- `acg-2020-hepatic-mesenteric-circulation` — ACG 2020: Disorders of the Hepatic and Mesenteric Circulation (Simonetto et al.) — 23 PICO recommendations

**New entity pages created:**

- `1-disease-scripts/colorectal-diseases/colon-ischemia.md` — full ADDT (CT imaging, colonoscopy, mild/moderate/severe classification, surgical indications, IRCI, medication review)
- `1-disease-scripts/hepatopancreaticobiliary-diseases/portal-vein-thrombosis.md` — full ADDT (cirrhotic vs. noncirrhotic PVT/MVT, thrombophilia workup, anticoagulation indications, TIPS, cirrhosis hemostasis)
- `1-disease-scripts/hepatopancreaticobiliary-diseases/budd-chiari-syndrome.md` — full ADDT (etiology table, stepwise AC→angioplasty→TIPS→LT, HCC surveillance, thrombophilia workup)
- `1-disease-scripts/hepatopancreaticobiliary-diseases/hereditary-hemorrhagic-telangiectasia.md` — stub (hepatic LVMs, bevacizumab, no routine screening)
- `7-concepts/nutrition-in-hospitalized-patients.md` — full concept (EN vs. PN, NRS-2002/NUTRIC, enteral access table, permissive underfeeding, EOL nutrition)
- `7-concepts/cirrhosis-hemostasis.md` — concept (rebalanced hemostasis, no prophylactic FFP/platelets, TEG/ROTEM guidance)

**Updated entity pages:**

- `1-disease-scripts/colorectal-diseases/lynch-syndrome.md` — added `usmstf-2014-lynch-syndrome` to sources; added PREMM1,2,6 detail, NCI evidence-level citations, and expanded genetic counseling section

---

## [2026-05-19] ingest | 4-guideline parallel ingest (liver transplant, small bowel bleeding, liver disease in pregnancy, malignant colorectal polyps)

**Sources ingested (4):**

- `aasld-2012-liver-transplant-long-term` — AASLD 2012: Long-Term Management of the Successful Adult Liver Transplant Recipient (93 recs)
- `acg-2015-small-bowel-bleeding` — ACG 2015: Small Bowel Bleeding (31 recs)
- `acg-2016-liver-disease-pregnancy` — ACG 2016: Liver Disease and Pregnancy (36 recs)
- `usmstf-2020-malignant-colorectal-polyps` — USMSTF 2020: Malignant Colorectal Polyps (9 recs)

**New entity pages created:**

- `1-disease-scripts/hepatopancreaticobiliary-diseases/liver-transplantation.md` — full ADDT (IS monitoring, metabolic, oncologic, recurrent disease)
- `1-disease-scripts/hepatopancreaticobiliary-diseases/hepatitis-c-in-pregnancy.md` — stub
- `1-disease-scripts/foregut-and-motility-diseases/small-bowel/meckels-diverticulum.md` — stub
- `2-diagnostic-schemas/small-bowel-bleeding.md` — full schema (3 algorithms, all modalities)
- `2-diagnostic-schemas/liver-disease-in-pregnancy.md` — full schema (trimester DDx, Swansea criteria, all pregnancy-specific diseases)
- `4-advanced-gi-procedures/foregut-and-motility-procedures/capsule-endoscopy.md` — stub
- `4-advanced-gi-procedures/foregut-and-motility-procedures/device-assisted-enteroscopy.md` — stub
- `5-meds/tacrolimus.md` — stub
- `5-meds/calcineurin-inhibitors.md` — stub
- `7-concepts/angioectasia.md` — stub
- `7-concepts/heydes-syndrome.md` — stub
- `7-concepts/post-transplant-lymphoproliferative-disorder.md` — stub
- `7-concepts/operational-tolerance.md` — stub

**Entity pages updated:**

- `polypectomy-emr.md` — Haggitt/Kikuchi staging, NICE/JNET/Kudo features, en bloc criteria, CAP reporting, surgical referral framework
- `chronic-hepatitis-b.md`, `primary-biliary-cholangitis.md`, `autoimmune-hepatitis.md`, `wilson-disease.md` — pregnancy subsections added
- `acute-liver-failure.md`, `abnormal-liver-chemistries.md` — pregnancy cross-links

**Gaps noted:**

- HCV DAA safety in pregnancy: no data in 2016 guideline; field has evolved
- AASLD 2012 HCV recommendations pre-DAA era; superseded
- Thalidomide for SBB angioectasia: off-label, no med page yet
- Gastroparesis → SIBO cross-link still missing

---

## [2026-05-19] ingest | 4-guideline parallel ingest (pancreatic cysts, SIBO, acute diarrhea, post-CRC surveillance)

**Sources ingested (4):**

- `acg-2018-pancreatic-cysts` — ACG 2018: Diagnosis & Management of Pancreatic Cysts (20 recs, all low/very-low quality)
- `acg-2020-sibo` — ACG 2020: SIBO (6 GRADE recs + 15 key concepts verbatim)
- `acg-2016-acute-diarrhea` — ACG 2016: Acute Diarrheal Infections (18 recs)
- `usmstf-2015-crc-surveillance` — USMSTF 2015: Colonoscopy Surveillance after CRC Resection (6 recs)

**New entity pages created:**

- `1-disease-scripts/hepatopancreaticobiliary-diseases/pancreatic-cysts.md` — full ADDT (all 6 cyst types, surveillance tables)
- `1-disease-scripts/foregut-and-motility-diseases/small-bowel/small-intestinal-bacterial-overgrowth.md` — full ADDT
- `1-disease-scripts/colorectal-diseases/colorectal-cancer.md` — expanded stub → full disease script with post-resection surveillance
- Pathogen stubs (8): `norovirus.md`, `rotavirus.md`, `campylobacter-infection.md`, `salmonella-infection.md`, `shigellosis.md`, `enterotoxigenic-e-coli.md`, `giardiasis.md`, `cryptosporidiosis.md`, `entamoeba-histolytica-infection.md`
- `2-diagnostic-schemas/acute-diarrhea.md` — full schema with stepwise algorithm + antibiotic table
- `5-meds/rifaximin.md` — stub
- `7-concepts/intestinal-methanogen-overgrowth.md` — stub
- `7-concepts/small-bowel-motility.md` — stub
- `7-concepts/postinfectious-ibs.md` — stub

**Entity pages updated:**

- `endoscopic-ultrasound.md` — pancreatic cyst EUS section added
- `colonoscopy.md` — post-CRC surveillance tables added
- `irritable-bowel-syndrome.md` — SIBO cross-link + prevalence data
- `chronic-pancreatitis.md` — SIBO co-occurrence note

**Gaps noted for future ingests/lint:**

- Gastroparesis → SIBO cross-link missing (key risk factor)
- Crohn's disease → SIBO cross-link missing (16.8% prevalence in remission)
- STEC/EHEC stub not yet created
- ACG 2018 pancreatic cyst data predates some European consensus evolution; AGA 2015 vs. ACG 2018 surveillance divergence (5-year stop rule) worth a synthesis page

---

## [2026-05-19] ingest | 4-guideline parallel ingest (liver chemistries, esophageal physiology, hemochromatosis, hereditary GI cancer)

**Sources ingested (4):**

- `acg-2017-liver-chemistries` — ACG 2017: Evaluation of Abnormal Liver Chemistries
- `acg-2020-esophageal-physiologic-testing` — ACG 2020: Clinical Use of Esophageal Physiologic Testing (16 GRADE recs)
- `acg-2019-hereditary-hemochromatosis` — ACG 2019: Hereditary Hemochromatosis (10 GRADE recs)
- `acg-2015-hereditary-gi-cancer` — ACG 2015: Genetic Testing and Management of Hereditary GI Cancer Syndromes (25 recs)

**New entity pages created:**

- `2-diagnostic-schemas/abnormal-liver-chemistries.md` — full schema with R-ratio, 5-tier algorithm, ALP + bilirubin fractionation
- `1-disease-scripts/hepatopancreaticobiliary-diseases/hereditary-hemochromatosis.md` — full ADDT
- `1-disease-scripts/colorectal-diseases/lynch-syndrome.md` — expanded stub → full ADDT
- `1-disease-scripts/colorectal-diseases/familial-adenomatous-polyposis.md` — expanded stub → full ADDT
- `1-disease-scripts/colorectal-diseases/peutz-jeghers-syndrome.md` — full ADDT
- `1-disease-scripts/colorectal-diseases/juvenile-polyposis-syndrome.md` — full ADDT
- `1-disease-scripts/colorectal-diseases/cowden-syndrome.md` — full ADDT
- `1-disease-scripts/colorectal-diseases/serrated-polyposis-syndrome.md` — full ADDT
- `1-disease-scripts/colorectal-diseases/mutyh-associated-polyposis.md` — stub
- `1-disease-scripts/foregut-and-motility-diseases/gastric/hereditary-diffuse-gastric-cancer.md` — full ADDT
- `1-disease-scripts/hepatopancreaticobiliary-diseases/wilson-disease.md` — stub
- `1-disease-scripts/hepatopancreaticobiliary-diseases/primary-biliary-cholangitis.md` — stub
- `1-disease-scripts/hepatopancreaticobiliary-diseases/nafld-masld.md` — stub
- `7-concepts/iron-overload-and-iron-metabolism.md` — stub

**Entity pages updated (cross-links + source added):**

- `reflux-testing.md`, `ambulatory-reflux-monitoring.md`, `chicago-classification-v4.md`, `high-resolution-manometry.md` (esophageal physiology ingest)
- `hepatocellular-carcinoma.md`, `alcohol-associated-liver-disease.md`, `hereditary-hemochromatosis.md` (hemochromatosis ingest)
- `drug-induced-liver-injury.md`, `autoimmune-hepatitis.md`, `primary-sclerosing-cholangitis.md` (liver chemistries ingest)
- `colorectal-cancer.md` (hereditary GI cancer ingest)

**Gaps noted for future ingests:**

- No `chronic-hepatitis-c` page (HCV covered in liver chemistries guideline)
- No `barium-esophagram` or `supragastric-belching` pages
- `hereditary-pancreatic-cancer` not yet its own entity page
- ACG 2014 Lynch syndrome guideline still uningested (superseded by 2015 comprehensive guideline)
- USMSTF 2015 colonoscopy surveillance post-CRC still uningested

**CLAUDE.md updated:** Guidelines ingest now requires all recommendations captured in full in the source page (not summarized/abbreviated).

---

## [2026-05-19] lint | Lint Pass — PSC + IBS ingest, broken-link cleanup, 7 new stubs

**Cleanup performed (auto-fixed):**

- Removed `.DS_Store` artifacts from `wiki/`, `raw/GI Guidelines/`, `raw/GI Guidelines/ACG/`, `raw/GI Guidelines/ASGE/`
- Fixed broken cross-refs in content pages:
  - `sources/acg-2020-achalasia.md`: `[[2021-chicago-classification]]` → `[[chicago-classification-v4]]`; `[[hrem]]` → `[[high-resolution-manometry]]`
  - `7-concepts/chicago-classification-v4.md`: `[[esophageal-manometry]]` → `[[high-resolution-manometry]]`
  - `sources/chicago-v4-2021-esophageal-dysmotility.md`: `[[esophageal-manometry]]` → `[[high-resolution-manometry]]`
  - `4-advanced-gi-procedures/foregut-and-motility-procedures/high-resolution-manometry.md`: removed self-aliasing `[[esophageal-manometry]]` and `[[hrem]]` (collapsed to plain-text aliases)

**Ingests (2 high-value PDFs from previously flagged gaps):**

- `wiki/sources/acg-2015-psc.md` — Lindor, Kowdley, Harrison. Am J Gastroenterol 2015;110:646–659. Created new disease script `primary-sclerosing-cholangitis.md` (full ADDT: MRCP-first dx, IgG4/AMA testing, UDCA >28 mg/kg/d harmful, dominant-stricture ERCP + FISH, CCA surveillance q6–12mo, PSC-IBD annual chromoendoscopy from PSC dx, LT at MELD >14 / MELD exception for CCA <3 cm / recurrent cholangitis / pruritus).
- `wiki/sources/acg-2020-ibs.md` — Lacy, Pimentel, Brenner, Chey et al. Am J Gastroenterol 2021;116:17–44 (25 GRADE statements). Expanded `irritable-bowel-syndrome.md` from stub to full ADDT (positive diagnostic strategy, calprotectin+CRP+celiac serology screen, low-FODMAP/soluble fiber/TCA/gut-directed psychotherapy cross-subtype, secretagogues + tegaserod for IBS-C, rifaximin/alosetron/eluxadoline for IBS-D, strong AGAINST FMT/probiotics/antispasmodics/PEG for global IBS-C).

**New stubs (7):**

- `1-disease-scripts/colorectal-diseases/colorectal-cancer.md` (resolves `[[colorectal-cancer]]` referenced in `colorectal-cancer-screening`, `acg-2021-crc-screening`)
- `1-disease-scripts/colorectal-diseases/lynch-syndrome.md` (resolves `[[lynch-syndrome]]` in `colorectal-cancer-screening`)
- `1-disease-scripts/colorectal-diseases/familial-adenomatous-polyposis.md` (resolves `[[familial-adenomatous-polyposis]]` in `colorectal-cancer-screening`)
- `1-disease-scripts/foregut-and-motility-diseases/gastric/peptic-ulcer-disease.md` (long-standing broken ref; cross-linked to H. pylori, UGIB, vonoprazan)
- `4-advanced-gi-procedures/foregut-and-motility-procedures/anorectal-manometry.md` (resolves `[[anorectal-manometry]]` in IBS, defecation-disorders, fecal-incontinence)
- `5-meds/linaclotide.md`, `5-meds/plecanatide.md`, `5-meds/prucalopride.md` (resolve broken med refs from `aga-acg-2023-constipation` and now `acg-2020-ibs`)

**Index updates:**

- Added new disease scripts (PSC, CRC, Lynch, FAP, PUD) and meds (linaclotide, plecanatide, prucalopride) and procedure (anorectal-manometry) to relevant index sections
- Expanded IBS entry from stub-language to full ADDT description
- Added new source entries: `acg-2015-psc`, `acg-2020-ibs`
- Footer counts updated: 54 sources / 44 disease scripts / 7 advanced procedures / 5 meds (was 52 / 39 / 6 / 2)

**Remaining broken wiki-links (lower-priority; not auto-fixed — most are in source-page notes or are minor concept stubs):**

- `[[barrett-esophagus]]` — only appears in log.md historical entry (intentional, do not change)
- `[[antireflux-surgery]]` — referenced in `acg-2021-gerd.md` and `sages-2021-gerd-surgery.md` source notes; consider a concept page covering Nissen/Toupet/Dor/MSA/RYGB/TIF together
- `[[hcc-surveillance]]` — referenced in `acg-2024-focal-liver-lesions.md`; covered functionally by `hepatocellular-carcinoma` stub but slug differs
- `[[li-rads]]` — referenced in `acg-2024-focal-liver-lesions.md`; would make a useful concept page
- `[[gastric-adenocarcinoma]]`, `[[gastric-dysplasia]]` — in `gastric-intestinal-metaplasia.md`; could be covered by expanding `gastric-premalignant-conditions` or `peptic-ulcer-disease` cross-refs
- `[[rectal-prolapse]]` — in `defecation-disorders.md` and `fecal-incontinence.md`
- `[[sacral-nerve-stimulation]]`, `[[biofeedback-therapy]]` — in anorectal pages; consider concept stubs
- `[[pcab]]` — in `acg-2024-hp-treatment.md`; could become a med-class concept page (vonoprazan is the canonical PCAB)
- `[[colonoscopy-surveillance]]` — could be section anchor in `colonoscopy.md` rather than its own page

**Outstanding gaps requiring user triage:**

- ~63 uningested raw files remain: ACG 2018 Pancreatic Cysts, ACG 2020 SIBO, ACG 2017 Liver Chemistries, ACG 2019 Hereditary Hemochromatosis, ACG 2016 Acute Diarrhea, ACG 2015 Small Bowel Bleeding, ACG 2015 Colon Ischemia, ACG 2020 Disorders Hepatic Mesenteric Circulation, ACG 2020 Clinical Use of Esophageal Physiologic Testing, ACG 2016 Liver Disease and Pregnancy, ACG 2016 Nutrition Therapy, USMSTF 2015/2016/2017/2020 colonoscopy series, AASLD 2012 LT long-term, Semaglutide AUD RCT, 60 lecture transcripts (highest yield: Cirrhosis_by_Jed_Bell, MASLD_MetALD_by_Dr_Kanwal, PBC_by_Dr_Lily_Dara, HCC × 2, Cholangiocarcinoma_by_bhuket, IBS_by_Dr_Lin_Chang).

**Contradictions / stale claims flagged (no auto-fix):**

- **Atrophic gastritis surveillance**: AGA 2020 GIM guideline recommends AGAINST routine GIM surveillance, while AGA 2021 atrophic gastritis update + ACG 2025 GPMC recommend q3y surveillance for high-risk GIM/OLGA III–IV. Already noted on `[[gastric-intestinal-metaplasia]]` and `[[gastric-premalignant-conditions]]` pages. Stable tension; awaits next AGA cycle.
- **IBS criteria**: `irritable-bowel-syndrome.md` cites both Rome IV (ACG 2020) and Rome V (2026) — pain frequency threshold differs (≥1 day/week vs ≥3 days/month). Documented inline; not a true contradiction (newer Rome V is more permissive).
- **NA discontinuation in CHB**: AASLD/IDSA 2025 recommends NOT stopping NA until HBsAg loss; EASL/APASL allow discontinuation. Documented on `chronic-hepatitis-b.md`.
- **PPI safety / long-term use**: Lyon 2.0 + ACG/CAG 2017 dyspepsia + ASGE 2024 GERD all consistent that most feared AEs are very-low-certainty associations; no live contradiction.

---

## [2026-05-19] lint | Scheduled lint + 2-source ingest (chronic pancreatitis, dyspepsia)

**Action:** First scheduled lint under the new behavior policy (perform cleanup automatically, ingest ≤2 raw files per run — see `feedback_lint_behavior.md`).

**Cleanup performed:**

- Removed `raw/.DS_Store` (OS artifact).
- Fixed `wiki/index.md` footer counts (was: 50 sources / 36 disease scripts / 1 med / 0 syntheses → now: 52 / 39 / 2 / 1).
- Listed `[[uc-vs-crohns-comparison]]` in Syntheses section (was "(none yet)").
- Updated `index.md` `updated:` field 2026-05-16 → 2026-05-19.
- Refreshed `MEMORY.md` "Current Wiki State" from 2026-05-07 numbers; corrected path note (all content uses numbered folders).

**Ingests (2):**

- `wiki/sources/acg-2020-chronic-pancreatitis.md` (Gardner et al., Am J Gastroenterol 2020;115:322–339) — expanded `chronic-pancreatitis.md` from stub to full ADDT with Mechanistic Definition, TIGAR-O v2.0, M-ANNHEIM scoring, modality test characteristics, surgical-vs-endoscopic evidence (Cahen RCT), PERT dosing, fat-soluble vitamin/DEXA monitoring.
- `wiki/sources/acg-cag-2017-dyspepsia.md` (Moayyedi et al., Am J Gastroenterol 2017;112:988–1013) — updated `dyspepsia.md` diagnostic schema: age threshold raised to ≥60 (from ≥55), alarm features alone insufficient in <60, full ACG/CAG algorithm and NNTs for FD therapies, SSRIs not effective, PPI long-term safety summary.

**Outstanding (reported to user, not actioned):**

- Log backfill: log was stale since 2026-05-07 despite ~25 sources added (this consolidated entry covers acknowledgement; future ingests will log inline per schema).
- ~65 uningested raw files remain (40+ chalk talk transcripts; ACG older guidelines from 2013–2020 not yet ingested; AASLD 2012; ASGE 2020; Semaglutide AUD RCT) — user prioritization needed.
- CLAUDE.md INGEST prose still references unnumbered folder paths while filesystem and tree-diagram use numbered (`1-disease-scripts/` …). Minor inconsistency — fix on next manual session.

---

## [2026-05-16] update | Stub pages created for broken cross-references

**13 stub pages created to resolve broken [[wiki-links]] identified during lint.**

**New disease scripts (5):**

- `wiki/1-disease-scripts/colorectal-diseases/irritable-bowel-syndrome.md` — IBS: Rome V criteria, subtypes, DGBI; raw: ACG 2018 IBS
- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/chronic-pancreatitis.md` — CP: exocrine/endocrine insufficiency, biliary stricture cause; raw: ACG 2020
- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/autoimmune-hepatitis.md` — AIH: simplified score, type 1/2, DILI distinction; lecture: AIH_by_Dr_Dara
- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/hepatocellular-carcinoma.md` — HCC: LI-RADS, BCLC, surveillance criteria; lectures: HCC × 2
- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/immune-checkpoint-inhibitor-hepatitis.md` — ICI hepatitis: grade-driven management, steroids ± MMF

**New esophageal motility disease scripts (3):**

- `wiki/1-disease-scripts/foregut-and-motility-diseases/esophageal/distal-esophageal-spasm.md`
- `wiki/1-disease-scripts/foregut-and-motility-diseases/esophageal/hypercontractile-esophagus.md`
- `wiki/1-disease-scripts/foregut-and-motility-diseases/esophageal/ineffective-esophageal-motility.md`

**New diagnostic schema (1):**

- `wiki/2-diagnostic-schemas/dyspepsia.md` — uninvestigated dyspepsia algorithm, test-and-treat, functional dyspepsia subtypes; raw: ACG CAG 2017

**New advanced procedures (3):**

- `wiki/4-advanced-gi-procedures/hepatobiliary-procedures/ercp.md` — indications, PEP prevention, tissue sampling
- `wiki/4-advanced-gi-procedures/foregut-and-motility-procedures/poem.md` — achalasia types, G-POEM, GERD risk
- `wiki/4-advanced-gi-procedures/foregut-and-motility-procedures/high-resolution-manometry.md` — Chicago v4.0 protocol, IRP/DCI metrics, clinical applications; canonical slug for [[esophageal-manometry]]/[[hrem]]

**New concept (1):**

- `wiki/7-concepts/inflammatory-bowel-disease.md` — IBD overview linking to crohns + uc disease scripts

**Also this session (lint fixes):**

- `acg-2021-gerd` source: `[[barrett-esophagus]]` → `[[barretts-esophagus]]` (typo); `[[esophageal-manometry]]` → `[[high-resolution-manometry]]`
- `bismuth-quadruple-therapy.md` moved `5-meds/` → `7-concepts/`
- `gerd.md` sources updated to include `lyon-2024-gerd-diagnosis`; Lyon 2.0 content added to pH Monitoring section (LA grade B = conclusive, AET thresholds)
- Index: category mislabeling fixed (H. pylori and GPMC to Gastric); footer counts corrected

---

## [2026-05-16] lint | Wiki Health Check

**Triggered by user. Full file-system audit performed.**

---

### 1. STALE PREVIOUS LINT — CLOSE OUT

The scheduled lint from 2026-05-15 flagged "Dual-Schema Directory Drift" and recommended moving files from numbered directories (`1-disease-scripts/`) to unnumbered directories (`disease-scripts/`). This was **incorrect**. CLAUDE.md defines numbered directories as the current schema. All files are correctly placed. No migration needed. Previous lint recommendation #1 is void.

---

### 2. Index Errors (Action Required)

#### 2a. Footer overcounts disease scripts

- **Footer says:** `32 disease scripts`
- **Actual count:** 31 disease scripts (verified by file listing)
- **Off by 1** — likely a stale number from a draft ingest that was revised.

#### 2b. Footer overcounts meds

- **Footer says:** `2 meds`
- **Index body lists:** 1 med (antibiotic-prophylaxis-cirrhosis)
- **bismuth-quadruple-therapy** is listed under **Concepts** in the index body — correctly — but the footer counts it as a med.

#### 2c. "Small Bowel" category misnaming in index

The index groups `[[helicobacter-pylori-infection]]` and `[[gastric-premalignant-conditions]]` under the `#### Small Bowel` heading. Both files are physically in `wiki/1-disease-scripts/foregut-and-motility-diseases/gastric/`. They should be under `#### Gastric`.

---

### 3. Broken Cross-References (Missing Pages)

The following `[[wiki-links]]` appear in content pages but have NO corresponding wiki file anywhere:

#### 3a. HIGH priority — clinically significant missing pages

| Broken link | Where used | Fix |
|---|---|---|
| `[[irritable-bowel-syndrome]]` | chronic-idiopathic-constipation cross-refs | Create stub; raw: ACG 2018 IBS |
| `[[dyspepsia]]` | helicobacter-pylori-infection (uninvestigated dyspepsia context) | Create stub; raw: ACG CAG 2017 Dyspepsia |
| `[[chronic-pancreatitis]]` | biliary-stricture DDx | Create stub; raw: ACG 2020 Chronic Pancreatitis |
| `[[autoimmune-hepatitis]]` | drug-induced-liver-injury cross-refs | Create stub; raw: lecture: AIH_by_Dr_Dara.md |
| `[[hepatocellular-carcinoma]]` | aasld-idsa-2025-chb-treatment source notes | Create stub; raw: HCC lectures × 2 |
| `[[ercp]]` | acg-2024-acute-pancreatitis source notes | Create advanced procedure stub |
| `[[poem]]` | acg-2020-achalasia source notes | Create advanced procedure stub |
| `[[esophageal-manometry]]` / `[[high-resolution-manometry]]` / `[[hrem]]` | chicago-classification-v4, flip-panometry (3 different slugs used for same concept) | Create one page; pick one slug (recommend `[[high-resolution-manometry]]`); update links |
| `[[inflammatory-bowel-disease]]` | drug-induced-liver-injury cross-refs | Create stub redirecting to crohns + uc |

#### 3b. MEDIUM priority — content gaps

| Broken link | Where used |
|---|---|
| `[[distal-esophageal-spasm]]` | chicago-classification-v4 |
| `[[ineffective-esophageal-motility]]` | chicago-classification-v4 |
| `[[hypercontractile-esophagus]]` | chicago-classification-v4 |
| `[[immune-checkpoint-inhibitor-hepatitis]]` | acg-2021-dili source |
| `[[antireflux-surgery]]` | acg-2021-gerd source |
| `[[hcc-surveillance]]` | chronic-hepatitis-b |
| `[[li-rads]]` | focal liver lesion context |
| `[[colorectal-cancer]]` | probably colonoscopy/CRC screening |
| `[[lynch-syndrome]]` | probably CRC screening; raw: ACG 2014 Lynch Syndrome PDF |
| `[[familial-adenomatous-polyposis]]` | probably CRC screening; raw: ACG 2015 Hereditary GI Cancer PDF |

#### 3c. LOW priority — individual drug pages

`[[vonoprazan]]`, `[[linaclotide]]`, `[[plecanatide]]`, `[[prucalopride]]` — all in CIC or H. pylori context. Recommend covering as sub-sections of the relevant disease pages rather than standalone stubs, unless a specific med page is planned.

#### 3d. Typo in acg-2021-gerd source

`[[barrett-esophagus]]` → should be `[[barretts-esophagus]]` (missing apostrophe-s). This link is in `wiki/sources/acg-2021-gerd.md` line 73.

---

### 4. GERD Page: Lyon Consensus Gap

`gerd.md` sources: `[asge-2024-gerd, acg-2021-gerd, sages-2021-gerd-surgery]`

**Issue:** The Lyon Consensus 2.0 (2024) made a clinically significant update — **LA grade B is now CONCLUSIVE** for GERD (previously borderline). The GERD page does not state this, and `lyon-2024-gerd-diagnosis` is not in the page's source frontmatter. The update lives in `ambulatory-reflux-monitoring.md` but not in the GERD disease script itself.

**Fix:** Add `lyon-2024-gerd-diagnosis` to gerd.md sources and add a note in the Diagnostics/Endoscopy section that LA grade B = conclusive per Lyon 2.0.

---

### 5. bismuth-quadruple-therapy Physical Location

`bismuth-quadruple-therapy.md` is in `wiki/5-meds/` but has `category: concept` in frontmatter and is indexed under Concepts. Physical location should match (move to `wiki/7-concepts/`).

---

### 6. Uningested Raw Files (Updated — Previous List Mostly Resolved)

The 2026-05-15 lint listed ~20 uningested high-priority guidelines. Most are now ingested. Remaining uningested files in `raw/GI Guidelines/`:

**No coverage in wiki (HIGH):**

- `ACG 2015 Primary Sclerosing Cholangitis.pdf` — no PSC disease script; no PSC coverage anywhere
- `ACG 2018 Management of Irritable Bowel Syndrome.pdf` — no IBS page; referenced by CIC
- `ACG 2018 Diagnosis & Management of Pancreatic Cysts.pdf` — no pancreatic cyst page
- `ACG CAG 2017 Management of Dyspepsia.pdf` — no dyspepsia page; referenced by H. pylori/test-and-treat
- `ACG 2020 Chronic Pancreatitis.pdf` — no chronic pancreatitis page; referenced in biliary-stricture
- `ACG 2020 Small Intestinal Bacterial Overgrowth.pdf` — no SIBO page

**Partial/no coverage (MEDIUM):**

- `ACG 2015 Small Bowel Bleeding.pdf` — no small bowel bleeding diagnostic schema
- `ACG 2015 Colon Ischemia.pdf` — no colon ischemia page
- `ACG 2015 Epidemiology... of Colon Ischemia.pdf` — same as above
- `ACG 2015 Hereditary Gastrointestinal Cancer Syndromes.pdf` — partial: CRC screening page exists but no FAP/Lynch scripts
- `ACG 2014 Genetic Evaluation & Management of Lynch Syndrome.pdf` — same gap
- `ACG 2016 Acute Diarrheal Infections in Adults.pdf` — no diarrhea diagnostic schema
- `ACG 2017 Evaluation of Abnormal Liver Chemistries.pdf` — no liver chemistries concept page
- `ACG 2019 Hereditary Hemochromatosis.pdf` — no hemochromatosis page
- `ACG 2020 Clinical Use of Esophageal Physiologic Testing.pdf` — partial: esophageal physiology testing discussed but no procedure page

**Superseded (LOW):**

- `AASLD 2012 Liver Transplant Management Long Term.pdf` — consider ingest for transplant content
- `ACG 2013 EoE.pdf`, `ACG 2017 Preventive Care IBD.pdf`, `ACG 2018 Crohn's.pdf`, `ACG 2019 UC.pdf` — all superseded by 2025 guidelines; skip unless specific historical context needed
- `ACG 2014 Optimizing Bowel Cleansing.pdf` — superseded by USMSTF 2025

**Uningested USMSTF guidelines:**

- `USMSTF 2015 Colonoscopy Surveillance after Colorectal Cancer Resection.pdf`
- `USMSTF 2016 Fecal Immunochemical Testing.pdf`
- `USMSTF 2017 BMMRD.pdf` (rare disease, low priority)
- `USMSTF 2020 Endoscopic Recognition and Management Strategies for Malignant Colorectal Polyps.pdf`

**Uningested lecture transcripts (raw/GI Lectures:Chalk Talks/):**
60 uningested .md files. Highest-value for current wiki gaps:

- `AIH_by_Dr_Dara.md` — no autoimmune hepatitis page
- `Cirrhosis_by_Jed_Bell.md` — no cirrhosis page
- `IBS_by_Dr_Lin_Chang.md` — no IBS page
- `HCC_By_Dr_Kemichian.md` + `HCC_by_Kali_Zhou.md` — no HCC page
- `MASLD_MetALD_by_Dr_Kanwal.md` — no MASLD page
- `PBC_by_Dr_Lily_Dara.md` — no PBC page
- `Cholangiocarcinoma_by_bhuket.md` — partial: biliary-stricture covers perihilar CCA
- `Gastroparesis.md` + `Gastroparesis_by_Dr_Soffer.md` — gastroparesis page exists; could supplement

---

### 7. Recommendations (Priority Order)

1. **Fix index errors** (§2a–c): update footer counts, move H. pylori and GPMC to Gastric section, correct meds count
2. **Fix typo** (§3d): `[[barrett-esophagus]]` → `[[barretts-esophagus]]` in acg-2021-gerd source
3. **Move bismuth** (§5): `5-meds/bismuth-quadruple-therapy.md` → `7-concepts/bismuth-quadruple-therapy.md`
4. **Update GERD page** (§4): add Lyon 2.0 source, add LA grade B = conclusive note
5. **Create stub pages** for: `[[irritable-bowel-syndrome]]`, `[[dyspepsia]]`, `[[chronic-pancreatitis]]`, `[[autoimmune-hepatitis]]`, `[[hepatocellular-carcinoma]]`, `[[ercp]]`, `[[poem]]`, `[[high-resolution-manometry]]`
6. **Consolidate HRM slug**: unify `[[esophageal-manometry]]`/`[[high-resolution-manometry]]`/`[[hrem]]` to one slug across the wiki
7. **Ingest high-priority raw files**: ACG 2015 PSC, ACG 2018 IBS, ACG 2018 Pancreatic Cysts, ACG CAG 2017 Dyspepsia, ACG 2020 Chronic Pancreatitis
8. **Ingest targeted lectures**: Cirrhosis, AIH, IBS, HCC (×2), MASLD, PBC lectures

---

## [2026-05-16] ingest | SAGES 2021 Guidelines for Surgical Treatment of Gastroesophageal Reflux (GERD)

**Source:** Slater BJ et al. Surgical Endoscopy 2021 (7 conditional recommendations, 5 key questions)

**Pages created/updated:**

- `wiki/sources/sages-2021-gerd-surgery.md`
- Updated `wiki/1-disease-scripts/foregut-and-motility-diseases/ge-junction/gerd.md` (added Step 4 surgical detail)

**Key contributions:** Surgery preferred over continued medical management for confirmed chronic/refractory GERD in adults (Conditional/VLow): 79.2% vs 62.6% long-term symptom control. Robotic vs. laparoscopic: both acceptable, patient-values-driven. Complete vs. partial fundoplication: complete = better reflux control; partial = 7.4% less long-term dysphagia. Division vs. preservation of short gastric vessels: division may give 13.2% better 10-year symptom control but 21.8% more gas-bloat. Pediatric: minimal dissection during fundoplication (Conditional/Moderate).

---

## [2026-05-16] ingest | ACG 2021 Management of Benign Anorectal Disorders (Wald et al.)

**Source:** Wald A et al. Am J Gastroenterol 2021;116:1987–2008

**Pages created:**

- `wiki/sources/acg-2021-anorectal-disorders.md`
- `wiki/1-disease-scripts/colorectal-diseases/defecation-disorders.md`
- `wiki/1-disease-scripts/colorectal-diseases/hemorrhoids.md`
- `wiki/1-disease-scripts/colorectal-diseases/anal-fissure.md`
- `wiki/1-disease-scripts/colorectal-diseases/fecal-incontinence.md`
- `wiki/1-disease-scripts/colorectal-diseases/proctalgia-syndromes.md`

**Key contributions:** Defecation disorders: biofeedback cornerstone (Strong/Moderate, 8 RCTs), ARM + BET required for diagnosis, SNS ineffective for constipation. Hemorrhoids: rubber band ligation preferred for Grade I–III (Strong/Moderate), thrombosed external → excision ≤4 days. Anal fissure: topical CCB first-line (67–90% healing), LIS gold standard for refractory (94–98%, Strong/High). Fecal incontinence: loperamide + biofeedback first-line; SNS for moderate-severe failures (Strong/Low, 90% responder rate). Proctalgia: biofeedback for levator syndrome (Strong/VLow); reassurance only for proctalgia fugax.

---

## [2026-05-16] ingest | ACG 2021 Diagnosis and Management of Idiosyncratic Drug-Induced Liver Injury

**Source:** Chalasani NP et al. Am J Gastroenterol 2021;116:878–898 (16 recommendations)

**Pages created:**

- `wiki/sources/acg-2021-dili.md`
- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/drug-induced-liver-injury.md`

**Key contributions:** DILI is diagnosis of exclusion; R-value classifies injury pattern (hepatocellular ≥5, mixed 2–5, cholestatic ≤2). RUCAM causality tool: framework, not gold standard (reliability 0.51). NAC for early-stage DILI-ALF coma grade I–II (Conditional/Low: 58% vs 27% transplant-free survival). Against rechallenge if severe initial injury (Strong/Low). HDS = herbal/dietary supplements, second most common DILI cause in US; same diagnostic approach. ICI hepatotoxicity: onset 4–12 weeks; withhold ICI + steroids ± MMF. DILI in CLD: higher mortality (16% vs 5.2%).

---

## [2026-05-16] ingest | AGA 2020 Clinical Practice Update: Management of Gastric Intestinal Metaplasia

**Source:** Gupta S et al. Gastroenterology 2020;158:693–702 (3 formal recommendations)

**Pages created:**

- `wiki/sources/aga-2020-gastric-intestinal-metaplasia.md`
- `wiki/1-disease-scripts/foregut-and-motility-diseases/gastric/gastric-intestinal-metaplasia.md`

**Key contributions:** Test and treat H. pylori in all GIM (Strong/Moderate): 32% RR reduction GC incidence, 33% GC mortality. Against routine surveillance (Conditional/VLow); shared decision-making for high-risk. Against routine <1y repeat endoscopy (Conditional/VLow). High-risk features: incomplete-type GIM (3× RR), extensive GIM (2×), family history GC (4.5×), high-risk ethnicity/immigrants. KEY TENSION with ACG 2025 GPMC and ESGE which recommend q3y surveillance for high-risk GIM.

---

## [2026-05-16] ingest | ACG 2021 Colorectal Cancer Screening (Shaukat et al.)

**Source:** Shaukat A et al. Am J Gastroenterol 2021;116:458–479 (21 GRADE recommendations)

**Pages created:**

- `wiki/sources/acg-2021-crc-screening.md`
- `wiki/7-concepts/colorectal-cancer-screening.md`

**Key contributions:** Screen ages 50–75 (Strong/Moderate); ages 45–49 conditional. Colonoscopy + annual FIT as preferred modalities; mtsDNA q3y, flexible sig, CTC acceptable alternatives. Against Septin-9. CIR ≥95% screening standard; ADR ≥25% (aspirational 45–50%); WT ≥6 min. Family history: colonoscopy at 40 or 10y before youngest FDR if FDR <60 or ≥2 FDR. Aspirin for CRC chemoprevention ages 50–69 with ≥10% CVD risk (Conditional/Low) — unique to ACG vs. USMSTF.

---

## [2026-05-16] ingest | ACG 2021 Diagnosis and Management of GERD (Katz et al.)

**Source:** Katz PO et al. Am J Gastroenterol 2022;117:27–56

**Pages created/updated:**

- `wiki/sources/acg-2021-gerd.md`
- Updated `wiki/1-disease-scripts/foregut-and-motility-diseases/ge-junction/gerd.md` (added ACG 2021 content)

**Key contributions:** 8-week empiric PPI trial (Strong/Moderate); attempt discontinuation if resolved; reflux monitoring off PPI for unclear cases. LA grade C/D confirms GERD; LA B borderline. PPIs over H2RA (Strong/High). PPI 30–60 min before meals. No prokinetics without gastroparesis. Extraesophageal: evaluate non-GERD causes first; reflux monitoring before PPI for isolated LPR. Refractory: pH off PPI if diagnosis uncertain; impedance-pH on PPI if established. MSA alternative to fundoplication (Strong/Moderate). TIF for heartburn/regurgitation, no LA C/D, hiatal hernia ≤2 cm (Conditional/Low). No Stretta.

---

## [2026-05-16] ingest | AGA-ACG 2023 Pharmacologic Management of Chronic Idiopathic Constipation

**Source:** Chang L, Chey WD, Imdad A et al. Am J Gastroenterol 2023;118:936–954 (10 GRADE recommendations, 28 RCTs)

**Pages created:**

- `wiki/sources/aga-acg-2023-constipation.md`
- `wiki/1-disease-scripts/colorectal-diseases/chronic-idiopathic-constipation.md`

**Key contributions:** Stepwise approach — OTC first, then Rx when OTC fails. Strong: PEG 17g (Moderate), bisacodyl/SPS 5mg (Moderate), linaclotide 145mcg (Moderate), plecanatide 3mg (Low), prucalopride 1–2mg (Low). Conditional: fiber/senna/MgOx/lactulose. Lubiprostone conditional for OTC failures ($374/month vs OTC <$50). Excludes IBS-C, OIC, malignancy, pregnancy. No head-to-head comparisons among secretagogues.

---

## [2026-05-16] ingest | Chicago Classification v4.0 — Esophageal Motility Disorders

**Source:** Yadlapati R et al. Neurogastroenterol Motil 2021;33(1):e14058

**Pages created:**

- `wiki/sources/chicago-v4-2021-esophageal-dysmotility.md`
- `wiki/7-concepts/chicago-classification-v4.md`

**Key contributions:** Standardized protocol (supine 10 swallows + upright 5+ swallows + MRS + RDC). Manufacturer-specific IRP thresholds: Medtronic supine ≤15/upright ≤12 mmHg; Laborie supine ≤22/upright ≤15 mmHg. Achalasia types I/II/III unchanged. EGJOO paradigm shift: always manometrically inconclusive — requires symptoms (dysphagia/NCCP) + positive TBE or FLIP for clinical diagnosis. IEM revised: >70% ineffective or ≥50% failed; fragmented peristalsis eliminated as standalone disorder. DCI thresholds: failed <100, weak 100–450, normal 450–8000, hypercontractile >8000.

---

## [2026-05-15] ingest | ACG 2021 Prevention, Diagnosis, and Treatment of Clostridioides difficile Infections

**Source:** Kelly CR et al. Am J Gastroenterol 2021;116:1124–1147.

**Pages created:**

- `wiki/sources/acg-2021-cdiff.md`
- `wiki/1-disease-scripts/colorectal-diseases/clostridioides-difficile.md`

**Key contributions:** Two-step testing only (NAAT or GDH → toxin EIA; NAAT alone risks over-diagnosing colonization). No test of cure. Severity: severe = WBC ≥15,000 OR Cr >1.5; fulminant = severe + hypotension/shock OR ileus OR megacolon. Non-severe/severe: vancomycin 125 mg QID ×10d or fidaxomicin 200 mg BID ×10d; metronidazole only for low-risk outpatients. Fulminant: vancomycin 500 mg PO q6h + IV metronidazole 500 mg q8h + vancomycin enemas 500 mg q6h if ileus; FMT after 48–72h maximal therapy failure. Recurrent: fidaxomicin or tapered/pulsed vancomycin for first recurrence; FMT (colonoscopy or capsules) for second+. Bezlotoxumab for ≥65 with ≥1 risk factor (NNT=6), avoid in CHF. Probiotics recommended against for prevention.

---

## [2026-05-15] ingest | ACG 2021 Upper Gastrointestinal and Ulcer Bleeding (Laine et al.)

**Source:** Laine L et al. Am J Gastroenterol 2021;116:899–917. (16 recommendations)

**Pages created:**

- `wiki/sources/acg-2021-ugib.md`
- `wiki/2-diagnostic-schemas/upper-gi-bleeding.md`

**Key contributions:** GBS 0–1 safe for ED discharge (99% sensitivity, 19–24% of patients qualify). Restrictive transfusion Hgb 7 g/dL reduces mortality and rebleeding. Erythromycin 250 mg IV pre-endoscopy reduces repeat endoscopy need (OR 0.51) and hospital stay by ~1.75 days. 24-hour endoscopy standard; urgent (<6h) does NOT improve outcomes even in GBS ≥12. Epinephrine injection NEVER monotherapy. High-dose PPI ≥80 mg/day ×3 days post-hemostasis reduces mortality (RR 0.41); continuous vs. intermittent equivalent. Forrest classification: Ia (spurting) 90% rebleed → treat; Ib (oozing) 10–20% → treat; IIa (visible vessel) 50% → treat; IIb (clot) 25–30% → consider; IIc/III → no hemostasis. TAE preferred over surgery when endoscopic therapy fails.

---

## [2026-05-15] ingest | AASLD 2021 Diagnosis, Evaluation, and Management of Ascites, SBP, and HRS

**Source:** AASLD Practice Guidance. Hepatology 2021.

**Pages created:**

- `wiki/sources/aasld-2021-ascites-sbp-hrs.md`
- `wiki/2-diagnostic-schemas/ascites.md`
- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/spontaneous-bacterial-peritonitis.md`

**Key contributions:** Ascites: grade 1–3 classification; sodium restriction ≤2 g/day; spironolactone 100 mg + furosemide 40 mg starting dose (can titrate to 400/160 mg max); LVP requires albumin 6–8 g per liter drained when >5L removed to prevent PPCD; TIPS criteria (refractory ascites, no severe HE, MELD <18 preferred). SBP: PMN ≥250/mm³ diagnostic threshold; culture-negative SBP = treat; bacterascites (PMN <250 + positive culture) = no treatment. Cefotaxime for community-acquired; pip-tazo ± vancomycin/meropenem for nosocomial. Albumin 1.5 g/kg day 1 + 1.0 g/kg day 3 (mandatory — prevents AKI). Secondary prophylaxis: ciprofloxacin 500 mg/day (norfloxacin unavailable in US since 2014). Primary prophylaxis: ascitic protein <1.5 g/dL + Child C ≥10 or Na ≤130.

---

## [2026-05-15] ingest | ACG/CAG 2022 Management of Anticoagulants and Antiplatelets During Acute GI Bleeding and the Periendoscopic Period

**Source:** Abraham NS et al. Am J Gastroenterol 2022;117:521–536. (18 conditional statements)

**Pages created:**

- `wiki/sources/acg-cag-2022-anticoag-gi-bleeding.md`
- `wiki/7-concepts/anticoagulation-gi-bleeding.md`

**Key contributions:** All 18 statements conditional with very low/low certainty. Acute bleeding: 4F-PCC preferred over FFP for warfarin reversal; vitamin K too slow (24–48h) for acute setting; DOAC reversal (idarucizumab/andexanet alfa/PCC) only for life-threatening hemorrhage within 24h of last dose. Platelet transfusion for antiplatelet-related GI bleeding significantly increases mortality (OR 5.57) in non-thrombocytopenic patients — do not use. Resume secondary prevention ASA on day of hemostatic confirmation. Periendoscopic: continue warfarin for low/moderate bleeding risk procedures; interrupt 5 days for high-risk. No bridging — BRIDGE trial showed bridging doubles major bleeding and is non-inferior for thromboembolism (exception: mechanical heart valve). DOAC: interrupt 1–2 days pre-procedure; resume within 3 days post-procedure. In DAPT: interrupt P2Y12, continue ASA.

---

## [2026-05-15] ingest | ACG 2022 Gastroparesis (Camilleri et al.)

**Source:** Camilleri M et al. Am J Gastroenterol 2022;117:1299–1311.

**Pages created:**

- `wiki/sources/acg-2022-gastroparesis.md`
- `wiki/1-disease-scripts/foregut-and-motility-diseases/gastric/gastroparesis.md`

**Key contributions:** Gold standard = 4-hour scintigraphy with 255-kcal Egg Beaters meal; threshold >10% retention at 4h; hold offending meds 48h before. Retained food on EGD has only 55% PPV — not diagnostic. ~40% reclassified on repeat SGE (GP/FD overlap). Metoclopramide 10 mg qid (intranasal 10–14 mg qid); FDA-restricted to <12 weeks; true tardive dyskinesia risk ~0.1/1,000 pt-years. Domperidone 20 mg qid — expanded access only. Erythromycin 250 mg tid: short-term only, tachyphylaxis inevitable. G-POEM preferred pyloric intervention (symptom improvement 88.2%, GE normalization 61.3%). EndoFLIP pyloric DI <10 mm²/mmHg identifies pyloric dysfunction and may predict G-POEM outcomes. NOT recommended: intrapyloric botulinum toxin (2 negative RCTs), GES for overall symptom score (negative RCT), nortriptyline (placebo in RCT), ghrelin agonists (failed phase 3).

---

## [2026-05-15] ingest | ACG 2022 Update Diagnosis and Management of Barrett's Esophagus (Shaheen et al.)

**Source:** Shaheen NJ et al. Am J Gastroenterol 2022;117:559–587. (21 GRADE recommendations)

**Pages created:**

- `wiki/sources/acg-2022-barretts.md`
- `wiki/1-disease-scripts/foregut-and-motility-diseases/esophageal/barretts-esophagus.md`

**Key contributions:** Diagnosis requires IM on biopsy + columnar segment ≥1 cm by Prague C&M (do not biopsy irregular Z-line <1 cm without visible lesion). All dysplasia must be confirmed by second expert GI pathologist before action — 73% of community LGD diagnoses downstaged on expert review; confirmed LGD progresses at 9.1%/pt-year vs 0.6%/pt-year for downstaged. NDBE surveillance now stratified by M-length: <3 cm → q5y; ≥3 cm → q3y. EET now recommended for confirmed LGD (conditional). Visible lesion → EMR first (changes management in ~30%), then ablate residual BE. RFA first-line ablative; cryotherapy for RFA-refractory. Post-CEIM surveillance indefinite: LGD → 1/3/q2y; HGD/IMC → 3mo/6mo/12mo/annually. PPI once daily for all BE; ASA combination no firm recommendation.

---

## [2026-05-15] ingest | AGA 2022 Diagnosis and Management of AKI in Cirrhosis

**Source:** AGA Technical Review. Gastroenterology 2022. (14 BPA statements)

**Pages created:**

- `wiki/sources/aga-2022-aki-cirrhosis.md`
- `wiki/1-disease-scripts/hepatopancreaticobiliary-diseases/aki-in-cirrhosis.md`

**Key contributions:** HRS Type 1 → HRS-AKI; HRS Type 2 → HRS-NAKI/HRS-AKD. New diagnostic threshold: SCr rise ≥0.3 mg/dL within 48h (not old ≥2.5 mg/dL). FENa unreliable in cirrhosis (specificity 14%); FEUrea <28.16% better discriminates HRS-AKI from non-HRS. Terlipressin: 1 mg IV q4–6h bolus, escalate to 2 mg if <25% SCr reduction by day 3; contraindicated if SCr ≥5 mg/dL or SpO2 <90%; respiratory failure in 30% of CONFIRM trial patients with ACLF. RRT appropriate only as bridge to liver transplantation. MELD paradox: successful HRS reversal lowers SCr → lower transplant priority — treat anyway.

---

## [2026-05-15] ingest | ACG 2022 Update Diagnosis and Management of Celiac Disease

**Source:** ACG Clinical Guideline. Am J Gastroenterol 2022.

**Pages created:**

- `wiki/sources/acg-2022-celiac.md`
- `wiki/1-disease-scripts/foregut-and-motility-diseases/small-bowel/celiac-disease.md` (new small-bowel/ subdirectory)

**Key contributions:** Biopsy protocol: 1–2 biopsies from duodenal bulb (9 or 12 o'clock) + ≥4 postbulbar = minimum 6 specimens; only 39% real-world compliance. IgA deficiency invalidates all IgA-based serology — check total IgA concurrently; use DGP-IgG or TTG-IgG if deficient. Marsh I not specific for CD; Marsh IIIA/B/C = diagnostic. Nonbiopsy diagnosis: children with TTG-IgA >10× ULN + confirmatory EMA; applicable to symptomatic adults when endoscopy not feasible. Mucosal healing median 3 years in adults; persistent atrophy increases lymphoma risk (HR 2.81) and hip fracture (HR 1.67); follow-up biopsy at ~2 years reasonable. Refractory CD: Type 1 (polyclonal) vs. Type 2 (clonal CD3+/CD8−) by IHC/flow/PCR; Type 2 is precursor to EATL.

---

## [2026-05-15] ingest | ACG 2023 Management of Acute Lower Gastrointestinal Bleeding

**Source:** ACG Clinical Guideline. Am J Gastroenterol 2023;118:208–231.

**Pages created:**

- `wiki/sources/acg-2023-lgib.md`
- `wiki/diagnostic-schemas/acute-lower-gi-bleeding.md`

**Key contributions:** Major paradigm shift: urgent colonoscopy within 24h no longer recommended for most LGIB (two RCTs — one showed urgent scope increased rebleeding 13% vs 3% and readmission 11% vs 3%). Oakland score ≤8 = safe discharge (95% probability, sensitivity 98%). CTA first for hemodynamically significant hematochezia (sensitivity 90%); proceed to transcatheter arteriography within 90 min of positive CTA. Transfusion threshold 7 g/dL (8 for CVD). Tranexamic acid contraindicated (>12,000-patient RCT — no benefit, increased VTE and seizures). 4-factor PCC over FFP for VKA reversal. Resume anticoagulation within 7 days — discontinuation after diverticular bleed nearly doubles ischemic stroke risk (HR 1.93). EBL reduces rebleeding vs. clipping for diverticular hemorrhage (8% vs 19% early; 9% vs 29% late).

---

## [2026-05-15] ingest | ACG 2023 Diagnosis and Management of Gastrointestinal Subepithelial Lesions

**Source:** ACG Clinical Guideline. Am J Gastroenterol 2023.

**Pages created:**

- `wiki/sources/acg-2023-subepithelial-lesions.md`
- `wiki/diagnostic-schemas/subepithelial-lesion.md`

**Key contributions:** 11 GRADE recommendations + 6 key concepts. EUS preferred first-line for all nonlipomatous SEL (92% sensitivity/100% specificity vs 87%/29% for endoscopy alone). EUS imaging alone only 43–50% accurate for solid SEL; FNB (preferred) or FNA + ROSE raises to 73–84%. EUS layer of origin is key narrowing step: MP + hypoechoic = GIST/leiomyoma/schwannoma; submucosa + hypoechoic = NET/granular cell tumor; submucosa + hyperechoic = lipoma. Gastric GIST <2 cm: metastatic risk ~0%, shared decision; >2 cm and all nongastric: resect. ≥2 EUS malignant features (irregular border, echogenic foci, cystic spaces) → 80–100% sensitivity for malignancy. Gastric NETs type 3 = sporadic/aggressive → ESD preferred. Rectal NETs <1 cm: band ligation EMR achieves R0 96–100%.

---

## [2026-05-15] ingest | ACG 2023 Diagnosis and Management of Biliary Strictures

**Source:** ACG Clinical Guideline. Am J Gastroenterol 2023.

**Pages created:**

- `wiki/sources/acg-2023-biliary-strictures.md`
- `wiki/diagnostic-schemas/biliary-stricture.md`

**Key contributions:** 11 recommendations + 12 key concepts. Maintain high index of suspicion for malignancy. EUS-FNB beats ERCP-based sampling for extrahepatic strictures with pancreatic mass; single-session EUS + ERCP preferred at capable centers. Never EUS-FNA the primary perihilar lesion if transplant is possible — use intraductal sampling; sample nodes freely. Use ≥2 intraductal sampling modalities at index ERCP for perihilar strictures; FISH + cholangioscopy add yield over brushings alone. Confirm malignancy before placing uSEMS (becomes permanently embedded). Perihilar drainage goal: sectorial (>50% liver volume). Endobiliary PDT or RFA adds survival benefit for unresectable perihilar cholangiocarcinoma.

---

## [2026-05-15] ingest | ACG 2023 Acute Liver Failure

**Source:** ACG Clinical Guideline. Am J Gastroenterol 2023.

**Pages created:**

- `wiki/sources/acg-2023-alf.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/acute-liver-failure.md`

**Key contributions:** ALF requires ALL four: illness <26 weeks, no prior liver disease, any encephalopathy, INR ≥1.5 (exceptions: Wilson, AIH, Budd-Chiari). O'Grady classification: hyperacute (APAP/HAV) = high cerebral edema but best prognosis; subacute (non-APAP DILI) = worst prognosis, low cerebral edema. Three counterintuitive positions: (1) INR does NOT reflect bleeding risk — do not routinely correct coagulopathy; (2) no prophylactic antibiotics; (3) lactulose/rifaximin have no proven benefit in ALF HE. CRRT early for grade 2+ encephalopathy even without AKI — ammonia clearance reduces mortality/cerebral edema. NAC for non-APAP ALF improves transplant-free survival in early coma grade (I–II) only. Any encephalopathy → contact transplant center; KCC or MELD >25 = high risk.

---

## [2026-05-15] ingest | ASGE 2024 Diagnosis and Management of GERD

**Source:** ASGE Standards of Practice Committee. Gastrointest Endosc 2024. (6 PICO questions, systematic review)

**Pages created:**

- `wiki/sources/asge-2024-gerd.md`
- `wiki/disease-scripts/foregut-and-motility-diseases/ge-junction/gerd.md`
- `wiki/concepts/reflux-testing.md`

**Key contributions:** First full GERD disease script in wiki. 6 PICO questions covering diagnosis, PPI safety, and endoscopic/surgical options. Critical decision point: hiatal hernia ≤2 cm + Hill I/II → TIF 2.0; >2 cm + Hill III/IV → cTIF or surgery. PPI safety high-quality RCT reassurance for most feared AEs (dementia, CKD, gastric cancer remain very low certainty; only confirmed harm is modest enteric infection increase). Post-sleeve gastrectomy Barrett's risk 11.4% exceeds ASGE 10% threshold → formalizes EGD surveillance at 3 years then q5y even for asymptomatic patients. TIF 2.0 effective for regurgitation-predominant GERD even without AET normalization. Standardized endoscopy reporting (Hill grade, hiatal hernia dimensions, LA grade, Prague criteria) now a strong recommendation. New concept page `reflux-testing.md` covers pH-metry, MII-pH, Bravo wireless, endoscopic GEJ assessment, HRM, CYP2C19 genotyping.

---

## [2026-05-15] ingest | Lyon Consensus 2.0 (2024): Evidence-Based Diagnosis of GERD (Gyawali, Kahrilas, Savarino et al.)

**Source:** Gyawali CP, Kahrilas PJ, Savarino E, et al. Gut 2024;73:361–371.

**Pages created:**

- `wiki/sources/lyon-2024-gerd-diagnosis.md`
- `wiki/concepts/ambulatory-reflux-monitoring.md`

**Key contributions:** Updates Lyon Consensus 2.0 diagnostic framework. Conclusive GERD: AET >6% (pH-impedance or wireless); Borderline: AET 4–6% (requires adjuncts); Excluded: AET <4% all days + negative SAP/SI (→ reflux hypersensitivity if SAP/SI positive). Reflux episodes: >80/day supports GERD; <40/day argues against. MNBI: <1500 ohms adjunctive support; >2500 ohms against pathological GERD. On-therapy refractory GERD: AET >4% + >80 episodes/day = actionable. Symptom association: SAP >95% or SI >50% = positive. Major change: LA grade B now conclusive for GERD (previously borderline). PSPW index retired as clinical criterion. Wireless pH preferred at 96h (AUC 0.63 vs. 0.57 for 48h). Refractory GERD on-therapy: AET >4% + >80 reflux episodes/day.

---

## [2026-05-15] ingest | AGA 2024 Quality Indicators for Upper GI Endoscopy

**Source:** AGA Institute. Gastroenterology 2024. (Quality indicators with performance targets)

**Pages created:**

- `wiki/sources/aga-2024-upper-endoscopy-quality.md`

**Pages updated:**

- `wiki/3-general-gi-procedures/upper-endoscopy.md` — supplemented with AGA 2024 quality data

**Key contributions:** Missed cancers as motivating concern: 10.7% of upper GI cancers diagnosed within 3 years of negative EGD; 23.9% of esophageal adenocarcinomas in nondysplastic Barrett's within 1 year. Inspection time >7 minutes standard (two retrospective studies, n=55,786; 2–3x detection increase for gastric neoplasia); Barrett's: >1 min/cm segment. IET benefit quantified: NBI detected significantly more GIM (17.7% vs. 7.7%) and focal lesions (40.6% vs. 29%); LCI reduced missed upper GI neoplasia by >80% vs. HD-WLE (RR 0.19). Updated Sydney System: ≥5 biopsies in defined locations, ≥2 jars, GIM subtyping requested. Barrett's biopsy: ≥8 biopsies even for short-segment. IDA: AGA recommends serology-first for celiac + noninvasive H. pylori testing (vs. routine biopsy at endoscopy — diverges from BSG/ESCD). GLP-1 RA: hold 1 dose pre-endoscopy per ASA guidance (limited data).

---

## [2026-05-15] ingest | ACG 2025: Preventive Care in IBD (Farraye, Melmed, Lichtenstein et al.)

**Source:** Farraye FA et al. Am J Gastroenterol 2025;120:1447–1473. DOI: 10.14309/ajg.0000000000003541

**Pages created:**

- `wiki/sources/acg-2025-ibd-preventive-care.md`
- `wiki/concepts/ibd-preventive-care.md`

**Key contributions:** 12 GRADE recommendations + 11 Key Concepts. Core theme: GI teams should actively manage IBD preventive care, not assume primary care covers it. Vaccinations: PCV20/PCV21 for all IBD ≥50 or 19–49 on IMT; 2-dose recombinant HZ vaccine (Shingrix) for all IBD ≥50 and ALL IBD on/planning IMT ≥19; live vaccines contraindicated on IMT; annual influenza (inactivated); HBV, varicella before IMT when possible. Anti-TNF (especially + thiopurine/MTX) blunts vaccine immunogenicity; non-TNF biologics less impactful. Cancer screening: annual cervical cancer screening for women on IMT; annual melanoma for all IBD; annual NMSC screening for patients on thiopurines/MTX/JAK/S1P modulators (particularly >50). Osteoporosis: DEXA at diagnosis and periodically with conventional risk factors; corticosteroids → 30–50% fracture risk. Mental health: screen annually for depression (25.2%) and anxiety (32.1%); refer if positive. Smoking: counsel all to quit.

---

## [2026-05-15] ingest | San Diego Consensus (2025): Laryngopharyngeal Symptoms and LPRD (Yadlapati, Gyawali, Pandolfino et al.)

**Source:** Yadlapati R, Weissbrod P, Walsh E, Gyawali CP, Pandolfino JE et al. Am J Gastroenterol 2025 (Publish Ahead of Print). DOI: 10.14309/ajg.0000000000003482

**Pages created:**

- `wiki/sources/san-diego-2025-lprd.md`
- `wiki/diagnostic-schemas/laryngopharyngeal-symptoms.md`

**Key contributions:** 28-member interdisciplinary panel (ENT, GI, SLP, psychologist); RAND methodology. Establishes critical LPS/LPRD distinction: LPS = symptom descriptor (cough, hoarseness, throat clearing, phlegm, throat pain; ≥2×/week, ≥8 weeks); LPRD = LPS + objective GERD evidence. ~60% of "LPR"-diagnosed patients have normal ambulatory reflux monitoring. Laryngoscopy mandatory (rule out malignancy/vocal fold lesions) but cannot diagnose LPRD; RFS/RSA invalid as diagnostic tools. Algorithm: LPS + esophageal symptoms → BID PPI × 3 months ± alginates → EGD/reflux monitoring if unresponsive; isolated LPS → no empiric acid suppression, proceed directly to EGD + ambulatory monitoring. GERD proven: AET >6.0%; physiologic: AET <4.0%. 24h HEMII-pH: best for proximal/non-acidic reflux in isolated LPS. 96h wireless pH: best for determining anti-reflux therapy need; diagnostic yield for GERD in LPS 50% vs. 27% on 24h. Laryngeal hyperresponsiveness/hypervigilance addressed by: LRT (SLP), CBT, gabapentin/pregabalin; TCAs caution (anticholinergic). Oropharyngeal pH (Restech) not recommended standalone.

---

## [2026-05-15] ingest | AGA 2021: Diagnosis and Management of Atrophic Gastritis (Shah, Piazuelo, Kuipers, Li)

**Source:** Shah SC, Piazuelo MB, Kuipers EJ, Li D. Gastroenterology 2021;161(4):1325–1332. DOI: <https://doi.org/10.1053/j.gastro.2021.06.078>

**Pages created:**

- `wiki/sources/aga-2021-atrophic-gastritis.md`
- `wiki/disease-scripts/foregut-and-motility-diseases/gastric/atrophic-gastritis.md`

**Key contributions:** 12 BPA statements (no formal GRADE). AG = loss of gastric glands in chronic inflammation; IM on histology almost invariably implies AG (underdiagnosed in US). Two etiologies: HpAG (antrum-dominant) and AIG (corpus/fundus-dominant). OLGA/OLGIM staging III/IV = high risk → surveillance every 3 years. Updated Sydney Protocol: 5 biopsies including incisura (do not skip). AIG serologies: PCA (sensitive, not specific) + IFA (specific, low sensitivity). All AG → test and treat H. pylori. New PA diagnosis → endoscopy within 6 months. Type I gastric NETs: endoscopic resection if <2 cm; surgical if >2 cm or metastatic. Micronutrient screen: iron (up to 50% of corpus AG) and B-12. Key tension: 2020 AGA GIM guideline recommends against routine GIM surveillance while this 2021 update recommends 3-year surveillance for advanced AG.

---

## [2026-05-15] ingest | Prophylactic Antibiotics for UGB in Cirrhosis — Journal Club (Albhaisi)

**Source:** Systematic review, JAMA Internal Medicine 2025. URL: <https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2837199>. Presented as journal club by Somaya Albhaisi at LA General.

**Pages created:**

- `wiki/sources/albhaisi-2025-prophylactic-antibiotics-cirrhosis.md`
- `wiki/diagnostic-schemas/variceal-upper-gi-bleeding.md`
- `wiki/meds/antibiotic-prophylaxis-cirrhosis.md`

**Key contributions:** 14 RCTs (n=1,322; 90.9% variceal source) found shorter/no antibiotic prophylaxis non-inferior to standard 5–7 days for all-cause mortality (97.3% probability; RD 0.9%). Bacterial infections 15.2% higher with shorter durations. Evidence quality low (12/14 unblinded, 8/14 high bias risk). Post-2004 studies show stronger non-inferiority — modern endoscopy/ICU may reduce need for extended prophylaxis. Current guideline (5–7 day) recommendation lacks high-quality evidence; individualized approach reasonable. Potential protocol change at LA General (Nov 2025).

---

## [2026-05-15] ingest | The Vital Role of the Endoscopic Oncologist — Chang et al

**Source:** Chang KJ et al. Gastrointestinal Endoscopy Clinics of North America 2024;34(1):xv–xviii. PubMed: <https://pubmed.ncbi.nlm.nih.gov/37973235/>

**Pages created:**

- `wiki/sources/chang-2024-endoscopic-oncologist.md`
- `wiki/concepts/endoscopic-oncology.md`

**Key contributions:** Editorial framing endoscopic oncology as a distinct GI subspecialty. Full text unavailable; concept stub created covering scope (ESD/EMR/EUS staging/biliary palliation) and relationship to surgical and medical oncology.

---

## [2026-05-15] ingest | Fever in a Returning Traveler — NEJM 2023

**Source:** NEJM, October 21, 2023. Notion source: <https://www.notion.so/8214b4f26a5f4d1a90e741da438fb6a7>

**Pages created:**

- `wiki/sources/nejm-2023-fever-returning-traveler.md` (stub — PDF not available)
- `wiki/diagnostic-schemas/fever-returning-traveler.md`

**Key contributions:** Source stub only (PDF unavailable). GI-focused diagnostic schema created from medical knowledge: incubation-based differential (enteric fever, amoebiasis, hepatitis A/E, schistosomiasis, traveler's diarrhea), diagnostic algorithm, key tests table, red flags. To be expanded once source PDF is retrieved.

---

## [2026-05-15] ingest | Padova Consensus (2025): HRM Before and After Antireflux Surgery (Salvador, Pandolfino, Gyawali, Yadlapati et al.)

**Source:** Salvador R, Pandolfino JE, Costantini M, Gyawali CP, et al. Ann Surg 2025;281:124–135. DOI:10.1097/SLA.0000000000006297

**Pages created:**

- `wiki/sources/padova-2025-hrm-antireflux.md`
- `wiki/7-concepts/hrm-antireflux-surgery.md`

**Key contributions:** First systematic international consensus on HRM before and after ARS (29-member RAND/UCLA methodology; 3 years, July 2020–June 2023). Pre-ARS: HRM mandatory to exclude motor disorders; ~3% of GERD-referrals for ARS have achalasia spectrum; EGJOO must be addressed pre-ARS; hypercontractile esophagus ≠ absolute contraindication if objective GERD + partial PPI response; DES + obstructive symptoms → caution. Post-ARS: IRP <15 mmHg (Medtronic) = post-ARS upper limit of normal; successful fundoplication = single distal HPZ with appropriate relaxation; Nissen → higher pressures vs. partial wrap; PFOO = elevated IBP + elevated IRP together. No single finding mandates reoperation (96%). Introduces the **Padova Classification**: Step 1 — neo-LES/CD anatomy (slipped/disrupted/intrathoracic wrap); Step 2 — HPZ physiology (low basal = disrupted; high basal = PFOO; normal basal + high IRP = PFOO; 100% failed peristalsis = absent contractility → compare to pre-op for pseudoachalasia; all normal = expected post-ARS findings). New dysphagia + normal endoscopy post-ARS → TBE + FLIP first (93%).

---

## [2026-05-15] ingest | Dallas Consensus (2025): FLIP Panometry Motility Classification v2.0 (Carlson, Pandolfino et al.)

**Source:** Carlson DA, Pandolfino JE, Yadlapati R, Vela MF, et al. Gastroenterology 2025;168:1114–1127. DOI:10.1053/j.gastro.2025.01.234

**Pages created:**

- `wiki/sources/dallas-2025-flip-panometry.md`
- `wiki/4-advanced-gi-procedures/foregut-and-motility-procedures/flip-panometry.md`

**Key contributions:** Modified Delphi consensus (40 statements, ≥80% threshold). Updates and formalizes FLIP Panometry Classification v2.0. Protocol: 16-cm FLIP, stepwise 50→60→70 mL (≥30s each); ≥2 sensors below CD; EGJ-DI = median 3 measurements at 60 mL (omit first 5s); max diameter at 70 mL. EGJ Opening: REO = EGJ-DI <2 mm²/mmHg AND max diameter <12 mm; NEO = ≥2 mm²/mmHg AND ≥16 mm. Contractile Response 5 categories: Absent, Diminished (<40 mmHg at 60 mL), Disordered (≥40 mmHg), Normal (>1 antegrade contraction ≥6 cm/≥10 mmHg), Spastic (SOCs or sustained LES contractions; RRC removed). Six-class matrix: Normal (NEO+Normal, NPV >90% for major disorder; 0% achalasia in 722 subjects), Hypocontractility, Possible Spasm, Spastic Obstruction, Obstruction with Normal Contractility (mechanical), Non-spastic Obstruction (REO+Absent/Diminished; 92% manometric EGJOO, PPV >75%).

---

## [2026-05-15] ingest | Rome V: Disorders of Gut–Brain Interaction and the Rome V Process (Drossman, Chang, Tack)

**Source:** Drossman DA, Chang L, Tack J. Gastroenterology 2026;170:1083–1098. DOI:10.1053/j.gastro.2026.02.014

**Pages created:**

- `wiki/sources/rome-v-2026-dgbi.md`
- `wiki/7-concepts/disorders-of-gut-brain-interaction.md`

**Key contributions:** Formal retirement of "functional gastrointestinal disorder" (FGID); DGBI is now the exclusive term. Rome V introduces 34 adult + 22 pediatric diagnoses across anatomic domains A–H. Three new adult diagnoses: inability to belch syndrome (B3c), abdominal migraine (D2 — first time in adult classification), anorectal sensory dysfunction (F4a/b). New Rome Clinical Criteria for practice: 8-week duration threshold, bothersomeness requirement, relaxed frequency; captures the ~25% of patients with subdiagnostic but clinically significant GI symptoms. IBS criteria modified: discomfort re-added, frequency lowered to ≥3 days/month (was ≥1 day/week), non-continuous pain added as criterion. Gallbladder SOD: cholescintigraphy dropped; SOD manometry dropped. Pediatric DGBI reorganized from age-based to anatomically based (G: upper, H: lower). 7-year development (2019–2026), 144 investigators, 27 countries, 25 committees.

---

## [2026-05-15] ingest | AASLD/IDSA 2025 Practice Guideline on Treatment of Chronic Hepatitis B (Ghany, Terrault et al.)

**Source:** Ghany MG, Terrault NA et al. Hepatology 2025 (Publish Ahead of Print). DOI:10.1097/HEP.0000000000001549

**Pages created:**

- `wiki/sources/aasld-idsa-2025-chb-treatment.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/chronic-hepatitis-b.md`

**Key contributions:** 6 PICO questions with systematic reviews. Major shifts from 2018 AASLD guidance: (1) TAF now co-recommended with TDF for MTCT prevention in pregnancy (Strong/Moderate); (2) Immune-tolerant phase: conditional recommendation to treat if age ≥40 or ≥F2 fibrosis; (3) Indeterminate/grey zone (up to 40% of CHB patients): conditional recommendation for antivirals via shared decision-making at each visit; (4) NA discontinuation: AASLD now recommends against stopping until HBsAg loss (diverges from EASL/APASL); if stopping, qHBsAg <100 IU/mL best predictor; (5) HCC surveillance expanded to HBV/HDV co-infection (all adults), HBV/HIV (men ≥18, women ≥40), and post-HBsAg loss in high-risk subgroups. Most recommendations Conditional/Very Low certainty — emphasizes shared decision-making throughout.

---

## [2026-05-07] ingest | ACG/ASGE 2025 Quality Indicators for Upper GI Endoscopy (Yadlapati et al.)

**Source:** Yadlapati R et al. Am J Gastroenterol 2025;120:290–312. (joint ACG/ASGE publication)

**Pages created:**

- `wiki/sources/acg-2025-egq-quality.md`
- `wiki/3-general-gi-procedures/upper-endoscopy.md`

**Key contributions:** 29 quality indicators with performance targets. Priority indicators: photodocumentation >90%; LA classification >98%; Prague criteria >95%; Sydney protocol biopsies for GPMC >90%; HDWLE + virtual chromoendoscopy for GPMC surveillance >90%; peptic ulcer stigmata >98%; hemostasis for active bleeding/NBVV >90%; GPMC surveillance plan >90%; H. pylori testing + eradication plan >95%; celiac disease ≥4 duodenal biopsies including bulb >98%; BE: EET complete IM eradication within 18 months >75%; EGD within 24h for admitted UGIB >80%.

---

## [2026-05-07] ingest | ACG/ASGE 2025 Quality Indicators for EUS (Mishra et al.)

**Source:** Mishra G et al. Am J Gastroenterol 2025;120:973–992. (joint ACG/ASGE publication)

**Pages created:**

- `wiki/sources/acg-2025-eus-quality.md`
- `wiki/4-advanced-gi-procedures/hepatobiliary-procedures/endoscopic-ultrasound.md`

**Key contributions:** 20 EUS quality indicators. Appropriate indication target >90% (not >95% — allows latitude for novel interventional EUS). Therapeutic EUS now >50% of indications. No routine antibiotics for EUS-FNA of pancreatic cysts (RCT evidence). Pancreatic mass diagnostic specimen ≥87%; EUS-guided PFC drainage technical success ≥92%; EUS-BD ≥85%; EUS-GE ≥85%; EDGE ≥92%. Diagnostic EUS AE benchmarks established (perforation <0.5%, infection <1%, pancreatitis <1%).

---

## [2026-05-07] ingest | ACG 2025 Malnutrition and Nutritional Recommendations in Liver Disease (Singal, Wong et al.)

**Source:** Singal AK, Wong RJ et al. Am J Gastroenterol 2025;120:950–972.

**Pages created:**

- `wiki/sources/acg-2025-liver-nutrition.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/nutrition-in-liver-disease.md`

**Key contributions:** Assess all cirrhotics for frailty/sarcopenia; late evening snack (7–10 PM) reduces ascites and HE risk (Strong/Moderate); BCAAs + standard of care (lactulose + rifaximin) for HE (Strong/Moderate); do NOT restrict dietary protein in decompensated cirrhosis with HE (Conditional/Very low); vegetable-source protein preferred in HE; vitamin E 800 IU/day for MASH without cirrhosis; coffee ≥2 cups/day for CLD; low-fructose diet across all CLD; zinc supplement for hypozincemia; early enteral nutrition in hospitalized cirrhosis.

---

## [2026-05-07] ingest | ACG 2024 Treatment of Helicobacter pylori Infection (Chey, Howden et al.)

**Source:** Chey WD, Howden CW, Moss SF, Wu J, Vakil N. Am J Gastroenterol 2024;119:1730–1753.

**Pages created:**

- `wiki/sources/acg-2024-hp-treatment.md`

**Pages updated:**

- `wiki/1-disease-scripts/foregut-and-motility-diseases/gastric/helicobacter-pylori-infection.md` — Therapeutics section fully rewritten per 2024 paradigm

**Key contributions:** Clarithromycin triple therapy no longer empiric first-line anywhere in US (CLR resistance >15%); BQT upgraded to Strong recommendation; vonoprazan dual and triple (FDA-approved 2022) added as Strong recommendations; susceptibility-guided therapy strongly recommended before CLR/LVX-based regimens; confirm eradication in all patients.

---

## [2026-05-07] ingest | ACG 2024 Management of Acute Pancreatitis (Tenner, Vege et al.)

**Source:** Tenner S, Vege SS, et al. Am J Gastroenterol 2024;119:419–437.

**Pages created:**

- `wiki/sources/acg-2024-acute-pancreatitis.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/acute-pancreatitis.md`

**Key contributions:** 2-of-3 diagnostic criteria; Revised Atlanta severity classification (mild/moderately severe/severe); Lactated Ringer's preferred over NS for fluid resuscitation; early enteral nutrition within 24–48h superior to TPN; no prophylactic antibiotics in sterile necrosis; ERCP only for cholangitis (emergent <24h) or CBD obstruction; step-up approach for necrotizing AP with delay ≥4 weeks; endoscopic necrosectomy via LAMS preferred over open surgery; cholecystectomy before discharge for mild gallstone AP.

---

## [2026-05-07] ingest | ACG 2024 Focal Liver Lesions (Frenette et al.)

**Source:** Frenette CT et al. Am J Gastroenterol 2024;119:1235–1271.

**Pages created:**

- `wiki/sources/acg-2024-focal-liver-lesions.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/hepatocellular-adenoma.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/focal-nodular-hyperplasia.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/hepatic-hemangioma.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/hepatic-cysts.md`

**Key contributions:** HCA molecular subtypes (HNF1α, inflammatory, beta-catenin, unclassified) with subtype-driven management; resect HCA if >5cm, male, beta-catenin, or pre-pregnancy; FNH has no malignant potential — no follow-up once confirmed; hemangioma no follow-up if <3cm and characteristic imaging; gadoxetate MRI is key for FNH vs. HCA distinction (hepatobiliary phase uptake present in FNH, absent in HCA); LI-RADS for HCC characterization.

---

## [2026-05-15] ingest | ACG 2020 Diagnosis and Management of Achalasia (Vaezi, Pandolfino et al.)

**Source:** Vaezi MF, Pandolfino JE, Yadlapati RH, Greer KB, Kavitt RT. Am J Gastroenterol 2020;115:1393–1411.

**Pages created:**

- `wiki/sources/acg-2020-achalasia.md`
- `wiki/disease-scripts/foregut-and-motility-diseases/ge-junction/achalasia.md`
- Created new directory: `wiki/disease-scripts/foregut-and-motility-diseases/ge-junction/`

**Key contributions:** HRM (esophageal pressure topography) is gold standard — 3.4x lower odds of incorrect diagnosis vs conventional manometry; Chicago Classification subtypes drive treatment: Type II (50–70%, most common) has best outcomes with any therapy; Type III (spastic, 5%) favors POEM (93%) over LHM (71%) due to tailored myotomy; PD/LHM/POEM are equivalent for Type I/II achalasia; POEM associated with significantly higher GERD (39% abnormal pH vs 17% LHM) — lifelong PPI and Barrett's surveillance advised; botulinum toxin reserved for patients unfit for definitive therapy (declines from 78% → 40% at 12 months); do not use ES or HRM alone to define failure — use TBE; do NOT recommend routine cancer surveillance despite 28x elevated SCC risk; esophagectomy for end-stage megaesophagus only.

---

## [2026-05-15] lint | Scheduled Wiki Health Check

**Automated scheduled lint. User not present — report only, no edits made.**

---

### 1. Structural Issues (Action Required)

#### 1a. Dual-Schema Directory Drift — HIGH PRIORITY

The wiki has both **old numbered directories** and **new unnumbered directories** coexisting. All content-bearing files are currently in the old numbered schema; the new directories are empty (except `disease-scripts/`, `sources/`, `syntheses/`). The 7 files in old-schema folders will not resolve correctly via Obsidian `[[wiki-links]]` unless Obsidian's flat-file search saves them.

**Files still in OLD numbered directories:**

| File | Current Path | Correct Path |
|---|---|---|
| helicobacter-pylori-infection.md | `wiki/1-disease-scripts/foregut-and-motility-diseases/gastric/` | `wiki/disease-scripts/foregut-and-motility-diseases/gastric/` |
| colonoscopy.md | `wiki/3-general-gi-procedures/` | `wiki/general-gi-procedures/` |
| upper-endoscopy.md | `wiki/3-general-gi-procedures/` | `wiki/general-gi-procedures/` |
| polypectomy-emr.md | `wiki/4-advanced-gi-procedures/colorectal-procedures/` | `wiki/advanced-gi-procedures/colorectal-procedures/` |
| endoscopic-ultrasound.md | `wiki/4-advanced-gi-procedures/hepatobiliary-procedures/` | `wiki/advanced-gi-procedures/hepatobiliary-procedures/` |
| bismuth-quadruple-therapy.md | `wiki/5-meds/` | `wiki/concepts/` (see 1b) |
| test-and-treat.md | `wiki/7-concepts/` | `wiki/concepts/` |

**Fix:** Move all 7 files to their correct schema paths and delete the old numbered directories.

#### 1b. bismuth-quadruple-therapy.md Miscategorized

`bismuth-quadruple-therapy.md` has `category: concept` in frontmatter but is physically in `wiki/5-meds/`. The index correctly counts it as a concept (0 meds). File should be moved to `wiki/concepts/` (new schema) alongside `test-and-treat.md`.

---

### 2. Uningested Raw Files

#### 2a. URGENT — In root `raw/` (not in `raw/GI Guidelines/`)

| File | Status |
|---|---|
| `ACG 2025 Preventative Care in IBD.pdf` | **Uningested** — directly relevant to existing `crohns-disease.md` and `ulcerative-colitis.md` |

*Note: This file appears in both `raw/` root and `raw/GI Guidelines/ACG/` — same document duplicated.*

#### 2b. High-Priority Uningested Guidelines (no existing wiki coverage)

These files in `raw/GI Guidelines/` have no corresponding `wiki/sources/` page AND cover topics with zero wiki coverage:

| Source | Gap |
|---|---|
| AASLD 2021 Dx Tx Ascites SBP HRS | No ascites/SBP/HRS pages; critical cirrhosis complication |
| ACG 2020 Diagnosis and Management of Achalasia | No motility/achalasia pages; entire foregut-motility section empty |
| ACG 2021 Diagnosis and Management of GERD | No GERD page |
| ACG 2022 Update Diagnosis and Management of Barrett's Esophagus | No Barrett's page |
| ACG 2021 Upper GI and Ulcer Bleeding | No UGIB diagnostic schema |
| ACG 2021 Prevention, Diagnosis, and Treatment of C. difficile | No C. diff page |
| ACG 2018 Diagnosis & Management of Pancreatic Cysts | No pancreatic cyst page |
| 2021 Chicago Classification v4.0 | No HRM/esophageal motility content |
| 2024 Lyon Consensus 2.0 | No GERD diagnostic framework |
| 2025 Dallas Consensus EndoFLIP | No EndoFLIP/functional lumen imaging content |
| ACG 2023 Biliary Strictures | No biliary stricture page |
| ACG 2022 Gastroparesis | No gastroparesis page |
| ACG 2022 Update Celiac Disease | No celiac disease page |
| ACG 2023 Acute Liver Failure | No ALF page |
| AASLD IDSA 2025 Hepatitis B Update | No hepatitis B page |
| 2026 Rome V Criteria | No functional GI disorders / IBS pages |
| ACG 2015 Primary Sclerosing Cholangitis | No PSC page |
| ACG 2018 Management of IBS | No IBS page |
| ACG CAG 2017 Management of Dyspepsia | No dyspepsia diagnostic schema |

#### 2c. Uningested Guidelines (superseded topics — lower priority)

Sources covering topics where newer guidelines are already ingested (2025 versions of Crohn's, UC, EoE, GPMC, H. pylori):

- ACG 2013 EoE (superseded by 2025)
- ACG 2017 Preventive Care in IBD (superseded by 2025)
- ACG 2018 Crohn's Disease in Adults (superseded by 2025)
- ACG 2019 Ulcerative Colitis (superseded by 2025)
- ACG 2014/2025 Bowel Preparation (2025 already ingested)

#### 2d. Lecture Transcripts (raw/GI Lectures:Chalk Talks/)

**60 uningested .md lecture files** covering achalasia, AIH, ascites, cirrhosis, DILI, HCC, PBC, IBS, IBD, bariatric surgery complications, ERCP, ESD vs TAMIS, and more. These are a large reservoir of clinical knowledge not yet in the wiki.

---

### 3. Index / Count Errors

- Index footer says: `16 sources | 12 disease scripts | 0 meds | 2 concepts`
- Actual counts: 16 sources ✓, 12 disease scripts ✓, 0 formal meds pages ✓, 2 concepts (but bismuth-quadruple-therapy is in wrong folder — see 1b)
- No errors in counts, but the "0 meds" entry is misleading since bismuth-quadruple-therapy.md is category:concept and properly excluded.

---

### 4. Cross-Reference Gaps

- `[[dyspepsia]]` — mentioned in H. pylori test-and-treat context but no diagnostic schema page exists
- `[[barrett-esophagus]]` — mentioned implicitly in EoE DDx territory; no page
- `[[peptic-ulcer-disease]]` — referenced in H. pylori indications; no page
- Advanced procedure directory has **no foregut/motility procedures** (e.g., HREM, POEM, EndoFLIP) — entire section empty

---

### 5. Recommendations (Priority Order)

1. **Fix directory drift** — move 7 files from numbered to unnumbered schema paths (structural fix, low content risk)
2. **Ingest ACG 2025 Preventative Care in IBD** — already in raw/, high relevance to existing pages
3. **Ingest high-priority gap-filling guidelines** — achalasia, GERD/Barrett's, UGIB, ascites/cirrhosis complications, C. diff, Rome V
4. **Ingest lecture transcripts** — 60 files; consider batching by topic
5. **Create stub pages** for dyspepsia (diagnostic schema), Barrett's esophagus, peptic ulcer disease, IBS to support cross-references

---

## [2026-05-07] ingest | ACG 2024 Alcohol-Associated Liver Disease (Jophlin, Singal et al.)

**Source:** Jophlin LL, Singal AK, Bataller R, et al. Am J Gastroenterol 2024;119:30–54.

**Pages created:**

- `wiki/sources/acg-2024-ald.md`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/alcohol-associated-liver-disease.md`

**Key contributions:** AH clinical diagnosis (jaundice within 60 days, AST:ALT >1.5, AST <500, bilirubin >3); severe AH = MELD ≥20 or MDF ≥32; prednisolone 40mg/day × 28 days first-line with Lille score at day 7 (≥0.45 = stop steroids); NAC reduces infections and short-term mortality; baclofen safest AUD pharmacotherapy in cirrhosis; naltrexone contraindicated in hepatic insufficiency; early liver transplantation for selected severe AH non-responders (first presentation, strong psychosocial support).

---

## [2026-05-07] ingest | ACG 2025 Diagnosis and Management of Gastric Premalignant Conditions (Morgan et al.)

**Source:** Morgan DR et al. Am J Gastroenterol 2025;00:1–29. doi:10.14309/ajg.0000000000003350

**Pages created:**

- `wiki/sources/acg-2025-gastric-premalignant.md`
- `wiki/disease-scripts/foregut-and-motility-diseases/gastric/gastric-premalignant-conditions.md`

**Key contributions:** First ACG GPMC guideline; against routine GC screening in general US population; updated Sydney biopsy protocol (antrum/incisura container + corpus container); report GIM subtype (complete/incomplete/mixed) + extent (limited vs corpus-extension) + severity; surveillance q3y for high-risk GIM (incomplete subtype, corpus-extension, family Hx GC, foreign-born from high-GC country, high-risk race/ethnicity); against surveillance for low-risk GIM; ESD referral to high-volume center (Strong); H. pylori eradication in all GPMC (Strong/Moderate); against NSAIDs/antioxidants for chemoprevention; all gastric adenomas → ER; hyperplastic polyps >10mm insufficient evidence.

---

## [2026-05-07] ingest | USMSTF 2025 Optimizing Bowel Preparation Quality for Colonoscopy (Jacobson et al.)

**Source:** Jacobson BC et al. Am J Gastroenterol 2025;120:738–764. (joint publication ACG/AGA/ASGE)

**Pages created:**

- `wiki/sources/usmstf-2025-bowel-prep.md`

**Pages updated:**

- `wiki/3-general-gi-procedures/colonoscopy.md` — added full bowel prep section (prep standards, split-dose, 2L preference, high-risk modifications, quality tracking targets)

**Key contributions:** Split-dose required (Strong/High); 2L preferred over 4L (Weak/Moderate); same-day acceptable for afternoon colonoscopy (Strong/High), inferior for morning (Weak/Low); simethicone ≥320mg as adjunct (Weak/Moderate); target >90% adequate prep at endoscopist + unit level (Strong/Moderate); reschedule inadequate prep within 12 months (screening) or 3 months (positive non-colonoscopy test); high-risk regimen: split-dose 4L PEG-ELS + bisacodyl 15mg + low-residue diet 3–2 days prior + clear liquids day before.

---

## [2026-05-07] ingest | ACG 2025 Ulcerative Colitis in Adults (Rubin et al.)

**Source:** Rubin DT et al. Am J Gastroenterol 2025;120:1187–1224.

**Pages created:**

- `wiki/sources/acg-2025-uc.md`
- `wiki/disease-scripts/colorectal-diseases/ulcerative-colitis.md`

**Key contributions:** Vedolizumab preferred over adalimumab (VARSITY; Rec 45); upadacitinib and infliximab have highest RCT evidence (Strong/High); S1P modulators (ozanimod, etrasimod) and IL-23 inhibitors (guselkumab, mirikizumab, risankizumab) all recommended; IFX + thiopurine combo required; IUS formally recognized as monitoring tool; FC thresholds; ASUC rescue at day 3 with IFX or cyclosporine.

---

## [2026-05-07] ingest | ACG 2025 Management of Crohn's Disease in Adults (Lichtenstein et al.)

**Source:** Lichtenstein GR et al. Am J Gastroenterol 2025;120:1225–1264.

**Pages created:**

- `wiki/sources/acg-2025-crohns.md`
- `wiki/disease-scripts/colorectal-diseases/crohns-disease.md`

**Key contributions:** Top-down therapy preferred (PROFILE trial); risankizumab preferred over ustekinumab in anti-TNF-experienced (SEQUENCE trial); guselkumab and mirikizumab (anti-IL-23) both recommended; upadacitinib (JAK-1) requires prior anti-TNF exposure; SC infliximab and vedolizumab maintenance options; combo IFX + thiopurine for biologic-naive; perianal CD: drain/seton before biologic, IFX preferred; postoperative: ileoscopy 6–12mo, anti-TNF for high risk.

---

## [2026-05-07] ingest | ACG 2025 Diagnosis and Management of Eosinophilic Esophagitis (Dellon et al.)

**Source:** Dellon et al. Am J Gastroenterol 2025;120 (January).

**Pages created:**

- `wiki/sources/acg-2025-eoe.md`
- `wiki/disease-scripts/foregut-and-motility-diseases/esophageal/eosinophilic-esophagitis.md`

**Key contributions:** Diagnostic criteria (≥15 eos/hpf, ≥6 biopsies from ≥2 levels, exclude other causes); EREFS scoring; PPI-responsive EoE no longer a separate entity; step-up diet approach (1FED → 6FED); BOS FDA-approved 2024; dupilumab FDA-approved ≥12y (2022) and 1–11y (2024); maintenance therapy strongly recommended (near-universal relapse off treatment); monitoring at 8–12 weeks (12–24 weeks for dupilumab); allergy testing not useful for dietary guidance.

---

## [2026-05-07] ingest | USMSTF 2020 Endoscopic Removal of Colorectal Lesions (Kaltenbach et al.)

**Source:** Kaltenbach et al. Am J Gastroenterol 2020;115:435–464.

**Pages created:**

- `wiki/sources/usmstf-2020-endoscopic-removal.md`
- `wiki/advanced-gi-procedures/colorectal-procedures/polypectomy-emr.md`

**Key contributions:** Cold snare standard for ≤9mm; EMR preferred for ≥20mm non-pedunculated; viscous injectants over saline; adjuvant thermal ablation of EMR margins; prophylactic clip closure right colon ≥20mm; piecemeal EMR surveillance 6mo→1y→3y; tattoo placement 3–5cm distal to lesion.

---

## [2026-05-07] ingest | USMSTF 2020 Follow-Up After Colonoscopy and Polypectomy (Gupta et al.)

**Source:** Gupta et al. Am J Gastroenterol 2020;115:415–434.

**Pages created/updated:**

- `wiki/sources/usmstf-2020-followup-colonoscopy.md`
- `wiki/general-gi-procedures/colonoscopy.md` — post-polypectomy surveillance tables

**Key contributions:** Updated 1–2 tubular adenomas <10mm to 7–10y (from 5–10y); full surveillance tables for adenomas and serrated polyps; serial surveillance guidance; high-quality colonoscopy quality metrics.

---

## [2026-05-07] ingest | USMSTF 2021 Age to Start and Stop CRC Screening (Patel et al.)

**Source:** Patel et al. Am J Gastroenterol 2022;117:57–69 (published online Nov 2021).

**Pages created/updated:**

- `wiki/sources/usmstf-2021-crc-screening-age.md`
- `wiki/general-gi-procedures/colonoscopy.md` — screening age section

**Key contributions:** Average-risk screening start at 45 (weak rec); strong rec at 50; stop at 75 if up-to-date; individualize 76–85; do not screen >85. EAO-CRC epidemiology context.

---

## [2026-05-07] update | Directory restructure to ADDT schema

**Action:** Reorganized wiki directory structure to match clinical workflow.

**Old structure:** `wiki/entities/conditions/`, `wiki/entities/drugs/`, etc.

**New structure:**

- `wiki/disease-scripts/foregut-and-motility-diseases/{esophageal,ge-junction,gastric}/`
- `wiki/disease-scripts/colorectal-diseases/`
- `wiki/disease-scripts/hepatopancreaticobiliary-diseases/`
- `wiki/diagnostic-schemas/`
- `wiki/general-gi-procedures/`
- `wiki/advanced-gi-procedures/{foregut-and-motility-procedures,colorectal-procedures,hepatobiliary-procedures}/`
- `wiki/meds/` (replaces `entities/drugs/`)
- `wiki/anatomy/`, `wiki/concepts/`, `wiki/sources/`, `wiki/syntheses/` (unchanged)

**Files moved/updated:**

- `wiki/entities/conditions/helicobacter-pylori-infection.md` → `wiki/disease-scripts/foregut-and-motility-diseases/gastric/helicobacter-pylori-infection.md` (reformatted to ADDT)
- `CLAUDE.md` updated with new schema, ADDT template, diagnostic schema template
- `wiki/index.md` updated to reflect new structure

---

## [2026-05-07] ingest | ACG 2017 H. pylori Guidelines (Chey et al.)

**Source:** ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Chey WD, Leontiadis GI, Howden CW, Moss SF. Am J Gastroenterol. 2017.

**Pages created:**

- `wiki/sources/acg-2017-hp-guidelines.md`
- `wiki/entities/conditions/helicobacter-pylori-infection.md`
- `wiki/concepts/test-and-treat.md`
- `wiki/concepts/bismuth-quadruple-therapy.md`

**Pages updated:**

- `wiki/overview.md` — added H. pylori as foundational GI topic
- `wiki/index.md` — added all new pages

**Key contributions:** First-line regimen recommendations (bismuth quadruple, concomitant), clarification of clarithromycin resistance thresholds, test-and-treat in dyspepsia, post-eradication testing.

---

## [2026-05-07] setup | Wiki initialized

**Action:** Directory structure created, CLAUDE.md schema written, index.md and log.md initialized.

**Structure:**

- `raw/` — source documents (immutable)
- `wiki/entities/` — conditions, drugs, procedures, anatomy
- `wiki/concepts/` — pathophysiology and clinical frameworks
- `wiki/sources/` — source summaries
- `wiki/syntheses/` — generated analyses

---

## 2026-07-16 — Choledocholithiasis risk-stratification criteria expanded

**Ask (Nick):** expand [[choledocholithiasis]] with the low/intermediate/high risk criteria.

**Source:** [[asge-2019-choledocholithiasis]] read from the primary PDF (`GI Resources/GI Guidelines/ASGE/ASGE 2019 Choledocholithiasis.pdf`, pp. 1089–1091) — the page previously carried only the *pathways*, never the criteria that assign risk.

**Added:** the ASGE 2019 criteria table (high >50% / intermediate 10–50% / low <10%) with the three high-risk criteria (stone on imaging; total bili >4 mg/dL **and** dilated CBD; ascending cholangitis) and the three intermediate criteria (abnormal liver tests; age >55; dilated CBD). Plus the operative details: dilated CBD = >6 mm in situ / >8 mm post-cholecystectomy; bili-alone and dilation-alone are intermediate, only the *combination* is high (specificity 74%→94%, PPV 64%→85% on validation); **gallstone pancreatitis was removed** as a criterion in the 2019 revision (no correlation with persistent stones). Same criteria mirrored into the source page's Key Recommendations, which had the same gap. Index line updated.

**Health check:** frontmatter, index drift, and `[[link]]` resolution clean.

## 2026-07-16 — Schema: pages must be decision-sufficient (clinical-reference standard)

**Principle (Nick):** *"I want the wiki to be a clinical reference. So anything that is needed to make medical decisions, I would want on those wiki pages."* Prompted by the [[choledocholithiasis]] gap above — the page had the pathways but not the criteria, so it couldn't answer whether a given patient needs an MRCP, which is the only reason to open it.

**Named failure mode:** capturing the conclusion but not the inputs. It reads as complete (the recommendation is there); what's missing is everything upstream of it.

**Encoded in `CLAUDE.md`** so future passes enforce it rather than remember it:
- New Content Guide section — *This is a clinical reference — the page must support the decision*, placed above source fidelity as the purpose test. Requires criteria for every named stratum/classification/score/stage, numeric thresholds **with units and qualifiers**, combination rules, doses/intervals, and what changed between guideline versions. Binds source pages equally.
- **Decision gaps** added to the LINT what-to-look-for list, and made the first check in the stalest-pages validation.

**Bounds:** does not override source fidelity (criteria come from an ingested source or get flagged); not a license to pad — decision-critical content in full, everything else stays concise.
