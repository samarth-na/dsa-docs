## LeetCode 125 - Valid Palindrome

### Question
LeetCode 125 - Valid Palindrome

### Description

Check whether a string is a palindrome after filtering non-alphanumerics. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, String, Two Pointers

### Difficulty
Easy

### Input
```text
A man, a plan, a canal: Panama
```

### Output
```text
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
