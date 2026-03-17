---
title: matrix multiplication
description: Combine two matrices to produce a result matrix.
topics: matrix, math
Difficulty: medium
---


## Matrix Multiplication

### Description

Combine two matrices to produce a result matrix. Traverse rows and columns carefully, keeping index boundaries and output order correct.

### Input

```text
2 2
1 2
3 4
5 6
7 8
```

### Output

```text
5 12
21 32
```

### Code

Source: `lectures/Lecture_37/2_matrix_multiplication.cpp`

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n,m;
    cin>>n>>m;
    vector<vector<int>> a(n,vector<int>(m));
    vector<vector<int>> b(n,vector<int>(m));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>a[i][j];
        }
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>b[i][j];
        }
    }
    vector<vector<int>> c(n,vector<int>(m));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            c[i][j]=a[i][j]*b[i][j];
        }
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cout<<c[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```
