# htmlGenerator

HTML Studio compiler for [RegisterMySite-com](https://github.com/RegisterMySite-com).

Turns visual form sections into a **12-column, mobile-first** HTML/CSS/JS site.

## File

- [`htmlGenerator.js`](./htmlGenerator.js) — compiler source

## Exports

```js
import {
  generateFullHtml,
  generateCss,
  generateJs,
  buildStandaloneHtml
} from './htmlGenerator.js';
```

- `generateFullHtml(sections, metaInfo)` — full HTML document
- `generateCss(sections)` — generated CSS including the `.hs-*` grid
- `generateJs(sections)` — mobile menu, smooth scroll, contact form
- `buildStandaloneHtml(html, css, js, metaInfo)` — single-file document for deploy

## Grid classes

- `.hs-container` — centered page width
- `.hs-row` — 12-column grid
- `.hs-col-1` … `.hs-col-12` — mobile (default)
- `.hs-col-sm-*` / `.hs-col-md-*` / `.hs-col-lg-*` / `.hs-col-xl-*` — 640 / 768 / 1024 / 1280px
- `.hs-col-lg-offset-*` — column offsets
