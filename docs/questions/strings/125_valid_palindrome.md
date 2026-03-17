## 125 - Valid Palindrome

### Question
125 - Valid Palindrome

### Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Topic
Strings, Two Pointers

### Difficulty
Easy

### Input
```
A man, a plan, a canal: Panama
```

### Output
```
true
```

### Code
Source: `lectures/LeetCode/125.cpp`

```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindrome(string s) {
    int l = 0;
    int r = s.size() - 1;

    while(l < r){
        while(l < r && !isalnum(s[l])){
            l++;
        }
        while(l < r && !isalnum(s[r])){
            r--;
        }

        if(tolower(s[l]) != tolower(s[r])){
            return false;
        }

        l++;
        r--;
    }

    return true;
}

int main() {
    string s;
    getline(cin, s);

    if(isPalindrome(s)){
        cout << "true";
    } else {
        cout << "false";
    }

    return 0;
}
```
