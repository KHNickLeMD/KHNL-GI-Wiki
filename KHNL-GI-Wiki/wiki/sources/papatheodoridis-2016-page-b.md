---
title: "PAGE-B Predicts the Risk of Developing Hepatocellular Carcinoma in Caucasians with Chronic Hepatitis B on 5-Year Antiviral Therapy"
category: source
tags: [hepatitis-b, hcc, surveillance, score, page-b, entecavir, tenofovir]
created: 2026-10-28
updated: 2026-10-28
sources: []
---

## Bibliographic Info

- **Article:** [Papatheodoridis G, Dalekos G, Sypsa V, Yurdaydin C, Buti M, Goulis J, et al. PAGE-B predicts the risk of developing hepatocellular carcinoma in Caucasians with chronic hepatitis B on 5-year antiviral therapy. *Journal of Hepatology* 2016;64:800–806](https://doi.org/10.1016/j.jhep.2015.11.035)
- **Authors:** Papatheodoridis G, Dalekos G, Sypsa V, Yurdaydin C, Buti M, Goulis J, Calleja JL, Chi H, Manolakopoulos S, Mangia G, Gatselis N, Keskın O, Savvidou S, de la Revilla J, Hansen BE, Vlachogiannakos I, Galanis K, Idilman R, Colombo M, Esteban R, Janssen HLA, Lampertico P
- **Year:** 2016
- **Journal/Publisher:** Journal of Hepatology (EASL / Elsevier)
- **DOI:** [10.1016/j.jhep.2015.11.035](https://doi.org/10.1016/j.jhep.2015.11.035)
- **Type:** multicentre cohort — derivation and external validation of a risk score — **tier 2**

## Summary

The derivation paper for **PAGE-B**, the hepatocellular carcinoma (HCC) risk score the US guidances use to decide whether a **non-cirrhotic** patient with chronic hepatitis B (CHB) needs surveillance at all.

Nine European centres, **1,815 adult Caucasian patients with CHB and no HCC at baseline**, all treated with **entecavir or tenofovir disoproxil fumarate for ≥12 months**. Eight centres formed the **derivation dataset (n = 1,325)**; the ninth and largest formed an **external validation dataset (n = 490)**. Five-year cumulative HCC incidence was **5.7%** and **8.4%** respectively.

The motivation is stated plainly: the existing risk scores (GAG-HCC, CU-HCC, REACH-B) were developed in Asians and their predictability in Caucasian CHB patients is **poor to moderate**.

On multivariable Cox modelling, **age, gender, platelets and cirrhosis** were independently associated with HCC — but **adding cirrhosis barely improved discrimination** (c-index 0.84 vs 0.82), so the published score uses only **Platelets, Age and GEnder**: PAGE-B. That is why it can be applied to patients in whom cirrhosis status is the open question. Discrimination was **c-index 0.82** (0.81 after bootstrap) in derivation and **0.82** in external validation.

## Key Findings / Claims

### The score (Table 3) — range 0–25

| Age (years) | Points | | Gender | Points | | Platelets (/mm³) | Points |
|---|---|---|---|---|---|---|---|
| 16–29 | 0 | | Female | 0 | | ≥200,000 | 0 |
| 30–39 | 2 | | **Male** | **6** | | 100,000–199,999 | 6 |
| 40–49 | 4 | | | | | <100,000 | 9 |
| 50–59 | 6 | | | | | | |
| 60–69 | 8 | | | | | | |
| ≥70 | 10 | | | | | | |

- All three values are taken **at treatment initiation (baseline)**. Using platelets at year 1 instead gave an identical c-index (0.82).
- The integer point system agreed with the underlying multivariable model at **weighted kappa 0.88**.

### Risk bands — and what each one implies

| Band | Score | 5-year cumulative HCC incidence (derivation) | (validation) |
|---|---|---|---|
| **Low** | **≤9** | **0%** | 0% |
| **Intermediate** | **10–17** | **3%** | 4% |
| **High** | **≥18** | **17%** | 16% |

- Band boundaries are the **25th and 75th percentiles of the score distribution** in the derivation dataset (10 and 18 points), not clinically chosen thresholds.
- Distribution in derivation: low **24.7%**, intermediate **47.2%**, high **28.1%** of patients.
- Prevalence of cirrhosis rose across the bands — **3.9% / 18.0% / 40.9%** (p < 0.001) — and median score was 12 (IQR 8–16) without cirrhosis vs 18 (14–20) with it.

### The cut-offs

- **The highest cut-off with 100% sensitivity and 100% negative predictive value is 10.** **Every patient scoring ≤10 was HCC-free at 5 years.** This is the operative justification for the **PAGE-B ≥10** surveillance trigger.
- The cut-off that **maximises sensitivity and specificity together is 17** (sensitivity 76.0%, specificity 77.3%) — a different question (ruling in, not ruling out), and not the one surveillance asks.

### Other findings

- On univariate analysis, HCC was associated with older age, male gender, lower platelets, **no prior use of (pegylated-)interferon-alfa**, and baseline cirrhosis.
- HCC by baseline platelet count: **12.1%** (11/91) with platelets <100,000 vs lower rates at ≥200,000.
- **Virological remission did not change HCC incidence** (3.7% vs 4.7%, p > 0.757) — suppressing the virus does not remove the need to stratify risk.

## Relevance to Wiki

- **[[hcc-surveillance]]** — the point values were already on the page from [[acr-2024-li-rads-us-surveillance-core]] footnote d and are **unchanged and not duplicated**. What this paper adds is **what each band means**: 5-year HCC incidence **0% / 3% / 17%**, and the fact that **≥10 is the 100%-sensitivity, 100%-NPV cut-off** — the evidence behind the trigger the page, [[li-rads]] and [[chronic-hepatitis-b]] all use.
- **[[li-rads]]** — already applies LI-RADS to non-cirrhotic chronic hepatitis B only at **PAGE-B ≥10**; the reason that number and not another is now on [[hcc-surveillance]], linked.
- **[[chronic-hepatitis-b]]** — no change needed; its surveillance criteria come from the guidances and are unaffected.

## Contradictions / Open Questions

- **No contradiction with any ingested guideline.** [[aga-2026-hcc-surveillance]] gives the same three bands (<10 / 10–17 / ≥18) and [[aasld-2023-hcc]] the same ≥10 trigger; this paper is their origin.
- ⚠ **A band-boundary wording mismatch, not a disagreement.** The paper's low band is **≤9** and its 100%-NPV cut-off is **≤10**; the guidances write the low band as **<10**. Both describe the same stratum — but the sentence "100% of patients with risk score ≤10 were HCC free at 5 years" uses the *inclusive* 10, so a patient scoring exactly 10 sits in the intermediate band while still falling inside the paper's 100%-NPV group.
- **Population: Caucasian, treated, and on entecavir or tenofovir.** The score is explicitly a reaction to Asian-derived scores performing poorly in Caucasians; it should not be run in reverse. It was derived **only in patients already on antiviral therapy for ≥12 months** — [[hcc-surveillance]] already states that PAGE-B is "validated in Western populations **on antiviral therapy**", with REACH-B as the untreated-population alternative.
- **The "0%" low-band figure is a 5-year cumulative incidence in this cohort, not a guarantee.** The low band contained 312 patients; zero events over 5 years is consistent with a small non-zero true risk.
- **Cirrhosis is deliberately left out of the score**, despite being an independent predictor — the model with it reached c-index 0.84 against 0.82 without. The score therefore does not replace knowing whether the patient has cirrhosis; it stratifies when they do not.
- ⚠ **Tier 2 (derivation cohort) → no Anki cards**, per *Guideline-sourced cards only*.
