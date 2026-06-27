# Wiki Log

Append-only chronological record. Each entry: `## [YYYY-MM-DD] TYPE | Title`

Parse last 5 entries: `grep "^## \[" wiki/log.md | tail -5`

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
- `[[polypectomy-emr]]` → new "Submucosal Lifting Agents (AGA 2025)" subsection (cushion separates MP, contrast demarcation, saline acceptable, SSLs lift with any agent, ESD needs injection, dynamic injection); added `[[endoscopic-submucosal-dissection]]` See-Also link. Source added; `updated:` bumped.
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
