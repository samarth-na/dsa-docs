---
title: Matrix Cheatsheet
description: Traversal, boundaries, diagonals, rotation, reshape
sidebar:
  order: 5
---

# Matrix Cheatsheet

In 2D, most bugs are index/bounds mistakes. Keep `rows` and `cols` explicit.

## When to Use

- Any 2D traversal (row-wise/col-wise)
- Boundary shrinking (spiral)
- Direction toggles (wave/diagonal)
- In-place transforms (rotate, set-zeroes)

## Core Patterns

- Nested loops for standard traversal
- Boundaries for spiral: `top/bottom/left/right`
- Direction toggles for diagonal/wave traversals
- Always separate row/col dimensions and validate indices

## Templates

```cpp
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // process matrix[i][j]
    }
}
```

```cpp
int left = 0, right = cols - 1;
int top = 0, bottom = rows - 1;
while (left <= right && top <= bottom) {
    // traverse layer
}
```

## Practice From This Repo

- Wave Print by Column
- Spiral Print
- Matrix Multiplication
- LeetCode 48 - Rotate Image
- LeetCode 54 - Spiral Matrix
- LeetCode 59 - Spiral Matrix II
- LeetCode 73 - Set Matrix Zeroes
- LeetCode 74 - Search a 2D Matrix
- LeetCode 1572 - Matrix Diagonal Sum
- LeetCode 498 - Diagonal Traverse
- LeetCode 566 - Reshape the Matrix

## Common Pitfalls

- Mixing rows/cols (`matrix[rows][cols]` mistakes)
- Out-of-bounds while shrinking boundaries (check after each pass)
- In-place updates without preserving info (use markers / first row-col tricks)
- Double-counting center cell in diagonal sums (odd `n`)

## Revision Checklist

- I can traverse any matrix safely
- I can write spiral traversal with boundaries
- I can handle diagonal sums and diagonal traversal
- I can reason about matrix rotations and transforms

## Related

- `docs/roadmap.md`
- `docs/questions_by_type.md`
