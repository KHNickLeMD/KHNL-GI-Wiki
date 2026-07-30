---
title: "Artificial Intelligence in Endoscopy"
category: concept
tags: [artificial-intelligence, cade, cadx, colonoscopy, adenoma-detection, optical-diagnosis, resect-and-discard, quality]
created: 2026-07-30
updated: 2026-07-30
sources: [aga-2023-ai-colon-polyp, aga-2025-cade-colonoscopy]
---

Framework for AI computer-vision tools in GI endoscopy, focused on [[colonoscopy]]. Three classes: **CADe** (detection), **CADx** (optical diagnosis), and **computer-aided quality assessment** (technique/exposure). Bottom line: CADe raises adenoma detection rate in trials but real-world benefit is inconsistent, and the later AGA living guideline makes **no recommendation for or against** routine CADe (very low certainty). Per [[aga-2023-ai-colon-polyp]] (commentary) and [[aga-2025-cade-colonoscopy]] (guideline).

## Contents
- [[#Three Classes of AI Tools]]
- [[#CADe — Computer-Aided Detection]]
- [[#CADx — Computer-Aided Diagnosis]]
- [[#Computer-Aided Quality Assessment]]
- [[#Adoption Barriers]]

## Three Classes of AI Tools
- **CADe (detection):** flags potential polyps in real time alongside the endoscopist.
- **CADx (diagnosis):** predicts polyp histology optically (adenoma vs non-adenoma) to support "resect-and-discard" / "diagnose-and-leave."
- **Computer-aided quality assessment:** measures/improves withdrawal technique and mucosal exposure (fold examination, withdrawal speed, coverage).
- Contemporary tools use deep-learning convolutional neural networks on live video (vs earlier still-image, hand-engineered detectors). [[aga-2023-ai-colon-polyp]]

## CADe — Computer-Aided Detection
- **Why it matters:** [[colonoscopy]] detection is operator-dependent — ADR ranges **7%–53%** across colonoscopists; each **1% rise in ADR → ~3% lower** future CRC risk; missed polyps drive post-colonoscopy interval CRC (~8% of all CRC).
- **Trial-level benefit:** meta-analysis of 10 RCTs (6629 pts) — AI vs routine colonoscopy **ADR RR 1.43**, **PDR RR 1.44** (both P<.001); APC also higher. Shaukat US RCT: **APC 0.83 → 1.05** with **no drop in true-histology rate** (gains not just non-neoplastic lesions).
- **Real-world caveat:** pragmatic/observational studies (Ladabaum; Levy — ADR 30.3% vs 35.2%, P=.001) and a UK RCT showed **no ADR benefit**. Proposed reasons: ceiling effect in high performers, unconscious degradation of mucosal exposure (false security), unblinding/performance bias.
- **Downstream burden:** ADR gains are mostly small non-advanced adenomas → more polypectomies and shorter [[colonoscopy-surveillance|surveillance]] intervals (Mori: intensive-surveillance proportion +~35% US / +~20% Europe).
- **Cost-effectiveness (modeled):** CRC-incidence reduction vs no screening 44.2% (no AI) → 48.9% (AI); ~$290 million/yr saved at US-population level — contingent on ADR gains persisting in practice.
- **Guideline stance:** [[aga-2025-cade-colonoscopy|AGA 2025 living guideline]] — **no recommendation for or against** routine CADe (very low certainty); modeled ~11 fewer CRCs/10,000 and trivial mortality effect; close desirable–undesirable balance → shared decision-making.

## CADx — Computer-Aided Diagnosis
- **Goal:** optical histology to enable **resect-and-discard** (diminutive polyps needing resection) and **diagnose-and-leave** (suspected rectosigmoid hyperplastic polyps <5 mm) — sparing polypectomy/pathology. Diminutive adenomas + rectosigmoid HPs <5 mm are **>80%** of all polyps; potential savings ~$33–150 million/yr.
- **ASGE PIVI thresholds (the decision criteria):**
  - *Diagnose-and-leave* suspected hyperplastic polyps <5 mm in the rectosigmoid → technology must provide **≥90% negative predictive value** for adenomatous histology.
  - *Resect-and-discard* polyps <5 mm → **>90% agreement** with pathology on assigned post-polypectomy surveillance intervals.
- **Evidence:** Hassan et al (real-time CADx, white-light unmagnified) — feasible in 98.6%; **NPV 97.6%** for rectosigmoid <5 mm (exceeds PIVI bar); 95.9% agreement with histology-based surveillance. Barua et al — CADx did not raise sensitivity but raised endoscopist high-confidence diagnosis (74.2% → 92.6%). [[aga-2023-ai-colon-polyp]]

## Computer-Aided Quality Assessment
- Missed adenomas = **cognitive errors** (fails to recognize a visualized lesion) + **exposure errors** (blind spots/incomplete exposure). Current CADe addresses only cognitive errors.
- Four skills counter exposure errors: **fold examination, mucosal cleaning, luminal distension, adequate viewing time.**
- AI fold-evaluation-quality (FEQ) systems correlate with expert scores, historical ADR, and withdrawal time; improve FEQ most for low-ADR (<25%) colonoscopists. Other tools: withdrawal "speedometers," colon-surface coverage maps. [[aga-2023-ai-colon-polyp]]

## Adoption Barriers
- No separate reimbursement for CADe; not yet integrated into scopes/processors (add-on device); false-positive distraction; medical-legal concerns of leaving/discarding polyps; pathology fees as a revenue stream. Predicted future: a hybrid AI "suite" (CADe + CADx + quality + automated notes). [[aga-2023-ai-colon-polyp]]

## See Also
[[colonoscopy]], [[polypectomy-emr]], [[colorectal-cancer-screening]], [[colonoscopy-surveillance]], [[colorectal-cancer]]

---

## Sources

1. [[aga-2023-ai-colon-polyp|AGA Clinical Practice Update on the Role of Artificial Intelligence in Colon Polyp Diagnosis and Management: Commentary (2023)]]
2. [[aga-2025-cade-colonoscopy|AGA Living Guideline: Computer-Aided Detection (CADe)-Assisted Colonoscopy (2025)]]
