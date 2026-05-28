# Wiki Log

Append-only chronological record. Each entry: `## [YYYY-MM-DD] TYPE | Title`

Parse last 5 entries: `grep "^## \[" wiki/log.md | tail -5`

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

**Source:** Shah SC, Piazuelo MB, Kuipers EJ, Li D. Gastroenterology 2021;161(4):1325–1332. DOI: https://doi.org/10.1053/j.gastro.2021.06.078

**Pages created:**
- `wiki/sources/aga-2021-atrophic-gastritis.md`
- `wiki/disease-scripts/foregut-and-motility-diseases/gastric/atrophic-gastritis.md`

**Key contributions:** 12 BPA statements (no formal GRADE). AG = loss of gastric glands in chronic inflammation; IM on histology almost invariably implies AG (underdiagnosed in US). Two etiologies: HpAG (antrum-dominant) and AIG (corpus/fundus-dominant). OLGA/OLGIM staging III/IV = high risk → surveillance every 3 years. Updated Sydney Protocol: 5 biopsies including incisura (do not skip). AIG serologies: PCA (sensitive, not specific) + IFA (specific, low sensitivity). All AG → test and treat H. pylori. New PA diagnosis → endoscopy within 6 months. Type I gastric NETs: endoscopic resection if <2 cm; surgical if >2 cm or metastatic. Micronutrient screen: iron (up to 50% of corpus AG) and B-12. Key tension: 2020 AGA GIM guideline recommends against routine GIM surveillance while this 2021 update recommends 3-year surveillance for advanced AG.

---

## [2026-05-15] ingest | Prophylactic Antibiotics for UGB in Cirrhosis — Journal Club (Albhaisi)

**Source:** Systematic review, JAMA Internal Medicine 2025. URL: https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2837199. Presented as journal club by Somaya Albhaisi at LA General.

**Pages created:**
- `wiki/sources/albhaisi-2025-prophylactic-antibiotics-cirrhosis.md`
- `wiki/diagnostic-schemas/variceal-upper-gi-bleeding.md`
- `wiki/meds/antibiotic-prophylaxis-cirrhosis.md`

**Key contributions:** 14 RCTs (n=1,322; 90.9% variceal source) found shorter/no antibiotic prophylaxis non-inferior to standard 5–7 days for all-cause mortality (97.3% probability; RD 0.9%). Bacterial infections 15.2% higher with shorter durations. Evidence quality low (12/14 unblinded, 8/14 high bias risk). Post-2004 studies show stronger non-inferiority — modern endoscopy/ICU may reduce need for extended prophylaxis. Current guideline (5–7 day) recommendation lacks high-quality evidence; individualized approach reasonable. Potential protocol change at LA General (Nov 2025).

---

## [2026-05-15] ingest | The Vital Role of the Endoscopic Oncologist — Chang et al.

**Source:** Chang KJ et al. Gastrointestinal Endoscopy Clinics of North America 2024;34(1):xv–xviii. PubMed: https://pubmed.ncbi.nlm.nih.gov/37973235/

**Pages created:**
- `wiki/sources/chang-2024-endoscopic-oncologist.md`
- `wiki/concepts/endoscopic-oncology.md`

**Key contributions:** Editorial framing endoscopic oncology as a distinct GI subspecialty. Full text unavailable; concept stub created covering scope (ESD/EMR/EUS staging/biliary palliation) and relationship to surgical and medical oncology.

---

## [2026-05-15] ingest | Fever in a Returning Traveler — NEJM 2023

**Source:** NEJM, October 21, 2023. Notion source: https://www.notion.so/8214b4f26a5f4d1a90e741da438fb6a7

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
