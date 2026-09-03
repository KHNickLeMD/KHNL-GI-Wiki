---
title: "Atrophic Gastritis"
category: disease-script
tags: [atrophic-gastritis, gastric-premalignant-conditions, h-pylori, autoimmune-gastritis, pernicious-anemia, correa-cascade, gastric-cancer, neuroendocrine-tumor]
created: 2026-05-15
updated: 2026-09-03
sources: [aga-2021-atrophic-gastritis, acg-2025-gastric-premalignant]
---

Atrophic gastritis (AG) is a preneoplastic condition defined by loss of gastric glands — replaced by connective tissue (nonmetaplastic atrophy) or a non-native epithelium such as intestinal metaplasia or pseudopyloric metaplasia (metaplastic atrophy) — in a background of chronic inflammation. It represents an early committed step in the [[gastric-premalignant-conditions|Correa cascade]]: AG → [[gastric-intestinal-metaplasia|intestinal metaplasia]] → dysplasia → [[gastric-adenocarcinoma|gastric adenocarcinoma]].

Two dominant etiologies:

- **[[helicobacter-pylori-infection|H. pylori]]–associated atrophic gastritis (HpAG):** by far the most common
- **Autoimmune gastritis (AIG):** corpus-predominant, driven by anti-parietal cell and anti-intrinsic factor autoantibodies

