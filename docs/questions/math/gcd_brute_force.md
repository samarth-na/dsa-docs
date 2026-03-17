---
title: gcd brute force
description: Find the greatest common divisor by checking factors directly.
topics: math, number theory
Difficulty: basic
---


## Gcd Brute Force

### Description

Find the greatest common divisor by checking factors directly. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
12 18
```

### Output

```text
6
```

### Code

Source: `lectures/Lecture_13/2_gcd_brute_force.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    int a,b;
    cin>>a>>b;
    int ans=1;
    for(int i=1;i<=min(a,b);i++){
        if(a%i==0 and b%i==0){
            ans=i;
        }
    }
    cout<<ans<<endl;
    return 0;
}
// large numbers me complexity zyada ho jayegi
```
