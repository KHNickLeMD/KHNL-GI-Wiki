p = 'wiki/sources/usmstf-2025-bowel-prep.md'
L = open(p, encoding='utf-8').read().split('\n')

new = """## Simethicone (Rec 13-14)

- Adjunctive oral **simethicone >=320 mg** reduces intraluminal bubbles and improves mucosal visibility (Weak/Moderate).
- **Timing relative to purgative ingestion is not established**; no meaningful adverse effects identified.
- **Non-simethicone adjuncts are not recommended routinely** (Weak/Low) outside the defined high-risk regimen (Rec 25).
- If simethicone is used *through the scope*, the guideline suggests **the lowest possible dilution (e.g. 0.5 mL simethicone in 99.5 mL water)**.

## GLP-1 Receptor Agonists

The guideline has **no numbered recommendation** on GLP-1 receptor agonists; it addresses them only in the discussion of when to stop drinking purgative. What it actually states:

- GLP-1 receptor agonists **delay gastric emptying** and may therefore affect **when to cease drinking the purgative**.
- **ASA advises stopping these agents 1-7 days before an elective procedure** (duration **depends on the agent**) to limit aspiration risk during sedation.
- **If the agent has not been stopped, proceed — but assume the stomach is full.**
- **AGA's position: continue-or-withhold is a case-by-case decision**, not routine cessation (see [[aga-2024-glp1-endoscopy]]).
- The guideline expects this area **to change as better evidence emerges**.

> **Not stated by this guideline** (do not attribute to it): that GLP-1 users carry the gastroparesis odds ratio for inadequate prep, or that they should routinely receive the high-risk prep protocol. The OR table below lists **gastroparesis**, not GLP-1 use; no OR for GLP-1 agonists is reported.

Separately, the guideline reproduces ASA's definition of patients who are **not** "healthy" for aspiration-risk purposes — uncontrolled reflux, hiatal hernia, Zenker diverticulum, achalasia, stricture, previous gastric surgery (e.g. gastric bypass), gastroparesis, diabetes mellitus, opioid use, GI obstruction or acute intra-abdominal processes, pregnancy, obesity, and emergency procedures — and advises **clinical judgement** for anyone meeting these criteria."""

out = L[:109] + new.split('\n') + L[147:]
open(p, 'w', encoding='utf-8').write('\n'.join(out))
print("done")
