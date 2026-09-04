---
title: "Drug-Induced Liver Injury (Idiosyncratic)"
category: disease-script
tags: [dili, drug-induced-liver-injury, hepatotoxicity, hds, ici, immune-checkpoint, hpb, liver]
created: 2026-05-16
updated: 2026-09-03
sources: [acg-2021-dili, acg-2017-liver-chemistries, aasld-2022-dili]
---

## Assessment

### Establishing the Diagnosis

**Idiosyncratic DILI** = hepatotoxicity affecting only susceptible individuals; less dose-dependent; variable latency; more varied clinical presentation than intrinsic DILI (e.g., acetaminophen). DILI is a **diagnosis of exclusion** — competing etiologies must be systematically ruled out first.

**Core diagnostic steps:**

1. Thorough medication and HDS (herbal/dietary supplement) history — timing, latency, dose, all concurrent medications
2. Calculate R-value to classify injury pattern
3. Systematic exclusion of competing etiologies based on R-value
4. Causality assessment (RUCAM score as framework)

**R-value = (ALT/ULN) ÷ (Alk P/ULN)** — by common convention ([[acg-2021-dili]]):

- **R > 5** → **hepatocellular** DILI
- **R < 2** → **cholestatic** DILI
- **2 < R < 5** → **mixed** DILI

Caveats stated by the source: the cutoffs of 2 and 5 "serve only as a guideline"; the R-value is taken **at presentation** and **may change as the DILI evolves** (a case can start hepatocellular and evolve, or vice versa); the same drug can present with different laboratory profiles in different patients.

### Severity Assessment

**Hy's Law** — ~10% mortality risk if **all 3** criteria met ([[acg-2021-dili]]):

1. Serum ALT or AST **>3× ULN**
2. Serum total bilirubin **>2× ULN**, *without* initial findings of cholestasis (elevated serum alkaline phosphatase)
3. **No other reason** can be found to explain the combined aminotransferase + bilirubin rise (viral hepatitis A/B/C, other pre-existing or acute liver disease)

Corollary: if drug-induced hepatocellular injury causes [[jaundice]], **~1 in 10 jaundiced patients develops [[acute-liver-failure|ALF]]**.

**Prognostic thresholds — predicting liver-related death within 26 weeks of onset** ([[acg-2021-dili]]):

