---
title: Binary Search Cheatsheet
description: Sorted arrays and monotonic answer space
sidebar:
  order: 7
---

# Binary Search Cheatsheet

Binary search is valid only with a monotonic predicate (sorted array or monotonic “answer space”).

## When to Use

- Find an element/first/last position in sorted data
- Find smallest/largest valid value with a monotonic `ok(x)`
- Problems that say “minimize/maximize” and have a yes/no feasibility check

## Core Patterns

- Maintain `left/right` invariants
- Safe mid: `left + (right - left) / 2`
- Update boundaries to shrink the search space every iteration
- Justify monotonicity before coding

## Templates

```cpp
int left = 0, right = n - 1;
while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}
return -1;
```

```cpp
// answer space binary search: find first x where ok(x) is true
long long l = lo, r = hi;
while (l < r) {
    long long mid = l + (r - l) / 2;
    if (ok(mid)) r = mid;
    else l = mid + 1;
}
return l;
```

## Practice From This Repo

- LeetCode 704 - Binary Search
- LeetCode 74 - Search a 2D Matrix
- LeetCode 2529 - Maximum Count of Positive Integer and Negative Integer
- LeetCode 4 - Median of Two Sorted Arrays

## Common Pitfalls

- Overflow in midpoint calculation (use safe mid)
- Applying binary search without sorted/monotonic structure
- Wrong loop condition (`<=` vs `<`) for the variant you're using
- Boundary updates that don't shrink the interval (infinite loops)

## Revision Checklist

- I can implement classic binary search from memory
- I can detect sorted structure inside a matrix or array
- I can justify why binary search is valid before using it

## Related

- `docs/questions_by_type.md`
- `docs/roadmap.md`
