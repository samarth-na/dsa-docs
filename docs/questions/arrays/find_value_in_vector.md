---
title: find value in vector
description: Search for a target value in a vector.
topics: array, searching
Difficulty: basic
---


## Find Value In Vector

### Description

Search for a target value in a vector. Use fundamental array operations and choose a clear step-by-step approach that keeps time and space usage reasonable.

### Input

```text
5
10 19 7 8 3
```

### Output

```text
2
```

### Code

Source: `lectures/Lecture_19/1_find_value.cpp`

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
