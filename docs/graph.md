---
title: Question Graph
description: Graph planning page using the question-topic matrix dataset
sidebar:
  order: 14
---

# Question Graph

This is the docs-side graph specification page.
Interactive rendering will be implemented in the app repo, but the data model and filter behavior are defined here.
like obsidian

## Data Source

- Primary dataset: [`csvs/question_topic_matrix.csv`](csvs/question_topic_matrix.csv)
- Supporting dataset: [`csvs/question_catalog.csv`](csvs/question_catalog.csv)

## Graph Model

- **Node type 1:** Question (`Title`)
- **Node type 2:** Topic columns (Array, Math, Matrix, Two Pointers, etc.)
- **Edge rule:** Create an edge when a topic column value is `1` for a question row

This creates a bipartite graph: `Question <-> Topic`.

## Filter Model (MVP)

Minimum filters to support:

1. **Topic filter**
   - Input: one or more topic names
   - Behavior: keep only questions connected to selected topics

2. **Difficulty filter**
   - Input: `Basic`, `Easy`, `Medium`, `Hard`
   - Behavior: join with `question_catalog.csv` and keep matching rows

3. **LeetCode-only toggle**
   - Input: boolean
   - Behavior: keep questions tagged with LeetCode in catalog metadata

## Suggested Output Views

- **Graph view:** topic-question connected network
- **Table view:** filtered rows for export/revision
- **Counts panel:**
  - total questions in current filter
  - count by difficulty
  - count by topic

## Notes for Integration Repo

- Keep this page without right-side material index or extra sidebar-specific content.
- Prefer loading `question_topic_matrix.csv` first, then enrich rows using `question_catalog.csv`.
- Preserve exact topic names from CSV headers to avoid mismatch.
