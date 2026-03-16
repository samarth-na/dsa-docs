# Arrays Cheatsheet

## What to Learn

- Traversal
- Max, min, and sum scans
- In-place updates
- Sorting basics
- Prefix-style reasoning

## Common Patterns

- Single pass with an answer variable
- Two-pass approach when left and right information is needed
- In-place overwrite using a write pointer
- Sorting first, then processing

## Template Ideas

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

## Repo Questions

- Maximum Element in Array
- Minimum Element in Array
- Sum of Array Elements
- Find Value in Vector
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Two Sorted Arrays
- LeetCode 1
- LeetCode 26
- LeetCode 27
- LeetCode 53
- LeetCode 66
- LeetCode 169
- LeetCode 189
- LeetCode 1991
- LeetCode 238
- LeetCode 2529
- LeetCode 283
- LeetCode 704
- LeetCode 724
- LeetCode 896

## Pitfalls

- Forgetting empty-array edge cases
- Overwriting values before using them
- Using the wrong loop bounds
- Confusing index with value
- Sorting when the problem expects original order to stay intact

## Revision Checklist

- I can scan an array for max, min, and sum
- I can remove or move elements in place
- I can rotate or merge arrays
- I can identify when prefix or suffix help
