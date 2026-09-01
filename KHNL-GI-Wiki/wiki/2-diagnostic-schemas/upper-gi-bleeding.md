---
title: "Upper GI Bleeding"
category: diagnostic-schema
tags: [ugib, peptic-ulcer, gi-bleeding, endoscopy, forrest, glasgow-blatchford, melena]
created: 2026-05-15
updated: 2026-09-01
sources: [acg-2021-ugib, acg-2023-lgib, acg-2024-hp-treatment]
---

## Contents
- [[#Definition / Scope]]
  - [[#UGIB vs. LGIB Distinction]]
- [[#Differential Diagnosis]]
  - [[#Most Common (Non-Variceal)]]
  - [[#Variceal / Portal Hypertensive]]
  - [[#Less Common]]
- [[#Diagnostic Algorithm]]
  - [[#Step 1: Initial Assessment and Resuscitation (Simultaneous)]]
  - [[#Step 2: Risk Stratification in the Emergency Department]]
  - [[#Step 3: Pre-Endoscopic Management]]
  - [[#Step 4: Timing of Endoscopy]]
  - [[#Step 5: Endoscopic Evaluation — Ulcer Stigmata]]
  - [[#Step 6: Choice of Endoscopic Hemostatic Therapy (Ulcer Bleeding)]]
  - [[#Step 7: Post-Endoscopic Management (Ulcer Bleeding)]]
  - [[#Step 8: Recurrent Bleeding]]
- [[#Key Tests]]
  - [[#Glasgow-Blatchford Score]]
  - [[#Rockall Score]]
  - [[#AIMS65 Score]]
  - [[#Machine-Learning Risk Models]]
  - [[#CT Angiography]]
- [[#Red Flags / Alarm Features]]

---

## Definition / Scope

**Upper GI bleeding (UGIB)** = bleeding originating from a source in the **esophagus, stomach, or duodenum** (proximal to the ligament of Treitz).

**Overt UGIB** presents as one or more of the following:

- **Hematemesis**: vomiting of red blood or coffee-grounds material
- **Melena**: black, tarry stools (requires colonic transit time; typically implies proximal source)
- **Hematochezia**: red or maroon blood per rectum — can indicate UGIB when bleeding is brisk (rapid transit through colon)

**Occult UGIB** ([[iron-deficiency-anemia|iron-deficiency anemia]], fecal occult blood) is a separate clinical scenario and is not covered in this schema, which focuses on overt UGIB requiring acute management.

### UGIB vs. LGIB Distinction

Severe hematochezia with hemodynamic instability may reflect UGIB in approximately 15% of cases. Features favoring UGIB:

- Hematemesis or coffee-ground emesis
- BUN:Cr ratio >30 (LR 7.5 for UGIB); BUN >21 mg/dL alone has 93% specificity
- History of [[peptic-ulcer-disease|peptic ulcer disease]], NSAIDs/anticoagulants, [[cirrhosis]], or known varices
- Melena on rectal exam

Features favoring [[acute-lower-gi-bleeding|LGIB]] (against UGIB):

- Blood clots in stool (LR 0.05 for UGIB — clots argue for LGIB)
- Nasogastric aspirate is unreliable (sensitivity only 28% for UGIB) — routine NG tube NOT recommended

If UGIB is clinically suspected in a patient presenting with apparent LGIB, perform **[[upper-endoscopy]] before [[colonoscopy]]**.

---

## Differential Diagnosis

### Most Common (Non-Variceal)

| Etiology | Key Features |
|---|---|
| **[[peptic-ulcer-disease\|Peptic ulcer disease]]** (gastric or duodenal) | Most common cause; NSAID use, [[helicobacter-pylori-infection]], or idiopathic; hematemesis or melena; may present with syncope |
| **Mallory-Weiss tear** | Longitudinal mucosal tear at GEJ; precipitated by forceful vomiting; typically self-limited |
| **Dieulafoy lesion** | Aberrant large-caliber submucosal artery with pinpoint mucosal defect; massive bleeding; often proximal stomach; subtle endoscopic finding |
| **[[gastric-adenocarcinoma\|Gastric]] / [[esophageal-cancer\|esophageal]] malignancy** | Weight loss, [[dysphagia]], early satiety; iron-deficiency anemia; mass on imaging |
| **[[angioectasia\|Angiodysplasia / AVM]]** | Older patients; anticoagulant use; often right-sided gastric or duodenal lesions; vascular ectasia on endoscopy |
| **Aortoenteric fistula** | History of aortic graft surgery; sentinel bleed followed by massive exsanguination; CT imaging urgently |
| **Cameron lesions** | Erosions at the diaphragmatic hiatus in a [[hiatal-hernia\|hiatal hernia]]; chronic iron-deficiency more than overt bleeding |
| **GAVE (gastric antral vascular ectasia)** | Chronic occult or overt bleeding; "watermelon stomach" pattern; associated with [[portal-hypertension\|portal hypertension]] and autoimmune disease |

### Variceal / Portal Hypertensive

- **Esophageal varices**: Most common variceal source; high-volume hematemesis; associated stigmata of cirrhosis
- **Gastric varices**: Less common; may bleed more severely; see [[variceal-upper-gi-bleeding]] for detailed management

### Less Common

- Hemobilia (biliary source — trauma, instrumentation)
- Hemosuccus pancreaticus (pancreatic pseudoaneurysm)
- Esophagitis / [[gerd|erosive esophagitis]] (rarely massive)

---

## Diagnostic Algorithm

![[ugib-2021-management-algorithm-09.png|700x440]]
*Figure 2 — Initial management of patients presenting with overt upper gastrointestinal bleeding. GBS: Glasgow-Blatchford Score. ([[acg-2021-ugib]])*

### Step 1: Initial Assessment and Resuscitation (Simultaneous)

- Focused history: hematemesis vs. melena vs. hematochezia; prior GIB; peptic ulcer history; NSAID/anticoagulant use; alcohol use; liver disease; prior aortic surgery
- Medications: NSAIDs, aspirin, antiplatelets, anticoagulants
- Physical exam: vital signs, volume status, stigmata of liver disease, abdominal tenderness, rectal exam (melena vs. blood vs. stool color)
- Labs: CBC, BMP (BUN:Cr ratio), coagulation studies (INR, aPTT), liver function tests, type and screen
- Large-bore IV access (2 peripheral IVs); IV fluid resuscitation for hemodynamic instability
- **Transfusion threshold: Hgb 7 g/dL** for hemodynamically stable patients
  - **8 g/dL** for **pre-existing cardiovascular disease**
  - **>8 g/dL may be considered** in UGIB with **acute coronary syndrome** — a higher threshold than the CV-disease rule ([[acg-2021-ugib]])
  - Hypotensive patients may receive transfusion above 7 g/dL before hemoglobin equilibrates with resuscitation
  - Do not transfuse to a target of 9 g/dL — restrictive strategy reduces further bleeding and mortality
  - ⚠ **Contradiction with [[acute-lower-gi-bleeding]]:** [[acg-2023-lgib]] states 8 g/dL "can also be considered" in ACS + GIB, i.e. it does **not** endorse a threshold above 8. [[acg-2021-ugib]] governs UGIB and explicitly separates ACS from pre-existing CVD; both guidelines call the ACS evidence extremely limited.

### Step 2: Risk Stratification in the Emergency Department

**Glasgow-Blatchford Score (GBS)** — use to identify very-low-risk patients safe for outpatient management:

| Variable | Points |
|---|---|
| **BUN (mg/dL)** | |
| 18.2 to <22.4 | 2 |
| 22.4 to <28.0 | 3 |
| 28.0 to <70.0 | 4 |
| ≥70.0 | 6 |
| **Hemoglobin (g/dL)** | |
| 12.0 to <13.0 (men) / 10.0 to <12.0 (women) | 1 |
| 10.0 to <12.0 (men) | 3 |
| <10.0 | 6 |
| **Systolic BP (mm Hg)** | |
| 100–109 | 1 |
| 90–99 | 2 |
| <90 | 3 |
| **Heart rate ≥100 bpm** | 1 |
| **Melena** | 1 |
| **Syncope** | 2 |
| **Hepatic disease** ᵃ | 2 |
| **Cardiac failure** ᵃ | 2 |

ᵃ **Definitional caveat you must know before scoring:** hepatic disease and cardiac failure were **not defined in the original GBS report**. [[acg-2021-ugib|ACG 2021]] cites a later study defining **hepatic disease** as *known history, or clinical and laboratory evidence, of chronic or acute liver disease*, and **cardiac failure** as *known history, or clinical and echocardiographic evidence, of cardiac failure*. All other variables are objective — these two are where scoring drifts between raters.

**GBS 0–1**: Very low risk — 99% sensitivity (95% CI lower bound 97–98%) for hospital-based intervention or death. Safe for discharge with outpatient follow-up. Represents 19–24% of UGIB ED presentations. [[acg-2021-ugib]]

**GBS ≥2**: Hospitalize for further management. Risk increases progressively with score.

**GBS ≥12**: High-risk threshold used in Lau et al. RCT — large-volume hematemesis, hemodynamic instability likely; urgent endoscopic evaluation within 24 hours.

### Step 3: Pre-Endoscopic Management

- **Erythromycin 250 mg IV** infused over **5–30 min (most often 20–30 min)**, with endoscopy **20–90 min later** ([[acg-2021-ugib]] — 250 mg because that or a similar dose was used in the RCTs)
  - Reduces need for repeat endoscopy (OR 0.51) and hospital length of stay (mean –1.75 days)
  - Does not improve further bleeding or mortality
  - Benefit was **not restricted to any subgroup** in the RCT enrollment criteria — so it is not reserved for suspected large clot burden
  - Caution: QT prolongation, related to infusion rate and dose; torsade is very rare and reported with **repeated and/or higher** doses. Trials variably excluded baseline QT prolongation, cardiac disease, electrolyte abnormalities, hepatic dysfunction, concurrent antiarrhythmics, and QT-prolonging CYP3A4 substrates
- **Metoclopramide is NOT a substitute** — evidence is scant (older abstracts only) and does **not** support its use ([[acg-2021-ugib]])
- **Pre-endoscopic [[proton-pump-inhibitors|PPI]]**: No recommendation for or against (ACG 2021)
  - May modestly reduce high-risk stigmata at index endoscopy and need for endoscopic therapy
  - No demonstrated benefit for further bleeding or mortality in properly designed RCTs
  - Reasonable to administer if endoscopy will be substantially delayed or unavailable

### Step 4: Timing of Endoscopy

**Endoscopy within 24 hours of presentation** for all hospitalized UGIB patients (conditional recommendation). [[acg-2021-ugib]]

- Time is measured from presentation, not hospital admission (accounts for institutional variation in admission processing time)
- Observational data support reduced length of stay and possible mortality/surgery benefit with endoscopy within 1 day
- **Very early endoscopy (<6–12 hours) does NOT improve outcomes** even in high-risk patients (GBS ≥12):
  - Lau et al. NEJM 2020 RCT (N=516): urgent (mean 10h from presentation) vs. control (mean 25h) — no difference in further bleeding (10.9% vs. 7.8%) or mortality (8.9% vs. 6.6%)
  - Danish observational cohort: possible harm with very early endoscopy in hemodynamically unstable patients (best outcomes with endoscopy 6–24 hours after admission)
- **Resuscitation must precede endoscopy** in hemodynamically unstable patients — endoscopy before adequate resuscitation carries risk
- Exception: patients with hypotensive shock not responding to initial resuscitation require urgent endoscopic or interventional radiology intervention (expert opinion)

### Step 5: Endoscopic Evaluation — Ulcer Stigmata

**Source note.** [[acg-2021-ugib|ACG 2021]] does **not** use or define the Forrest classification, and prints **no** table of class-specific rebleeding percentages. It stratifies by *descriptive* stigmata only. The Forrest class labels below are the familiar shorthand for the same findings, but their numbering and any class-specific rebleed percentages are **not supported by an ingested source** — the Forrest 1974 primary paper is not in `raw/`. Only the ACG-sourced figures are stated as data here.

| Stigma (Forrest label) | ACG 2021 position on endoscopic therapy | ACG-sourced data |
|---|---|---|
| **Active spurting** (Ia) | **Recommended** — Statement 6 (strong, moderate) | Spurting is much less common than oozing — 68/397 (17%) of actively bleeding ulcers in a large prospective trial; further bleeding appears **more frequent with spurting than oozing** |
| **Active oozing** (Ib) | **Recommended** — Statement 6 (strong, moderate) | Pooled further bleeding **39% (range 10–100%)** across 8 prospective trials of oozing managed *without* endoscopic therapy |
| Combined **active bleeding** | — | Endoscopic vs no endoscopic therapy: further bleeding **RR 0.29 (0.20–0.43), NNT 2** |
| **Nonbleeding visible vessel** (IIa) | **Recommended** — Statement 6 (strong, moderate) | Further bleeding **RR 0.49 (0.40–0.59), NNT 5** |
| **Adherent clot** resistant to vigorous irrigation (IIb) | **No recommendation for or against** — Statement 7 | Meta-analysis showed no benefit of endoscopic therapy: further bleeding **RR 0.31 (0.06–1.77)**, mortality **RR 0.90 (0.23–3.58)**. PPI alone may suffice — recurrent bleeding **0/64 on PPI vs 13/61 (21%) on placebo** without endoscopic therapy in either arm |
| **Flat pigmented spot** (IIc) / **clean base** (III) | Not addressed as an indication for therapy | Mortality benefit of endoscopic therapy was **not** documented for any stigma |

- **Definition caveat:** "the definition of oozing may vary widely among endoscopists"; some trials require continuous bleeding over 5 minutes of observation to call it active oozing.
- **Adherent clot:** irrigate vigorously to expose the underlying stigma; if the clot resists irrigation, ACG could not reach a recommendation — high-dose PPI alone is a reasonable option.

### Step 6: Choice of Endoscopic Hemostatic Therapy (Ulcer Bleeding)

![[ugib-2021-endoscopic-therapy-algorithm-14.png|700x221]]
*Figure 3 — Endoscopic and medical therapy for ulcer bleeding based on endoscopic features (Forrest classification). ([[acg-2021-ugib]])*

**Strongly recommended (Strong recommendation, moderate-quality evidence):**

- Bipolar electrocoagulation (15 W, 8–10 second applications, 3.2-mm probe with firm pressure)
- Heater probe (30 J applications, 3.2-mm probe with firm pressure)
- Absolute ethanol injection (0.1–0.2 mL aliquots, maximum 1–2 mL total)
- Epinephrine injection: **NEVER as monotherapy** — must be combined with a second hemostatic modality

**Conditionally recommended (Conditional recommendation, lower-quality evidence):**

- Through-the-scope clips (placement over and on both sides of bleeding site)
- [[argon-plasma-coagulation|Argon plasma coagulation]] (APC): 1–2 L/min gas flow, 40–70 W power, probe 2–10 mm from mucosa
- Soft monopolar electrocoagulation (soft coagulation mode, 50–80 W, 1–2 second applications)
- Hemostatic powder spray TC-325: for actively bleeding ulcers only (does not adhere to nonbleeding lesions); delivery catheter tip 1–2 cm from bleeding site, 1–2 second bursts; high cost limits use as first-line in U.S. (~$2,500 list price)
- Over-the-scope clips: reserved for **recurrent ulcer bleeding** after previous successful endoscopic hemostasis; superior to standard therapy in this setting (further bleeding 15.2% vs. 57.6%)

**Dual therapy** (epinephrine + a second modality) is standard practice for active bleeding to improve visibility and efficacy.

### Step 7: Post-Endoscopic Management (Ulcer Bleeding)

**Antisecretory therapy after successful endoscopic hemostasis:**

*Phase 1 — Inpatient (3 days):*

- **High-dose PPI for 72 hours**: Strong recommendation (moderate- to high-quality evidence)
  - Reduces further bleeding (RR 0.43), mortality (RR 0.41), surgery (RR 0.42) vs. placebo
  - Continuous IV: **80 mg bolus followed by 8 mg/hr infusion for 72 hours**
  - Intermittent (equivalent efficacy): **40 mg 2–4 times daily** (oral or IV); initial 80 mg bolus may be appropriate; oral administration acceptable if patient awake/alert without nausea, vomiting, or dysphagia

*Phase 2 — High-risk outpatient continuation (days 4–14):*

- **Twice-daily oral PPI through day 14 after index endoscopy** for high-risk patients (Rockall score ≥6): Conditional recommendation (low-quality evidence)
  - Based on 1 RCT (esomeprazole 40 mg BID vs. QD): further bleeding 10.8% vs. 28.7% at 28 days
  - After day 14, transition to once-daily standard PPI

**H. pylori testing and treatment:**

- **Not addressed by [[acg-2021-ugib|ACG 2021]]** — the UGIB guideline neither tests nor treats *H. pylori* anywhere in its recommendations. The obligation comes from the eradication guideline instead: **active or prior peptic ulcer disease is a test-and-treat indication** ([[acg-2024-hp-treatment]], Table 4), and persistent untreated infection leaves the patient at risk of the sequelae of infection including peptic ulcer. So test every patient with [[peptic-ulcer-disease|peptic ulcer]] bleeding for [[helicobacter-pylori-infection]] and treat if positive
  - Treatment is offered on a **positive non-serological test** (active infection), absent contraindications ([[acg-2024-hp-treatment]]). Regimens, resistance-driven choice, and test-of-cure live on [[helicobacter-pylori-infection]]

### Step 8: Recurrent Bleeding

- **Repeat endoscopy and endoscopic retreatment**: preferred initial strategy for recurrent bleeding after initial hemostasis
  - ~75% success rate in preventing further bleeding with repeat endoscopic therapy
  - Fewer complications than surgery (14.6% vs. 36.4%)
  - If prior thermal contact therapy was used, consider alternative modality on repeat endoscopy (consecutive thermal therapy increases perforation risk)
  - Consider over-the-scope clips for recurrent bleeding after initial hemostasis

- **Failure of repeat endoscopy** → **Transcatheter arterial embolization (TAE)** preferred over surgery
  - TAE: fewer complications (OR 0.45), shorter hospital stay (median 8 vs. 16 days), no mortality difference; but higher rate of further bleeding (OR 2.44) vs. surgery
  - Surgery remains an option, especially with ongoing massive hemorrhage or if TAE is not available/fails
  - Choice individualized based on comorbidities, hemodynamic status, institutional expertise

---

## Key Tests

### Endoscopy

- Diagnostic and therapeutic gold standard for UGIB
- Identifies source in >90% of cases when performed within 24 hours
- Allows Forrest classification and application of hemostatic therapy
- **Timing**: within 24 hours of presentation for all hospitalized patients; resuscitation first

### Glasgow-Blatchford Score

- Full component/point table, the GBS 0–1 discharge threshold, and the hepatic-disease / cardiac-failure definitional caveat are in *Diagnostic Algorithm → [[#Step 2: Risk Stratification in the Emergency Department]]* — not repeated here.
- All GBS variables are available **before** endoscopy; it is an ED triage tool, not a post-endoscopic one.

### Rockall Score

- **Not endorsed or defined by [[acg-2021-ugib|ACG 2021]].** It appears exactly once in that guideline, as the **enrollment criterion (Rockall ≥6)** of the single RCT supporting extended twice-daily PPI (Statement 14) — so "high risk" for the day-4–14 PPI decision operationally means *met that trial's entry criterion*.
- **Decision gap — flagged, not filled:** the Rockall component variables and point values are **not in any ingested source**; the primary Rockall paper is not in `raw/`. Do not infer them. *(Same corpus block as GAHS/ABIC, CTSI, LA grade. **Corrected 2026-08-31:** Tokyo TG18 was previously listed here as corpus-blocked — it is **not**. The 2018 Tokyo Guidelines are ingested ([[tg18-2018-cholangitis-flowchart]]) and the Grade I/II/III criteria are on [[acute-cholangitis]].)*

### AIMS65 Score

- **Not mentioned anywhere in [[acg-2021-ugib|ACG 2021]]** — no components, no threshold, no endorsement. Flagged as a corpus gap; would need the primary AIMS65 derivation paper ingested. (It is referenced comparatively in [[acg-2023-lgib|ACG 2023 LGIB]], where the ABC score is reported as superior to AIMS65 and GBS.)

### Machine-Learning Risk Models

- ACG notes the **Shung machine-learning model** also reaches ~99% sensitivity (lower CI bound 97–98%), matching GBS 0–1, but recommends **only GBS** by name — the Shung model has been evaluated in a single setting.
- Any future tool may be substituted if it discriminates transfusion/hemostatic intervention/death with **99–100% sensitivity (0–1% false negatives)**.

### CT Angiography

- Not first-line for UGIB (endoscopy preferred)
- Role: when endoscopy fails or is unavailable; planning for interventional radiology (TAE)
- Can guide TAE by identifying site of active extravasation

### Ulcer Stigmata at Endoscopy

- Characterized at endoscopy to guide hemostatic therapy decisions — see [[#Step 5: Endoscopic Evaluation — Ulcer Stigmata]], including the source caveat on Forrest labelling

---

## Red Flags / Alarm Features

### Hemodynamic Instability (Requires Urgent Resuscitation Before Endoscopy)

- Systolic BP <90 mm Hg
- Heart rate ≥100 bpm
- Active hematemesis of bright red blood
- Syncope or near-syncope
- Orthostatic changes in vital signs
- Requirement for blood transfusion before stabilization
- **Hypotensive shock not responding to initial resuscitation**: requires urgent endoscopy or interventional radiology regardless of endoscopy timing recommendations

### High-Risk Clinical Features (GBS ≥12)

- Predicts high likelihood of need for hemostatic intervention
- Associated with actively bleeding lesions at endoscopy
- Hospital admission mandatory regardless of GBS threshold used for discharge decisions

### Endoscopic High-Risk Stigmata (Requiring Therapy)

- **Active spurting** — endoscopic therapy required; less common than oozing (17% of actively bleeding ulcers) but higher further-bleeding rate
- **Active oozing** — endoscopic therapy required; 39% pooled further bleeding without therapy
- **Nonbleeding visible vessel** — endoscopic therapy required (NNT 5 to prevent further bleeding)

### Rebleeding Warning Signs

- Drop in hemoglobin of ≥2 g/dL after initial stabilization
- Recurrence of hematemesis or melena after clinical improvement
- Hemodynamic deterioration after initial stabilization
- Stool color change from black/brown back to red or maroon
- Tachycardia or hypotension developing during observation
- Predictors of repeat endoscopy failure: hypotension at time of rebleeding, ulcer size >2 cm

### Alarm Features for Alternative Diagnoses

- Prior aortic surgery → aortoenteric fistula (sentinel bleed; urgent CT angiography)
- Stigmata of cirrhosis ([[jaundice]], [[ascites]], spider angiomata) → variceal bleeding; see [[variceal-upper-gi-bleeding]]
- Weight loss, dysphagia, early satiety → malignancy
- Pulsatile abdominal mass → aortic aneurysm with fistula
- Concurrent anticoagulation use → increased severity; see [[anticoagulation-gi-bleeding]]

---

## See Also

[[variceal-upper-gi-bleeding]], [[acute-lower-gi-bleeding]], [[small-bowel-bleeding]], [[peptic-ulcer-disease]], [[helicobacter-pylori-infection]], [[upper-endoscopy]], [[colonoscopy]], [[portal-hypertension]], [[cirrhosis]], [[anticoagulation-gi-bleeding]], [[angioectasia]], [[gastric-adenocarcinoma]], [[esophageal-cancer]], [[argon-plasma-coagulation]], [[proton-pump-inhibitors]], [[iron-deficiency-anemia]], [[dysphagia]], [[jaundice]], [[ascites]], [[gerd]]

---

## Sources

1. [[acg-2021-ugib|ACG 2021: Upper Gastrointestinal and Ulcer Bleeding]]
2. [[acg-2023-lgib|ACG 2023: Management of Patients With Acute Lower Gastrointestinal Bleeding]]
3. [[acg-2024-hp-treatment|ACG Clinical Guideline: Treatment of Helicobacter pylori Infection (2024)]]
