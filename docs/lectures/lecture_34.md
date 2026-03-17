---
title: lecture 34 Homework Assignment Day
content: "leetcode, array, two pointers, sorting"
description: This lecture covers LeetCode; Array; Two Pointers; Sorting.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- LeetCode
- Array
- Two Pointers
- Sorting

## Description

This lecture covers LeetCode; Array; Two Pointers; Sorting.

## Questions

### 1. LeetCode 80 - Remove Duplicates from Sorted Array II
- Topic: LeetCode, Array, Two Pointers
- Description: Keep at most two occurrences of each value in a sorted array.
- Note: Listed as homework in the lecture note.
- Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/80.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    int j = 1;
    for (int i = 1; i < nums.size(); i++) {
        if (j == 1 || nums[i] != nums[j - 2]) {
            nums[j++] = nums[i];
        }
    }
    return j;
}
int main() {
    vector<int> nums = {1,1,1,2,2,3};
    int k = removeDuplicates(nums);
    cout << "k = " << k << endl;
    cout << "Array: ";
    for (int i = 0; i < k; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    return 0;
}
```

### 2. LeetCode 88 - Merge Sorted Array
- Topic: LeetCode, Array, Two Pointers, Sorting
- Description: Merge two sorted arrays into the first array in place.
- Note: Listed as homework in the lecture note.
- Link: https://leetcode.com/problems/merge-sorted-array/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/88.cpp`
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

### 3. LeetCode 167 - Two Sum II
- Topic: LeetCode, Array, Two Pointers
- Description: Find two indices in a sorted array whose values sum to the target.
- Note: Listed as homework in the lecture note.
- Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
- Output: Prints or returns the required indices or combinations that satisfy the target condition.
- Code: `lectures/LeetCode/167.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0;
    int right = numbers.size() - 1;
    
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        
        if (sum == target) {
            return {left + 1, right + 1};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return {};
}

int main() {
    vector<int> numbers = {2,7,11,15};
    int target = 9;
    
    vector<int> result = twoSum(numbers, target);
    
    cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    
    return 0;
}
```
