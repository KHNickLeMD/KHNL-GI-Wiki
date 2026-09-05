---
title: "Eosinophilic Esophagitis"
category: disease-script
tags: [eoe, esophageal, dysphagia, food-impaction, eosinophil, atopic, biologic, dupilumab]
created: 2026-05-07
updated: 2026-09-05
sources: [acg-2025-eoe, aga-2020-eoe, acg-2013-eoe, aga-2024-esophageal-immunity-infection, asge-2011-foreign-body-ingestion]
---

Chronic, immune/antigen-mediated esophageal disease. Characterized by esophageal symptoms + eosinophilic inflammation confined to the esophagus. Food antigen-driven in most; part of the atopic march.

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
  - [[#Classification / Typing]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
  - [[#Endoscopy with Biopsies (required)]]
  - [[#Diagnostic Workup Sequence]]
  - [[#Tests NOT Recommended]]
- [[#Therapeutics]]
  - [[#Treatment Goals]]
  - [[#First-Line Options (choose 1; equal standing)]]
  - [[#Second-Line / Refractory]]
  - [[#Adjunct: Esophageal Dilation]]
  - [[#Maintenance Therapy]]
  - [[#Monitoring]]
  - [[#Special Populations]]
- [[#See Also]]
- [[#Sources]]

---

## Assessment

### Establishing the Diagnosis

**Diagnostic criteria (all 3 required):**

1. Symptoms of esophageal dysfunction
2. **≥15 eos/hpf** in at least 1 hpf on esophageal biopsy
3. Exclusion of other causes of esophageal eosinophilia

- **The hpf threshold is the operative one; the density equivalent is not yet the standard.** Counts vary with microscope high-power-field size, so reporting **eosinophil density** would compare better across labs — in which case the threshold is **~60 eos/mm²** — but [[acg-2025-eoe|ACG 2025]] states this change "has not currently been made in practice." Diagnose on **15 eos/hpf**; treat 60 eos/mm² as the equivalent, not a second criterion.

**Typical symptoms by age:**

| Age | Predominant symptoms |
|---|---|
| Infants/toddlers | Feeding refusal, vomiting, failure to thrive |
| School-age children | Abdominal pain, vomiting, regurgitation |
| Adolescents/adults | Dysphagia, [[ingested-foreign-body\|food impaction]] |

**IMPACT behaviors** — adaptive behaviors that mask dysphagia; ask about each while taking the history ([[acg-2025-eoe]], Table 4):

| | Behavior | What to ask about |
|---|---|---|
| **I** | Imbibe fluids | Drinking a lot of liquid to get each bite down |
| **M** | Modify foods | Cutting food into small pieces, pureeing |
| **P** | Prolong meal times | Eating slowly; "last one at the table" |
| **A** | Avoid hard-texture foods | Meats, crusty breads, sticky-consistency foods removed from diet |
| **C** | Chew excessively | Chewing to a mush-like consistency before swallowing |
| **T** | Turn away tablets/pills | Pill dysphagia — often the only sign of swallowing dysfunction |

**Endoscopic findings (EREFS scoring, 0–9 scale):**

- **E**dema (decreased vascular markings, mucosal pallor)
- **R**ings (trachealization/corrugation)
- **E**xudates (white plaques/exudates)
- **F**urrows (vertical lines)
- **S**tricture (focal esophageal narrowing)
- Each of the 5 features is graded **by severity in the worst-appearing area** of the esophagus; the grading scheme yields a total score of **0–9**. Score EREFS in every suspected and established EoE case ([[acg-2025-eoe]])
- Normal endoscopy does NOT exclude EoE

*Gap (tooling-blocked, not corpus-blocked): the per-feature point ranges — how many points each of E/R/E/F/S can score — exist **only inside Figure 2 ("EREFS with example scoring") on PDF page 7 of [[acg-2025-eoe]]**; the guideline text gives the 0–9 total and the worst-area rule but never the per-feature scale. Capturing the figure needs a PDF render/crop step that is unavailable in this environment (pymupdf absent, pdftoppm not permitted). Until `raw/assets/eoe-2025-erefs-scoring-07.png` is produced, the numeric score cannot be computed from this page alone.*

### Severity Assessment

Severity is assessed across three domains — **symptoms, endoscopic activity (EREFS), and histologic activity** — not by any one of them alone ([[acg-2025-eoe]]):

- **Peak eosinophil count must be quantified, not just reported as ">15 eos/hpf"** — the number is needed to gauge treatment effect (200 → 150 is no meaningful response; 200 → 20 is). But the count does **not** scale with clinical severity: a patient with 200 eos/hpf is not twice as severe as one with 100.
- **Report other histologic features** alongside the count — basal zone hyperplasia, dilated intercellular spaces, lamina propria fibrosis — which can indicate ongoing activity despite a low eosinophil count.
- **I-SEE (Index of Severity in EoE):** ACG 2025 advises providers **could consider** using I-SEE to assess baseline severity; it is developed but still undergoing validation, and its role in matching severity to treatment/monitoring is an explicit knowledge gap.

*Gap: the I-SEE components and point values are not reproduced in [[acg-2025-eoe]] (cited to a separate 2022 paper, not ingested) — the score cannot be computed from this page. Needed source: Dellon ES, Khoury P, Muir AB, et al. A clinical severity index for EoE.*

**Fibrostenotic phenotype:** rings + strictures; transmural inflammation + fibrosis; requires dilation in addition to medical therapy. Endoscopy badly underestimates stricture severity — esophagram (and [[flip-panometry|EndoFLIP]]) are more accurate; the sensitivity data are under Adjunct: Esophageal Dilation.

**Persistent symptoms despite histologic + endoscopic remission** → evaluate for a subtle **stricture** (esophagram) or an esophageal **motility disorder**; some patients with EoE develop dysmotility, and EoE carries an increased risk of [[achalasia]]. Consider further motility evaluation. ([[aga-2024-esophageal-immunity-infection|AGA 2024]])

### Classification / Typing

- **Inflammatory:** edema, furrows, exudates predominate; responsive to medical therapy
- **Fibrostenotic:** rings, strictures, narrow caliber esophagus; requires dilation
- **Mixed:** both features present

---

## Differential Diagnosis

*Workup: see [[dysphagia]].*

| Condition | Distinguishing features |
|---|---|
| [[gerd\|GERD]] | No eosinophils on biopsy or responds to [[proton-pump-inhibitors\|PPI]] (but PPI response ≠ exclude EoE) |
| Proton pump inhibitor-responsive esophageal eosinophilia (PPIREE) | Now considered subset of EoE, not separate entity |
| [[achalasia\|Achalasia]] / motility disorders | [[high-resolution-manometry\|Manometry]] abnormal; esophageal body aperistalsis |
| Eosinophilic gastroenteritis | Eosinophilia extends beyond esophagus |
| Hypereosinophilic syndrome | Peripheral eosinophilia >1500 with multi-organ involvement |
| Pill esophagitis | History of medication, focal injury |
| [[infectious-esophagitis\|Infectious esophagitis]] (Candida, HSV) | Immunocompromise, systemic symptoms; biopsy shows organisms |
| [[celiac-disease\|Celiac disease]] | Duodenal findings; anti-TTG; responds to gluten-free diet |
| [[inflammatory-bowel-disease\|IBD]] ([[crohns-disease\|Crohn's]]) | Perianal, small bowel involvement; [[colonoscopy]] findings |
| Drug hypersensitivity | Temporal association with new medication |

---

## Diagnostics

![[eoe-2025-diagnosis-algorithm-06.png|700x462]]
*Figure 1 — Diagnostic algorithm for EoE. EGD, esophagogastroduodenoscopy; EGID, eosinophilic gastrointestinal disease; EREFS, EoE Endoscopic Reference Score; GERD, [[gerd|gastroesophageal reflux disease]]. ([[acg-2025-eoe]])*

### Endoscopy with Biopsies (required)

- **≥6 biopsies** from **≥2 levels** (proximal + distal esophagus)
- Both levels needed — patchy distribution can cause sampling error
- Score EREFS at every endoscopy
- Biopsy normal-appearing mucosa — histology may be positive despite normal endoscopy
- **Esophagram:** consider if fibrostenotic features or when preparing for dilation; more sensitive than endoscopy for stricture detection

### Diagnostic Workup Sequence

1. [[upper-endoscopy|Upper endoscopy]] + biopsies (≥2 levels, ≥6 total)
2. PPI trial × 8–12 weeks → repeat endoscopy
   - If remission on PPI → diagnose EoE (PPI-responsive subset)
   - If persistent eosinophilia → diagnose EoE; proceed to treatment
3. Exclude other causes (see DDx above) before finalizing diagnosis

### Tests NOT Recommended

- **Serum IgE, IgG food panels** — do NOT order; do not predict EoE food triggers
- **Skin prick testing / patch testing** — do NOT use to direct dietary elimination
- EoE is a delayed-type hypersensitivity (IgE-independent)

---

## Therapeutics

![[eoe-2025-management-algorithm-09.png|700x393]]
*Figure 3 — Management algorithm for EoE. After diagnosis, all patients are treated with anti-inflammatory therapy and assessed for fibrostenosis; shared decision-making guides choice between pharmacologic and dietary elimination approaches. ([[acg-2025-eoe]])*

### Treatment Goals

- Symptom resolution
- Endoscopic remission (EREFS ≤2)
- Histologic remission (<15 eos/hpf)
- Prevent fibrostenosis and food impactions
- Pediatric: normal growth and feeding development

### First-Line Options (choose 1; equal standing)

**1. PPI**

- Mechanism: anti-inflammatory (beyond acid suppression)
- **Dose = double the approved reflux dose** ([[acg-2025-eoe]] Table 6). ACG could not recommend a specific PPI agent (trials mixed omeprazole/esomeprazole/rabeprazole/lansoprazole at varying doses):

| Population | Initial dosing |
|---|---|
| Adults | Double the approved reflux dose per day — e.g. **omeprazole 20 mg b.i.d. or 40 mg daily**, or other PPI equivalent |
| Children | **2 mg/kg/day** (or **1 mg/kg b.i.d.**) |

- **Split the dose — this is the decision, not a detail.** In 305 newly diagnosed patients (overall histologic remission 42.3%), remission was **53–54% with omeprazole 20–40 mg twice daily vs only 10–12% with 20–40 mg once daily** (P<0.0001). ACG still permits once-daily or divided dosing on adherence grounds because "dosing efficacy data are variable," but the once-daily arm performs far worse in the one cohort that compared them.
- Duration: 8–12 weeks → endoscopy with biopsies
- Histologic remission **50.5%** (95% CI 42.2–58.7) in the 2016 meta-analysis of 33 studies
- Maintain indefinitely if effective; 70–85% sustain response at 1y
- **Stepping down to once daily after remission:** ~30% of initial responders relapsed but regained histologic remission on re-escalation to twice daily; a separate prospective cohort found >80% maintained remission after step-down. Re-scope if you step down.

**2. Topical Steroids (STC)**

- Histologic remission 60–70%
- **Total daily dose ranges** ([[acg-2025-eoe]] Table 6):

| Agent | Children | Adults |
|---|---|---|
| Budesonide (any formulation) | **1–2 mg/day** (by age/height/weight; may be divided b.i.d.) | **2–4 mg/day** (may be divided b.i.d.) |
| Fluticasone (swallowed MDI, off-label) | **110–880 µg/day** in a divided dose | **1,760 µg/day** in a divided dose |

- **Budesonide oral suspension (BOS):** approved dosing **2 mg b.i.d.** — FDA-approved 2024 ✓
- **Budesonide orodispersible tablet (BOT):** 1 mg b.i.d. — EMA-approved ✓
- Off-label viscous budesonide is compounded to the same total daily dose. **How to compound it** ([[acg-2025-eoe]] Table 6, footnote): when an asthma preparation is adapted for EoE, mix the **aqueous budesonide to a syrup-like consistency** with sucralose, honey, maple syrup or similar, to a **goal total volume ~10 mL**
- Side effects: candidal esophagitis (4–24%); adrenal insufficiency uncommon — identified in **≤5%** in induction trials — test cortisol with long-term multi-steroid use
- Check response at 8–12 weeks
- Dose reduction acceptable after remission (BOT 0.5mg bid effective for maintenance)

**3. Dietary Elimination**

- Step-up preferred (minimizes endoscopies, avoidance burden):

| Step | Diet | Efficacy |
|---|---|---|
| 1 | 1FED (dairy only) | 35–45% |
| 2 | 2FED (dairy + wheat) | 40–45% |
| 3 | 4FED (dairy, wheat, egg, soy) | 40–50% |
| 4 | 6FED (dairy, wheat, egg, soy, nuts, seafood) | 40–70% |
| Salvage | Elemental formula | >90% |

- After histologic response: food reintroduction one group at a time × 6–8 weeks + endoscopy each step
- Milk and wheat are most common triggers (60% and 50% respectively)
- Most patients (~69%) have only 1–2 food triggers
- Requires dietitian; allergy consultation if concern for immediate food allergy during reintroduction
- "Diet holidays" bridged with medical therapy can improve long-term adherence

### Second-Line / Refractory

**Dupilumab (anti-IL-4Rα)**

- Indication: PPI nonresponder; moderate-severe EoE
- **Dosing:**

| Weight | Dose | Frequency |
|---|---|---|
| ≥40 kg | 300 mg SQ | Weekly |
| 30–<40 kg | 300 mg SQ | Every 2 weeks |
| 15–<30 kg | 200 mg SQ | Every 2 weeks |

- FDA-approved: ≥12y (2022), 1–11y (≥15kg, 2024)
- 60% histologic remission (≤6 eos/hpf) vs 5% placebo (phase 3 RCT)
- Improves symptoms, EREFS, esophageal distensibility (EndoFLIP)
- No TB/HIV/hepatitis screening required
- Check response at 12–24 weeks
- Cost/access: main barrier; prior auth typically required

**NOT recommended:**

- Omalizumab (anti-IgE): no efficacy; EoE is not IgE-mediated
- Montelukast: not effective in RCT
- Cromolyn: no benefit in RCT
- [[anti-tnf-agents|Infliximab]]/[[vedolizumab]]: case reports only

### Adjunct: Esophageal Dilation

- **Indication:** fibrostenotic EoE + dysphagia despite adequate anti-inflammatory therapy
- **Goal diameter:** ≥16mm (adults/adolescents)
- **Safety:** clinical improvement 95%; perforation <0.5%; hospitalization <1%
- **ALWAYS pair with anti-inflammatory therapy** — dilation does not treat EoE
- Technique: start conservative; work to "dilation effect" (mucosal disruption); use multiple sessions if needed
- Empiric dilation may help even without an endoscopically visible stricture — endoscopy detects a narrowed esophagus with sensitivity of only **14.7%** (specificity 79.2%), rising to just **25%** at a ≤15 mm cutoff; **71%** of patients with no perceived narrowing at endoscopy still responded symptomatically to dilation
- Pediatric: esophagram before dilation to detect unrecognized narrowing
- **After an acute food bolus impaction:** EoE is found in as many as **33%** of food bolus impactions, so take biopsies of the **mid and distal esophagus** at that endoscopy and **defer dilation pending pathology**; use caution after a prolonged impaction ([[asge-2011-foreign-body-ingestion]])

### Maintenance Therapy

- **Continue effective therapy indefinitely** — near-universal relapse when stopped
- Relapse timeline: histologic relapse 78–94% within 1y of stopping STC; symptoms recur within days to months
- Fibrostenotic progression occurs with treatment interruptions
- EoE does not resolve spontaneously (final step in atopic march)
- If switching therapies or dose-reducing: repeat endoscopy with biopsies to confirm maintained remission
- Gaps in care ≥2y → increased risk of fibrostenosis

### Monitoring

**Response assessment:** symptoms + EREFS + biopsies at every monitoring endoscopy

| Therapy | First endoscopy | Goal |
|---|---|---|
| PPI, STC, FED | 8–12 weeks | <15 eos/hpf; EREFS ≤2; symptom resolution |
| Dupilumab | 12–24 weeks | Same |

**"Deep remission":** all 3 domains — symptoms, endoscopy, histology — rarely achieved (<10%)

**If inadequate response:**

1. Confirm adherence (STC technique, diet compliance)
2. Consider switching to another first-line modality
3. Step up to dupilumab if PPI/STC/diet failed
4. Add esophageal dilation if fibrostenotic component
5. Refer to specialty center

**Adrenal function testing:** not routine for short-term STC; consider with long-term use or multiple concurrent corticosteroids.

### Special Populations

**Pediatric:**

- Symptom assessment challenging; EREFS and biopsies remain required for diagnosis and monitoring
- Esophagram recommended before dilation to detect unrecognized strictures
- Feeding dysfunction common (up to 17%); maladaptive behaviors persist even in remission
- Refer to feeding therapist if avoidant-restrictive food intake disorder or feeding dysfunction present
- Growth monitoring (height, weight, BMI) required — failure to thrive in up to 1/3 at presentation
- Topical steroids generally safe; STC as monotherapy rarely causes clinical adrenal insufficiency
- Dupilumab (1–11y, ≥15kg): 68% histologic response (16 weeks); weight-based dosing q2w
- Unsedated transnasal endoscopy: option to minimize [[endoscopy-sedation|sedation]]/anesthesia exposure

---

## See Also

[[dysphagia]], [[gerd]], [[achalasia]], [[infectious-esophagitis]], [[lymphocytic-esophagitis]], [[esophageal-dysfunction-systemic-disease]], [[celiac-disease]], [[barretts-esophagus]], [[inflammatory-bowel-disease]], [[crohns-disease]], [[upper-endoscopy]], [[colonoscopy]], [[proton-pump-inhibitors]], [[flip-panometry]], [[high-resolution-manometry]], [[endoscopy-sedation]], [[ingested-foreign-body]]

---

## Sources

1. [[acg-2025-eoe|ACG 2025: Diagnosis and Management of Eosinophilic Esophagitis]]
2. [[aga-2020-eoe|AGA/JTF Clinical Guideline: Management of Eosinophilic Esophagitis (2020)]]
3. [[acg-2013-eoe|ACG 2013: Esophageal Eosinophilia and Eosinophilic Esophagitis (historical)]]
4. [[aga-2024-esophageal-immunity-infection|AGA Clinical Practice Update on Esophageal Dysfunction Due to Disordered Immunity and Infection: Expert Review (2024)]]
5. [[asge-2011-foreign-body-ingestion|ASGE Guideline: Management of Ingested Foreign Bodies and Food Impactions (2011)]]
