# Genesis FX Markets landing page

A single-page React/Vite recreation of the Genesis FX Markets homepage. It includes the original homepage copy, local imagery and fonts, responsive layouts, desktop dropdowns, mobile navigation, account tiers, social previews, journal and product carousels, and a local AI Coach mockup.

## Open the offline copy

After running the export command below, open `genesisfxmarkets-landing.html` in a browser. The file bundles the production JavaScript, CSS, fonts, and artwork and works offline.

## Run or build the source

Use Node.js 20.19+ on the 20.x line or Node.js 22.12+.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. To build the production files and regenerate the offline copy with Python 3:

```bash
npm run build
python3 scripts/export-html.py
```

The output is in `dist/`. Run `npm run preview` to serve it locally.

## Project structure

- `src/sections/` contains the homepage sections, header, and footer.
- `src/useLandingInteractions.js` handles navigation, the carousels, and simulated interactions.
- `src/landing.css` adds local layout, motion, and accessibility rules.
- `public/` contains local source media, icons, fonts, and stylesheets.

The account and trading links open local demo dialogs. Links to sections scroll within the page. Links to other first-party pages open short local excerpts. The homepage is English and uses CSS-based motion in place of the source’s pinning and WebGL runtime. No service, authentication, or analytics integrations are included.

## Deploy to GitHub Pages

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow builds and publishes `dist/` on pushes to `main`. Use **Actions → Deploy landing page to GitHub Pages → Run workflow** for the first deployment if the initial push happened before Pages was enabled.
