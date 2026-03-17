## 242 - Valid Anagram

### Question
242 - Valid Anagram

### Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Topic
Strings, Hash Table, Sorting

### Difficulty
Easy

### Input
```
anagram
nagaram
```

### Output
```
true
```

### Code
Source: `lectures/LeetCode/242.cpp`

```cpp
#include <iostream>
#include <string>
using namespace std;

bool isAnagram(string s, string t) {
    int freq[26] = {0};

    for(int i = 0; i < t.size(); i++){
        freq[t[i] - 'a']++;
    }

    for(int i = 0; i < s.size(); i++){
        freq[s[i] - 'a']--;
    }

    for(int i = 0; i < 26; i++){
        if(freq[i] != 0){
            return false;
        }
    }

    return true;
}

int main() {
    string s, t;
    cin >> s >> t;

    if(isAnagram(s, t)){
        cout << "true";
    } else {
        cout << "false";
    }

    return 0;
}
```
