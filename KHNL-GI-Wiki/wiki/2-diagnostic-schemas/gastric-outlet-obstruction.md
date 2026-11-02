---
title: "Gastric Outlet Obstruction"
category: diagnostic-schema
tags: [gastric-outlet-obstruction, goo, gooss, enteral-stent, gastrojejunostomy, eus-ge, lams, palliation, peptic-ulcer-disease, pancreatic-cancer]
created: 2026-09-02
updated: 2026-11-02
sources: [aga-2021-malignant-alimentary-tract-obstruction, jeurnink-2010-sustent-goo, kastelijn-2023-enduro-protocol, asge-2010-pud, aga-2025-endoscopic-enteral-access]
---

## Contents
- [[#Definition / Scope]]
  - [[#GOOSS — Gastric Outlet Obstruction Scoring System]]
- [[#Differential Diagnosis]]
- [[#Diagnostic Algorithm]]
- [[#Key Tests]]
- [[#Red Flags / Alarm Features]]
- [[#Treatment Selection]]
  - [[#Benign GOO]]
  - [[#Malignant GOO — the prognosis threshold]]
  - [[#Procedural specifications]]
  - [[#After the procedure]]
- [[#See Also]]
- [[#Sources]]

---

## Definition / Scope

- **Mechanical obstruction of gastric outflow.** Anatomically the two trials bound it as obstruction extending from the **distal one third of the stomach to the distal duodenum** ([[jeurnink-2010-sustent-goo|SUSTENT]]) — equivalently, **pyloric region to the third part of the duodenum** ([[kastelijn-2023-enduro-protocol|ENDURO]]).
- **Symptoms scale with severity:** early satiety → nausea → vomiting → complete inability to tolerate oral intake.
- **Why it must be treated, not observed:** poor clinical condition from vomiting, dehydration, and malnutrition develops quickly. The aim of palliation in malignant gastric outlet obstruction (GOO) is to maintain oral intake and stabilize quality of life.
- **How often it complicates pancreatic cancer — the two sources differ slightly:** [[jeurnink-2010-sustent-goo|SUSTENT]] states **10–20%** of patients with pancreatic cancer develop obstructive symptoms during the disease course; [[kastelijn-2023-enduro-protocol|ENDURO]] states **15–20%** will develop GOO. Same tier, and the newer figure sits inside the older range — treat the answer as "roughly one in six".
- **Scope note:** this page is the home of the **Gastric Outlet Obstruction Scoring System (GOOSS) score** and the **malignant-GOO treatment-selection rule**. Benign (peptic) GOO dilation outcomes live on [[peptic-ulcer-disease]]; feeding-route selection lives on [[enteral-access]].

### GOOSS — Gastric Outlet Obstruction Scoring System

The standardized food-intake instrument used to define eligibility, measure response, and time the decision to escalate. **Both trials enrol only GOOSS 0–1 and define treatment success as reaching GOOSS ≥2.**

| Score | Oral intake |
|---|---|
| **0** | No oral intake |
| **1** | Liquids only |
| **2** | **Soft solids** ← threshold for "able to eat"; the primary endpoint in both trials |
| **3** | Almost complete diet |
| **4** | Full diet |

---

## Differential Diagnosis

*This page is itself the workup schema; the entries below are the causes to distinguish.*

**Malignant** — the dominant cause in both trials:

| Cause | Note |
|---|---|
| **[[pancreatic-cancer\|Pancreatic adenocarcinoma]]** | **Most common cause.** 28 of 39 SUSTENT patients |
| **[[gastric-adenocarcinoma\|Distal gastric cancer]]** | |
| Periampullary / papillary carcinoma | Stent across the ampulla may block later biliary access — see below |
| Duodenal carcinoma | |
| [[cholangiocarcinoma\|Bile duct carcinoma]] | |
| Lymphoma | |
| **Extrinsic compression from metastases** to duodenum or jejunum | |

**Benign:**

- **[[peptic-ulcer-disease\|Peptic ulcer disease]]** — the principal benign cause. **Active ulcers are found in up to one third of patients endoscoped for GOO** ([[asge-2010-pud]]).

**Must be excluded before committing to a bypass — these change the operation, not just the diagnosis:**

- **Additional or more distal strictures in the gastrointestinal (GI) tract.** Both trials exclude them; ENDURO specifically excludes obstruction **distal to the ligament of Treitz with small-intestinal dilation/ileus**. A gastrojejunostomy or stent proximal to a second downstream obstruction will not restore intake.
- **Ileus / dysmotility masquerading as mechanical obstruction** — ENDURO's post-procedure algorithm requires excluding ileus (distended abdomen, absent or high-pitched peristalsis, no passage of flatus or faeces) before attributing failure to the anastomosis.
- **Prior gastric, periampullary, or duodenal surgery**, or a prior gastrojejunostomy/stent for the same condition — excluded from both trials, so the trial-derived rules below do not transfer to these patients.

---

## Diagnostic Algorithm

```mermaid
flowchart TD
    A["Nausea, vomiting, early satiety<br/>or inability to tolerate oral intake"] --> B["Score oral intake: GOOSS 0-4"]
    B --> C["Upper endoscopy<br/>(American Society for Gastrointestinal Endoscopy<br/>[ASGE] Rec 11, High quality)"]
    C --> D{"Obstructing lesion?"}
    D -->|"Ulcer / benign stricture"| E["Biopsy to exclude malignancy<br/>Test and treat H. pylori"]
    D -->|"Mass / stricture suspicious for tumour"| F["Biopsy + cross-sectional imaging<br/>for stage and resectability"]
    E --> G["Benign GOO<br/>→ endoscopic balloon dilation"]
    F --> H{"Resectable with curative intent?"}
    H -->|Yes| I["Curative resection<br/>(not a palliation decision)"]
    H -->|"Irresectable / metastatic"| J["Confirm no second obstruction<br/>distal to ligament of Treitz"]
    J --> K{"Estimated survival<br/>and performance status"}
    K -->|"> 2 months, good functional<br/>status, surgically fit"| M["Surgical gastrojejunostomy<br/>(laparoscopic preferred)<br/>or EUS-GE where expertise exists"]
    K -->|"not that, i.e. shorter survival<br/>or not surgically fit"| N{"Any stent contraindication?<br/>multiple luminal obstructions ·<br/>survival < a few weeks ·<br/>impaired gastric motility"}
    N -->|No| L["Enteral (duodenal) stent<br/>faster relief, more reinterventions"]
    N -->|Yes| O["Venting gastrostomy"]
```

*Figure 1 — Workup and treatment-selection pathway (wiki-recreated). Endoscopy step from [[asge-2010-pud]]; the selection rule and the stent contraindications from [[aga-2021-malignant-alimentary-tract-obstruction]] Best Practice Advice (BPA) 6–10; the trial behind the 2-month threshold is [[jeurnink-2010-sustent-goo]], restated as current standard of care in [[kastelijn-2023-enduro-protocol]].*

---

## Key Tests

| Test | Role |
|---|---|
| **[[upper-endoscopy\|Upper endoscopy]]** | **Recommended for the evaluation of GOO — ASGE 2010 Rec 11, High quality of evidence.** Confirms the obstruction, localizes it, and — critically — **biopsies to separate benign from malignant**, which is the branch point of the whole algorithm. Also the therapeutic access for benign dilation. |
| **Biopsy of the obstructing lesion** | Malignant gastric lesions can look endoscopically benign; the benign-vs-malignant call cannot be made on appearance alone ([[asge-2010-pud]]). |
| **Cross-sectional imaging** | Establishes irresectability/metastatic disease — the precondition for treating GOO as a palliative problem at all. Also confirms GOO radiologically (an accepted alternative to endoscopic confirmation in ENDURO) and screens for a second, more distal obstruction. |
| **World Health Organization (WHO) / Eastern Cooperative Oncology Group (ECOG) performance status** | Not a "test" but a required input: performance status plus estimated survival selects the palliative procedure. **WHO 4 (bedbound 100% of the time) was an exclusion** from SUSTENT — such patients were not studied and the rule below does not cover them. |
| **GOOSS score** | Baseline severity, treatment response, and the day-5 escalation trigger. |

---

## Red Flags / Alarm Features

- **GOOSS 0 (no oral intake at all)** — dehydration and malnutrition develop quickly; this is not a watch-and-wait situation.
- **Vomiting more than twice in 24 h**, or still GOOSS 0–1 **five days after** a bypass or stent — trigger for endoscopic jejunal feeding access.
- **Endoscopically benign-looking gastric lesion** — appearance does not exclude malignancy; biopsy is mandatory.
- **New [[jaundice]] or [[acute-cholangitis|cholangitis]] after duodenal stenting** — the stent may have crossed the ampulla and blocked endoscopic retrograde cholangiopancreatography (ERCP) access; anticipate percutaneous drainage.
- **Suspicion of a second, more distal obstruction** (small-bowel dilation, ileus) — a proximal bypass will not work.
- **WHO performance status 4** — outside the evidence base for either palliative procedure.
- **Suspected perforation after balloon dilation or endoscopic ultrasound (EUS)–guided gastroenterostomy (EUS-GE)** — pyloric dilation carries a meaningful perforation rate ([[peptic-ulcer-disease]]); lumen-apposing metal stent (LAMS) misdeployment causes jejunal perforation and peritonitis.

---

## Treatment Selection

### Benign GOO

- **Endoscopic balloon dilation** is suggested for benign GOO — [[asge-2010-pud]] Rec 12, **Low** quality of evidence (note the weak grade).
- Short-term relief is good but **restenosis is common and about half ultimately need surgery**; patients requiring **more than 2 dilations** are at high risk of endoscopic failure. Full outcome figures, including the perforation rate, are on [[peptic-ulcer-disease]].
- Treat the underlying ulcer diathesis in parallel — [[helicobacter-pylori-infection|H. pylori]] eradication, acid suppression ([[proton-pump-inhibitors|proton pump inhibitor (PPI)]]).

### Malignant GOO — the prognosis threshold

**The governing rule is [[aga-2021-malignant-alimentary-tract-obstruction]] BPA 6–10** (tier-1 clinical practice update; it supersedes the trial-level framing below, which is the evidence behind it). The decision is keyed to expected survival, because the two options fail in opposite directions and their outcome curves cross at roughly 30–60 days.

| Patient | Procedure |
|---|---|
| Life expectancy **>2 months** + good functional status + **surgically fit** | **Surgical gastrojejunostomy (GJ), laparoscopic preferred** (BPA 6, 7) |
| Same, where the expertise exists | **EUS-GE** is an acceptable alternative to either surgery or stenting (BPA 10) |
| Not that — shorter survival, or not surgically fit | **Enteral stent** (BPA 8) |
| Any stent contraindication below | **Venting gastrostomy** instead of a stent (BPA 9) |

> [!pitfall] Three situations where an enteral stent is the wrong answer
> **Multiple luminal obstructions** (especially distal to the duodenum), life expectancy **less than a few weeks**, and **impaired gastric motility** (e.g. linitis plastica) are stated contraindications to enteral stenting — vent the stomach instead ([[aga-2021-malignant-alimentary-tract-obstruction]] BPA 9).

- **Enteral stent outcomes** (systematic review): clinical success **89%**; early adverse events **7%** (migration, jaundice, bleeding); late adverse events **18%** (mostly migration, or occlusion from tumour ingrowth or food); mean hospital stay **7 days**; mean overall survival **105 days** after placement. Poor outcome predicted by poor baseline functional status, peritoneal dissemination, and no subsequent chemotherapy.
- **Predictors of surgical-GJ clinical failure** (retrospective, 310 patients): **poor nutritional status, ascites, poor functional status** — the same three inputs that argue for a stent.
- **Delayed gastric emptying follows up to 50% of gastrojejunostomies** when nothing is done at the obstruction site; **gastric partitioning** was developed for this, and its evidence is mixed (one retrospective series as safe as conventional GJ with only a trend toward better solid-diet tolerance; a meta-analysis showed better oral nutrition and emptying).
- **Covered vs uncovered enteral stents is unsettled** — one pooled analysis found higher technical and clinical success with partially covered stents and more ingrowth-related recurrent obstruction with uncovered, but **more migration** with covered; another found no difference in success, with lower occlusion and higher migration for covered.

**The trial-level comparison the rule rests on:**

| | **Enteral (duodenal) stent** | **Surgical gastrojejunostomy** |
|---|---|---|
| Median days to GOOSS ≥2 | **5** | 8 |
| Food intake at 60 days | Worse | **Better** |
| Median days alive with GOOSS ≥2 | 50 | **72** |
| Median hospital stay | **7 days** | 15 days |
| Recurrent obstructive symptoms | 8 in 5 patients | 1 in 1 patient |
| Reinterventions | 10 in 7 patients | 2 in 2 patients |
| Late major complications | 5 in 3 patients | **0** |
| Median survival | 56 days | 78 days (**not different**, P = .19) |
| Quality of life | No difference between arms | |
| Mean total cost per patient | **$11,720** | $16,536 |

*All figures from [[jeurnink-2010-sustent-goo]] (n = 39: 18 gastrojejunostomy, 21 stent).*

**Three qualifiers that travel with these numbers:**

- **Descriptive, not established.** Many comparisons on 39 patients; the authors state Bonferroni correction would leave only the findings at P < .001 — the cost differences.
- **The major-complication gap is definitional** — 6 (in 4 patients) vs 0, but **excluding stent obstruction the rates do not differ** (P = .4).
- **16 of 18 bypasses were open**, only 2 laparoscopic, so the 8-day time-to-eating and 15-day stay **overstate the penalty of a modern laparoscopic GJ** — which is the one BPA 7 prefers.

**Why stents fail late:** obstruction by **food debris** and by **tumour ingrowth/overgrowth** through the uncovered mesh — the recognized weakness of uncovered designs. Covered stents trade ingrowth for a **higher migration** risk. Stent obstruction occurs in **up to 30%** of cases (ENDURO background).

**Biliary access is part of the stent decision.** A duodenal stent deployed **across the ampulla of Vater** raises concern about later [[ercp|ERCP]] access to the bile duct. The two sources read differently and both are shown: of 4 SUSTENT stent-arm patients who later developed common bile duct (CBD) obstruction only 1 could be managed endoscopically and 2 needed percutaneous drainage ([[jeurnink-2010-sustent-goo]], n = 4), whereas a retrospective series cited by the newer, higher-tier [[aga-2021-malignant-alimentary-tract-obstruction]] still achieved **85% technical success** for biliary drainage by ERCP after enteral stent placement. The guideline's figure governs; the alternatives when it fails are percutaneous transhepatic drainage or [[eus-guided-biliary-drainage|EUS-guided biliary drainage]]. **Consider placing a CBD stent up front** if biliary obstruction is anticipated — see [[biliary-stricture]].

**[[endoscopic-ultrasound|EUS]]-guided gastroenterostomy.** A **20-mm LAMS** placed endoscopically between the stomach and a jejunal loop distal to the obstruction, combining the speed of stenting with the durability of surgery; an **acceptable alternative to either** where the expertise exists ([[aga-2021-malignant-alimentary-tract-obstruction]] BPA 10).

- **Outcomes** (systematic review/meta-analysis, 12 studies, 285 patients): **technical success 92%, clinical success 90%, adverse events 12%**, most commonly **stent misdeployment**.
- **Versus enteral stent:** lower re-intervention and symptom recurrence across retrospective series. **Versus laparoscopic GJ:** similar efficacy with significantly **lower adverse events**. All of this comparative evidence is **retrospective or pooled, not randomized** — [[kastelijn-2023-enduro-protocol|ENDURO]] is the randomized trial designed to settle it and is a **protocol reporting no results**.
- **Limits:** expertise-limited and not widely available, and there is **no dedicated US Food and Drug Administration (FDA)–approved device** for EUS-GE. **LAMS misdeployment can cause jejunal perforation and peritonitis.**

### Procedural specifications

*Techniques as protocolized in [[kastelijn-2023-enduro-protocol]]; stent specification from [[jeurnink-2010-sustent-goo]].*

- **Enteral stent:** uncovered Enteral Wallflex, **22 mm diameter**, 60 / 90 / 120 mm length; over a guidewire under combined endoscopic and fluoroscopic monitoring.
- **EUS-GE:** deep [[endoscopy-sedation|sedation]] with propofol, **preferably two advanced endoscopists**. Clear residual gastric contents; place a feeding tube or nasobiliary drain distal to the stenosis. Identify the post-stenotic loop by flushing **saline mixed with indigo carmine**. **Direct puncture** with an **electrocautery-enhanced delivery system**; deploy a **20 × 10 mm LAMS**, distal flange first with traction against the bowel wall, then the proximal flange. Confirm by **backflow of dyed saline into the stomach**. **Do not balloon-dilate the stent immediately** — let it expand naturally.
- **Surgical gastrojejunostomy:** laparoscopic, **antecolic side-to-side**, **no Roux-en-Y**; 60-mm stapler; **biliary limb (bile duct to anastomosis) at least 50 cm**; nasogastric tube post-operatively. A feeding jejunostomy is not routinely constructed.
- **Excessive gastric residual volume** preventing safe sedation → **reschedule after extensive gastric decompression**. This is not a technical failure.
- **Do not perform biliary intervention in the same session** as EUS-GE or surgical bypass.

### After the procedure

- **Persistent obstruction** = nausea, **vomiting more than twice in 24 h**, or inability to tolerate at least soft solids. Manage with nil per mouth, nasogastric tube, and prokinetics (metoclopramide, domperidone, or erythromycin).
- **Day-5 escalation trigger:** if intake is still **GOOSS 0–1 on post-procedure day 5**, place a **jejunal feeding tube endoscopically** — after excluding ileus. Endoscopic placement simultaneously assesses anastomotic/stent patency. Parenteral nutrition only if jejunal feeding is not tolerated.
- **Do not re-endoscope through a LAMS within the first 6 weeks** of placement — the fistula tract may not be mature.
- **Recurrent obstructive symptoms → upper endoscopy.** (*Persistent* = within 4 weeks of treatment; *recurrent* = more than 4 weeks after — [[jeurnink-2010-sustent-goo]].)
- **Stop pre-existing tube feeding** after the procedure to give oral intake a fair trial; restart only if the patient demonstrably cannot maintain adequate intake.
- **Feeding route:** GOO is a stated indication for **small-bowel rather than gastric** enteral access ([[aga-2025-endoscopic-enteral-access]]) — see [[enteral-access]]. Small-bowel feeds need reduced and cycled rates to prevent dumping.

---

## See Also

[[peptic-ulcer-disease]], [[pancreatic-cancer]], [[gastric-adenocarcinoma]], [[enteral-access]], [[endoscopic-ultrasound]], [[eus-guided-biliary-drainage]], [[endoscopic-oncology]], [[upper-endoscopy]], [[ercp]], [[biliary-stricture]], [[jaundice]], [[acute-cholangitis]], [[nausea-and-vomiting]], [[gastroparesis]], [[helicobacter-pylori-infection]], [[proton-pump-inhibitors]]

---

## Sources

1. [[aga-2021-malignant-alimentary-tract-obstruction|AGA Clinical Practice Update on Management of Malignant Alimentary Tract Obstruction: Expert Review (2021)]]
2. [[jeurnink-2010-sustent-goo|Surgical gastrojejunostomy or endoscopic stent placement for the palliation of malignant gastric outlet obstruction (SUSTENT study): a multicenter randomized trial]]
3. [[kastelijn-2023-enduro-protocol|EUS-guided gastroenterostomy versus surgical gastrojejunostomy for palliation of malignant gastric outlet obstruction (ENDURO): study protocol for a randomized controlled trial]]
4. [[asge-2010-pud|ASGE Guideline: The Role of Endoscopy in the Management of Patients With Peptic Ulcer Disease (2010)]]
5. [[aga-2025-endoscopic-enteral-access|AGA 2025 Clinical Practice Update on Endoscopic Enteral Access]]
