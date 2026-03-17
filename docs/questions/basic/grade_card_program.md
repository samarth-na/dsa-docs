---
title: grade card program
description: Map marks to a grade using conditional logic.
topics: basic programming, conditionals
Difficulty: basic
---


## Grade Card Program

### Description

Map marks to a grade using conditional logic. Use simple control flow and clean input/output handling to produce the exact required result.

### Input

```text
82
```

### Output

```text
B
```

### Code

Source: `lectures/Lecture_4/6_Grade_Card_problem.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int marks;
    cin >> marks;
    if(marks>=90)
        cout << "A";
    else if(marks>=75)
        cout << "B";
    else if(marks>=60)
        cout << "C";
    else if(marks>=40)
        cout << "D";
    else
        cout << "F";
    return 0;
}
```
