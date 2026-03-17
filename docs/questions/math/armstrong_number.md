---
title: armstrong number
description: Check whether a number equals the sum of powers of its digits.
topics: math, digit manipulation
Difficulty: easy
---


## Armstrong Number

### Description

Check whether a number equals the sum of powers of its digits. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
153
```

### Output

```text
Armstrong
```

### Code

Source: `lectures/Lecture_20/1_armstrong_number.cpp`

```cpp
#include <iostream>
#include<cmath>
using namespace std;

int main() {
    int n;
    cin>>n;
    int og=n;
    int temp=n;
    int sum=0;
    // digit calculate karna
    int l=0;
    while(temp!=0){
        temp=temp/10;
        l++;
    }
    // power nikalna and add karna
    while(n!=0){
        int k=n%10;
        sum=sum+pow(k,l);
        n=n/10;
    }
    // compare karna
    if(og==sum){
        cout<<"Armstrong"<<endl;
    }
    else{
        cout<<"Not Armstrong"<<endl;
    }
    return 0;
}
```
