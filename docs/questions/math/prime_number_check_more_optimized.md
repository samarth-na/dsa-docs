---
title: prime number check (more optimized)
description: Use tighter divisor bounds for a faster primality test.
topics: math, number theory
Difficulty: easy
---


## Prime Number Check (more Optimized)

### Description

Use tighter divisor bounds for a faster primality test. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
7
```

### Output

```text
prime hai
```

### Code

Source: `lectures/Lecture_14/4_prime_number_more_optimization.cpp`

```cpp
#include <iostream>
#include<cmath>
using namespace std;

int main() {
    int n;
    cin>>n;
    //flag or monitor
    bool ans=true;
    for(int i=2;i<=sqrt(n);i++){
        if(n%i==0){
            ans=false;
            break;
        }
    }
    if(!ans){
        cout<<"prime nahi hai";
    }
    else{
        cout<<"prime hai";
    }
    return 0;
}
```
