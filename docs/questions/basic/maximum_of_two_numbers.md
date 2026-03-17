---
title: maximum of two numbers
description: Compare two inputs and print the larger value.
topics: basic programming, conditionals
Difficulty: basic
---


## Maximum Of Two Numbers

### Description

Compare two inputs and print the larger value. Use simple control flow and clean input/output handling to produce the exact required result.

### Input

```text
7 3
```

### Output

```text
7
```

### Code

Source: `lectures/Lecture_4/4_Maximu_of_two_numbers.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int a,b;
    cin >> a >> b;
    if(a>b)
        cout << a;
    else
        cout << b;
    return 0;
}
```
