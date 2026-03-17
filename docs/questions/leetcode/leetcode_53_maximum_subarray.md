## LeetCode 53 - Maximum Subarray

### Question
LeetCode 53 - Maximum Subarray

### Description

Find the contiguous subarray with the maximum sum. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Dynamic Programming

### Difficulty
Medium

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
8
```

### Code
Source: `lectures/LeetCode/53.cpp`

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
