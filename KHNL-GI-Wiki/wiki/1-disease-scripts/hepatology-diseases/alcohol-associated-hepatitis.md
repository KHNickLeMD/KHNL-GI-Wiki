---
title: "Alcohol-Associated Hepatitis"
category: disease-script
tags: [alcoholic-hepatitis, ald, hepatology, corticosteroids, prednisolone, lille-score, meld, mdf, nac, liver-transplant, stopah, salt-score, accelerate-ah]
created: 2026-09-15
updated: 2026-10-29
sources: [aasld-2020-ald, acg-2024-ald, aga-2017-severe-alcoholic-hepatitis, lee-2018-accelerate-ah]
---

# Alcohol-Associated Hepatitis

Acute syndrome of jaundice and liver failure arising on a background of heavy alcohol use; the severe form is a distinct clinical entity from chronic [[alcohol-associated-liver-disease|alcohol-associated liver disease (ALD)]] and from [[cirrhosis]].

*This page owns the alcohol-associated hepatitis (AH) decisions — diagnostic criteria, the severity scores, the corticosteroid regimen and early transplantation. The wider ALD spectrum, alcohol-use screening and biomarkers, fibrosis staging, alcohol-use-disorder (AUD) pharmacotherapy and post-transplant management live on [[alcohol-associated-liver-disease]].*

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
  - [[#Classification / Typing]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
- [[#Therapeutics]]
  - [[#Severe AH (MELD >20)]]
  - [[#Moderate AH (MELD ≤20)]]
  - [[#Supportive Care]]
  - [[#Early Liver Transplantation]]
- [[#See Also]]
- [[#Sources]]

## Assessment

### Establishing the Diagnosis

**Consensus clinical diagnosis — no [[liver-biopsy|biopsy]] required when the criteria are met and no confounder is present** ([[aasld-2020-ald]]):

| Feature | Finding |
|---|---|
| Onset | Jaundice within the **prior 8 weeks** |
| Alcohol use | >40 g/day (female) or >60 g/day (male) for ≥6 months, with **<60 days abstinence** before jaundice |
| aspartate aminotransferase (AST) | **>50 IU/L**; usually <400 IU/L |
| alanine aminotransferase (ALT) | Usually <400 IU/L |
| AST:ALT ratio | **>1.5** |
| Total bilirubin | **>3.0 mg/dL** |

**Histology (when a biopsy is done):** macrovesicular steatosis with lobular neutrophilic inflammation, hepatocyte ballooning, Mallory-Denk bodies, pericellular ("chicken-wire") fibrosis, centrilobular injury. Biopsy **cannot distinguish** alcohol-associated from metabolic steatohepatitis — its role is to resolve a diagnostic dilemma, not to grade severity.

### Severity Assessment

**Model for End-Stage Liver Disease (MELD) is the operative score** ([[acg-2024-ald]]) *(the MELD-variant comparison and the Child-Turcotte-Pugh point table live on [[cirrhosis]])*:

- **Severe AH = MELD >20** → corticosteroids if no contraindication (American College of Gastroenterology [ACG] 2024 **Rec 17**, *strong, moderate*). Use the **original MELD**, not MELD-Na — the recommendations were derived on original MELD.
- **Moderate AH = MELD ≤20** (Key concept 21) — significant morbidity and mortality, but no steroid indication.
- **MELD 25–39 derives maximum benefit** from corticosteroids; **weigh risks carefully if MELD >50** (Key concept 26).
- MELD >20 carries ~20% 90-day mortality; trajectory (rising vs falling) is itself prognostic.
- MELD + Lille together: MELD ≥21 **and** Lille ≥0.45 → 1.9-fold higher 2-month mortality than MELD 21 with Lille 0.16 (23.7% vs 12.5%) [[aasld-2020-ald]].

> [!pitfall] Every AH score rules out better than it rules in
> MELD, Maddrey discriminant function (MDF), Glasgow Alcoholic Hepatitis Score (GAHS) and the age-bilirubin-international normalized ratio-creatinine (ABIC) score all exclude severe disease well (**86–100%**) but carry a **positive predictive value of only 17–50%** — a high score is not a reliable prediction that this patient will die ([[aasld-2020-ald]]).

**MDF — historical, now second-line:**

- MDF = 4.6 × (prothrombin time [PT] patient − PT control) + total bilirubin (mg/dL).
- **MDF ≥32** predicts ~20–50% 30-day mortality; historically the steroid-eligibility threshold, and still the entry criterion of most AH trials [[aasld-2020-ald]].
- ⚠ **What changed:** in the STOPAH post-hoc analysis (n = 1,068) MDF was **inferior** (receiver operating characteristic [ROC] 0.67) to MELD, GAHS and ABIC (ROC 0.704–0.726) for 28- and 90-day mortality, and ACG 2024 recommends on MELD instead [[acg-2024-ald]]. Readers carrying "MDF ≥32" should switch to **MELD >20**.

**Score comparison — which variables each score uses** ([[aasld-2020-ald]] Tables 7–8). The scores differ mainly in what they add on top of bilirubin + PT/international normalized ratio (INR); that is what makes GAHS (adds white blood cell count [WBC]) and Lille (adds albumin) distinct:

| Score | Bili | PT/INR | Creatinine/blood urea nitrogen | Age | Albumin | WBC | Stratification | Clinical use |
|---|---|---|---|---|---|---|---|---|
| **MDF** | + | + | — | — | — | — | Severe ≥32 | Initiate corticosteroids |
| **MELD** | + | + | + | — | — | — | Severe ≥21, but a continuous scale | Prognosis only |
| **ABIC** | + | + | + | + | — | — | Low risk <6.71 (three-tiered) | Prognosis only |
| **GAHS** | + | + | + | + | — | + | Poor prognosis ≥9 | Initiate corticosteroids **if ≥9 AND MDF ≥32** |
| **Lille** | + | + | + | + | + | — | ≥0.45 nonresponse / <0.45 response | Day-7 (or day-4) stop-vs-continue decision |

- **ABIC** — threshold for initiating steroids uncertain; not verified outside Spain.
- **GAHS** — improves specificity of identifying which MDF ≥32 patients need corticosteroids (lowers the number needed to treat); **not validated outside the UK**.
- **Lille** — permits early cessation, but **decision-making is uncertain with a partial response (0.46–0.56)**.
- [[aasld-2020-ald]] names each score's variables and cutoffs but does not print the ABIC, GAHS or Lille coefficients; it directs readers to an online calculator (`lillemodel.com`) for Lille. Compute these three with a calculator.

**Applying the Lille score** — the one *dynamic* score; computed from paired **day-0 and day-7** values, so it answers "is this patient responding?", not "should steroids start?" ([[acg-2024-ald]] Key concept 27):

- **≥0.45 = non-responder** → discontinue prednisolone.
- **<0.45 = responder** → continue prednisolone to 28 days total.
- **Day-4 Lille is as accurate as day-7** and spares 3 days of futile steroid exposure in non-responders.

### Classification / Typing

Three diagnostic certainty categories ([[aasld-2020-ald]]) — they determine whether biopsy is needed, not the treatment:

| Category | Definition | Biopsy |
|---|---|---|
| **Definite AH** | Clinical criteria met **and** biopsy-proven | Done |
| **Probable AH** | Clinical criteria met, **no** confounding factors | Not required |
| **Possible AH** | Clinical criteria met **with** confounding factors | Required to confirm |

*Confounders that trigger biopsy:* possible ischemic hepatitis (severe [[upper-gi-bleeding|upper gastrointestinal bleeding (UGIB)]], hypotension, or cocaine within 7 days); possible [[drug-induced-liver-injury|drug-induced liver injury (DILI)]] (suspect drug within 30 days of jaundice); uncertain alcohol history; atypical labs (AST <50 or >400, AST/ALT <1.5, antinuclear antibody (ANA) >1:160 or smooth muscle antibody (SMA) >1:80).

## Differential Diagnosis

*Workup: see [[abnormal-liver-chemistries]].*

- [[nafld-masld|metabolic dysfunction-associated steatotic liver disease/steatohepatitis (MASLD/MASH)]] — identical histology; separated by the alcohol history (overlap exists).
- [[drug-induced-liver-injury|Drug-induced liver injury]] — medication history essential; can mimic AH clinically.
- Viral hepatitis — [[chronic-hepatitis-b|hepatitis B virus (HBV)]], [[hepatitis-c|hepatitis C virus (HCV)]], hepatitis E virus (HEV).
- [[autoimmune-hepatitis|Autoimmune hepatitis]] — elevated IgG, autoantibodies.
- Ischemic hepatitis — AST >1000, cardiac/hypotensive history.
- Acute biliary obstruction ([[choledocholithiasis|common bile duct (CBD) stone]]) — cholestatic pattern; excluded on ultrasound.
- [[acute-on-chronic-liver-failure|acute-on-chronic liver failure (ACLF)]] — AH is a common precipitant; the two overlap rather than exclude each other.

## Diagnostics

- **Labs:** bilirubin, AST/ALT, INR/PT, creatinine, albumin, WBC — these are both the diagnostic criteria and the inputs to every severity score above. Lipase to exclude concomitant [[acute-pancreatitis|pancreatitis]].
- **Abdominal ultrasound** — exclude biliary obstruction and assess for [[cirrhosis]]/[[portal-hypertension|portal hypertension]].
- **Infection screen before steroids** — chest radiograph plus blood, urine and ascitic-fluid cultures ([[aasld-2020-ald]]).
- **Liver biopsy** (transjugular when coagulopathic) — only for *possible* AH, i.e. when a confounder is present.
- Alcohol-use biomarkers, non-invasive fibrosis tests and the genetic susceptibility variants: [[alcohol-associated-liver-disease]].

**Acute kidney injury (AKI) in AH** — common, from the hemodynamics of portal hypertension overlapping a systemic inflammatory response → [[aki-in-cirrhosis|hepatorenal syndrome (HRS)]] [[aasld-2020-ald]]:

- **Serum creatinine >2.5 mg/dL is a relative contraindication to corticosteroids** (most AH trials excluded these patients). **If the AKI resolves, reconsider steroids.**
- Avoid intravenous (IV) contrast, aminoglycosides and nonsteroidal anti-inflammatory drugs (NSAIDs); use diuretics cautiously; treat HRS early with [[albumin]] and vasoconstrictors — management detail on [[aki-in-cirrhosis]].

## Therapeutics

![[ald-2024-aah-management-algorithm-12.png|700x475]]
*Figure 1 — Algorithmic approach toward diagnosis and management of alcohol-associated hepatitis. ([[acg-2024-ald]])*

### Severe AH (MELD >20)

**Prednisolone 40 mg/day orally (PO) × 28 days** — first-line ([[acg-2024-ald]] Rec 17; [[aasld-2020-ald]] Guidance Statement [GS] 14, which frames eligibility as MDF ≥32):

- **Evidence:** individual-patient-data meta-analysis (11 randomized controlled trials [RCTs], n = 2,111) — 28-day mortality hazard ratio 0.64 (95% confidence interval [CI] 0.48–0.86). STOPAH (n = 1,103) — odds ratio 0.609 for 28-day survival (P = 0.015), **no benefit at 90 days or 1 year**.
- Even the highest MDF quartile (≥68) responded similarly — a very high score does not preclude treatment, but demands a careful search for occult infection and multiorgan failure.

**Contraindications to prednisolone** [[aasld-2020-ald]]:

- **Uncontrolled infection** ([[spontaneous-bacterial-peritonitis|spontaneous bacterial peritonitis (SBP)]], pneumonia, cellulitis, urinary tract infection) — screen first, treat, then re-evaluate. Infection alone does **not** predict short-term mortality in steroid responders.
- **AKI with creatinine >2.5 mg/dL** (relative — reconsider if it resolves).
- **Uncontrolled UGIB** — control it first; a bleed alone is not absolute (retrospective data support starting ~5 days after the episode).
- Active HBV, HCV, DILI, [[hepatocellular-carcinoma|hepatocellular carcinoma]], acute pancreatitis, human immunodeficiency virus, tuberculosis.
- Multiorgan failure or shock.

**IV N-acetylcysteine (NAC) — add it to prednisolone** ([[acg-2024-ald]] **Rec 20**, *strong, moderate*; [[aasld-2020-ald]] GS-15 calls it a possible benefit — the newer ACG grading governs):

- Dosing (hepatoprotective): day 1 **150 mg/kg over 1 h → 12.5 mg/kg/h × 4 h → 6.25 mg/kg/h × 16 h**, then continue a reduced infusion to **5 days** total.
- Evidence: Nguyen-Khac RCT — 1-month mortality **8% vs 24%** with prednisolone + placebo (P = 0.006), no benefit at 3 or 6 months; network meta-analysis (22 RCTs, n = 2,621) relative risk 0.28.

**What not to give:**

- **Pentoxifylline — abandoned.** [[aasld-2020-ald]] GS-19 no longer recommends it; [[acg-2024-ald]] **Rec 18** recommends **against** it (*strong, moderate*). STOPAH showed no benefit at any time point. ⚠ A reversal of the 2010 AASLD guideline, which recommended it.
- **No universal antibiotic prophylaxis** ([[acg-2024-ald]] **Rec 15**, *strong, moderate*). Prednisolone + antibiotic × 30 days lowered cumulative infections (42 vs 59 events; hazard ratio 0.616, P = 0.015) but **not 60-day mortality** (24 vs 31 deaths). Treat documented infection only.
- **Granulocyte colony stimulating factor and microbiome-based therapies — insufficient data** to determine a role ([[acg-2024-ald]] **Rec 19**, *conditional, moderate*).

**Then assess response at day 4 or 7 with [[#Severity Assessment|Lille]].** Non-response (≥0.45) → stop prednisolone and consider early transplant referral. **Four or more organ failures + steroid non-response + ineligible for early liver transplantation (LT) → engage palliative care** ([[acg-2024-ald]] Key concept 28).

### Moderate AH (MELD ≤20)

- **No corticosteroid indication** — but ACG 2024 flags moderate AH as carrying significant morbidity and mortality and as an under-studied phenotype (Key concept 21). Do not read "moderate" as benign.
- Abstinence, nutrition, complication management, and AUD treatment started early.

### Supportive Care

- **Nutrition — near-universally malnourished.** Goal **35 kcal/kg/day with 1.2–1.5 g/kg/day protein**; intake **<21 kcal/kg/day mandates nutrition support**, preferably oral then enteral ([[acg-2024-ald]] Rec 16, *strong, moderate*). **Thiamine before any glucose-containing fluid.** Targets, the escalation order and the micronutrients are on [[nutrition-in-liver-disease]].
- **Abstinence is the single determinant of long-term survival** ([[aasld-2020-ald]] GS-18); AUD pharmacotherapy and behavioural treatment are on [[alcohol-associated-liver-disease]]. Alcohol withdrawal can coexist with [[hepatic-encephalopathy]] — distinguish them before escalating sedation.
- Manage [[ascites]]/SBP, AKI, hepatic encephalopathy and [[variceal-upper-gi-bleeding|variceal bleeding]] as in decompensated [[cirrhosis]].

### Early Liver Transplantation

**ELT is for the steroid non-responder, and selection is the whole intervention.** [[aasld-2020-ald]] GS-22 supports it in carefully selected severe AH non-responders with favourable psychosocial profiles; a fixed abstinence interval is **not** a listing criterion (see [[alcohol-associated-liver-disease]] for the ALD-wide transplant rules).

**Candidate criteria** (center-dependent, not universal):

- Severe AH as the **first** liver-decompensating event (no prior ALD diagnosis, no prior AH episode).
- **Non-responder to medical therapy** (Lille ≥0.45).
- No prior decompensation from cirrhosis.
- Insight into AUD, commitment to abstinence, strong psychosocial support — requires addiction-specialist evaluation.
- No severe ongoing multiorgan failure precluding surgery.

**Outcomes — two cohorts, both selected:**

- **Mathurin et al. (France/Belgium)** — prospective multicenter study, *not* an RCT (historical controls). 26 patients transplanted after unanimous consensus of multiple teams plus addiction assessment: **6-month survival 77% ± 8% vs 23% ± 8%** (P <0.001), low relapse. The framing number: **~90% of steroid non-responders were excluded** for poor psychosocial profile before those 26 were transplanted [[aasld-2020-ald]].
- **ACCELERATE-AH** — US retrospective multicenter cohort, 147 patients, 12 centers / 8 United Network for Organ Sharing (UNOS) regions [[lee-2018-accelerate-ah]]:

| | |
|---|---|
| Who was transplanted | Severe AH by **MDF ≥32**, **no prior liver disease and no prior AH episode**; median MDF 78, median day-7 Lille **0.82**, median **MELD-Na 39** at LT ⚠ |
| Abstinence before LT | Median **55 days** (interquartile range 36–91) — **no mandated interval** |
| Survival | **94% at 1 y** (95% CI 89–97), **84% at 3 y** (95% CI 75–90) |
| **Any** post-LT alcohol use | **25% at 1 y**, **34% at 3 y**; median time to first drink 160 days |
| **Sustained** post-LT use | **10% at 1 y**, **17% at 3 y** |
| What actually costs lives | **Sustained** use, not a slip — hazard ratio **4.59** for death (95% CI 1.45–14.54, P = .01). 3-year survival 97% (no use) vs 75% (any use), P = .03 |
| Who got selected | Of 432 severe-AH patients presented to committee, **35.9% listed, 29.1% transplanted**; between-center listing rates **13%–100%** |

- ⚠ **MELD vs MELD-Na:** the primary paper reports **MELD-Na** 39; [[aasld-2020-ald]] restates it as "median MELD score of 39". The steroid threshold above is **original MELD** — do not mix the scales.
- ⚠ **Selection, not treatment effect** — these are the outcomes of a rigorously selected cohort and cannot be transported to unselected severe AH.
- **Availability:** at least **a quarter of US centers** have done at least one early AH transplant, but **most fewer than five**, with representation from every UNOS region — so referral to such a center is reasonable for a minority of appropriate patients [[aasld-2020-ald]].

**Sustained Alcohol Use Post-Transplant (SALT) score** — four pre-LT variables predicting **sustained** post-LT use, derived from ACCELERATE-AH and **not yet validated** [[aasld-2020-ald]]:

| Variable | Points |
|---|---|
| >10 drinks/day at initial presentation | **4** |
| Multiple prior rehabilitation attempts | **4** |
| Prior alcohol-associated legal issues | **2** |
| Prior illicit substance use | **1** |

> [!pitfall] SALT rules out relapse; it does not rule it in
> **SALT <5 → 95% negative predictive value** (95% CI 89–98%) for sustained post-LT use — but the **positive predictive value is only 25–50%** ([[acg-2024-ald]]). Like the Stanford Integrated Psychosocial Assessment for Transplantation, the High Risk for Alcohol Relapse score, the Michigan Alcoholism Prognostic Scale and the Hopkins Psychosocial Score, it is used **"in addition to the addiction team's evaluation"** — never as the reason to decline a candidate.

---

## See Also

[[alcohol-associated-liver-disease]], [[cirrhosis]], [[acute-on-chronic-liver-failure]], [[liver-transplantation]], [[nutrition-in-liver-disease]], [[abnormal-liver-chemistries]], [[liver-biopsy]], [[aki-in-cirrhosis]], [[hepatic-encephalopathy]], [[drug-induced-liver-injury]], [[nafld-masld]], [[albumin]], [[ascites]], [[spontaneous-bacterial-peritonitis]], [[variceal-upper-gi-bleeding]], [[upper-gi-bleeding]], [[portal-hypertension]], [[hepatocellular-carcinoma]], [[acute-pancreatitis]]

---

## Sources

1. [[aasld-2020-ald|AASLD 2019/2020 Practice Guidance: Diagnosis and Treatment of Alcohol-Associated Liver Diseases]]
2. [[acg-2024-ald|ACG Clinical Guideline: Alcohol-Associated Liver Disease (2024)]]
3. [[aga-2017-severe-alcoholic-hepatitis|AGA Clinical Practice Update: Medical Management of Severe Alcoholic Hepatitis — Expert Review (2017)]]
4. [[lee-2018-accelerate-ah|Outcomes of Early Liver Transplantation for Patients With Severe Alcoholic Hepatitis (ACCELERATE-AH)]]
