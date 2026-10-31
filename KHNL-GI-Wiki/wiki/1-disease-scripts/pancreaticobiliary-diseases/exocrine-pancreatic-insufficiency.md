---
title: "Exocrine Pancreatic Insufficiency (EPI)"
category: disease-script
tags: [exocrine-pancreatic-insufficiency, epi, pert, fecal-elastase, malabsorption, steatorrhea, pancreas, hpb]
created: 2026-07-18
updated: 2026-10-31
sources: [aga-2023-epi]
---

# Exocrine Pancreatic Insufficiency (EPI)

Failure of the pancreas to deliver a threshold level of digestive enzymes to the intestine → maldigestion of fat (and other macronutrients), fat-soluble vitamin deficiency, and protein-calorie malnutrition. Frequently underdiagnosed and undertreated ([[aga-2023-epi]]).

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
  - [[#Classification / Typing]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
- [[#Therapeutics]]
- [[#See Also]]
- [[#Sources]]

## Assessment

### Establishing the Diagnosis

**Whom to test** — exocrine pancreatic insufficiency (EPI) is a clinical suspicion confirmed by a pancreatic function test; imaging cannot diagnose it.

- **Suspect (high-risk conditions, best practice advice [BPA] 1):** [[chronic-pancreatitis|chronic pancreatitis (CP)]], relapsing [[acute-pancreatitis|acute pancreatitis (AP)]], [[pancreatic-cancer|pancreatic ductal adenocarcinoma (PDAC)]], cystic fibrosis, previous pancreatic surgery.
- **Consider (moderate-risk conditions, BPA 2):** duodenal diseases — [[celiac-disease|celiac]] and [[crohns-disease|Crohn's disease]]; previous intestinal surgery; longstanding diabetes mellitus; hypersecretory states (e.g., [[peptic-ulcer-disease|Zollinger–Ellison syndrome]]).
- **Clinical features (BPA 3):** steatorrhea ± diarrhea, weight loss, [[abdominal-bloating-and-distention|bloating]], excessive flatulence, fat-soluble vitamin (A, D, E, K) deficiencies, protein-calorie malnutrition. In [[chronic-pancreatitis|CP]], symptoms build gradually and may be mild until late stage.

**Pre-test probability — how likely is EPI in each high-risk condition** (this is what decides whether a normal fecal elastase-1 (FE-1) is believable):

| Condition | Prevalence of EPI |
|---|---|
| [[chronic-pancreatitis\|CP]] overall | **>50%**; typically emerges after **5–10 y** of disease |
| CP with chronic alcohol use, smoking, ductal obstruction, atrophy, duct calcifications, or diabetes | **>80%** |
| [[acute-pancreatitis\|AP]] and [[recurrent-acute-pancreatitis\|relapsing AP]] (pooled, on follow-up) | **27%–62%** — similar for both |
| [[pancreatic-cancer\|PDAC]], unresectable | **50%–92%** |
| PDAC, resectable — before treatment / after treatment | **40%–50%** / **75%** |
| Cystic fibrosis | **85%**, presenting at birth or in infancy |

- Abstinence from smoking and alcohol **may delay onset** in CP.
- Ampullary cancer and main-duct [[pancreatic-cysts\|intraductal papillary mucinous neoplasm (IPMN)]] can also cause EPI by obstructing the pancreatic duct.

> Diagnosis rests on **FE-1** — see [[#Severity Assessment]] for the bands and [[#Diagnostics]] for test performance. Response to an empiric pancreatic enzyme replacement therapy (PERT) trial is **unreliable** for diagnosis (BPA 7).
>
> **Exception — when to skip the test:** with a **high pre-test probability** (e.g. steatorrhea in a patient with known pancreatic disease), **PERT may be started without FE-1 testing**. With those conditions but **no symptoms**, measure FE-1 to confirm.

**Whether to test at all — the differential tier decides** ([[aga-2023-epi]]):

| Tier | Conditions | Action |
|---|---|---|
| **Expected and definite** | severe [[chronic-pancreatitis\|CP]], cystic fibrosis, pancreatic head malignancy, total pancreatectomy | **No further testing — initiate PERT** |
| **Possible** | mild-to-moderate CP, severe [[acute-pancreatitis\|AP]], pancreatic malignancy of body/tail, bariatric surgery | Test with FE-1 |
| **Less likely / overlapping** | [[celiac-disease\|celiac disease]], [[inflammatory-bowel-disease\|inflammatory bowel disease (IBD)]], diabetes mellitus | Test, and weigh the alternative diagnosis |

**Approach to suspected EPI — overall algorithm** ([[aga-2023-epi]]):

```mermaid
flowchart TD
    A["Suspected symptoms of EPI<br/>Late: steatorrhea, loose watery stools, undigested food<br/>Under-recognized: diarrhea, abdominal distention,<br/>abdominal pain, flatulence, unexplained weight loss"] --> B["History (medical + surgical), biomarkers,<br/>diet and lifestyle, nutrition assessment<br/>Weight and body mass index (BMI) · muscle mass and strength ·<br/>bone density · diabetes and thyroid disease · inflammatory indices"]
    B --> C["Recognize malnutrition, maldigestion and<br/>malabsorption of nutrients"]
    C --> D["Review the EPI differential diagnosis<br/>(tier table above)"]
    D --> E["Indirect pancreatic function test<br/>FE-1 — most frequently used<br/>Direct testing — invasive, limited centers"]
    E --> F["If positive, initiate PERT<br/>500 units lipase/kg/meal; 250 units/kg/snack<br/>Titrate up to control steatorrhea<br/>Max 2,500 units/kg/meal or 10,000 units/kg/day"]
    F --> G["Dietary management, micronutrient and vitamin<br/>supplementation, follow-up assessments"]
    G --> H["No improvement → re-evaluate the diagnosis and<br/>optimize PERT dose and administration"]
```

### Severity Assessment

**FE-1 bands — the test grades severity, not just presence** ([[aga-2023-epi]]):

| FE-1 (µg/g stool) | Interpretation |
|---|---|
| **<50** | **Severe EPI** — most reliable band for severe disease (stated as "some investigators suggest") |
| **<100** | **Good evidence of EPI** (BPA 4) |
| **100–200** | **Indeterminate** for EPI (BPA 4) |
| **<200** | Considered **abnormal**; <100 is "more consistent with EPI" |

- Under controlled conditions FE-1 **distinguishes normal, moderate, and severe EPI**.
- **Key limitation: FE-1 is insensitive to mild EPI** — a normal value does not exclude early disease in a high-risk patient.
- **Repeat an indeterminate result**, especially with known pancreatic disease and a high probability of EPI.
- *Unit:* the FE-1 thresholds in [[aga-2023-epi]] are in **µg/g**.

### Classification / Typing

| Type | Pathomechanism | Example conditions |
|------|----------------|--------------------|
| **Loss of pancreatic parenchyma** | ↓ enzyme synthesis/secretion, ↓ bicarbonate | [[chronic-pancreatitis\|CP]], [[pancreatic-cancer\|pancreatic cancer]], cystic fibrosis, pancreatic resection |
| **Ductal obstruction** | ↓ enzyme delivery | ampullary tumors, ductal stenosis, pancreatic cancer |
| **↓ endogenous stimulation** | reduced cholecystokinin (CCK)-mediated secretion; enteropathy | [[crohns-disease\|Crohn's]], [[celiac-disease\|celiac]], duodenal resection, [[gastroenteropancreatic-neuroendocrine-tumors\|somatostatinoma]] |
| **Intraluminal inactivation / asynchrony** | enzymes destroyed or mistimed vs. meal | hypersecretory states ([[peptic-ulcer-disease\|gastrinoma]]), dumping syndrome, gastric/short-gut surgery |

## Differential Diagnosis

*Workup: see [[chronic-diarrhea]] (fatty-diarrhea arm).*

Conditions that mimic EPI or blunt the response to enzyme therapy (consider when PERT fails):
- [[celiac-disease]]
- [[small-intestinal-bacterial-overgrowth|small intestinal bacterial overgrowth (SIBO)]]
- longstanding diabetes mellitus
- [[crohns-disease]]
- disaccharidase deficiencies
- [[bile-acid-diarrhea]]
- [[giardiasis]]

## Diagnostics

| Test | Role | Notes / thresholds |
|------|------|--------------------|
| **FE-1** | **Initial test of choice** | Must be on a **semi-solid or solid** stool. **<100 µg/g = good evidence of EPI**; **100–200 µg/g = indeterminate**. Valid **while on PERT** (assay measures chymotrypsin-like elastases 3A/3B; humans do not secrete elastase-1, so no cross-reaction with porcine enzymes). False-positive with watery/diarrheal stool (dilution). **Do not repeat FE-1 to judge treatment response — PERT does not change it and serial values are not informative.** |
| Fecal fat (quantitative) | Rarely needed | Known-fat diet **5 days**, stool collected over the **final 3 days**. **Steatorrhea = coefficient of fat absorption <93%** (>7% of ingested fat in stool). Burdensome; impractical for routine use. |
| Qualitative stool fat (Sudan stain) | Adjunct only | **Nonspecific for EPI.** Use when clinical features are inconclusive or to assess an inadequate response to PERT. |
| Serum pancreatic enzymes (e.g. trypsin) | Alternative indirect test | **Not affected by PERT**, but **unreliable during ongoing pancreatic inflammation**. |
| Cross-sectional imaging (computed tomography [CT]/[[mri-mrcp\|magnetic resonance imaging (MRI)]]/[[endoscopic-ultrasound\|endoscopic ultrasound (EUS)]]) | **Cannot diagnose EPI** | Used to diagnose underlying benign/malignant pancreatic disease. |
| Direct pancreatic function tests | Confirmatory (specialized) | Most accurate but invasive; mainly for early-stage CP. Not widely available in the US. |
| Breath tests | Promising | Not widely available in the US. |
| Fat-soluble vitamins (A, D, E, K), international normalized ratio (INR) | Nutritional assessment | Establish deficiency and baseline. |

## Therapeutics

**PERT — required once EPI is diagnosed.** All formulations are porcine-derived and equally effective at equivalent doses.

- **Dose:** start **≥40,000 United States Pharmacopeia (USP) units of lipase with each meal** (**40,000–50,000** is a reasonable initial dose); **one-half that amount with snacks**. Titrate **up** for larger or higher-fat meals, **down** for smaller or low-fat meals.
  - **Weight-based equivalent:** **500 units lipase/kg/meal** and **250 units lipase/kg/snack** (≈40,000 and 20,000 units for an 80-kg patient).
  - **Maximum: 2,500 units lipase/kg/meal, or 10,000 units lipase/kg/day.** Doses **>120,000 USP units of lipase per meal are seldom required.**
  - **Cystic fibrosis / advanced [[chronic-pancreatitis|CP]] ceiling:** **<10,000 units lipase/kg/day, or <4,000 units per gram of dietary fat per day.**
  - *Anchor:* a normal pancreas delivers ≈**900,000 USP units of lipase per average meal**; ≈**90,000 units (10%)** prevents steatorrhea. Even at high doses PERT does not abolish steatorrhea entirely.
- **Timing:** take **during** the meal (not before/after) — maximizes mixing with the meal. PERT treats the meal, not the pancreas.
- **Acid suppression:** non–enteric-coated preparations require a concurrent **histamine-2 (H2) receptor antagonist or [[proton-pump-inhibitors|proton pump inhibitor (PPI)]]** (acid denatures lipase). **Not required for enteric-coated preparations.**
- **Brand choice:** all products are equipotent at equal lipase doses — **no reason to switch brands for inadequate response**; switching is driven by formulary cost. **Do not use over-the-counter pancreatic enzyme products** — marketed as dietary supplements, with unstandardized, unregulated dosing and unknown efficacy and safety.
- **Duration:** generally **lifelong**; dose reduction may be considered in patients doing well with acceptable nutritional parameters.
- **Adverse effects:** nausea, abdominal cramping, bloating, diarrhea, constipation. Rare — **fibrosing colonopathy**, allergic reaction to porcine protein, hyperuricosuria.
- **Diet:** low-to-moderate fat with frequent smaller meals; **avoid very-low-fat diets** (impair essential fatty acid and fat-soluble vitamin absorption). Routine fat-soluble vitamin supplementation. Avoid alcohol and tobacco; favor high-protein content.
- Endoscopic or surgical pancreatic **ductal drainage does not prevent or improve EPI** (useful for pain only).

**US Food and Drug Administration (FDA)-approved PERT formulations** ([[aga-2023-epi]]):

| Brand | Type | Available lipase strengths (USP units) |
|---|---|---|
| Creon | Enteric-coated microspheres | 3,000 / 6,000 / 12,000 / 24,000 / 36,000 |
| Zenpep | Enteric-coated beads | 3,000 / 5,000 / 10,000 / 15,000 / 20,000 / 25,000 / 40,000 |
| Pancreaze | Enteric-coated microtablets | 2,600 / 4,200 / 10,500 / 16,800 / 21,000 |
| Pertzye | Enteric-coated microspheres | 4,000 / 8,000 / 16,000 / 24,000 |
| **Viokace** | **Non–enteric-coated tablets** — **requires acid suppression** | 10,444 / 20,880 |
| Relizorb | In-line lipase cartridge | For enteral feeding formulas |

**Monitoring**
- **Response markers:** ↓ steatorrhea and gastrointestinal (GI) symptoms; gain of weight, muscle mass, and muscle function; improved fat-soluble vitamin levels.
- **Baseline (BPA 15):** BMI, a quality-of-life measure, fat-soluble vitamin levels, and a **dual-energy x-ray absorptiometry (DXA) scan — repeat every 1–2 years** (osteoporosis/fracture risk).
- **Screen at diagnosis and annually:** vitamins **A, D, E, K, B12**, **folate, magnesium, selenium, zinc, iron**. In stable CP also check **prealbumin and retinol-binding protein, thiamine**, and **hemoglobin A1c** (type 3c diabetes). Reassess disease state and treatment effectiveness **at least annually**.
- **Anthropometrics / muscle:** height, weight, **handgrip strength**, muscle mass (computed tomography or other), BMI; optional psoas muscle size at L3 or a timed up-and-go test.
- Osteopenia/osteoporosis on DXA → calcium and vitamin D intake, weight-bearing exercise, avoid alcohol and smoking. **Vitamin D and K deficiency drives osteopathy and fracture in CP; treatment reduces fracture rates.**
- **Referrals:** certified dietitian at diagnosis for nutritional assessment; endocrinologist if prediabetes or diabetes.
- Untreated EPI → fat malabsorption, malnutrition, sarcopenia, osteoporosis/fracture, reduced quality of life, higher surgical complication and mortality rates.
- **Cost is a real barrier** — prescription PERT is expensive at higher doses; check coverage and patient-assistance programs before assuming nonresponse.

> [!pitfall] A failed PERT trial is usually a dosing or diagnosis problem
> Before calling PERT ineffective, confirm it is taken **during** meals at an adequate dose, add acid suppression if the preparation is non–enteric-coated, check affordability/adherence, and re-screen for the mimics above ([[aga-2023-epi]]).

---

## See Also

[[chronic-pancreatitis]], [[acute-pancreatitis]], [[endoscopic-ultrasound]], [[mri-mrcp]], [[recurrent-acute-pancreatitis]], [[pancreatic-cancer]], [[pancreatic-cysts]], [[hereditary-pancreatitis]], [[autoimmune-pancreatitis]], [[celiac-disease]], [[crohns-disease]], [[inflammatory-bowel-disease]], [[peptic-ulcer-disease]], [[small-intestinal-bacterial-overgrowth]], [[chronic-diarrhea]], [[abdominal-bloating-and-distention]], [[bile-acid-diarrhea]], [[giardiasis]], [[gastroenteropancreatic-neuroendocrine-tumors]], [[proton-pump-inhibitors]]

---

## Sources

1. [[aga-2023-epi|AGA Clinical Practice Update on the Epidemiology, Evaluation, and Management of Exocrine Pancreatic Insufficiency (2023)]]