| Predictor | Cutoff | c-statistic |
|---|---|---|
| [[cirrhosis\|MELD]] score | cutoff **19** | 0.83 |
| "nr Hy's law" (modified Hy's law) | bilirubin **≥2.5 mg/dL** **AND** [(ALT/ULN) ÷ (Alk P/ULN)] **>5** — *both* required | 0.73 |
| Ghabril model — serum **albumin + MELD + Charlson comorbidity index** → 6-month mortality (Rec 4, Conditional / Low) | nomogram; calculator at gihep.com/calculators/hepatology/dili-cam/ | 0.89 discovery (n=306) / 0.91 validation (n=254) |

**Outcome benchmarks** ([[acg-2021-dili]]): outcomes of idiosyncratic DILI are relatively favorable — only ~10% reach the ALF threshold (coagulopathy + encephalopathy) and <20% develop chronic liver injury. Once DILI causes ALF the prognosis is poor: **40% require liver transplant, 42% die**; advanced coma grade and high MELD predict poor outcome. In the US ALF Study Group, 11% of ALF cases were adjudicated as DILI, with 3-week transplant-free survival of only 27%.

> ⚠ **Decision gap — no formal DILI severity grading scale is in an ingested source.** The DILIN 1–5 severity grades are referenced widely in practice but neither [[acg-2021-dili]] nor [[aasld-2022-dili]] reproduces the grade definitions. (An earlier version of this page carried unsourced grade definitions; they were removed 2026-08-14.) The **original DILIN severity-scale paper** would be needed to add them.

### Classification / Typing

| Injury Pattern | R-value | Key Competing Diagnoses | First-Line Tests |
|---------------|---------|------------------------|-----------------|
| Hepatocellular | >5 | Acute viral hepatitis A/B/C/E, [[autoimmune-hepatitis\|AIH]], [[wilson-disease\|Wilson disease]], ischemic hepatitis, [[budd-chiari-syndrome\|Budd-Chiari]] | Viral serologies + HCV RNA, ANA/ASMA/IgG, ceruloplasmin, imaging |
| Cholestatic | <2 | Biliary obstruction, [[primary-biliary-cholangitis\|PBC]], [[primary-sclerosing-cholangitis\|PSC]] | Abdominal imaging (US/CT/MRI); limit [[ercp\|ERCP]] to cases where imaging can't exclude stones/stricture/malignancy |
| Mixed | 2–5 (2 < R < 5) | Both hepatocellular and cholestatic differential | Both workups above |

---

## Differential Diagnosis

*Workup: see [[abnormal-liver-chemistries]].*

| Condition | Key Distinguishing Features |
|-----------|---------------------------|
| Acute hepatitis A | Travel, shellfish exposure; anti-HAV IgM positive |
| Acute hepatitis B | Anti-HBc IgM, HBsAg positive; risk factors (sexual, IV drug use, healthcare) |
| Acute [[hepatitis-c\|hepatitis C]] | Anti-HCV may be negative initially; **HCV RNA required** — negative antibody does not rule out acute HCV |
| Acute hepatitis E | Recent travel to endemic area; anti-HEV IgM; HEV RNA; underdiagnosed in US (3% suspected DILI tested positive in DILIN) |
| [[autoimmune-hepatitis\|Autoimmune hepatitis]] | ANA/ASMA positive (but note: 30% of adults have low-titer autoantibodies; >1:80 more significant); IgG elevated; [[liver-biopsy\|liver biopsy]] shows interface hepatitis; biopsy critical if immunosuppression planned |
| [[wilson-disease\|Wilson disease]] | Age <40 (consider in older); low ceruloplasmin; Kayser-Fleischer rings (slit-lamp); serum copper, 24-hour urine copper; liver biopsy if needed |
| Budd-Chiari | Hepatomegaly, [[ascites]], right upper quadrant pain; Doppler US shows hepatic vein occlusion |
| Ischemic hepatitis | Extreme transaminase elevation (>10,000 IU/L possible); rapid rise and fall; hypotension history; cardiac or respiratory etiology |
| HDS-hepatotoxicity | Dietary supplements (bodybuilding, weight loss) — same diagnostic approach as prescription DILI; stop all HDS |
| [[immune-checkpoint-inhibitor-hepatitis\|ICI-induced hepatotoxicity]] | Immune checkpoint inhibitor therapy; onset 4–12 weeks; mixed → hepatocellular pattern; low ANA titers possible; histology ≠ AIH |

---

## Diagnostics

### Minimum Diagnostic Evaluation (ACG 2021)

**History elements:**

- All medications (including OTC), HDS products — start/stop dates, latency
- Concomitant diseases (sepsis, heart failure, parenteral nutrition)
- Prior drug reactions
- Alcohol use
- Presence of rechallenge

**Laboratory:**

- Viral serologies: anti-HAV IgM, HBsAg, anti-HBc IgM, **anti-HCV + HCV RNA**, anti-HEV IgM (if clinically indicated)
- Autoimmune: ANA, anti-smooth muscle antibody (ASMA), IgG
- Metabolic: ceruloplasmin (if <40 years or atypical)
- Eosinophil count (elevated in immune-allergic DILI)

**Imaging:** Abdominal ultrasound ± Doppler ± CT/MRI for cholestatic DILI or unexplained hepatomegaly

### Causality Assessment — RUCAM

Roussel Uclaf Causality Assessment Method — **point sum**, not an "any one of" checklist. Updated RUCAM score range **−9 to +14** ([[aasld-2022-dili]], Table 5):

| RUCAM total | DILI likelihood |
|---|---|
| **≥9** | Definite |
| **6–8** | Probable |
| **3–5** | Possible |
| **1–2** | Unlikely |
| **≤0** | Excluded |

- Scored domains: time to onset, course after stopping, risk factors, concomitant medication, exclusion of competing causes, track record of the drug/HDS for hepatotoxicity, response to rechallenge
- **Suboptimal retest reliability (reliability coefficient 0.51, upper 95% CL 0.76)** — should **not** be used as a sole diagnostic tool; use as a framework to organize history and exclude competing etiologies ([[acg-2021-dili]] KC 1)
- Consensus **expert opinion** after thorough evaluation is the current gold standard but is not widely available, so it cannot be recommended for clinical practice ([[acg-2021-dili]] KC 2); seek expert consultation if uncertainty persists (KC 3)

### Liver Biopsy Indications (Conditional unless specified)

All thresholds below are judged **despite having stopped the suspected offending agent** ([[acg-2021-dili]] Rec 3a–e):

- [[autoimmune-hepatitis|AIH]] remains a competing etiology **and** immunosuppressive therapy is contemplated (both conditions): **Strong / Low** (3a)
- Unrelenting rise in liver biochemistries **or** signs of worsening liver function: Conditional / **Very low** (3b)
- **Peak ALT** has not fallen by **>50% at 30–60 days after onset** (hepatocellular DILI): Conditional / **Very low** (3c)
- **Peak Alk P** has not fallen by **>50% at 180 days** (cholestatic DILI): Conditional / **Very low** (3c)
- Continued use or re-exposure to the implicated agent is contemplated: Conditional / **Very low** (3d)
- Liver biochemistry abnormalities persist **beyond 180 days**, especially with symptoms (itching) or signs ([[jaundice]], hepatomegaly) — evaluate for chronic liver disease and chronic DILI: Conditional / **Very low** (3e)

---

## Therapeutics

### Immediate Management

1. **Stop all suspected offending agents** (Strong/Low): especially if liver biochemistries rising rapidly or evidence of liver dysfunction
2. Stop all HDS products (Strong/Low)
3. Monitor liver biochemistries serially; hospitalize if Hy's law criteria or worsening

### Treatment of DILI-Associated ALF

- **N-acetylcysteine (NAC)** — consider in **adults with early-stage ALF** (Rec 7, Conditional / Low), on the basis of good safety profile and some efficacy evidence in early coma-stage patients
  - Non-APAP ALF RCT: overall survival endpoint **not met**; in the **early coma grade (I–II)** subgroup transplant-free survival was **52% NAC vs 30% placebo**
  - Within that trial's **DILI subgroup (n=42)**: transplant-free survival **58% NAC vs 27% no NAC**
  - **Against NAC for children with severe DILI-ALF** (Rec 8, Conditional / Low) — IV NAC in children with non-APAP ALF showed a *lower* 1-year survival
  - NAC has good safety profile; reasonable to use given evidence in early-stage ALF
- **[[liver-transplantation|Liver transplant]] evaluation**: Strong recommendation — for DILI-induced [[acute-liver-failure|ALF]] or severe cholestatic injury from HDS, promptly refer

### Corticosteroids

- No RCT evidence for or against corticosteroids in DILI
- **May be considered for DILI exhibiting AIH-like features**: Conditional/Low
- Early ALT response to steroids may help distinguish AIH from DILI-AIH overlap

### Rechallenge

- **Strongly against rechallenge** with drug likely to have caused hepatotoxicity if initial injury was significant (>5× ULN ALT, Hy's law, or [[jaundice]]): Strong/Low
- Exception: life-threatening situations with no suitable alternative (chemotherapy, anti-TB)
- Educate patient with medical alert bracelet/card

### ICI Hepatotoxicity Management

CTCAE grade criteria (ALT / bilirubin cutoffs) and the grade-directed hold/steroid/MMF algorithm live on **[[immune-checkpoint-inhibitor-hepatitis]]** — do not duplicate here. Note [[acg-2021-dili]] explicitly places ICI treatment algorithms **beyond its scope**; the algorithm is from [[aasld-2022-dili]].

### DILI in Chronic Liver Disease (CLD)

- High index of suspicion; exclude common CLD exacerbation triggers first (Strong/Low)
- DILI in CLD carries higher mortality (16% vs 5.2% in DILIN)
- Risk-benefit assessment for continuing hepatotoxic drugs in CLD patients: Conditional/Low
- Monitor LFTs at 4–6 week intervals for first 6 months of potentially hepatotoxic agents in CLD: Conditional/Very Low

### Common GI-Relevant DILI Culprits

| Agent | Pattern | Latency | Notes |
|-------|---------|---------|-------|
| Azathioprine/6-MP | Cholestatic or hepatocellular; hepatoportal sclerosis | Moderate to long | Monitor CBC + LFTs regularly in [[inflammatory-bowel-disease\|IBD]] patients |
| Methotrexate | Insidious hepatic steatosis + fibrosis | Long | See monitoring thresholds below |
| [[anti-tnf-agents\|Anti-TNF agents]] (infliximab, adalimumab) | Hepatocellular; autoimmune hepatitis-like | Moderate to long | Rare; may need to discontinue biologic |
| Amoxicillin-clavulanate | Cholestatic; can be hepatocellular | Short to moderate | Most common antibiotic DILI; onset may occur after drug cessation |
| Isoniazid | Hepatocellular; acute hepatitis-like | Moderate to long | Age-related risk; monitor LFTs; avoid in CLD |
| [[proton-pump-inhibitors\|Proton pump inhibitors]] | Hepatocellular; very rare | Short | Worth considering in unexplained hepatitis |

### Methotrexate — monitoring thresholds ([[aasld-2022-dili]])

- Risk factors for accelerated methotrexate liver injury: **active alcohol use, pre-existing liver disease, diabetes, hyperlipidemia, [[obesity]]**.
- **After 3.5–4.0 g cumulative dose exposure** → [[liver-stiffness-measurement|transient elastography]] and/or [[liver-biopsy|liver biopsy]] recommended for **all** methotrexate recipients.
- Laboratory monitoring baseline then **every 3–6 months** (2020 dermatology/psoriasis guidance); that guidance also advises **FIB-4 and transient elastography at baseline and annually** in patients with hepatotoxicity risk factors. ACR 2008 rheumatoid arthritis schedule was baseline → every 2–4 weeks for the first 3 months → every 8–12 weeks for 3–6 months → every 12 weeks thereafter.
- **AASLD guidance statement 57:** **annual liver elastography** is recommended to monitor hepatotoxicity of drugs like methotrexate that cause *silent fibrosis* — explicitly **not** generalizable to most other DILI-causing drugs.
- 2021 ACR guidance restricts methotrexate in suspected [[nafld-masld|NAFLD]] to those with **normal liver tests and no advanced fibrosis (stage 3–4)** on noninvasive testing.
- Liver biopsy otherwise reserved for abnormal elastography or persistent liver test elevations.
- ⚠ **Decision gap:** [[acg-2021-dili]] names the **Roenigk Classification System** as the recognized histologic grading system for methotrexate-induced fibrosis/fatty change, but **neither ingested source gives the Roenigk grade criteria.** The original Roenigk paper would be needed.

### Isoniazid — monitoring ([[aasld-2022-dili]])

- Baseline liver assessment has **not** been shown superior to assessing for clinical symptoms of hepatitis at detecting toxicity.
- **Monthly** liver test monitoring is generally reserved for: baseline liver test abnormalities, viral hepatitis, heavy alcohol use, use of other hepatotoxic medications, underlying liver disease, HIV infection, or **current/recently pregnant women**. Periodic liver tests can also be performed in those **older than 35 years**. (Specific details are left to local/state TB programs.)
- Isoniazid remains a leading cause of DILI-related [[acute-liver-failure|ALF]]; latent TB treatment has shifted from 6–9 months of isoniazid monotherapy to 3–4-month combination regimens with lower hepatotoxicity risk.

---

## See Also

[[abnormal-liver-chemistries]], [[acute-liver-failure]], [[autoimmune-hepatitis]], [[inflammatory-bowel-disease]], [[nafld-masld]], [[primary-biliary-cholangitis]], [[primary-sclerosing-cholangitis]], [[wilson-disease]], [[budd-chiari-syndrome]], [[immune-checkpoint-inhibitor-hepatitis]], [[chronic-hepatitis-b]], [[hepatitis-c]], [[liver-biopsy]], [[liver-stiffness-measurement]], [[jaundice]], [[liver-transplantation]], [[ercp]], [[cirrhosis]], [[obesity]]

---

## Sources

1. [[acg-2021-dili|ACG 2021 Clinical Guideline: Diagnosis and Management of Idiosyncratic Drug-Induced Liver Injury]]
2. [[acg-2017-liver-chemistries|ACG 2017: Evaluation of Abnormal Liver Chemistries]]
3. [[aasld-2022-dili|AASLD Practice Guidance: Drug, Herbal, and Dietary Supplement-Induced Liver Injury (2022)]]
