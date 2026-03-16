# Project Context

This repository is a Next.js App Router site for browsing DSA study material.

## Stack

- Next.js 16 with the App Router.
- React 19.
- TypeScript with `strict: true` and path alias `@/*`.
- Tailwind CSS v4 via `@import "tailwindcss"` in `app/globals.css`.
- MDX rendering through `next-mdx-remote/rsc`.
- CSV parsing through `csv-parse/sync`.

## Main app shape

- `app/page.tsx` redirects to `/docs/roadmap`.
- `app/docs/[...slug]/page.tsx` renders markdown and MDX content from the docs store.
- `app/resources/catalog/page.tsx`, `app/resources/leetcode/page.tsx`, and `app/resources/pdfs/page.tsx` render structured resource pages.
- `app/api/pdf/[section]/[file]/route.ts` streams PDFs from the docs store.

## Content model

- The canonical content source is the `docs` tree, or a compatible `data/docs` or `data` directory if marker files exist.
- `lib/docs.ts` resolves the docs root dynamically.
- Markdown and MDX files are treated as documents.
- `README.md` inside a docs folder acts like the index route for that folder.
- CSV files drive the question catalog and LeetCode list.
- PDFs are expected in `docs/notes` and `docs/Placement`.

## UI conventions

- The shared docs layout lives in `components/docs`.
- `DocsShell` is the main layout wrapper for docs and resource pages.
- Styling uses Tailwind utility classes and CSS variables from `app/globals.css`.
- The current visual language is dark, editorial, and slightly neon: zinc surfaces with rose accents.
- Fonts are configured in `app/layout.tsx` with `Space_Grotesk` and `JetBrains_Mono`.

## Coding conventions

- Use server components by default; only add client components when browser-side state or effects are required.
- Keep changes consistent with the existing docs-shell UI rather than introducing a new design system.
- Reuse helpers in `lib/docs.ts` and `lib/toc.ts` instead of duplicating filesystem or parsing logic.
- Use the `@/` import alias instead of long relative paths.
- Preserve filename casing conventions already used in content folders, especially `Placement`.

## Safe defaults for changes

- For new docs pages, prefer `.md` unless MDX features are actually needed.
- For new UI, follow existing spacing, border, and color choices from `components/docs`.
- For route handlers, validate params before touching the filesystem.
- Avoid adding dependencies unless the repo clearly needs them.

## Commands

- Dev server: `bun run dev`
- Lint: `bun run lint`
- Build: `bun run build`

If Bun is unavailable in the execution environment, the equivalent `npm run <script>` commands should still work because scripts live in `package.json`.

## Notes for agents

- Read the real source files before making assumptions; the root `agents.md` describes an older app structure and toolchain.
- Do not rewrite large docs datasets unless the task explicitly asks for content changes.
- When debugging navigation or content lookup, inspect `lib/docs.ts` first.
