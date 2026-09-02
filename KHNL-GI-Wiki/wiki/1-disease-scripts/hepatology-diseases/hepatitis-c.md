---
title: "Hepatitis C"
category: disease-script
tags: [hepatitis-c, HCV, direct-acting-antivirals, DAA, cirrhosis, HCC, SVR, glecaprevir, pibrentasvir, sofosbuvir, velpatasvir, fibrosis, liver, antiviral, screening]
created: 2026-05-28
updated: 2026-09-02
sources: [aasld-idsa-2023-hcv, aasld-idsa-2011-hcv-genotype1]
---

## Assessment

### Establishing the Diagnosis

HCV is a blood-borne RNA virus (Flaviviridae) infecting ~58 million people globally; ~2.4 million in the US. Leading cause of [[cirrhosis|cirrhosis]] and [[hepatocellular-carcinoma|hepatocellular carcinoma]]; most common indication for [[liver-transplantation|liver transplantation]] prior to the [[direct-acting-antivirals|DAA]] era.

**Screening (universal):**

- All adults ≥18 years at least once (USPSTF grade B)
- [[hepatitis-c-in-pregnancy|All pregnancies]] (each pregnancy)
- Annual HCV RNA testing for PWID with ongoing IDU
- Testing at HIV PrEP initiation and annually thereafter for MSM

**Initial testing algorithm:**

1. **HCV antibody** (anti-HCV): high sensitivity/specificity for prior exposure; positive in resolved + active infection
2. **Reflex HCV RNA (quantitative):** obtain automatically with positive antibody to confirm active infection (vs. spontaneous clearance). HCV RNA detectable = active infection requiring treatment.
3. **Genotyping:** NOT required before treatment with pangenotypic regimens (G/P or SOF/VEL); required if using ledipasvir/sofosbuvir (genotype-specific) or if considering NS5A RAS testing for genotype 3 + cirrhosis [[aasld-idsa-2023-hcv]]

**Natural history:** 75–85% chronic infection after acute HCV exposure. Fibrosis progression over 20–30 years; ~20–30% develop cirrhosis. Annual HCC risk in cirrhosis: 1–4%.

### Severity Assessment

Fibrosis staging before treatment to guide duration, regimen selection, and post-SVR surveillance:

| Tool | Cutoffs | Notes |
|---|---|---|
| FIB-4 | <1.30 = low fibrosis; >3.25 = advanced fibrosis/cirrhosis | Age/AST/ALT/platelet; calculated online |
| [[liver-stiffness-measurement\|VCTE (FibroScan)]] | ≥12.5 kPa = compensated cirrhosis | Aetiology-specific cutoffs; less reliable with [[obesity]]/elevated ALT |
| [[liver-biopsy\|Liver biopsy]] | METAVIR F0–F4 (stage definitions on [[liver-biopsy]]) | Rarely needed; use for diagnostic uncertainty. Do **not** convert METAVIR stages to another scheme |
| Child-Pugh score | A/B/C | Decompensated = CTP ≥7 (class B or C); key regimen-selection criterion. Point table on [[cirrhosis]] |

**Cirrhosis determination for treatment selection:**

- Cirrhosis assumed if **any one** of: [[liver-stiffness-measurement|liver stiffness]] >12.5 kPa; FIB-4 >3.25; [[noninvasive-liver-disease-assessment|noninvasive serologic test]] (FibroSure/ELF) positive; [[liver-biopsy|liver biopsy]]; liver nodularity/splenomegaly on imaging; platelet <150,000/mm³
  - *Gap: [[aasld-idsa-2023-hcv]] gives no numeric cut-off for "FibroSure/ELF positive" — the other five criteria are quantified, this one is not. Use the reporting lab's own threshold.*
- **Decompensated cirrhosis = Child-Turcotte-Pugh class B or C (total score ≥7).** ⚠ CTP is a **point sum across five variables** — [[ascites]], [[hepatic-encephalopathy|HE]], total bilirubin, albumin, INR — **not** a "presence of any one of" rule. A single abnormal variable (e.g. albumin 3.4 g/dL alone) does **not** make a patient decompensated. Score the full table on [[cirrhosis]].
  - Clinical anchors that commonly drive a class B/C score: ascites, HE, bilirubin >2.0 mg/dL, albumin ≤3.5 g/dL, INR ≥1.7.
  - **Decision this gates:** NS3/4A protease inhibitors (glecaprevir, voxilaprevir, grazoprevir) are **contraindicated** in decompensated ([[cirrhosis|CTP B/C]]) disease — see Therapeutics.

---

## Differential Diagnosis

*Workup: see [[abnormal-liver-chemistries]].*

