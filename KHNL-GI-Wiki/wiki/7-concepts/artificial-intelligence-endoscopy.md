---
title: "Artificial Intelligence in Endoscopy"
category: concept
tags: [artificial-intelligence, cade, cadx, colonoscopy, adenoma-detection, optical-diagnosis, resect-and-discard, quality]
created: 2026-07-30
updated: 2026-11-16
sources: [aga-2023-ai-colon-polyp, aga-2025-cade-colonoscopy]
quality_reviewed: 2026-11-16
---

Framework for artificial intelligence (AI) computer-vision tools in gastrointestinal (GI) endoscopy, focused on [[colonoscopy]]. Bottom line: **computer-aided detection (CADe)** raises detection metrics (**adenoma detection rate (ADR) +8 absolute points**, adenoma miss rate −19 points) but its effect on [[colorectal-cancer|colorectal cancer (CRC)]] incidence and mortality is very uncertain, and it drives **635 more surveillance colonoscopies per 10,000 people over 10 y** — so [[aga-2025-cade-colonoscopy|American Gastroenterological Association (AGA) 2025]] makes **no recommendation** for or against routine CADe.

## Contents
- [[#Tool Classes]]
- [[#Detection (CADe)]]
  - [[#Why Detection Is the Target]]
  - [[#AGA 2025 Recommendation]]
  - [[#Effect Sizes]]
  - [[#Trial vs Real-World Performance]]
  - [[#Downstream Burden]]
- [[#Diagnosis (CADx)]]
  - [[#PIVI Thresholds]]
  - [[#Trial Results]]
- [[#Quality Assessment]]
- [[#Adoption Barriers]]
- [[#Knowledge Gaps]]
- [[#See Also]]
- [[#Sources]]

## Tool Classes

| Class | Task | Clinical goal | Evidence status |
|---|---|---|---|
| **CADe** | Flags potential polyps in real time alongside the endoscopist | More adenomas found, fewer missed | 44 randomized controlled trials (RCTs) pooled; AGA 2025 guideline — no recommendation |
| **Computer-aided diagnosis (CADx)** | Predicts polyp histology optically (adenoma vs non-adenoma) | "Diagnose-and-leave" / "resect-and-discard" for diminutive polyps | Early real-time trials; expert commentary only, AGA guideline planned |
| **Computer-aided quality assessment** | Scores withdrawal technique and mucosal exposure (folds, withdrawal speed, coverage) | Fewer exposure errors — the blind spots CADe does not address | Proof-of-concept studies |

- Contemporary tools = deep-learning **convolutional neural networks (CNNs)** on live video; earlier detectors worked on still images with hand-engineered features. Trained on large expert-labeled image/video sets, with robust performance on previously unseen video. [[aga-2023-ai-colon-polyp]], [[aga-2025-cade-colonoscopy]]
- Several CADe systems are commercially available in the US and worldwide; platforms have sought US Food and Drug Administration (FDA) marketing approval as medical devices.

## Detection (CADe)

![[ai-endoscopy-2023-cade-alert-box-02.png|420x721]]
*What a CADe alert box looks like on screen*
*Source: figure 1 of the AGA 2023 Clinical Practice Update, open access (CC BY-NC-ND 4.0)*
*[[aga-2023-ai-colon-polyp|AGA Clinical Practice Update on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management: Commentary (2023)]]*
*A = sessile polyp · B = flat polyp · CADe = computer-aided detection*

### Why Detection Is the Target
- ~**25% of adenomas are missed** at colonoscopy, and **post-colonoscopy CRC (PCCRC)** — a CRC diagnosed after a colonoscopy in which no cancer was found — accounts for ~**8% of all diagnosed CRC**. [[aga-2025-cade-colonoscopy]], [[aga-2023-ai-colon-polyp]]
- ADR is the quality indicator CADe targets, and it is inversely correlated with PCCRC; definition, benchmarks and the ADR–cancer relationship live on [[colonoscopy-quality-indicators]].
- Two mechanisms of missed lesions: failure of **detection** (subtle or flat lesions) and inadequate/incomplete **mucosal inspection** on withdrawal. CADe addresses only the first.

> [!pearl] Above an ADR of 45%, more detection buys little
> The ADR–cancer-incidence association is **nonlinear, with a likely plateau over a 45% cutoff** — which bounds what any detection aid can deliver for an already-high detector ([[aga-2025-cade-colonoscopy]]).

### AGA 2025 Recommendation

> **"In adults undergoing colonoscopy, the AGA makes no recommendation on the use of CADe-assisted colonoscopy. (No recommendation, very low certainty of evidence)"** — [[aga-2025-cade-colonoscopy]]

**Remarks (as given):**
- Reflects **very low certainty on the critical outcomes** (CRC incidence, CRC mortality, PCCRC); the panel acknowledged the ADR gain as an important **surrogate** outcome only.
- CADe is an **iterative** AI application likely to improve with further training and validation; **an updated recommendation is planned**.
- Evidence gaps: diverse patient populations and settings (community vs academic), impact on polyps of greater significance (advanced adenomas) and on harder-to-detect polyps (sessile serrated lesions), resource implications, access to colonoscopy, patient values and preferences, cost-effectiveness, long-term patient-important outcomes.

**Reading the label.** In this document's Grading of Recommendations Assessment, Development and Evaluation (GRADE) vocabulary, "recommends" = strong, "suggests" = conditional, and **no recommendation** = the tradeoff is closely balanced *and* certainty around the critical outcomes is inadequate.

**What changed:** the panel **initially drafted a conditional recommendation *suggesting* CADe**, then reconvened after public comment and issued **no recommendation by vote**, without consensus. Rationale: the ADR gain is driven by **diminutive-to-small polyps with low potential to progress**, which shortens [[colonoscopy-surveillance|surveillance]] intervals and raises lifetime colonoscopy count; the panel weighted long-term CRC incidence and mortality above the surrogate. CADe is also an **endoscopist-level** intervention — the panel judged the decision **may not be conducive to shared decision-making** with an individual patient.

### Effect Sizes

Population: adults undergoing colonoscopy for screening, surveillance, or follow-up of a positive [[fecal-immunochemical-test|fecal immunochemical test (FIT)]]. Comparator: routine colonoscopy.

| Outcome (timeframe) | Routine | CADe | Absolute difference (95% confidence interval [CI]) | Relative risk (RR) (95% CI) | Certainty |
|---|---|---|---|---|---|
| CRC incidence / 10 y | 82 per 10,000 | 71 per 10,000 | 11 fewer per 10,000 (number needed to treat [NNT] 909); 35 fewer to 17 more | 0.87 (0.57–1.21) | Very low |
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

*AGA 2025 summary of findings. ([[aga-2025-cade-colonoscopy]])*

**Reading the table:**
- Detection-rate rows come from the pooled RCTs; CRC, mortality, PCCRC, surveillance, perforation and bleeding rows come from a **microsimulation Markov model** (100,000 individuals aged 60–69, 10-y follow-up, 100% participation assumed) — hence the low-to-very-low certainty on the outcomes that matter most.
- Advanced colorectal neoplasia = advanced adenoma and/or advanced serrated lesion. Perforation and bleeding = events involving transfusion or hospitalization within 30 days.
- Certainty rated down mainly for lack of blinding of outcome assessors, imprecision, and — for ADR — publication bias.
- Underlying systematic review (SR): **44 RCTs, >30,000 participants**; polyp detection rate (PDR) 56.1% vs 47.9% (RR 1.22, 1.15–1.28) in 41 RCTs / 32,108 participants.

### Trial vs Real-World Performance
- **Pooled nonrandomized studies show no benefit** — 8 studies, 9782 participants: ADR 44% vs 38%, **RR 1.11 (0.97–1.28)**. The AGA 2025 panel noted CADe effectiveness **may be lower in clinical practice than in RCTs**. [[aga-2025-cade-colonoscopy]]
- Negative individual studies ([[aga-2023-ai-colon-polyp]]): a retrospective single-center pragmatic trial (no gain in ADR or adenomas detected per colonoscopy (APC) vs historic and concurrent controls); a large retrospective observational study — **ADR 30.3% with CADe vs 35.2% pre-CADe, P = .001**, with lower PDR and APC; a UK RCT with no ADR difference.
- Proposed explanations: **ceiling effect** in high performers; unconscious **degradation of mucosal exposure** from a false sense of security; **unblinded endoscopists** → performance bias favoring CADe in RCTs.
- Gains are not purely non-neoplastic — a US multicenter RCT (677 routine vs 682 CADe) found **APC 0.83 → 1.05** with **no decrease in true-histology rate** (proportion of resections with clinically significant histology).

> [!pitfall] The quoted 1.43 risk ratio overstates the gain
> The 2023 Clinical Practice Update (CPU) cited a meta-analysis of 10 RCTs / 6629 patients giving an ADR RR of **1.43**. The operative figure is the 2025 guideline's larger, newer, guideline-tier pooled estimate — **RR 1.22 (1.16–1.29)** ([[aga-2025-cade-colonoscopy]]).

### Downstream Burden
- **Dominant undesirable effect:** 635 more surveillance colonoscopies per 10,000 people over 10 y (see table) — driven by detection of diminutive and small adenomas of low malignant potential, plus more resection of non-neoplastic polyps, which carries unnecessary cost. This is **overdiagnosis**: detection of polyps that would not have progressed to clinical CRC during a lifetime.
- Cost modeling cited by the 2023 CPU runs both ways: AI raised the proportion needing intensive [[colonoscopy-surveillance|surveillance]] by ~**35% (US)** and ~**20% (Europe)** (absolute increases 2.9% and 1.3%), while a Markov microsimulation projected CRC-incidence reduction vs no screening of **44.2% without AI → 48.9% with AI** at slightly lower cost per screened person — contingent on the real-world ADR gain materializing. [[aga-2023-ai-colon-polyp]]
- AGA 2025 **did not incorporate cost into its model** and did not explicitly weigh resource considerations when forming the recommendation, though it did discuss resource use, equity and feasibility.
- **Equity and feasibility:** CADe is **not reimbursable through insurance**, is purchased by flat fee or subscription, and is available only to systems with the resources and infrastructure to implement it — so a recommendation *for* CADe could worsen access inequity globally. Negative environmental impact, and racial/ethnic bias in the data sets used to derive the models, are also raised.

## Diagnosis (CADx)

![[ai-endoscopy-2023-cadx-output-04.png|760x270]]
*CADx histology prediction displayed beside the live endoscopic image*
*Source: figure 2 of the AGA 2023 Clinical Practice Update, open access (CC BY-NC-ND 4.0)*
*[[aga-2023-ai-colon-polyp|AGA Clinical Practice Update on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management: Commentary (2023)]]*
*CADx = computer-aided diagnosis · SSL = sessile serrated lesion · NBI = narrow-band imaging*

- **Scope:** AGA 2025 deliberately covers **CADe only**; a **future AGA guideline will address CADx**. Everything below is from the 2023 CPU — expert commentary, no GRADE ratings.
- **Goal:** real-time optical histology, so diminutive polyps can be handled without pathology or without resection. Adenomas <5 mm anywhere in the colon plus hyperplastic polyps <5 mm in the rectosigmoid are **>80% of all polyps** found at screening and surveillance; potential savings **$33–150 million/y**.
- CADx today usually relies on virtual chromoendoscopy such as narrow-band imaging; the promise is doing it with **white light alone**, paired with CADe.

### PIVI Thresholds

American Society for Gastrointestinal Endoscopy (ASGE) "Preservation and Incorporation of Valuable Endoscopic Innovations" (PIVI; 2011) set the performance bars a technology must clear before either strategy is adopted:

| Strategy | Target lesions | Required performance |
|---|---|---|
| **Diagnose-and-leave** (leave in situ) | Suspected hyperplastic polyps **<5 mm in the rectosigmoid** | **≥90% negative predictive value (NPV)** for adenomatous histology |
| **Resect-and-discard** (no pathology) | Colorectal polyps **<5 mm** | **>90% agreement** with pathology-based assignment of post-[[polypectomy]] surveillance intervals |

### Trial Results
- Simultaneous CADe + CADx on high-definition (HD) white-light **unmagnified** endoscopy, CNN classifier run over several images of each lesion; 544 polyps in 162 patients, of which 295 (54.2%) were histologically verified rectosigmoid lesions <5 mm ([[aga-2023-ai-colon-polyp]]):
  - CADx diagnosis feasible in **98.6%** of polyps.
  - **NPV 97.6%** for rectosigmoid lesions <5 mm — **clears the ≥90% PIVI bar in white light**.
  - 242/295 (82%) amenable to leave-in-situ; 212/544 (39%) amenable to resect-and-discard, with **95.9% agreement** with histology-based surveillance intervals per US guidelines.
  - Projected effect: **44.4% fewer polypectomies**; adding resect-and-discard would cut pathology to **17%** of detected lesions.
- A CADx tool requiring a ×520 magnifying colonoscope **did not increase diagnostic sensitivity**, but raised high-confidence endoscopist diagnosis from **74.2% → 92.6%**. Confidence, not accuracy, may be the rate-limiting step for adoption.

## Quality Assessment
- Missed adenomas arise from **cognitive errors** (lesion visualized but not recognized) and **exposure errors** (blind spots and incomplete mucosal exposure — withdrawal speed, endoscopist skill, [[bowel-preparation|degree of bowel cleansing]]).
- Four complementary skills counter exposure errors: **fold examination, mucosal cleaning, luminal distension, adequate viewing time**.
- **Fold evaluation quality (FEQ)** AI system (103 consecutive colonoscopies, 11 colonoscopists, 3 expert graders): AI FEQ scores correlated significantly with expert scores, historical ADR and withdrawal time; AI assistance **significantly improved FEQ for colonoscopists with historically low ADR (<25%)**.
- Other tools: withdrawal-speed "speedometers," graphical colon-surface **coverage maps**, mucosal-exposure adequacy scores. [[aga-2023-ai-colon-polyp]]

> [!pearl] CADe fixes only half the miss problem
> Adenomas are missed both because they are not recognized and because they are never exposed. **Current CADe systems do not address exposure errors** — withdrawal technique still decides the result ([[aga-2023-ai-colon-polyp]]).

## Adoption Barriers

**Provider attitudes** — SR of 13 studies, 12 of them on provider attitudes ([[aga-2025-cade-colonoscopy]]):

| Provider view | Proportion (95% CI) |
|---|---|
| Find AI in colonoscopy interesting | 85% (80–90) |
| Believe it would improve adenoma detection | 74% (68–80) |
| Concerned about increased cost | 43% (16–71) |
| Concerned about accountability for incorrect diagnosis | 40% (16–67) |
| Concerned about medicolegal issues | 23% (12–37) |

**Patient values and preferences** — no study specifically addressed AI-assisted colonoscopy, so the panel extrapolated: **>65%** would choose an endoscopist who uses CADe and **58%** rate AI use very or somewhat important; **>60%** worried about reduced personal contact with clinicians. Across 23 CRC-[[colorectal-cancer-screening|screening]] preference studies, patients valued **mortality reduction** and care quality but were concerned about **health-related anxiety, overdiagnosis and more frequent surveillance colonoscopies**.

**Structural barriers** ([[aga-2023-ai-colon-polyp]]):
- **No separate reimbursement** for CADe or other polyp-detection devices; the whole "add-on detection device" category (ultrawide-angle systems, distal caps and hoods) has historically failed to reach wide use.
- Not yet **integrated into endoscopes or video processors** — unlike HD video, digital chromoendoscopy and magnification, which shipped inside the endoscope package.
- **False-positive distraction** and audio alerts, plus concern about prolonged procedure time. Where activation was left to endoscopist discretion across a whole academic faculty, CADe was turned on in only **52.1%** of cases.
- Medical-legal exposure from leaving polyps in situ or discarding them after CADx; **pathology fees are an important revenue stream** for many practices.
- Likely a physician learning curve rather than "plug and play" — formal training in dismissing false positives is proposed.

## Knowledge Gaps
Named by [[aga-2025-cade-colonoscopy]]:
- Whether **CADe plus CADx together** offsets the extra non-neoplastic polyp detection and resection CADe causes — trials needed.
- Future post-polypectomy **surveillance-interval** guidelines must account for the changed detection landscape.
- Ethics and law: patient privacy, data security, ownership of health information used by AI platforms; **no legal framework** for AI-related health care errors (shared liability between device maker and physician has been proposed).
- Transparency about algorithms and the training/validation image sets, ideally **before** commercial use.
- Device-to-device and version-to-version differences are unclear and potentially outcome-relevant.
- Effect of CADe in **educational** settings — possible harm to trainees' own polyp-recognition skill.
- Living guideline: update expected in ~**1–2 years**.

## See Also

[[colonoscopy]], [[colonoscopy-quality-indicators]], [[polypectomy]], [[colorectal-cancer-screening]], [[colonoscopy-surveillance]], [[colorectal-cancer]], [[bowel-preparation]], [[endoscopic-oncology]]

---

## Sources

1. [[aga-2023-ai-colon-polyp|AGA Clinical Practice Update on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management: Commentary (2023)]]
2. [[aga-2025-cade-colonoscopy|AGA Living Clinical Practice Guideline on Computer-Aided Detection–Assisted Colonoscopy (2025)]]
