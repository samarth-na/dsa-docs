---
title: gcd reverse brute force
description: Scan downward from the smaller number to find the GCD.
topics: math, number theory
Difficulty: basic
---


## Gcd Reverse Brute Force

### Description

Scan downward from the smaller number to find the GCD. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
12 18
```

### Output

```text
6
```

### Code

Source: `lectures/Lecture_13/3_gcd_reverse_brute_force.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    int a,b;
    cin>>a>>b;
    for(int i=min(a,b);i>=1;i--){
        if(a%i==0 and b%i==0){
            cout<<i<<endl;
            break;
        }
    }
    return 0;
}
// agar ek number composite hai aur dusra number prime hai
// toh dikkat aayegi loop 1 tak chalega
```
