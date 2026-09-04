---
title: "LI-RADS"
category: concept
tags: [li-rads, hcc, liver, imaging, mri, ct, ceus, surveillance, cirrhosis, hpb]
created: 2026-06-01
updated: 2026-09-04
sources: [aasld-2023-hcc, acg-2024-focal-liver-lesions, nccn-2026-hcc]
---

**Liver Imaging Reporting and Data System (LI-RADS)** is the standardized framework for reporting liver observations on contrast-enhanced CT/MRI in patients **at risk for [[hepatocellular-carcinoma|HCC]]**. Each observation gets a probability category (LR-1 → LR-5, plus LR-M and LR-TIV) that maps directly to a management action — allowing HCC to be diagnosed **noninvasively, without biopsy**, in the at-risk population ([[aasld-2023-hcc]] GS 16a; [[nccn-2026-hcc]]).

## Contents

- [[#Applicability]]
- [[#Major Features]]
  - [[#Assigning a Category — CT/MRI Diagnostic Table]]
  - [[#LR-5 Criteria by Size]]
  - [[#What the Criteria Can and Cannot Do]]
- [[#Categories and Management]]
- [[#Imaging Modality]]
- [[#Pitfalls]]

---

## Applicability

LI-RADS is valid **only** in the at-risk population (Figure 7, [[aasld-2023-hcc]]).

| Apply LI-RADS | Do **not** apply (→ diagnosis requires pathology) |
|---|---|
| **[[cirrhosis\|Cirrhosis]]** of any etiology (except the exclusions at right) | Non-cirrhotic patients **without** chronic HBV |
| [[chronic-hepatitis-b\|Chronic HBV]] at intermediate/high HCC risk (**PAGE-B ≥10**) | Cirrhosis from **congenital hepatic fibrosis** or **vascular/cardiogenic** causes; age **<18 y** ([[nccn-2026-hcc]]) |
| Current or prior history of HCC | Non-cirrhotic HBV with PAGE-B ≤9 (not validated) |

- Evidence for the HBV cut-point: in 280 patients with non-cirrhotic HBV, an LR-5 observation was HCC with **>90%** probability when **PAGE-B ≥10** (intermediate–high risk).
- **GS 17 (Level 1, Strong):** absent cirrhosis or at-risk chronic HBV, HCC diagnosis **must be confirmed by pathology** — noninvasive imaging criteria have insufficient accuracy.
- **GS 16c (Level 3, Weak):** AASLD advises **against** biomarkers — AFP alone or liquid biopsy — to make the diagnosis of HCC.

---

## Major Features

Four major features drive categorization; size is the fifth axis, because imaging accuracy falls off in lesions <2 cm.

| Major feature | Definition as given by the ingested sources |
|---|---|
| **Arterial phase hyperenhancement (APHE)** | **Nonrim** APHE — required for LR-5. Rim APHE points away from HCC (see LR-M) |
| **Nonperipheral washout** | Hypoenhancement on portal venous or delayed phase, not peripheral |
| **Enhancing capsule** | Enhancing rim around the observation on portal venous/delayed phase |
| **Threshold growth** | Interval size increase vs. prior imaging — *the numeric definition (percentage and interval) is not stated in the text of any ingested source; it lives in the ACR LI-RADS lexicon/Figure 6 image. **Gap — do not quote a number from memory.*** |

- APHE + washout are the features **most strongly associated** with HCC, with high specificity and PPV in lesions **≥1 cm** ([[aasld-2023-hcc]]).
- LI-RADS also supplies separate criteria for **major vascular invasion** (→ LR-TIV), because tumor in the vein may not show the parenchymal features ([[nccn-2026-hcc]]).

### Assigning a Category — CT/MRI Diagnostic Table

Read down the two APHE columns, across to the observation size, then down to the count of **additional** major features (enhancing capsule, nonperipheral washout, threshold growth). This is the grid that assigns LR-3, LR-4, and LR-5.

![[hcc-2023-lirads-ct-mri-diagnostic-table-10.png|780x300]]
*Figure 1 — LI-RADS CT/MRI Diagnostic Table: categorization of liver observations in at-risk patients. Reprinted by AASLD with permission from the ACR Committee on LI-RADS. ([[aasld-2023-hcc]], Figure 6)*

| Additional major features | No APHE, <20 mm | No APHE, ≥20 mm | Nonrim APHE, <10 mm | Nonrim APHE, 10–19 mm | Nonrim APHE, ≥20 mm |
|---|---|---|---|---|---|
| **None** | LR-3 | LR-3 | LR-3 | LR-3 | **LR-4** |
| **One** | LR-3 | LR-4 | LR-4 | **LR-4 *or* LR-5** † | **LR-5** |
| **≥ Two** | LR-4 | LR-4 | LR-4 | **LR-5** | **LR-5** |

† **The one split cell — nonrim APHE, 10–19 mm, exactly one additional feature.** The category turns on *which* feature it is: **LR-4 if the feature is an enhancing "capsule"**; **LR-5 if it is nonperipheral "washout" *or* threshold growth**. This is the combination rule that decides biopsy-vs-no-biopsy in the size band where it matters most.

- **APHE must be *nonrim*** to enter the right-hand columns; rim APHE points to LR-M, not to this grid.
- An observation with **no APHE** can never be LR-5 by this table, whatever its size or feature count — the ceiling is LR-4.
- **LR-1, LR-2, LR-M and LR-TIV are not assigned from this table** — see the gap note below.

### LR-5 Criteria by Size

| Observation size | Requirement for LR-5 |
|---|---|
| **≥20 mm** | APHE **+ any 1** additional major feature (washout, enhancing capsule, *or* threshold growth) |
| **10–19 mm** | APHE **+ washout *or* threshold growth**, *or* APHE **+ 2** additional major features |
| **<10 mm** | No LR-5 criteria proposed — too small to characterize definitively |

*Qualifier — GS 13 is a **surveillance-recall** statement, not a CT/MRI one.* [[aasld-2023-hcc]] GS 13 (Level 3, Strong) advises repeat short-interval **ultrasound + AFP in ~3–6 months** for a **<1 cm lesion seen on abdominal ultrasound**; stability across **≥2** follow-up ultrasounds may return the patient to semiannual surveillance (GS 13a, Level 5, Weak). It does not prescribe follow-up for a <10 mm observation already characterized on multiphasic CT/MRI. Recall pathways live on [[hcc-surveillance]].

### What the Criteria Can and Cannot Do

- Built for **specificity**: in the at-risk population, an observation meeting the criteria has close to a **100%** probability of being HCC and may be treated as HCC without confirmatory [[liver-biopsy|biopsy]].
- Sensitivity is only **modest** — **failing** to meet criteria does **not** exclude HCC; those lesions get individualized workup (further imaging or biopsy) via multidisciplinary discussion ([[nccn-2026-hcc]]).
- Before **systemic therapy**, consider biopsy even with a radiographic diagnosis: the criteria were validated mostly in early-stage disease, and in a 418-patient UK audit **~7%** of radiographically diagnosed HCC proved to be [[cholangiocarcinoma|CCA]] or mixed HCC-CCA ([[nccn-2026-hcc]]).

---

## Categories and Management

| Category | HCC probability | Management |
|---|---|---|
| **LR-1** — Definitely benign | — | Continue routine semiannual [[hcc-surveillance\|surveillance]] |
| **LR-2** — Probably benign | — | Continue routine semiannual surveillance |
| **LR-3** — Intermediate | **~30%** | Repeat cross-sectional imaging (CT or MRI) in **3–6 months** (GS 19, Level 2, Weak); return to surveillance if stable over serial exams |
| **LR-4** — Probably HCC | **~75%** | Multidisciplinary discussion; repeat CE-MRI/multiphasic CT **within 3 months** *or* immediate biopsy (GS 20, Level 2, Strong). **Biopsy preferred when an immediate diagnosis would change management** (GS 20a) |
| **LR-5** — Definitely HCC | **95–99%** | **HCC confirmed — no biopsy required.** Multidisciplinary discussion for tailored workup; biopsy optional for confirmation or molecular analysis (GS 21, Level 3, Weak) |
| **LR-M** — Probably/possibly malignant, **not HCC-specific** | **93–100% malignant** on tissue sampling but only **29–44% HCC** | **Biopsy** — risk of mixed tumors and non-HCC malignancy (GS 22, **Level 1, Strong**). Rim APHE suggests non-HCC malignancy, e.g. [[cholangiocarcinoma]] |
| **LR-TIV** — Tumor in vein | PPV for HCC lower than LR-5 | Multidisciplinary discussion; **biopsy recommended** |

*Per [[aasld-2023-hcc]] (Figures 6/8; GS 19–22). LR-5 is the point at which HCC is treated as diagnosed — stage-directed therapy lives on [[hepatocellular-carcinoma]].*

> ⚠ **Residual decision gap — LR-1, LR-2, LR-M and LR-TIV still cannot be assigned from this page.** The [[#Assigning a Category — CT/MRI Diagnostic Table|diagnostic table]] above (AASLD 2023 Figure 6) assigns **LR-3, LR-4 and LR-5**, and that gap is now closed. But Figure 6 does not define **LR-1 (definitely benign)** or **LR-2 (probably benign)**, and it does not give the ancillary/targetoid criteria that make an observation **LR-M** or the vascular criteria for **LR-TIV** — [[nccn-2026-hcc]] only notes that LI-RADS "provides imaging criteria to diagnose major vascular invasion" without printing them. **Needed to close it:** the ACR LI-RADS core document (the ancillary-features and LR-M/LR-TIV tables). Do not fill these criteria from memory.

- Where biopsy is done: sensitivity **70–93%**, falling to **~60%** in tumors **<2 cm**; a negative biopsy does **not** exclude HCC and should be repeated if findings are inconclusive and the lesion is still not LR-5. Complication risk (seeding, bleeding) **~3%**, lower with coaxial needle technique ([[aasld-2023-hcc]]; see [[liver-biopsy]]).

---

## Imaging Modality

- **GS 18 (Level 1, Strong):** noninvasive diagnosis rests on **dynamic contrast-enhanced MRI or multiphasic CT** ([[aasld-2023-hcc]]).
- **MRI:** sensitivity 82%, specificity 92%. **CT:** sensitivity 66%, specificity 91%. Both equally recommended.
- Extracellular and hepatobiliary MRI contrast agents equally recommended.
- **CEUS** is second-line — acceptable specificity for LR-5, but limited by operator dependency, patient/tumor visualization factors, absent full staging data, and insufficient information for treatment planning; use when MRI/CT are unavailable, inconclusive, or contraindicated, particularly when biopsy is not feasible.
- **CEUS is not recommended by NCCN** for whole-liver assessment, surveillance, or staging — only as a problem-solving tool for indeterminate nodules at centers of expertise ([[nccn-2026-hcc]]).
- LI-RADS is the *diagnostic* step downstream of screening ultrasound; the US visualization-score recall algorithm belongs on [[hcc-surveillance]].

---

## Pitfalls

- LI-RADS **does not apply to a non-cirrhotic, non-HBV liver** — an incidental lesion there is worked up as a [[focal-liver-lesions|focal liver lesion]], not categorized LR-x ([[acg-2024-focal-liver-lesions]]).
- **LR-M ≠ benign** — it means "malignant but not HCC-specific," and it mandates biopsy.
- **Dysplastic nodules** typically land at LR-3/LR-4 — the indeterminate zone is where most diagnostic error lives.
- [[hepatic-hemangioma|Hemangioma]], [[focal-nodular-hyperplasia|FNH]], [[hepatocellular-adenoma|hepatocellular adenoma]], and metastases are characterized **outside** LI-RADS.
- **AFP does not categorize an observation** — >40% of HCC have a normal AFP, and AFP rises in intrahepatic [[cholangiocarcinoma|CCA]], [[gastric-adenocarcinoma|gastric cancer]], and germ cell tumors. Non-characteristic imaging → biopsy, **independent of AFP** ([[aasld-2023-hcc]]).

## See Also

[[hepatocellular-carcinoma]], [[hcc-surveillance]], [[focal-liver-lesions]], [[liver-biopsy]], [[cirrhosis]], [[portal-hypertension]], [[chronic-hepatitis-b]], [[cholangiocarcinoma]], [[hepatic-hemangioma]], [[focal-nodular-hyperplasia]], [[hepatocellular-adenoma]], [[liver-transplantation]], [[mri-mrcp]]

---

## Sources

1. [[aasld-2023-hcc|AASLD Practice Guidance: Prevention, Diagnosis, and Treatment of Hepatocellular Carcinoma (2023)]]
2. [[acg-2024-focal-liver-lesions|ACG Clinical Guideline: Focal Liver Lesions (2024)]]
3. [[nccn-2026-hcc|NCCN Clinical Practice Guidelines in Oncology: Hepatocellular Carcinoma (2026)]]
