---
title: factorial of a number
description: Calculate the factorial of a non-negative integer.
topics: basic programming, loops, math
Difficulty: basic
---


## Factorial Of A Number

### Description

Calculate the factorial of a non-negative integer. Use simple control flow and clean input/output handling to produce the exact required result.

### Input

```text
5
```

### Output

```text
120
```

### Code

Source: `lectures/Lecture_4/10_factorial.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    long long fact=1;
    cin >> n;
    for(int i=1;i<=n;i++)
        fact*=i;
    cout << fact;
    return 0;
}
```
