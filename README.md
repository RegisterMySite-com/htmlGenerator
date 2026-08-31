# htmlGenerator

HTML Studio compiler that turns visual sections into a 12-column responsive HTML/CSS/JS site.

Source of truth in this repo: `htmlGenerator.js`

## Exports

- `generateFullHtml(sections, metaInfo)`
- `generateCss(sections)`
- `generateJs(sections)`
- `buildStandaloneHtml(html, css, js, metaInfo)`

## Grid

Generated pages use a mobile-first 12-column system:

- `.hs-container`
- `.hs-row`
- `.hs-col-1` … `.hs-col-12`
- `.hs-col-sm-*` / `.hs-col-md-*` / `.hs-col-lg-*` / `.hs-col-xl-*`
