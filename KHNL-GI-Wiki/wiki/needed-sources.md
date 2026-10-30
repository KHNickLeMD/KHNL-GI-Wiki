---
title: "Needed Sources — Download List"
category: overview
tags: [maintenance, sources]
created: 2026-09-08
updated: 2026-10-29
sources: []
---

# Needed Sources — Download List

Guidelines, papers, labels and figures that would close a specific gap on a wiki page but are not in `raw/`. Only items that pass the test in `CLAUDE.md` → LINT → *What belongs on the download list* (guidelines and consensus on their own merit; RCTs and score papers only when a guideline in `raw/` cites them; GI scores only; never narrative reviews). Every row links the article. Add the file to `raw/`, ingest it, delete its row. The 06:00 server pass fetches 0–2 open-access items a day.

**Marks:** 🔒 = paywalled, download by hand (institutional access). 🌐 = free to read but the site blocks scripts, or needs a login; saved for a Chrome session with Nick. Unmarked = not yet tried by the daily fetch. A row is deleted when its document is ingested.

> **Audit 2026-10-29 — the 📥 mark is retired.** It meant "already downloaded into `raw/`, awaiting ingest", and **all 27 rows still carrying it were wrong**: not one of those documents is in `raw/` or has a `wiki/sources/` page. The Chrome session of 2026-10-22 marked 31 rows, but the batch that actually synced through on 2026-10-23 was the score papers and consensus documents, whose rows were deleted as they were ingested; these 27 never arrived. The marks were not harmless — the daily fetch screens *Scores and classification instruments* first and skips marked rows, so for a week it found "every row already 📥 or 🔒" and fetched nothing. Each row is now marked by its real access state (🔒 where the open-access lookup returns no PubMed Central copy, 🌐 where the document is free but behind a login or a publisher supplement link).

## Scores and classification instruments (primary papers)

