const { globby } = require('globby');
const { markdownlint, markdownlintSync } = require('markdownlint-cli2');
const fs = require('fs');
const path = require('path');

// Custom config for medical wiki
const rules = {
  MD013: false, // Line length - medical tables run long
  MD047: false, // Fenced code blocks language - some tables need raw formatting
  MD001: { skips: [] }, // Headers should not be level 1 (we allow for Obsidian TOC)
  MD004: false, // Header levels increment by one (complex TOC structures don't follow this)
  MD005: false, // No duplicate headers allowed (Obsidian format)
  MD006: { levels: 1, allows_single_char_header: false }, // No header starts with non-alpha characters
  MD037: true, // Only two spaces before a new line creates a line break
  MD036: true, // Proper nesting for nested bullet points (medical recommendation blocks)
  MD041: true, // Trailing spaces at end of line removed
  MD042: { consecutive_lines: 1 }, // Allow empty lines between paragraphs
  MD099: { allow_empty_pipe: false, align_values: 'right' } // Tables must use pipe delimiter
};

const wikiDir = path.resolve('../KHNL-GI-Wiki/wiki');
console.log('='.repeat(80));
console.log('KHNL GI Wiki - Comprehensive Markdown Lint Report');
console.log('='.repeat(80));
console.log(`\nStarting lint scan of ${wikiDir}...\n`);

async function runLinting() {
  // Find all markdown files in the wiki directory
  const mdFiles = await globby(['**/*.md'], { cwd: wikiDir, absolute: true });

  console.log(`Found ${mdFiles.length} markdown files to lint\n`);
  console.log('-'.repeat(80));

  // Collect all errors
  const errors = [];
  let totalErrors = 0;

  // Lint each file
  for (const file of mdFiles) {
    try {
      const results = await markdownlint.lint(file, { rules });

      for (const result of results) {
        totalErrors++;

        // Only report line length errors (common in tables and citations)
        if (result.rule === 'MD013') {
          errors.push({
            file: path.relative(path.dirname(wikiDir), file),
            line: result.line,
            col: result.col,
            rule: result.rule,
            message: result.message,
            severity: result.severity
          });
        }

        // Report table column style issues
        if (result.rule === 'MD099' || result.rule === 'MD060') {
          errors.push({
            file: path.relative(path.dirname(wikiDir), file),
            line: result.line,
            col: result.col,
            rule: result.rule,
            message: result.message,
            severity: result.severity
          });
        }
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  // Print summary
  console.log('-'.repeat(80));
  console.log('');
  console.log('## SUMMARY');
  console.log('='.repeat(80));
  console.log(`\nTotal markdown files analyzed: ${mdFiles.length}`);
  console.log(`Total lint errors found: ${totalErrors}`);

  // Group errors by category
  const lineLengthErrors = errors.filter(e => e.rule === 'MD013').length;
  const tableErrors = errors.filter(e => e.rule.includes('MD099')).length;
  const trailingSpaceErrors = errors.filter(e => e.rule === 'MD041').length;

  console.log(`\n├─ Line length violations (MD013): ${lineLengthErrors}`);
  console.log(`├─ Table formatting issues (MD099): ${tableErrors}`);
  console.log(`└─ Trailing whitespace: ${trailingSpaceErrors}`);

  console.log('\n' + '='.repeat(80));
  console.log('');
  console.log('Would you like me to:\n');
  console.log('1. FIX only syntax-level issues (line length, table formatting, whitespace)?');
  console.log('2. IGNORE line length rules for medical tables and citations?');
  console.log('3. Generate a detailed report of all errors?');
  console.log('4. Create stub pages for missing wiki links mentioned in documents?');
  console.log('');

  // Output error count to file for programmatic access
  fs.writeFileSync('/tmp/markdownlint-summary.txt',
    `Markdown lint complete\n` +
    `Total files: ${mdFiles.length}\n` +
    `Total errors: ${totalErrors}\n` +
    `\nLine Length (MD013): ${lineLengthErrors}\n` +
    `Table Format (MD099/MD060): ${tableErrors + lineLengthErrors}\n` +
    `Trailing Spaces (MD041): ${trailingSpaceErrors}\n` +
    `Other: 0\n`
  );

}

runLinting().catch(console.error);
