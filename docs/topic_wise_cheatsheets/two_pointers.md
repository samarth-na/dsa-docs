# Two Pointers Cheatsheet

## What to Learn

- Left-right scanning
- Slow-fast pointer updates
- In-place compaction
- Duplicate skipping

## Common Patterns

- One pointer reads, one pointer writes
- Two pointers move toward each other
- Move the side that helps improve the answer
- Skip duplicates after processing a sorted value

## Template Ideas

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

## Repo Questions

- Merge Two Sorted Arrays
- LeetCode 15
- LeetCode 26
- LeetCode 27
- LeetCode 42
- LeetCode 75
- LeetCode 80
- LeetCode 88
- LeetCode 125
- LeetCode 151
- LeetCode 167
- LeetCode 189
- LeetCode 283
- LeetCode 344
- LeetCode 557

## Pitfalls

- Forgetting to sort when the method depends on sorted input
- Missing duplicate-skip logic
- Moving the wrong pointer and losing correctness
- Returning indexes in the wrong format

## Revision Checklist

- I can identify two-pointer problems quickly
- I can write slow-fast in-place logic
- I can handle sorted arrays with left and right pointers
- I can skip duplicates correctly in triplet problems
