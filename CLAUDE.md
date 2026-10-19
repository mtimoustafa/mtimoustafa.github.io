# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal website at [fairewinds.ca](https://fairewinds.ca). Built with SvelteKit (Svelte 5) + Vite, styled with Tailwind CSS 4, and deployed as a static site to GitHub Pages via GitHub Actions on every push to `main`.

## Commands

```bash
yarn dev        # Start dev server (hot-reload)
yarn build      # Build to dist/
yarn preview    # Preview built output on port 3000
yarn lint       # Run ESLint on src/
```

Linting runs automatically as a pre-commit hook (`.githooks/pre-commit`). ESLint is configured to enforce no-semicolons and use the Svelte flat/recommended ruleset.

## Architecture

A SvelteKit app using file-based routing in `src/routes/`, prerendered to static HTML by `adapter-static` (`export const prerender = true` in `+layout.js`). SvelteKit options are passed to the `sveltekit()` plugin in `vite.config.js`; there is no `svelte.config.js`.

- `src/app.html` is the HTML template
- `src/routes/+layout.svelte` provides the page layout shell and imports `src/main.css`
- `src/routes/+page.svelte` is the home page (`src/components/About.svelte`: bio text, links list)
- `src/routes/software/+page.svelte` is the software page
- `src/components/Header.svelte` renders the logo and nav; internal links go through `resolve()` from `$app/paths`
- `src/components/Webring.svelte` renders the Andromesh Webring footer nav

`src/main.css` imports Tailwind and declares the two self-hosted variable fonts (`SansitaSwashed`, `SignikaNegative`) from `static/`.

## Tailwind customizations

Custom values defined in the `@theme` block of `src/main.css`:

- `font-cursive` → `"Sansita Swashed"` (used for the `<h1>`)
- `font-sans` → `"Signika Negative"` (body font)
- `text-f-blue-100` → `#a8f9ff`
- `text-f-blue-300` → `#5cf4ff`

## Deployment

Pushing to `main` triggers the `publish-gh-pages.yml` workflow, which runs `yarn build` and deploys `dist/` to the `gh-pages` branch using `JamesIves/github-pages-deploy-action`.
