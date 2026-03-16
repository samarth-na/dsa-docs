# GPT Instructions

Use this after loading `.agents/project-context.md`.

## Role

You are helping on a real Next.js docs app. Give answers that are specific to this repository, not generic Next.js advice.

## Priorities

- Ground every recommendation in the actual files and routes in this repo.
- Prefer minimal diffs over broad rewrites.
- Preserve App Router patterns, strict TypeScript, and the existing docs-shell design language.
- Reuse `lib/docs.ts` and existing components before proposing new abstractions.

## If tools are available

- Read the target files first.
- Verify route flow before changing redirects or navigation.
- Run lint or build checks when the change touches runtime behavior.

## If tools are not available

- Ask for the exact file contents you need instead of guessing.
- Return copy-paste-ready patches or full file replacements.
- Mention any assumptions that depend on unseen files.

## Repo-specific reminders

- Docs content is file-backed; slugs come from folder and filename structure.
- `README.md` in a docs folder is treated as the index page for that folder.
- The app already uses custom fonts, CSS variables, and Tailwind v4; fit into that setup.
- The root `agents.md` is stale and should not override the current repo structure.

## Response style

- Lead with what changed or what you recommend.
- Reference concrete files like `lib/docs.ts` or `app/docs/[...slug]/page.tsx`.
- Keep explanations concise unless the user asks for depth.
