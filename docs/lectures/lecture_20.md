---
title: lecture 20 Number Theory Practice
content: "math, digit manipulation, number theory, leetcode"
description: This lecture covers Special number classification; Prime factors and digit sums; LeetCode factor problem; Math; Digit Manipulation; Number Theory; LeetCode.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Math
- Digit Manipulation
- Number Theory
- LeetCode

## Description

This lecture covers Special number classification; Prime factors and digit sums; LeetCode factor problem; Math; Digit Manipulation; Number Theory; LeetCode.

## Questions

### 1. Armstrong Number
- Topic: Math, Digit Manipulation
- Description: Check whether a number equals the sum of powers of its digits.
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/Lecture_20/1_armstrong_number.cpp`
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

### 2. Boston Number
- Topic: Math, Number Theory, Digit Manipulation
- Description: Compare digit sum with prime factor digit sums to classify a Boston number.
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/Lecture_20/2_boston_number.cpp`
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

### 3. LeetCode 1492 - The Kth Factor of N
- Topic: LeetCode
- Description: Practice problem from LeetCode: The Kth Factor of N.
- Link: https://leetcode.com/problems/the-kth-factor-of-n/
- Output: Prints or returns the required index or search result.
- Code: `lectures/LeetCode/1492.cpp`
```cpp
#include <iostream>
using namespace std;
int kthFactor(int n, int k) {
    int cnt=0;
    for(int i=1;i<=n;i++){
        if(n%i==0){
            cnt++;
            if(cnt==k){
                return i;
            }
        }
    }
    return -1;
}
int main() {
    int n;
    cin>>n;
    int k;
    cin>>k;
    cout<<kthFactor(n,k)<<endl;
    return 0;
}
```
