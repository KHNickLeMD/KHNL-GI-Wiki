---
title: "Acute Cholecystitis"
category: disease-script
tags: [acute-cholecystitis, gallbladder, cholecystectomy, eus-gbd, percutaneous-cholecystostomy, transpapillary-drainage, lams, high-surgical-risk]
created: 2026-07-23
updated: 2026-09-06
sources: [aga-2023-eus-gallbladder-drainage, asge-2024-therapeutic-eus-biliary, aga-2024-pregnancy-gi-liver, tg18-2018-cholangitis-flowchart]
---

# Acute Cholecystitis

## Contents
- [[#Assessment]]
  - [[#Establishing the Diagnosis]]
  - [[#Severity Assessment]]
- [[#Differential Diagnosis]]
- [[#Diagnostics]]
- [[#Therapeutics]]
  - [[#Cholecystectomy — definitive treatment]]
  - [[#Who is a nonsurgical candidate?]]
  - [[#Gallbladder drainage in high-surgical-risk patients]]
  - [[#Choosing the drainage route]]
  - [[#Follow-up after EUS-GBD]]
  - [[#Cholecystectomy in Pregnancy]]
- [[#See Also]]
- [[#Sources]]

*Ingested coverage is strongest on the gallbladder-drainage decision in high-surgical-risk patients ([[aga-2023-eus-gallbladder-drainage]], [[asge-2024-therapeutic-eus-biliary]]); the Tokyo Guidelines material below comes from the ingested TG18 **cholangitis** flowchart paper, which covers acute biliary infection generally but defers the cholecystitis-specific criteria tables to a companion paper — see flags.*

## Assessment

### Establishing the Diagnosis

- **Suspect on any ONE of:** fever, chills, abdominal pain, [[jaundice]], nausea, vomiting, disturbance of consciousness — the same trigger set as [[acute-cholangitis|acute cholangitis]]; one symptom is enough to start the workup. ([[tg18-2018-cholangitis-flowchart]])
- **Take vital signs first** (BP, HR, respiratory rate, temperature, urine volume, SpO₂, consciousness) to decide whether the situation is urgent. **If urgent, start treatment immediately — do not wait for the definitive diagnosis.**
- **Murphy's sign — the exam finding specific to acute cholecystitis, and TG18 says it must always be confirmed:** compression of the right upper quadrant makes the patient catch their breath from pain on deep inspiration. (Its absence points instead toward cholangitis or [[choledocholithiasis]].)
- **Blood tests** are drawn for diagnosis *and* grading: WBC, platelets, CRP, albumin; ALP, GGT, AST, ALT, bilirubin; BUN, creatinine, PT/PT-INR; blood gas; **blood culture preferably if high fever is present**.
- Common condition in the US; imaging (ultrasound/CT) identifies cholecystitis and screens for **gallbladder perforation** — a key branch point in the drainage algorithm below. ([[aga-2023-eus-gallbladder-drainage]])

> ⚠ **Gap — the formal TG13/18 diagnostic criteria for acute cholecystitis (Table 2)** (the A local signs / B systemic signs / C imaging structure) are **not reproduced in the ingested source.** The TG18 flowchart paper in `raw/` covers acute cholangitis and cites Table 2 to a companion paper (Yokoe et al., *TG18 Diagnostic criteria and severity grading of acute cholecystitis*) that is **not ingested**. Ingesting it would fill this section; do not reconstruct the criteria from memory.

### Severity Assessment

- ⚠ **Gap — TG18 severity grading for cholecystitis (Grade I–III) is likewise not in any ingested source.** The ingested TG18 paper reproduces the severity criteria for **cholangitis** only (those live on [[acute-cholangitis]]) and cites the cholecystitis grades (Table 4) to the same un-ingested Yokoe companion paper. **Do not carry the cholangitis grades across** — the two organs use different criteria.
- **General status is graded alongside severity** in both biliary infections, using the **Charlson Comorbidity Index (CCI)** and the **ASA Physical Status classification**. ([[tg18-2018-cholangitis-flowchart]])

## Differential Diagnosis

*Workup: no diagnostic schema covers undifferentiated RUQ pain — the closest algorithms are [[jaundice]] (cholestasis) and [[biliary-stricture]] (obstruction).*

- [[acute-cholangitis|Acute cholangitis]] — the other acute biliary infection; obstructed duct rather than obstructed cystic duct, and **Murphy's sign is absent**. May coexist.
- [[choledocholithiasis|Choledocholithiasis]] — may coexist; a concurrent need for [[ercp|ERCP]] changes the drainage route (below)
- [[gallbladder-cancer|Gallbladder cancer]] / malignant cystic duct obstruction — tumor occluding the cystic duct takeoff is a specific indication for EUS-guided drainage
- [[acute-pancreatitis|Acute pancreatitis]] — overlapping upper-abdominal pain; gallstone AP shares the etiology
- ⚠ Full differential not covered by ingested sources.

## Diagnostics

**Imaging — do at least one of abdominal ultrasound or CT; ultrasound first** (minimally invasive, widely available, simple, cheap; limited by operator skill and patient condition). ([[tg18-2018-cholangitis-flowchart]])

**Distinctive sonographic/CT signs of acute cholecystitis** ([[tg18-2018-cholangitis-flowchart]]):

- Enlargement of the gallbladder
- Gallbladder **wall thickening**
- Gallbladder **calculi**
- **Fluid retention around** the gallbladder (pericholecystic fluid)
- **Abscess around** the gallbladder
- **Sludge / debris** within the gallbladder
- **Sonographic Murphy's sign** — pain when the probe presses on the gallbladder

**Imaging also answers the two drainage questions** ([[aga-2023-eus-gallbladder-drainage]]): is there **free gallbladder perforation** (contraindicates transmural endoscopic drainage), and what is the gallbladder-to-GI-wall distance (**<10 mm required** for safe LAMS deployment)?

- ⚠ Sensitivity/specificity for these imaging signs, and the lab thresholds that enter the TG18 criteria, are **not** given in any ingested source.

## Therapeutics

### Cholecystectomy — definitive treatment

- **Cholecystectomy is the definitive treatment** of acute cholecystitis. Nonoperative drainage is reserved for patients deemed inoperable. ([[aga-2023-eus-gallbladder-drainage]])

### Who is a nonsurgical candidate?

Per [[aga-2023-eus-gallbladder-drainage]]:

- **High surgical risk** = significant medical comorbidities that would make laparoscopic cholecystectomy **excessively risky** (the conventional trigger for percutaneous drainage). No numeric score/criteria are given in the CPU — judgment + surgical consultation.
- To be an **endoscopic** drainage candidate the patient must additionally: tolerate anesthesia and a therapeutic endoscopic procedure; for the transmural ([[endoscopic-ultrasound|EUS]]) route, have **no free gallbladder perforation**.
- **Future surgical candidacy must be clarified with the surgeon before EUS-GBD** — transmural drainage creates a cholecystoenteric fistula that requires repair at later cholecystectomy (postoperative leak risk); transpapillary drainage preserves normal anatomy.

### Gallbladder drainage in high-surgical-risk patients

Three routes ([[aga-2023-eus-gallbladder-drainage]]):

| | Percutaneous (PT-GBD) | Transpapillary (ET-GBD) | EUS-guided ([[eus-guided-gallbladder-drainage\|EUS-GBD]]) |
|---|---|---|---|
| **How** | US/CT-guided percutaneous drain into gallbladder | [[ercp\|ERCP]]: cystic duct cannulation + transpapillary plastic stent | Lumen-apposing metal stent (LAMS) from duodenum/stomach into gallbladder |
| **Best for** | Perforation suspected; can't tolerate [[endoscopy-sedation\|sedation]]; conventional default | Needs ERCP anyway (choledocholithiasis, cholangitis); future surgical candidate; large-volume [[ascites]]; coagulopathy | In-dwelling uncovered metal biliary stent or tumor occluding cystic duct; large stone burden (cholecystoscopy); poor candidate for repeat interventions |
| **Advantages** | Widely available | Safer with ascites; treats CBD stones/cholangitis same session; preserves anatomy | Least likely to need reintervention; lowest recurrent cholecystitis |
| **Disadvantages** | 50%–75% morbidity; drain exchanges/reinterventions; recurrent cholecystitis up to 15.4%; dyscosmesis | Lower technical (84% vs 98%) and lowest clinical success (91% vs 97% vs EUS-GBD); pancreatitis risk; stent exchanges | Fistula closure needed if later cholecystectomy; food occlusion; **contraindicated in gallbladder perforation** |

- **Comparative outcomes:** EUS-GBD vs PT-GBD (5 studies, 488 pts, incl. DRAC-1 RCT) — comparable technical/clinical success, but PT-GBD has longer stays, slower resolution, more reintervention, more pain, and more recurrent cholecystitis (20% vs 2.6%, P = .029). Network meta-analysis: recurrent cholecystitis lowest with EUS-GBD (RR 1.089 vs PT 2.02 vs ET 2.891); mortality lowest with ET-GBD (RR 1.29 vs EUS 2.62 vs PT 2.09). ([[aga-2023-eus-gallbladder-drainage]])

**[[asge-2024-therapeutic-eus-biliary|ASGE 2024]] — the newer guideline, and it moves the default.** In patients with acute cholecystitis who are **not cholecystectomy candidates**, ASGE suggests **EUS-GBD over PT-GBD** (Rec 5a) **and EUS-GBD over ET-GBD** (Rec 5b) — both **conditional, moderate quality of evidence**. Its per-route carve-outs:

| Route | ASGE 2024 says prefer it when |
|---|---|
| **[[eus-guided-gallbladder-drainage\|EUS-GBD]]** (default) | Major papilla **cannot be accessed**; **indwelling metal stent occluding the cystic duct**; **large gallbladder stone burden** |
| **PT-GBD** | **Gallbladder perforation**; **emphysematous cholecystitis**; **clinical instability**; **unable to tolerate more than moderate sedation**; **EUS-GBD unavailable** (no expertise/training) |
| **ET-GBD** | **Ascites**; **malignant gallbladder infiltration**; **severe coagulopathy**; **refused rescue surgery**; **liver transplant candidates**; not a surgical candidate now but **may be later** |

- ⚠ **Avoid EUS-GBD in a potential [[liver-transplantation\|liver transplant]] candidate** — stated explicitly by ASGE 2024, and net-new versus [[aga-2023-eus-gallbladder-drainage|AGA 2023]]. The cholecystoenteric fistula it creates is the reason.
- ⚠ **Contradiction — the "may be a surgical candidate later" patient.** [[aga-2023-eus-gallbladder-drainage|AGA 2023]]'s algorithm routes this patient to **ET-GBD** first. ASGE 2024 is **internally inconsistent**: its Rec 5a general concepts list this group under **PT-GBD**, while its own Table 2 lists them under **ET-GBD**. Both guidelines agree the patient should **not** get EUS-GBD; which non-transmural route is used cannot be adjudicated from the ingested sources. **Confirm future surgical candidacy with the surgeon either way.**
- ⚠ **Contradiction — the default route.** AGA 2023's figure sends several groups (uncontrolled ascites, ERCP needed anyway, GB >10 mm from the GI wall) to **ET-GBD first**; ASGE 2024 makes **EUS-GBD** the general first choice with ascites/coagulopathy/malignant infiltration as the ET-GBD carve-outs. **ASGE 2024 governs** (newer, same tier, and a GRADE guideline vs a CPU) — but the AGA carve-outs it does not contradict (needs ERCP for coexisting [[choledocholithiasis|CBD stones]] or [[acute-cholangitis|cholangitis]]; GB >10 mm from the enteral wall, which makes LAMS deployment unsafe) still stand as reasons to choose ET-GBD.

### Choosing the drainage route

![[cholecystitis-2023-highrisk-drainage-algorithm-05.png|700x420]]
*Figure 3 — Approach to cholecystitis in high-surgical-risk patients. ([[aga-2023-eus-gallbladder-drainage]])*

- **Perforation suspected on imaging OR unable to tolerate sedation → PT-GBD.**
- **No perforation AND tolerates sedation:**
  - **ET-GBD initially** if: uncontrolled ascites; potential future surgical candidate; undergoing ERCP for other reasons (choledocholithiasis, cholangitis); gallbladder **>10 mm** from the GI tract wall. If fails → EUS-GBD (after surgeon discussion).
  - **EUS-GBD initially** (after surgeon discussion) if: duodenal obstruction / [[gastric-outlet-obstruction|gastric outlet obstruction]]; in-dwelling metal stent occluding the cystic duct; large gallbladder stone burden. If fails → ET-GBD.
  - If both endoscopic routes fail → PT-GBD.
- EUS-GBD is also an option to **internalize an existing percutaneous cholecystostomy** in permanent non-surgical candidates, and a rescue for malignant biliary obstruction after failed ERCP + failed EUS-BD. ([[aga-2023-eus-gallbladder-drainage]])

### Follow-up after EUS-GBD

- Either per-oral cholecystoscopy at **4–6 weeks** (stone clearance + exchange LAMS for double-pigtail plastic stents) or leave the LAMS permanently in very-high-risk patients — details on [[eus-guided-gallbladder-drainage]].

### Cholecystectomy in Pregnancy

*Full pregnancy-GI context: [[liver-disease-in-pregnancy]].*

- **Cholecystectomy is safe during pregnancy; laparoscopic approach is the standard of care regardless of trimester, ideally the 2nd trimester.** ([[aga-2024-pregnancy-gi-liver]] BPA 9)
- Gallstone disease is the 2nd leading cause (after appendicitis) of nonobstetric acute abdominal pain in pregnancy. **Laparoscopic cholecystectomy is superior to conservative management** for symptomatic cholelithiasis (conservative → recurrent biliary symptoms in ~60%). SAGES: **laparoscopy safe in any trimester**; after the 1st trimester use left-lateral/partial-left-lateral decubitus.
- Initial management: IV hydration, analgesia, antiemetics, antibiotics. **Same-admission cholecystectomy** in [[acute-pancreatitis|acute biliary pancreatitis]] reduces early readmission by **85%**.
- If hemodynamically unstable or high surgical risk: **percutaneous cholecystostomy or gallbladder aspiration as a bridge** (1st→2nd trimester, or 3rd trimester→postpartum) until cholecystectomy can be performed. Late-3rd-trimester biliary pain may be managed by postponing surgery to postpartum if no maternal/fetal risk. ([[aga-2024-pregnancy-gi-liver]])

---

## See Also

[[eus-guided-gallbladder-drainage]], [[endoscopic-ultrasound]], [[ercp]], [[acute-cholangitis]], [[choledocholithiasis]], [[gallbladder-cancer]], [[biliary-stricture]], [[jaundice]], [[ascites]], [[acute-pancreatitis]], [[liver-disease-in-pregnancy]], [[liver-transplantation]], [[gastric-outlet-obstruction]], [[endoscopy-sedation]]

---

## Sources

1. [[aga-2023-eus-gallbladder-drainage|AGA 2023 Clinical Practice Update on Role of EUS-Guided Gallbladder Drainage in Acute Cholecystitis]]
2. [[asge-2024-therapeutic-eus-biliary|ASGE Guideline: Role of Therapeutic EUS in Biliary Tract Disorders (2024)]]
3. [[aga-2024-pregnancy-gi-liver|AGA Clinical Practice Update on Pregnancy-Related Gastrointestinal and Liver Disease: Expert Review]]
4. [[tg18-2018-cholangitis-flowchart|Tokyo Guidelines 2018: Initial Management of Acute Biliary Infection and Flowchart for Acute Cholangitis]]
