---
title: "Artificial Intelligence in Endoscopy"
category: concept
tags: [artificial-intelligence, cade, cadx, colonoscopy, adenoma-detection, optical-diagnosis, resect-and-discard, quality]
created: 2026-07-30
updated: 2026-08-28
sources: [aga-2023-ai-colon-polyp, aga-2025-cade-colonoscopy]
---

Framework for AI computer-vision tools in GI endoscopy, focused on [[colonoscopy]]. Three classes: **CADe** (detection), **CADx** (optical diagnosis), **computer-aided quality assessment** (technique/exposure). Bottom line: CADe raises detection metrics (**ADR +8 absolute points**, adenoma miss rate −19 points) but its effect on [[colorectal-cancer|CRC]] incidence and mortality is very uncertain and it drives **635 more surveillance colonoscopies per 10,000 people over 10 y** — so [[aga-2025-cade-colonoscopy|AGA 2025]] makes **no recommendation** for or against routine CADe.

## Contents
- [[#Three Classes of AI Tools]]
- [[#CADe — Computer-Aided Detection]]
  - [[#Why Detection Is the Target]]
  - [[#AGA 2025 Recommendation]]
  - [[#Effect Sizes — AGA 2025 Summary of Findings]]
  - [[#Trial vs Real-World Performance]]
  - [[#Downstream Burden and Cost]]
- [[#CADx — Computer-Aided Diagnosis]]
  - [[#PIVI Thresholds — the Decision Criteria]]
  - [[#CADx Performance Data]]
- [[#Computer-Aided Quality Assessment]]
- [[#Attitudes and Adoption Barriers]]
- [[#Knowledge Gaps]]

## Three Classes of AI Tools
- **CADe (detection):** flags potential polyps in real time alongside the endoscopist.
- **CADx (diagnosis):** predicts polyp histology optically (adenoma vs non-adenoma) to support "resect-and-discard" / "diagnose-and-leave."
- **Computer-aided quality assessment:** measures/improves withdrawal technique and mucosal exposure (fold examination, withdrawal speed, coverage).
- Contemporary tools = deep-learning **convolutional neural networks** on live video (earlier detectors were still-image, hand-engineered features). Trained on large expert-labeled image/video sets; generalize well to unseen video. [[aga-2023-ai-colon-polyp]], [[aga-2025-cade-colonoscopy]]
- Several CADe platforms have FDA marketing approval as medical devices.
- ⚠ Figure gap: [[aga-2023-ai-colon-polyp]] Figure 1 (CADe alert box on a sessile and a flat polyp) and Figure 2 (CADx histology-prediction display) not embedded — PyMuPDF unavailable for figure capture in this environment.

## CADe — Computer-Aided Detection

### Why Detection Is the Target
- **ADR** = % of colonoscopies in which ≥1 adenoma is resected; the leading quality indicator, inversely correlated with **post-colonoscopy CRC (PCCRC)** — a CRC diagnosed after a colonoscopy in which no cancer was found.
- Operator-dependent: ADR ranges **7%–53%** across colonoscopists; each **1% rise in ADR → ~3% lower** future [[colorectal-cancer|CRC]] risk. [[aga-2023-ai-colon-polyp]]
- ~**25% of adenomas are missed** at colonoscopy; PCCRC accounts for ~**8% of all diagnosed CRC**.
- ⚠ Threshold that bounds the benefit: the ADR–cancer-incidence association is **nonlinear with a likely plateau above an ADR of 45%** — above that, further detection gain buys little. [[aga-2025-cade-colonoscopy]]
- >15 million colonoscopies/yr in the US, with documented variability across quality indicators.
- Two mechanisms of missed lesions: failure of **detection** (subtle/flat lesions) and inadequate/incomplete **mucosal inspection** on withdrawal. CADe addresses only the first.

### AGA 2025 Recommendation

> **"In adults undergoing colonoscopy, the AGA makes no recommendation on the use of CADe-assisted colonoscopy. (No recommendation, very low certainty of evidence)"** — [[aga-2025-cade-colonoscopy]]

**Remarks (as given):**
- Reflects **very low certainty on the critical outcomes** (CRC incidence, CRC mortality, PCCRC); the panel acknowledged the ADR gain as an important **surrogate** outcome only.
- CADe is an **iterative** AI application likely to improve with further training/validation; **an updated recommendation is planned**.
- Evidence gaps to address: diverse patient populations and settings (community vs academic), impact on polyps of greater significance (advanced adenomas) and harder-to-detect polyps (sessile serrated lesions), resource implications, access, patient values/preferences, cost-effectiveness, long-term patient-important outcomes.

**GRADE label meanings used here:** "recommends" = strong; "suggests" = conditional; **no recommendation** = the tradeoff is closely balanced *and* certainty around the critical outcomes is inadequate — further research needed.

**What changed, and why it matters:** the panel **initially drafted a conditional recommendation *suggesting* CADe**, then reconvened after public comment and issued **NO RECOMMENDATION by vote**, without consensus. Rationale: the ADR gain is driven by **diminutive-to-small polyps with low progression potential**, which shortens [[colonoscopy-surveillance|surveillance]] intervals and raises lifetime colonoscopy count; the panel weighted long-term CRC incidence/mortality more heavily than the surrogate.
- ⚠ CADe is an **endoscopist-level** intervention — the panel judged the decision **may not be conducive to shared decision-making** with an individual patient.

### Effect Sizes — AGA 2025 Summary of Findings

Population: adults undergoing [[colonoscopy]] for screening, surveillance, or positive FIT. Comparator: standard colonoscopy.

| Outcome (timeframe) | Routine | CADe | Absolute difference (95% CI) | RR (95% CI) | Certainty |
|---|---|---|---|---|---|
| CRC incidence / 10 y | 82 per 10,000 | 71 per 10,000 | 11 fewer per 10,000 (NNT 909); 35 fewer to 17 more | 0.87 (0.57–1.21) | Very low |
| CRC-related deaths / 10 y | 15 per 10,000 | 13 per 10,000 | 2 fewer per 10,000 (NNT 5000); 10 fewer to 18 more | 0.84 (0.32–2.19) | Low |
| PCCRC incidence / 10 y | 34 per 10,000 | 23 per 10,000 | 11 fewer per 10,000 (NNT 909); 22 fewer to 12 more | 0.67 (0.34–1.34) | Very low |
| ADR | 37.4 per 100 | 44.8 per 100 | 8 more per 100 (6 to 11 more) | 1.22 (1.16–1.29) | Low |
| Adenoma miss rate | 35.3 per 100 | 16.1 per 100 | 19 fewer per 100 (22 to 14 fewer) | 0.47 (0.36–0.60) | Moderate |
| Advanced colorectal neoplasia detection rate | 12 per 100 | 14 per 100 | 2 more per 100 (0 to 4 more) | 1.16 (1.02–1.32) | Low |
| Sessile serrated lesion detection rate | 6.0 per 100 | 7.0 per 100 | 1 more per 100 (0 to 3 more) | 1.21 (1.04–1.42) | Low |
| Non-neoplastic polyp detection | 29 per 100 | 32 per 100 | 3 more per 100 (1 to 6 more) | 1.11 (1.04–1.19) | Moderate |
| Surveillance colonoscopies / 10 y | 2645 per 10,000 | 3280 per 10,000 | 635 more per 10,000 (582 to 688 more) | 1.24 (1.22–1.26) | Low |
| Perforation / 10 y | 10 per 10,000 | 10 per 10,000 | 0 fewer per 10,000 (0 to 0) | 1.00 (1.00–1.00) | Low |
| Bleeding / 10 y | 19 per 10,000 | 20 per 10,000 | 1 more per 10,000 (9 fewer to 11 more) | 1.06 (0.53–2.12) | Low |
| Withdrawal time | 8.60 min | 9.17 min | +0.57 min (0.31 to 0.83) | — (mean difference) | Moderate |

*Table 1 — AGA 2025 summary of findings. ([[aga-2025-cade-colonoscopy]])*

**Reading the table:**
- Detection-rate rows come from the **pooled RCTs**; CRC/mortality/PCCRC/surveillance/perforation/bleeding rows come from a **microsimulation Markov model** (100,000 individuals aged 60–69, 10-y follow-up, assumed 100% participation) — hence the low-to-very-low certainty on the outcomes that matter most.
- Advanced colorectal neoplasia = advanced adenoma and/or advanced serrated lesion. Perforation and bleeding = events involving transfusion or hospitalization within 30 days.
- Certainty was rated down mainly for **lack of blinding of outcome assessors** (detection bias), **imprecision** (CIs crossing harm), and for ADR **publication bias** (asymmetric funnel plot, significant Egger's test).
- Underlying SR: **44 RCTs, >30,000 participants**; polyp detection rate 56.1% vs 47.9% (RR 1.22, 1.15–1.28) in 41 RCTs / 32,108 participants.

### Trial vs Real-World Performance
- **Pooled nonrandomized studies show no benefit** — 8 studies, 9782 participants: ADR 44% vs 38%, **RR 1.11 (0.97–1.28)**, i.e. not significant. The AGA 2025 panel explicitly noted CADe effectiveness **may be lower in practice than in RCTs**. [[aga-2025-cade-colonoscopy]]
- Individual negative studies: Ladabaum pragmatic single-center (no gain in ADR/APC vs historic and concurrent controls); Levy large retrospective observational — **ADR 30.3% with CADe vs 35.2% pre-CADe, P=.001** (lower), with lower PDR and APC; a UK RCT with no ADR difference. [[aga-2023-ai-colon-polyp]]
- Proposed explanations: **ceiling effect** in high performers; unconscious **degradation of mucosal exposure** from a false sense of security; **unblinded endoscopists** → performance bias favoring CADe in RCTs.
- Gains are not purely non-neoplastic — Shaukat US multicenter RCT (5 academic + community sites, 22 board-certified gastroenterologists; 677 standard vs 682 CADe): **APC 0.83 → 1.05** with **no decrease in true-histology rate** (proportion of resections with clinically significant histology). [[aga-2023-ai-colon-polyp]]
- ⚠ **Superseded number.** The 2023 CPU cited the Huang meta-analysis of **10 RCTs / 6629 patients — ADR RR 1.43, PDR RR 1.44 (both P<.001)**. The 2025 guideline's pooled **44-RCT estimate of RR 1.22 (1.16–1.29)** is the page's operative figure (newer, larger, guideline-tier); the 1.43 figure overstates the effect.

### Downstream Burden and Cost
- **Dominant undesirable effect:** 635 more surveillance colonoscopies per 10,000 people over 10 y (see table) — driven by detection of diminutive/small adenomas of low malignant potential, plus a probable rise in resection of non-neoplastic polyps (which carries unnecessary cost). This is **overdiagnosis**: detection of polyps that would never have progressed to clinical CRC in a lifetime.
- Mori modeling: use of AI raised the proportion requiring intensive [[colonoscopy-surveillance|surveillance]] by ~**35% (US)** and ~**20% (Europe)** — absolute increases 2.9% and 1.3%. [[aga-2023-ai-colon-polyp]]
- Areia Markov microsimulation (favorable direction): CRC-incidence reduction vs no screening **44.2% without AI → 48.9% with AI** (4.8% incremental); discounted cost per screened person **$3400 → $3343** (−$57); at US population scale ~**7194 CRC cases and 2089 deaths prevented/yr** and ~**$290 million/yr saved** — all contingent on real-world ADR gains materializing. [[aga-2023-ai-colon-polyp]]
- ⚠ Contradiction to hold in mind: the 2023 cost-effectiveness projection assumes the trial-level ADR gain persists in practice; the 2025 pooled nonrandomized data suggest it may not. AGA 2025 **did not incorporate cost into its model** and did not weigh resource use in the recommendation.
- **Equity/feasibility:** CADe is **not reimbursed separately**, is purchased by flat fee or subscription, and is available only to systems with the resources/infrastructure — a recommendation *for* CADe could worsen access inequity globally. Environmental impact and data-set representativeness (racial/ethnic bias in model derivation) also flagged.

## CADx — Computer-Aided Diagnosis

- **Scope note:** AGA 2025 deliberately covers **CADe only**; a **future AGA guideline will address CADx**. Everything below is from the 2023 CPU commentary — expert commentary, no GRADE ratings.
- **Goal:** real-time optical histology so diminutive polyps can be handled without pathology (or without resection). Adenomas <5 mm anywhere in the colon plus hyperplastic polyps <5 mm in the rectosigmoid are **>80% of all polyps** found at screening/surveillance; potential savings **$33–150 million/yr**.
- CADx currently often relies on virtual chromoendoscopy (e.g. narrow-band imaging); the promise is doing it with **white light alone**, and pairing white-light CADx with CADe.

### PIVI Thresholds — the Decision Criteria

ASGE "Preservation and Incorporation of Valuable Endoscopic Innovations" (2011) set the performance bars that must be met before either strategy may be adopted:

| Strategy | Target lesions | Required performance |
|---|---|---|
| **Diagnose-and-leave** (leave in situ) | Suspected hyperplastic polyps **<5 mm in the rectosigmoid** | **≥90% negative predictive value** for adenomatous histology |
| **Resect-and-discard** (no pathology) | Colorectal polyps **<5 mm** | **>90% agreement** with pathology-based assignment of post-[[polypectomy]] surveillance intervals |

### CADx Performance Data
- **Hassan et al** — simultaneous CADe + CADx, high-definition white-light **unmagnified** endoscopy, CNN classifier run on multiple images per lesion. 544 polyps in 162 patients; 295 (54.2%) were histologically verified rectosigmoid lesions <5 mm.
  - CADx diagnosis feasible in **98.6%** of polyps.
  - **NPV 97.6%** for rectosigmoid lesions <5 mm — **exceeds the ≥90% PIVI bar in white light**.
  - 242/295 (82%) amenable to leave-in-situ; 212/544 (39%) amenable to resect-and-discard, with **95.9% agreement** with histology-based surveillance intervals per US guidelines.
  - Projected effect: **44.4% fewer polypectomies**; adding resect-and-discard would cut pathology to **17%** of detected lesions.
- **Barua et al** — CADx requiring a ×520 magnifying colonoscope: **did not increase diagnostic sensitivity**, but raised the rate of high-confidence endoscopist diagnosis from **74.2% → 92.6%**. Confidence, not accuracy, may be the rate-limiting step for adoption.

## Computer-Aided Quality Assessment
- Missed adenomas arise from **cognitive errors** (lesion visualized but not recognized) and **exposure errors** (blind spots, incomplete mucosal exposure — withdrawal speed, endoscopist skill, bowel prep). Current CADe addresses only cognitive errors.
- Four complementary skills counter exposure errors: **fold examination, mucosal cleaning, luminal distension, adequate viewing time**.
- **Fold evaluation quality (FEQ)** AI system (Liu et al; 103 consecutive colonoscopies, 11 colonoscopists, 3 expert graders): AI FEQ scores correlated significantly with expert scores, historical ADR, and withdrawal time; AI assistance **significantly improved FEQ for colonoscopists with historically low ADR (<25%)**.
- Other tools: withdrawal-speed "speedometers," graphical colon-surface **coverage maps**, mucosal-exposure adequacy scores. [[aga-2023-ai-colon-polyp]]

## Attitudes and Adoption Barriers

**Provider attitudes** — SR of 13 studies (12 on provider attitudes), [[aga-2025-cade-colonoscopy]]:

| Provider view | Proportion (95% CI) |
|---|---|
| Find AI in colonoscopy interesting | 85% (80–90) |
| Believe it would improve adenoma detection | 74% (68–80) |
| Concerned about increased cost | 43% (16–71) |
| Concerned about accountability for incorrect diagnosis | 40% (16–67) |
| Concerned about medicolegal issues | 23% (12–37) |

**Patient values and preferences** — no study specifically addressed AI-assisted colonoscopy; the panel extrapolated:
- **>65%** would choose an endoscopist who uses CADe over one who does not; **58%** rate AI use very or somewhat important in colonoscopy.
- **>60%** worried about reduced personal contact with clinicians, though a similar proportion thought AI could improve care quality and shorten diagnostic waiting times (study not colonoscopy-specific).
- Across 23 CRC-[[colorectal-cancer-screening|screening]] preference studies, patients placed high value on **mortality reduction** and care quality, but were concerned about **health-related anxiety, overdiagnosis, and more frequent surveillance colonoscopies**.

**Structural barriers** [[aga-2023-ai-colon-polyp]]:
- **No separate reimbursement** for CADe or other polyp-detection devices; the whole "add-on detection device" category (ultrawide-angle systems, distal caps/hoods) has historically failed to reach wide use.
- Not yet **integrated into scopes or video processors** — unlike HD video, digital chromoendoscopy, and magnification, which shipped inside the endoscope package.
- **False-positive distraction** and audio alerts; concern about prolonged procedure time. When activation was left to endoscopist discretion across a full academic faculty (Nehme), CADe was turned on in only **52.1%** of cases.
- Medical-legal exposure from leaving polyps in situ or discarding them after CADx; **pathology fees are a revenue stream** for many practices.
- Proposed mitigation: formal training in how to use CADe (recognizing and dismissing false positives) — there is likely a physician learning curve, not "plug and play."

## Knowledge Gaps
Named by [[aga-2025-cade-colonoscopy]]:
- Long-term patient-important outcomes of population-scale AI adoption.
- Whether **CADe + CADx together** offsets the extra non-neoplastic polyp resection CADe causes — trials needed.
- Future post-polypectomy **surveillance-interval** guidelines must be rewritten for the changed detection landscape.
- Ethics/law: patient privacy, data security, ownership of health information used by AI platforms; **no legal framework** for AI-related health care errors (shared liability between device maker and physician has been proposed).
- Transparency about algorithms and training/validation image sets, ideally **before** commercial release.
- Device-to-device and version-to-version differences are unclear and potentially outcome-relevant.
- Effect of CADe in **training** settings — possible harm to trainees' own polyp-recognition skill.
- Living guideline: update expected in ~**1–2 years**.

## See Also

[[colonoscopy]], [[polypectomy]], [[colorectal-cancer-screening]], [[colonoscopy-surveillance]], [[colorectal-cancer]], [[endoscopic-oncology]]

---

## Sources

1. [[aga-2023-ai-colon-polyp|AGA Clinical Practice Update on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management: Commentary (2023)]]
2. [[aga-2025-cade-colonoscopy|AGA Living Clinical Practice Guideline on Computer-Aided Detection–Assisted Colonoscopy (2025)]]
