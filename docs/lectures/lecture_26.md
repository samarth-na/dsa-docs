---
title: lecture 26 Mixed Array and Math LeetCode Set
content: "leetcode, array, dynamic programming, math"
description: This lecture covers Array practice from LeetCode; Math-based gcd factor question; LeetCode; Array; Dynamic Programming; Math; Simulation; Binary Search.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- LeetCode
- Array
- Dynamic Programming
- Math
- Simulation
- Binary Search
- Prefix Sum
- Number Theory

## Description

This lecture covers Array practice from LeetCode; Math-based gcd factor question; LeetCode; Array; Dynamic Programming; Math; Simulation; Binary Search.

## Questions

### 1. LeetCode 53 - Maximum Subarray
- Topic: LeetCode, Array, Dynamic Programming
- Description: Find the contiguous subarray with the maximum sum.
- Link: https://leetcode.com/problems/maximum-subarray/
- Output: Find the contiguous subarray with the maximum sum.
- Code: `lectures/LeetCode/53.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
int maxSubArray(vector<int>& nums) {
    int currentsum=0;
    int maxsum=nums[0];
    for(int i=0;i<nums.size();i++){
        currentsum+=nums[i];
        if(currentsum>maxsum){
            maxsum=currentsum;
        }
        if(currentsum<0){
            currentsum=0;
        }
    }
    return maxsum;
}
int main() {
    vector<int> nums={2,1,-3,4,1,-1,2,1,-4,5};
    cout<<maxSubArray(nums)<<endl;
    return 0;
}
```

### 2. LeetCode 66 - Plus One
- Topic: LeetCode, Array, Math, Simulation
- Description: Add one to a large integer stored as an array of digits.
- Link: https://leetcode.com/problems/plus-one/
- Output: Prints or returns the updated array representation after the in-place operation.
- Code: `lectures/LeetCode/66.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;
vector<int> plusOne(vector<int>& digits) {
        for(int i=digits.size()-1;i>=0;i--){
            if(digits[i]<9){
                digits[i]++;
                return digits;
            }
            digits[i]=0;
        }
        digits.insert(digits.begin(),1);
        return digits;
    }
int main() {
    vector<int> digits = {1,2,3};
    vector<int> result = plusOne(digits);
    for(int val : result) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}
```

### 3. LeetCode 704 - Binary Search
- Topic: LeetCode, Array, Binary Search
- Description: Find a target index in a sorted array with binary search.
- Link: https://leetcode.com/problems/binary-search/
- Output: Prints the converted or transformed numeric result.
- Code: `lectures/LeetCode/704.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
int search(vector<int>& nums, int target) {
    int start=0;
    int end=nums.size()-1;
    while(start<=end){
        int mid=start+(end-start)/2;
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return -1;
}
int main() {
    vector<int> nums={2,3,4,5,6,7,8,9};
    int target=6;
    cout<<search(nums,target)<<endl;
    return 0;
}
```

### 4. LeetCode 724 - Find Pivot Index
- Topic: LeetCode, Array, Prefix Sum
- Description: Return the index where left sum and right sum are equal.
- Link: https://leetcode.com/problems/find-pivot-index/
- Output: Prints or returns the required index or search result.
- Code: `lectures/LeetCode/724.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;
int pivotIndex(vector<int>& nums) {
    int total=0;
    for(int i=0;i<nums.size();i++){
        total+=nums[i];
    }
    int leftsum=0;
    for(int i=0;i<nums.size();i++){
        int rightsum=total-leftsum-nums[i];
        if(leftsum==rightsum){
            return i;
        }
        leftsum+=nums[i];
    }
    return -1;
}
int main() {
    vector<int> nums={2,3,5,8,9,1,4,5,10};
    cout<<pivotIndex(nums)<<endl;
    return 0;
}
```

### 5. LeetCode 1991 - Find the Middle Index in Array
- Topic: LeetCode, Array, Prefix Sum
- Description: Return an index whose left and right sums are equal.
- Link: https://leetcode.com/problems/find-the-middle-index-in-array/
- Output: Prints or returns the required index or search result.
- Code: `lectures/LeetCode/1991.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
int findMiddleIndex(vector<int>& nums) {
    int total=0;
    for(int i=0;i<nums.size();i++){
        total+=nums[i];
    }
    int leftsum=0;
    for(int i=0;i<nums.size();i++){
        int rightsum=total-leftsum-nums[i];
        if(leftsum==rightsum){
            return i;
        }
        leftsum+=nums[i];
    }
    return -1;
}
int main() {
    vector<int> nums={2,3,4,5,7,8,1,2,3};
    cout<<findMiddleIndex(nums)<<endl;
    return 0;
}
```

### 6. LeetCode 3658 - GCD of Odd and Even Sums
- Topic: LeetCode, Math, Number Theory
- Description: Compute a gcd value derived from odd and even sums.
- Link: https://leetcode.com/problems/gcd-of-odd-and-even-sums/
- Output: Prints the greatest common divisor for the inputs.
- Code: `lectures/LeetCode/3658.cpp`
```cpp
#include <iostream>
using namespace std;
int gcdOfOddEvenSums(int n) {
    return n;
}
int main() {
    int n;
    cin>>n;
    cout<<gcdOfOddEvenSums(n)<<endl;
    return 0;
}
```
