# OpenCode Instructions

Use this after loading `.agents/project-context.md`.

## Working style

- Be tool-first: inspect the relevant files before asking questions.
- Prefer small, surgical edits that match existing code style.
- Treat the repo as potentially dirty; never revert unrelated work.
- Do the work first and ask only if blocked by a real ambiguity or missing secret.

## Repo-specific guidance

- For docs rendering, start with `lib/docs.ts`, `lib/toc.ts`, and `components/docs`.
- For route behavior, check redirects in `app/page.tsx`, `app/docs/page.tsx`, and `app/resources/page.tsx`.
- For visual work, keep the existing dark docs-shell aesthetic unless the task asks for a redesign.
- For PDF issues, verify both `app/api/pdf/[section]/[file]/route.ts` and `app/resources/pdfs/page.tsx`.

## Edit rules

- Prefer `apply_patch` for targeted file edits.
- Keep files ASCII unless the file already needs Unicode.
- Add comments only when a block is not obvious.
- Do not rename content files or folders casually because URLs are derived from filesystem paths.

## Verification

- Run `bun run lint` after code changes when practical.
- Run `bun run build` for routing, MDX, data-loading, or production-affecting changes.
- If you cannot verify locally, say exactly what remains unverified.

## Good outcomes

- Changes preserve the docs navigation and slug behavior.
- New UI feels native to the existing app.
- Filesystem access remains validated and path-safe.
- Final replies mention the changed files and the key behavior change.
