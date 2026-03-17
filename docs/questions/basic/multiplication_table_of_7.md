---
title: multiplication table of 7
description: Print the multiplication table of 7.
topics: basic programming, loops, math
Difficulty: basic
---


## Multiplication Table Of 7

### Description

Print the multiplication table of 7. Use simple control flow and clean input/output handling to produce the exact required result.

### Input

```text
No stdin input. This source uses hardcoded values in main().
```

### Output

```text
7 14 21 28 35 42 49 56 63 70 
```

### Code

Source: `lectures/Lecture_4/9_Seven_table.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    for(int i=1;i<=10;i++)
        cout << 7*i << " ";
    return 0;
}
```
