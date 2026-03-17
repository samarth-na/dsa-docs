---
title: lecture 9 More Pattern Variations
content: additional pattern-printing exercises
description: This lecture covers Additional pattern-printing exercises.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Additional pattern-printing exercises

## Description

This lecture covers Additional pattern-printing exercises.

## Questions

### 1. Pattern 4 (Lecture 7)
- Topic: Additional pattern-printing exercises
- Description: Practice item covered in this lecture: Pattern 4 (Lecture 7).
- Output:
```text
*               *
* *           * *
* * *       * * *
* * * *   * * * *
* * * * * * * * *
```
- Code: `lectures/Lecture_9/1_pattern_4_lec7.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
*               *
* *           * *
* * *       * * *
* * * *   * * * *
* * * * * * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //left star
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        //spaces
        for(int j=1;j<=2*(n-i)-1;j++){
            cout<<"  ";
        }
        //right star
        if(i!=n){
            for(int j=1;j<=i;j++){
                cout<<"* ";
            }
        }
        else{
            for(int j=1;j<=n-1;j++){
                cout<<"* ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```

### 2. Pattern 5 (Lecture 7)
- Topic: Additional pattern-printing exercises
- Description: Practice item covered in this lecture: Pattern 5 (Lecture 7).
- Output:
```text
* * * * * * * * *
* * * *   * * * *
* * *       * * *
* *           * *
*               *
```
- Code: `lectures/Lecture_9/2_pattern_5_lec7.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * * * * * *
* * * *   * * * *
* * *       * * *
* *           * *
*               *
*/

int main() {
    int n;
    cin>>n;
    for(int i=n;i>=1;i--){
        //left star
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        //spaces
        for(int j=1;j<=2*(n-i)-1;j++){
            cout<<"  ";
        }
        //right star
        if(i!=n){
            for(int j=1;j<=i;j++){
                cout<<"* ";
            }
        }
        else{
            for(int j=1;j<=n-1;j++){
                cout<<"* ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```

### 3. Pattern 1 (Lecture 8)
- Topic: Additional pattern-printing exercises
- Description: Practice item covered in this lecture: Pattern 1 (Lecture 8).
- Output:
```text
* * * * *
    * * * *
        * * *
            * *
                *
            * *
        * * *
    * * * *
* * * * *
```
- Code: `lectures/Lecture_9/3_pattern_1_lec8.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * *
    * * * *
        * * *
            * *
                *
            * *
        * * *
    * * * *
* * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=2*i-2;j++){
            cout<<"  ";
        }
        //stars
        for(int j=1;j<=n-i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        //spaces
        for(int j=1;j<=2*i-2;j++){
            cout<<"  ";
        }
        //stars
        for(int j=1;j<=n-i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```
