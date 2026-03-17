---
title: lecture 17 Advanced Patterns and First LeetCode Problem
content: "pattern, loops, math, leetcode"
description: This lecture covers Pattern; Loops; Math; LeetCode.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Pattern
- Loops
- Math
- LeetCode

## Description

This lecture covers Pattern; Loops; Math; LeetCode.

## Questions

### 1. Pascal Triangle Pattern
- Topic: Pattern, Loops, Math
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
```text
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
```
- Code: `lectures/Lecture_17/1_Pascal_triangle.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/

int main() {
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        int val=1;
        for(int j=0;j<=i;j++){
            cout<<val<<" ";
            val=val*(i-j)/(j+1);
        }
        cout<<endl;
    }
    return 0;
}
```

### 2. Swastik Pattern
- Topic: Pattern, Loops
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
```text
*  ****
*  *
*  *
*******
   *  *
   *  *
****  *
```
- Code: `lectures/Lecture_17/2_swastik.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
7

Sample output:
*  ****
*  *
*  *
*******
   *  *
   *  *
****  *
*/

int main() {
    int n;
    cin>>n;
    int m=(n+1)/2;
    for(int i=1;i<=m;i++){
        if(i==1){
            cout<<"*";
            for(int j=1;j<=m-2;j++){
                cout<<" ";
            }
            for(int j=1;j<=m;j++){
                cout<<"*";
            }
        }
        else if(i==m){
            for(int j=1;j<=n;j++){
                cout<<"*";
            }
        }
        else{
            cout<<"*";
            for(int j=1;j<=m-2;j++){
                cout<<" ";
            }
            cout<<"*";
            for(int j=1;j<=m-1;j++){
                cout<<" ";
            }
        }
        cout<<endl;
    }
    for(int i=m-1;i>=1;i--){
        if(i==1){
            for(int j=1;j<=m;j++){
                cout<<"*";
            }
            for(int j=1;j<=m-2;j++){
                cout<<" ";
            }
            cout<<"*";  
        }
        else{
            for(int j=1;j<=m-1;j++){
                cout<<" ";
            }
            cout<<"*";
            for(int j=1;j<=m-2;j++){
                cout<<" ";
            }
            cout<<"*";
            
        }
        cout<<endl;
    }
    return 0;
}
```

### 3. LeetCode 7 - Reverse Integer
- Topic: LeetCode
- Description: Practice problem from LeetCode: Reverse Integer.
- Link: https://leetcode.com/problems/reverse-integer/
- Output: Prints the reversed number if it satisfies the problem conditions.
- Code: `lectures/LeetCode/7.cpp`
```cpp
#include <iostream>
#include<climits>
using namespace std;
int reverse(int x) {
    int ans=0;
    while(x!=0){
        int k=x%10;
        if((ans>INT_MAX/10)or (ans<INT_MIN/10)){
            return 0;
        }
        ans=ans*10+k;
        x=x/10;
    }
    return ans;
}
int main() {
    int n=982;
    cout<<reverse(n)<<endl;
    return 0;
}
```
