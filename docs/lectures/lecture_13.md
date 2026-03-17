---
title: lecture 13 Functions Practice with GCD
content: "functions, math, number theory"
description: This lecture covers Calling helper functions; Functions; Math; Number Theory.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Functions
- Math
- Number Theory

## Description

This lecture covers Calling helper functions; Functions; Math; Number Theory.

## Questions

### 1. Calling Function Demo
- Topic: Functions
- Description: Demonstrates how to call a helper function with arguments.
- Output: Prints the return values or greetings produced by the example functions.
- Code: `lectures/Lecture_13/1_calling_function.cpp`
```cpp
#include <iostream>
using namespace std;
int add(int a,int b){
    return a+b;
}
int main() {
    int a=5;
    int b=10;
    cout<<add(a,b);
    return 0;
}
```

### 2. GCD Brute Force
- Topic: Math, Number Theory
- Description: Find the greatest common divisor by checking factors directly.
- Output: Prints the greatest common divisor for the inputs.
- Code: `lectures/Lecture_13/2_gcd_brute_force.cpp`
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

### 3. GCD Reverse Brute Force
- Topic: Math, Number Theory
- Description: Scan downward from the smaller number to find the GCD.
- Output: Prints the greatest common divisor for the inputs.
- Code: `lectures/Lecture_13/3_gcd_reverse_brute_force.cpp`
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

### 4. GCD Using Euclidean Algorithm
- Topic: Math, Number Theory
- Description: Use repeated remainder reduction to compute the GCD efficiently.
- Output: Prints the greatest common divisor for the inputs.
- Code: `lectures/Lecture_13/4_EA_gcd.cpp`
```cpp
#include <iostream>
using namespace std;
int gcd(int a,int b){
    while(b!=0){
        int t=a%b;
        a=b;
        b=t;
    }
    return a;
}
// normal way
int main() {
    int a,b;
    cin>>a>>b;
    while(b!=0){
        int t=a%b;
        a=b;
        b=t;
    }
    cout<<a<<endl;
    cout<<gcd(a,b);
    return 0;
}
```

### 5. GCD Using STL
- Topic: Math, Number Theory
- Description: Use the standard library gcd helper to compute the answer.
- Output: Prints the greatest common divisor for the inputs.
- Code: `lectures/Lecture_13/5_gcd_stl.cpp`
```cpp
#include <iostream>
// __gcd()
#include<algorithm>
// -infinity and +infinity
#include<climits>
using namespace std;

int main() {
    int c=INT_MAX; //+infinty
    int d=INT_MIN; // -infinity
    int a=5;
    int b=10;
    cout<<__gcd(a,b);
    return 0;
}
```
