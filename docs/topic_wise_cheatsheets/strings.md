# Strings Cheatsheet

## What to Learn

- Character traversal
- Word traversal
- Reversal
- Palindrome checks
- Frequency counting

## Common Patterns

- Two pointers from both ends
- Count characters with an array or map
- Build a result string while parsing
- Skip spaces or punctuation when needed

## Template Ideas

```cpp
int left = 0, right = s.size() - 1;
while (left < right) {
    swap(s[left], s[right]);
    left++;
    right--;
}
```

```cpp
vector<int> freq(26, 0);
for (char ch : s) {
    freq[ch - 'a']++;
}
```

## Repo Questions

- LeetCode 58
- LeetCode 125
- LeetCode 151
- LeetCode 1678
- LeetCode 242
- LeetCode 3110
- LeetCode 344
- LeetCode 389
- LeetCode 557

## Pitfalls

- Not handling leading or trailing spaces
- Ignoring uppercase/lowercase normalization when needed
- Forgetting non-alphanumeric filtering in palindrome problems
- Off-by-one errors while slicing words

## Revision Checklist

- I can reverse a string in place
- I can check palindrome with filtering
- I can reverse words in a sentence
- I can count or compare character frequencies
