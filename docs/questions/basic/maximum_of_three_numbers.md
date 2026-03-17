---
title: maximum of three numbers
description: Find the largest among three given numbers.
topics: basic programming, conditionals
Difficulty: basic
---


## Maximum Of Three Numbers

### Description

Find the largest among three given numbers. Use simple control flow and clean input/output handling to produce the exact required result.

### Input

```text
7 3 10
```

### Output

```text
10
```

### Code

Source: `lectures/Lecture_4/5_Maximum_of_three_numbers.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int a,b,c;
    cin >> a >> b >> c;
    if(a>=b && a>=c)
        cout << a;
    else if(b>=a && b>=c)
        cout << b;
    else
        cout << c;
    return 0;
}
```
