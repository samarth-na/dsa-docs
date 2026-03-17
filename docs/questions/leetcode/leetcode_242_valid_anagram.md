## LeetCode 242 - Valid Anagram

### Question
LeetCode 242 - Valid Anagram

### Description

Check whether two strings are anagrams of each other. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, String, Hashing

### Difficulty
Easy

### Input
```text
anagram nagaram
```

### Output
```text
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