Intestinal metaplasia on gastric histopathology almost invariably implies underlying AG — but this linkage is frequently not documented explicitly on pathology reports, contributing to widespread underdiagnosis.

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
  - [[#Classification / Typing]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
  - [[#Endoscopy]]
  - [[#Biopsy Protocol — Updated Sydney Protocol]]
  - [[#Serologic Workup]]
- [[#Therapeutics]]
  - [[#1. H. Pylori Eradication (All AG Patients)]]
  - [[#2. Micronutrient Repletion]]
  - [[#3. Endoscopic Surveillance]]
  - [[#4. Type I Gastric NETs]]
  - [[#5. Autoimmune Comorbidity Screening (AIG)]]
- [[#See Also]]
- [[#Sources]]

---

## Assessment

### Establishing the Diagnosis

**Clinical presentation:**

- Typically asymptomatic or nonspecific (dyspepsia, early satiety, epigastric discomfort)
- Manifestations of micronutrient deficiency: fatigue, pallor ([[iron-deficiency-anemia|iron deficiency]] or B-12 deficiency), glossitis, peripheral neuropathy, macrocytic anemia
- Pernicious anemia (PA) = late-stage AIG: macrocytic anemia + B-12 deficiency ± subacute combined degeneration

**Who to suspect:**

- Unexplained iron deficiency or vitamin B-12 deficiency
- Non-White racial/ethnic minority or immigrant from high gastric cancer incidence region (East Asia, Latin America, Eastern Europe)
- Established H. pylori infection (past or current)
- Known autoimmune disease, especially autoimmune thyroid disease (up to 1/3 have AIG)
- IM reported on gastric biopsies without explicit AG diagnosis
- New diagnosis of pernicious anemia

**Prevalence:** AG up to 15% in US populations; AIG 0.5%–2%; PA 0.15%–1%

### Severity Assessment

AG severity and extent determine gastric cancer risk. Two validated staging systems — **OLGA/OLGIM** (histopathologic) and **Kimura-Takemoto** (endoscopic). This page is the wiki's home for both; other pages link here.

**OLGA (Operative Link for Gastritis Assessment) / OLGIM (Operative Link for [[gastric-intestinal-metaplasia|Gastric Intestinal Metaplasia]] Assessment):**

- Stage = the **combination** of histopathologic severity (score **0–3**) in **each** anatomic compartment — antrum/incisura and corpus — scored for **atrophy** (OLGA) or for **IM** (OLGIM). Requires biopsies jarred separately from the two compartments (see [[#Biopsy Protocol — Updated Sydney Protocol]]) [[aga-2021-atrophic-gastritis]] [[acg-2025-gastric-premalignant]]
- Stages run **0** (normal pathology) → **IV** (moderate/severe atrophy ± IM of **both** antrum and corpus) [[acg-2025-gastric-premalignant]]
- **What "severity" means per compartment — the proportion of glands involved in the individual biopsies from that compartment** ([[acg-2025-gastric-premalignant]]): **IM in up to one-third of glands = mild; up to two-thirds = moderate; greater than two-thirds = severe.** Mild *atrophy* is hard to appreciate histologically, whereas extensive gland loss is readily apparent. Severity raises progression risk **independently of anatomic extent**, so moderate-to-severe AG/GIM is high-risk **even when limited to the antrum**
- **Focality** (a separate descriptor): **unifocal** = AG/GIM in **1** biopsy specimen; **multifocal** = **≥2**. Unifocal carries lower risk; both readings depend on adequate Sydney-protocol sampling

| Stage | Risk band | Implication |
|---|---|---|
| 0–I | Low | No routine surveillance on stage alone |
| II | **Intermediate** | Individualized; surveillance q3y may be considered if multiple additional high-risk factors |
| III–IV | **High** | Surveillance q3y (consider q2y with additional demographic/clinical risk factors, e.g. family history) |

- **OLGIM vs OLGA:** OLGIM has **lower interobserver variability**, but **downstages** some high-risk individuals who have atrophy with limited IM
- **Do not apply OLGA/OLGIM to autoimmune gastritis in the absence of H. pylori** — in H. pylori-negative AIG, atrophy and IM occur only in the corpus [[acg-2025-gastric-premalignant]]
- Magnitude of the gradient (Singapore GCEP cohort, largest published GPMC cohort): early gastric neoplasia **543.8 per 10,000 person-years** with OLGIM III/IV vs **21.5** with OLGIM I
- Adoption: widespread in Europe and some Asian/Latin American centers; only a limited number of US centers stage routinely

> **Gap — the stage-assignment matrix is not on this page.** The compartment scores (0–3), the per-compartment severity grading (the ≤1/3 / ≤2/3 / >2/3 proportions above), the stage range (0→IV), and the risk bands are all now sourced, but the grid that maps *antrum score × corpus score → stage* exists **only as an image** in both ingested sources — [[acg-2025-gastric-premalignant]] **Figure 4** (p.14) and [[aga-2021-atrophic-gastritis]] **Supplementary Figure 1A/B**. Neither prints it as text — [[acg-2025-gastric-premalignant|ACG 2025]] **Box 1**, the figure's companion text, gives the 0→IV range and the risk bands but not the grid. Image extraction remains blocked on the lint server, though **not** because the tools are missing: PyMuPDF is absent, but `pdftoppm`, `pdfimages`, `pdftocairo` and `convert` are all installed and are refused by the sandbox permission layer. **A run with those commands approved (or a local Obsidian session) can capture Figure 4 and close this gap.** **Do not reconstruct the grid from memory.** Until it is embedded, a reader can interpret a reported OLGA/OLGIM stage from this page but **cannot assign one** from raw compartment scores.

**Kimura-Takemoto endoscopic classification** — grades the extent of the **atrophic border** [[aga-2021-atrophic-gastritis]]:

| Type | Extent of the atrophic border |
|---|---|
| **C-1** (closed) | Limited to the antrum |
| **C-2** | Antrum + lesser curvature of the **distal** gastric body |
| **C-3** | Antrum + lesser curvature of the **proximal** gastric body |
| **O-1** (open) | Border spreads beyond the lesser curvature onto the **anterior wall** |
| **O-2** | Border extends **beyond the cardia**, midway between anterior and posterior walls |
| **O-3** | Border reaches the **greater curvature** |

- Open (O) types carry higher gastric cancer risk than limited (C-1–C-2) atrophy; **O2–O3 = severe/extensive atrophy → significantly higher risk**
- Correlates well with OLGA for risk stratification, so it is a usable endoscopic surrogate where histologic staging is not reported

### Classification / Typing

| Feature | HpAG | AIG |
|---|---|---|
| Atrophy distribution | Antrum-dominant, expands proximally | Corpus/fundus dominant, antral sparing |
| Serologic markers | H. pylori antibodies | PCA (sensitive), IFA (specific) |
| Acid secretion | Variable | Hypochlorhydria/achlorhydria |
| Main cancer risk | [[gastric-adenocarcinoma\|Gastric adenocarcinoma]] | Gastric adenocarcinoma + type I NETs |
| Associated conditions | H. pylori infection | Autoimmune thyroid disease, T1DM, Addison's |

---

## Differential Diagnosis

*Workup: see [[dyspepsia]].*

- **Reactive (chemical) gastropathy:** NSAIDs, bile acid reflux; no gland loss
- **H. pylori gastritis without atrophy:** active/chronic inflammation present, glands intact
- **Other infectious gastritis:** CMV (immunosuppressed), syphilis
- **Lymphocytic gastritis:** increased intraepithelial lymphocytes; association with [[celiac-disease|celiac disease]] and H. pylori
- **Eosinophilic gastritis:** eosinophilic infiltration; distinct histologic pattern
- **Menetrier's disease:** foveolar hyperplasia, protein-losing gastropathy; giant rugal folds (not atrophy)
- **Diffuse-type gastric adenocarcinoma:** can mimic atrophic changes; biopsy suspicious areas
- **[[gastroenteropancreatic-neuroendocrine-tumors|Type I gastric NET]]:** may be identified incidentally in the setting of AIG/hypergastrinemia

---

## Diagnostics

### Endoscopy

**Endoscopic features of AG:**

- Pale mucosa, increased submucosal vascular visibility, loss of gastric rugal folds
- Kimura-Takemoto classification to document extent of atrophic border

**Endoscopic features of IM (implies underlying AG):**

- Light blue crest (LBC) sign: fine blue-white lines on epithelial surface crests (sensitivity/specificity ~90%)
- White opaque substance (WOS/WOF): lipid droplet accumulation (specificity 100%, sensitivity ~50%)
- Best visualized with NBI; near-focus HD-WLE adequate in the US where magnifying endoscopy is unavailable
- HD-WLE with NBI: sensitivity 87%, specificity 97% for IM; 92%/99% for dysplasia

**Technique:**

- HD-WLE + NBI as standard
- Mucosal cleansing: simethicone + 1% N-acetylcysteine pre-procedure
- Systematic photographic documentation: cardia, fundus, lesser and greater curvature of corpus and antrum, incisura angularis, pylorus
- Targeted biopsies from any suspicious areas

### Biopsy Protocol — Updated Sydney Protocol

5 biopsies in separately labeled specimen jars:

1. Antrum — lesser curvature (2–3 cm from pylorus)
2. Antrum — greater curvature (2–3 cm from pylorus)
3. **Incisura angularis** (do not skip — frequently involved in AG/IM)
4. Corpus — lesser curvature (4 cm proximal to incisura)
5. Corpus — greater curvature (8 cm from cardia, mid-body)

Minimum acceptable: 2 jars (antrum/incisura; body). Additional targeted biopsies from visible abnormalities in separately labeled jars. Near 100% sensitivity for H. pylori detection.

**Advocate to pathology for:** OLGA and/or OLGIM staging, severity and topographic distribution of atrophy, IM type and distribution, H. pylori status.

### Serologic Workup

**All AG patients:**

- H. pylori testing
- CBC (anemia evaluation)
- Iron studies (ferritin, iron, TIBC)
- Vitamin B-12

**Suspected AIG:**

- Parietal cell antibodies (PCA): most sensitive; false positives in H. pylori infection and other autoimmune diseases
- Intrinsic factor antibodies (IFA): low sensitivity (<30%) but high specificity; confirms AIG when positive
- TSH (screen for autoimmune thyroid disease in all AIG patients)
- Consider fasting glucose/HbA1c (T1DM) and morning cortisol (Addison's) if clinically indicated

**Serum pepsinogens (PG I, PG I:II ratio):** PG I <70 µg/L and PG I:II <3.0 = high sensitivity/specificity for severe corpus atrophy — not available for routine clinical use in the United States.

---

## Therapeutics

![[atrophic-gastritis-2021-management-algorithm-07.png|700x366]]
*Figure 3 — Algorithm for clinical management of atrophic gastritis. ([[aga-2021-atrophic-gastritis]])*

### 1. H. Pylori Eradication (All AG Patients)

Test all AG patients for H. pylori regardless of etiology. If positive, treat and confirm eradication with a non-serologic test (urea breath test, fecal antigen, or histology). See [[helicobacter-pylori-infection]] for regimens.

- Eradication may restore normal mucosa in some; most have passed the "point of no return" where damage is irreversible
- Eradication still reduces gastric cancer risk even with established atrophy
- Post-eradication surveillance still indicated for advanced AG (OLGA/OLGIM III/IV)

### 2. Micronutrient Repletion

Evaluate and treat proactively in all AG patients, especially corpus-predominant:

- **Iron:** up to 50% of corpus-predominant AG have iron deficiency; often precedes B-12 deficiency; treat with oral or IV iron
- **Vitamin B-12:** treat with IM or high-dose oral B-12; in pernicious anemia, IM injection is standard (absent intrinsic factor)

### 3. Endoscopic Surveillance

Surveillance is by **high-quality [[upper-endoscopy|EGD]]** with Sydney-protocol biopsies (see above), not a limited exam.

| Scenario | Interval |
|---|---|
| Advanced HpAG (OLGA/OLGIM III/IV or O2–O3 Kimura-Takemoto) | Every 3 years |
| AIG (without PA) | Individualized; ESGE recommends every 3–5 years |
| New pernicious anemia (no recent endoscopy) | Within 6 months — rule out prevalent gastric neoplasia including NETs |
| Mild/moderate AG limited to antrum (OLGA/OLGIM 0–II) | No routine surveillance; individualize based on risk factors |

**Shorten surveillance interval for:** family history of gastric cancer, immigration from high-incidence region, persistent H. pylori, tobacco use, high-salt diet, incomplete or extensive IM, inadequate baseline endoscopy.

### 4. Type I Gastric NETs

Arise from parietal cell loss → hypochlorhydria → hypergastrinemia → ECL cell hyperplasia → NET. Account for ~80%–90% of all gastric NETs; found in corpus/fundus.

| NET size | Management |
|---|---|
| <1 cm | Endoscopic resection; surveillance every 1–2 years based on NET burden |
| 1–2 cm | Endoscopic resection; consider [[endoscopic-ultrasound]] for depth of invasion and local metastasis |
| >2 cm, submucosal invasion, or LN metastasis | Surgical resection |

Metastasis rate: <10% for NETs ≤2 cm; ~20% for NETs >2 cm.

### 5. Autoimmune Comorbidity Screening (AIG)

- Screen all AIG patients for autoimmune thyroid disease (TSH ± thyroid antibodies)
- Low threshold for T1DM workup (fasting glucose/HbA1c)
- Consider evaluation for Addison's disease if clinically suspected

---

## See Also

[[gastric-premalignant-conditions]], [[gastric-intestinal-metaplasia]], [[gastric-polyps]], [[gastric-adenocarcinoma]], [[gastric-cancer-screening]], [[gastroenteropancreatic-neuroendocrine-tumors]], [[helicobacter-pylori-infection]], [[celiac-disease]], [[iron-deficiency-anemia]], [[endoscopic-ultrasound]], [[upper-endoscopy]], [[dyspepsia]]

---

## Sources

1. [[aga-2021-atrophic-gastritis|AGA 2021: Diagnosis and Management of Atrophic Gastritis]]
2. [[acg-2025-gastric-premalignant|ACG 2025: Diagnosis and Management of Gastric Premalignant Conditions]]
