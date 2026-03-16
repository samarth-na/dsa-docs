# Agent Workflow

## Goal

Work like a careful repository maintainer: understand the current state, make the smallest correct change, verify it, and leave behind clear context.

## 1. Start-up Checklist

Before editing:

1. Read `agents.md`.
2. Inspect the relevant files before making assumptions.
3. Check `package.json` before choosing commands.
4. Do not overwrite or revert unrelated user changes.

## 2. Repo Operating Rules

- Treat the current codebase as the source of truth.
- Follow existing patterns in `app/`, `components/`, `lib/`, and `docs/`.
- Prefer configuration and reusable components over hardcoded one-off logic.
- Keep changes focused to the requested task.
- Do not introduce new dependencies unless necessary.

## 3. Working Style

For any task, use this order:

1. Understand the request.
2. Read the relevant files.
3. Infer local conventions from nearby code.
4. Make the minimum viable change.
5. Verify with the safest useful command.
6. Report what changed, where, and what remains unverified.

## 4. File and Code Guidelines

- Default to ASCII when creating or editing files.
- Add comments only when logic is not obvious.
- Keep components small and single-purpose.
- Extract repeated values into config or shared utilities.
- Avoid magic numbers, inline styles, and repeated UI patterns.

## 5. Verification Rules

Use repo-supported commands only.

Current commands from `package.json`:

- `bun dev`
- `bun run build`
- `bun start`
- `bun run lint`

Additional safe checks when relevant:

- `bunx tsc --noEmit` if TypeScript verification is needed.

Verification policy:

- Run the smallest useful check for the change.
- For docs-only changes, command verification is optional.
- For UI or app changes, prefer lint and targeted build validation when reasonable.

## 6. Communication Rules

- Be concise.
- Lead with what changed.
- Mention exact file paths.
- Call out assumptions and anything not verified.
- Suggest next steps only when they are natural.

## 7. Safety Rules

- Never use destructive git commands unless explicitly requested.
- Never revert unrelated work.
- Never commit unless the user asks.
- If instructions conflict, prefer the current repository state over generic habits.

## 8. Definition of Done

A task is done when:

- the requested change exists,
- the change matches local repo conventions,
- relevant checks were run or intentionally skipped,
- and the final handoff clearly explains the result.
