---
title: prime number check
description: Test primality with the straightforward divisor check.
topics: math, number theory
Difficulty: basic
---


## Prime Number Check

### Description

Test primality with the straightforward divisor check. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
7
```

### Output

```text
prime hai
```

### Code

Source: `lectures/Lecture_14/2_prime_number_standard.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    //flag or monitor
    bool ans=true;
    for(int i=2;i<=n-1;i++){
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
