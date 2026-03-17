---
title: reverse a number
description: Reverse the digits of an integer.
topics: basic programming, loops, digit manipulation, math
Difficulty: basic
---


## Reverse A Number

### Description

Reverse the digits of an integer. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
1234
```

### Output

```text
4321
```

### Code

Source: `lectures/Lecture_4/13_Reverse_of_Number.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int n,rev=0;
    cin >> n;
    while(n>0) {
        rev = rev*10 + n%10;
        n/=10;
    }
    cout << rev;
    return 0;
}
```
