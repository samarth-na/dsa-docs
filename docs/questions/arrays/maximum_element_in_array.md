---
title: maximum element in array
description: Find the largest element in an array.
topics: array, searching
Difficulty: basic
---


## Maximum Element In Array

### Description

Find the largest element in an array. Use fundamental array operations and choose a clear step-by-step approach that keeps time and space usage reasonable.

### Input

```text
5
3 9 1 7 4
```

### Output

```text
9
```

### Code

Source: `lectures/Lecture_18/2_max_element.cpp`

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
