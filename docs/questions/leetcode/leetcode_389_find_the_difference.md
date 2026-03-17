## LeetCode 389 - Find the Difference

### Question
LeetCode 389 - Find the Difference

### Description

Find the extra character added to one string. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, String, Hashing

### Difficulty
Easy

### Input
```text
abcd abcde
```

### Output
```text
e
```

### Code
Source: `lectures/LeetCode/389.cpp`

```cpp
#include <iostream>
#include <string>
using namespace std;

char findTheDifference(string s, string t) {
    char se;
    int freq[26] = {0};

    for(int i = 0; i < t.size(); i++){
        freq[t[i] - 'a']++;
    }

    for(int i = 0; i < s.size(); i++){
        freq[s[i] - 'a']--;
    }

    for(int i = 0; i < 26; i++){
        if(freq[i] == 1){
            se = 'a' + i;
        }
    }

    return se;
}

int main() {
    string s, t;
    cin >> s >> t;

    cout << findTheDifference(s, t);

    return 0;
}
```
