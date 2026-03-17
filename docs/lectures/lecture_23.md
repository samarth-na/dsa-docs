---
title: lecture 23 Greedy Digit Transformation
content: "math, digit manipulation, greedy"
description: This lecture covers Chewbacca number problem; Math; Digit Manipulation; Greedy.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Math
- Digit Manipulation
- Greedy

## Description

This lecture covers Chewbacca number problem; Math; Digit Manipulation; Greedy.

## Questions

### 1. Chewbacca Number
- Topic: Math, Digit Manipulation, Greedy
- Description: Transform each digit with 9-digit minimization rules to get the smallest number.
- Output: Prints the minimized number after digit transformation.
- Code: `lectures/Lecture_23/1_chewbacca_number.cpp`
```cpp
#include <iostream>
using namespace std;
int reve(int n){
    int rev=0;
    while(n!=0){
        int k=n%10;
        rev=rev*10+k;
        n=n/10;
    }
    return rev;
}
int len(int n){
    int ans=0;
    while(n!=0){
        n=n/10;
        ans++;
    }
    return ans;
}
int main() {
    int n;
    cin>>n;
    int rev=1;
    int l=len(n);
    while(n!=0){
        int k=n%10;
        int inv=9-k;
        if(l==1 and k==9){
            rev=rev*10+k;
            l--;
        }
        if(inv<k){
            rev=rev*10+inv;
            l--;
        }
        else{
            rev=rev*10+k;
            l--;
        }
        n=n/10;
    }
    cout<<reve(rev)/10<<endl;
    return 0;
}
```
