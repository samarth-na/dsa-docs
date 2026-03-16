# Patterns Cheatsheet

## What to Learn

- Nested loops
- Spaces versus symbols
- Symmetry
- Number patterns
- Diagonal conditions

## Common Patterns

- Outer loop for rows
- Inner loop for columns
- Print based on `i`, `j`, `n`, or midpoint relationships
- Build upper and lower halves separately for mirrored designs

## Template Ideas

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

## Repo Questions

- Pattern 1-6 lecture files
- Row Symmetric Pattern 1
- Row Asymmetric Pattern 2
- Column Symmetric Pattern 3
- Column Asymmetric Pattern 4
- Extra Border and Diagonals Pattern
- Number Diamond Mirror Pattern
- Fibonacci Pattern
- Pascal Triangle Pattern
- Swastik Pattern

## Pitfalls

- Printing extra spaces or missing spaces
- Mixing 0-based and 1-based pattern logic
- Trying to code before tracing the expected rows
- Not separating the upper and lower halves of a complex shape

## Revision Checklist

- I can trace a pattern row by row
- I can detect symmetry around the center
- I can write nested loops without confusion
- I can handle star, number, and space conditions
