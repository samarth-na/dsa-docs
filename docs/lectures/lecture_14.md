---
title: lecture 14 Prime Checks and Digit Problems
content: "pattern practice, math, number theory, basic programming"
description: This lecture covers Pattern practice; Prime number checking; Math; Number Theory; Basic Programming; Loops; Digit Manipulation.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Pattern practice
- Math
- Number Theory
- Basic Programming
- Loops
- Digit Manipulation

## Description

This lecture covers Pattern practice; Prime number checking; Math; Number Theory; Basic Programming; Loops; Digit Manipulation.

## Questions

### 1. Pattern 4 (Lecture 14)
- Topic: Pattern practice
- Description: Practice item covered in this lecture: Pattern 4 (Lecture 14).
- Output:
```text
1 1 1 1 1
1 2 3 4 1
1 3 6 3 1
1 4 3 2 1
1 1 1 1 1
```
- Code: `lectures/Lecture_14/1_4_pattern.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
1 1 1 1 1
1 2 3 4 1
1 3 6 3 1
1 4 3 2 1
1 1 1 1 1
*/

int main() {
    int n;
    cin>>n;
    int m=n-1;
    int a[n][n];
    for(int i=m;i>=0;i--){
        int idx=m-i;
        for(int j= 0;j<=i;j++ ){
            if(j==0 or i==m){
                a[idx][j]=1;
            }
            else{
                int val1=a[idx-1][j];
                int val2=a[idx][j-1];
                a[idx][j]=val1+val2;
            }
        }
        int idex=i;
        for(int j=m;j>=m-i+1;j-- ){
            if(j==m or i==m){
                a[idex][j]=1;
            }
            else{
                int val1=a[idex+1][j];
                int val2=a[idex][j+1];
                a[idex][j]=val1+val2;
            }
        }
    }
    // print 
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 2. Prime Number Check
- Topic: Math, Number Theory
- Description: Test primality with the straightforward divisor check.
- Output: Prints whether the number is prime.
- Code: `lectures/Lecture_14/2_prime_number_standard.cpp`
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

### 3. Prime Number Check (Optimized)
- Topic: Math, Number Theory
- Description: Check primality with a reduced set of candidate divisors.
- Output: Prints whether the number is prime.
- Code: `lectures/Lecture_14/3_prime_number_optimization.cpp`
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

### 4. Prime Number Check (More Optimized)
- Topic: Pattern practice
- Description: Practice item covered in this lecture: Prime Number Check (More Optimized).
- Output: Prints whether the number is prime.
- Code: `lectures/Lecture_14/4_prime_number_more_optimization.cpp`
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

### 5. Reverse a Number
- Topic: Basic Programming, Loops, Digit Manipulation, Math
- Description: Reverse the digits of an integer.
- Output: Prints the reversed number if it satisfies the problem conditions.
- Code: `lectures/Lecture_14/5_reverse_digit.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int rev=0;
    while(n!=0){
        int k=n%10;
        rev=rev*10+k;
        n/=10;
    }
    cout<<rev<<endl;
    return 0;
}
```

### 6. Sum of Digits
- Topic: Basic Programming, Loops, Digit Manipulation, Math
- Description: Add all digits of an integer.
- Output: Prints the computed sum.
- Code: `lectures/Lecture_14/6_sum_digits.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int rev=0;
    while(n!=0){
        int k=n%10;
        rev=rev+k;
        n/=10;
    }
    cout<<abs(rev)<<endl;
    return 0;
}
```
