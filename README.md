# KHNL GI Encyclopedia

An AI-assisted clinical reference wiki for gastroenterology and hepatology, built in Obsidian and published via GitHub Pages.

---

## How It Was Made

This wiki was built using **Obsidian** as the backbone — a local markdown-based note-taking app that stores all content as plain text files. **Claude AI** acts as an LLM wiki agent that reads primary sources (guidelines, RCTs, review articles) and synthesizes them into structured knowledge pages.

For each ingested source, Claude extracts key findings, identifies which disease entities or concepts are affected, and creates or updates the relevant wiki pages — preserving full verbatim GRADE recommendations from guidelines. Cross-references between pages are maintained using Obsidian wiki-links (`[[page-slug]]`), creating a connected knowledge graph. A lint process periodically checks for contradictions, orphan pages, and missing links.

The result is a compounding, evidence-linked reference that grows with each new source ingested — developed by **Khanh Hoang Nicholas Le** (GI fellow, Keck USC / LA General Medical Center).

---

## Page Types

### 🔵 Disease Scripts
Per-disease clinical summaries in ADDT format: **Assessment** (establishing diagnosis, severity, classification), **Differential Diagnosis**, **Diagnostics** (labs, imaging, endoscopy), and **Therapeutics**. One page per disease entity.

### 🟣 Diagnostic Schemas
Pages for undifferentiated clinical syndromes that are not a single diagnosis — e.g. "upper GI bleeding" or "abnormal liver chemistries." Cover differential diagnosis and stepwise diagnostic algorithms.

### 🟢 General Procedures
Procedures routinely performed by general GI physicians, such as upper endoscopy and colonoscopy. Cover indications, technique, quality metrics, and complications.

### 🔬 Advanced Procedures
Specialized GI procedures requiring additional training — ERCP, EUS, POEM, high-resolution manometry, anorectal manometry, and others. Cover technique, indications, and interpretation.

### 💊 Medications
Drug classes and specific agents used in GI and hepatology. Cover mechanism of action, dosing, monitoring parameters, adverse effects, and key clinical data.

### 💡 Concepts
Pathophysiology, mechanisms, classification systems, and clinical frameworks that underpin multiple disease pages — e.g. Chicago Classification v4.0, colorectal cancer screening, ambulatory reflux monitoring.

### 📚 Sources
One summary page per ingested guideline, RCT, review, or consensus statement. Includes full verbatim GRADE recommendations for guidelines, key findings, and links to all entity pages updated.

### 🧪 Syntheses
Wiki-generated comparison and analysis pages that synthesize content across multiple disease or treatment pages — e.g. comparing biologics in UC, or IBD vs. IBS workup.

### ⚠️ Stubs
Pages that have been created (because a wiki-link references them, or a source mentions the topic) but whose content has not yet been fully written. Stub pages are flagged visually in the website with a yellow warning banner. They are placeholders that will be expanded when a relevant source is ingested or when the topic is manually developed. A stub contains at minimum a title and frontmatter so the wiki-link graph is connected.

---

## Scope

This encyclopedia covers clinical gastroenterology and hepatology, with emphasis on diagnosis and management of GI diseases, endoscopic procedures and interpretation, GI pharmacology (mechanisms, dosing, monitoring, adverse effects), pathophysiology and disease mechanisms, and evidence quality and guideline concordance (ACG, AGA, ECCO, BSG).

---

## Structure

| Folder | Contents |
|---|---|
| `1-disease-scripts` | Per-disease clinical summaries (foregut, HPB, colorectal, IBD) |
| `2-diagnostic-schemas` | Symptom- and sign-based diagnostic frameworks |
| `3-general-gi-procedures` | Endoscopy, colonoscopy, and procedural notes |
| `4-advanced-gi-procedures` | ERCP, EUS, POEM, manometry, and specialized procedures |
| `5-meds` | Drug class and agent pages |
| `6-anatomy` | GI tract anatomy and histology |
| `7-concepts` | Cross-cutting concepts and clinical frameworks |
| `sources` | One page per ingested guideline, RCT, or review |
| `syntheses` | Wiki-generated cross-cutting analyses |


---

## Graph View

The website includes a **Graph View** — an interactive force-directed network visualization of the entire wiki, accessible from the left sidebar.

Each node represents one wiki page. Edges represent `[[wiki-links]]` — when a page references another using the `[[slug]]` syntax, a connection is drawn between them. This mirrors the Obsidian Graph View experience.

**Features:**
- Zoom in/out via scroll wheel, pinch-to-zoom, or the +/− buttons
- Click and drag to pan the canvas
- Drag individual nodes to rearrange the layout
- Click any node to navigate to that page
- Hover over a node to see its title and link count
- Search bar to highlight specific nodes by name
- Toggle to show or hide orphan nodes (pages with no links)
- Color-coded nodes by section with a legend

The graph runs a continuous physics simulation — repulsion forces push nodes apart, link attraction pulls connected nodes together, and a center gravity keeps the layout visible. No external libraries are required.

---

*This wiki is generated with AI assistance using Claude and Obsidian. It represents synthesized clinical knowledge and is intended as a study and reference tool — not a substitute for clinical judgment or up-to-date guidelines.*
