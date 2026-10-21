---
title: "Validation of a Risk Estimation of Tumor Recurrence After Transplant (RETREAT) Score for Hepatocellular Carcinoma Recurrence After Liver Transplant"
category: source
tags: [hcc, hepatocellular-carcinoma, liver-transplantation, retreat, recurrence, surveillance, afp, microvascular-invasion, milan-criteria, prognostic-score, score-derivation]
created: 2026-10-21
updated: 2026-10-21
sources: []
---

## Bibliographic Info

- **Article:** [Mehta N, Heimbach J, Harnois DM, Sapisochin G, Dodge JL, Lee D, et al. Validation of a Risk Estimation of Tumor Recurrence After Transplant (RETREAT) score for hepatocellular carcinoma recurrence after liver transplant. *JAMA Oncol* 2017;3(4):493–500.](https://doi.org/10.1001/jamaoncol.2016.5116)
- **Authors:** Neil Mehta, Julie Heimbach, Denise M. Harnois, Gonzalo Sapisochin, Jennifer L. Dodge, David Lee, Justin M. Burns, William Sanchez, Paul D. Greig, David R. Grant, John P. Roberts, Francis Y. Yao
- **Year:** 2017
- **Journal/Publisher:** *JAMA Oncology* (American Medical Association)
- **DOI:** [10.1001/jamaoncol.2016.5116](https://doi.org/10.1001/jamaoncol.2016.5116)
- **Type:** multicentre retrospective cohort — prognostic score derivation and external validation (n=1,061)

## Summary

The derivation and validation paper for the **RETREAT score** (**R**isk **E**stimation of **T**umor **RE**currence **A**fter **T**ransplant), which [[aasld-2023-hcc|AASLD 2023]] names as a tool that "may guide" post-transplant surveillance intervals but reproduces only at its two extremes. This paper supplies the **point values**, so intermediate scores can actually be computed.

The clinical problem it addresses: the **Milan criteria are binary and crude**. Even patients whose explant tumour burden falls within Milan still carry an estimated **10%–15%** five-year recurrence risk, and the usual high-risk markers — beyond-Milan explant stage, vascular invasion, poor differentiation — are each yes/no flags rather than a quantified individual risk. Every patient in this study was **within Milan criteria by pre-transplant imaging**, and the score is built to discriminate *within* that supposedly homogeneous group.

**Development cohort: 721 patients** transplanted 2002–2012 at three academic centres (University of California–San Francisco; Mayo Clinic Rochester; Mayo Clinic Jacksonville). **Validation cohort: 341 patients** at the University of Toronto — a genuinely **external** validation, and a harder one, with significantly more microvascular invasion (23.8% vs 9.4%), more beyond-Milan explants (37.3% vs 22.1%) and higher recurrence (17.9% vs 12.8% at 5 years). Three variables survived multivariable Cox regression: **α-fetoprotein (AFP) at transplant**, **microvascular invasion on explant**, and **the sum of the largest viable tumour diameter in cm plus the number of viable tumours on explant**. C statistic **0.77** in development and **0.82** in validation, beating explant Milan criteria (0.70) with a net reclassification index of **0.40** (*p* = .001) at 1 year.

The practical payoff is a **surveillance schedule stratified by score** — including the finding that roughly a fifth of recipients (**RETREAT 0**) have a 5-year recurrence risk under 3% and, in the authors' proposal, need **no surveillance at all**.

## Key Findings / Claims

### The RETREAT score — point values (Table 3)

Add the points from all three variables; **range 0–8**.

| Variable | Category | Multivariable HR (95% CI) | β | **Points** |
|---|---|---|---|---|
| **AFP at LT (ng/mL)** | 0–20 | 1 [reference] | — | **0** |
| | 21–99 | 1.80 (1.05–3.10), *p* = .03 | 0.59 | **1** |
| | 100–999 | 2.56 (1.42–4.62), *p* = .002 | 0.94 | **2** |
| | ≥1000 | 4.45 (1.98–10.00), *p* <.001 | 1.49 | **3** |
| **Microvascular invasion** | present | 3.80 (2.23–6.47), *p* <.001 | 1.34 | **2** |
| **Largest viable tumour diameter (cm) + number of viable tumours** | 0 | 1 [reference] | — | **0** |
| | 1.1–4.9 | 1.58 (0.73–3.39), *p* = .25 | 0.45 | **1** |
| | 5.0–9.9 | 2.69 (1.24–5.83), *p* = .01 | 0.99 | **2** |
| | ≥10 | 6.75 (2.55–17.88), *p* <.001 | 1.91 | **3** |

- **Only *viable* tumour counts — this is the point of the variable.** The paper's own worked example: an explant with 3 lesions — two viable at **4 cm** and **3 cm**, plus one completely necrotic 5 cm lesion — scores **6** (4 = diameter of the largest *viable* lesion, + 2 = number of *viable* lesions). **The necrotic lesion is not counted.**
- **No viable tumour identified → this variable = 0.** A complete pathologic response to pre-transplant locoregional therapy (LRT) therefore scores zero here, which is why RETREAT credits LRT response where Milan-by-explant does not.
- **RETREAT 0** requires all three: AFP 0–20 ng/mL at transplant, **no** microvascular invasion, **no** viable tumour on explant.
- Tumour sum had the **lowest AIC** of all tumour-burden formulations tested — better model fit than beyond-vs-within Milan or total tumour diameter.

### Predicted recurrence risk

| RETREAT | Share of development cohort | 1-year recurrence | 5-year recurrence |
|---|---|---|---|
| **0** | 21.6% (n = 149) | **1.0%** (95% CI 0.0–2.1) | **2.9%** (95% CI 0.0–5.6) |
| **≥5** | 6.8% (n = 47) | **39.3%** (95% CI 25.5–50.5) | **75.2%** (95% CI 56.7–85.8) |

- Risk **rose with every point scored** (Figure 2); the most common scores were **1** (31.9%) and **2** (22.5%). *The per-point 1- and 5-year risks between these two anchors are given only in Figure 2, which is not reproduced here.*
- **C statistic 0.77** (95% CI 0.71–0.82) in development vs **0.70** (0.63–0.76) for explant Milan criteria. Components alone: tumour sum **0.74**, microvascular invasion **0.68**, AFP **0.65** — the combination beats each part.
- **External validation (Toronto, n = 341): C statistic 0.82** (95% CI 0.77–0.86); net reclassification index vs Milan **0.40** (*p* = .001) at 1 year and **0.31** (*p* <.001) at 5 years.

### The authors' proposed surveillance schedule

⚠ **This is the study authors' proposal, instituted at UCSF — not a society guideline recommendation.** The rationale given is that **most recurrences occurred within the first 2 years** after transplant.

| RETREAT | Proposed surveillance |
|---|---|
| **0** | **None** — 5-year predicted recurrence <3% |
| **1–3** | Every **6 months for 2 years** |
| **4** | Every **6 months for 5 years** |
| **≥5** | Every **3–4 months for 2 years**, then every **6 months through year 5** |

- Modality proposed at each interval: **multiphasic abdominal CT or MRI, chest CT, and AFP**.
- Identifying the no-surveillance group (**~20% of the cohort**) is described as **cost-saving**.
- **RETREAT ≥4** is nominated as the threshold defining candidates for future **adjuvant therapy** trials.

### Cohort detail

- **1,061 patients total**; 77.8% men. Median age **58.2** y (IQR 53.3–63.9) development, **56.4** y (51.7–61.0) validation.
- Development cohort: median AFP at transplant **8.3 ng/mL**; microvascular invasion **9.4%**; **22.1% were beyond Milan on explant** despite being within Milan on imaging — i.e. **pre-transplant imaging understaged more than one in five**.
- Cumulative recurrence in development: **5.7% at 1 year, 12.8% at 5 years**. Validation cohort post-LT survival 91.8% at 1 y, 71.5% at 5 y.
- **Not predictive on univariate analysis:** age, sex, race/ethnicity, MELD score, cause of liver disease, number of lesions at HCC diagnosis, and **receipt of LRT vs no LRT**. Viral hepatitis and non-white race — risk factors for *developing* HCC — were **not** associated with post-transplant recurrence here.

### Against the alternatives

- **UCLA prognostic nomogram** — 7 variables including one that must be calculated, built over 30 years, **no validation set**, and 38% of its patients were outside Milan by imaging or incidental on explant, with 5-year survival of only 60%. The authors question its generalisability in the MELD era and offer RETREAT's **simplicity** as the contrast.
- **Metroticket (Mazzaferro)** also combines largest tumour size and number, but used **overall survival** as the endpoint and a web-based registry; RETREAT uses **recurrence** as the primary endpoint.

## Relevance to Wiki

- **[[hepatocellular-carcinoma]]** — **closes the declared gap.** The page carried the RETREAT components and the two anchor bands from [[aasld-2023-hcc]] but stated that the per-variable point values were missing, so scores 1–4 could not be computed. The full point table is now on the page, with the viable-tumour counting rule and the proposed surveillance intervals behind AASLD GS 37's "may guide intervals".
- **[[liver-transplantation]]** — post-transplant HCC surveillance stratified by recurrence risk; the ~20% who may need none.
- **[[hcc-surveillance]]** — the post-transplant arm of surveillance, distinct from pre-transplant surveillance in cirrhosis.

## Contradictions / Open Questions

- **No contradiction with [[aasld-2023-hcc]].** AASLD names RETREAT and both anchor bands; this paper supplies the intermediate weights AASLD omits. The guideline governs; this source fills in beneath it.
- **The surveillance schedule is not guideline-endorsed.** AASLD GS 37 says the optimal timing of post-transplant surveillance is **uncertain** and that risk scores *may* guide intervals. The table above is the authors' institutional protocol and should be read as such.
- **"No surveillance" for RETREAT 0 is the most consequential and least tested claim** in the paper — it rests on a predicted 5-year risk of 2.9% with a confidence interval reaching 5.6%, and the authors themselves call for a prospective multicentre study to evaluate RETREAT in post-transplant surveillance.
- **Applies only to patients within Milan criteria by pre-transplant imaging** — the score was neither derived nor validated outside that population.
- **Retrospective**, with AFP missing at transplant in 4% of the development cohort and explant tumour grade missing in 2% overall. Response to LRT and progression despite LRT were **not** assessed as risk factors.
- **Lower-tier source.** Primary research (tier 2); it does not override guideline recommendations.
