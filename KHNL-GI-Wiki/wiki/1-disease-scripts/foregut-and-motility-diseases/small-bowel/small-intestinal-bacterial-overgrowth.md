---
title: "Small Intestinal Bacterial Overgrowth (SIBO)"
category: disease-script
tags: [sibo, imo, small-bowel, breath-testing, rifaximin, ibs, motility, microbiome, malabsorption]
created: 2026-05-19
updated: 2026-09-08
sources: [acg-2020-sibo, aga-2020-sibo]
---

SIBO is a clinical syndrome of GI symptoms caused by the presence of excessive numbers of bacteria within the small intestine. The normal small bowel maintains relative sterility compared to the colon; SIBO represents a significant disruption of this balance. Bacteria are typically coliforms — predominantly Gram-negative aerobic and anaerobic species — that ferment carbohydrates, producing gas and short-chain fatty acids. SIBO is almost always an epiphenomenon of an underlying condition that leads to stasis, anatomic disruption, immune dysfunction, or altered motility in the small intestine. Both [[acg-2020-sibo]] and [[aga-2020-sibo]] use this definition; the AGA CPU adopts it by citing the ACG guideline.

> **Read the definition as provisional.** [[aga-2020-sibo]] **Best Practice Advice 1**: "The definition of SIBO as a clinical entity lacks precision and consistency; it is a term generally applied to a clinical disorder in which symptoms, clinical signs, and/or laboratory abnormalities are attributed to changes in the numbers of bacteria or in the composition of the bacterial population in the small intestine." **BPA 5** explains why: normal small intestinal microbial populations are not yet characterized, so no threshold-based definition can currently be validated, and the definition will shift with the technique used (culture vs next-generation sequencing).
>
> **Practical rule of thumb** ([[aga-2020-sibo]] Table 3): consider SIBO **any time there is small intestinal stasis**.

