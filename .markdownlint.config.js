const markdownlint = require('markdownlint');
const mdEscaper = require('markdownlint-eslint-escape');

module.exports = {
  default: true,
  extends: ['recommended'],
  rules: {
    // Line length - DISABLED for medical wiki (tables and citations run long)
    'MD013': false,

    // Code blocks - use fenced code blocks with backticks, not markdown code fence markers
    'MD046': true,

    // Fenced code blocks must have language specified - DISABLED (medical tables sometimes need raw formatting)
    'MD047': false,

    // First header in document should not be level 1 - ALLOWED for Obsidian wiki format
    'MD001': {
      skips: ['first_heading_in_document']
    },

    // Header levels should only increment by one - DISABLED (complex TOC structures)
    'MD004': false,

    // Header pattern - NO UNDERSCORES - use colons instead for consistency with medical terminology
    // This is disabled because medical nomenclature often uses underscores or hyphens that need to be preserved
    'MD005': false,

    # Headers should be on their own line - OBSIDIAN COMPATIBILITY: headers must not have preceding whitespace
    'MD006': {
      levels: 1,
      allows_single_char_header: false
    },

    // No horizontal rule allowed in markdown
    'MD037': true,

    # Allow only 2 or 3 spaces for list indentation (Obsidian compatible)
    'MD031': {
      indent: 2,
      start_indented: false
    },

    // Bulleted lists should use consistent bullet style - DISABLED to allow mixed formatting
    'MD029': false,

    # Numbered lists must be consistently numbered
    'MD048': {
      ordered_list_tag_style: 'space'
    },

    # Do not use horizontal rule - OBSIDIAN DOES NOT RENDER HRS PROPERLY
    'MD035': true,

    # Tables should use pipe delimiter consistently - ENABLED as medical wiki requires structured tables
    'MD099': {
      allow_empty_pipe: false, // Don't allow pipes without borders
      align_values: 'right'   // Right-align numeric columns
    },

    // Table column style - COMPACT STYLE (no extra spacing)
    'MD060': true,

    # No trailing spaces at end of line - standard markdown cleanup
    'MD041': true,

    # Disable for YAML frontmatter content - Obsidian uses custom block format
    'MD040': false, // Emphasis style (don't flag bold/italics in code blocks)

    // Blockquotes - allow medical recommendations with > **Recommendation:** pattern
    'MD036': true, // Proper nesting for nested bullet points

    # No double spaces after paragraph breaks - standard markdown
    'MD042': {
      consecutive_lines: 1
    },

    # Allow empty lines between lists and paragraphs
    'MD043': true
  }
};
