// Regression check for inlineRender's escaping. Run: node scripts/test-inline-render.mjs
// Guards the double-escape bug where [[crohns-disease|Crohn's disease]] rendered as
// "Crohn&#39;s disease" (inlineRender escapes the line, then escaped the captures again).
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const html = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../../index.html'), 'utf8');

// Pull the four functions under test straight out of the page so the test can't drift from it.
const src = ['inlineRender', 'escHtml', 'unescHtml', 'jsStr', 'safeUrl']
  .map(fn => {
    const start = html.indexOf(`\nfunction ${fn}(`);
    assert.notStrictEqual(start, -1, `${fn} not found in index.html`);
    const end = html.indexOf('\n}\n', start);
    return html.slice(start, end + 3);
  })
  .join('\n');

const ctx = vm.createContext({ config: { path: 'KHNL-GI-Wiki/wiki' }, wikiData: { 'crohns-disease': {} }, rawUrl: p => p });
vm.runInContext(src, ctx);
const render = t => vm.runInContext('inlineRender', ctx)(t);

// The bug: the label must be escaped exactly once, so it renders as an apostrophe.
assert.match(render("perianal [[crohns-disease|Crohn's disease]]"), />Crohn(&#39;|')s disease</);
assert.doesNotMatch(render("[[crohns-disease|Crohn's disease]]"), /&amp;#39;/);
assert.doesNotMatch(render('[[barretts-esophagus|Barrett’s & "quotes"]]'), /&amp;(amp|quot|#39);/);

// Slugs/anchors are built from decoded text, not from "crohn&#39;s".
// \&#39; decodes to \' — a backslash-escaped quote inside the JS string, not a break-out.
assert.match(render("[[Crohn's Disease]]"), /navigateTo\('crohn\\&#39;s-disease'\)/);
assert.match(render("[[#Barrett's Esophagus]]"), /scrollToAnchor\('barretts-esophagus'\)/);

// Plain text is still escaped exactly once.
assert.strictEqual(render(`5 < 6 & "x" it's`), '5 &lt; 6 &amp; &quot;x&quot; it&#39;s');

// No HTML break-out from a hostile label or target.
assert.doesNotMatch(render('[[a|<img src=x onerror=alert(1)>]]'), /<img/);
// A hostile target stays inside the JS string literal: after the browser decodes the
// attribute, every ' in the argument is backslash-escaped, so nothing breaks out.
const decode = s => vm.runInContext('unescHtml', ctx)(s);
const onclick = decode(render(`[['); alert(1); //]]`).match(/onclick="([^"]*)"/)[1]);
const arg = onclick.match(/^navigateTo\('(.*)'\)$/)[1];
assert.match(arg, /^(?:[^'\\]|\\.)*$/, `unescaped quote in onclick arg: ${arg}`);

console.log('inlineRender escaping OK');
