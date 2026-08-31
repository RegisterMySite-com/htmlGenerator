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
