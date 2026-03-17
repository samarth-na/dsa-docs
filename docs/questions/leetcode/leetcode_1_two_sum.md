## LeetCode 1 - Two Sum

### Question
LeetCode 1 - Two Sum

### Description

Find two indices whose values add up to the target. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Hashing

### Difficulty
Easy

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
Indices: [0, 1]
```

### Code
Source: `lectures/LeetCode/1.cpp`

```cpp
#include <iostream>
#include<vector>
using namespace std;
vector<int> twoSum(vector<int>& nums, int target) {
    for(int i=0;i<nums.size();i++){
        for(int j=i+1;j<nums.size();j++){
            if(nums[i]+nums[j]==target){
                return {i,j};
            }
        }
    }
    return {};
}
int main() {
    vector<int> nums = {2,7,11,15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}
```
