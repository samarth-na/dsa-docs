## LeetCode 2529 - Maximum Count of Positive Integer and Negative Integer

### Question
LeetCode 2529 - Maximum Count of Positive Integer and Negative Integer

### Description

Count positive and negative values and return the larger count. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

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
5
```

### Code
Source: `lectures/LeetCode/2529.cpp`

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
