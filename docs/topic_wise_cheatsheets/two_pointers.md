---
title: Two Pointers Cheatsheet
description: Left-right, slow-fast, in-place compaction, duplicate skipping
sidebar:
  order: 6
---

# Two Pointers Cheatsheet

Two pointers works when you can move pointers monotonically (often after sorting) while preserving correctness.

## When to Use

- One pass compaction (remove elements / move zeroes)
- Left-right scan on sorted data
- Problems that need “shrink window by improving condition” (two ends)
- Skip duplicates in sorted arrays (unique pairs/triplets)

## Core Patterns

- Read/write pointer compaction
- Left/right pointers converging
- Move the pointer that can fix the constraint (sum too small/large, etc.)
- Duplicate skipping around equal values

## Templates

```cpp
int write = 0;
for (int read = 0; read < n; read++) {
    if (good(arr[read])) {
        arr[write++] = arr[read];
    }
}
```

```cpp
int left = 0, right = n - 1;
while (left < right) {
    // decide which pointer moves
}
```

## Practice From This Repo

- Merge Two Sorted Arrays
- LeetCode 15 - 3Sum
- LeetCode 26 - Remove Duplicates from Sorted Array
- LeetCode 27 - Remove Element
- LeetCode 42 - Trapping Rain Water
- LeetCode 75 - Sort Colors
- LeetCode 80 - Remove Duplicates from Sorted Array II
- LeetCode 88 - Merge Sorted Array
- LeetCode 125 - Valid Palindrome
- LeetCode 151 - Reverse Words in a String
- LeetCode 167 - Two Sum II
- LeetCode 189 - Rotate Array
- LeetCode 283 - Move Zeroes
- LeetCode 344 - Reverse String
- LeetCode 557 - Reverse Words in a String III

## Common Pitfalls

- Forgetting to sort when the logic assumes ordering
- Missing duplicate skip loops (`while (l < r && a[l] == a[l-1]) ...`)
- Moving the wrong pointer and breaking invariants
- Returning 0-based vs 1-based indices incorrectly (LeetCode varies)

## Revision Checklist

- I can identify two-pointer problems quickly
- I can write slow-fast in-place logic
- I can handle sorted arrays with left and right pointers
- I can skip duplicates correctly in triplet problems

## Related

- `docs/questions_by_type.md`
- `docs/question_catalog.md`
