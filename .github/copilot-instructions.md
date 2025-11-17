<!-- GitHub Copilot / AI agent instructions for the LFB-HRM repository -->
# Copilot / AI Agent Instructions — LFB-HRM

This file captures repository-specific knowledge to help an AI coding agent be productive immediately.

- Project type: Frontend single-page React app using Vite (ES modules) located in `HRM_Frontend/`.
- Main entry: `HRM_Frontend/src/main.jsx` and root `index.html`.
- App root component: `HRM_Frontend/src/App.jsx` (currently minimal placeholder).

Quick commands (run from repository root):

```
cd HRM_Frontend
npm install
npm run dev      # start Vite dev server (HMR)
npm run build    # production build
npm run preview  # preview built output
npm run lint     # run ESLint
```

Key files to inspect when changing behavior:
- `HRM_Frontend/package.json` — scripts and dependencies (React 19, Vite, Tailwind dev deps).
- `HRM_Frontend/vite.config.js` — Vite config; currently minimal with `@vitejs/plugin-react`.
- `HRM_Frontend/index.html` — html shell; `src/main.jsx` is imported here.
- `HRM_Frontend/src/index.css` — global CSS (Tailwind should be configured here if used).
- `HRM_Frontend/tailwind.config.js` & `postcss.config.js` — Tailwind/PostCSS setup. Note: `content` in `tailwind.config.js` is currently empty; update it to include `./index.html` and `./src/**/*.{js,jsx,ts,tsx}` when adding Tailwind classes.

Conventions & patterns discovered (do not assume otherwise):
- ES module + React 19. Files use `.jsx` and `import` syntax.
- No router present — do not add or assume React Router is installed unless you add it to `package.json`.
- No tests detected in the repo. If adding tests, include a test runner and add scripts to `package.json`.
- ESLint is configured (see `eslint.config.js` referenced in `package.json`). Run `npm run lint` after changes.

Common agent tasks and how to approach them here:
- Add a new component: create file under `HRM_Frontend/src/components/` and export; import into `App.jsx` or new route.
- Add Tailwind utility classes: update `HRM_Frontend/tailwind.config.js` `content` to include source paths, then ensure `index.css` includes `@tailwind base; @tailwind components; @tailwind utilities;`.
- Add third-party packages: modify `HRM_Frontend/package.json` and run `npm install` (or run `npm i --save <pkg>`). For build-time plugins (Vite/Rollup), update `vite.config.js` accordingly.

Integration points / external dependencies:
- No backend URL or API client is present. If adding API integration, create a folder such as `src/services/api.js` and document base URL in `.env` (Vite uses `import.meta.env`).
- Build + deploy: standard Vite build; CI/CD will expect `npm run build` to produce `dist/`.

Notes for maintainers / agents merging updates:
- If updating configuration (Tailwind, PostCSS, Vite), run `npm run dev` locally to validate HMR and `npm run build` to validate production output.
- Keep changes minimal and focused: this frontend is intentionally small and uses the default Vite template structure.

If anything in this file is unclear or you want more examples (component, Tailwind setup, or adding a router), tell me which area to expand and I will update this file.
