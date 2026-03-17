## 344 - Reverse String

### Question
344 - Reverse String

### Description

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with O(1) extra memory.

### Topic
Strings, Two Pointers

### Difficulty
Easy

### Input
```
5
h e l l o
```

### Output
```
o l l e h 
```

### Code
Source: `lectures/LeetCode/344.cpp`

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void reverseString(vector<char>& s) {
    reverse(s.begin(), s.end());
}

int main() {
    int n;
    cin >> n;

    vector<char> s(n);
    for(int i = 0; i < n; i++){
        cin >> s[i];
    }

    reverseString(s);

    for(char c : s){
        cout << c << " ";
    }

    return 0;
}
```
