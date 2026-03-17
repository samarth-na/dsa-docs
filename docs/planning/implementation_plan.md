---
title: Implementation Plan
description: Coding-first plan to complete docs structure, navigation, and feature pages
sidebar:
  order: 14
---

# Implementation Plan

This is a practical coding plan for completing the docs website using only `docs/` files.

## Objective

Deliver a stable docs site that matches the target structure:

- Questions
- Lectures
- Topics
- Lists
- Resources
- Graph

## Scope

In scope:

- Markdown pages in `docs/`
- Sidebar and navigation updates
- CSV discoverability and linking
- Graph specification page updates
- Lecture and resource link integrity

Out of scope:

- Interactive graph UI implementation in app/frontend repo
- Backend/API work

## Phase 1 - Foundation and Route Integrity

Goal: ensure all main sections exist and are reachable.

Tasks:

1. Verify top-level pages exist:
   - `docs/index.md`
   - `docs/questions/README.md`
   - `docs/lectures/README.md`
   - `docs/topics/README.md`
   - `docs/lists.md`
   - `docs/Placement.md`
   - `docs/graph.md`
2. Align sidebar groups with the target IA in `docs/sidebar.json`.
3. Remove outdated/legacy links and keep only valid routes.

Definition of done:

- Every top-level section is accessible from home and sidebar.
- No broken internal links in these pages.

## Phase 2 - Questions and Lists Experience

Goal: make question discovery consistent in markdown and CSV formats.

Tasks:

1. Keep question entry points consistent:
   - `docs/questions/README.md`
   - `docs/questions_by_type.md`
   - `docs/question_catalog.md`
   - `docs/leetcode_questions.md`
2. Keep `docs/lists.md` as the central list hub.
3. Confirm all list pages cross-link correctly.
4. Validate CSV links:
   - `docs/csvs/question_catalog.csv`
   - `docs/csvs/patterns_questions.csv`
   - `docs/csvs/leetcode_questions.csv`
   - `docs/csvs/question_topic_matrix.csv`

Definition of done:

- A user can move from home -> lists -> any list or CSV in two clicks.

## Phase 3 - Lectures and Resources Reliability

Goal: complete reading flow for lecture notes and placement resources.

Tasks:

1. Keep lecture overview and PDF map in sync:
   - `docs/lectures/README.md`
   - `docs/lectures/pdf_index.md`
2. Spot-check lecture links from `docs/lectures/README.md`.
3. Verify all resource links in `docs/Placement.md` resolve to files in `docs/resouces/`.
4. Decide optional path normalization (`resouces` -> `resources`) as a separate change set.

Definition of done:

- Lecture and resource links open correctly from docs pages.

## Phase 4 - Graph Page Completion (Docs Side)

Goal: finalize graph documentation so app implementation can begin without ambiguity.

Tasks:

1. Keep graph spec authoritative in `docs/graph.md`:
   - data source references
   - node/edge model
   - filter behavior
2. Confirm filter model includes:
   - topic filter
   - difficulty filter
   - LeetCode-only toggle
3. Keep notes explicit that interactive graph is implemented in app repo.

Definition of done:

- `docs/graph.md` can be used directly as implementation input for frontend coding.

## Phase 5 - QA and Release Readiness

Goal: complete final checks before coding starts in the app repo.

Tasks:

1. Run docs build locally and resolve route/content errors.
2. Manually click through top-level sidebar sections.
3. Check for duplicate navigation targets and outdated paths.
4. Update `docs/planning/implementation_plan.md` checklist and mark completed phases.
5. Add final release notes section in `docs/planning/README.md` for the completed pass.

Definition of done:

- No broken routes in docs build.
- Planning docs reflect current status.

## Suggested Execution Order

1. Phase 1
2. Phase 2
3. Phase 3
4. Phase 4
5. Phase 5

## Implementation Checklist

- [ ] Validate all top-level routes and sidebar links
- [ ] Confirm lists hub and CSV links
- [ ] Confirm lecture and resource links
- [ ] Finalize graph spec page language
- [ ] Run docs build and manual smoke test
- [ ] Update planning status/workboard

## Handoff to App Coding

Once this plan is complete, app-side coding can start with:

1. Graph page UI using `question_topic_matrix.csv`.
2. Filter controls wired to topic and difficulty.
3. Optional integration for lecture PDF preview behavior.
