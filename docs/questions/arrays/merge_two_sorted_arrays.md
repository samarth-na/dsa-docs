---
title: merge two sorted arrays
description: Merge two sorted arrays into one sorted result.
topics: array, two pointers, sorting
Difficulty: easy
---


## Merge Two Sorted Arrays

### Description

Merge two sorted arrays into one sorted result. Use fundamental array operations and choose a clear step-by-step approach that keeps time and space usage reasonable.

### Input

```text
No stdin input. This source uses hardcoded values in main().
```

### Output

```text
1 2 3 4 5 6 7 8 9 10 
```

### Code

Source: `lectures/Lecture_29/1_merged_array.cpp`

```cpp
#include <iostream>
#include <vector>
using namespace std;
vector<int> merge(vector<int> a,vector<int> b){
    int i=0,j=0;
    int n=a.size();
    int m=b.size();
    vector<int> nums;
    while(i<n and j<m){
        if(a[i]<=b[j]){
            nums.push_back(a[i]);
            i++;
        }
        else if(a[i]>b[j]){
            nums.push_back(b[j]);
            j++;
        }
    }
    while(i<n){
        nums.push_back(a[i]);
        i++;
    }
    while(j<m){
        nums.push_back(b[j]);
        j++;
    }
    return nums;
}
int main() {
    vector<int> a={1,3,6,9,10};
    vector<int> b={2,4,5,7,8};
    vector<int> merge_array=merge(a,b);
    for(int i=0;i<merge_array.size();i++){
        cout<<merge_array[i]<<" ";
    }
    return 0;
}
```
