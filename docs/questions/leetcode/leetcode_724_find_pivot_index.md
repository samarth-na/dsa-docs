## LeetCode 724 - Find Pivot Index

### Question
LeetCode 724 - Find Pivot Index

### Description

Return the index where left sum and right sum are equal. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Prefix Sum

### Difficulty
Easy

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
-1
```

### Code
Source: `lectures/LeetCode/724.cpp`

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
