---
title: insertion sort
description: Build a sorted prefix by inserting each new value into place.
topics: array, sorting
Difficulty: easy
---


## Insertion Sort

### Description

Build a sorted prefix by inserting each new value into place. Use fundamental array operations and choose a clear step-by-step approach that keeps time and space usage reasonable.

### Input

```text
5
5 1 4 2 8
```

### Output

```text
1 2 4 5 8 
```

### Code

Source: `lectures/Lecture_25/3_insertion_sort.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];

    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
```
