# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `packageManager` in `package.json`). Use `pnpm install` after pulling.

- `pnpm dev` — Vite dev server on port 3000 (`--host`, falls back to next free port; `client/` is the Vite root).
- `pnpm build` — Vite client build → `dist/public`, then esbuild bundles `server/index.ts` → `dist/index.js` (ESM, externalized packages).
- `pnpm start` — Production: `NODE_ENV=production node dist/index.js`. The Express server serves `dist/public` and falls back to `index.html` for SPA routing.
- `pnpm check` — TypeScript typecheck (`tsc --noEmit`). There is no lint script.
- `pnpm format` — Prettier across the repo.

There is **no test runner configured** (vitest is installed but no `test` script and no `*.test.ts` files exist). Don't claim tests pass — there are none.

## Architecture

Single-page React app for an interactive physics learning experience ("Day 1: Dynamics & Multi-Body Force Systems"). Three top-level directories share one `tsconfig.json`:

- `client/` — Vite root. React 19 SPA entry at `client/src/main.tsx` → `App.tsx`.
- `server/` — Tiny Express server (`server/index.ts`) used **only in production** to serve the built static bundle and SPA-route fallback. It does not run during `pnpm dev` (Vite handles that directly).
- `shared/` — Constants shared between client and server (currently only `COOKIE_NAME`, `ONE_YEAR_MS`).

### Path aliases (defined in both `tsconfig.json` and `vite.config.ts` — keep in sync)
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Routing & page model
Routing uses **wouter** (`client/src/App.tsx`). Each physics concept is a single top-level page component in `client/src/pages/` (e.g. `InclinedPlanes.tsx`, `Friction.tsx`, `Tension.tsx`, `Energy.tsx`, `Momentum.tsx`, `CircularMotion.tsx`, `Orbital.tsx`, `RotatingFrames.tsx`, plus problem pages like `BatmanProblem`, `RollerCoaster`, `SatelliteCollision`, `FinalBoss`). `Tension` is also aliased as the `/coupled-systems` route. Adding a new concept means: create `pages/X.tsx`, import in `App.tsx`, add a `<Route>`, and (typically) link from `Home.tsx`.

### UI layer
- **shadcn/ui** ("new-york" style) lives in `client/src/components/ui/` (~50 generated components). `components.json` configures the generator; aliases match the path aliases above. When adding shadcn components, use the existing alias structure.
- **Tailwind CSS v4** via `@tailwindcss/vite`. The single stylesheet `client/src/index.css` defines design tokens via CSS variables.
- **Force-color tokens** are the core design system (`--color-gravity`, `--color-tension`, `--color-friction`, `--color-normal`, `--color-net-force`) and are reused across all FBD/diagram visuals — pull from these vars rather than hardcoding hex values when adding new diagrams.
- **Theme**: `client/src/contexts/ThemeContext.tsx`. Default is `light`. To make it user-switchable, pass `switchable` to `<ThemeProvider>` in `App.tsx` and use `useTheme()`. Right now `toggleTheme` is `undefined` unless `switchable` is set.
- Animation via **framer-motion**; charts via **recharts**; diagrams are hand-authored SVG inside the page components.

### Vite plugins (notable)
`vite.config.ts` registers a custom dev-only plugin **`vitePluginManusDebugCollector`** that:
- Injects `/__manus__/debug-collector.js` into `index.html` in dev.
- Accepts `POST /__manus__/logs` and writes browser console / network / session-replay payloads to `.manus-logs/{browserConsole,networkRequests,sessionReplay}.log`.
- Auto-trims each file to ~60% of 1 MB when it exceeds the cap.

These logs are useful for debugging the running app. The plugin is a **no-op in production** (the script tag is only injected when `NODE_ENV !== "production"`).

Other plugins: `@vitejs/plugin-react`, `@tailwindcss/vite`, `@builder.io/vite-plugin-jsx-loc`, `vite-plugin-manus-runtime`.

### Patched dependencies
`pnpm.patchedDependencies` patches `wouter@3.7.1` via `patches/wouter@3.7.1.patch`, and overrides `tailwindcss>nanoid` to `3.3.7`. Don't bump these without checking the patch still applies.

### Design intent
`ideas.md` is the design brief ("Interactive Scientific Clarity"): two-column asymmetric layout (60% diagram / 40% controls+explanation), color-coded force vectors, sliders driving real-time FBD updates, sequenced force animations (gravity → friction → tension). Match this aesthetic when adding new concept pages — it is the reason for the force-color tokens and the SVG-based diagrams.

## Pedagogy — explain, don't tell

This is a study tool, not a reference card. Every formula card and every step of every worked example must lead with the **plain-language idea** before the formal compression. The 5 failure modes to avoid:

1. **Defining terms in their own language.** Replace `meaning: "wave number"` with `meaning: "how squished the wave is in space — bigger k means crests are closer together (rad/m)"`. Units in parens at the end, not as the whole definition.
2. **Stating rules without reasons.** "Closed-open pipes have only odd harmonics" must be paired with the physical *why* ("closed end forces the air still, open end lets it move freely; that asymmetry rules out even harmonics"). Same for sign conventions, boundary rules, hand rules.
3. **Memorizing traps instead of dissolving them.** Sign conventions tied to physical reality you can sanity-check ("approaching makes pitch go up — pick whatever signs make f' bigger") beat four-things-to-flip rules.
4. **No mental images.** Anchor every concept to something physical — a wiggling rope, an ambulance, a guitar string.
5. **Disconnected facts instead of connected ideas.** `v = ω/k = fλ` is "speed = (how fast it wiggles) × (how long one wiggle is)." Translate first, compress second.

**Worked-example structure**: every step's body opens with `<Why>` (concept setup), then `<Eq>` (formal computation), then a closing `<Why>` that interprets the number physically (sanity-check, unit check, "what does this mean"). The `<Why>` and `<Eq>` helpers live in `client/src/components/midterm/WorkedExample.tsx`. The reference exemplar is `client/src/pages/WavesMusic.tsx` — match its tone when writing or rewriting study content.