- [[chronic-hepatitis-b]] — HBsAg; test at baseline for HCV patients (reactivation risk during HCV treatment if HBsAg+)
- [[autoimmune-hepatitis]] — ANA, ASMA, IgG; can coexist with HCV
- [[alcohol-associated-liver-disease]] — AST:ALT >2:1; alcohol history
- [[nafld-masld]] — metabolic risk factors; steatosis on imaging
- [[drug-induced-liver-injury]] — medication/supplement history, RUCAM

---

## Diagnostics

| Test | Purpose |
|---|---|
| HCV antibody | Screening |
| Quantitative HCV RNA | Confirm active infection; baseline viral load |
| HCV genotype | Required for some non-pangenotypic regimens; NS5A RAS if GT3 + cirrhosis |
| CBC | Baseline; thrombocytopenia suggests [[portal-hypertension\|portal hypertension]] |
| Comprehensive metabolic panel (AST, ALT, bilirubin, albumin, INR, creatinine) | Baseline hepatic function; Child-Pugh calculation |
| FIB-4 or VCTE | Fibrosis staging |
| HBsAg, anti-HBs, anti-HBc | Reactivation risk (HBsAg+: prophylactic NA; resolved HBV: monitor) |
| Anti-HIV | Simplified algorithm eligibility |
| Serum pregnancy test | Contraindication counseling for DAAs in pregnancy |
| Medication reconciliation | Drug-drug interaction assessment (University of Liverpool HCV checker) |
| Liver ultrasound ± AFP | Cirrhosis: baseline HCC screening |

---

## Therapeutics

### Guiding Principle

Universal HCV treatment recommended for all persons with acute or chronic HCV infection (except those with short life expectancy not remediable by HCV therapy, LT, or other directed therapy). Active drug use is NOT a contraindication [[aasld-idsa-2023-hcv]].

### Treatment-Naive Without Cirrhosis or With Compensated Cirrhosis

**Simplified algorithm (preferred)** — applicable when: treatment-naive, all genotypes, including HIV coinfected, without cirrhosis OR with compensated cirrhosis (Child-Pugh A):

| Regimen | Duration | Caveats |
|---|---|---|
| **Glecaprevir/pibrentasvir (G/P)** (300/120 mg with food) | 8 weeks | Preferred pangenotypic; compensated cirrhosis: 8 wk (EXPEDITION-8, SVR12 98%); genotypes 1–6 |
| **Sofosbuvir/velpatasvir (SOF/VEL)** (400/100 mg daily) | 12 weeks | Pangenotypic; GT3 + comp cirrhosis: consider NS5A Y93H RAS testing; if present, add wt-based RBV or switch regimen |
| Ledipasvir/sofosbuvir (LDV/SOF) | 12 wk (GT 1, 4, 5, 6); 8 wk (GT1 without cirrhosis, non-HIV, RNA <6M IU/mL) | Genotype-specific; not for GT6e if subtype known |

**Minimal monitoring (simplified algorithm):** No pretreatment genotyping; no scheduled on-treatment labs; remote contact at week 4 (adherence) and week 22 (SVR assessment at week 24).

**Excluded from simplified algorithm:** Previously treated; HBsAg+; compensated cirrhosis + eGFR <30; decompensated cirrhosis; pregnancy; known/suspected HCC; prior [[liver-transplantation|liver transplantation]].

### Treatment-Naive With Decompensated Cirrhosis

NS3/4A protease inhibitors (glecaprevir, grazoprevir, voxilaprevir) are **CONTRAINDICATED** in decompensated cirrhosis.

| Regimen | Duration | Notes |
|---|---|---|
| **SOF/VEL + weight-based RBV** (600 mg/d for CTP C; titrate as tolerated) | 12 wk | Recommended; genotypes 1–6 |
| **SOF/VEL** alone | 24 wk | For RBV-ineligible patients |
| LDV/SOF + wt-based RBV | 12 wk | Genotypes 1, 4, 5, 6; same **600 mg/d low initial RBV dose for CTP class C**, increase as tolerated |
| LDV/SOF alone | 24 wk | RBV-ineligible; genotypes 1, 4, 5, 6 |

**Post-SVR in decompensated cirrhosis:** Continue monitoring for HCC, [[variceal-upper-gi-bleeding|varices]], and complications even after SVR. Some patients recompensate; list for LT if not improving.

### Pretreatment Assessment (Figure 4/5 in source)

Before initiating:

- Calculate FIB-4; assess for cirrhosis
- Obtain CBC, hepatic function panel (total and direct bilirubin, albumin, ALT, AST); determine eGFR
- Perform medication reconciliation (drug-drug interaction check)
- Check quantitative HCV RNA
- Obtain HIV antibody test
- Check HBsAg (HBV reactivation risk); if HBsAg+: initiate prophylactic NA therapy
- Obtain serum pregnancy test; counsel about pregnancy risks
- Educate about DAA administration and adherence

