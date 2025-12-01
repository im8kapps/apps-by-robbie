# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the App Router entrypoints; `layout.tsx` wraps pages and defines metadata, `page.tsx` is the primary route, and `globals.css` wires Tailwind v4 via `@import "tailwindcss"`.
- `public/` stores static assets referenced via `/` paths (e.g., SVGs, favicons). Add new images here rather than in `app/`.
- Root config: `next.config.ts`, `tsconfig.json` (strict TypeScript), `eslint.config.mjs`, and Tailwind/PostCSS configs. Keep aliases under `@/*` if you add shared modules.
- There is no dedicated `tests/` directory yet; colocate tests with components until a larger suite warrants centralization.

## Build, Test, and Development Commands
- `npm run dev` — Start the Next.js dev server on `localhost:3000` with fast refresh.
- `npm run build` — Create a production bundle; run before releases to catch build-time issues.
- `npm run start` — Serve the production build locally; use for sanity checks.
- `npm run lint` — Run ESLint with `eslint-config-next`; fix warnings before opening a PR.

## Coding Style & Naming Conventions
- TypeScript is strict; keep components typed, avoid `any`, and prefer explicit return types for exported functions.
- Components and files: `PascalCase` for React components, `camelCase` for helpers/variables, `kebab-case` for route segments and asset names.
- Default to React Server Components; add `use client` only when client hooks/state are required.
- Favor Tailwind utility classes defined in `globals.css`; keep class lists purposeful and group layout → spacing → typography → state modifiers.
- Maintain small, focused components; lift shared UI into reusable pieces under `app/` or a future `components/` folder.

## Testing Guidelines
- No automated tests exist yet; when adding logic, write colocated `*.test.tsx` (or `*.spec.tsx`) with React Testing Library or Playwright as appropriate.
- Aim to cover new branches and edge cases introduced by your change; include at least one render/interaction assertion for UI work.
- Always run `npm run lint` before submitting; add `npm run build` if your change affects routing, config, or data fetching.

## Commit & Pull Request Guidelines
- Commit messages should be short, imperative, and scope-limited (e.g., `Add landing layout`, `Fix lint config path`).
- Before a PR: ensure `npm run lint` passes and note any build/test gaps in the description.
- PR description should state purpose, key changes, and how to verify; link issues if they exist.
- Include screenshots or clips for UI changes (desktop and mobile if applicable) and mention any known follow-ups.

## Security & Configuration Tips
- Keep secrets and API keys in `.env.local`; never commit them. Document required env vars in the PR description when introducing new ones.
- Avoid adding server-only values to client components; prefer server routes or environment checks to keep sensitive data off the client.