| Resource | Fills | Page(s) |
|---|---|---|
| 🔒 [Eckardt VF et al. Predictors of outcome in patients with achalasia treated by pneumatic dilation. *Gastroenterology* 1992;103:1732–8](https://doi.org/10.1016/0016-5085(92)91428-7) — via USC proxy 2026-10-22: ScienceDirect shows full-text access but no PDF, ClinicalKey returns not-found, gastrojournal.org redirect loop; needs a library scan request | Eckardt per-item anchors | [[achalasia]] |
| 🔒 [WHO Classification of Tumours: Digestive System Tumours, 5th ed. IARC 2019](https://publications.iarc.who.int/579) | revised serrated polyposis criteria verbatim | [[colorectal-polyposis]], [[serrated-polyposis-syndrome]] |
| 🔒 [Amodio P, Bemeur C, Butterworth R, et al. The nutritional management of hepatic encephalopathy in patients with cirrhosis: ISHEN Consensus. *Hepatology* 2013;58:325–336](https://doi.org/10.1002/hep.26370) — daily fetch 2026-10-28 returned `not_open_access` (no PMC id; PubMed 23471642), needs institutional access | **RFH-NPT item-level algorithm** (Supplementary Figure 1) — the bands and the three-step order are now on the page from Borhofen 2016, but not which answers score which points | [[nutrition-in-liver-disease]] |

## Guidelines and consensus documents not in `raw/`

| Resource | Fills | Page(s) |
|---|---|---|
| 🔒 Rome V chapters: [Corsetti M et al. Bowel Disorders. *Gastroenterology* 2026;170:1261–82](https://doi.org/10.1053/j.gastro.2026.02.003); [Törnblom H et al. Gastroduodenal Disorders. 170:1240–60](https://doi.org/10.1053/j.gastro.2026.01.038); [Rao SSC et al. Anorectal Disorders. 170:1318–46](https://doi.org/10.1053/j.gastro.2026.01.037) | numbered symptom items and frequency thresholds for constipation, FD, CVS, CHS, rumination, FI, F4 | [[chronic-constipation]], [[chronic-idiopathic-constipation]], [[dyspepsia]], [[cyclic-vomiting-syndrome]], [[cannabinoid-hyperemesis-syndrome]], [[rumination-syndrome]], [[fecal-incontinence]], [[defecation-disorders]], [[aga-2024-cvs]] |
| 🌐 [NCCN Guidelines: Pancreatic Adenocarcinoma](https://www.nccn.org/guidelines/category_1) (free login) | resectable / borderline / locally advanced contact criteria; AJCC 8th T changes | [[pancreatic-cancer]] |
| 🌐 [NCCN Guidelines: Genetic/Familial High-Risk Assessment — Colorectal, Endometrial, and Gastric](https://www.nccn.org/guidelines/category_2) (free login); [Blair VR et al. Hereditary diffuse gastric cancer: updated clinical practice guidelines (IGCLC). *Lancet Oncol* 2020;21:e386–97](https://doi.org/10.1016/S1470-2045(20)30219-9) | Cowden major/minor criteria; PHTS / JPS / PJS surveillance; HDGC prophylactic gastrectomy and endoscopic surveillance | [[cowden-syndrome]], [[juvenile-polyposis-syndrome]], [[peutz-jeghers-syndrome]], [[hereditary-diffuse-gastric-cancer]], [[aga-2022-hamartomatous-polyposis]] |
| 🔒 [van Hooft JE et al. SEMS for obstructing colonic and extracolonic cancer: ESGE Guideline Update 2020. *Endoscopy* 2020;52:389–407](https://doi.org/10.1055/a-1140-3017) | left-sided malignant obstruction bridge-to-surgery | [[colorectal-cancer]], [[colonic-stenting]], [[kanaka-2022-colonic-stent-bts-right-sided]] |
| 🔒 [ASGE SOP (Jue TL). Role of endoscopy in the management of benign and malignant gastroduodenal obstruction. *Gastrointest Endosc* 2021;93:309–22](https://doi.org/10.1016/j.gie.2020.07.063) | <2 mo stent / ≥2 mo surgery rule; EUS-GE vs surgical GJ | [[gastric-outlet-obstruction]], [[kastelijn-2023-enduro-protocol]], [[jeurnink-2010-sustent-goo]] |
| 🔒 [ASGE SOP (Faulx AL). Guidelines for privileging, credentialing, and proctoring to perform GI endoscopy. *Gastrointest Endosc* 2017;85:273–81](https://doi.org/10.1016/j.gie.2016.10.036) | case-volume thresholds for ESD / EUS-FNA / complex biliary | [[endoscopic-oncology]] |
| 🔒 [Vande Casteele N et al. AGA technical review on the role of therapeutic drug monitoring in IBD. *Gastroenterology* 2017;153:835–57](https://doi.org/10.1053/j.gastro.2017.07.031) | 6-MMP threshold (6-TGN range and allopurinol already from AGA 2017 TDM) | [[thiopurines]] |
| 🔒 [Preidis GA et al. AGA technical review on the role of probiotics in the management of GI disorders. *Gastroenterology* 2020;159:708–38](https://doi.org/10.1053/j.gastro.2020.05.060) — daily fetch 2026-10-29 returned `not_open_access`: it has a PubMed Central id (PMC8018518) but the copy is an author manuscript outside the open-access bucket, so the script cannot take it. Needs institutional access | trial-level CFU doses and durations | [[probiotics]] |
| 🔒 [Wolf AMD et al. Colorectal cancer screening for average-risk adults: 2018 ACS guideline update. *CA Cancer J Clin* 2018;68:250–81](https://doi.org/10.3322/caac.21457); [USPSTF. Screening for colorectal cancer. *JAMA* 2021;325:1965–77](https://doi.org/10.1001/jama.2021.6238) | age-45 start grades | [[colorectal-cancer-screening]], [[acg-2021-crc-screening]] |
| 🌐 [ACG 2024 *H. pylori* guideline Supplementary Digital Content 1](http://links.lww.com/AJG/D363) | BQT per-component mechanisms, adverse effects, interactions | [[helicobacter-pylori-infection]], [[bismuth-quadruple-therapy]] |
| 🔒 [Schneider BJ et al. Management of immune-related adverse events: ASCO guideline update. *J Clin Oncol* 2021;39:4073–126](https://doi.org/10.1200/JCO.21.01440) | MMF / azathioprine / tacrolimus doses in ICI hepatitis; taper endpoints | [[immune-checkpoint-inhibitor-hepatitis]] |
| 🔒 [Huston JM et al. SIS 2024 updated guidelines on intra-abdominal infection. *Surg Infect* 2024;25:419–35](https://doi.org/10.1089/sur.2024.137) | antibiotic regimen for colon ischemia | [[colon-ischemia]] |
| [CDC Yellow Book](https://www.cdc.gov/yellow-book) and [CDC Parasites treatment pages](https://www.cdc.gov/parasites) (giardiasis, amebiasis, cryptosporidiosis) | drug, dose, route, duration | [[giardiasis]], [[entamoeba-histolytica-infection]], [[cryptosporidiosis]], [[shigellosis]], [[salmonella-infection]], [[acute-diarrhea]], [[nitazoxanide]] |
| [Panel on Opportunistic Infections. Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV (NIH/CDC/IDSA)](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections) | CD4-stratified diarrhea differential; HSV / CMV esophagitis doses; cryptosporidiosis CD4 cut-off | [[hiv-aids-related-diarrhea]], [[cryptosporidiosis]], [[infectious-esophagitis]] |
| 🔒 [EASL Clinical Practice Guidelines on hepatitis delta virus. *J Hepatol* 2023;79:433–60](https://doi.org/10.1016/j.jhep.2023.05.001) + Pegasys label (below) | HDV treatment triggers; peg-IFN dose (off-label for HDV) | [[hepatitis-d]] |
| 🔒 [Krowka MJ et al. ILTS practice guidelines: hepatopulmonary syndrome and portopulmonary hypertension. *Transplantation* 2016;100:1440–52](https://doi.org/10.1097/TP.0000000000001229) | POPH mPAP / PVR / wedge cut-offs | [[hepatopulmonary-syndrome-portopulmonary-hypertension]] |
| 🌐 [ACG 2022 celiac guideline Supplementary Table 1](https://doi.org/10.14309/ajg.0000000000002075) | Marsh IIIA/B/C and Corazza definitions | [[celiac-disease]] |
| 🔒 [McClave SA et al. Guidelines for nutrition support therapy in the adult critically ill patient (ASPEN/SCCM). *JPEN* 2016;40:159–211](https://doi.org/10.1177/0148607115621863) | metoclopramide / erythromycin doses in EN intolerance | [[nutrition-in-hospitalized-patients]] |

## Product labels

FDA prescribing information from [DailyMed](https://dailymed.nlm.nih.gov/dailymed/) — the daily fetch downloads these with `fetch-paper.py --label`.

| Resource | Fills | Page(s) |
|---|---|---|
| Cimzia (certolizumab), Simponi (golimumab), Humira (adalimumab) labels | induction schedules, intervals, reaction and lupus / paradoxical-psoriasis management | [[anti-tnf-agents]] |
| Stelara (ustekinumab), Tremfya (guselkumab), Omvoh (mirikizumab), Skyrizi (risankizumab) labels | dosing, TB/HBV screening, reaction rates, pregnancy | [[il-23-and-il-12-23-inhibitors]] |
| Prograf (tacrolimus) label | neurotoxicity / adverse-effect detail | [[tacrolimus]] |
| Givlaari (givosiran) label | mg/kg dose | [[givosiran]] |
| Vowst (fecal microbiota spores, live-brpk) label *(Rebyota taken 2026-10-30 → [[rebyota-2022-live-jslm-label]])* | dosing and administration — [[aga-2024-fmt]] gives none and directs the reader to the package insert | [[fmt]] |
| Pegasys (peginterferon alfa-2a) label | HBV dose (HDV use is off-label) | [[hepatitis-d]] |
| 🌐 [ACG 2021 IBS guideline (Lacy) Supplemental Table 2](https://doi.org/10.14309/ajg.0000000000001036) | tegaserod cardiovascular risk-factor list | [[tegaserod]] |

## Figures and tables in already-ingested PDFs that need capture (raster images, no text layer)

| Resource | Fills | Page(s) |
|---|---|---|
| ACG 2025 gastric premalignant Figure 4; AGA 2021 atrophic gastritis Supplementary Figure 1A/B | OLGA/OLGIM stage-assignment grid | [[atrophic-gastritis]], [[gastric-intestinal-metaplasia]] |
| ACG 2025 EoE Figure 2 (EREFS with example scoring) | per-feature EREFS points | [[eosinophilic-esophagitis]] |
| AGA 2024 CPU *Esophageal Dysfunction from Immunity & Infection* Figure 1 | 6-panel endoscopic appearances — (A) Sjögren's with stricture, (B) Crohn's disease, (C) lichen planus with edema/exudates, (D) candida esophagitis, (E) pemphigus with sloughing tissue, (F) EoE with rings/furrows/edema/exudates. This is an endoscopic-appearance page, so the pictures are required, not optional | [[esophageal-dysfunction-systemic-disease]] |
| AGA 2019 AIP Figure 1 | treatment algorithm | [[autoimmune-pancreatitis]] |
| AGA 2019 T1b esophageal ESD Figures 1–4 | endoscopic/EUS appearances — Fig 1 early squamous cell carcinoma as a Lugol voiding lesion, Fig 2 Paris 0-IIa+c adenocarcinoma, Fig 3 radial EUS showing submucosal (T1b) invasion, Fig 4 post-ESD defect with central fibrosis and exposed muscularis propria fibers. Depth is judged by looking, so the pictures are required | [[esophageal-cancer]], [[esophageal-adenocarcinoma]] |
| AGA 2022 refractory gastroparesis Figure 2 | management algorithm | [[aga-2021-medically-refractory-gastroparesis]] |
| AGA 2022 refractory celiac Figure 1 | diagnostic / management algorithm | [[aga-2022-refractory-celiac]] |
| AGA 2020 young-adult-onset CRC Figure 1 (p. 2419) and Table 1 | management pathway; two unreadable cells; exact ≤/≥ operators | [[early-onset-colorectal-cancer]], [[aga-2020-young-adult-onset-crc]] |
| AGA 2021 gastric polyps Figure 1 | endoscopic / histology images per polyp type | [[gastric-polyps]] |
| AGA 2021 ICI colitis/hepatitis Figures 1–4 | management algorithms; endoscopic and histologic images | [[aga-2021-ici-colitis-hepatitis]] |
| AGA 2021 bleeding gastric varices Supplementary Figure 1 | cyanoacrylate injection technique | [[aga-2021-bleeding-gastric-varices]] |
| AGA 2021 perforations Supplementary Table 1 | OTSC data for esophageal perforation | [[aga-2021-gi-perforations-endoscopic-management]] |
| AGA 2022 SBS Figures 1–3, Supplementary Figure 1, published Table 1 | anatomic classification, LILT/STEP diagrams, PN algorithm; micronutrient units | [[short-bowel-syndrome]], [[aga-2022-short-bowel-syndrome]] |
| AGA 2023 IBD pain Figure 1A/1B | workup algorithm; levels of intervention | [[ibd-pain-management]] |
| AGA 2023 AI colon polyp Figures 1–2 | CADe / CADx displays | [[artificial-intelligence-endoscopy]] |
| AGA 2024 POEM Figures 1 and 3 | POEM role flow chart; anterior vs posterior tunnel | [[aga-2024-poem-advances]] |
| AGA 2025 enteral access Figure 1 | access-site anatomy | [[enteral-access]] |
| AGA 2026 electrosurgery Figures 1–2 | waveform / duty-cycle diagram; room layout and ESU safety checklist | [[electrosurgery]], [[aga-2026-electrosurgery]] |
| AGA 2026 CDI Figures 1, 2A–C and online supplement | testing / management algorithms; donor-directed FMT procedure | [[aga-2026-cdiff-adults]] |
| ACG 2018 pancreatic cysts Figure 2 | surveillance algorithm | [[acg-2018-pancreatic-cysts]] |
| Stapfer 2000 Figures 1–5 | **Figure 1 is the classification schematic** for duodenal perforation types I–III (the paper notes type IV is not drawn); Figure 2 an endoscopic view of a type I tear; Figures 3–4 plain films contrasting a large (type I) vs minimal (type III) leak — the images behind the 1-minute contrast rule; Figure 5 a periduodenal collection on CT | [[endoscopic-management-of-perforation]] |
| AASLD 2021 ascites Figures 2–4 | new-onset ascites, refractory ascites, AKI algorithms | [[aasld-2021-ascites-sbp-hrs]] |
| AASLD 2022 Wilson disease Figures 2–5 | diagnostic, neurological, family-screening, treatment algorithms | [[aasld-2022-wilson-disease]] |
| AASLD 2023 portal hypertension Figures 1–4 | staging schema, Rule of Five, AVH management | [[aasld-2023-portal-hypertension]] |
| Baveno VIII Figure 4 (legible copy); version of record — 🔒 Supplementary Tables S1–S4 downloaded 2026-10-22 | PSVD ≤2-point band; frailty tools, PSVD exclusion / associated conditions, PVT risk factors; SSM >55 vs ≥55 kPa | [[baveno-viii-2026-portal-hypertension]], [[porto-sinusoidal-vascular-disorder]], [[portal-vein-thrombosis]] |
| AFS 2024 Figures 1–9 | post-surgical valve types; assessment algorithm | [[afs-2024-ge-valve-after-antireflux-surgery]] |
| 🔒 USMSTF 2020 polypectomy Appendix 4 | DOPyS and CSPAT item lists | [[polypectomy]] |
| 🔒 Kastelijn 2023 ENDURO protocol Additional file 3 | technical / clinical success definitions | [[kastelijn-2023-enduro-protocol]] |
| AASLD 2021 ascites Table 9 supplements — **no such supplement exists** (checked 2026-10-22: Table 9 is printed in full in the main article, agents only, no doses); a dosing source is still needed | doses for non-cefotaxime SBP agents | [[spontaneous-bacterial-peritonitis]] |
| AGA 2019 functional diarrhea / IBS-D — **Figure 1**, the clinical decision support tool for chronic watery diarrhea (>4 weeks). Cited in the article's Summary but absent from the four-page reprint | the guideline's own stepwise testing algorithm | [[chronic-diarrhea]], [[aga-2019-lab-evaluation-functional-diarrhea-ibs-d]] |
| 🔒 AGA 2015 pancreatic cysts — the companion **Clinical Decision Tool** (*Gastroenterology* 2015;148:823–824), a separate document from the guideline | AGA's own cyst decision tree | [[pancreatic-cysts]], [[aga-2015-asymptomatic-neoplastic-pancreatic-cysts]] |
| 🔒 **Multi-Society Task Force 2016 reprocessing guideline** — *Multisociety guideline on reprocessing flexible GI endoscopes: 2016* (ASGE/SHEA/AAMI/ACG/AGA et al., *Gastrointest Endosc* 2017;85:282–294) | the **41 numbered reprocessing recommendations themselves**. The wiki has only AGA's 2017 *commentary* on this document, which reports the counts (2003 = 34, 2011 = 39, 2016 = 41) and names recommendations #2, #3 and #24 but reproduces none of them — so [[endoscope-reprocessing]] can state what changed between versions but cannot state the steps a unit must actually follow | [[endoscope-reprocessing]], [[aga-2017-mstf-endoscope-reprocessing-commentary]], [[ercp]] |
| 🔒 **Harefield Cleansing Scale** and **Chicago Bowel Preparation Scale** primary papers | the scoring criteria for these two scales. Both are **named** in ingested bowel-prep guidance with **no criteria anywhere in the wiki**. The Boston Bowel Preparation Scale, Ottawa and Aronchick criteria are **no longer needed** — [[acg-2014-bowel-cleansing]] Appendix B reproduces all three, and they are on [[bowel-preparation#Preparation Quality Scales\|bowel preparation]] | [[colonoscopy]], [[colonoscopy-quality-indicators]] |
| 🔒 ECCO definitions paper (steroid dependence / steroid refractoriness) — e.g. ECCO consensus on definitions of IBD treatment outcomes | time-based criteria for steroid dependence (relapse on taper below X mg within Y months; inability to stop within Z months) and steroid refractoriness in CD; ACG 2018/2025 define dependence only as "unable to taper without symptom recrudescence" and give no CD refractoriness definition | [[corticosteroids-ibd]] |
| 🔒 **Padova consensus Supplemental Digital Content Tables 1–3** (Am J Gastroenterol 2025, online supplement to the Padova HRM-for-antireflux-surgery consensus) | post-antireflux-surgery HRM normative values and the full Padova classification table, which the main article only references | [[hrm-antireflux-surgery]], [[padova-2025-hrm-antireflux]] |
| 🔒 **Chicago Classification v4.0 working-group technical reviews** (EGJ outflow obstruction; HRM protocol; EGJ metrics — Neurogastroenterol Motil 2021 companion papers) | the evidence and derivation behind the EGJOO, protocol and EGJ-metric statements summarized in the main CCv4.0 paper | [[chicago-classification-v4]], [[esophagogastric-junction-outflow-obstruction]] |
| Post-antireflux-surgery IBP, neo-LES basal pressure and FLIP normative values (no ingested source gives cutoffs) | numeric post-fundoplication thresholds for intrabolus pressure, neo-LES pressure and FLIP metrics | [[hrm-antireflux-surgery]], [[flip-panometry]] |
| **Endoscopic example images / diagrams of portal hypertensive gastropathy and gastric antral vascular ectasia** (an endoscopic atlas chapter, or a PHG/GAVE review that prints the pictures) | the appearances these two diagnoses are **made by looking at** — the "snakeskin" mosaic pattern at mild vs severe grade, isolated vs confluent red markings, and the antral GAVE pattern. The Baveno III criteria table is recreated natively, but neither [[aasld-2023-portal-hypertension]] (Table 6 is text only) nor Baveno VIII nor [[aga-2024-ida-management]] prints a single image of either lesion, so the grading page has criteria with nothing to match them against | [[portal-hypertensive-gastropathy]], [[gastric-antral-vascular-ectasia]] |

| **Cameron lesions** — an endoscopic atlas chapter, or a source that prints their appearance, prevalence and bleeding phenotype | the erosions at the diaphragmatic hiatus in a hiatal hernia, a recognised cause of occult blood loss. **Both SAGES hiatal-hernia documents are now ingested and neither mentions them**, nor does any GERD, upper-gastrointestinal-bleeding, small-bowel-bleeding or iron-deficiency-anemia guideline in `raw/`, so [[hiatal-hernia]] names them and stops there | [[hiatal-hernia]], [[upper-gi-bleeding]], [[iron-deficiency-anemia]] |
| **Paracentesis technique source** — a bedside-procedures reference or society technical review that prescribes the tap itself (e.g. an ASGE/AASLD technical document or a NEJM *Videos in Clinical Medicine* paracentesis article) | **puncture site selection, needle/catheter choice, ultrasound guidance, patient positioning and drainage set-up.** All eight guidelines behind [[paracentesis]] cover indications, fluid handling and periprocedural management but **none describes how to perform the procedure**, so the page states indications and aftercare with no technique section | [[paracentesis]] |

## Topics with no page and no source

Pyogenic / amebic liver abscess · hepatitis A · hepatitis E · small bowel obstruction · chronic intestinal pseudo-obstruction · Zenker's diverticulum · Dieulafoy lesion · Mallory-Weiss · caustic / pill esophagitis · Zollinger-Ellison · gallbladder polyps · choledochal cysts · acalculous cholecystitis · alpha-1 antitrypsin deficiency · ischemic / congestive hepatopathy · CMV colitis · Whipple disease · anorectal abscess / fistula (non-IBD) · pruritus ani · aortoenteric fistula · Cameron lesions · Schatzki ring · GI GVHD · solitary rectal ulcer syndrome (colorectal-surgery / pelvic-floor guideline; currently a section of [[rectal-prolapse]]) · pyoderma gangrenosum (named on [[ostomy-management]] and the IBD pages; the only ingested mention is a single sentence in AGA 2023 Ostomies — needs a dermatology or IBD extraintestinal-manifestation source) · all of `6-anatomy/`.
