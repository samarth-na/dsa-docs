---
title: wave print by column
description: Traverse a matrix column by column in alternating directions.
topics: matrix, array
Difficulty: easy
---


## Wave Print By Column

### Description

Traverse a matrix column by column in alternating directions. Traverse rows and columns carefully, keeping index boundaries and output order correct.

### Input

```text
3 3
1 2 3
4 5 6
7 8 9
```

### Output

```text
1 4 7 8 5 2 3 6 9 
```

### Code

Source: `lectures/Lecture_31/1_wave_print_column.cpp`

```cpp
#include <iostream>
#include<vector>
using namespace std;

int main() {
    int r,c;
    cin>>r>>c;
    vector<vector<int>> arr(r,vector<int>(c));
    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            cin>>arr[i][j];
        }
    }
    for(int j=0;j<c;j++){
        if(j%2!=0){
            for(int i=r-1;i>=0;i--){
                cout<<arr[i][j]<<" ";
            }
        }
        else{
            for(int i=0;i<r;i++){
                cout<<arr[i][j]<<" ";
            }
        }
    }
    return 0;
}
```
