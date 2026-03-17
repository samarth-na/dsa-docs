---
title: Patterns Cheatsheet
description: Row/column thinking, symmetry, spaces vs symbols
sidebar:
  order: 3
---

# Patterns Cheatsheet

Pattern questions are mostly about tracing rows/columns and turning observations into `if` conditions.

## When to Use

- Any “print this shape” problem
- Problems with symmetry, borders, diagonals, or spacing rules

## Core Patterns

- Outer loop = rows, inner loop = columns
- Decide print based on `(i, j, n)` relationships
- Split into halves for diamonds/mirrors (build top then bottom)
- For border/diagonal patterns, write the condition first, then print

## Templates

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (condition) cout << "* ";
        else cout << "  ";
    }
    cout << endl;
}
```

```cpp
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) cout << " ";
    for (int j = 1; j <= i; j++) cout << j << " ";
    cout << endl;
}
```

## Practice From This Repo

- Pattern 1-6 (lecture files)
- Row Symmetric Pattern 1
- Row Asymmetric Pattern 2
- Column Symmetric Pattern 3
- Column Asymmetric Pattern 4
- Extra Border and Diagonals Pattern
- Number Diamond Mirror Pattern
- Fibonacci Pattern
- Pascal Triangle Pattern
- Swastik Pattern

## Common Pitfalls

- Extra/missing spaces (especially leading spaces)
- Mixing 0-based and 1-based indexing across loops
- Coding before writing 2-3 sample rows on paper
- Not splitting complex patterns (top/bottom or left/right) cleanly

## Revision Checklist

- I can trace a pattern row by row
- I can detect symmetry around the center
- I can write nested loops without confusion
- I can handle star, number, and space conditions

## Related

- `docs/roadmap.md`
- `docs/questions_by_type.md`
