---
title: lecture 18 Arrays Basics
content: "array, c++ basics, searching"
description: This lecture covers Array; C++ Basics; Searching.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Array
- C++ Basics
- Searching

## Description

This lecture covers Array; C++ Basics; Searching.

## Questions

### 1. Array Basics
- Topic: Array, C++ Basics
- Description: Introduces declaration, initialization, traversal, and update of arrays.
- Output: Prints the traversed values that show how the data structure behaves.
- Code: `lectures/Lecture_18/1_array_basic.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    // create
    // first way
    int arr[5]; // by default garbage value hogi aur baad me hum change kar skte hai
    //second way
    arr[0]=1;
    arr[1]=1;
    arr[2]=1;
    arr[3]=1;
    arr[4]=1;
    int arr_b[]={1,2,3,4,5}; // pehle se initialize hai aur baad me change bhi kar kste hai
    //third way
    int n;
    cin>>n;
    int arr_c[n]; // by default garbage and baad me change kar skte hai

    // read
    int s=sizeof(arr_b)/sizeof(int);
    for(int i=0;i<s;i++){
        cout<<arr_b[i]<<" ";
    }
    cout<<endl;
    for(int i=0;i<s;i++){
        cout<<arr[i]<<" ";
    }
    // update
    for(int i=0;i<s;i++){
        arr[i]+=i;
    }
    cout<<endl;
    for(int i=0;i<s;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```

### 2. Maximum Element in Array
- Topic: Array, Searching
- Description: Find the largest element in an array.
- Output: Prints the maximum value.
- Code: `lectures/Lecture_18/2_max_element.cpp`
```cpp
#include <iostream>
#include<climits>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int ans=INT_MIN;
    for(int i=0;i<n;i++){
        if(ans<arr[i]){
            ans=arr[i];
        }
    }
    cout<<ans<<endl;
    return 0;
}
```

### 3. Minimum Element in Array
- Topic: Array, Searching
- Description: Find the smallest element in an array.
- Output: Prints the minimum value.
- Code: `lectures/Lecture_18/3_min_element.cpp`
```cpp
#include <iostream>
#include<climits>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int ans=INT_MAX;
    for(int i=0;i<n;i++){
        if(ans>arr[i]){
            ans=arr[i];
        }
    }
    cout<<ans<<endl;
    return 0;
}
```

### 4. Sum of Array Elements
- Topic: Array
- Description: Compute the total sum of all elements in an array.
- Output: Prints the computed sum.
- Code: `lectures/Lecture_18/4_sum_array.cpp`
```cpp
#include <iostream>
#include<climits>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int ans=0;
    for(int i=0;i<n;i++){
        ans+=arr[i];
    }
    cout<<ans<<endl;
    return 0;
}
```
