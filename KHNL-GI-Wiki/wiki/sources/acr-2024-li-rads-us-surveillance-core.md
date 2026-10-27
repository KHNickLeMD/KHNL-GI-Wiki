---
title: "ACR LI-RADS Ultrasound Surveillance v2024 Core"
category: source
tags: [li-rads, hcc, surveillance, ultrasound, visualization-score, afp, cirrhosis, hepatitis-b, imaging]
created: 2026-10-27
updated: 2026-10-27
sources: []
---

## Bibliographic Info

- **Article:** [LI-RADS® Ultrasound Surveillance v2024 Core. American College of Radiology, 2024.](https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/LI-RADS/LI-RADS-US-Surveillance)
- **Authors:** American College of Radiology LI-RADS Steering Committee — a consortium of diagnostic radiologists and hepatologists with expertise in hepatobiliary imaging
- **Year:** 2024
- **Journal/Publisher:** American College of Radiology (ACR)
- **DOI:** none — ACR Core documents carry no digital object identifier
- **Type:** guideline (standardized imaging reporting system; the ACR calls it a dynamic document)

## Summary

The companion to [[acr-2018-li-rads-ct-mri-core|CT/MRI LI-RADS v2018]], covering the **surveillance half** of hepatocellular carcinoma (HCC) imaging: the unenhanced ultrasound exam itself. Where the CT/MRI Core categorizes an individual observation, this document makes **two assessments of the whole liver** — a **US category** (US-1 Negative, US-2 Subthreshold, US-3 Positive) summarizing what was seen, and a **US visualization score** (VIS-A, VIS-B, VIS-C) stating how well the exam could see at all. The visualization score is the part the wiki was missing: AASLD's recall algorithm sorts patients by "visualization score A/B/C" and sends readers to the ACR for the definitions.

Management falls out of three inputs read in a fixed order — **US-3 first, then AFP, then VIS-C, then US-2, then US-1**. US-3 (any observation ≥10 mm not definitely benign, parenchymal distortion, or new portal/hepatic vein thrombus) goes to diagnostic multiphase CT, MRI or contrast-enhanced ultrasound (CEUS). A **positive AFP without US-3** goes to CT or MRI — **not CEUS**, which needs a sonographic correlate to characterize. **VIS-C** warrants one repeat ultrasound within 3 months **or** a switch to an alternative modality, and the choice between those two turns on **named risk factors for repeat VIS-C**: MASH- or alcohol-related cirrhosis, Child-Turcotte-Pugh class B or C, body mass index ≥35 kg/m². With a risk factor present, repeating is expected to fail again, so the document says consider switching after the first VIS-C.

v2024 renamed the visualization scores from bare A/B/C to **VIS-A/VIS-B/VIS-C**, renamed the system from "LI-RADS Ultrasound" to "LI-RADS Ultrasound Surveillance", and adopted the MASLD/MASH nomenclature. It also made **US-2 downgradable**: an observation that is no longer seen or remains <10 mm across two follow-up exams is considered benign, the exam may be recategorized **US-1**, and the patient returns to 6-month surveillance.

The document states one **explicit disagreement with AASLD 2023**, in its own dedicated section: **AASLD suggests two short-interval ultrasounds for a VIS-B exam, LI-RADS keeps VIS-B on routine 6-month surveillance**, on evidence that VIS-B and VIS-A have similar sensitivity for HCC diagnosis. Neither recommends alternative imaging modalities for VIS-B.

## Key Findings / Claims

**US category — the three categories, with the definitions that assign them**

| Category | Concept | Definition |
|---|---|---|
| **US-1 Negative** | No ultrasound evidence of HCC | **No observation**, **OR** only definitely benign observation(s) |
| **US-2 Subthreshold** | Observation(s) that may warrant short-interval surveillance ultrasound | Observation(s) **<10 mm** in diameter, **not definitely benign** |
| **US-3 Positive** | Observation(s) that may warrant multiphase contrast-enhanced imaging | Observation(s) **≥10 mm**, not definitely benign, **including area(s) of parenchymal distortion**, **OR** **new thrombus in portal or hepatic vein** |

