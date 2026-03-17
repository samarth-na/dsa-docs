---
title: prime number check (optimized)
description: Check primality with a reduced set of candidate divisors.
topics: math, number theory
Difficulty: easy
---


## Prime Number Check (optimized)

### Description

Check primality with a reduced set of candidate divisors. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
7
```

### Output

```text
prime hai
```

### Code

Source: `lectures/Lecture_14/3_prime_number_optimization.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    //flag or monitor
    bool ans=true;
    for(int i=2;i<=n/2;i++){
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
