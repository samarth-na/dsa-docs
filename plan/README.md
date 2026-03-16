# Agent Plan

This folder gives an agent a durable working plan for this repository.

Files:

- `plan/agent-workflow.md` - default workflow for understanding, changing, and verifying work in this repo.
- `plan/long-plan-rules.md` - rules for large, multi-step, or long-running tasks.
- `plan/session-notes.md` - notes about the imported session context and current assumptions.

How to use this folder:

1. Read `plan/session-notes.md` first for context.
2. Follow `plan/agent-workflow.md` for normal tasks.
3. Use `plan/long-plan-rules.md` whenever the task is broad, ambiguous, or spans multiple files.

Repo-specific reminders:

- Respect existing changes in the worktree.
- Prefer small, composable edits over broad rewrites.
- Verify with commands that actually exist in this repo.
- Keep documentation and code consistent when behavior changes.
