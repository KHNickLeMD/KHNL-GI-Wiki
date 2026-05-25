---
title: "Reflux Testing"
category: concept
tags: [gerd, reflux, ph-monitoring, impedance, manometry, diagnostics]
created: 2026-05-15
updated: 2026-05-19
sources: [asge-2024-gerd, acg-2020-esophageal-physiologic-testing]
---

## Overview

Reflux testing refers to the suite of diagnostic tools used to objectively confirm gastroesophageal reflux disease (GERD), characterize its severity, and guide procedural decision-making. Clinical diagnosis based on symptoms alone is sufficient for empiric PPI trials, but objective confirmation is required before endoscopic or surgical anti-reflux therapy.

---

## Ambulatory pH Monitoring

### Principle
Measures esophageal acid exposure as percentage of time intraluminal pH is <4 (acid exposure time, AET).

### Methods

| Method | Details |
|---|---|
| Catheter-based pH study | 24-hour; transnasal placement; patient diary correlates symptoms with pH events |
| Wireless pH capsule (Bravo) | 48-hour (or 96-hour extended protocol); clipped to esophageal mucosa; no catheter; better patient tolerance; allows off-PPI testing for longer duration |

### Key Threshold
- Normal AET: <4–6% (protocol-specific; Lyon Consensus suggests <4% clearly normal, >6% clearly abnormal, 4–6% borderline)
- Pathologic acid reflux confirmed when AET exceeds the normal threshold

### Clinical Indication
- Objective confirmation of GERD before TIF 2.0, cTIF, or surgical fundoplication
- Evaluation of PPI-refractory symptoms (study should be done off PPI, typically after 7-day washout, unless testing for incomplete acid suppression)
- Distinguishing true GERD from functional heartburn (symptom-reflux correlation absent despite normal AET)

### Refractory GERD Definition (ASGE 2024)
Persistent troublesome GERD symptoms despite double-dose PPI for ≥8 weeks in the setting of ongoing documented pathologic reflux on ambulatory pH testing.

---

## Combined pH-Impedance Monitoring (MII-pH)

### Principle
Multi-channel intraluminal impedance (MII) detects fluid movement in the esophagus regardless of pH. Combined with pH electrode, it characterizes:
- Acid reflux (pH <4)
- Weakly acidic reflux (pH 4–7)
- Non-acid (alkaline) reflux (pH >7)

### Clinical Advantage
- Detects non-acid and weakly acidic reflux episodes missed by pH alone
- Particularly useful in:
  - Regurgitation-predominant GERD on adequate PPI therapy (may have weakly acidic reflux)
  - Evaluation for laryngopharyngeal reflux (see [[laryngopharyngeal-symptoms]])
  - Patients on PPIs (study on-therapy captures breakthrough reflux)

### Symptom-Reflux Correlation Indices
- Symptom Index (SI): percentage of symptoms associated with reflux episodes (>50% positive)
- Symptom Association Probability (SAP): statistical probability of symptom-reflux association (>95% positive)

---

## Endoscopic Evaluation of the GEJ

Endoscopy is the primary tool for characterizing the anti-reflux barrier and GEJ integrity. High-quality documentation is required before any procedural anti-reflux therapy (ASGE 2024 strong recommendation).

### Required Elements
| Element | Classification System |
|---|---|
| Erosive esophagitis | Los Angeles (LA) classification: Grade A (small breaks <5 mm), B (≥5 mm, not confluent), C (confluent, <75% circumference), D (≥75% circumference) |
| Barrett's esophagus | Prague C&M classification: C = circumferential extent (cm), M = maximal extent (cm) |
| Hiatal hernia size | Axial length in cm; measured as distance from GEJ to diaphragmatic impression |
| Flap valve morphology | Hill grade (I–IV) or American Foregut Society (AFS) classification; assessed in forward view and retroflexion |
| GEJ landmarks | Top of gastric folds, Z-line, diaphragmatic impression |

### Hill Grade of Gastroesophageal Flap Valve
| Grade | Description | Significance |
|---|---|---|
| I | Prominent fold, tight collar | Competent valve |
| II | Fold present, less prominent; occasional opening with respiration | Mildly compromised |
| III | No fold; gastric mucosa visible above the diaphragm | Moderately compromised |
| IV | No fold; hiatal hernia always open; squamous epithelium visible in hernia | Severely compromised |

**Therapeutic implication (ASGE 2024):**
- Hill I or II + hernia ≤2 cm: candidate for TIF 2.0
- Hill III or IV + hernia >2 cm: requires cTIF or surgical repair

### Mucosal Cleanliness
- Barcelona scale or Toronto Upper GI Cleaning Score should be used to ensure adequate visualization before documentation of GEJ landmarks and detection of precancerous lesions

---

## High-Resolution Manometry (HRM)

### Role in GERD

HRM is not a primary diagnostic test for GERD but is performed in specific contexts:
1. Pre-operative evaluation before anti-reflux surgery or TIF to exclude major motility disorder (achalasia, absent contractility)
2. Assessment of GEJ morphology and LES function (integrated relaxation pressure, LES resting pressure)
3. Characterization of contractile reserve

See [[hrm-antireflux-surgery]] and [[flip-panometry]] for detailed HRM protocols in the context of anti-reflux surgery evaluation.

---

## CYP2C19 Genotyping

### Relevance to Reflux Testing
Not a diagnostic test for GERD per se, but guides PPI selection and dosing in patients with suboptimal response.