**On-treatment monitoring:**

- Monitor patients taking diabetes medication for hypoglycemia
- Monitor INR for subtherapeutic anticoagulation with warfarin use
- No laboratory monitoring required for other patients (simplified algorithm)
- In-person, telehealth, or phone visit may be scheduled for support or symptom assessment

### Retreatment

**Sofosbuvir-based regimen failure:**

- SOF/VEL/VOX 12 weeks (Recommended, genotypes 1–6); extend to 24 weeks or add wt-based RBV for GT3 + compensated cirrhosis
- Glecaprevir/pibrentasvir 16 weeks (Alternative; not if prior NS5A + NS3/4A inhibitor exposure)

**G/P failure:**

- G/P + sofosbuvir + wt-based RBV 16 weeks (Recommended, IIa, B; MAGELLAN-3: 96% SVR12)
- SOF/VEL/VOX 12 weeks (Recommended, IIa, B)

**Decompensated cirrhosis with prior treatment failure:**

- SOF/VEL + wt-based RBV 24 weeks OR LDV/SOF + wt-based RBV 24 weeks

### Incomplete Adherence Management

**BEFORE 28 days of therapy:**

- Missed ≤7 days: Restart immediately; complete full planned duration
- Missed ≥8 days: Restart immediately; obtain HCV RNA same day. If negative → complete planned course (±4 weeks extension for GT3/compensated cirrhosis). If positive (>25 IU/L) → extend by 4 weeks.

**AFTER ≥28 days of therapy:**

- Missed ≤7 days: Restart; complete full duration
- Missed 8–20 days: Restart; obtain HCV RNA. If negative → complete; if positive → stop and retreat
- Missed ≥21 days: Stop; assess SVR12; if no SVR, retreat

### Posttransplant HCV

For recurrent HCV post liver or kidney transplantation:

- G/P 12 wk (GT 1–6) or SOF/VEL 12 wk (GT 1–6) or LDV/SOF 12 wk (GT 1, 4, 5, 6)
- **DDI caution:** [[calcineurin-inhibitors|Cyclosporine]] significantly increases AUC of elbasvir/grazoprevir and SOF/VEL/VOX; coadministration contraindicated

**HCV-viremic donor organs → HCV-negative recipient:**

- Non-liver solid organs: G/P 8 wk or SOF/VEL 12 wk; initiate immediately pretransplant or within first week posttransplant
- Liver grafts: G/P 12 wk or SOF/VEL 12 wk; initiate within first 2 weeks, preferably within first week

### SVR and Posttreatment Care

**SVR12** = undetectable HCV RNA ≥12 weeks after completing therapy = virologic cure.

**After achieving SVR — if no cirrhosis:** No follow-up required for non-cirrhotics (unless at ongoing reinfection risk → annual HCV RNA).

**After achieving SVR — if cirrhosis:**

- Continue **[[hcc-surveillance|HCC surveillance]]:** ultrasound ± AFP every 6 months (indefinitely)
- **Variceal surveillance:** per AASLD portal hypertension guidance ([[portal-hypertension]]); NSBB if CSPH present; decompensated patients may recompensate but surveillance continues
- Advise against excess alcohol

**Post-SVR liver improvement:** Cirrhosis regression documented histologically and by decreased liver stiffness in long-term follow-up. However, HCC risk remains elevated (though reduced ~75%) — surveillance indefinite for those who were cirrhotic.

---

## See Also

[[chronic-hepatitis-b]], [[direct-acting-antivirals]], [[portal-hypertension]], [[hepatocellular-carcinoma]], [[hcc-surveillance]], [[liver-transplantation]], [[liver-disease-in-pregnancy]], [[hepatitis-c-in-pregnancy]], [[aki-in-cirrhosis]], [[hepatic-encephalopathy]], [[variceal-upper-gi-bleeding]], [[abnormal-liver-chemistries]], [[noninvasive-liver-disease-assessment]], [[autoimmune-hepatitis]], [[alcohol-associated-liver-disease]], [[nafld-masld]], [[drug-induced-liver-injury]], [[cirrhosis]], [[liver-biopsy]], [[liver-stiffness-measurement]], [[obesity]], [[calcineurin-inhibitors]]

---

## Sources

1. [[aasld-idsa-2023-hcv|AASLD-IDSA 2023 Hepatitis C Guidance Update]]
2. [[aasld-idsa-2011-hcv-genotype1|AASLD 2011: Treatment of Genotype 1 Chronic HCV (historical — boceprevir/telaprevir era)]]
