## LeetCode 88 - Merge Sorted Array

### Question
LeetCode 88 - Merge Sorted Array

### Description

Merge two sorted arrays into the first array in place. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Two Pointers, Sorting

### Difficulty
Easy

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
Merged array: 1 2 2 3 5 6 
```

### Code
Source: `lectures/LeetCode/88.cpp`

```cpp
#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int i = m - 1;
    int j = n -1;
    int k = m + n -1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

int main() {
    vector<int> nums1 = {1,2,3,0,0,0};
    int m = 3;
    vector<int> nums2 = {2,5,6};
    int n = 3;
    
    merge(nums1, m, nums2, n);
    
    cout << "Merged array: ";
    for (int val : nums1) {
        cout << val << " ";
    }
    cout << endl;
    
    return 0;
}
```
