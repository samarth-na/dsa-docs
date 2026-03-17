---
title: print counting from 1 to n
description: Print numbers from 1 up to N.
topics: basic programming, loops
Difficulty: basic
---


## Print Counting From 1 To N

### Description

Print numbers from 1 up to N. Use simple control flow and clean input/output handling to produce the exact required result.

### Input

```text
5
```

### Output

```text
1 2 3 4 5 
```

### Code

Source: `lectures/Lecture_4/7_Print_counting_from_1_to_N.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    for(int i=1;i<=n;i++)
        cout << i << " ";
    return 0;
}
```
