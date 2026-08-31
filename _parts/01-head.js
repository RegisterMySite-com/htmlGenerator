// Generator for compiling Form Sections into raw HTML, CSS, and JS

export function generateFullHtml(sections = [], metaInfo = {}) {
  const { title = 'My Website', description = 'Built with HTML Studio', metaTags = '' } = metaInfo;
  const enabledSections = sections.filter(s => s.enabled);

  const sectionsHtml = enabledSections.map(section => renderSectionHtml(section)).join('\n\n');

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  ${metaTags}
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Custom Styles (includes 12-column responsive grid) -->
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">

${sectionsHtml}

  <!-- Interactive Client Script -->
  <script src="script.js"></script>
</body>
</html>`;
}

function buildGridSystemCss() {
  const spans = [];
  for (let i = 1; i <= 12; i++) {
    spans.push(`.hs-col-${i} { grid-column: span ${i} / span ${i}; }`);
  }
  const bp = (prefix, query) => {
    const rules = [];
    for (let i = 1; i <= 12; i++) {
      rules.push(`  .hs-col-${prefix}-${i} { grid-column: span ${i} / span ${i}; }`);
    }
    rules.push(`  .hs-col-${prefix}-offset-0 { grid-column-start: 1; }`);
    for (let i = 1; i <= 11; i++) {
      rules.push(`  .hs-col-${prefix}-offset-${i} { grid-column-start: ${i + 1}; }`);
    }
    return `@media (min-width: ${query}) {\n${rules.join('\n')}\n}`;
  };

  return `/* 12-column responsive grid — mobile first
   Breakpoints: sm 640px | md 768px | lg 1024px | xl 1280px
   Usage: .hs-container > .hs-row > .hs-col-* / .hs-col-md-* / .hs-col-lg-*
*/
*, *::before, *::after { box-sizing: border-box; }

html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  margin: 0;
  overflow-x: hidden;
}

img, video, canvas, svg {
  max-width: 100%;
  height: auto;
  display: block;
}

.hs-container {
  width: 100%;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .hs-container { padding-left: 1.5rem; padding-right: 1.5rem; }
}
@media (min-width: 1024px) {
  .hs-container { padding-left: 2rem; padding-right: 2rem; }
}

.hs-row {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 1rem;
  row-gap: 1.5rem;
  width: 100%;
  align-items: stretch;
}

@media (min-width: 640px) {
  .hs-row { column-gap: 1.5rem; row-gap: 1.75rem; }
}
@media (min-width: 1024px) {
  .hs-row { column-gap: 2rem; row-gap: 2rem; }
}

.hs-row > [class*="hs-col-"] {
  min-width: 0;
  max-width: 100%;
}

${spans.join('\n')}

${bp('sm', '640px')}

${bp('md', '768px')}

${bp('lg', '1024px')}

${bp('xl', '1280px')}

/* Default: every direct child of a row is full-width on mobile */
.hs-row > *:not([class*="hs-col-"]) {
  grid-column: span 12 / span 12;
  min-width: 0;
}

/* Touch-friendly controls */
button, a.hs-btn, .hs-btn {
  touch-action: manipulation;
}

@media (max-width: 639px) {
  .hs-stack-mobile {
    width: 100%;
    justify-content: stretch;
  }
  .hs-stack-mobile > a,
  .hs-stack-mobile > button {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
}
`;
}
