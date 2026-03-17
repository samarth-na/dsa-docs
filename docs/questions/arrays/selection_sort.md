---
title: selection sort
description: Sort an array by repeatedly choosing the minimum remaining element.
topics: array, sorting
Difficulty: easy
---


## Selection Sort

### Description

Sort an array by repeatedly choosing the minimum remaining element. Use fundamental array operations and choose a clear step-by-step approach that keeps time and space usage reasonable.

### Input

```text
5
5 1 4 2 8
```

### Output

```text
Sorted array through selection sort
1 2 4 5 8 
```

### Code

Source: `lectures/Lecture_25/2_selection_sort.cpp`

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
    // selection sort
    for(int i=0;i<n;i++){
        int min=i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        swap(arr[i],arr[min]);
    }
    cout<<"Sorted array through selection sort"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```
