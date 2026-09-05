---
title: "Acute-on-Chronic Liver Failure (ACLF)"
category: disease-script
tags: [ACLF, acute-on-chronic-liver-failure, cirrhosis, organ-failure, ICU, NACSELD, EASL-CLIF, terlipressin, HRS, hepatic-encephalopathy, infection, nutrition, liver-transplantation, palliative-care]
created: 2026-05-28
updated: 2026-09-05
sources: [aasld-2024-aclf, baveno-viii-2026-portal-hypertension]
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
  - [[#Coagulopathy]]
  - [[#ACLF and Pre-emptive TIPS]]
  - [[#Nutrition]]
  - [[#Liver Transplantation in ACLF]]
  - [[#Palliative Care]]

---

## Assessment

### Establishing the Diagnosis

ACLF is a syndrome in patients with chronic liver disease (CLD) characterized by **acute onset with rapid deterioration**, liver failure, and ≥1 extrahepatic organ failure, with high short-term mortality. Distinct from [[acute-liver-failure]] (which has no prior CLD) and from standard acute decompensation of [[cirrhosis|cirrhosis]] (which may lack extrahepatic organ failure).

**AASLD minimum definition (GS 1):** All three elements required:

1. Acute onset with rapid deterioration in clinical condition
2. Liver failure defined by **elevated bilirubin + elevated INR** in patients with CLD (with or without cirrhosis)
3. Presence of ≥1 extrahepatic organ failure: neurologic, circulatory, respiratory, or renal

**Three major definitions (different geographic/institutional standards):**

| Definition | Applicable stage | Organ failure criteria |
|---|---|---|
| **NACSELD** (North America) | Advanced/preterminal | ≥2 extrahepatic OFs: cardiovascular (shock), renal (RRT), respiratory (mechanical vent), brain ([[hepatic-encephalopathy\|HE]] Grade 3–4) |
| **EASL-CLIF** (European) | Earlier onset; grades ACLF-1, -2, -3 | Six organ systems, each with its own cut-off (CLIF-C ACLF, Table 1): **liver** total bilirubin ≥12 mg/dL; **kidney** sCr ≥2 mg/dL or RRT; **brain** [[hepatic-encephalopathy\|HE]] grade 3–4; **respiratory** PaO₂/FiO₂ ≤200 or SpO₂/FiO₂ ≤214; **coagulation** INR ≥2.5; **cardiovascular** use of vasopressors |
| **APASL** (Asia-Pacific) | Early; includes non-cirrhotic CLD | Acute hepatic insult + liver failure (Bi ≥5, INR ≥1.5) + coagulopathy + clinical features ≤4 weeks in previously diagnosed or undiagnosed CLD; high sensitivity, lower specificity |

**EASL-CLIF grade — what the grades mean (drives the terlipressin decision, GS 25):**

- **ACLF-1 / ACLF-2** — intermediate stage: patients *developing* extrahepatic organ failure
- **ACLF-3** — late stage: **≥3 organ failures**; highest mortality; terlipressin contraindicated
- *Gap: [[aasld-2024-aclf]] does not restate the EASL-CLIF numeric organ-failure counts separating ACLF-1 from ACLF-2 — the original EASL-CLIF/CANONIC paper is not ingested.*

**Pre-ACLF:** Subgroup of decompensated cirrhosis at higher risk of developing ACLF (higher CRP, WBC, MELD); characterized by progressive increase in severity scores. No individual biomarker predicts ACLF development.

**Common precipitating events (~48% infection-related):** Bacterial infection ([[spontaneous-bacterial-peritonitis|SBP]], UTI, pneumonia, bacteremia), [[alcohol-associated-liver-disease|alcohol-associated hepatitis]], [[variceal-upper-gi-bleeding|GI bleeding]], procedural complications, drug/hepatotoxin exposure, viral hepatitis flares. Often precipitant is not identified.

**[[baveno-viii-2026-portal-hypertension|Baveno VIII]] names the same precipitants from the [[portal-hypertension|portal-hypertension]] side, and adds surgery:**

- **Superimposed acute liver injury** — alcohol-related hepatitis, acute HEV/HAV/HBV, HBV flares, **[[autoimmune-hepatitis|autoimmune hepatitis]]**, or **[[drug-induced-liver-injury|DILI]]** — can precipitate decompensation **and/or ACLF** in compensated cirrhosis/cACLD (3.7)
- **Bacterial infections** do the same in compensated patients **with CSPH** (3.10); their prognostic impact **without** CSPH is unclear (3.11)
- **Surgery, especially major surgery, can precipitate ACLF** in patients with CSPH, **with risk rising as portal hypertension becomes more severe** (3.13, new). **Pre-operative [[tips|TIPS]] may be considered before major surgery** to reduce that risk (3.20b)

### Severity Assessment

**ACLF-specific prognostic scores outperform MELD/MELD-Na for short-term mortality (GS 2):**

*Read the discrimination figures with their outcome — the scores were not all validated against the same endpoint (Table 2).*

| Score | Key variables | Outcome validated against | Discrimination |
|---|---|---|---|
| NACSELD-ACLF | MELD + OFs (CV, renal, respiratory, brain) + age + WBC + albumin | 30-day survival | AUC 0.80 (training), 0.85 (validation) |
| CLIF-C ACLF | Hepatic + extrahepatic OFs + age + WBC | 28-day mortality | C index 0.76 (derivation), 0.744 (validation) — 0.73 at 90 d, 0.71 at 1 y |
| AARC | Bi + Cr + INR + lactate + HE grade | 28-day mortality | AUC 0.80 (derivation), 0.78 (validation) |
| MELD-LA (MELD + lactate) | MELD + serum lactate | In-hospital mortality | C index 0.81 (derivation), 0.85 / 0.82 (validation cohorts) |

**Serial scoring (GS 3):** CLIF-C ACLF at Days 3–7 is an independent predictor of mortality regardless of initial grade. **In ACLF-3 specifically**, 90-day mortality was **40% if the patient improved by Day 3 vs 79% if not** — the qualifying population matters; the figures are not a general ACLF statistic.

**Futility threshold:** CLIF-C ACLF score >70 (range 0–100) at admission or Day 3 → ~90% 90-day mortality; lactate >9 mmol/L is likewise an absolute-contraindication-level pre-LT factor. Goals-of-care discussion warranted. Among patients with **≥4 organ failures at Days 3–7 after an ACLF-3 diagnosis** (CANONIC): **28-day mortality 90%, 90-day mortality 100%** (100% at 90 days once CLIF-C ACLF >64).

**30-day mortality by EASL-CLIF grade** (CLIF-SOFA validation cohort): no ACLF **3%**, ACLF-1 **10%**, ACLF-2 **37%**, ACLF-3 **76%**.

---

## Differential Diagnosis

*Workup: see [[abnormal-liver-chemistries]] for the aetiologic liver-test evaluation.*

- Acute decompensation without ACLF — [[ascites]]/HE/AVH without extrahepatic organ failure; lower mortality
- [[acute-liver-failure]] — no prior CLD; INR ≥1.5 + any degree HE; different prognosis/management; King's College Criteria for LT
- Sepsis-associated organ dysfunction without ACLF — can mimic and precipitate ACLF; diagnose both concurrently
- Primary organ failure of non-hepatic origin — e.g., ARDS from pneumonia in a cirrhotic patient; hepatic dysfunction secondary to critical illness

---

## Diagnostics

| Test | Purpose |
|---|---|
| AST, ALT, bilirubin, albumin, INR | Liver failure parameters; [[cirrhosis\|Child-Pugh/MELD]] |
| Creatinine, BUN, urinalysis + urine culture | Renal failure staging; HRS-AKI vs. ATN |
| CBC | Cytopenias, thrombocytopenia, WBC (NACSELD score) |
| Lactate | Prognostic (MELD-LA, CLIF-C ACLF lactate); severity of tissue hypoperfusion |
| Blood cultures × 2, urine culture, paracentesis (ascites PMN count + culture) | Infection workup (GS 29) |
| Chest X-ray | Pneumonia, pulmonary edema, hepatic hydrothorax |
| CLIF-C ACLF, NACSELD-ACLF, AARC scores | Serial prognostic assessment (GS 2–3) |
| Bedside TTE/POCUS | Volume status, cardiac function, IVC diameter/compressibility, RV/LV function (GS 13) |
| Liver ultrasound + Doppler | [[portal-vein-thrombosis\|PVT]], [[hepatocellular-carcinoma\|HCC]], [[ascites]], portal hemodynamics |
| EEG (if needed) | Non-convulsive seizures in obtunded patients |

---

## Therapeutics

### General ICU Principles

Critically ill patients with cirrhosis and ACLF require multidisciplinary ICU care. Simultaneous: organ-specific management + early [[liver-transplantation|LT]] evaluation + palliative care consult (Figure 5) [[aasld-2024-aclf]].

### Brain Failure (Hepatic Encephalopathy)

**Grading:** West Haven criteria (Grade 1–4; full grade descriptors on [[hepatic-encephalopathy]]) + Glasgow Coma Scale; GCS <8 = severe brain failure (GS 4). Consider ICU for Grade 3–4 HE (GS 5).

**Management (GS 6–11):**

- Identify and treat precipitating factors (infection, GI bleed, AKI, constipation, electrolytes, medications) (GS 6)
- Workup for non-HE causes of AMS: alcohol withdrawal, structural injury, metabolic — especially first episode or treatment non-response (GS 7)
- **Lactulose** (oral or rectal) or **polyethylene glycol** (if ileus risk); [[rifaximin]] role as add-on in ACLF warrants further study (GS 8)
- **Sedation/analgesia:** short-acting agents preferred (propofol, dexmedetomidine); avoid benzodiazepines, gabapentin, opioids when possible (GS 9); dexmedetomidine reduces ventilation duration and benzodiazepine need in alcohol withdrawal
- **Routine head CT:** not warranted for typical HE presentations; indicated for first episode AMS, seizures, focal neuro signs, or HE not responding to therapy (GS 10)
- **Routine ammonia:** NOT recommended for diagnosis or monitoring in ACLF (GS 11)

### Cardiovascular Failure

**Pathophysiology:** Hyperdynamic circulation (low SVR, high CO) in cirrhosis; exacerbated by systemic inflammation in ACLF.

**Assessment (GS 12–13):**

- Early baseline assessment of volume status, perfusion, cardiac function (GS 12)
- Bedside TTE/POCUS for volume status + cardiac function in hypotension/shock (GS 13)

**Fluid resuscitation (GS 14):**

- Judicious strategy with hemodynamic monitoring to avoid overresuscitation
- **Balanced crystalloids** (lactated ringers) preferred; [[albumin]] for select indications (SBP, HRS-AKI fluid challenge, paracentesis-induced circulatory dysfunction)
- No benefit from targeting specific albumin serum levels (ATTIRE trial: no improvement in composite primary endpoint)

**Vasopressors (GS 15–17):**

- Target MAP ≥65 mm Hg with ongoing end-organ perfusion assessment (GS 15); individualized — use mental status, capillary refill, urine output, lactate to guide
- **Norepinephrine (0.01–0.5 mcg/kg/min): first-line vasopressor** (GS 16)
- **Vasopressin: second-line** when increasing norepinephrine doses required (GS 16)
- **Hydrocortisone** (50 mg IV q6h or 200 mg infusion × 7 days or until ICU discharge): consider for relative adrenal insufficiency screening or empiric treatment of refractory shock requiring high-dose vasopressors (GS 17); relative adrenal insufficiency (~49% in non-critically ill cirrhosis hospitalizations)

### Respiratory Failure

**Cirrhosis-specific respiratory complications (GS 18):**

- Hepatic hydrothorax, tense ascites → respiratory compromise → therapeutic thoracentesis/paracentesis (GS 18)
- [[hepatopulmonary-syndrome-portopulmonary-hypertension]] (HPS/POPH): assess in ICU for contribution to hypoxemia
- POPH: monitor for RV dysfunction; pulmonary vasodilators (inhaled NO, epoprostenol) may be needed; [[tips|TIPS]] generally contraindicated in POPH (worsens hepatic decompensation)

**Respiratory support (GS 19–22):**

- **HFNC** for acute hypoxemic respiratory failure; close monitoring for escalation (tachypnea, refractory hypoxemia) (GS 19)
- **Mechanical ventilation for non-ALI reasons:** lung-protective strategy, low plateau pressures, 6–10 mL/kg PBW, spontaneous breathing when possible (GS 20)
- **Mechanical ventilation for ALI/ARDS:** low tidal volume 6 mL/kg PBW, plateau <30 cm H₂O (GS 21)
- **PEEP strategy:** low PEEP for mild ALI (PaO₂/FiO₂ 200–300; minimize preload impairment); high PEEP may be needed for moderate-severe ALI (PaO₂/FiO₂ <200 mm Hg) (GS 22)

### Kidney Failure (HRS-AKI)

**Diagnosis:** HRS-AKI = increase in sCr ≥0.3 mg/dL within 48h OR ≥50% from baseline, in patients with cirrhosis + ascites, after ≥2 days of diuretic withdrawal + volume expansion (albumin 1 g/kg/day up to 100 g/day × 48h), absence of shock/nephrotoxic drugs/parenchymal renal disease (Table 3). Most common extrahepatic organ failure in ACLF (29–75% depending on definition).

**Management (GS 23–28):**

- Withdraw diuretics; treat precipitants (infection, GI bleed); volume challenge with **albumin 1 g/kg up to 100 g/day × 48h** (GS 23)
- If meets HRS-AKI criteria after albumin challenge:
  - **Vasoconstrictors + albumin (20–40 g/day)** for [[aki-in-cirrhosis|ICA-AKI]] Stage 2+ HRS-AKI without contraindications (GS 24) — ICA-AKI stage definitions on [[aki-in-cirrhosis]]
  - **Terlipressin (0.5–2.0 mg IV q6h or 2 g/24h continuous infusion):** indicated for Stage 2+ [[aki-in-cirrhosis|HRS-AKI]] without ACLF-3 (EASL-CLIF) or major cardiopulmonary/vascular disease (GS 25). Contraindicated in ACLF-3 due to CONFIRM trial respiratory failure signal
  - **Norepinephrine:** alternative to terlipressin; preferred in shock (GS 26)
  - Midodrine + [[somatostatin-analogs|octreotide]]: inferior to terlipressin continuous infusion; acceptable in non-ICU setting
- **RRT:** individualized; recommended for HRS-AKI failing pharmacotherapy in LT candidates as bridge (GS 27); continuous RRT preferred over intermittent in hemodynamically unstable patients; no preemptive benefit
- **LT is definitive treatment** for HRS-AKI; consider in context of multiorgan failure and LT candidacy (GS 28). Simultaneous liver-kidney transplant for prolonged RRT (>6 weeks) or sCr persistently elevated post-LT

### Infection Management

Infection is the most common precipitant of ACLF (~48%). Every hour delay in antibiotics increases multiorgan failure/mortality by 1.86×.

**Initial workup (GS 29–30):**

- Full infection screen at admission: diagnostic paracentesis + blood cultures × 2 + urinalysis/urine culture + chest X-ray (GS 29)
- Repeat workup with any clinical deterioration: new/worsening ascites, HE, AKI, organ failure, or ACLF grade increase (GS 30)

**Antibiotic principles (GS 31–33):**

- Choose antibiotics based on etiology, severity, mode of acquisition (community vs. healthcare-associated vs. nosocomial), and local resistance patterns (GS 31)
- **Minimize [[proton-pump-inhibitors|PPI]] use and Foley catheters** to prevent nosocomial infections (GS 32)
- If nosocomial infection not responding to antibiotics after 48h → broaden for MDR organisms and/or fungal infection (GS 33)

**MDR organisms:** Account for ≥40% of culture-positive infections in ACLF; MDR rate ~34% worldwide (highest in Asia). Resistance to first-line community antibiotics up to 75% in culture-negative nosocomial infections.

**Fungal infections:** 2–16% of ACLF; almost always nosocomial; risk: high MELD, prior bacterial infection, ICU admission. 1,3-β-D-glucan + PCR improves invasive aspergillosis detection. 30-day mortality: ~30% with fungal infection.

**Infection prevention (Table 5):** Stop PPIs unless clear indication; remove Foley catheters; ensure vaccinations (HAV, HBV, COVID-19, influenza, pneumococcal, herpes zoster, Tdap); aspiration precautions (avoid BZDs, opioids when possible; paracentesis for tense ascites before procedures).

### Coagulopathy

**INR does NOT reflect true hemostatic status in cirrhosis** — [[cirrhosis-hemostasis|rebalanced hemostasis]]; INR captures only procoagulant depletion, not anticoagulant protein depletion (GS 35).

**TEG/ROTEM:** Global hemostasis assessment; better reflects true clotting in cirrhosis; can guide transfusions and reduce unnecessary blood product use (GS 34; not yet clinically validated in ACLF).

**Transfusion guidance:**

- Low bleeding rates for paracentesis (0–3.3%) and thoracentesis (~2%) in decompensated cirrhosis; routine preprocedural coagulation correction not required
- When correction needed: 4-factor prothrombin complex concentrate or cryoprecipitate preferred over FFP
- Therapeutic anticoagulation: similar nonportal hypertensive bleeding rates vs. general population; case-by-case for platelet <50 (GS 36)

### ACLF and Pre-emptive TIPS

> **ACLF does not disqualify a patient from pre-emptive [[tips|TIPS]] after [[variceal-upper-gi-bleeding|acute variceal bleeding]].** [[baveno-viii-2026-portal-hypertension|Baveno VIII]] 5.33 (LoE 3, strong): in patients who meet the pre-emptive TIPS criteria, **ACLF, overt [[hepatic-encephalopathy|HE]], hyperbilirubinaemia, MELD score, and severe [[alcohol-associated-liver-disease|alcohol-related hepatitis]] should not be considered absolute contraindications.** Baveno VIII adds MELD and severe alcohol-related hepatitis to the shorter Baveno VII list. The criteria themselves (Child-Pugh C 10–13; or Child-Pugh B >7 with active bleeding; or HVPG ≥20 mmHg) are on [[variceal-upper-gi-bleeding]].
>
> Baveno VIII 5.37 separately **withdraws the numeric salvage-TIPS futility rule** (previously Child-Pugh ≥14, or MELD >30 with lactate >12 mmol/L) — salvage TIPS is now discussed case-by-case regardless of age, Child-Pugh, and MELD. In a critically ill ACLF patient this removes the score-based exclusion, but not the clinical judgement; note also that MELD is **not** the right prognostic tool in critical illness (GS above — use NACSELD, CLIF-C, or AARC).

### Nutrition

[[nutrition-in-liver-disease|Malnutrition]] and sarcopenia are extremely common in ACLF and independently predict mortality. **Protein restriction is NEVER indicated (GS 42).**

| Parameter | Recommendation |
|---|---|
| Early nutrition support team involvement | GS 37 — early involvement in all ACLF hospitalizations |
| Nutrition risk assessment | **NUTRIC score** at ICU admission (GS 38) — six-factor point table and its high/low bands on [[nutrition-in-hospitalized-patients\|NUTRIC scoring]] |
| Energy requirements | Indirect calorimetry preferred; predictive equations if unavailable (GS 39) |
| Weight for calculations | **Ideal body weight** (not actual) for predictive equations in cirrhosis (GS 40) |
| Initial caloric goal | 12–25 kcal/kg IBW; evolve to higher targets as clinical course improves (GS 41) |
| Protein goal | **1.2–2.0 g/kg IBW/day** (GS 42) |
| Route | **[[enteral-access\|Enteral nutrition]] preferred** over PN; start as soon as resuscitation complete and off high-dose vasopressors (GS 43) |
| Hold EN when | Vasopressor support >0.15 mcg/kg/min norepinephrine (GS 44) |
| Refeeding syndrome monitoring | K, Mg, PO₄ + ECG monitoring after EN initiation (GS 45) |
| Glucose target | **140–180 mg/dL** (7.8–10 mmol/L); avoid tight glycemic control (hypoglycemia risk) (GS 46) |

> ⚠ **Scoring NUTRIC needs two scores this wiki does not carry.** [[aasld-2024-aclf]] names NUTRIC without printing it; the point table linked above is complete, but two of its six factors are **APACHE II** and **baseline SOFA**, and neither instrument is in an ingested source. Compute those from the published instruments — **not from memory.** The cirrhosis-specific tools that *are* fully quantified here (Liver Frailty Index, CT skeletal muscle index, KPS) are on [[nutrition-in-liver-disease]], but AASLD does not substitute them for NUTRIC in the ICU.

### Liver Transplantation in ACLF

**LT candidacy (GS 47–48):**

- Expedited LT for selected patients with ACLF/critical illness may be indicated; no single predictor defines acceptable outcomes (GS 47)
- **Futility:** Base decisions on LT candidacy, available resources, and potential reversibility of ACLF (GS 48)

**Factors favoring LT:**

- Trajectory: stabilization/improvement by Day 3–7 vs. progression
- ≤3 organ failures with improvement
- Controlled infection, hemodynamic stability, no ongoing uncontrolled sepsis

**Likely contraindications to LT (Table 7):**

- Ventilator support (strongest predictor of suboptimal post-LT outcome)
- Lactate >9 mmol/L or CLIF-C ACLF >70
- Severe frailty (**Clinical Frailty Scale ≥7**) + concurrent dialysis or advanced age — ⚠ [[aasld-2024-aclf]] applies the CFS cut-off without printing the scale's levels; grade it with the published CFS instrument, not from memory
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

[[acute-liver-failure]], [[aki-in-cirrhosis]], [[spontaneous-bacterial-peritonitis]], [[portal-hypertension]], [[variceal-upper-gi-bleeding]], [[ascites]], [[hepatopulmonary-syndrome-portopulmonary-hypertension]], [[liver-transplantation]], [[hepatic-encephalopathy]], [[alcohol-associated-liver-disease]], [[portal-vein-thrombosis]], [[hepatocellular-carcinoma]], [[nutrition-in-liver-disease]], [[rifaximin]], [[proton-pump-inhibitors]], [[abnormal-liver-chemistries]], [[cirrhosis]], [[albumin]], [[cirrhosis-hemostasis]], [[tips]], [[somatostatin-analogs]], [[autoimmune-hepatitis]], [[drug-induced-liver-injury]], [[enteral-access]]

---

## Sources

1. [[aasld-2024-aclf|AASLD 2024 Practice Guidance on Acute-on-Chronic Liver Failure]]
2. [[baveno-viii-2026-portal-hypertension|Baveno VIII — Advancing Consensus in Portal Hypertension (2026)]]
