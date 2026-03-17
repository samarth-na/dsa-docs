---
title: gcd using stl
description: Use the standard library gcd helper to compute the answer.
topics: math, number theory
Difficulty: easy
---


## Gcd Using Stl

### Description

Use the standard library gcd helper to compute the answer. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
No stdin input. This source uses hardcoded values in main().
```

### Output

```text
5
```

### Code

Source: `lectures/Lecture_13/5_gcd_stl.cpp`

```cpp
#include <iostream>
// __gcd()
#include<algorithm>
// -infinity and +infinity
#include<climits>
using namespace std;

int main() {
    int c=INT_MAX; //+infinty
    int d=INT_MIN; // -infinity
    int a=5;
    int b=10;
    cout<<__gcd(a,b);
    return 0;
}
```
