---
title: fibonacci series
description: Print or generate the Fibonacci sequence up to the requested count.
topics: recursion, math
Difficulty: easy
---


## Fibonacci Series

### Description

Print or generate the Fibonacci sequence up to the requested count. Define clear base cases and recursive transitions so the solution remains correct and easy to trace.

### Input

```text
7
```

### Output

```text
0 1 1 2 3 5 8 
```

### Code

Source: `lectures/Lecture_15/2_fibbonacci_series.cpp`

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
    for(int i=0;i<=n-1;i++){
        cout<<fibbo(i)<<" ";
    }
    
    return 0;
}
```
