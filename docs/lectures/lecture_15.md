---
title: lecture 15 Fibonacci and Base Conversion
content: "recursion, math, loops, pattern"
description: This lecture covers Fibonacci number generation; Fibonacci pattern printing; Binary and decimal conversion; Recursion; Math; Loops; Pattern; Base Conversion.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Recursion
- Math
- Loops
- Pattern
- Base Conversion
- Digit Manipulation

## Description

This lecture covers Fibonacci number generation; Fibonacci pattern printing; Binary and decimal conversion; Recursion; Math; Loops; Pattern; Base Conversion.

## Questions

### 1. Fibonacci Number
- Topic: Recursion, Math
- Description: Compute the nth Fibonacci number recursively.
- Output: Compute the nth Fibonacci number recursively.
- Code: `lectures/Lecture_15/1_fibbonacci.cpp`
```cpp
#include <iostream>
using namespace std;
int fibbo(int g){
    //base case
    if(g==0 or g==1){
        return g;
    }
    return fibbo(g-1)+fibbo(g-2);
}
int main() {
    int n;
    cin>>n;
    cout<<fibbo(n)<<endl;
    return 0;
}
```

### 2. Fibonacci Series
- Topic: Loops, Math
- Description: Print or generate the Fibonacci sequence up to the requested count.
- Output: Prints the requested sequence in order.
- Code: `lectures/Lecture_15/2_fibbonacci_series.cpp`
```cpp
#include <iostream>
using namespace std;
int fibbo(int g){
    //base case
    if(g==0 or g==1){
        return g;
    }
    return fibbo(g-1)+fibbo(g-2);
}
int main() {
    int n;
    cin>>n;
    for(int i=0;i<=n-1;i++){
        cout<<fibbo(i)<<" ";
    }
    
    return 0;
}
```

### 3. Fibonacci Pattern
- Topic: Pattern, Loops, Math
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
```text
0
1 1
2 3 5
8 13 21 34
55 89 144 233 377
```
- Code: `lectures/Lecture_15/3_fibbonacci_pattern.cpp`
```cpp
/*
Sample input:
5

Sample output:
0
1 1
2 3 5
8 13 21 34
55 89 144 233 377
*/

#include <iostream>
using namespace std;
int fibbo(int g){
    //base case
    if(g==0 or g==1){
        return g;
    }
    return fibbo(g-1)+fibbo(g-2);
}
int main() {
    int n;
    cin>>n;
    int g=0;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<fibbo(g)<<" ";
            g++;
        }
        cout<<endl;
    }
    return 0;
}
```

### 4. Decimal to Binary
- Topic: Math, Base Conversion, Digit Manipulation
- Description: Convert a decimal number into its binary representation.
- Output: Prints the converted or transformed numeric result.
- Code: `lectures/Lecture_15/4_decimal_to_binary.cpp`
```cpp
#include <iostream>
using namespace std;
int rev(int n){
    int rev=0;
    while(n!=0){
        int k=n%10;
        rev=rev*10+k;
        n=n/10;
    }
    return rev;
}
int main() {
    int n;
    cin>>n;
    int bn=1;
    while(n>0){
        int k=n%2;
        bn=bn*10+k;
        n=n/2;
    }
    cout<<rev(bn)/10<<endl;
    return 0;
}
```

### 5. Binary to Decimal
- Topic: Math, Base Conversion, Digit Manipulation
- Description: Convert a binary number into decimal form.
- Output: Prints the converted or transformed numeric result.
- Code: `lectures/Lecture_15/5_binary_to_decimal.cpp`
```cpp
#include <iostream>
#include<cmath>
using namespace std;

int main() {
    int n;
    cin>>n;
    int sum=0;
    int g=0;
    while(n>0){
        int k=n%10;
        sum=sum+k*pow(2,g);
        n=n/10;
        g++;
    }
    cout<<sum<<endl;
    return 0;
}
```
