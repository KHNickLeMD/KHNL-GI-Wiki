---
title: "Development of a Capsule Endoscopy Scoring Index for Small Bowel Mucosal Inflammatory Change (Lewis Score)"
category: source
tags: [capsule-endoscopy, lewis-score, crohns-disease, small-bowel, nsaid-enteropathy, scoring]
created: 2026-10-28
updated: 2026-10-28
sources: []
---

## Bibliographic Info

- **Article:** [Gralnek IM, Defranchis R, Seidman E, Leighton JA, Legnani P, Lewis BS. Development of a capsule endoscopy scoring index for small bowel mucosal inflammatory change. *Aliment Pharmacol Ther* 2008;27(2):146–154.](https://doi.org/10.1111/j.1365-2036.2007.03556.x)
- **Authors:** Ian M. Gralnek, Roberto de Franchis, Ernest Seidman, Jonathan A. Leighton, Peter Legnani, Blair S. Lewis
- **Year:** 2008 (accepted 19 October 2007)
- **Journal/Publisher:** *Alimentary Pharmacology & Therapeutics* 2008;27(2):146–154 (Blackwell)
- **DOI:** [10.1111/j.1365-2036.2007.03556.x](https://doi.org/10.1111/j.1365-2036.2007.03556.x)
- **Type:** scoring-index derivation study

> **Tier 2 — primary research.** The derivation paper for the **Lewis score**, which [[acg-2025-crohns]] names and describes structurally without printing its point values or bands. ⚠ **Not cardable** — the wiki's deck takes guideline, CPU and consensus sources only.

---

## Summary

Capsule endoscopy (CE) was cleared by the FDA in 2001 and rapidly became the best way to see small-bowel mucosa, but there was **no unified vocabulary for the findings and no severity scale** — "no threshold for disease diagnosis has been agreed upon". This paper develops one.

**How it was built.** A 2004 five-parameter index (erythema, oedema, nodularity, ulcer, stenosis) was cut down after a prospective blinded evaluation found **erythema almost unscoreable** — interobserver **κ 0.02** — while ulcers and stenosis agreed well. A working group then added candidate parameters (villous appearance, denuded mucosa) and **eliminated erythema, oedema, nodularity and denuded mucosa** for lack of clinical significance or inability to be judged objectively. The final index rests on **three variables: villous appearance, ulcer, and stenosis.**

Scores were not assigned by regression against an outcome. Four blinded expert readers graded **44 de-identified CE studies** (22 Crohn's disease, 12 nonsteroidal anti-inflammatory drug [NSAID] enteropathy, 10 small-bowel mucosal breaks of unknown cause) and also gave each study a **global severity judgement** in three categories. A panel then **ranked the findings by perceived severity**, and a MATLAB **gradient-descent optimisation** iteratively adjusted the weights until the numerical score reproduced the readers' rank order and global assessment with zero error. The thresholds were then read off the **crossover points of the three relative frequency graphs**.

**The result is a worst-segment score, not a total burden score.** The small bowel is divided into **three tertiles by transit time**; each is scored independently; the final figure takes the **single most severely affected tertile** and adds the **stenosis score, which is graded once for the whole study**. The authors chose this deliberately — summing tertiles would let three tertiles of mild disease outrank one tertile of severe disease.

---

## Key Findings / Claims

### Table 1 — parameters and weightings

**Scored separately for each tertile** (first, second and third — the weights are identical in all three):

| Parameter | Number | Longitudinal extent | Descriptor |
|---|---|---|---|
| **Villous appearance** | Normal **0** · Oedematous **1** | Short segment **8** · Long segment **12** · Whole tertile **20** | Single **1** · Patchy **14** · Diffuse **17** |
| **Ulcer** | None **0** · Single **3** · Few **5** · Multiple **10** | Short segment **5** · Long segment **10** · Whole tertile **15** | <¼ **9** · ¼–½ **12** · >½ **18** |

**Scored once for the whole study:**

| Parameter | Number | Ulcerated | Traversed |
|---|---|---|---|
| **Stenosis** | None **0** · Single **14** · Multiple **20** | Ulcerated **24** · Non-ulcerated **2** | Traversed **7** · Not traversed **10** |

### The formula

**Total = (worst tertile score) + (stenosis score)**, where for each tertile:

> (Villous number × extent × descriptor) + (Ulcer number × extent × size)

and the stenosis score is **(number × ulcerated × traversed)**.

- **The three tertiles are not added.** Only the **maximum tertile score** is carried forward, because "adding the scores from each tertile in a case of mild disease could provide a total number greater than one tertile plus the stenosis score."
- Validation of that choice: all possible tertile pairings were tested; **worst-tertile-plus-stenosis and sum-of-all-tertiles had similar error rates** against the global perceived assessment (**16%** vs similar) and similar kappas (**0.71 vs 0.68**).

### Score bands

| Score | Interpretation |
|---|---|
| **<135** | **Normal** or clinically insignificant mucosal inflammatory change |
| **135 – 790** | **Mild** change |
| **≥790** | **Moderate to severe** change |

### Definitions — required to score it the same way twice

- **Villous appearance (oedema)** — **villous width equal to or greater than villous height**. It must be **distinct and separated from an ulcer**, not contiguous with a mucosal break.
- **Ulcer** — a mucosal break with a **white or yellow base surrounded by a red or pink collar**.
- **Ulcer size** — based on the **largest ulcer in that tertile**, measured **including its surrounding collar**, as the **percentage of the capsule image occupied** (<¼, ¼–½, >½).
- **Number of lesions** — **single**; **few = 2 to 7**; **multiple = 8 or more**.
- **Longitudinal extent**, as a proportion of the tertile — **short ≤10%**, **long 11–50%**, **whole >50%**.
- **Tertiles** — small-bowel transit time divided into **three equal parts**. If the capsule **never reaches the colon**, transit time is calculated **to the last image obtained**.
- **Stenosis** — scored on **presence or absence of ulceration** and on **whether the capsule traversed it**, graded across the **entire study** rather than by tertile, since a stenosis can obstruct assessment of everything beyond it.

### Performance and reliability

- **Interobserver agreement** (4 expert readers, 114 scored studies): villous oedema **76%**, ulcer **84%**, stenosis **79%**; **κ 0.48 villous, 0.66 ulcer, 0.58 stenosis** — described by the authors as **moderate**.
- Agreement on the **global** severity judgement was better: **84%** for no-disease/mild, **86%** for moderate/severe.
- **Erythema was dropped because it could not be scored** — **κ 0.02** in the initial prospective evaluation, against **83% agreement within 10 points** for ulcers.
- ⚠ **The bands overlap substantially in the derivation data.** Observed ranges: **no disease 0–271** (mean 70), **mild 204–4050** (mean 1003), **moderate/severe 331–13,019** (mean 4373). The authors state there was "a significant overlap between these cut-offs" — the thresholds are crossover points of frequency distributions, not separations.
- **Derivation material:** 44 de-identified studies; 114 global scores analysed; **14 rated normal, 41 mild, 59 moderate-to-severe**. No patient outcomes, no treatment response, no comparison against another modality.

---

## Relevance to Wiki

- **[[capsule-endoscopy]]** — the page named the score's three parameters but stated that its **per-parameter point values and score bands "are not printed in ACG 2025, … so the score cannot be computed or interpreted from this page."** Table 1, the formula, the bands and the definitions now reach it.
- **[[crohns-disease]]** — the score quantifies small-bowel inflammatory burden; most derivation studies were Crohn's.
- **[[ibd-endoscopic-scoring]]** — the concept page for endoscopic activity indices in inflammatory bowel disease.
- [[nsaid-enteropathy|NSAID enteropathy]] — 12 of the 44 derivation studies; the score was explicitly built to cover NSAID injury as well as Crohn's.

---

## Contradictions / Open Questions

- **No contradiction with [[acg-2025-crohns]]**, which names the three parameters exactly as here and makes no claim this paper does not support. ACG cites **Monteiro 2015** for diagnostic accuracy, a different paper not in `raw/`.
- **The score has no outcome validation in this paper.** It was optimised to reproduce **expert readers' perceived severity**, not to predict treatment response, progression, or any clinical endpoint. Its own abstract calls it "a common language to quantify small bowel inflammatory changes" — a vocabulary, not a prognostic instrument.
- **The band overlap is a real interpretive limit**, stated by the authors and carried to the page: a score of 300 appeared in all three global-assessment groups in the derivation data.
- **"Clinically insignificant" is doing unexamined work.** <135 is labelled normal *or* clinically insignificant, but no clinical criterion distinguishes the two — the label comes from reader perception.
- **Scoring convention risk:** because the score is **worst tertile + stenosis**, a reader who sums all three tertiles produces a number that is not a Lewis score but looks like one. No ingested guideline states this, so the page does.
