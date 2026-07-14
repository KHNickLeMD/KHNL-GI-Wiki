# KHNL GI Wiki

An AI-assisted clinical reference wiki with resources curated by me, organized in Obsidian, and built by Claude Code.

This encyclopedia covers clinical gastroenterology and hepatology, with an emphasis on diagnosis and management of diseases, diagnostic schemas, endoscopic procedures, new medications - all based on high quality evidence and guidelines (ACG, AGA, ASGE, AASLD, etc).

---

## How It Was Made

This wiki was built using **Obsidian** as the backbone — a local markdown-based note-taking app that stores all content as markdown files. **Claude AI** acts as an LLM wiki agent that reads primary sources (guidelines, RCTs, review articles) and synthesizes them into structured knowledge pages.

For each ingested source, Claude extracts key findings, identifies which disease entities or concepts are affected, and creates or updates the relevant wiki pages — preserving full verbatim GRADE recommendations from guidelines. Cross-references between pages are maintained using Obsidian wiki-links (`[[page-slug]]`), creating a connected knowledge graph. A lint process periodically checks for contradictions, orphan pages, and missing links.

The result is a compounding, evidence-linked reference that grows with each new source ingested — developed by **Khanh Hoang Nicholas Le** (GI fellow, Keck USC / LA General Medical Center).

---

## Page Types

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0;">

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">📋 Disease Scripts</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Per-disease clinical summaries in ADDT format: Assessment (establishing diagnosis, severity, classification), Differential Diagnosis, Diagnostics (labs, imaging, endoscopy), and Therapeutics. One page per disease entity.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">🔍 Diagnostic Schemas</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Pages for undifferentiated clinical syndromes that are not a single diagnosis — e.g. "upper GI bleeding" or "abnormal liver chemistries." Cover differential diagnosis and stepwise diagnostic algorithms.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">🔭 General Procedures</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Procedures routinely performed by general GI physicians, such as upper endoscopy and colonoscopy. Cover indications, technique, quality metrics, and complications.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">🔬 Advanced Procedures</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Specialized GI procedures requiring additional training — ERCP, EUS, POEM, high-resolution manometry, anorectal manometry, and others. Cover technique, indications, and interpretation.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">💊 Medications</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Drug classes and specific agents used in GI and hepatology. Cover mechanism of action, dosing, monitoring parameters, adverse effects, and key clinical data.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">💡 Concepts</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Pathophysiology, mechanisms, classification systems, and clinical frameworks that underpin multiple disease pages — e.g. Chicago Classification v4.0, colorectal cancer screening, ambulatory reflux monitoring.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">📚 Sources</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">One summary page per ingested guideline, RCT, review, or consensus statement. Includes full verbatim GRADE recommendations for guidelines, key findings, and links to all entity pages updated.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
<div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;margin-bottom:6px;">🧪 Syntheses</div>
<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Wiki-generated comparison and analysis pages that synthesize content across multiple disease or treatment pages — e.g. comparing biologics in UC, or IBD vs. IBS workup.</div>
</div>

</div>

### ⚠️ Stubs
Pages that have been created (because a wiki-link references them, or a source mentions the topic) but whose content has not yet been fully written. Stub pages are flagged visually in the website with a yellow warning banner. They are placeholders that will be expanded when a relevant source is ingested or when the topic is manually developed. A stub contains at minimum a title and frontmatter so the wiki-link graph is connected.

---
## About Me - Khanh Hoang Nicholas Le

Welcome to my website - call me Nick! I am a gastroenterology fellow at Keck USC/LA General Medical Center. Both in and outside of medicine, I love evolving technology, quality improvement, productivity, and medical education.
With my passions, I wanted to create a reliable, high quality resource for healthcare professionals to learn, reference, and develop their knowledge in the beautiful field of GI and Hepatology. 

---
## Development Timeline
TBD

---

# How to Use

## Navigation Tips

