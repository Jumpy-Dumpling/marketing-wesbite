# Jumpy Dumpling site

Astro static site for GitHub Pages. Needs Node 22.23.4+.

```bash
npm install
npm run dev
npm run build
```

- Design tokens: `src/styles/tokens.css`. Shared components: `src/components/`.
- Add an app: add an entry to `src/data/apps.ts`. Its page appears at `/apps/<slug>/` and it joins the gallery.
- Deploy: `.github/workflows/deploy.yml` builds on push to `main`. Set Settings > Pages > Source to "GitHub Actions". Base path is picked up automatically (project site or custom domain).
- Mascot and logo are cut from `Lifty/lifty-app/assets/jumpy-dumpling.png` (`src/assets/`).
