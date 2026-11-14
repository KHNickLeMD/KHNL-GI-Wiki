---
title: "Acute-on-Chronic Liver Failure (ACLF)"
category: disease-script
tags: [ACLF, acute-on-chronic-liver-failure, cirrhosis, organ-failure, ICU, NACSELD, EASL-CLIF, terlipressin, HRS, hepatic-encephalopathy, infection, nutrition, liver-transplantation, palliative-care]
created: 2026-05-28
updated: 2026-11-13
sources: [aasld-2024-aclf, baveno-viii-2026-portal-hypertension, moreau-2013-canonic-aclf, aasld-easl-2026-aclf-global-consensus]
---

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
- [[#Therapeutics]]
  - [[#General ICU Principles]]
  - [[#Brain Failure (Hepatic Encephalopathy)]]
  - [[#Cardiovascular Failure]]
  - [[#Respiratory Failure]]
  - [[#Kidney Failure (HRS-AKI)]]
  - [[#Infection Management]]
  - [[#Precipitant-Specific Treatment]]
  - [[#Coagulopathy]]
  - [[#ACLF and Pre-emptive TIPS]]
  - [[#Nutrition]]
  - [[#Liver Transplantation in ACLF]]
  - [[#Palliative Care]]
- [[#See Also]]
- [[#Sources]]

---

## Assessment

### Establishing the Diagnosis

Acute-on-chronic liver failure (ACLF): acute deterioration in chronic liver disease (CLD) with liver failure, extrahepatic organ dysfunction or failure, systemic inflammation and high short-term mortality. Distinct from [[acute-liver-failure|acute liver failure (ALF)]] (no prior CLD) and from acute decompensation of [[cirrhosis]] without organ failure.

**Harmonised global definition** — the American Association for the Study of Liver Diseases (AASLD), European Association for the Study of the Liver (EASL), Asian Pacific Association for the Study of the Liver (APASL), Latin American (ALEH) and African (SOLDA) societies, 2026 ([[aasld-easl-2026-aclf-global-consensus]]). All three required:

1. **Advanced chronic liver disease (ACLD, ≥F3 fibrosis)** — known cirrhosis/ACLD, or shown by the table below; keeps ALF out (Statement 2, C1)
2. **Liver failure = international normalised ratio (INR) ≥1.5 and bilirubin ≥5 mg/dL** — obligatory; the core of the syndrome (Statements 3–4, B1)
3. **≥1 extrahepatic organ dysfunction or failure** — number sets the grade (Statement 9, B1; criteria and grades under [[#Severity Assessment]])

- **Type A** — compensated ACLD/cirrhosis, no previous or current decompensation; liver failure plus **new-onset [[ascites]] and/or [[hepatic-encephalopathy|hepatic encephalopathy (HE)]]** at presentation or **within 2–4 weeks** (Statements 5–6, A1)
- **Type B** — prior decompensated cirrhosis (Statement 5, A1)

**Establishing ACLD when cirrhosis is not already known** (2026 Table 1):

| Route | Criteria |
|---|---|
| Biopsy | F3 or F4 fibrosis (METAVIR) |
| Elastography | Vibration-controlled transient elastography (VCTE), magnetic resonance elastography (MRE) or shear wave elastography (SWE) at validated ≥F3 thresholds |
| Imaging | Portal hypertension on ultrasound, computed tomography (CT) or magnetic resonance imaging (MRI): varices, collaterals/shunts, splenomegaly |
| Clinical | Hepatosplenomegaly, spider angiomata, clinically detectable ascites — supported by imaging or endoscopic portal hypertension |

> [!pitfall] Elastography can fake ACLD in acute injury
> Acute liver injury raises stiffness into the ACLD range. Never use non-invasive tests alone to establish ACLD or to separate ACLF from ALF — integrate all clinical, laboratory, imaging and histological data ([[aasld-easl-2026-aclf-global-consensus]]).

**Earlier definitions — still in the literature and in some decisions:**

- **AASLD 2024 minimum definition (guidance statement [GS] 1):** acute onset with rapid deterioration + liver failure (elevated bilirubin and INR, unquantified) in CLD with or without cirrhosis + ≥1 extrahepatic organ failure (neurologic, circulatory, respiratory, renal) ([[aasld-2024-aclf]])
- The 2026 definition differs: liver failure is now **obligatory and quantified**, ≥F3 fibrosis is required, and a **dysfunction** tier allows earlier diagnosis.

**Regional definitions the 2026 consensus harmonises:**

| Definition | Applicable stage | Organ failure criteria |
|---|---|---|
| **North American Consortium for the Study of End-Stage Liver Disease (NACSELD)** | Advanced/preterminal | ≥2 extrahepatic organ failures (OFs): cardiovascular (shock), renal (renal replacement therapy [RRT]), respiratory (mechanical vent), brain (HE Grade 3–4) |
| **EASL–Chronic Liver Failure Consortium (EASL-CLIF)** | Earlier onset; grades ACLF-1, -2, -3 | Six organ systems, each with its own cut-off on the chronic liver failure–sequential organ failure assessment (CLIF-SOFA) score — criteria and grade definitions immediately below |
| **APASL** | Early; includes non-cirrhotic CLD | Acute hepatic insult + liver failure (bilirubin [Bi] ≥5, INR ≥1.5) + coagulopathy + clinical features ≤4 weeks in previously diagnosed or undiagnosed CLD; high sensitivity, lower specificity |

**EASL-CLIF organ failure — the CLIF-SOFA cut-offs** ([[moreau-2013-canonic-aclf|CANONIC]], Table 1). Each system scores 0–4; organ failure is the top of the range:

| System | Organ failure |
|---|---|
| Liver | total bilirubin **≥12.0 mg/dL** |
| Kidney | serum creatinine (sCr) **≥2.0 mg/dL**, or RRT at any creatinine |
| Brain | HE **grade III–IV** |
| Coagulation | INR **≥2.5**, **or platelets ≤20×10⁹/L** |
| Circulation | **any vasopressor** (dopamine, dobutamine, [[terlipressin]], epinephrine or norepinephrine) |
| Lungs | partial pressure of arterial oxygen (PaO₂)/fraction of inspired oxygen (FiO₂) **≤200**, or peripheral oxygen saturation (SpO₂)/FiO₂ **≤214** |

**EASL-CLIF grade — the numeric definitions (drives the terlipressin decision, GS 25):**

| Grade | Definition | 28-d / 90-d mortality (CANONIC derivation) |
|---|---|---|
| **No ACLF** | no organ failure · **or** a single *non-kidney* organ failure with sCr <1.5 mg/dL and no HE · **or** single brain failure with sCr <1.5 mg/dL | 4.7% / 14% |
| **ACLF-1** | single **kidney** failure · **or** single failure of liver, coagulation, circulation or respiration **plus** sCr 1.5–1.9 mg/dL and/or HE grade I–II · **or** single **brain** failure **plus** sCr 1.5–1.9 mg/dL | 22.1% / 40.7% |
| **ACLF-2** | **2 organ failures** | 32.0% / 52.3% |
| **ACLF-3** | **≥3 organ failures**; terlipressin contraindicated | 76.7% / 79.1% |

> [!pitfall] One organ failure can still be ACLF
> Counting organ failures alone misgrades ACLF-1. A **sub-threshold** creatinine (1.5–1.9 mg/dL) or **mild-to-moderate HE (grade I–II)** — neither of which is itself an organ failure — upgrades a single non-kidney organ failure into ACLF-1, and roughly triples 28-day mortality (single liver failure **5.9% → 30.3%**). **Single kidney failure is ACLF-1 on its own**, with or without a modifier ([[moreau-2013-canonic-aclf]]).

**Pre-ACLF:** Subgroup of decompensated cirrhosis at higher risk of developing ACLF (higher C-reactive protein (CRP), white blood cell count (WBC), Model for End-Stage Liver Disease (MELD)); characterized by progressive increase in severity scores. No individual biomarker predicts ACLF development.

**Common precipitating events (~48% infection-related):** Bacterial infection ([[spontaneous-bacterial-peritonitis|spontaneous bacterial peritonitis (SBP)]], urinary tract infection (UTI), pneumonia, bacteremia), [[alcohol-associated-hepatitis|alcohol-associated hepatitis]], [[variceal-upper-gi-bleeding|gastrointestinal (GI) bleeding]], procedural complications, drug/hepatotoxin exposure, viral hepatitis flares. Often precipitant is not identified. The 2026 consensus adds major surgery/invasive procedures and states that triggers may be hepatic or extrahepatic (Statement 8, A1); alcohol is the leading cause worldwide.

**[[baveno-viii-2026-portal-hypertension|Baveno VIII]] names the same precipitants from the [[portal-hypertension|portal-hypertension]] side, and adds surgery:**

- **Superimposed acute liver injury** — alcohol-related hepatitis, acute hepatitis E virus (HEV)/hepatitis A virus (HAV)/hepatitis B virus (HBV), HBV flares, **[[autoimmune-hepatitis|autoimmune hepatitis]]**, or **[[drug-induced-liver-injury|drug-induced liver injury (DILI)]]** — can precipitate decompensation **and/or ACLF** in compensated cirrhosis/compensated ACLD (cACLD) (3.7)
- **Bacterial infections** do the same in compensated patients **with clinically significant portal hypertension (CSPH)** (3.10); their prognostic impact **without** CSPH is unclear (3.11)
- **Surgery, especially major surgery, can precipitate ACLF** in patients with CSPH, **with risk rising as portal hypertension becomes more severe** (3.13, new). **Pre-operative [[tips|transjugular intrahepatic portosystemic shunt (TIPS)]] may be considered before major surgery** to reduce that risk (3.20b)

### Severity Assessment

**2026 organ dysfunction and failure** (Table 2; Statements 11–14) — the grading inputs under the harmonised definition:

| Organ | Dysfunction | Failure |
|---|---|---|
| Liver | — | Bilirubin ≥5 mg/dL **and** INR ≥1.5 (required for every grade) |
| Kidney | Acute kidney injury (AKI) stage 1 (Kidney Disease: Improving Global Outcomes [KDIGO]) | **AKI stage 2–3 (KDIGO)** or new RRT (A1) |
| Brain | West Haven grade 2 | **West Haven 3–4**, or mechanical ventilation for HE (A1) |
| Circulation | Mean arterial pressure (MAP) <65 mmHg* | **Vasopressor use** — not when given only for hepatorenal syndrome–AKI (HRS-AKI) (B1) |
| Respiration | 225 < PaO₂/FiO₂ ≤300, or 244 < SpO₂/FiO₂ ≤333* | **Mechanical ventilation** for respiratory failure, **PaO₂/FiO₂ ≤225**, or SpO₂/FiO₂ ≤244 (B1) |

*\*Assessed only in high-dependency or intensive care unit (ICU) settings; MAP needs continuous monitoring (Statement 15, C1). No dysfunction = no AKI, West Haven 0–1, MAP ≥65, PaO₂/FiO₂ >300 or no supplemental oxygen. Immune and gut failure are not yet defined (Statement 16).*

**2026 grade** (Statement 10, B1):

| Grade | Liver failure plus… |
|---|---|
| **1** | **one extrahepatic organ dysfunction** (circulatory/respiratory dysfunction counts only in a monitored setting) |
| **2** | **any one extrahepatic organ failure** |
| **3** | **≥2 extrahepatic organ failures** |

*Validated against short-term mortality in several prospective international cohorts; the consensus does not print grade-specific mortality.*

> [!pitfall] 2026 grades ≠ EASL-CLIF grades
> Same numbers, different rules: EASL-CLIF ACLF-3 needs ≥3 organ failures with liver and coagulation counted as organs; 2026 grade 3 needs liver failure plus ≥2 extrahepatic failures. **Terlipressin's contraindication is written against EASL-CLIF ACLF-3** (GS 25) — grade with CLIF-SOFA for that decision.

**ACLF-specific prognostic scores outperform MELD/MELD-Na for short-term mortality (GS 2; 2026 Statement 39, B1):**

*Read the discrimination figures with their outcome — the scores were not all validated against the same endpoint (Table 2).*

| Score | Key variables | Outcome validated against | Discrimination |
|---|---|---|---|
| NACSELD-ACLF | MELD + OFs (cardiovascular, renal, respiratory, brain) + age + WBC + albumin | 30-day survival | area under the curve (AUC) 0.80 (training), 0.85 (validation) |
| CLIF-C ACLF | Hepatic + extrahepatic OFs + age + WBC | 28-day mortality | C index 0.76 (derivation), 0.744 (validation) — 0.73 at 90 d, 0.71 at 1 y |
| APASL ACLF Research Consortium (AARC) | Bi + creatinine + INR + lactate + HE grade | 28-day mortality | AUC 0.80 (derivation), 0.78 (validation) |
| MELD-LA (MELD + lactate) | MELD + serum lactate | In-hospital mortality | C index 0.81 (derivation), 0.85 / 0.82 (validation cohorts) |

2026 score notes: CLIF-C ACLF = most extensively validated; NACSELD omits liver and coagulation, may underestimate mortality and may suit futility decisions; AARC is liver-failure-based with lactate; **Chinese Group on the Study of Severe Hepatitis B (COSSH) score is specific to HBV-related ACLF**; SOFA 2.0 and A-TANGO not yet externally validated.

**Serial scoring (GS 3; 2026 Statement 40, B1 — serial beats baseline):** CLIF-C ACLF at Days 3–7 is an independent predictor of mortality regardless of initial grade. **In ACLF-3 specifically**, 90-day mortality was **40% if the patient improved by Day 3 vs 79% if not** — the qualifying population matters; the figures are not a general ACLF statistic.

**Futility — time-limited ICU trial (2026 Statements 52–53, C2):** don't refuse ICU on the initial presentation alone (reversible precipitants such as infection or GI bleeding can recover). Non-transplant candidates → case-by-case, ideally a time-limited trial with palliative care alongside; **reassess at day 3–7**. **AARC >10, persistent multiorgan failure, or CLIF-C ACLF >64 despite maximal therapy** → further escalation unlikely to help → structured transition to [[palliative-care-in-cirrhosis|palliative care]].
- *Older threshold:* AASLD 2024 uses CLIF-C ACLF score >70 (range 0–100) at admission or Day 3 → ~90% 90-day mortality; lactate >9 mmol/L is likewise an absolute-contraindication-level pre–liver transplantation (LT) factor. The 2026 cut-off (>64, after maximal therapy) is lower and newer. Among patients with **≥4 organ failures at Days 3–7 after an ACLF-3 diagnosis** (CANONIC): **28-day mortality 90%, 90-day mortality 100%** (100% at 90 days once CLIF-C ACLF >64).

**30-day mortality by EASL-CLIF grade** (CLIF-SOFA *validation* cohort): no ACLF **3%**, ACLF-1 **10%**, ACLF-2 **37%**, ACLF-3 **76%**. These are a different window and a different cohort from the 28-/90-day derivation figures beside the grade definitions above — not a disagreement.

---

## Differential Diagnosis

*Workup: see [[abnormal-liver-chemistries]] for the aetiologic liver-test evaluation.*

- Acute decompensation without ACLF — [[ascites]]/HE/acute variceal hemorrhage (AVH) without extrahepatic organ failure; lower mortality
- [[acute-liver-failure]] — no prior CLD; INR ≥1.5 + any degree HE; different prognosis/management; King's College Criteria for LT
- Sepsis-associated organ dysfunction without ACLF — can mimic and precipitate ACLF; diagnose both concurrently
- Primary organ failure of non-hepatic origin — e.g., acute respiratory distress syndrome (ARDS) from pneumonia in a cirrhotic patient; hepatic dysfunction secondary to critical illness

---

## Diagnostics

| Test | Purpose |
|---|---|
| Aspartate aminotransferase (AST), alanine aminotransferase (ALT), bilirubin, albumin, INR | Liver failure parameters; [[cirrhosis\|Child-Pugh/MELD]] |
| Creatinine, blood urea nitrogen (BUN), urinalysis + urine culture | Renal failure staging; HRS-AKI vs. acute tubular necrosis (ATN) |
| Complete blood count (CBC) | Cytopenias, thrombocytopenia, WBC (NACSELD score) |
| Lactate | Prognostic (MELD-LA, CLIF-C ACLF lactate); severity of tissue hypoperfusion |
| Blood cultures × 2, urine culture, sputum culture, [[paracentesis]] (ascites polymorphonuclear (PMN) count + culture) | Full septic workup in every hospitalised ACLF (GS 29; 2026 Statement 50, B1) |
| Chest X-ray | Pneumonia, pulmonary edema, [[hepatic-hydrothorax\|hepatic hydrothorax]] |
| CLIF-C ACLF, NACSELD-ACLF, AARC scores | Serial prognostic assessment (GS 2–3) |
| Bedside transthoracic echocardiography (TTE)/point-of-care ultrasonography (POCUS) | Volume status, cardiac function, inferior vena cava (IVC) diameter/compressibility, right ventricular (RV)/left ventricular (LV) function (GS 13) |
| Liver ultrasound + Doppler | [[portal-vein-thrombosis\|portal vein thrombosis (PVT)]], [[hepatocellular-carcinoma\|hepatocellular carcinoma (HCC)]], [[ascites]], portal hemodynamics |
| Electroencephalogram (EEG) (if needed) | Non-convulsive seizures in obtunded patients |

---

## Therapeutics

### General ICU Principles

Critically ill patients with cirrhosis and ACLF require multidisciplinary ICU care. Simultaneous: organ-specific management + early [[liver-transplantation|LT]] evaluation + palliative care consult (Figure 5) [[aasld-2024-aclf]].

### Brain Failure (Hepatic Encephalopathy)

**Grading:** West Haven criteria (Grade 1–4; full grade descriptors on [[hepatic-encephalopathy]]) + Glasgow coma scale (GCS). **2026 (Statement 41, C1): West Haven 3–4 or GCS <12 = severe impairment with aspiration risk → ICU where possible; GCS <9 → consider intubation.** AASLD 2024 used GCS <8 as severe (GS 4) and ICU for Grade 3–4 HE (GS 5). The 2026 consensus prefers the term "acute encephalopathy" — another cause is found in up to one-quarter of suspected HE.

**Management (GS 6–11):**

- Identify and treat precipitating factors (infection, GI bleed, AKI, constipation, electrolytes, medications) (GS 6)
- Workup for non-HE causes of altered mental status (AMS): alcohol withdrawal, structural injury, metabolic — especially first episode or treatment non-response (GS 7)
- **[[lactulose|Lactulose]]** first-line (rectal if gut motility impaired) or **polyethylene glycol** (if ileus risk) (GS 8). [[rifaximin|Rifaximin]] added to broad-spectrum antibiotics is not supported for reversing overt HE in critically ill ACLF (2026). IV L-ornithine L-aspartate + lactulose + rifaximin improved HE grade, recovery and 28-day mortality in grade 3–4 HE, but is unavailable in many countries
- **Sedation/analgesia:** short-acting agents (propofol, dexmedetomidine, remifentanil) (GS 9; 2026 Statement 42, B1); avoid benzodiazepines, gabapentin, opioids when possible; titrate to minimum with regular interruptions; dexmedetomidine reduces ventilation duration and benzodiazepine need in alcohol withdrawal
- **Routine head CT:** not warranted for typical HE presentations; indicated for first episode AMS, seizures, focal neuro signs, or HE not responding to therapy (GS 10)
- **Ammonia — guidance conflicts:** AASLD 2024 GS 11 does not recommend routine ammonia. The newer 2026 consensus includes **blood ammonia in the workup**: a **normal level makes HE unlikely → look for another cause** (sepsis, stroke, intracranial bleed, metabolic, drugs/alcohol)

### Cardiovascular Failure

**Pathophysiology:** Hyperdynamic circulation (low systemic vascular resistance (SVR), high cardiac output (CO)) in cirrhosis; exacerbated by systemic inflammation in ACLF.

**Assessment (GS 12–13):**

- Early baseline assessment of volume status, perfusion, cardiac function (GS 12)
- Bedside TTE/POCUS for volume status + cardiac function in hypotension/shock (GS 13); 2026 extends **bedside echocardiography to all critically ill cirrhosis/ACLF** (Statement 45, C1) — look for cirrhotic cardiomyopathy (pulmonary oedema risk with fluids)

**Fluid resuscitation (GS 14):**

- Judicious strategy with hemodynamic monitoring to avoid overresuscitation
- **Balanced crystalloids** (lactated ringers) preferred; [[albumin]] for select indications (SBP, HRS-AKI fluid challenge, paracentesis-induced circulatory dysfunction)
- No benefit from targeting specific albumin serum levels (ATTIRE trial: no improvement in composite primary endpoint)
- 2026 (Statement 46, B1): shock → **balanced crystalloids + albumin only for established indications** (large-volume paracentesis, SBP, HRS-AKI); albumin not supported for routine initial resuscitation — pulmonary oedema/fluid overload, especially 20% albumin

**Vasopressors (GS 15–17):**

- Target MAP ≥65 mm Hg with ongoing end-organ perfusion assessment (GS 15); individualized — use mental status, capillary refill, urine output, lactate to guide
- **Norepinephrine (0.01–0.5 mcg/kg/min): first-line vasopressor** (GS 16)
- **Vasopressin: second-line** when increasing norepinephrine doses required (GS 16; 2026 Statements 47–48, B1 — same order, MAP ≥65 mmHg; higher targets not better in randomised data)
- **Hydrocortisone** (50 mg intravenous (IV) q6h or 200 mg infusion × 7 days or until ICU discharge): consider for relative adrenal insufficiency screening or empiric treatment of refractory shock requiring high-dose vasopressors (GS 17); relative adrenal insufficiency (~49% in non-critically ill cirrhosis hospitalizations). 2026: escalating norepinephrine → start vasopressin **and** consider an empiric IV hydrocortisone trial (Statement 48, B1)
- Extracorporeal cytokine removal: no proven benefit, not routine (2026)

### Respiratory Failure

**Cirrhosis-specific respiratory complications (GS 18):**

- Hepatic hydrothorax, tense ascites → respiratory compromise → therapeutic thoracentesis/paracentesis (GS 18)
- [[hepatopulmonary-syndrome-portopulmonary-hypertension|hepatopulmonary syndrome (HPS)/portopulmonary hypertension (POPH)]]: assess in ICU for contribution to hypoxemia
- POPH: monitor for RV dysfunction; pulmonary vasodilators (inhaled nitric oxide, epoprostenol) may be needed; [[tips|TIPS]] generally contraindicated in POPH (worsens hepatic decompensation)

**Respiratory support (GS 19–22):**

- **High-flow nasal cannula (HFNC)** for acute hypoxemic respiratory failure; close monitoring for escalation (tachypnea, refractory hypoxemia) (GS 19). 2026: only if **alert and protecting the airway** (Statement 44, C1); must not delay intubation — in ARDS a brief trial reassessed every 1–2 h; ROX index to spot failure
- **Mechanical ventilation for non–acute lung injury (ALI) reasons:** lung-protective strategy, low plateau pressures, 6–10 mL/kg predicted body weight (PBW), spontaneous breathing when possible (GS 20)
- **Mechanical ventilation for ALI/ARDS:** low tidal volume 6 mL/kg PBW, plateau <30 cm H₂O (GS 21). 2026 (Statement 43, C1): **4–6 mL/kg PBW, plateau <30 cm H₂O, optimal positive end-expiratory pressure (PEEP), plus spontaneous breathing** for acute lung injury
- **PEEP strategy:** low PEEP for mild ALI (PaO₂/FiO₂ 200–300; minimize preload impairment); high PEEP may be needed for moderate-severe ALI (PaO₂/FiO₂ <200 mm Hg) (GS 22)

### Kidney Failure (HRS-AKI)

**Diagnosis:** HRS-AKI = increase in sCr ≥0.3 mg/dL within 48h OR ≥50% from baseline, in patients with cirrhosis + ascites, after ≥2 days of diuretic withdrawal + volume expansion (albumin 1 g/kg/day up to 100 g/day × 48h), absence of shock/nephrotoxic drugs/parenchymal renal disease (Table 3). Most common extrahepatic organ failure in ACLF (29–75% depending on definition).

**Management (GS 23–28):**

- Withdraw diuretics; treat precipitants (infection, GI bleed); volume challenge with **albumin 1 g/kg up to 100 g/day × 48h** (GS 23)
- If meets HRS-AKI criteria after albumin challenge:
  - **Vasoconstrictors + albumin (20–40 g/day)** for [[aki-in-cirrhosis|International Club of Ascites–acute kidney injury (ICA-AKI)]] Stage 2+ HRS-AKI without contraindications (GS 24) — ICA-AKI stage definitions on [[aki-in-cirrhosis]]
  - **Terlipressin (0.5–2.0 mg IV q6h, or continuous infusion starting at 2 mg/24h):** indicated for Stage 2+ [[aki-in-cirrhosis|HRS-AKI]] without ACLF-3 (EASL-CLIF) or major cardiopulmonary/vascular disease (GS 25). Contraindicated in ACLF-3 due to CONFIRM trial respiratory failure signal. *AASLD 2024 GS 25 prints the infusion dose as "2 g/24h"; every other source gives it in **milligrams** — use 2 mg/24h.*
  - **Norepinephrine:** alternative to terlipressin; preferred in shock (GS 26)
  - Midodrine + [[somatostatin-analogs|octreotide]]: inferior to terlipressin continuous infusion; acceptable in non-ICU setting
- **RRT:** individualized; recommended for HRS-AKI failing pharmacotherapy in patients listed or being considered for LT (GS 27; 2026 Statement 49, B1); continuous RRT preferred in hemodynamically unstable patients; no preemptive benefit; HRS-AKI and ATN are a spectrum; no routine intraoperative RRT, and no RRT for hyperammonaemia alone without AKI (2026)
- **LT is definitive treatment** for HRS-AKI; consider in context of multiorgan failure and LT candidacy (GS 28). Simultaneous liver-kidney transplant for prolonged RRT (>6 weeks) or sCr persistently elevated post-LT

### Infection Management

Infection is the most common precipitant of ACLF (~48%). Every hour delay in antibiotics increases multiorgan failure/mortality by 1.86×.

**Initial workup (GS 29–30):**

- Full infection screen at admission: diagnostic paracentesis + blood cultures × 2 + urinalysis/urine culture + chest X-ray (GS 29); 2026 adds **sputum culture** and early appropriate antibiotics (Statement 50, B1)
- Multidrug-resistant (MDR) organism colonisation screening (rectal/nasal swabs) where available, to guide empiric therapy and de-escalation; procalcitonin has limited value in cirrhosis; prolonged organ failure/ICU → consider empirical antifungals; on steroids → consider cytomegalovirus (CMV) or herpes simplex virus (HSV) reactivation (2026)
- Repeat workup with any clinical deterioration: new/worsening ascites, HE, AKI, organ failure, or ACLF grade increase (GS 30)

**Antibiotic principles (GS 31–33):**

- Choose antibiotics based on etiology, severity, mode of acquisition (community vs. healthcare-associated vs. nosocomial), and local resistance patterns (GS 31)
- **Minimize [[proton-pump-inhibitors|proton pump inhibitor (PPI)]] use and Foley catheters** to prevent nosocomial infections (GS 32)
- If nosocomial infection not responding to antibiotics after 48h → broaden for MDR organisms and/or fungal infection (GS 33)

**MDR organisms:** Account for ≥40% of culture-positive infections in ACLF; MDR rate ~34% worldwide (highest in Asia). Resistance to first-line community antibiotics up to 75% in culture-negative nosocomial infections.

**Fungal infections:** 2–16% of ACLF; almost always nosocomial; risk: high MELD, prior bacterial infection, ICU admission. 1,3-β-D-glucan + polymerase chain reaction (PCR) improves invasive aspergillosis detection. 30-day mortality: ~30% with fungal infection.

**Infection prevention (Table 5):** Stop PPIs unless clear indication; remove Foley catheters; ensure vaccinations (HAV, HBV, coronavirus disease 2019 (COVID-19), influenza, pneumococcal, herpes zoster, tetanus-diphtheria-acellular pertussis (Tdap)); aspiration precautions (avoid benzodiazepines, opioids when possible; paracentesis for tense ascites before procedures).

### Precipitant-Specific Treatment

**Alcohol-related hepatitis with ACLF** (2026 Statements 17–22): **no corticosteroids in grade 3**; with 2 organ failures response is ~40% → case-by-case; Lille at days 4 and 7; no minimum abstinence before early LT — full rules on [[alcohol-associated-hepatitis]].

**Drug/herb-induced (DILI/HILI) ACLF** (Statements 23–30): up to 10% of ACLF. **Stop the offending agent immediately** (C1); antidotes by agent (table on [[drug-induced-liver-injury]]); bilirubin and lactate are independent prognostic factors; **early transplant-centre referral**, urgently if grade 2–3 fails to improve after withdrawal (A1).

**Viral-triggered ACLF** (Statements 31–38):
- **Test immediately** for HAV, HBV, hepatitis C virus (HCV), hepatitis D virus (HDV), HEV (B1); then CMV, Epstein-Barr virus (EBV), HSV, SARS-CoV-2, dengue, yellow fever by context and region (B1)
- **Start antivirals within 24 h of aetiological confirmation** (B1):
  - HBV → entecavir, tenofovir disoproxil fumarate or tenofovir alafenamide, long term ([[chronic-hepatitis-b]])
  - HCV → pangenotypic direct-acting antivirals; **avoid protease-inhibitor regimens** ([[hepatitis-c]])
  - HDV → consider HDV therapy where approved; bulevirtide not approved for decompensated cirrhosis ([[hepatitis-d]])
  - HEV → ribavirin may be considered, duration by serial RNA
  - CMV → ganciclovir; HSV → aciclovir; EBV → limited evidence; cytopenias → screen for haemophagocytic lymphohistiocytosis (ferritin, triglycerides)
  - HAV, dengue, yellow fever → supportive only; SARS-CoV-2 → avoid nirmatrelvir/ritonavir in decompensated cirrhosis
- Don't change therapy on early viral-load kinetics alone (C2); **don't delay LT to reach viral suppression** (B1)

### Coagulopathy

**INR does NOT reflect true hemostatic status in cirrhosis** — [[cirrhosis-hemostasis|rebalanced hemostasis]]; INR captures only procoagulant depletion, not anticoagulant protein depletion (GS 35).

**Thromboelastography (TEG)/rotational thromboelastometry (ROTEM):** Global hemostasis assessment; better reflects true clotting in cirrhosis; can guide transfusions and reduce unnecessary blood product use (GS 34; not yet clinically validated in ACLF). 2026 Statement 51 (B1) agrees: may reflect haemostasis better than INR, activated partial thromboplastin time, fibrinogen and platelets, but needs validation; **not for guiding venous thromboembolism prophylaxis**.

**Transfusion guidance:**

- Low bleeding rates for paracentesis (0–3.3%) and thoracentesis (~2%) in decompensated cirrhosis; routine preprocedural coagulation correction not required
- When correction needed: 4-factor prothrombin complex concentrate or cryoprecipitate preferred over fresh frozen plasma (FFP)
- Therapeutic anticoagulation: similar nonportal hypertensive bleeding rates vs. general population; case-by-case for platelet <50 (GS 36)

### ACLF and Pre-emptive TIPS

> **ACLF does not disqualify a patient from pre-emptive [[tips|TIPS]] after [[variceal-upper-gi-bleeding|acute variceal bleeding]].** [[baveno-viii-2026-portal-hypertension|Baveno VIII]] 5.33 (level of evidence [LoE] 3, strong): in patients who meet the pre-emptive TIPS criteria, **ACLF, overt [[hepatic-encephalopathy|HE]], hyperbilirubinaemia, MELD score, and severe [[alcohol-associated-liver-disease|alcohol-related hepatitis]] should not be considered absolute contraindications.** Baveno VIII adds MELD and severe alcohol-related hepatitis to the shorter Baveno VII list. The criteria themselves (Child-Pugh C 10–13; or Child-Pugh B >7 with active bleeding; or [[hepatic-venous-pressure-gradient|hepatic venous pressure gradient (HVPG)]] ≥20 mmHg) are on [[variceal-upper-gi-bleeding]].
>
> Baveno VIII 5.37 separately **withdraws the numeric salvage-TIPS futility rule** (previously Child-Pugh ≥14, or MELD >30 with lactate >12 mmol/L) — salvage TIPS is now discussed case-by-case regardless of age, Child-Pugh, and MELD. In a critically ill ACLF patient this removes the score-based exclusion, but not the clinical judgement; note also that MELD is **not** the right prognostic tool in critical illness (GS above — use NACSELD, CLIF-C, or AARC).

### Nutrition

[[nutrition-in-liver-disease|Malnutrition]] and sarcopenia are extremely common in ACLF and independently predict mortality. **Protein restriction is NEVER indicated (GS 42).**

| Parameter | Recommendation |
|---|---|
| Early nutrition support team involvement | GS 37 — early involvement in all ACLF hospitalizations |
| Nutrition risk assessment | **Nutrition Risk in the Critically Ill (NUTRIC) score** at ICU admission (GS 38) — six-factor point table and its high/low bands on [[nutrition-in-hospitalized-patients\|NUTRIC scoring]] |
| Energy requirements | Indirect calorimetry preferred; predictive equations if unavailable (GS 39) |
| Weight for calculations | **Ideal body weight (IBW)** (not actual) for predictive equations in cirrhosis (GS 40) |
| Initial caloric goal | 12–25 kcal/kg IBW; evolve to higher targets as clinical course improves (GS 41) |
| Protein goal | **1.2–2.0 g/kg IBW/day** (GS 42) |
| Route | **[[enteral-access\|Enteral nutrition (EN)]] preferred** over parenteral nutrition (PN); start as soon as resuscitation complete and off high-dose vasopressors (GS 43) |
| Hold EN when | Vasopressor support >0.15 mcg/kg/min norepinephrine (GS 44) |
| Refeeding syndrome monitoring | K, Mg, PO₄ + electrocardiogram (ECG) monitoring after EN initiation (GS 45) |
| Glucose target | **140–180 mg/dL** (7.8–10 mmol/L); avoid tight glycemic control (hypoglycemia risk) (GS 46) |

> ⚠ **Scoring NUTRIC needs two scores not carried on this site.** [[aasld-2024-aclf]] names NUTRIC without printing it; the point table linked above is complete, but two of its six factors are **Acute Physiology and Chronic Health Evaluation (APACHE) II** and **baseline SOFA** — compute those from the published instruments. The cirrhosis-specific tools that *are* fully quantified here (Liver Frailty Index, CT skeletal muscle index, Karnofsky Performance Status [KPS]) are on [[nutrition-in-liver-disease]], but AASLD does not substitute them for NUTRIC in the ICU.

### Liver Transplantation in ACLF

**LT candidacy (GS 47–48; 2026 Statements 54–62):**

- Expedited LT for selected patients with ACLF/critical illness may be indicated; no single predictor defines acceptable outcomes (GS 47). 2026: severe ACLF → **expedited multidisciplinary assessment and rapid LT** (B1); ideal goal **transplant within one week**; MELD underestimates death risk (C2)
- **Futility:** Base decisions on LT candidacy, available resources, and potential reversibility of ACLF (GS 48)
- **Offer LT only with expected 1-year survival >75–80%** (2026 Statement 58, B1); selected EASL-CLIF ACLF-3 achieve ~75–84%. Transplantation for ACLF-3 model (TAM) and Sundaram ACLF-LT-mortality (SALT-M) scores flag poor expected outcome — most informative at organ offer; decide dynamically, not on fixed thresholds
- Raised 1-year post-LT mortality: **respiratory failure, moderate–high-dose vasopressors, no improvement in organ failures, diabetes, frailty** (C1); MDR or fungal infection before LT → more post-LT complications (B1)
- High resource use is not a contraindication (B1); **age >60** not disqualifying in selected patients (B1); **living donor LT** comparable in experienced centres and speeds access (C2)
- "Temporary unsuitability": keep evaluating/listing in parallel with medical optimisation
- **Bridge:** extracorporeal therapy incl. **therapeutic plasma exchange** may stabilise organs and improve short-term survival while awaiting LT (Statement 63, B2) — 2026 randomised trial (n=194): better 28-day, similar 90-day survival; APACHE trial (n=374): better 28- and 90-day survival; timing, intensity and selection undefined

**Factors favoring LT:**

- Trajectory: stabilization/improvement by Day 3–7 vs. progression
- ≤3 organ failures with improvement
- Controlled infection, hemodynamic stability, no ongoing uncontrolled sepsis

**Likely contraindications to LT (Table 7):**

- Ventilator support (strongest predictor of suboptimal post-LT outcome)
- Lactate >9 mmol/L or CLIF-C ACLF >70 (AASLD 2024)
- 2026: persistent deterioration despite maximal support — especially ≥3 organ failures, severe respiratory failure, high-dose vasopressors, uncontrolled infection
- Severe frailty (**Clinical Frailty Scale (CFS) ≥7**) + concurrent dialysis or advanced age — ⚠ [[aasld-2024-aclf]] applies the CFS cut-off without printing the scale's levels; grade it with the published CFS instrument
- FiO₂ ratio <150 mm Hg (severe ARDS equivalent)
- Active uncontrolled sepsis; fungal infections
- ACLF progression ≥4 organ failures

Post-LT ACLF survival: 1-year 86.0% vs. 91.9% (no ACLF); higher complication rates; requires careful selection.

### Palliative Care

Palliative care is essential in ACLF management; frequently underutilized (GS 49–51).

- **Early consult recommended** for all critically ill cirrhosis/ACLF patients (GS 49); reduces readmissions ~50%, saves ~$10,000/patient; doubles hospice discharge rates
- Any team member can offer primary palliative care with advanced care planning + symptom management; specialty palliative when available (GS 50)
- **LT listing does NOT preclude palliative care delivery** (GS 51) — disease-directed care and palliative care are not mutually exclusive
- Quality metrics (Table 8): goals-of-care discussion within 48h; surrogate decision-maker identified; advance care planning documentation

---

## See Also

[[acute-liver-failure]], [[aki-in-cirrhosis]], [[spontaneous-bacterial-peritonitis]], [[portal-hypertension]], [[variceal-upper-gi-bleeding]], [[ascites]], [[hepatopulmonary-syndrome-portopulmonary-hypertension]], [[liver-transplantation]], [[hepatic-encephalopathy]], [[alcohol-associated-liver-disease]], [[portal-vein-thrombosis]], [[hepatocellular-carcinoma]], [[nutrition-in-liver-disease]], [[rifaximin]], [[proton-pump-inhibitors]], [[abnormal-liver-chemistries]], [[cirrhosis]], [[albumin]], [[cirrhosis-hemostasis]], [[hepatic-venous-pressure-gradient]], [[tips]], [[somatostatin-analogs]], [[autoimmune-hepatitis]], [[drug-induced-liver-injury]], [[enteral-access]], [[terlipressin]], [[alcohol-associated-hepatitis]], [[chronic-hepatitis-b]], [[hepatitis-c]], [[hepatitis-d]], [[palliative-care-in-cirrhosis]], [[lactulose]], [[paracentesis]], [[hepatic-hydrothorax]]

---

## Sources

1. [[aasld-2024-aclf|AASLD 2024 Practice Guidance on Acute-on-Chronic Liver Failure]]
2. [[baveno-viii-2026-portal-hypertension|Baveno VIII — Advancing Consensus in Portal Hypertension (2026)]]
3. [[moreau-2013-canonic-aclf|Acute-on-Chronic Liver Failure Is a Distinct Syndrome That Develops in Patients With Acute Decompensation of Cirrhosis (CANONIC, 2013)]]
4. [[aasld-easl-2026-aclf-global-consensus|AASLD/EASL/APASL/ALEH/SOLDA 2026 Global Multisociety Consensus on ACLF Definitions]]
