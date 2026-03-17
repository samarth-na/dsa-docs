---
title: gcd using euclidean algorithm
description: Use repeated remainder reduction to compute the GCD efficiently.
topics: math, number theory
Difficulty: easy
---


## Gcd Using Euclidean Algorithm

### Description

Use repeated remainder reduction to compute the GCD efficiently. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
12 18
```

### Output

```text
6
6
```

### Code

Source: `lectures/Lecture_13/4_EA_gcd.cpp`

```cpp
#include <iostream>
using namespace std;
int gcd(int a,int b){
    while(b!=0){
        int t=a%b;
        a=b;
        b=t;
    }
    return a;
}
// normal way
int main() {
    int a,b;
    cin>>a>>b;
    while(b!=0){
        int t=a%b;
        a=b;
        b=t;
    }
    cout<<a<<endl;
    cout<<gcd(a,b);
    return 0;
}
```
