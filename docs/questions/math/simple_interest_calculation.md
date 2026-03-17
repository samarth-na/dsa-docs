---
title: simple interest calculation
description: Compute simple interest from principal, rate, and time.
topics: basic programming, math
Difficulty: basic
---


## Simple Interest Calculation

### Description

Compute simple interest from principal, rate, and time. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
1000 10 2
```

### Output

```text
200
```

### Code

Source: `lectures/Lecture_4/2_simple_interest_calculation.cpp`

```cpp
#include<iostream>
using namespace std;
int main(){
    int p,r,t;
    cin>>p>>r>>t;
    int si = (p*r*t)/100;
    cout<<si<<endl;
    return 0;
}
```