- Click any **section name** in the sidebar to open its table of contents
- Click the **›** chevron to expand a section dropdown and browse individual pages
- Click **[[wiki-links]]** within any page to navigate to related pages
- Use the **search bar** to find pages. It does two things at once: instant keyword matching, plus a **semantic search** that understands meaning — so searching *"liver scarring"* surfaces cirrhosis and fibrosis-related notes even when those exact words aren't on the page
	- Results tagged with a green **`related`** badge were matched by meaning rather than exact wording. The first search after loading the site takes a moment while the small AI model downloads (then it's cached and instant)
- Click any **#tag** to search for related pages
- Every article has three quick-action buttons at the top right of its header: the **☆ star** bookmarks the page and the **✓ check** marks it as reviewed (both need a free account — see below), and **Share** copies the page link or sends it via your phone's share sheet, X, LinkedIn, or email
- Both side panels are collapsible for a distraction-free read: the **panel button at the top-left** tucks away the section sidebar, and the matching **button at the top-right** hides the *On this page* outline — click either again to bring the panel back

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

## Accounts, Notes & Bookmarks

Create a free account (**Sign in**, top-right) to add a personal study layer on top of the wiki. You'll get a verification email — click the link, then sign in. Your account is represented by a customizable **avatar bubble** (top-right): click it for the account menu, or **Customize bubble…** to pick a color or photo.

- **Private notes** — select any text in an article and click **✎ Add note** to pin a private note to that spot (a small ✎ marker appears there; click it to read or edit). Notes are **never lost**: if the wiki text you pinned changes, the note moves to a *"Notes on this page"* tray at the end of the article — and re-anchors automatically if the text returns. **My notes** in the account menu lists everything, with **.md / .json export**.
- **Bookmarks** — click the ☆ star in a page's header to save it; organize with labels and folders under **Bookmarks** in the account menu.
- **Reviewed tracking** — click the ✓ next to the star when you've finished studying a page. Reviewed pages show a green ✓ in the section lists, and **Reviewed pages** in the menu shows what you covered and when.
- **Updated since your review** — if a page changes *after* you reviewed it, you'll see a 🔔 *"Updated since your review"* pill in the page header (click it to mark the page reviewed again), the ✓ marks turn amber in section lists, and the **Reviewed pages** list flags it — so you always know when there's new material on a page you thought you'd finished.
- **Friends** — find colleagues by username under **Friends**, send a request, and once accepted you can see each other's reviewed pages, bookmarks, and any notes explicitly shared (per privacy settings).
- **Privacy** — everything is private by default except to accepted friends, and each note is only shared if you tick *"Visible to friends"* on it. The **Privacy** menu controls profile/activity visibility and whether you appear in user search.
- **Your data is yours** — **Account & data** in the menu exports everything you've created as JSON, or deletes your account and all of its data permanently.

## 🧫 The Colon Colony

The wiki's community hub — find it in the sidebar just above Feedback, or under the account menu. Three tabs:

- **Achievements** — earned automatically as you use the wiki: reviewing pages (5 → 10 → 50 → 100), making 5 friends, opening 5 pages from Graph view, following in-text links through 5 pages in a row, and meeting a colleague in person. When you unlock one, a small notification pops up (bottom-left) — click it to open your achievements, or swipe it away.
- **Leaderboards** — most pages reviewed, most friends, and most colleagues met in person. Logged-in users only; opt out any time under **Privacy → "Appear on Colony leaderboards"**.
- **Meet up** — met a wiki friend in real life? One of you taps **Show my meet-up code** and the other scans the QR with their phone camera. The code is single-use, lasts 10 minutes, and only works between accepted friends — both of you earn the **Colony Contact** achievement.

## Feedback & Bug Reports

The **?** bubble (bottom-right) works with or without an account: report bugs, ask clinical questions, or suggest corrections. Please don't include patient-identifiable information.

---

*This wiki is generated with AI assistance using Claude and Obsidian. It represents synthesized clinical knowledge and is intended as a study and reference tool — not a substitute for clinical judgment or up-to-date guidelines.*
