---
title: Strings Cheatsheet
description: Two pointers, frequency, parsing, whitespace handling
sidebar:
  order: 2
---

# Strings Cheatsheet

Strings are usually about traversal + rules: skip characters, normalize case, or split into words.

## When to Use

- Palindrome / reverse / compare from both ends
- Count characters (anagram / frequency)
- Parse words with spaces and punctuation

## Core Patterns

- Two pointers from both ends (palindrome, reverse)
- Count frequencies (array for a-z, map for general)
- Build output while scanning (filter, transform, tokenize)
- Normalize: lowercase + ignore non-alphanumerics when required

## Templates

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

```cpp
// two pointers + normalization (idea)
auto good = [](char c) { return isalnum(static_cast<unsigned char>(c)); };
int l = 0, r = (int)s.size() - 1;
while (l < r) {
    while (l < r && !good(s[l])) l++;
    while (l < r && !good(s[r])) r--;
    if (tolower(s[l]) != tolower(s[r])) return false;
    l++; r--;
}
return true;
```

## Practice From This Repo

- LeetCode 58 - Length of Last Word
- LeetCode 125 - Valid Palindrome
- LeetCode 151 - Reverse Words in a String
- LeetCode 1678 - Goal Parser Interpretation
- LeetCode 242 - Valid Anagram
- LeetCode 3110 - Score of a String
- LeetCode 344 - Reverse String
- LeetCode 389 - Find the Difference
- LeetCode 557 - Reverse Words in a String III

## Common Pitfalls

- Leading/trailing/multiple spaces when splitting words
- Case normalization (lower vs upper)
- Non-alphanumeric filtering rules (palindrome variants)
- Off-by-one while slicing (`substr` bounds)

## Revision Checklist

- I can reverse a string in place
- I can check palindrome with filtering
- I can reverse words in a sentence
- I can count or compare character frequencies

## Related

- `docs/questions_by_type.md`
- `docs/question_catalog.md`
