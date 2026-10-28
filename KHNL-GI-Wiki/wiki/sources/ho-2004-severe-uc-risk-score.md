---
title: "Predicting the Outcome of Severe Ulcerative Colitis: Development of a Novel Risk Score (Ho Index)"
category: source
tags: [ulcerative-colitis, acute-severe-uc, score, colectomy, prognosis, IBD]
created: 2026-10-28
updated: 2026-10-28
sources: []
---

## Bibliographic Info

- **Article:** [Ho GT, Mowat C, Goddard CJR, Fennell JM, Shah NB, Prescott RJ, Satsangi J. Predicting the outcome of severe ulcerative colitis: development of a novel risk score to aid early selection of patients for second-line medical therapy or surgery. *Alimentary Pharmacology & Therapeutics* 2004;19:1079–1087](https://doi.org/10.1111/j.1365-2036.2004.01945.x)
- **Authors:** Ho GT, Mowat C, Goddard CJR, Fennell JM, Shah NB, Prescott RJ, Satsangi J
- **Year:** 2004
- **Journal/Publisher:** Alimentary Pharmacology & Therapeutics (Blackwell)
- **DOI:** [10.1111/j.1365-2036.2004.01945.x](https://doi.org/10.1111/j.1365-2036.2004.01945.x)
- **Type:** retrospective single-centre cohort with derivation of a risk score — **tier 2**

## Summary

The derivation paper for the **Ho index**, a three-variable score computed in the **first 3 days** of intravenous corticosteroid therapy for acute severe ulcerative colitis (ASUC). Retrospective case-note review at a single Edinburgh centre: **1,211 inflammatory bowel disease admissions, January 1995 – March 2002**, narrowed to **245 acute ulcerative colitis (UC) flares**, of which **167 met modified Truelove and Witts criteria**. **Forty per cent failed medical therapy and had a colectomy during that admission.**

Fifty-six variables from the first 3 days were tested. On multiple logistic regression only three survived: **mean stool frequency (MSF) over the first 3 days**, **colonic dilatation within the first 3 days**, and **day-1 serum albumin**. Integer points were assigned by approximating each category's regression coefficient (coefficient for MSF >9 was −4.27 → 4 points; colonic dilatation −3.8 → 4 points).

The explicit aim distinguishes it from its predecessors: the authors note that the existing models — including the Oxford/Travis index — "serve primarily to identify patients for **early colectomy** rather than to select patients for **second-line medical therapy**." The Ho index is built to triage into three bands rather than to call a single failure threshold, so that an intermediate-risk patient can be moved to rescue therapy rather than to theatre.

## Key Findings / Claims

### The Ho index (Table 4)

| Variable | Category | Score |
|---|---|---|
| **Mean stool frequency** (mean of the first 3 days of therapy) | <4 / 24 h | **0** |
| | >4 to ≤6 / 24 h | **1** |
| | >6 to ≤9 / 24 h | **2** |
| | >9 / 24 h | **4** |
| **Colonic dilatation** (present within the first 3 days) | present | **4** |
| | absent | 0 |
| **Hypoalbuminaemia** | albumin <30 g/L (day 1) | **1** |
| | albumin >30 g/L | 0 |

> **Total = MSF points (0, 1, 2 or 4) + colonic dilatation (0 or 4) + hypoalbuminaemia (0 or 1). Minimum 0, maximum 9.**

- **Colonic dilatation is defined radiologically: transverse colon diameter ≥5.5 cm on plain abdominal X-ray.**
- **Mean stool frequency, not a single day's count.** The derived 3-day mean discriminated better than any individual day — 8.05 vs 5.2 stools/day in those who did vs did not come to colectomy.
- **Day-1 albumin**, not a nadir or a trend.

### The bands

| Band | Score | Medical failure rate |
|---|---|---|
| **Low** | 0–1 | **11%** |
| **Intermediate** | 2–3 | **45%** |
| **High** | **≥4** | **85%** |

- **Every patient scoring ≥6 failed medical therapy** (3 patients scoring 6, 6 scoring 7, 1 scoring the maximum 9).
- Performance: **area under the ROC curve 0.876**; at the **≥4** cut-off, **sensitivity 85%, specificity 75%** for non-response to medical therapy.
- Secondary-model AUCs: **0.833** for colectomy at 60 days, **0.810** with ciclosporin treatment counted as primary treatment failure, **0.807** with colonic-dilatation patients excluded.
- Score distribution in the cohort (scores 0 → ≥6): 19%, 23%, 9%, 25%, 13%, 5%, 5%.

### Supporting data

- Multivariate odds ratios: **MSF 0.68** (95% CI 0.61–0.78, P < .001) · **colonic dilatation 0.03** (0.00–0.20, P = .001) · **day-1 albumin 1.10** per g/L (1.03–1.15, P = .002). (Directions are "per unit increase", so a higher albumin and a lower stool count protect.)
- **Colonic dilatation was present in 16 patients (9.6%), 15 of whom came to colectomy** (OR 0.04, 95% CI 0.00–0.29, P < .001) — the single most powerful sign in the cohort, and the reason it carries 4 points on its own.
- Median admission **26 days for non-responders vs 11 days for responders**; median time to colectomy 9 days after admission (7 days when colonic dilatation was present).
- **Total parenteral nutrition (TPN) was associated with failure but was excluded from the model** as a marker of severity rather than a predictor — patients given TPN had higher MSF (7.05 vs 6.34), lower albumin (29.1 vs 32.7 g/L) and higher C-reactive protein, and TPN began at a median of 6 days, after the 3-day scoring window.
- Two deaths in the cohort, both post-colectomy (pneumonia; arterial thrombosis of the lower limb).

## Relevance to Wiki

- **[[ulcerative-colitis]]** — the ASUC section carries the **Oxford (Travis) index** at day 3 but had no second instrument. The Ho index is now beside it, with the point of difference stated: Travis calls a **binary** steroid-failure threshold, Ho triages into **three bands** and was built specifically to select patients for **rescue medical therapy** rather than straight to colectomy.
- **Net-new to the page:** that **mean stool frequency over 3 days** beats any single day's count, and that **colonic dilatation ≥5.5 cm alone puts a patient in the high-risk band** (4 of the 4 points needed) — the page already cites the >5.5 cm transverse-colon measurement from [[acg-2025-uc]] as a marker of worse outcome, without a number attached to it.
- Cross-links: [[toxic-megacolon]] (the dilatation threshold), [[albumin]] (hypoalbuminaemia as a severity marker), [[calcineurin-inhibitors]] (ciclosporin, the rescue therapy the score is meant to select for).

## Contradictions / Open Questions

- **No conflict with [[acg-2025-uc]] or [[aga-2026-inpatient-ibd]].** Neither guideline prints this score; neither contradicts it. The Ho index is an adjunct, and the authors say so explicitly — "to be used as an adjunct to clinical" judgement, not determinism.
- ⚠ **The albumin cut-off is printed two ways inside the paper.** The Final Model text reads **"hypoalbuminaemia (≤30 g/L), score of 1 (or score 0, albumin >30 g/L)"**, while **Table 4 reads "<30 g/L"**. The wiki reproduces Table 4, since Table 4 is the scoring instrument; at exactly 30 g/L the two readings differ by one point.
- ⚠ **The colonic-dilatation threshold is also printed two ways** — Methods give **≥5.5 cm**, the Table 1 footnote **>5.5 cm**.
- ⚠ **The cohort's failure count is printed two ways** — the abstract says **67 (40%)**, the Results **68 (40%)**.
- **Derivation only, retrospective, single centre, and pre-biologic.** Patients were treated 1995–2002; rescue was ciclosporin, and infliximab does not appear. The score was **not externally validated in this paper**, and was derived and tested in the same 167 patients.
- **Colonic dilatation is treated as a scored variable, not an operation.** The authors note that at their institution dilatation "is not an absolute indication" for surgery, which is why it can appear in a prediction model at all; centres that operate on dilatation immediately cannot use the score the same way. Model C (dilatation excluded) still achieved AUC 0.807.
- ⚠ **Tier 2 (retrospective derivation cohort) → no Anki cards**, per *Guideline-sourced cards only*.
