---
title: lecture 28 Array Manipulation LeetCode Set
content: "leetcode, array, two pointers, binary search"
description: This lecture covers In-place array editing; LeetCode; Array; Two Pointers; Binary Search; Math.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- LeetCode
- Array
- Two Pointers
- Binary Search
- Math

## Description

This lecture covers In-place array editing; LeetCode; Array; Two Pointers; Binary Search; Math.

## Questions

### 1. LeetCode 27 - Remove Element
- Topic: LeetCode, Array, Two Pointers
- Description: Remove all instances of a target value in place.
- Link: https://leetcode.com/problems/remove-element/
- Output: Prints or returns the updated array representation after the in-place operation.
- Code: `lectures/LeetCode/27.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
int removeElement(vector<int>& nums, int val) {
    int index = 0;
    for(int i = 0; i< nums.size(); i++){
        if(nums[i] != val){
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}
int main() {
    vector<int> nums={1,2,3,4,5,6,6,6,7};
    int val=2;
    cout<<removeElement(nums,val)<<endl;
    return 0;
}
```

### 2. LeetCode 189 - Rotate Array
- Topic: LeetCode, Array, Two Pointers
- Description: Rotate an array to the right by k positions.
- Link: https://leetcode.com/problems/rotate-array/
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/LeetCode/189.cpp`
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
void rotate(vector<int>& nums, int k) {
    int n=nums.size();
    k=k%n;
    reverse(nums.begin(),nums.end());
    //aakhri K elments aage chahiye
    reverse(nums.begin(),nums.begin()+k);
    //aage ke elements shift  ho jaaye
    // yah joh bache elements unka reverse kardo
    reverse(nums.begin()+k,nums.end());
    return;
}
int main() {
    vector<int> nums = {1,2,3,4,5,6,7};
    int k = 3;
    rotate(nums, k);
    for(int val : nums) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}
```

### 3. LeetCode 2529 - Maximum Count of Positive Integer and Negative Integer
- Topic: LeetCode, Array, Binary Search
- Description: Count positive and negative values and return the larger count.
- Link: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
- Output: Count positive and negative values and return the larger count.
- Code: `lectures/LeetCode/2529.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
int maximumCount(vector<int>& nums) {
    int p=0,n=0;
    for(int i=0;i<nums.size();i++){
        if(nums[i]>0){
            p++;
        }
        else if(nums[i]<0){
            n++;
        }
    }
    return max(p,n);
}
int main() {
    vector<int> nums={-3,-3,2,2,7,8,9};
    cout<<maximumCount(nums)<<endl;
    return 0;
}
```

### 4. LeetCode 169 - Majority Element
- Topic: LeetCode, Array, Math
- Description: Return the element that appears more than n/2 times.
- Link: https://leetcode.com/problems/majority-element/
- Output: Return the element that appears more than n/2 times.
- Code: `lectures/LeetCode/169.cpp`
```cpp
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
int majorityElement(vector<int>& nums) {
    sort(nums.begin(),nums.end());
    return nums[nums.size()/2];
}
int main() {
    vector<int> nums={1,2,3,4,1,1,1,1,2,3,4,1,1,1,2};
    cout<<majorityElement(nums)<<endl;
    return 0;
}
```

### 5. LeetCode 238 - Product of Array Except Self
- Topic: LeetCode, Array
- Description: Build the product for each index without using the value at that index.
- Link: https://leetcode.com/problems/product-of-array-except-self/
- Output: Build the product for each index without using the value at that index.
- Code: `lectures/LeetCode/238.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;
vector<int> productExceptSelf(vector<int>& nums) {
    int n=nums.size();
    vector<int> leftproduct(n,1);
    vector<int> rightproduct(n,1);
    vector<int> ans(n);
    //left product calculate karna hai
    for(int i=1;i<n;i++){
        leftproduct[i]=leftproduct[i-1]*nums[i-1];
    }
    //rightproduct calculate karna hai
    for(int i=n-2;i>=0;i--){
        rightproduct[i]=rightproduct[i+1]*nums[i+1];
    }
    //final answer nikalo
    for(int i=0;i<n;i++){
        ans[i]=leftproduct[i]*rightproduct[i];
    }
    return ans;

}
int main() {
    vector<int> nums = {1,2,3,4};
    vector<int> ans = productExceptSelf(nums);
    for(int val : ans) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}
```
