# Long Plan Rules

Use these rules when a task is large, spans multiple files, includes unclear scope, or needs several rounds of work.

## 1. When to Create a Long Plan

Create a structured plan if any of these are true:

- the task has 3 or more meaningful steps,
- multiple folders or systems are affected,
- verification requires several commands,
- the request mixes discovery, implementation, and documentation,
- or the user asks for an ongoing working strategy.

## 2. Plan Structure

Every long plan should contain:

1. Objective - one sentence on the end state.
2. Constraints - repo rules, user limits, and risk boundaries.
3. Phases - ordered chunks of work.
4. Validation - how each phase will be checked.
5. Handoff - what the user will get at the end.

## 3. Phase Rules

Each phase should be:

- independently understandable,
- small enough to verify,
- ordered by dependency,
- and able to stop safely if blocked.

Preferred phase order:

1. discovery
2. design or plan confirmation from repo context
3. implementation
4. verification
5. documentation or cleanup

## 4. Execution Rules

- Keep exactly one active step at a time.
- Finish or explicitly pause a step before switching.
- Re-read affected files before editing if the task has gone long.
- If new information changes scope, update the plan instead of drifting silently.

## 5. Assumption Rules

- Record assumptions when they affect architecture, behavior, or validation.
- Prefer reversible decisions.
- If blocked by missing external context, proceed with the safest local default and state it clearly.

## 6. Verification Rules for Long Tasks

- Verify each major phase, not just the final state.
- Use targeted checks first, broad checks second.
- If full verification is too expensive or unavailable, state the exact gap.

## 7. Documentation Rules

Long tasks should leave behind:

- updated docs when workflow or behavior changes,
- clear file-level organization,
- and enough context so another agent can continue without rereading the whole repo.

## 8. Stop Conditions

Pause and ask only if one of these is true:

- the choice changes behavior in a material way and repo context does not resolve it,
- the action is destructive or irreversible,
- secrets, credentials, or external access are required,
- or the provided external source cannot be retrieved and is required for accuracy.

## 9. Long-Task Definition of Done

A long task is done when:

- all planned phases are completed or explicitly deferred,
- the current state is documented,
- verification status is clear,
- and the next agent could continue from the repo without hidden context.
