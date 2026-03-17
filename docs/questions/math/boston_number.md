---
title: boston number
description: Compare digit sum with prime factor digit sums to classify a Boston number.
topics: math, number theory, digit manipulation
Difficulty: medium
---


## Boston Number

### Description

Compare digit sum with prime factor digit sums to classify a Boston number. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
378
```

### Output

```text
18
18
Boston
```

### Code

Source: `lectures/Lecture_20/2_boston_number.cpp`

```cpp
#include <iostream>
using namespace std;
int digitsum(int n){
    int sum=0;
    while(n!=0){
        int k=n%10;
        sum+=k;
        n/=10;
    }
    return sum;
}
bool prime(int n){
    for(int i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
int main() {
    int n;
    cin>>n;
    int sum=0;
    int factor=0;
    sum=digitsum(n);
    for(int i=2;i<=n;i++){
        while(n%i==0){
            if(prime(i)){
                factor+=digitsum(i);
            }
            n=n/i;
        }
    }
    cout<<sum<<endl;
    cout<<factor<<endl;
    if(sum==factor){
        cout<<"Boston"<<endl;
    }
    else{
        cout<<"Not Boston"<<endl;
    }
    return 0;
}
```
