---
title: lecture 36 Character Arrays and More LeetCode
content: "string, character array, leetcode, array"
description: This lecture covers Character array basics; String; Character Array; LeetCode; Array; Two Pointers; Greedy.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- String
- Character Array
- LeetCode
- Array
- Two Pointers
- Greedy

## Description

This lecture covers Character array basics; String; Character Array; LeetCode; Array; Two Pointers; Greedy.

## Questions

### 1. Character Array Basics
- Topic: String, Character Array
- Description: Introduces character array input, traversal, and fixed-size character storage.
- Output: Prints the entered character array followed by the hard-coded character array traversal.
- Code: `lectures/Lecture_36/1_character_array_basic.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int c;
    cin>>c;
    // user input
    char arr[c];
    for(int i=0;i<c;i++){
        cin>>arr[i];
    }
    // traversing
    for(int i=0;i<c;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    // normal character array
    char a[]={'q','w','e','r','t'};
    //size of array
    int n=sizeof(a)/sizeof(char);

    // traversing
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    return 0;
}
```

### 2. LeetCode 283 - Move Zeroes
- Topic: LeetCode, Array, Two Pointers
- Description: Move all zeroes to the end while keeping non-zero order.
- Link: https://leetcode.com/problems/move-zeroes/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/283.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
void moveZeroes(vector<int>& nums) {
    int j=0;
    for(int i=0;i<nums.size();i++){
        if(nums[i]!=0){
            swap(nums[i],nums[j]);
            j++;
        }
    }
}
int main() {
    vector<int> nums={1,0,3,0,12};
    moveZeroes(nums);
    for(int i=0;i<nums.size();i++){
        cout<<nums[i]<<" ";
    }
    return 0;
}
```

### 3. LeetCode 31 - Next Permutation
- Topic: LeetCode, Array, Two Pointers, Greedy
- Description: Rearrange numbers into the next lexicographically greater permutation.
- Link: https://leetcode.com/problems/next-permutation/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/31.cpp`
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
void nextPermutation(vector<int>& nums) {
    int index=-1;
    int n=nums.size();
    for(int i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index=i;
            break;
        }
    }
    if(index==-1){
        reverse(nums.begin(),nums.end());
        return;
    }
    for(int i=n-1;i>index;i--){
        if(nums[i]>nums[index]){
            swap(nums[i],nums[index]);
            break;
        }
    }
    sort(nums.begin()+index+1,nums.end());
}
int main() {
    vector<int> nums={1,2,3};
    nextPermutation(nums);
    for(int i=0;i<nums.size();i++){
        cout<<nums[i]<<" ";
    }
    return 0;
}
```
