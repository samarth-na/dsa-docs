## LeetCode 283 - Move Zeroes

### Question
LeetCode 283 - Move Zeroes

### Description

Move all zeroes to the end while keeping non-zero order. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Two Pointers

### Difficulty
Easy

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
1 3 12 0 0 
```

### Code
Source: `lectures/LeetCode/283.cpp`

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
