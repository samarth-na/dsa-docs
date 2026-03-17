## LeetCode 1991 - Find the Middle Index in Array

### Question
LeetCode 1991 - Find the Middle Index in Array

### Description

Return an index whose left and right sums are equal. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

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
4
```

### Code
Source: `lectures/LeetCode/1991.cpp`

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
