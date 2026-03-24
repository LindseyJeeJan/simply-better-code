# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn serve           # Dev server (localhost, port 3000)
yarn build           # Production build → docs/ (for GitHub Pages)
yarn test            # Vitest in watch mode
yarn test:ci         # Single test run with verbose output
yarn lint            # ESLint (v9 flat config)
yarn format          # Prettier (src/**/*.{js,jsx,ts,tsx,css,md,json})
```

**Run a single test file:**
```bash
yarn vitest src/tests/App.test.tsx
```

**Run tests matching a pattern:**
```bash
yarn vitest --grep "renders app title"
```

## Architecture

This is an accessibility-focused documentation/tutorial SPA built with React 19 + TypeScript + Vite. It's deployed to GitHub Pages at `/simply-better-code/` (base path configured in `vite.config.ts`).

**Routing** is defined in `src/index.tsx` using React Router v7's `createBrowserRouter`. Routes map to page components under `src/components/pages/`. The layout shell (`Container.tsx`) wraps all routes with `MainHeader`, `MainNav`, and `MainFooter`.

**Styling** uses SCSS modules with `@use` syntax (not `@import`). Partials are organized in `src/static/scss/` (`_variables`, `_base`, `_components`, `_layouts`, `_typography`, `_mixins`). UI components come from Grommet 2 (Box, Button, Heading, etc.) — styled-components is installed as Grommet's peer dep but not used directly.

**State management**: Redux Toolkit store is configured in `src/store/store.ts` but the reducer is empty and the `<Provider>` is commented out in `src/index.tsx`. Not actively in use.

**Testing**: Vitest with `jsdom` environment. Setup file is `src/tests/setupTests.ts` which imports `@testing-library/jest-dom`. Wrap components in `MemoryRouter` when testing routed components.

**Build output**: `yarn build` writes to `docs/` (not `dist/`) for GitHub Pages deployment. A separate `build:root` script handles a root-path deployment variant.

## Code Quality

Husky runs a pre-commit hook. ESLint uses v9 flat config (`eslint.config.js`). Prettier is configured in `.prettierrc` (2-space indent, 100-char print width, trailing commas).
