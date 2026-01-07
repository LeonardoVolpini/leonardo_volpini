# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains Next.js App Router routes (`page.tsx`, `layout.tsx`, API routes under `api/`).
- `src/components/` holds UI and section components; shared UI primitives live in `src/components/ui/`.
- `content/blog/` stores MDX blog posts; the filename becomes the slug (e.g., `content/blog/cybersecurity.mdx`).
- `src/utils/`, `src/types/`, and `src/server/` contain shared helpers, TypeScript types, and server-only utilities.
- `public/` holds static assets; `src/styles/` contains global CSS and Tailwind styles.

## Build, Test, and Development Commands
- `yarn dev`: run the local dev server with Turbopack on `http://localhost:3000`.
- `yarn build`: create a production build.
- `yarn start`: run the production server from the build output.
- `yarn preview`: build and start in one step for smoke checks.
- `yarn lint`: run Next.js ESLint rules.

## Coding Style & Naming Conventions
- TypeScript + React with Next.js App Router; follow existing formatting in `src/` files.
- Components use `PascalCase` filenames (e.g., `CardProject.tsx`), utilities use `camelCase`.
- Route files follow Next.js conventions: `page.tsx`, `layout.tsx`, `route.ts`.
- Styling uses Tailwind CSS; keep class lists readable and grouped by intent.

## Testing Guidelines
- No automated test framework is configured yet.
- Use `yarn lint` as the current quality gate.
- If adding tests, colocate under `src/` and document the run command here.

## Commit & Pull Request Guidelines
- Recent commits are short, descriptive, and often in Italian; keep messages concise and action-focused.
- PRs should describe the change, note user-facing impact, and include screenshots for UI updates.
- Call out any required environment variables or config changes.

## Configuration & Secrets
- This project expects environment variables for Supabase and email:
  - `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `SUPABASE_ANON_KEY`
  - `GMAIL_USER`, `GMAIL_APP_PASSWORD`
- Store secrets in a local `.env` file and never commit them.
