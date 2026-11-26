---
title: "Alpha-1 Antitrypsin Deficiency–Associated Liver Disease"
category: disease-script
tags: [alpha-1-antitrypsin, aatd, aatd-ld, serpina1, pizz, liver-fibrosis, noninvasive-testing, vcte, cirrhosis, genetic-liver-disease]
created: 2026-11-09
updated: 2026-11-26
quality_reviewed: 2026-11-26
verified: 2026-11-26
sources: [aga-aasld-easl-2026-aatd-liver-disease]
---

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
  - [[#Classification by Genotype]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
  - [[#Serum AAT Level]]
  - [[#Genotyping]]
  - [[#Fibrosis Staging]]
  - [[#Liver Biopsy]]
- [[#Therapeutics]]
  - [[#Monitoring]]
  - [[#Cirrhosis Care and Transplantation]]
  - [[#Drug Therapy]]
- [[#See Also]]
- [[#Sources]]

## Assessment

### Establishing the Diagnosis

**Alpha-1 antitrypsin deficiency–associated liver disease (AATD-LD)** — the consensus nomenclature and case definition ([[aga-aasld-easl-2026-aatd-liver-disease|AGA/AASLD/EASL/Alpha-1 Foundation 2026]]):

> **AATD-LD = adults with the PiZZ genotype who exhibit recurrently elevated liver enzymes (aspartate aminotransferase [AST], alanine aminotransferase [ALT], or γ-glutamyl transferase [GGT]) and/or evidence of significant liver fibrosis (stage ≥2 on a 0–4 scale).**

- Fibrosis limb: proposed **liver stiffness measurement (LSM) cutoff 8 kPa by vibration-controlled transient elastography (VCTE)**
- Alpha-1 antitrypsin deficiency (AATD) itself is a rare inherited disorder of the **SERPINA1** gene — **autosomal codominant**, producing reduced serum levels and dysfunctional forms of the alpha-1 antitrypsin (AAT) protein
- The **Z allele** (**Glu342Lys** substitution) is the most common pathogenic variant
- **Pathogenesis is a toxic gain-of-function**: misfolded AAT accumulates in the hepatocyte endoplasmic reticulum → cellular stress, inflammation, fibrosis — a **different mechanism from the lung disease** (protease–antiprotease imbalance)

> [!pitfall] Normal liver enzymes do not exclude significant fibrosis
> **20%–36% of PiZZ adults have clinically significant fibrosis**, but only **11%–24%** have elevated liver function tests (AST 13%–15%, ALT 11%–19%, GGT 13%–24%) — abnormalities being commoner with comorbid obesity or diabetes. Stage the fibrosis; don't wait for the enzymes ([[aga-aasld-easl-2026-aatd-liver-disease]]).

**Who to test** — case detection is indicated in any of:

- Recurrently elevated AST/ALT/GGT
- **Hepatic fibrosis ≥F2, including cirrhosis** — anyone with [[cirrhosis]] or being evaluated for [[liver-transplantation|liver transplantation]] should be tested for AATD
- **Family history of AATD**
- **History of neonatal cholestasis**
- **AATD-associated extrahepatic conditions** — emphysema, chronic obstructive pulmonary disease (COPD), asthma with airflow obstruction that is incompletely reversible, unexplained bronchiectasis, necrotizing panniculitis, or granulomatosis with polyangiitis

**Suspected or confirmed steatotic liver disease does not preclude testing** — the two overlap and the Z allele amplifies fibrosis progression.

### Severity Assessment

- Approximately **10% of adults with the PiZZ genotype develop clinically significant liver disease**, including cirrhosis and [[hepatocellular-carcinoma|hepatocellular carcinoma (HCC)]]
- **Modifiers of progression:** age, **male sex**, metabolic syndrome, **alcohol use**, and other coexisting liver insults (e.g., viral hepatitis)
- **GGT correlated with both histologic fibrosis and development of major adverse liver outcomes (MALOs)**; AST and ALT appear somewhat less accurate. Persistently elevated liver function tests are associated with increased MALO risk
- **After a first hepatic decompensation** (clinically evident ascites, variceal bleeding, or overt [[hepatic-encephalopathy|hepatic encephalopathy]]), decompensated AATD-LD may carry a **higher risk of further decompensation, acute-on-chronic liver failure, transplant requirement, or death than other etiologies**

### Classification by Genotype

| Genotype | Prevalence (White individuals) | Liver disease risk from the mutation alone (advanced fibrosis vs wild type) |
|---|---|---|
| **PiZZ** | **1:3000** | **Highest** — lowest prevalence, highest risk; ~**20×** |
| **PiSZ** | 1:500 | ~**3×** elevated |
| **PiMZ** | 1:30 | ~**2×** elevated |
| **PiMM** | 9:10 | Normal |

- **PiMZ and PiSZ patients often have additional comorbid conditions** — diabetes, obesity, or excessive alcohol use — noted at the time clinical liver disease is diagnosed
- **Some variants, such as null variants, may produce no protein and have no liver risk.** About **5% of those with AAT <57 mg/dL and severe AATD-LD have non-Z alleles** and may not produce misfolded AAT in the liver
- Whether PiMZ and PiSZ belong inside the AATD-LD definition is **deliberately left open** — future trials modifying the Z protein will show how often these genotypes improve ([[aga-aasld-easl-2026-aatd-liver-disease]])

---

## Differential Diagnosis

*Workup: see [[abnormal-liver-chemistries]].*

- [[nafld-masld|Metabolic dysfunction–associated steatotic liver disease (MASLD)]] — **overlaps rather than excludes** (see *Who to test*)
- [[alcohol-associated-liver-disease|Alcohol-associated liver disease]] — alcohol is also a cofactor within AATD-LD
- Chronic viral hepatitis ([[chronic-hepatitis-b]], [[hepatitis-c]]) — a coexisting insult that modifies AATD-LD progression

---

## Diagnostics

Four steps: identify the at-risk patient, screen the **serum AAT level**, confirm by **genotype**, then stage fibrosis **non-invasively**. Liver specialists should detect and manage AATD-LD early; pulmonologists should evaluate AATD patients for liver disease ([[aga-aasld-easl-2026-aatd-liver-disease]]).

```mermaid
flowchart TD
    A(["Step 1 - At risk for AATD-LD<br/>(any criterion under Who to test)"]) --> B["Step 2 - Serum AAT level"]
    B -- "&gt;20 &micro;M (&gt;90 mg/dL)" --> C(["Minimal risk of severe AATD"])
    B -. "11-20 &micro;M (57-90 mg/dL): mild/intermediate AATD;<br/>consider cofactors" .-> F["Step 3 - Genotype<br/>(phenotype by isoelectric focusing<br/>if genotyping unavailable)"]
    B -- "&lt;11 &micro;M (&lt;57 mg/dL): at risk for<br/>severe AATD, likely ZZ" --> F
    F -- "PiSS or null alleles" --> G(["Counsel on lung risk or refer"])
    F -- "PiSZ or PiMZ" --> H(["Consider cofactors;<br/>counsel on liver/lung risk"])
    F -- "PiZZ" --> I(["Refer to genetic counseling<br/>and pulmonology"])
    H -.-> J["Step 4 - If fibrosis stage unknown,<br/>stage non-invasively (Fibrosis Staging)"]
    I --> J
    class A start
    class B,F,J test
    class G,H,I act
    class C stop
```
*Screening, diagnosis and risk stratification of AATD-LD, Steps 1–3 (Step 4 is the LSM table below)*
*Source: redrawn from Figure 2 of the multi-society AATD-LD consensus guidance (dashed arrows as drawn)*
*[[aga-aasld-easl-2026-aatd-liver-disease|AGA/AASLD/EASL/Alpha-1 Foundation 2026 AATD-LD Guidance]]*
*AATD-LD = alpha-1 antitrypsin deficiency–associated liver disease · AAT = alpha-1 antitrypsin · AATD = alpha-1 antitrypsin deficiency*

### Serum AAT Level

- **The diagnostic evaluation of chronic liver disease should include a serum AAT level** — inexpensive, and typically abnormal in severe deficiency genotypes (e.g., ZZ). Interpretation bands: Step 2 above
- **Severe AATD-LD (PiZZ) is almost certain to be below 11 μM (57 mg/dL)**

> [!pitfall] AAT is an acute-phase reactant — check it when CRP is normal
> Serum levels can read normal under physiologic stress, and some patients with chronic liver disease carry a persistent slight C-reactive protein (CRP) elevation. **Measure the level in the absence of systemic inflammation**, and remember a **PiMZ patient may have a normal AAT level** — that one needs a genotype ([[aga-aasld-easl-2026-aatd-liver-disease]]).

### Genotyping

- **Recommended for all adults with liver disease and a low AAT level**; **genotyping is necessary** to comprehensively determine carrier genotypes (MZ), and is the **preferred** confirmatory test
- **Phenotyping by isoelectric focusing** is the alternative, depending on local availability
- Z heterozygosity (most commonly PiMZ) may contribute to progression, particularly with cofactors → genotype also matters for **family testing and risk stratification in mild AAT deficiency**
- More expensive than the level, but embraced by many liver centers. An **experienced AATD center** should be involved for genotyping, family counseling, and management

### Fibrosis Staging

Stage every PiZZ patient non-invasively — **blood-based and imaging-based**, with **VCTE preferred** (Step 4: when the fibrosis stage is unknown).

**Blood-based non-invasive test (NIT):**

- **Low risk: fibrosis-4 index (FIB-4) <1.3 or AST-to-platelet ratio index (APRI) <0.5** → repeat the blood-based NIT **annually during pulmonary monitoring**; second-line testing may not be necessary
- **FIB-4 ≥1.3 or APRI ≥0.5** → requires a second-line NIT (LSM)
- **Limited sensitivity:** values below those cutoffs carried very low MALO risk over a median 3.5 y, but **FIB-4 <1.3 was seen in about 50% of the cohort, limiting its utility as a triage tool**
- Patients may also be **referred directly for LSM** (VCTE or magnetic resonance elastography [MRE]) — rare condition, high pretest probability of fibrosis

**LSM by VCTE (preferred) or MRE** — a continuum of risk:

| VCTE LSM | Risk stratum | Next step (Figure 2) | Repeat LSM |
|---|---|---|---|
| **<8 kPa** | **Low** — significant fibrosis unlikely | — | **Every 2–3 y** |
| **8–15 kPa** | **Intermediate** — likely significant to advanced fibrosis | *Consider liver biopsy for definitive diagnosis*; consider clinical trials | **Every 1–2 y** |
| **≥15 kPa**, compensated | **High** risk of MALOs — likely cirrhosis | Consider clinical trials | **Annually** |
| **≥15 kPa**, decompensated cirrhosis | High | Monitor for portal hypertension and HCC; **evaluate early for liver transplantation** | — |

- **MRE 3 kPa** has been associated with clinically significant fibrosis in other liver diseases and is likely appropriate in AATD
- Shear-wave elastography and MRE are alternatives to VCTE by local availability and cost; neither is specifically validated in AATD
- The **enhanced liver fibrosis test is not validated** against biopsy or clinical outcomes in AATD-LD — its staging role is uncertain
- **Ultrasound** may be considered at diagnosis, but is **currently only recommended for HCC screening/surveillance in patients with cirrhosis**
- General NIT cutoffs and test characteristics: [[noninvasive-liver-disease-assessment]]

### Liver Biopsy

- **Not required** to establish the diagnosis of AATD-LD
- **May be indicated in select cases** to establish or exclude additional factors contributing to liver disease; considered in the intermediate band (table above)
- Histologic staging is an **imperfect reference standard**; NITs validated against histology and/or MALOs are **preferable to biopsy for staging**, biopsy being impractical for monitoring a lifelong genetic liver disease

---

## Therapeutics

### Monitoring

- **Repeat LSM by stratum** (table above); current evidence does not allow firm recommendations on repeat intervals
- **Individualize** the interval for fibrosis cofactors — in particular **obesity**, and potentially diabetes; alcohol use may also be considered
- **Longitudinal NIT reassessment during routine pulmonary follow-up** may offer a practical way to keep the liver monitored
- **LSM >15 kPa (advanced chronic liver disease)** → yearly VCTE **plus** HCC surveillance and portal hypertension management
- **[[obesity|Obesity]]** is an important lifestyle-intervention target in AATD-LD (evidence limited to its link with NIT-assessed fibrosis in observational studies)
- **Alcohol:** caution all patients about the risks; **anyone who is a candidate for treatment should completely and permanently stop drinking**

### Cirrhosis Care and Transplantation

- **HCC surveillance and [[portal-hypertension|portal hypertension]] management follow published recommendations for cirrhosis of any etiology** — see [[cirrhosis]] and [[hepatocellular-carcinoma]]
- **Early consideration for [[liver-transplantation|liver transplantation]] is warranted in decompensated AATD-LD**; transplantation is the **only curative option**
- **Any patient with decompensation** — ascites, variceal bleeding, or hepatic encephalopathy — **should be evaluated promptly** to allow timely listing and optimize pretransplant care
- **Early referral to a center with expertise in both transplant hepatology and AATD-LD is strongly recommended**; post-transplant complication risk may be higher than in other etiologies, and transplantation is challenging with concurrent pulmonary disease

### Drug Therapy

- **No approved therapy exists for the liver disease**, and no regulatory guidance for AATD-LD drug development is available ([[aga-aasld-easl-2026-aatd-liver-disease]])
- Agents in human trials, by target organ:

| Target | Candidate | Mechanism | Stage |
|---|---|---|---|
| Liver and lung | BEAM-302 | DNA editing | Phase 1/2b |
| Liver and lung | WVE-006 | RNA editing | Phase 1/2b |
| Liver and lung | KRRO-110 | RNA editing | Phase 1/2a |
| **Liver** | **Fazirsiran** | Small interfering RNA (silencing) | **Phase 3** |
| Liver | BMN-349 | Chaperone — stabilizes monomeric Z-AAT to prevent polymerization | Phase 1 |
| Lung | Kamada-AAT | AAT protein replacement | Phase 3 |
| Lung | INBRX-101 | AAT protein replacement (bivalent Fc fusion) | Phase 2/3 |
| Lung | Alvelestat | Neutrophil elastase inhibitor | Phase 2 |
| Lung | KB-408 | Gene therapy (SERPINA1 via HSV-1 vector) | Phase 1 |

- Phase 2 studies of **fazirsiran** showed promise
- Trial focus: PiZZ with **F2–F4** fibrosis for phase 3; patients with cirrhosis may be excluded depending on therapeutic class

---

## See Also

[[abnormal-liver-chemistries]], [[cirrhosis]], [[portal-hypertension]], [[hepatocellular-carcinoma]], [[liver-transplantation]], [[hepatic-encephalopathy]], [[noninvasive-liver-disease-assessment]], [[nafld-masld]], [[alcohol-associated-liver-disease]], [[chronic-hepatitis-b]], [[hepatitis-c]], [[obesity]]

---

## Sources

1. [[aga-aasld-easl-2026-aatd-liver-disease|Multi-Society Expert Panel Consensus Guidance Regarding Clinical Assessment and Clinical Trial Endpoints in Adults With Alpha-1 Antitrypsin Deficiency–Associated Liver Disease (2026)]]
