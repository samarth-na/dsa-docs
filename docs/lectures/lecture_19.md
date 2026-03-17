---
title: lecture 19 Vectors and Searching
content: "array, searching, vector"
description: This lecture covers Vector basics; Array; Searching; Vector.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Array
- Searching
- Vector

## Description

This lecture covers Vector basics; Array; Searching; Vector.

## Questions

### 1. Find Value in Vector
- Topic: Array, Searching
- Description: Search for a target value in a vector.
- Output: Prints or returns the required index or search result.
- Code: `lectures/Lecture_19/1_find_value.cpp`
```cpp
#include <iostream>
using namespace std;
// linear search
int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int value=19;
    for(int i=0;i<n;i++){
        if(arr[i]==value){
            cout<<i+1<<endl;
        }
    }
    return 0;
}
```

### 2. Vector Basics
- Topic: Vector, Array
- Description: Demonstrates basic vector operations such as push, pop, insert, reverse, and sort.
- Output: Prints the traversed values that show how the data structure behaves.
- Code: `lectures/Lecture_19/2_vector_basic.cpp`
```cpp
#include <iostream>
#include<algorithm>
#include<vector>
using namespace std;

int main() {
    // initialization
    vector<int> a;

    // updation
    a.push_back(1);
    a.push_back(2);
    a.push_back(3);
    a.push_back(4);
    a.push_back(5);
    a.pop_back();
    cout<<a.size()<<endl;
    cout<<a.capacity()<<endl;
    // print
    for(int i=0;i<a.size();i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
    cout<<a.front()<<endl;
    cout<<a.back()<<endl;

    reverse(a.begin(),a.end());
    sort(a.begin(),a.end());

    // value insert
    a.insert(a.end()-1,6);
    for(int i=0;i<a.size();i++){
        cout<<a[i]<<" ";
    }
    
    cout<<endl;
    int n=5;
    vector<int> arr(n,1);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```
