---
title: sum of array elements
description: Compute the total sum of all elements in an array.
topics: array
Difficulty: basic
---


## Sum Of Array Elements

### Description

Compute the total sum of all elements in an array. Use fundamental array operations and choose a clear step-by-step approach that keeps time and space usage reasonable.

### Input

```text
5
1 2 3 4 5
```

### Output

```text
15
```

### Code

Source: `lectures/Lecture_18/4_sum_array.cpp`

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
