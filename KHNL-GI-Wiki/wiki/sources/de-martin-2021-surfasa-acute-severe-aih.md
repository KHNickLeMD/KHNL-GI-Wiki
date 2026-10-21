---
title: "Early Liver Transplantation for Corticosteroid Non-Responders with Acute Severe Autoimmune Hepatitis: The SURFASA Score"
category: source
tags: [autoimmune-hepatitis, acute-liver-failure, liver-transplantation, corticosteroids, surfasa, prognostic-score, hepatology, score-derivation]
created: 2026-10-21
updated: 2026-10-21
sources: []
---

## Bibliographic Info

- **Article:** [De Martin E, Coilly A, Chazouillères O, Roux O, Peron JM, Houssel-Debry P, et al.; FILFOIE consortium. Early liver transplantation for corticosteroid non-responders with acute severe autoimmune hepatitis: the SURFASA score. *J Hepatol* 2021;74(6):1325–1334.](https://doi.org/10.1016/j.jhep.2020.12.033)
- **Authors:** Eleonora De Martin, Audrey Coilly, Olivier Chazouillères, Olivier Roux, Jean-Marie Peron, Pauline Houssel-Debry, Florent Artru, Christine Silvain, Isabelle Ollivier-Hourmand, Christophe Duvoux, … Didier Samuel, Jean-Charles Duclos-Vallée, and the FILFOIE consortium — France
- **Year:** 2021
- **Journal/Publisher:** *Journal of Hepatology* (Elsevier / European Association for the Study of the Liver)
- **DOI:** [10.1016/j.jhep.2020.12.033](https://doi.org/10.1016/j.jhep.2020.12.033)
- **Type:** multicentre retrospective cohort — prognostic score derivation (n=128)

## Summary

The derivation paper for the **SURFASA score** (**SUR**vival and prognostic **FA**ctors in acute **S**evere **A**utoimmune hepatitis), the score [[acg-2023-alf|ACG 2023]] names but does not print. It answers one question: in acute severe autoimmune hepatitis (AS-AIH), **how early can you tell that corticosteroids are failing and the patient needs a transplant?** The authors' answer is **three days**.

A retrospective study across **23 French centres** of the FILFOIE rare-liver-disease network, covering January 2009 to April 2016. **128 patients** met the AS-AIH definition: no previous history of autoimmune hepatitis (AIH), a **"definite" or "probable" simplified International Autoimmune Hepatitis Group (IAIHG) score**, an **international normalised ratio (INR) ≥1.5 and/or total bilirubin >200 µmol/L** (≈11.7 mg/dL) at admission or at corticosteroid initiation, and **compatible liver histology** — biopsy (percutaneous or transjugular) or explant was mandatory, and patients without one were excluded. The authors state plainly that both severity cut-points were **arbitrary**: INR ≥1.5 was borrowed from the US Acute Liver Failure Study Group, and bilirubin >200 µmol/L was chosen to capture an acute severe icteric presentation.

The score is **dynamic, not a snapshot** — that is its whole point. Three variables were independently associated with non-response on multivariate analysis: the **INR at the moment corticosteroids are started (D0-INR)**, and the **relative change in INR and in bilirubin over the first three days of treatment**. Single baseline values, including the Model for End-Stage Liver Disease (MELD) score, performed worse. Combined into a logistic function, SURFASA predicted non-response with an **AUROC of 0.93**, and at a cut-off of **−0.9** separated a group with **92% transplant-free survival** from one with **23%**.

⚠ **Evidence quality and generalisability.** This is **retrospective**, the corticosteroid dose was left to the treating clinician, histology was not reviewed blind, and drug-induced liver injury mimicking AIH could not be formally excluded. The validation cohort of 42 patients was drawn **at random from the same study population**, so it is an internal validation, not an external one. Bilirubin is reported throughout in **µmol/L**, and the score is built on a **European cohort managed under European Association for the Study of the Liver (EASL) practice**.

## Key Findings / Claims

### The SURFASA score

> **SURFASA = −6.80 + 1.92 × (D0-INR) + 1.94 × (∆%3-INR) + 1.64 × (∆%3-bilirubin)**

- **D0** = the day corticosteroids are started (not the day of admission).
- **∆%3** is defined by the paper as **(D3 − D0) / D0** — the *fractional* change over the first three days of treatment, by its own definition, not a percentage-point value. **A reduction is a negative number.**
- Derived in the **83 patients with complete data**; **93%** were correctly classified, **AUROC 0.93** (95% CI 0.88–0.98; *p* <0.001).

**Interpretation bands:**

| SURFASA | Meaning |
|---|---|
| **< −0.9** | Probability of responding to corticosteroids **>75%**. Transplant-free survival **92%** |
| **≥ −0.9** | Non-response predicted. Transplant-free survival **23%** (*p* <0.001) |
| **−0.9 to 1.75** | Explicitly **not discriminant** — the score does not decide this patient |
| **> 1.75** | Probability of death or transplantation **85%–100%** |

- **Cut-off −0.9** — sensitivity **84%**, specificity **88%**, positive predictive value **75%**, negative predictive value **93%**. **71 of 83 (86%)** correctly classified as responders or non-responders; of the 12 misclassified, non-response was missed in 6.
- ⚠ **The paper is internally inconsistent about the upper band.** Its Results section says the 85%–100% death-or-transplant probability applies when the score is **"higher than 1.5"**; the Discussion says **"higher than 1.75"**. Both appear in the same article; **1.75** is the figure used in the band description in both places and is the more conservative reading.
- **Internal validation:** 42 patients selected at random from the corticosteroid-treated population → **AUC 0.95**, with **95%** agreement between predicted and observed response.

### Independent predictors of non-response (multivariate, day 3)

| Variable | Odds ratio | 95% CI | *p* |
|---|---|---|---|
| **D0-INR** | **6.85** | 2.23–21.06 | <0.001 |
| **∆%3-INR** | **6.97** | 1.59–30.46 | <0.01 |
| **∆%3-bilirubin** | **5.14** | 1.09–24.28 | <0.04 |

- A **day-7** model was also predictive — D0-INR (OR 7.60; 1.83–31.61; *p* = 0.005) and ∆%7-INR (OR **43.80**; 5.65–339.78; *p* <0.001) — but was **not retained in the score**, because of missing values and the small population with day-7 data.

### SURFASA beats every single-variable alternative

Compared head-to-head in the 60 patients with all values available:

| Predictor | AUROC | AICC |
|---|---|---|
| **SURFASA** | **0.91** | **46.2** (lowest = best) |
| D0-INR | 0.87 | 53.6 |
| D0-MELD | 0.87 | 55.1 |
| ∆%3-bilirubin | 0.80 | 63.9 |
| ∆%3-MELD | 0.73 | 70.4 |
| ∆%3-INR | 0.67 | 74.3 |
| D0-bilirubin | 0.66 | 77.3 |

- The authors are careful here: the sample size **precludes a reliable conclusion** on the non-significant differences between scores. SURFASA clearly outperforms **D0-bilirubin and ∆%3-bilirubin**; against **D0-INR and D0-MELD** the improvement is **numerical and not statistically significant**.

### Cohort and outcomes

- **128 patients.** Median age **52** [39–62] y; **72% female**. Median INR **1.8** [1.6–2.6], total bilirubin **259** [197–400] µmol/L, creatinine 62 [54–79] µmol/L, **MELD 25** [21–28]. Median immunoglobulin G (IgG) **21** [15–33] g/L. Median follow-up **29** [14–53] months.
- **Autoantibodies are often absent** — antinuclear antibodies (ANA) at titre ≥1:80 in only **61%**, anti-smooth-muscle antibodies (ASMA) in **50%**. Simplified IAIHG: **45% definite, 55% probable**. This is why histology was made mandatory.
- **Hepatic encephalopathy (HE) in 19 (15%)** — 15 (12%) grade I/II, 4 (3%) grade III/IV. Clinical ascites in 17%.
- **Presentation phenotype (Rahim groups):** group 1 icteric only **14 (11%)**; group 2 jaundice **plus** impaired coagulation **95 (74%)**; group 3 acute liver failure with HE **19 (15%)**.
- **Corticosteroids in 115/128 (90%)**, started a median of **6** [2–10] days after admission; **1 mg/kg/d in 78 (73%)**, 0.5 mg/kg/d in 37 (27%); prednisone 58%, prednisolone the rest. **Dose made no difference** to transplant or death.
- **13 (10%) were never treated** — these were the sickest; **12 (92%) were transplanted** within a median of **8** [3–19] days and the one who was not died.
- **Overall: 42 (33%) transplanted, 13 (10%) dead by day 90.** Overall survival **88%**, transplant-free survival **59%**. Among treated patients, **response (transplant-free survival at 90 days) was 66%**.

### Clinical observations that shape the decision

- **An icteric presentation without coagulopathy was the benign group** — **none** of the 14 group-1 patients died or were transplanted, contradicting the prior view that acute icteric presentation marks high risk of treatment failure.
- **Transaminases are useless as a response marker here.** Response was **not** correlated with improvement in transaminase levels, which is how response is defined in *chronic* AIH.
- **Both cirrhosis (METAVIR F4) and the absence of chronic hepatitis (F0–F1)** were significantly correlated with **non-response** to corticosteroids.
- **Time from admission to starting steroids was not associated with non-response** (*p* = 0.49).
- Two patients with **low-grade (I/II) HE did respond**; the authors suggest a trial of corticosteroids in low-grade HE be decided case by case rather than ruled out.
- **Response has no agreed definition in this setting** — the authors adopted transplant-free survival at 90 days and say so.

## Relevance to Wiki

- **[[acute-liver-failure]]** — **closes the declared gap.** The page carried SURFASA's two inputs and its performance from [[acg-2023-alf]] but stated that the formula and cut-off were absent, so the score could not be computed or applied. Both are now on the page, with the interpretation bands.
- **[[autoimmune-hepatitis]]** — the AS-AIH phenotype, the mandatory-histology point, the frequently absent autoantibodies, and the fact that transaminase response does not apply in the acute severe setting.
- **[[liver-transplantation]]** — the three-day decision point for listing in AS-AIH; 1 mg/kg/d vs 0.5 mg/kg/d made no difference to transplant or death in this cohort.

## Contradictions / Open Questions

- **Three days versus seven.** EASL clinical practice guidelines recommend withdrawing corticosteroids and listing for emergency transplantation if there is **no response within seven days**, defined as a lack of improvement in bilirubin and MELD, without further detail. This paper argues the decision can be made reliably at **day 3**, and that waiting the 15 days used in an earlier study is **too long** in the most severe cases. The wiki has no ingested EASL AS-AIH guideline, so the seven-day rule is reported here as this paper describes it.
- **Internal inconsistency on the upper cut-off (1.5 vs 1.75)** — see above; carried on the page rather than silently resolved.
- **Whether to give corticosteroids at all** in AS-AIH is stated by the authors to remain an open question and beyond the scope of the study.
- **Not externally validated.** The validation cohort was drawn at random from the same 128-patient population.
- **Bilirubin thresholds are in µmol/L** and the cohort is European; no US validation is reported.
- **Lower-tier source.** This is primary research (tier 2) and does not override a guideline. Where [[acg-2023-alf]] speaks, it governs; SURFASA supplies the formula and cut-offs that ACG names but does not print.
