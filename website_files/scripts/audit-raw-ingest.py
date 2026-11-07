#!/usr/bin/env python3
"""Audit raw/ files against wiki/sources/ pages by fuzzy-matching filename
against each source page's title: and **Article:** lines (not slugs)."""
import os, re, sys
from difflib import SequenceMatcher

ROOT = "/repo/KHNL-GI-Wiki"
RAW = os.path.join(ROOT, "raw")
SRC = os.path.join(ROOT, "wiki", "sources")

STOP = set("""the a an of and or in on for with to from by at as is are be been
guideline guidelines clinical practice update consensus statement society
american college association gastroenterology gastroenterological hepatology
endoscopy journal pdf acg aga asge aasld sages management diagnosis treatment
2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026""".split())


def toks(s):
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return set(w for w in s.split() if len(w) > 2 and w not in STOP)


def raw_files():
    out = []
    for dirpath, _, files in os.walk(RAW):
        if "assets" in dirpath.split(os.sep):
            continue
        for f in files:
            if f.startswith("."):
                continue
            if os.path.splitext(f)[1].lower() in (".pdf", ".txt", ".md", ".docx", ".doc", ".html"):
                out.append(os.path.relpath(os.path.join(dirpath, f), ROOT))
    return sorted(out)


def source_pages():
    out = []
    for f in sorted(os.listdir(SRC)):
        if not f.endswith(".md"):
            continue
        p = os.path.join(SRC, f)
        txt = open(p, encoding="utf-8", errors="replace").read()
        head = txt[:3000]
        title = ""
        m = re.search(r"^title:\s*\"?(.*?)\"?\s*$", head, re.M)
        if m:
            title = m.group(1)
        m2 = re.search(r"^\s*-\s*\*\*Article:\*\*\s*(.*)$", head, re.M)
        art = m2.group(1) if m2 else ""
        out.append((f[:-3], toks(title + " " + art), title))
    return out


def main():
    srcs = source_pages()
    rf = raw_files()
    rows = []
    for r in rf:
        base = os.path.splitext(os.path.basename(r))[0]
        t = toks(base)
        best, bestslug, besttitle = 0.0, "", ""
        for slug, st, title in srcs:
            if not t or not st:
                continue
            inter = len(t & st)
            score = inter / max(1, min(len(t), len(st)))
            score = max(score, SequenceMatcher(None, base.lower(), title.lower()).ratio())
            if score > best:
                best, bestslug, besttitle = score, slug, title
        rows.append((best, r, bestslug, besttitle))
    rows.sort()
    thr = float(sys.argv[1]) if len(sys.argv) > 1 else 0.55
    print(f"raw files: {len(rf)}  source pages: {len(srcs)}")
    print(f"--- below threshold {thr} (candidate uningested) ---")
    n = 0
    for best, r, slug, title in rows:
        if best < thr:
            n += 1
            print(f"{best:.2f}  {r}\n        best: {slug} | {title[:70]}")
    print(f"total candidates: {n}")


main()
