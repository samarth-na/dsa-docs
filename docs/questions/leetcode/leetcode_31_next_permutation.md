## LeetCode 31 - Next Permutation

### Question
LeetCode 31 - Next Permutation

### Description

Rearrange numbers into the next lexicographically greater permutation. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Two Pointers, Greedy

### Difficulty
Medium

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
1 3 2 
```

### Code
Source: `lectures/LeetCode/31.cpp`

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
void nextPermutation(vector<int>& nums) {
    int index=-1;
    int n=nums.size();
    for(int i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index=i;
            break;
        }
    }
    if(index==-1){
        reverse(nums.begin(),nums.end());
        return;
    }
    for(int i=n-1;i>index;i--){
        if(nums[i]>nums[index]){
            swap(nums[i],nums[index]);
            break;
        }
    }
    sort(nums.begin()+index+1,nums.end());
}
int main() {
    vector<int> nums={1,2,3};
    nextPermutation(nums);
    for(int i=0;i<nums.size();i++){
        cout<<nums[i]<<" ";
    }
    return 0;
}
```