- **Observation** = a distinctive area compared with background liver. Examples: simple cyst; solid hypoechoic, hyperechoic, isoechoic or mixed-echogenicity nodule; area of parenchymal distortion; thrombus in portal or hepatic vein.
- **Definitely benign** examples: simple cyst, focal hepatic fat sparing around the gallbladder fossa, previously confirmed hemangioma.
- **Parenchymal distortion** (a US-3 trigger) = a parenchymal area **≥10 mm** distinct from background liver with ≥1 of: ill-defined area of heterogeneity · refractive edge shadows · loss of normal hepatic architecture relative to the rest of the liver.

**US visualization score — the three scores**

| Score | Definition | Examples |
|---|---|---|
| **VIS-A** No or minimal limitations | Limitations, if any, are **unlikely to meaningfully affect sensitivity** | Liver homogeneous or mildly heterogeneous · minimal beam attenuation or shadowing · liver visualized in near entirety |
| **VIS-B** Moderate limitations | Limitations **may obscure small (<10 mm) observations** | Parenchymal heterogeneity that may impact detection of small (<10 mm) observations · moderate beam attenuation or shadowing · some portions of liver or diaphragm not visualized |
| **VIS-C** Severe limitations | Limitations **significantly lower sensitivity** for liver observations | Liver severely heterogeneous · severe beam attenuation or shadowing · **majority (>50%) of right or left lobe not visualized** · **majority (>50%) of diaphragm not visualized** |

**AFP positive — the definition LI-RADS uses**

- **AFP ≥20 ng/mL**, **OR** **doubling of AFP (or more) or increasing on two consecutive tests**.
- The document's own worked examples: AFP 35 ng/mL with no priors (positive) · 10 → 15 → 19 ng/mL (positive) · 8 → 18 ng/mL (positive).
- Adopted from and aligned with AASLD guidance; LI-RADS states it will follow any AASLD change. Radiologists *may optionally* report AFP; the **referrer** reviews AFP values and makes the management decision.

**Management — read the five rows in order, the first that applies governs**

| If… | Then |
|---|---|
| **US-3 Positive** (any visualization score) | Diagnostic **multiphase MRI, CT, or CEUS** |
| Otherwise **AFP positive** (but not US-3) | Diagnostic **MRI or CT** — **not CEUS**, which is unlikely to help without an ultrasound correlate |
| Otherwise **VIS-C** | **Repeat US within 3 months × 1**, **OR** consider an alternative surveillance modality |
| Otherwise **US-2 Subthreshold** (VIS-A or VIS-B) | **Repeat US in 3–6 months × 2** |
| Otherwise **US-1 Negative** (VIS-A or VIS-B) | **Repeat US in 6 months** |

- **US-2 de-escalation rule:** repeat up to two times at 3–6-month intervals; if the observation is **no longer visualized or remains <10 mm** over two consecutive exams it is **considered benign** — the exam and those following may be recategorized **US-1** and the patient returns to routine 6-month surveillance.
- **VIS-C, which branch:** check for **risk factors for repeat VIS-C** — **MASH- or alcohol-related cirrhosis · Child-Turcotte-Pugh class B or C cirrhosis · body mass index ≥35 kg/m²**.
  - **No risk factors:** repeat ultrasound within 3 months; the score may improve to VIS-B or VIS-A (patient-, site-, sonographer- or radiologist-related factors). If still VIS-C, consider an alternative strategy.
  - **≥1 risk factor:** consider an alternative surveillance strategy **after the initial VIS-C** — repeat is likely to be VIS-C again, and VIS-C-scored ultrasound has low sensitivity for HCC.
  - **Alternative modalities:** full MRI, abbreviated MRI, or multiphase CT. **There is not yet evidence to recommend one over another**; tailor to the patient, local preference, expertise and resources.
  - ⚠ **Alternative surveillance is NOT recommended for VIS-A or VIS-B exams** — HCC detection sensitivity is high (>75%) for both.
