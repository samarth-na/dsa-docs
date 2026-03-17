---
title: sum of digits
description: Add all digits of an integer.
topics: basic programming, loops, digit manipulation, math
Difficulty: basic
---


## Sum Of Digits

### Description

Add all digits of an integer. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
1234
```

### Output

```text
10
```

### Code

Source: `lectures/Lecture_4/12_Sum_of_Digits.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int n,sum=0;
    cin >> n;
    while(n>0) {
        sum+=n%10;
        n/=10;
    }
    cout << sum;
    return 0;
}
```