- Metabolizer phenotypes: poor, intermediate, normal (wild-type), rapid, ultrarapid
- Rapid metabolizers: OR 1.6 for PPI refractoriness; GERD resolution rates 52.2% vs 61.3% (poor metabolizers)
- ASGE 2024 conditional recommendation: test CYP2C19 in patients with suboptimal PPI response and adjust PPI choice/dose accordingly
- Not yet widely implemented; clinical utility remains evolving

---

## Diagnostic Algorithm for Objective GERD Confirmation

```
Suspected GERD
    |
    v
Empiric PPI trial (4-8 weeks)
    |
    +---> Symptom resolution: clinical GERD, continue management
    |
    +---> Partial/no response OR planning procedural therapy
              |
              v
         Upper endoscopy (if not done)
         - Document LA grade, hiatal hernia size, Hill grade, GEJ landmarks
         - Rule out alarm pathology, Barrett's, stricture
              |
              v
         Ambulatory pH monitoring (off PPI x 7 days)
         - Confirms/refutes pathologic acid reflux
         - AET >4-6%: confirmed GERD
         - AET normal: consider pH-impedance on-PPI, functional heartburn, other diagnosis
              |
              v
         If procedural therapy planned:
         - HRM to exclude motility disorder
         - GEJ integrity by endoscopy (Hill grade, hernia size)
         - Multidisciplinary review if cTIF or surgery considered
```

---

## Symptom-Category Routing (ACG 2020)

The ACG 2020 guideline [[acg-2020-esophageal-physiologic-testing]] organizes test selection by dominant symptom category. EGD is the mandatory first step for all categories to exclude structural/mucosal pathology before ordering physiologic tests.

| Symptom Category | Primary Tests | Notes |
|---|---|---|
| **Obstructive** (dysphagia, regurgitation) | HRM ± provocative maneuvers; barium esophagram with tablet; FLIP if HRM borderline or catheter placement fails | Strong: HRM over conventional manometry (Moderate quality) |
| **Typical reflux** (heartburn, regurgitation, chest pain) | Ambulatory monitoring off PPI (unproven GERD); pH impedance on PPI (proven GERD with persisting symptoms) | Empiric PPI: 78% sensitive, 54% specific — insufficient for conclusive diagnosis |
| **Extraesophageal/atypical** (cough, hoarseness, globus, belching, rumination) | pH impedance off acid suppression (Strong/Low); upfront over empiric PPI for isolated extraesophageal symptoms (Conditional/Very low) | Laryngoscopy: 86% sensitive, only 9% specific for reflux — unreliable as primary diagnostic test |

### Key Principles (ACG 2020)
- No test should be ordered without a clear clinical hypothesis about what it will provide
- GERD questionnaires alone are insufficient for conclusive GERD diagnosis (GERDQ ≥9: 66% sensitivity, 64% specificity)
- AET >4% off PPI is the cardinal predictor of antireflux surgery outcomes; RSA and MNBI provide adjunctive value
- Upfront ambulatory testing (vs. empiric BID PPI) is cost-effective: $1,897 vs. $3,033 for patients with suspected extraesophageal reflux

---

## Rumination Syndrome and Supragastric Belching Testing

These diagnoses require [[ambulatory-reflux-monitoring]] with specific protocols:

- **Rumination syndrome**: HRIM (high-resolution impedance manometry) with postprandial monitoring protocol; sensitivity/specificity 75–80%/100% (HRIM). Manometric criteria: intragastric pressure rise >30 mmHg + proximal gastric content movement + esophageal pressurization coinciding with recognized rumination episode. See [[disorders-of-gut-brain-interaction]] for Rome IV/V criteria.
- **Supragastric belching**: pH impedance monitoring confirms; sensitivity 93.4%, specificity 75%, PPV 96.8%; supragastric belches identified in 48% of reflux referral patients; occur almost exclusively upright (37.8 ± 6.1 episodes/hr upright vs. 0.9 ± 0.5 supine)

---

## Summary Table: Reflux Testing Modalities

| Test | Primary Use | Key Output | When to Order |
|---|---|---|---|
| 24h catheter pH | Confirm pathologic acid reflux | AET (% time pH <4) | Pre-procedural; off-PPI |
| 48h–96h Bravo pH | Same as above; better tolerance; day-to-day variability | AET; symptom correlation | Pre-procedural; off-PPI; infrequent/variable symptoms |
| MII-pH off PPI | Non-acid/weakly acidic reflux; belching/rumination | All reflux events + pH; SI, SAP; MNBI | Unproven GERD with supragastric belching, rumination, or pulmonary symptoms |
| MII-pH on PPI | Ongoing reflux burden on therapy | On-therapy AET; weakly acidic episodes; MNBI | Proven GERD + persisting symptoms on optimized PPI |
| Upper endoscopy | Structural assessment, complications | LA grade, Hill grade, hernia size, Barrett's | All planned procedural therapy; alarm symptoms |
| HRM | Exclude motility disorder; pre-ARS evaluation; hiatal hernia identification | LES pressure, peristalsis, IRP | Pre-TIF, pre-surgical evaluation; HRM 94.3% sensitive for hiatal hernia |
| Barium esophagram | Bolus transit; achalasia outcome monitoring | Barium height at 1 and 5 min; tablet passage | Obstructive symptoms; achalasia follow-up |
| FLIP | Borderline HRM; catheter placement failure; intraprocedural achalasia treatment | EGJ distensibility, CSA | Borderline HRM findings; as adjunct — not HRM replacement |
| CYP2C19 genotype | PPI pharmacogenomics | Metabolizer phenotype | Suboptimal PPI response |