- **Tiebreaking rule (surveillance):** unsure between two categories → **assign the one with greater suspicion** (US-1 vs US-2 → US-2; US-2 vs US-3 → US-3). Rationale: in a surveillance context the goal is to maximize **sensitivity**. ⚠ This is the **opposite** of the diagnostic LI-RADS tiebreak (CEUS, CT/MRI), which assigns the **lower-certainty** category to maximize specificity.
- **Final check (Step 4):** after assigning category and score, ask whether both seem reasonable and appropriate; if not, reevaluate.

**Population in which the algorithm may be applied**

- Adults with **Child-Turcotte-Pugh A or B cirrhosis of any etiology**.
- Subsets of adults with **chronic hepatitis B without cirrhosis**: men >40 y or women >50 y from an endemic country · people from Africa at an earlier age (as early as the third decade, median age 46 y at HCC diagnosis) · family history of HCC · **PAGE-B ≥10** in Western populations on antiviral therapy.
- In other geographic regions may also include other non-cirrhotic chronic hepatitis B, non-cirrhotic chronic hepatitis C, and non-cirrhotic MASH subsets.
- **Not recommended** in Child-Turcotte-Pugh C cirrhosis in patients not eligible for liver transplantation, or where a life-limiting comorbidity gives a life expectancy under 1–2 years not remediable by transplant or other directed therapy.
- **PAGE-B point values, printed in footnote d** — age <30: 0 · 30–39: 2 · 40–49: 4 · 50–59: 6 · 60–69: 8 · ≥70: 10; female 0, **male 6**; platelets ≥200,000: 0 · 100,000–199,999: 6 · <100,000: 9.
- **The surveillance population and the diagnostic population are not the same.** Some patients are surveyed but should not have LI-RADS CT/MRI or CEUS applied even if the surveillance test is positive — cirrhosis from a **vascular disorder (Budd-Chiari, hereditary hemorrhagic telangiectasia, congestive hepatopathy)** or **congenital hepatic fibrosis**. Conversely some patients have CT/MR performed who should not be surveyed at all (cirrhosis with short life expectancy from non-hepatic disease).

**Technique**

- Perform in accordance with the ACR Practice Parameters and Technical Standards for ultrasound of the abdomen and retroperitoneum. **Goal: optimize parenchymal visualization and document the entire liver.**
- **Perform in outpatients when possible** (new emphasis in v2024). If not feasible, perform in emergency or hospitalized patients **after acute conditions have resolved**, and apply the algorithm with caution — acutely ill patients are more likely to have limited visualization, producing false negatives or incorrectly poor visualization scores.
- Factors causing incomplete imaging: large body habitus or inability to cooperate · limited acoustic windows · parenchymal heterogeneity · reduced beam penetration.
- To improve quality: **nil per os 4–6 hours** before the exam · adjust positioning, inspiration level and acoustic window · adequate probe pressure · adjust transducer type, presets, pulse frequency and harmonics to balance resolution against penetration.
- Acquire representative transverse and longitudinal grayscale images through the entire liver; **cine sweeps encouraged**. Document **main portal vein patency with grayscale and color Doppler**; evaluate gallbladder and bile ducts. Compare with prior exams whenever possible; use a standard protocol.
- For each observation record: **size in 3 dimensions** · involved lobe and Couinaud segment if possible · proximity to or involvement of vessels, liver capsule or bile ducts · **arterialized flow within any occluded vein, which would indicate tumor in vein**.
- Optional: spleen size (required for a complete abdominal ultrasound, optional for a focused HCC surveillance exam) and presence/degree of ascites.

**Surveillance versus diagnostic terminology**

