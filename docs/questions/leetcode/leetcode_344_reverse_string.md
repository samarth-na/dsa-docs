## LeetCode 344 - Reverse String

### Question
LeetCode 344 - Reverse String

### Description

Reverse a character array in place. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, String, Two Pointers

### Difficulty
Easy

### Input
```text
5
h e l l o
```

### Output
```text
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