> **Note on IMO:** When methane is the predominant exhaled gas, the term **[[intestinal-methanogen-overgrowth|intestinal methanogen overgrowth (IMO)]]** is preferred, because methanogens are archaea (not bacteria). IMO is clinically associated with constipation rather than diarrhea.

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
  - [[#Classification / Typing]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
  - [[#Breath Testing (First-Line Non-Invasive Test)]]
  - [[#Small Bowel Aspirate and Culture (Historical Gold Standard)]]
  - [[#Laboratory Tests]]
  - [[#Emerging / Investigational Techniques]]
- [[#Therapeutics]]
  - [[#Antibiotics (First-Line — Conditional Recommendation)]]
  - [[#Dietary Management]]
  - [[#Probiotics]]
  - [[#Fecal Microbiota Transplant (FMT)]]
  - [[#Prevention]]
  - [[#Monitoring]]
- [[#See Also]]
- [[#Sources]]

---

## Assessment

### Establishing the Diagnosis

**Clinical presentation:**

- Symptoms traditionally linked to SIBO: **bloating, diarrhea, abdominal pain/discomfort**; steatorrhea in more severe cases ([[aga-2020-sibo]] **BPA 2**). Also flatulence, distension, nausea, cramping.
- **Which symptom actually points to SIBO — the two societies disagree, and the newer source reverses the older one.** [[aga-2020-sibo]] (Oct 2020): *"Contrary to common belief, **diarrhea and not bloating** has the strongest association with SIBO"*; in IBS, "diarrhea or 'gas,' but not bloating, seem to be the most predictive symptoms." [[acg-2020-sibo]] (Jan/Feb 2020) Key Concept 1: *"The most common symptom of SIBO is **bloating**"* (present in >2/3). Both are tier-1; the AGA CPU is the later 2020 publication, so **use diarrhea as the discriminating symptom** and treat [[abdominal-bloating-and-distention|bloating]] as sensitive but non-discriminating. Note the claims are not strictly identical — ACG describes symptom *frequency*, AGA describes *predictive strength*.
- **In whom the symptom means most:** the association is strong in patients with a predisposing anatomic/pathologic/pharmacologic cause (stasis or recirculation of colonic contents, impaired resistance to bacteria) — there, SIBO "will lead to diarrhea and can progress to a full-blown malabsorption syndrome." Without an obvious predisposing factor, "symptoms are weakly predictive at best" ([[aga-2020-sibo]]).
- **In the very elderly:** SIBO is an important cause of otherwise unexplained **diarrhea and weight loss**.
- IMO pattern: constipation predominant.
- Severe/structural SIBO: steatorrhea, weight loss, fat-soluble vitamin deficiencies (B12, D, iron); note that **folate may be elevated** (bacteria synthesize folate). Malabsorption is "uncommon in the absence of blind loops or other structural causes" ([[aga-2020-sibo]] Table 3).
- Symptoms are non-specific and overlap extensively with [[irritable-bowel-syndrome]], functional [[dyspepsia]], and other [[disorders-of-gut-brain-interaction]].

**Risk factor assessment — essential pre-test step.** Organized by the mechanism that produces overgrowth ([[aga-2020-sibo]] Table 1); the column a disorder sits in *is* the teaching point.

| Abnormal small intestinal motility | Anatomic abnormalities | Hypochlorhydria | Immune deficiency | Multifactorial | Relationship to SIBO unclear |
|---|---|---|---|---|---|
| Diabetic autonomic neuropathy | Small intestinal diverticulosis | Post-surgical | Inherited immune deficiencies (eg, common variable immunodeficiency) | [[chronic-pancreatitis\|Chronic pancreatitis]] | Rosacea |
| Systemic sclerosis/scleroderma (see [[esophageal-dysfunction-systemic-disease\|GI involvement in systemic disease]]) | Surgically-induced alterations in anatomy (Billroth II gastrectomy, [[bariatric-surgery\|bariatric surgery]], end-to-side anastomosis) | Long-term acid suppression ([[proton-pump-inhibitors\|PPIs]]) | Acquired immune deficiency (eg, AIDS, severe malnutrition) | [[celiac-disease\|Celiac disease]] | Interstitial cystitis |
| Amyloidosis | Strictures ([[crohns-disease\|Crohn's disease]], radiation, surgery) | | | Diabetes mellitus | Restless legs syndrome |
| Hypothyroidism | Blind loops | | | Tropical sprue | Parkinson's disease |
| Idiopathic intestinal pseudo-obstruction (see [[acute-colonic-pseudo-obstruction]]) | Gastrocolic or jejunocolic fistula | | | Crohn's disease | [[gerd\|Erosive esophagitis]] |
| Acromegaly | Ileocecal valve resection | | | Cystic fibrosis | Severe [[obesity\|obesity]] |
| [[gastroparesis\|Gastroparesis]] | | | | Intestinal failure (see [[short-bowel-syndrome]]) | [[irritable-bowel-syndrome\|Irritable bowel syndrome]] |
| Myotonic muscular dystrophy | | | | Radiation enteropathy | |
| Chronic opiate use | | | | Liver disease (see [[cirrhosis]]) | |
| Long-standing use of motility-suppressing drugs | | | | End-stage renal disease | |
| | | | | The elderly | |

- Additional entities listed by [[acg-2020-sibo]] (Table 4) but absent from the AGA table: **small bowel tumor, volvulus, intussusception, adhesions, Roux-en-Y and ileocolonic anastomosis, visceral myopathies, mitochondrial diseases, IgA deficiency**.
- **Which risk factors are actually borne out by culture:** in a large retrospective duodenal-aspirate series, the main risk factors were **older age, steatorrhea, and narcotic use**; the significantly associated disorders were **[[inflammatory-bowel-disease|IBD]], chronic pancreatitis, and jejunal diverticulosis** ([[aga-2020-sibo]]).
- **Disease-specific predictors** ([[aga-2020-sibo]]): in Crohn's disease — **fibrostenotic phenotype and prior surgery, especially ileocecal valve resection**; in cirrhosis — complications such as [[hepatic-encephalopathy|encephalopathy]] and [[spontaneous-bacterial-peritonitis|SBP]].
- Caution: across the Table 1 disorders, correlations between SIBO and nutritional status or outcomes are "far from consistent," and the classical structural causes account for only "a small minority of those diagnosed with SIBO today."

**Mechanisms protecting small bowel ecology:**

- Gastric acid — kills most ingested bacteria
- Pancreatic enzymes — digest bacterial products; efficient nutrient digestion leaves less substrate
- Bile acids — detergent effect on bacterial membranes
- [[small-bowel-motility|Small bowel motility]] — migrating motor complex (MMC), especially phase III, sweeps bacteria toward colon during fasting
- Ileocecal (IC) valve — prevents retrograde movement of colonic flora
- Immune system — mucosal immunity maintains stable microbiota

### Severity Assessment

No validated SIBO-specific patient-reported outcome (PRO) instrument currently exists. Severity is inferred from:

- Symptom burden (bloating frequency/severity, stool frequency/consistency)
- Breath test gas concentrations
- Nutritional deficiencies (severe cases)
- Underlying structural cause severity

### Classification / Typing

| Type | Dominant gas | Key symptom | Preferred term |
|---|---|---|---|
| Hydrogen-predominant | H₂ ≥20 ppm rise within 90 min | Bloating, diarrhea | SIBO |
| Methane-predominant | CH₄ ≥10 ppm at any point | Constipation | IMO ([[intestinal-methanogen-overgrowth]]) |
| Hydrogen sulfide | H₂S elevated | Diarrhea-predominant; "rotten egg" flatus | H₂S-SIBO (cutoff not yet validated) |

---

## Differential Diagnosis

*Workup: see [[chronic-diarrhea]].*

Symptoms of SIBO are non-specific. The differential includes:

- [[irritable-bowel-syndrome]] — most important overlap; IBS is both a risk factor for and a mimic of SIBO. Meta-analysis: SIBO **OR 4.9** on breath testing vs matched controls, and **up to 33.5% of IBS subjects positive by culture vs 8.2% of controls** ([[aga-2020-sibo]]); [[acg-2020-sibo]] cites rates up to 78% on breath testing — the spread reflects the test used, since **lactulose breath testing over-calls relative to glucose or culture**. Whether SIBO actually causes IBS symptoms remains contested ([[aga-2020-sibo]] **BPA 6**)
- [[celiac-disease]] — malabsorptive symptoms, diarrhea, bloating; SIBO prevalence in [[celiac-disease|celiac disease]] similar to healthy subjects (lower than IBS)
- [[chronic-pancreatitis]] / [[exocrine-pancreatic-insufficiency|exocrine pancreatic insufficiency]] — steatorrhea, malabsorption; pancreatic insufficiency is also a SIBO risk factor
- [[inflammatory-bowel-disease|Inflammatory bowel disease]] — [[crohns-disease]]: 16.8% in endoscopic remission have SIBO; postsurgical anatomy (ileocolonic anastomosis, ileocecal valve resection) increases risk
- Functional dyspepsia — bloating, nausea; part of [[disorders-of-gut-brain-interaction]] spectrum
- [[microscopic-colitis|Microscopic colitis]] — chronic watery diarrhea
- Lactose/fructose intolerance — symptoms triggered by specific carbohydrates; breath testing can be confounded
- [[gastroparesis|Gastroparesis]] — delayed gastric emptying → altered small bowel motility
- Intestinal pseudo-obstruction — [[acute-colonic-pseudo-obstruction|Ogilvie syndrome]], CIPO
- Small bowel dysmotility from systemic disease (scleroderma, diabetes, amyloidosis)

---

## Diagnostics

### Breath Testing (First-Line Non-Invasive Test)

**ACG 2020 Recommendation 1** (Conditional/Very Low): Suggest breath testing (glucose H₂ or lactulose H₂) for SIBO in patients with IBS.
**ACG 2020 Recommendation 2** (Conditional/Very Low): Suggest breath testing in symptomatic patients with suspected motility disorders.
**ACG 2020 Recommendation 3** (Conditional/Very Low): Suggest breath testing in symptomatic patients (abdominal pain, gas, bloating, diarrhea) with previous luminal abdominal surgery.
**ACG 2020 Recommendation 4** (Conditional/Very Low): Suggest **against** breath testing in **asymptomatic** patients on PPIs.
**ACG 2020 Recommendation 5** (Conditional/Very Low): Suggest methane breath testing (glucose or lactulose) to diagnose IMO in symptomatic patients with constipation.

> **[[aga-2020-sibo]] makes no breath-testing recommendation at all** — no cutoff, no substrate preference, no substrate dose, and no statement for or against testing in any population. Recorded as written: breath testing "has lacked universal acceptance," "was never fully validated compared with culture of small intestinal aspirates," and there are "wide discrepancies in thresholds for defining a positive breath test result." This is silence plus caution, **not** an endorsement and **not** a recommendation against. The protocol and cutoffs below are therefore **ACG's**; the AGA CPU neither ratifies nor contradicts the specific numbers.

**Preparation:**

- Avoid antibiotics for 4 weeks before testing
- Avoid promotility agents and laxatives for ≥1 week before testing
- Day before test: avoid fermentable foods (complex carbohydrates)
- Test day: fast 8–12 hours; avoid smoking and physical exertion during test

**Protocol:**

- Substrate: 75 g glucose OR 10 g lactulose, with ~250 mL (1 cup) water
- Sample breath for H₂ and CH₄ at baseline and at 15-minute intervals for 90–120 minutes

**Interpretation:**

- **Positive for SIBO (H₂):** Rise ≥20 ppm above baseline within 90 minutes
  - Note: With lactulose, a second colonic peak is no longer required; the first peak must occur within 90 minutes
- **Positive for IMO (CH₄):** ≥10 ppm at any point during the test
- **Negative:** Gas concentrations remain below threshold levels throughout (see Figure 1c in source)

**Performance characteristics:**

- Lactulose: sensitivity 31–68%, specificity 44–100%
- Glucose: sensitivity 20–93%, specificity 30–86%
- High false-positive rate for lactulose (accelerated colonic fermentation)
- Glucose absorbed in proximal duodenum → may miss distal SIBO
- **Substrate changes the answer:** in meta-analysis, **lactulose breath testing yielded a higher rate of positive results than either culture or glucose breath testing** — so a lactulose-positive result is the weakest of the three ([[aga-2020-sibo]])

**Interpretation pitfalls ([[aga-2020-sibo]]) — read before acting on a result:**

- **The 2-peak rule is not validated.** Some studies require 2 H₂ peaks for a positive lactulose test; "this criterion has not been validated."
- **Methane suppresses hydrogen.** CH₄ is produced by methanogens and **4 moles of H₂ are consumed to produce 1 mole of CH₄**, so a methane producer can have a falsely low/negative H₂ curve. Conventional breath testing measures **both** gases — never interpret H₂ without seeing the CH₄ trace.
- Breath testing was never validated against aspirate culture; agreement between the two methods is imperfect (see below).
- What breath testing is credited with, even by its critics: it "appears to identify subjects likely to respond to treatment" ([[aga-2020-sibo]] Table 3).

**Substrate choice:**

- Glucose preferred in diabetics (lactulose avoided due to risk of acute hyperglycemia and gut dysmotility interference; fructose evaluated as alternative with similar sensitivity/specificity/accuracy ~48–71–58%)
- Lactulose may be preferred for suspected distal SIBO

*Post-treatment retesting: see [[#Monitoring]].*

### Small Bowel Aspirate and Culture (Historical Gold Standard)

**Diagnostic threshold — the order of magnitude agrees; the exact wording differs by society:**

| | [[aga-2020-sibo\|AGA 2020 CPU]] | [[acg-2020-sibo\|ACG 2020]] |
|---|---|---|
| Threshold | **>10³ CFU/mL** | **≥10³ CFU/mL** |
| What is counted | **coliforms** | bacteria (not specified) |
| Specimen | **fresh** aspirate culture | duodenal/jejunal aspirate |

- Both trace the threshold to the same North American Consensus and both **replace the historical ≥10⁵ CFU/mL** cutoff — a threshold whose version matters, because ≥10⁵ is almost exclusively seen in post-gastrectomy/blind-loop anatomy and would miss most SIBO.
- **Why 10³ and not 10⁵** ([[aga-2020-sibo]]): bacterial levels in normal subjects "rarely exceed **10² CFU/mL**," and the >10⁵ CFU/mL figure was "derived from subjects with altered intestinal anatomy" — i.e. it was never a normal-range cutoff.
- The threshold is not settled science: "the centrality of quantitative intestinal cultures to the definition of SIBO has been challenged," and the definition will change with the technique used (culture vs next-generation sequencing) ([[aga-2020-sibo]] BPA 5).
- Invasive, expensive, requires [[upper-endoscopy|endoscopy]] and aseptic technique; impractical in routine care
- Results reported as precise colony counts (CFU/mL), not just positive/negative
- Diagnostic agreement between culture and breath testing ~65% — single method may not be definitive
- Specimen handling: promptly transfer to microbiology laboratory; process for aerobic and anaerobic culture; communicate with lab to report colony counts not just positivity

**Technique determines the result ([[aga-2020-sibo]]) — and explains the conflicting literature:**

- The aspirate must avoid contamination by oral/upper-GI flora as the scope passes the mouth. A **double-lumen custom protected catheter** passed through the scope mitigates this.
- Small intestinal fluid is **mucoid**, impeding bacterial isolation and DNA extraction. Pre-treating the aspirate with the mucolytic **dithiothreitol** increases yield for culture, library preparation, and sequencing.
- Standardized quantitative small-bowel culture historically lived in a few academic centers and "was not easy to reproduce in community-based microbiology laboratories."
- **Two studies, opposite conclusions, different methods:** with the protected double-lumen catheter and a **>10³ CFU/mL** cutoff, culture, sequencing, breath testing (H₂ rise ≥20 ppm after lactulose), and symptoms all agreed. With a **single-lumen catheter and the old ≥10⁵ CFU/mL** definition, no SIBO–symptom association was found, and the authors suggested small-bowel microbial changes in functional disorders "might be related more to diet." Read any aspirate study against its catheter and its cutoff before believing its conclusion.

### Laboratory Tests

**Expect them to be normal.** "Commonly performed laboratory tests will prove to be normal in most individuals considered to have SIBO today" ([[aga-2020-sibo]]). [[aga-2020-sibo]] **BPA 4**: laboratory findings *can* include **elevated folate** and, less commonly, **vitamin B-12 deficiency** or other nutritional deficiencies.

- **The discriminating pattern is high folate + low B-12** — bacterial folic acid synthesis plus bacterial B-12 consumption produce this "unusual combination"
- **Three mechanisms of B-12 deficiency:** (1) consumption of cobalamin by anaerobes; (2) competitive binding at the **ileal receptor** by bacterially generated cobalamin metabolites; (3) in severe overgrowth, mucosal injury involving the binding site
- **Vitamin K cuts both ways — check before adjusting anticoagulation.** A vitamin-K–responsive coagulopathy has been described in SIBO, *but* bacterial vitamin K production plus enhanced absorption from increased permeability can sustain or even **raise** vitamin K levels enough that a **warfarin dose may need adjustment** to stay therapeutic
- Thiamine and nicotinamide deficiency also described (bacterial utilization of vitamins)
- Vitamin D, iron studies — low in severe malabsorptive SIBO; fat-soluble vitamins (A, E, K) deficient in severe structural/blind-loop SIBO via bile acid deconjugation → bile acid pool depletion → fat maldigestion
- CBC — anemia ([[iron-deficiency-anemia|iron deficiency]] or B12)
- **Severe SIBO mucosal consequences:** loss of brush border enzymes → carbohydrate malabsorption; epithelial barrier damage → protein-losing enteropathy; bacterial competition for luminal protein → hypoproteinemia and edema
- Celiac serology — to exclude [[celiac-disease]]
- **Fecal calprotectin — use it to exclude IBD, not to detect SIBO.** [[aga-2020-sibo]] **BPA 3**: "There is insufficient evidence to support the use of inflammatory markers, such as fecal calprotectin, to detect SIBO." Results are mixed — one study found no elevation in SIBO, while studies in scleroderma and [[crohns-disease|Crohn's disease]] found elevated levels a valuable indicator. Not addressed by [[acg-2020-sibo]].
- Fecal elastase — to evaluate for exocrine pancreatic insufficiency ([[chronic-pancreatitis]])

### Emerging / Investigational Techniques

- Ingestible capsule (electronic): measures H₂ and CO₂ in vivo after carbohydrate meal; under development
- Small bowel capsule detection system: measures bacteria directly; under development
- H₂S breath testing: available but diagnostic cutoff not yet validated
- 16S rRNA gene sequencing: research tool; identifies higher Escherichia coli, Aeromonas, Pseudomonas and lower Acinetobacter, Citrobacter, Microvirgula in IBS/SIBO subjects vs. controls
- 3-gas (H₂ + CH₄ + H₂S) breath measurement: may improve symptom correlation; studies underway
- Breath volatile substances by mass spectrometry: early stage; promising

---

## Therapeutics

### Antibiotics (First-Line — Conditional Recommendation)

**ACG 2020 Recommendation 6** (Conditional/Low): Suggest the use of antibiotics in symptomatic patients with SIBO to eradicate overgrowth and resolve symptoms.

**[[aga-2020-sibo]] BPA 7 — the order of operations:** identify and correct (where possible) the **underlying cause** (blind loop, small bowel stricture, coloenteric fistula) → correct **nutritional deficiencies** → give **antibiotics**. "This is especially important for patients with significant maldigestion and malabsorption."

**[[aga-2020-sibo]] BPA 9 — set the goal correctly:** "The goal of antibiotic therapy in SIBO is **not to eradicate** small intestinal microbiota but to **modulate** them in a manner that leads to symptomatic improvement." There is "a limited database to guide the clinician in developing antibiotic strategies for SIBO, in any context"; therapy is "for the most part, empiric, but must be ever mindful of the potential risks of long-term broad-spectrum antibiotic therapy."

Before initiating antibiotic therapy: make an objective effort to diagnose SIBO (breath test or culture). Consider [[clostridioides-difficile|CDI]] risk, antibiotic resistance, and adverse effects.

**Choosing the agent:**

- **Susceptibility-directed therapy is impractical** — different bacterial species with different sensitivities typically coexist, so the choice is empiric ([[aga-2020-sibo]])
- In principle, an effective regimen should cover **both aerobic and anaerobic enteric bacteria** ([[aga-2020-sibo]])
- The AGA table is explicitly "regimens that **have been used**" — not a ranked or preferred-agent list, and no agent is endorsed over another

**Duration — the number ACG does not give.** [[aga-2020-sibo]]: "a single **7- to 10-day course** improves symptoms for up to several months in **46%–90%** of patients with SIBO and renders breath tests negative in **20%–75%**." [[acg-2020-sibo]] specifies no duration.

**Antibiotic regimens — the two societies give different doses for the same drugs.** Both tier-1; the AGA CPU is the later 2020 publication, so its regimen column is what this page asserts, with ACG's stated alongside. Efficacy figures are ACG's; the AGA table reports **no efficacy data and no duration**.

| Antibiotic | [[aga-2020-sibo\|AGA 2020]] regimen | [[acg-2020-sibo\|ACG 2020]] regimen | Efficacy (ACG) |
|---|---|---|---|
| [[rifaximin\|Rifaximin]] (non-absorbable) | **800–1200 mg daily in divided doses** | 550 mg t.i.d. (1,650 mg/day) | 61–78% |
| Amoxicillin-clavulanic acid | **500/125 mg t.i.d.** | 875 mg b.i.d. | 50% |
| Ciprofloxacin | **250 mg b.i.d.** | 500 mg b.i.d. | 43–100% |
| Doxycycline | **100 mg b.i.d.** | 100 mg q.d.–b.i.d. | Not specified |
| Metronidazole | 250 mg t.i.d. | 250 mg t.i.d. | 43–87% |
| Neomycin | 500 mg b.i.d. | 500 mg b.i.d. | 33–55% |
| Norfloxacin | **800 mg daily** | 400 mg q.d. | 30–100% |
| Tetracycline | 250 mg q.i.d. | 250 mg q.i.d. | 87.5% |
| TMP-SMX | 1 double strength b.i.d. | 160/800 mg b.i.d. | 95% |

**[[rifaximin|Rifaximin]] specifics:**

- Gut-selective, minimal systemic absorption, low resistance risk
- Eradication ~**70%** by meta-analysis in both sources; ACG meta-analysis of 32 trials (n=1,331): 70.8% (CI 61.4–78.2%), adverse reactions 4.6%
- Trial dosing ranged from **800 mg/day × 4 weeks to 1200 mg/day × 7 days** ([[aga-2020-sibo]])
- **US practical barrier:** SIBO is **not a recognized indication** for rifaximin and it "might not be covered by the patient's insurance carrier" ([[aga-2020-sibo]])

**IMO-specific treatment (methane/constipation):** the antibiotic regimens, doses, response rates, and the ≥3 ppm vs ≥10 ppm entry-criterion caveat live on **[[intestinal-methanogen-overgrowth]]** — note only that the IMO [[rifaximin]] dose (**400 mg t.i.d.**) is *not* the SIBO dose above, and that combination rifaximin + neomycin outperformed either monotherapy. [[aga-2020-sibo]] corroborates the combination but grades the evidence lower: "**one uncontrolled trial** suggested that the combination of neomycin and rifaximin might be effective," and gives no doses.

**Recurrence:**

- 12.6% at 3 months, 27.5% at 6 months, 43.7% at 9 months ([[acg-2020-sibo]]); "up to **44% at 9 months**" ([[aga-2020-sibo]]) — the two agree
- **Who recurs** ([[aga-2020-sibo]]): **older subjects, prior appendectomy, and chronic [[proton-pump-inhibitors|PPI]] use**
- **Retreatment options when symptoms recur** ([[aga-2020-sibo]]): **repeated pulses — e.g. the first 5–10 days of every month — or continuous therapy**. For continuous therapy, **rotate regimens to prevent resistance**. No universally accepted retreatment protocol exists in either source; both rest on expert opinion.
- Individualize the decision against the risks of **diarrhea, *[[clostridioides-difficile|C. difficile]]* infection, intolerance, and cost** ([[aga-2020-sibo]])
- Prevention is the primary strategy: identify and address the underlying cause

### Dietary Management

- Low FODMAP (Fermentable Oligo-, Di-, Mono-saccharides and Polyols) diet: reduces hydrogen fermentation and may reduce SIBO symptoms; evidence extrapolated from IBS — "very low quality evidence" in IBS meta-analysis, not directly studied in SIBO
- Core principles: reduce fermentable fiber, avoid alcohol sugars (sorbitol, xylitol, sucralose), avoid prebiotics (inulin)
- One study: daily hydrogen output significantly higher when FODMAPs ingested vs. low FODMAP
- Gluten-free diet: no good evidence to support in SIBO or IBS

### Probiotics

- Not recommended as standard therapy
- Meta-analysis: [[probiotics]] may reduce hydrogen production (OR 1.61, CI 1.19–2.17), but studies are small and of poor quality
- Controlled study showed probiotics can cause SIBO and D-lactic acidosis; antibiotic course + probiotic withdrawal → symptom resolution
- Counterintuitive mechanism to introduce more bacteria into a state of bacterial excess

### Fecal Microbiota Transplant (FMT)

- No basis for [[fmt|FMT]] in SIBO treatment currently (Key Concept 13)
- Concerns: FDA safety alerts re: multi-drug resistant organism transmission
- Case report: FMT for C. difficile → recipient acquired constipation phenotype and methane-positive breath test from donor — possible donor-dependent complication

### Prevention

- Primary strategy: identify and treat the underlying cause of SIBO
- Modifiable targets: optimize glycemic control (diabetes), address motility disorders, discontinue opiates when possible, minimize unnecessary PPIs
- Scleroderma/systemic disease: rotating antibiotics (e.g., norfloxacin 400 mg q.d. alternating monthly with metronidazole 250 mg t.i.d. × 3 cycles) reduced SIBO recurrence in systemic sclerosis (52% eradication, significant symptomatic improvement at 3 months)

### Monitoring

**If symptoms respond, do not retest — the societies disagree and the newer one says stop.**

- [[aga-2020-sibo]]: "**It is not necessary to repeat diagnostic tests for SIBO after antibiotic therapy should gastrointestinal symptoms respond.**"
- [[acg-2020-sibo]] Key Concept 15: in subjects with an abnormal breath test, retesting after treatment "may correlate with symptom improvement and may be confirmed by normalization of hydrogen or methane levels."
- Both tier-1; the AGA CPU is the later 2020 publication, so **symptom response is the endpoint** and confirmatory breath testing is optional, not expected.
- Follow-up breath testing remains a clinical-trial outcome measure and may still help in **difficult-to-treat or non-responding** cases, where the question is whether overgrowth persists.

---

## See Also

[[chronic-diarrhea]], [[irritable-bowel-syndrome]], [[celiac-disease]], [[chronic-pancreatitis]], [[exocrine-pancreatic-insufficiency]], [[microscopic-colitis]], [[crohns-disease]], [[gastroparesis]], [[disorders-of-gut-brain-interaction]], [[intestinal-methanogen-overgrowth]], [[abdominal-bloating-and-distention]], [[acute-colonic-pseudo-obstruction]], [[rifaximin]], [[probiotics]], [[fmt]], [[proton-pump-inhibitors]], [[iron-deficiency-anemia]], [[small-bowel-motility]], [[upper-endoscopy]], [[clostridioides-difficile]], [[inflammatory-bowel-disease]], [[short-bowel-syndrome]], [[esophageal-dysfunction-systemic-disease]], [[bariatric-surgery]], [[obesity]], [[gerd]], [[cirrhosis]], [[hepatic-encephalopathy]], [[spontaneous-bacterial-peritonitis]], [[dyspepsia]]

---

## Sources

1. [[acg-2020-sibo|ACG 2020: Small Intestinal Bacterial Overgrowth]]
2. [[aga-2020-sibo|AGA 2020 Clinical Practice Update: Small Intestinal Bacterial Overgrowth (Expert Review)]]
