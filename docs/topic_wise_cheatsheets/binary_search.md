# Binary Search Cheatsheet

## What to Learn

- Search in sorted arrays
- Search in answer space
- Lower and upper region reasoning
- Midpoint updates without infinite loops

## Common Patterns

- Maintain `left` and `right`
- Compute `mid` safely
- Decide whether the answer is left, right, or exactly mid
- Use monotonic behavior to justify binary search

## Template Ideas

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

## Repo Questions

- LeetCode 704
- LeetCode 74
- LeetCode 2529
- LeetCode 4

## Pitfalls

- Overflow in midpoint calculation
- Using binary search on unsorted data
- Wrong loop condition
- Updating `left` and `right` incorrectly and causing infinite loops

## Revision Checklist

- I can implement classic binary search from memory
- I can detect sorted structure inside a matrix or array
- I can justify why binary search is valid before using it
