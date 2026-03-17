---
title: lecture 21 Intro Array LeetCode Problems
content: "leetcode, array, hashing, two pointers"
description: This lecture covers LeetCode array basics; LeetCode; Array; Hashing; Two Pointers.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- LeetCode
- Array
- Hashing
- Two Pointers

## Description

This lecture covers LeetCode array basics; LeetCode; Array; Hashing; Two Pointers.

## Questions

### 1. LeetCode 1 - Two Sum
- Topic: LeetCode, Array, Hashing
- Description: Find two indices whose values add up to the target.
- Link: https://leetcode.com/problems/two-sum/
- Output: Prints or returns the required indices or combinations that satisfy the target condition.
- Code: `lectures/LeetCode/1.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;
vector<int> twoSum(vector<int>& nums, int target) {
    for(int i=0;i<nums.size();i++){
        for(int j=i+1;j<nums.size();j++){
            if(nums[i]+nums[j]==target){
                return {i,j};
            }
        }
    }
    return {};
}
int main() {
    vector<int> nums = {2,7,11,15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}
```

### 2. LeetCode 26 - Remove Duplicates from Sorted Array
- Topic: LeetCode, Array, Two Pointers
- Description: Compress a sorted array in place so each value appears once.
- Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/26.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;
int removeDuplicates(vector<int>& nums) {
    int unique=0;
    for(int i=1;i<nums.size();i++){
        if(nums[i]!=nums[unique]){
            unique++;
            nums[unique]=nums[i];
        }
    }
    return unique+1;
}
int main() {
    vector<int> nums = {1,1,2,2,2,3,3,4,4,5};
    int uniqueCount = removeDuplicates(nums);
    cout << "Unique count: " << uniqueCount << endl;
    cout << "Array: ";
    for(int i = 0; i < uniqueCount; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    return 0;
}
```
