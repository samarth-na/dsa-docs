---
title: fibonacci number
description: Compute the nth Fibonacci number recursively.
topics: recursion, math
Difficulty: easy
---


## Fibonacci Number

### Description

Compute the nth Fibonacci number recursively. Define clear base cases and recursive transitions so the solution remains correct and easy to trace.

### Input

```text
7
```

### Output

```text
13
```

### Code

Source: `lectures/Lecture_15/1_fibbonacci.cpp`

```cpp
#include <iostream>
using namespace std;
int fibbo(int g){
    //base case
    if(g==0 or g==1){
        return g;
    }
    return fibbo(g-1)+fibbo(g-2);
}
int main() {
    int n;
    cin>>n;
    cout<<fibbo(n)<<endl;
    return 0;
}
```
