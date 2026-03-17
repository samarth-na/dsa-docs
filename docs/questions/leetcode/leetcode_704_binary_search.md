## LeetCode 704 - Binary Search

### Question
LeetCode 704 - Binary Search

### Description

Find a target index in a sorted array with binary search. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Binary Search

### Difficulty
Easy

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
4
```

### Code
Source: `lectures/LeetCode/704.cpp`

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
