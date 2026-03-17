## 3110 - Score of a String

### Question
3110 - Score of a String

### Description

You are given a string `s`. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of `s`.

### Topic
Strings

### Difficulty
Easy

### Input
```
hello
```

### Output
```
13
```

### Code
Source: `lectures/LeetCode/3110.cpp`

```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int scoreOfString(string s) {
    int sum = 0;
    for(int i = 1; i < s.size(); i++){
        sum += abs(s[i] - s[i-1]);
    }
    return sum;
}

int main() {
    string s;
    cin >> s;

    cout << scoreOfString(s);

    return 0;
}
```
