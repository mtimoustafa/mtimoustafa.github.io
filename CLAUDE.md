# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal website at [fairewinds.ca](https://fairewinds.ca). Built with Svelte 4 + Vite, styled with Tailwind CSS, and deployed as a static site to GitHub Pages via GitHub Actions on every push to `main`.

## Commands

```bash
yarn dev        # Start dev server (hot-reload)
yarn build      # Build to dist/
yarn preview    # Preview built output on port 3000
yarn lint       # Run ESLint on src/
```

Linting runs automatically as a pre-commit hook (`.githooks/pre-commit`). ESLint is configured to enforce no-semicolons and use the Svelte flat/recommended ruleset.

## Architecture

This is a single-page Svelte app with no routing — everything renders from one entrypoint:

- `src/main.js` mounts `App.svelte` into `#app`
- `src/App.svelte` provides the page layout shell and imports `src/main.css`
- `src/components/About.svelte` contains all page content (bio text, links list)
- `src/components/Webring.svelte` renders the Andromesh Webring footer nav

`src/main.css` imports Tailwind and declares the two self-hosted variable fonts (`SansitaSwashed`, `SignikaNegative`) from `public/`.

## Tailwind customizations

Custom values defined in `tailwind.config.cjs`:

- `font-cursive` → `"Sansita Swashed"` (used for the `<h1>`)
- `font-sans` → `"Signika Negative"` (body font)
- `text-f-blue-100` → `#a8f9ff`
- `text-f-blue-300` → `#5cf4ff`

## Deployment

Pushing to `main` triggers the `publish-gh-pages.yml` workflow, which runs `yarn build` and deploys `dist/` to the `gh-pages` branch using `JamesIves/github-pages-deploy-action`.
