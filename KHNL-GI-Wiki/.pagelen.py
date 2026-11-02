"""Rank wiki pages by body word count, for the LINT 'Slim long pages' step.

Body = everything after the YAML frontmatter, excluding the `## Sources` block
(CLAUDE.md -> Style Guide -> Short pages: "Ceiling ~2,500 words of body
(excl. ## Sources)").

Added 2026-11-02: the slim step had been eyeballing which page was longest and
got it wrong two passes running (an entry claimed anti-tnf-agents at ~2.7k was
"the wiki's longest page" while twelve pages were over 4k). Rank with this
before slimming; do not trust a previous log entry's claim.

    python3 -I .pagelen.py             # entity pages over the ceiling, longest first
    python3 -I .pagelen.py --all       # every entity page
    python3 -I .pagelen.py --sources   # include wiki/sources/ too (audit only)
"""
import os
import re
import sys

CEILING = 2500
SKIP = {'index.md', 'log.md', 'overview.md', 'needed-sources.md'}

# The slim step ranks *entity* pages only and skips wiki/sources/ (CLAUDE.md ->
# LINT -> "Slim long pages"). Source pages are long by design: the
# recommendation-capture rule requires every named recommendation, so a big
# guideline's source page legitimately runs to five figures. --sources includes
# them anyway, for auditing.
include_sources = '--sources' in sys.argv

rows = []
for root, _dirs, files in os.walk('wiki'):
    if not include_sources and os.path.basename(root) == 'sources':
        continue
    for fn in sorted(files):
        if not fn.endswith('.md') or fn in SKIP:
            continue
        path = os.path.join(root, fn)
        text = open(path, encoding='utf-8', errors='replace').read()
        # strip YAML frontmatter
        body = re.sub(r'\A---\n.*?\n---\n', '', text, count=1, flags=re.S)
        body = re.split(r'^## Sources\s*$', body, maxsplit=1, flags=re.M)[0]
        rows.append((len(body.split()), path))

rows.sort(reverse=True)
show_all = '--all' in sys.argv
shown = rows if show_all else [r for r in rows if r[0] > CEILING]

print('%-6s %s' % ('words', 'page'))
for n, p in shown:
    flag = '' if n <= CEILING else '  <-- over ceiling'
    print('%-6d %s%s' % (n, p, flag))

over = sum(1 for n, _ in rows if n > CEILING)
print()
print('pages: %d | over ceiling (%d words): %d | longest: %d'
      % (len(rows), CEILING, over, rows[0][0] if rows else 0))
if not show_all:
    print('(--all to list every page)')
