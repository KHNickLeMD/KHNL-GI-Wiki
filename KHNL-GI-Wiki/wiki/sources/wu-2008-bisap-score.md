---
title: "The Early Prediction of Mortality in Acute Pancreatitis: a Large Population-Based Study (BISAP)"
category: source
tags: [acute-pancreatitis, bisap, severity, prognosis, score-derivation, mortality]
created: 2026-10-27
updated: 2026-10-27
sources: []
---

## Bibliographic Info

- **Article:** [Wu BU, Johannes RS, Sun X, Tabak Y, Conwell DL, Banks PA. The early prediction of mortality in acute pancreatitis: a large population-based study. *Gut* 2008;57(12):1698–1703.](https://doi.org/10.1136/gut.2008.152702)
- **Authors:** Bechien U Wu, R S Johannes, X Sun, Y Tabak, Darwin L Conwell, Peter A Banks
- **Year:** 2008
- **Journal/Publisher:** *Gut* (BMJ)
- **DOI:** [10.1136/gut.2008.152702](https://doi.org/10.1136/gut.2008.152702)
- **Type:** other (primary paper — derivation and validation of a clinical prediction score)

## Summary

The derivation of **BISAP** — the Bedside Index for Severity in Acute Pancreatitis — and the only source in `raw/` that prints its five components. [[acg-2024-acute-pancreatitis]] names BISAP as a prediction tool without listing what is in it.

The score was built specifically to be usable **at the bedside within the first 24 hours**, which is what distinguishes it from what came before: Ranson and the modified Glasgow score need **48 hours** to complete, missing the early therapeutic window, and APACHE II was designed as an intensive-care instrument requiring many parameters not all relevant to pancreatitis. Classification and Regression Tree analysis on 17,922 cases from 212 hospitals identified five variables, each worth **one point**, giving a **0–5** scale; it was then validated on a separate 18,256 cases from 177 hospitals.

The performance claim is modest and should be read as such: BISAP's area under the receiver operating characteristic curve for in-hospital mortality was **0.82 (95% CI 0.79–0.84)** in validation, versus **0.83 (0.80–0.85)** for APACHE II — **no significant difference (p = 0.2)**. The value is not better discrimination but **earlier and simpler** discrimination, from data already recorded on admission.

Mortality rises steeply across the range — **0.1%–0.5% at a score of 0–1, 1.9% at 2, 5.3% at 3, 12.7% at 4, 22.5% at 5** in validation — and about **60% of patients present with a score <2**, where mortality is under 1%. The authors' framing is that **≥3 identifies the subgroup at substantially increased risk**. The score also retained discrimination (area under the curve 0.79) in the subgroup **without early organ failure**, which is the clinically interesting use: identifying risk *before* organ failure has declared itself.

## Key Findings / Claims

**The five components — 1 point each, measured within the first 24 h of hospitalisation**

| Letter | Component | Threshold |
|---|---|---|
| **B** | **B**lood urea nitrogen | **>25 mg/dL** |
| **I** | **I**mpaired mental status | Any record of disorientation, lethargy, somnolence, coma or stupor |
| **S** | **S**IRS | **≥2** of the 4 criteria below |
| **A** | **A**ge | **>60 years** |
| **P** | **P**leural effusion | On chest radiography **or** computed tomography |

- **Total 0–5.** BUN was the most efficient first splitting variable in the tree; age and SIRS discriminated high- from low-risk cases; mental status and pleural effusion separated the intermediate group.
- **SIRS as used here** — ≥2 of: pulse >90 beats/min · respirations >20/min or PaCO₂ <32 mm Hg · temperature >38°C or <36°C · white blood cell count >12,000 or <4000 cells/mm³ **or >10% immature neutrophils (bands)**.

**Observed in-hospital mortality by score (Table 2)**

| BISAP score | Derivation (n = 17,922) | Validation (n = 18,256) |
|---|---|---|
| **0** | 0.2% | 0.1% |
| **1** | 0.7% | 0.5% |
| **2** | 2.1% | 1.9% |
| **3** | 8.3% | 5.3% |
| **4** | 19.3% | 12.7% |
| **5** | 26.7% | 22.5% |

- **<2 points:** below-average mortality (**<1%**), and this is where **~60% of patients present**.
- **2 points:** increased mortality (~2%).
- **≥3 points:** mortality rises sharply (**5%–20%**) — the threshold the paper identifies as marking "substantially increased risk of dying".
- Overall cohort mortality was **1.9%** (derivation) and **1.28%** (validation).

**Performance**

- Validation area under the curve **0.82 (95% CI 0.79–0.84)**; derivation 0.83.
- **APACHE II 0.83 (95% CI 0.80–0.85)** in the same population — difference **not significant, p = 0.2**.
- **Subgroup without early organ failure** (Atlanta criteria within the first 24 h — creatinine >2.0 mg/dL, systolic blood pressure <90 mm Hg, or PaO₂ <60 mm Hg): BISAP area under the curve **0.79** vs APACHE II 0.78 (p = 0.5). **58% of patients who ultimately died came from this subgroup**, despite its low overall mortality (0.8%).

**Why the score exists**

- Ranson and modified Glasgow **require 48 h**, missing the early therapeutic window, and include data not routinely collected at hospitalisation.
- APACHE II was built as an intensive-care instrument; many of its parameters are not relevant to acute pancreatitis.
- Serum calcium, lactate dehydrogenase, PaO₂ and aspartate aminotransferase were **excluded from model development** for failing a pre-specified **85% data-collection threshold** — they are not reliably available in the first 24 h.

## Relevance to Wiki

- **[[acute-pancreatitis]]** — closes the page's own declared gap: it stated that "ACG 2024 names BISAP but does not enumerate its components or point values (Wu 2008)". The five components, the thresholds and the mortality bands are now on the page.
- Pairs with **[[banks-2013-revised-atlanta-classification]]**, ingested in the same pass — Atlanta defines severity by organ failure *after the fact*, BISAP estimates risk *within 24 h*. The two answer different questions and the page keeps them separate.

## Contradictions / Open Questions

- ⚠ **No contradiction, but a limit worth keeping in view.** [[acg-2024-acute-pancreatitis]] Key concept 7 states that scoring systems and imaging alone are **not accurate** at determining who will develop moderately severe or severe disease; this paper's own numbers are consistent with that — BISAP is no better than APACHE II, and the guideline's caution governs the page. BISAP estimates **in-hospital mortality**, not Atlanta severity grade, and the two are not interchangeable.
- [[banks-2013-revised-atlanta-classification]] lists **BISAP ≥3** among markers that "should be recorded and evaluated prospectively" but which "do not in themselves define severity".
- **Derived from administrative data** (ICD-9 principal diagnosis in a hospital research database), not from prospectively adjudicated cases; the outcome is in-hospital mortality only, with no follow-up beyond discharge.
- ⚠ **Primary research, not a guideline → no Anki cards** under *Guideline-sourced cards only*.
