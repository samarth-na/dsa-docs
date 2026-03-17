---
title: "lecture 29 Merging, Greedy, and Harder Array Problems"
content: "array, two pointers, sorting, leetcode"
description: This lecture covers Merging sorted arrays; Gas station greedy reasoning; Harder LeetCode array problems; Array; Two Pointers; Sorting; LeetCode; Greedy.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Array
- Two Pointers
- Sorting
- LeetCode
- Greedy
- Binary Search

## Description

This lecture covers Merging sorted arrays; Gas station greedy reasoning; Harder LeetCode array problems; Array; Two Pointers; Sorting; LeetCode; Greedy.

## Questions

### 1. Merge Two Sorted Arrays
- Topic: Array, Two Pointers, Sorting
- Description: Merge two sorted arrays into one sorted result.
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/Lecture_29/1_merged_array.cpp`
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

### 2. LeetCode 134 - Gas Station
- Topic: LeetCode, Array, Greedy
- Description: Find the start station that allows completing the circular route.
- Output: Find the start station that allows completing the circular route.
- Code: `lectures/Lecture_29/2_gas_station.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;
int startStation(vector<int> gas,vector<int> cost){
    int total=0;
    int bachihuigas=0;
    int ans=0;
    for(int i=0;i<gas.size();i++){
        total+=(gas[i]-cost[i]);
        bachihuigas+=(gas[i]-cost[i]);
        if(bachihuigas<0){
            bachihuigas=0;
            ans=i+1;
        }
    }
    if(total>=0){
        return ans;
    }
    return -1;
}
int main() {
    
    return 0;
}
```

### 3. LeetCode 4 - Median of Two Sorted Arrays
- Topic: LeetCode, Array, Binary Search
- Description: Find the median of two sorted arrays in logarithmic-style search.
- Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/4.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
vector<int> merge(vector<int>& nums1, vector<int>& nums2){
    vector<int> nums;
    //merging two sorted lists to nums 
    int i=0;
    int j=0;

    int n = nums1.size();
    int m = nums2.size();

    while(i<n && j<m){
        if(nums1[i]<=nums2[j]){
            nums.push_back(nums1[i]);
            i++;
        }
        else if(nums1[i]>nums2[j]){
            nums.push_back(nums2[j]);
            j++;
        }
    }

    while(i<n){
        nums.push_back(nums1[i]);
        i++;
    }

    while(j<m){
        nums.push_back(nums2[j]);
        j++;
    }

    return nums;
}

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    double median = 0;
    vector<int> nums = merge(nums1,nums2);
    int s = nums.size();
    
    //finding middle value then median
    if(s%2!=0){
        int mid = s/2;
        median = nums[mid];
    }
    else{
        int mid1 = s/2;
        int mid2 = (s/2)-1;
        median = (double)(nums[mid1] + nums[mid2])/2; //making ek operand double varna 2 ayega instead of 2.5, integer division and double division 
    }

    return median;
}
int main() {
    vector<int> nums1 = {1, 3};
    vector<int> nums2 = {2};
    cout << findMedianSortedArrays(nums1, nums2) << endl;
    return 0;
}
```

### 4. LeetCode 42 - Trapping Rain Water
- Topic: LeetCode, Array, Two Pointers
- Description: Compute how much water can be trapped between elevation bars.
- Link: https://leetcode.com/problems/trapping-rain-water/
- Output: Compute how much water can be trapped between elevation bars.
- Code: `lectures/LeetCode/42.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
int trap(vector<int>& height) {
    int n = height.size();
    int left = 0 , right = n-1;
    int answer = 0;
    int rightmax = 0 , leftmax = 0;
    while(left<right){
        if(height[left]<=height[right]){
            if(leftmax>=height[left]){
                answer+=leftmax-height[left];
            }
            else{
                leftmax=height[left];
            }
            left++;
        }
        else{
            if(rightmax>=height[right]){
                answer+=rightmax-height[right];
            }
            else{
                rightmax=height[right];
            }
            right--;
        }
    }
    return answer;
}
int main() {
    vector<int> height = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << trap(height) << endl;
    return 0;
}
```

### 5. LeetCode 75 - Sort Colors
- Topic: LeetCode, Array, Two Pointers, Sorting
- Description: Sort an array of 0s, 1s, and 2s in one pass.
- Link: https://leetcode.com/problems/sort-colors/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/75.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
void sortColors(vector<int>& nums) {
    int n=nums.size();
    for(int i=0;i<n-1;i++){
        for(int j=0;j<n-i-1;j++){
            if(nums[j]>nums[j+1]){
                swap(nums[j],nums[j+1]);
            }
        }
    }
    return;
}
int main() {
    vector<int> nums = {2,0,2,1,1,0};
    sortColors(nums);
    for(int val : nums) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}
```

### 6. LeetCode 896 - Monotonic Array
- Topic: LeetCode, Array
- Description: Check whether the array is entirely non-decreasing or non-increasing.
- Link: https://leetcode.com/problems/monotonic-array/
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/LeetCode/896.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
bool isMonotonic(vector<int>& nums) {
    bool increasing = true;
    bool decreasing = true;

    for (int i = 1; i < nums.size(); ++i) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }

        if (!increasing && !decreasing) {
            return false;
        }
    }
    return true;
}
int main() {
    vector<int> nums={1,2,2,3};
    cout<<isMonotonic(nums)<<endl;
    return 0;
}
```
