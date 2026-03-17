## LeetCode 27 - Remove Element

### Question
LeetCode 27 - Remove Element

### Description

Remove all instances of a target value in place. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

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
8
```

### Code
Source: `lectures/LeetCode/27.cpp`

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
