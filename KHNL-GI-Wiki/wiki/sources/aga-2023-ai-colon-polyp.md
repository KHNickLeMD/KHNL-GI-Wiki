---
title: "AGA Clinical Practice Update on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management: Commentary"
category: source
tags: [colonoscopy, artificial-intelligence, cade, cadx, adenoma-detection, colorectal-cancer-screening, polypectomy, cpu, aga]
created: 2026-07-30
updated: 2026-07-30
sources: []
---

# AGA CPU on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management (2023)

## Bibliographic Info

- **Article:** [Samarasena J, Yang D, Berzin TM. AGA Clinical Practice Update on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management: Commentary. *Gastroenterology* 2023;165:1568–1573.](https://doi.org/10.1053/j.gastro.2023.07.010)
- **Authors:** Jason Samarasena, Dennis Yang, Tyler M. Berzin
- **Year:** 2023
- **Journal/Publisher:** Gastroenterology (AGA Institute Clinical Practice Update)
- **DOI:** [10.1053/j.gastro.2023.07.010](https://doi.org/10.1053/j.gastro.2023.07.010)
- **Type:** Clinical Practice Update — Expert Commentary (no formal Best Practice Advice statements)

---

## Summary

This AGA Institute Clinical Practice Update is an **Expert Commentary** (not a formal GRADE or Best Practice Advice document) reviewing the current landscape of artificial intelligence (AI) for [[colonoscopy]]. It frames AI computer-vision tools into three groups: **computer-aided detection (CADe)** for finding polyps, **computer-aided diagnosis (CADx)** for optical histology prediction, and **computer-aided quality assessment** for measuring/improving withdrawal technique.

CADe was the first target: meta-analytic data show it significantly raises adenoma detection rate (ADR) and adenomas detected per colonoscopy (APC), but the gains are mainly in small, non-advanced adenomas, and several recent pragmatic/observational studies (Ladabaum, Levy, a UK RCT) found **no ADR benefit** — attributed to ceiling effects in high performers, unconscious degradation of mucosal exposure, and unblinding/performance bias. CADx aims to enable "resect-and-discard" and "diagnose-and-leave" strategies, which require meeting the ASGE PIVI thresholds; a real-time white-light CADx study exceeded the ≥90% NPV threshold for diminutive rectosigmoid lesions. Adoption remains slower than expected because of cost/reimbursement, lack of integration into scopes, and false-positive distraction.

---

## Key Findings / Claims

**AI and computer vision — framework**
- Three application classes in colonoscopy: **CADe** (detection), **CADx** (optical diagnosis/histology prediction), and **computer-aided quality assessment** (a third, emerging class targeting exposure errors).
- Contemporary tools use deep-learning convolutional neural networks trained on large datasets, running in real time on live video (earlier systems were still-image, hand-engineered feature detectors).

**Rationale / detection variability**
- CRC is the 2nd most common cause of cancer death worldwide; screening colonoscopy reduces CRC risk by removing precancerous polyps.
- Polyp detection is operator-dependent: **ADR ranges 7%–53%** across colonoscopists.
- A **1% increase in ADR** is associated with a **3% decrease in future CRC risk**; missed neoplastic polyps drive post-colonoscopy interval CRC (~8% of all diagnosed CRC).
- Most detected polyps are diminutive and non-neoplastic; unnecessary resection/pathology of these adds cost and adverse-event risk.

**CADe — computer-aided detection**
- Early CNN CADe (Urban et al): 97% sensitivity, 95% specificity, 96% accuracy; detected 92% of polyps the endoscopists had missed.
- Meta-analysis (Huang et al, 10 RCTs, 6629 patients): AI-aided vs routine colonoscopy — **ADR RR 1.43** (P<.001) and **polyp detection rate RR 1.44** (P<.001); APC and PDC also significantly higher.
- **Negative/neutral studies:** Ladabaum (retrospective pragmatic trial — no improvement in ADR/APC); Levy (retrospective observational — **lower** ADR with CADe, 30.3% vs 35.2%, P=.001); a UK RCT — no ADR difference.
- Proposed explanations for lack of benefit: ceiling effect in high-ADR endoscopists; unconscious degradation of mucosal-exposure quality (false sense of security); unblinding/performance bias in most RCTs.
- **Cost concerns:** ADR gains are mostly small non-advanced adenomas → risk of more unnecessary resections; Shaukat US multicenter RCT (677 standard vs 682 CADe) showed **APC 0.83 → 1.05** with **no decrease in true-histology rate** (i.e., CADe raised APC without more resection of non-neoplastic lesions).
- **Surveillance burden:** Mori et al estimated CADe increases the proportion needing intensive surveillance by ~35% (US) and ~20% (Europe) (absolute +2.9% and +1.3%).
- **Cost-effectiveness modeling (Areia):** CRC-incidence reduction vs no screening was 44.2% (colonoscopy without AI) vs 48.9% (with AI); AI lowered discounted cost per screened individual from $3400 to $3343; at US-population level, ~7194 additional CRC cases and ~2089 deaths prevented per year, ~$290 million saved per year — contingent on real-world ADR gains.
- Human–AI interaction: false positives are a major deterrent; formalized training and better algorithms proposed; a physician learning curve exists.

**CADx — computer-aided diagnosis (optical histology)**
- Goal: enable **resect-and-discard** and **diagnose-and-leave** strategies for diminutive polyps, reducing polypectomy/pathology.
- **ASGE PIVI thresholds:** to *diagnose-and-leave* suspected hyperplastic polyps <5 mm in the rectosigmoid, technology must provide **≥90% negative predictive value** for adenomatous histology; to *resect-and-discard* polyps <5 mm, the technology must provide **>90% agreement** on post-polypectomy surveillance intervals vs pathology-based assignment.
- Adenomas <5 mm + rectosigmoid hyperplastic polyps <5 mm account for **>80%** of all polyps found at screening/surveillance; broad adoption could save an estimated **$33–150 million/year**.
- Hassan et al (simultaneous CADe + CADx, white-light unmagnified): CADx feasible in 98.6% of polyps; **NPV 97.6%** for rectosigmoid lesions <5 mm; 82% amenable to leave-in-situ; 39% amenable to resect-and-discard; 95.9% agreement with histology-based surveillance intervals — exceeding the PIVI ≥90% NPV bar in standard white-light endoscopy.
- Barua et al: CADx (requiring a magnifying colonoscope) did not raise diagnostic sensitivity but **improved endoscopist confidence** (high-confidence diagnosis 74.2% → 92.6%).
- Barriers to CADx adoption: need for workflow-integrated tools without image enhancement/magnification; reimbursement (pathology fees are revenue), and medical-legal concerns of leaving/discarding polyps.

**Computer-aided quality assessment**
- Missed adenomas arise from **cognitive errors** (fails to recognize a visualized adenoma) and **exposure errors** (blind spots/incomplete mucosal exposure from withdrawal speed, skill, cleansing). Current CADe does **not** address exposure errors.
- Four complementary skills improve inspection quality against exposure errors: **fold examination, mucosal cleaning, luminal distension, adequacy of viewing time.**
- Liu et al AI fold-evaluation-quality (FEQ) system: correlated with expert scores, historical ADR, and withdrawal time; for low-ADR (<25%) colonoscopists, AI assistance significantly improved FEQ.
- Other emerging tools: withdrawal "speedometers," colon-surface "painting"/coverage maps, mucosal-exposure scoring.

**Challenges & future directions**
- Despite robust early data, clinical adoption is slower than expected (Rex et al): history of underused add-on detection devices (low value ascribed by colonoscopists); **no separate reimbursement** for CADe; not yet integrated into scopes/processors (currently a separate add-on); false-positive distraction.
- Authors predict a future **hybrid model** — an AI "suite" (CADe + CADx + quality assessment + automated note generation) integrated into practice.

---

## Relevance to Wiki

- Primary home: [[artificial-intelligence-endoscopy]] (new concept page — CADe / CADx / computer-aided quality assessment).
- Updates [[colonoscopy]] — AI adjuncts within quality metrics (ADR, APC, withdrawal quality).
- Touches [[colorectal-cancer-screening]] and [[polypectomy]] (resect-and-discard / diagnose-and-leave strategies, PIVI thresholds).

## Contradictions / Open Questions

- **Source priority note:** the later **[[aga-2025-cade-colonoscopy]]** AGA *living guideline* (GRADE) makes **no recommendation for or against** routine CADe (very low certainty). This 2023 CPU is an enthusiastic *commentary* summarizing positive early data; where they meet (CADe for detection), the newer 2025 guideline's cautious framing governs the wiki's primary assertion. The 2023 CPU remains the home for the CADx and quality-assessment content the 2025 CADe-only guideline does not cover.
- CADe ADR benefit is inconsistent across real-world/pragmatic studies (positive RCT meta-analysis vs neutral/negative pragmatic and UK RCT data).
- Cost-effectiveness hinges on unproven assumptions that ADR gains persist in routine practice.
