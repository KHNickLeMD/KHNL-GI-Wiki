/**
 * build-embeddings.mjs
 *
 * Walks KHNL-GI-Wiki/wiki/, chunks every .md file, embeds with
 * all-MiniLM-L6-v2 (quantized), and writes:
 *
 *   search/chunks.json      — chunk metadata (slug, title, tags, section, chunkIdx)
 *   search/embeddings.b64   — base64-encoded flat Float32Array [numChunks × 384]
 *
 * Run once manually, then the GitHub Action keeps it in sync on every push.
 *
 * Usage:
 *   npm install          (first time only — installs @xenova/transformers)
 *   npm run build-embeddings
 */

import { pipeline } from '@xenova/transformers';
import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Script lives at <repo>/website_files/scripts/ — wiki content is at the repo
// root, generated embeddings stay beside this script under "website_files".
const PROJECT_DIR = path.join(__dirname, '..');         // <repo>/website_files
const REPO_ROOT   = path.join(PROJECT_DIR, '..');        // <repo> root
const WIKI_DIR    = path.join(REPO_ROOT, 'KHNL-GI-Wiki', 'wiki');
const OUT_DIR     = path.join(PROJECT_DIR, 'search');
const MODEL      = 'Xenova/all-MiniLM-L6-v2';
const CHUNK_WORDS   = 250;  // target words per chunk
const OVERLAP_WORDS = 40;   // overlap between consecutive chunks

// ── Frontmatter parser ──────────────────────────────────────────────────────
function parseFrontmatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!m) return { fm: {}, body: text };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const lm = line.match(/^(\w+):\s*(.*)/);
    if (!lm) continue;
    const v = lm[2].trim();
    fm[lm[1]] = v.startsWith('[') && v.endsWith(']')
      ? v.slice(1, -1).split(',').map(x => x.trim().replace(/['"]/g, '')).filter(Boolean)
      : v.replace(/^['"]|['"]$/g, '');
  }
  return { fm, body: text.slice(m[0].length).trim() };
}

// ── Strip markdown syntax so embeddings reflect meaning, not syntax ─────────
function stripMarkdown(text) {
  return text
    .replace(/```[\s\S]*?```/g, '')                         // fenced code blocks
    .replace(/`[^`]+`/g, '')                                // inline code
    .replace(/!\[\[.*?\]\]/g, '')                           // Obsidian image embeds
    .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1')      // Obsidian wiki links → text
    .replace(/^#{1,6}\s+/gm, '')                            // headings
    .replace(/^\s*[-*+]\s+/gm, '')                          // unordered list bullets
    .replace(/^\s*\d+\.\s+/gm, '')                          // ordered list numbers
    .replace(/[*_]{1,2}([^*_\n]+)[*_]{1,2}/g, '$1')        // bold / italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')                // markdown links
    .replace(/\|[^\n]+\|/g, ' ')                            // table rows
    .replace(/^[-|:]+$/gm, '')                              // table separators
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── Chunk text into overlapping windows ─────────────────────────────────────
function chunkText(text) {
  const words = text.split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const chunks = [];
  let start = 0;
  while (start < words.length) {
    const end = Math.min(start + CHUNK_WORDS, words.length);
    chunks.push(words.slice(start, end).join(' '));
    if (end === words.length) break;
    start += CHUNK_WORDS - OVERLAP_WORDS;
  }
  return chunks;
}

// ── Walk a directory recursively, returning .md file paths ──────────────────
function walkMd(dir, relPrefix = '') {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relPath = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      results.push(...walkMd(path.join(dir, entry.name), relPath));
    } else if (entry.name.endsWith('.md')) {
      results.push({ full: path.join(dir, entry.name), rel: relPath });
    }
  }
  return results;
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(WIKI_DIR)) {
    console.error(`Wiki directory not found: ${WIKI_DIR}`);
    process.exit(1);
  }

  console.log('Loading embedding model (downloads on first run, cached after)…');
  const embedder = await pipeline('feature-extraction', MODEL, { quantized: true });

  const mdFiles = walkMd(WIKI_DIR);
  console.log(`Found ${mdFiles.length} markdown files`);

  const chunkMeta = [];
  const texts     = [];
  const bundle    = []; // all raw .md files, shipped as one JSON so the site loads in 1 fetch

  for (const { full, rel } of mdFiles) {
    const raw = fs.readFileSync(full, 'utf8');
    bundle.push({ path: rel, text: raw });
    const { fm, body } = parseFrontmatter(raw);
    const slug    = path.basename(full, '.md');
    const parts   = rel.split('/');
    const section = parts.length > 1 ? parts[0] : 'root';
    const title   = (typeof fm.title === 'string' ? fm.title : slug);
    const tags    = Array.isArray(fm.tags) ? fm.tags : [];
    const category = typeof fm.category === 'string' ? fm.category : '';

    const stripped  = stripMarkdown(body);
    const bodyChunks = chunkText(stripped);
    if (!bodyChunks.length) continue;

    // Prepend title + tags to every chunk so the model sees topic context
    const prefix = `${title}. ${tags.join(' ')}. `;

    for (let i = 0; i < bodyChunks.length; i++) {
      chunkMeta.push({ slug, title, category, tags, section, chunkIdx: i });
      texts.push((prefix + bodyChunks[i]).slice(0, 512)); // model max input
    }
  }

  console.log(`Embedding ${texts.length} chunks (batches of 32)…`);

  const BATCH = 32;
  const allVecs = [];
  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH);
    process.stdout.write(`  ${i + batch.length}/${texts.length}\r`);
    const out = await embedder(batch, { pooling: 'mean', normalize: true });
    for (let j = 0; j < batch.length; j++) {
      allVecs.push(new Float32Array(out[j].data));
    }
  }

  const DIM = allVecs[0].length;
  console.log(`\nDone — ${allVecs.length} chunks, dim=${DIM}`);

  // Pack as flat Float32Array → base64 (compact, fast to decode in browser)
  const flat = new Float32Array(allVecs.length * DIM);
  for (let i = 0; i < allVecs.length; i++) flat.set(allVecs[i], i * DIM);
  const b64 = Buffer.from(flat.buffer).toString('base64');

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, 'chunks.json'),
    JSON.stringify({ dim: DIM, count: allVecs.length, chunks: chunkMeta })
  );
  fs.writeFileSync(path.join(OUT_DIR, 'embeddings.b64'), b64);
  fs.writeFileSync(
    path.join(OUT_DIR, 'wiki-bundle.json'),
    JSON.stringify({ files: bundle })
  );

  const kb = n => (n / 1024).toFixed(0) + ' KB';
  console.log(`Written to search/`);
  console.log(`  chunks.json:      ${kb(fs.statSync(path.join(OUT_DIR, 'chunks.json')).size)}`);
  console.log(`  embeddings.b64:   ${kb(fs.statSync(path.join(OUT_DIR, 'embeddings.b64')).size)}`);
  console.log(`  wiki-bundle.json: ${kb(fs.statSync(path.join(OUT_DIR, 'wiki-bundle.json')).size)}`);
}

main().catch(e => { console.error(e); process.exit(1); });
