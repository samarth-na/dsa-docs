# Matrix Cheatsheet

## What to Learn

- Row-column traversal
- Wave and spiral order
- Diagonal logic
- Matrix update problems
- Rotation and reshape

## Common Patterns

- Nested loops for standard traversal
- Boundary variables for spiral order
- Direction changes for diagonal or wave travel
- Separate row and column dimensions clearly

## Template Ideas

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

## Repo Questions

- Wave Print by Column
- Spiral Print
- Matrix Multiplication
- LeetCode 48
- LeetCode 54
- LeetCode 59
- LeetCode 73
- LeetCode 74
- LeetCode 1572
- LeetCode 498
- LeetCode 566

## Pitfalls

- Mixing rows and columns
- Accessing out of bounds while shrinking boundaries
- Updating a matrix in place before preserving necessary information
- Missing the center cell or double-counting it in diagonal sums

## Revision Checklist

- I can traverse any matrix safely
- I can write spiral traversal with boundaries
- I can handle diagonal sums and diagonal traversal
- I can reason about matrix rotations and transforms
