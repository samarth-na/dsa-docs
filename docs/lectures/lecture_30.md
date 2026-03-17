---
title: lecture 30 2D Arrays and 2D Vectors
content: "matrix, array, vector"
description: This lecture covers Matrix; Array; Vector; 2D array declaration and traversal.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Matrix
- Array
- Vector

## Description

This lecture covers Matrix; Array; Vector; 2D array declaration and traversal.

## Questions

### 1. 2D Array Basics
- Topic: Matrix, Array
- Description: Introduces 2D array declaration, input, and traversal in C++.
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/Lecture_30/1_2D_array.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int array[][4]={
        {1,2,3,4},
        {5,6,7,8},
        {9,10,11,12},
        {13,14,15,16}
    };
    int row=sizeof(array)/(sizeof(int)*sizeof(int));
    int col=sizeof(array[0])/sizeof(int);
    cout<<row<<endl;
    cout<<col<<endl;
    int b[2][3];
    int c[3][3]={1,2,3,4,5,6,7,8,9};
    int d[3][4]={};
    int n,m;
    cin>>n>>m;
    int e[m][n];
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>e[i][j];
        }
    }
    // traverse yah print
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            cout<<array[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 2. 2D Vector Basics
- Topic: Matrix, Vector
- Description: Shows how to declare a dynamic 2D vector using `vector<vector<int>>`.
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/Lecture_30/2_2D_vector.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;

int main() {
    vector<int> arr;
    int n,m;
    cin>>n>>m;
    vector<vector<int>> a(n,vector<int>(m));
    return 0;
}
```