- **Surveillance tests** detect HCC in defined populations and should have high sensitivity, wide availability, low cost and patient acceptance — most commonly **unenhanced ultrasound**.
- **Diagnostic tests** characterize a positive surveillance test or an incidental observation and should have high **specificity** — **multiphase contrast-enhanced CT and MRI**, or **CEUS**. **Multiphase imaging is a requirement; single-phase exams are not diagnostic tests for HCC.** CEUS characterizes sonographically visible observations in detail but may not reliably visualize the whole liver, so it is suitable for diagnosis but **not usually for staging**.
- The distinction can blur: where multiphase contrast-enhanced imaging is used *for* surveillance, the same exam is both.

**What's new in v2024**

- "LI-RADS Ultrasound" → **"LI-RADS Ultrasound Surveillance"**; visualization scores A/B/C → **VIS-A/VIS-B/VIS-C** (aligns with AASLD terminology).
- **VIS-C** now warrants repeat ultrasound within 3 months × 1 **or** consideration of an alternative modality depending on risk factors.
- **US-2** may now be recategorized **US-1** when the observation is no longer seen or stays <10 mm on two follow-up exams.
- **Positive AFP** now warrants diagnostic imaging — MRI or CT if the US category is not US-3; CEUS, MRI or CT if it is US-3.
- Emphasis that surveillance ultrasound should be an **outpatient** exam where possible.
- **NAFLD → MASLD, NASH → MASH.**

**Stated gaps in knowledge**

- Whether patients **without cirrhosis or hepatitis B but with multiple other HCC risk factors** should undergo surveillance is unknown.
- Which alternative imaging strategy, combination, or interval is optimal after repeat VIS-C is unknown.

## Relevance to Wiki

- **[[hcc-surveillance]]** — the primary target, and the page [[li-rads]] already points to for the visualization score. Gains the full US category and VIS score definitions, the ordered management algorithm (recreated as a Mermaid flowchart), the AFP-positive definition, the VIS-C risk-factor rule, the US-2 de-escalation rule, the surveillance tiebreak, and the technical factors that produce a poor visualization score.
- **[[hepatocellular-carcinoma]]** — its *Surveillance Recall Algorithm* names visualization scores A/B/C without defining them and attributes them to "the ACR LI-RADS US algorithm". Now a pointer to the definitions, plus the v2024 difference on VIS-B.
- **[[li-rads]]** — one line: the CT/MRI Core's companion surveillance system, with the **opposite tiebreak direction** (sensitivity, not specificity).
- **PAGE-B point values** — [[hcc-surveillance]] stated that the per-variable points "are in the derivation papers, not the guidances". This document prints them, so that sentence is replaced by the table.

## Contradictions / Open Questions

- ⚠ **Explicit disagreement with [[aasld-2023-hcc]] over VIS-B, named by the document itself.** AASLD suggests **two short-interval ultrasound exams** (each at 3–6-month intervals) for a VIS-B exam, returning to 6-month surveillance if stable. **LI-RADS US v2024 recommends continuing routine 6-month surveillance for VIS-B**, citing a study showing similar sensitivity for HCC diagnosis in VIS-B and VIS-A exams. Both are tier-1; **LI-RADS v2024 is the newer publication**, so it carries the page, with the AASLD position stated beside it. Neither recommends alternative imaging modalities for VIS-B.
- **The two tiebreaking rules run in opposite directions** and are easy to mix up — surveillance resolves upward (greater suspicion, maximize sensitivity), diagnosis resolves downward (lower certainty, maximize specificity). Both are deliberate and both are in the LI-RADS documents.
- **LI-RADS defers AFP management to the referrer.** The radiologist may report AFP but the document repeatedly states the referring clinician determines whether AFP is positive and acts on it — so a report that does not mention AFP is not evidence it was normal.
- No contradiction with [[acr-2018-li-rads-ct-mri-core]]; the two systems address different exams and the surveillance document routes US-3 into the diagnostic algorithms.
