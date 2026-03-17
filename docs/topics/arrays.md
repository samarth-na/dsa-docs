---
title: Arrays Cheatsheet
description: Traversal, in-place edits, prefix reasoning
sidebar:
  order: 1
---

# Arrays Cheatsheet

Arrays show up everywhere: scanning, counting, prefix sums, and in-place edits.

## When to Use

- Need a one-pass answer (max/min/sum/count)
- Need to transform the array in place (remove/move/rotate)
- Need fast range sums or “left vs right” reasoning (prefix/suffix)

## Core Patterns

- Single pass + running state (`best`, `count`, `sum`)
- Two-pass when both sides matter (prefix/suffix arrays)
- Two pointers / write pointer compaction (stable-ish in-place edits)
- Sort first when order is irrelevant and duplicates/interval logic gets easier

## Templates

```cpp
int ans = arr[0];
for (int i = 1; i < n; i++) {
    ans = max(ans, arr[i]);
}
```

```cpp
int write = 0;
for (int read = 0; read < n; read++) {
    if (arr[read] != value_to_skip) {
        arr[write++] = arr[read];
    }
}
```

```cpp
// prefix sums: pref[i] = sum of a[0..i-1]
vector<long long> pref(n + 1, 0);
for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + a[i];
// range sum [l, r] = pref[r + 1] - pref[l]
```

## Practice From This Repo

- Maximum Element in Array
- Minimum Element in Array
- Sum of Array Elements
- Find Value in Vector
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Two Sorted Arrays
- LeetCode 1 - Two Sum
- LeetCode 26 - Remove Duplicates from Sorted Array
- LeetCode 27 - Remove Element
- LeetCode 53 - Maximum Subarray
- LeetCode 66 - Plus One
- LeetCode 88 - Merge Sorted Array
- LeetCode 169 - Majority Element
- LeetCode 189 - Rotate Array
- LeetCode 1991 - Find the Middle Index in Array
- LeetCode 238 - Product of Array Except Self
- LeetCode 283 - Move Zeroes
- LeetCode 704 - Binary Search
- LeetCode 724 - Find Pivot Index
- LeetCode 896 - Monotonic Array
- LeetCode 2529 - Maximum Count of Positive Integer and Negative Integer

## Common Pitfalls

- Empty input (`n == 0`) and single element (`n == 1`) cases
- Overwriting values before they are used (copy first, or iterate carefully)
- Off-by-one loop bounds (`i < n` vs `i <= n - 1`)
- Mixing “index” vs “value” in conditions
- Sorting when the original order must be preserved

## Revision Checklist

- I can scan an array for max, min, and sum
- I can remove or move elements in place
- I can rotate or merge arrays
- I can identify when prefix or suffix help

## Related

- `docs/questions_by_type.md`
- `docs/question_catalog.md`
