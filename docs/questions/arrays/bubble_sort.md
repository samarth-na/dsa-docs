---
title: bubble sort
description: Sort an array by repeatedly swapping adjacent out-of-order elements.
topics: array, sorting
Difficulty: easy
---


## Bubble Sort

### Description

Sort an array by repeatedly swapping adjacent out-of-order elements. Use fundamental array operations and choose a clear step-by-step approach that keeps time and space usage reasonable.

### Input

```text
5
5 1 4 2 8
```

### Output

```text
Sorted array through bubbble sort
1 2 4 5 8 
```

### Code

Source: `lectures/Lecture_25/1_bubble_sort.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    // bubble sort
    for(int i=0;i<n-1;i++){
        for(int j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }
    cout<<"Sorted array through bubbble sort"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```
