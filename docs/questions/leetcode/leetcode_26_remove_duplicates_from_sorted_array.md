## LeetCode 26 - Remove Duplicates from Sorted Array

### Question
LeetCode 26 - Remove Duplicates from Sorted Array

### Description

Compress a sorted array in place so each value appears once. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

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
Unique count: 5
Array: 1 2 3 4 5 
```

### Code
Source: `lectures/LeetCode/26.cpp`

```cpp
#include <iostream>
#include<vector>
using namespace std;
int removeDuplicates(vector<int>& nums) {
    int unique=0;
    for(int i=1;i<nums.size();i++){
        if(nums[i]!=nums[unique]){
            unique++;
            nums[unique]=nums[i];
        }
    }
    return unique+1;
}
int main() {
    vector<int> nums = {1,1,2,2,2,3,3,4,4,5};
    int uniqueCount = removeDuplicates(nums);
    cout << "Unique count: " << uniqueCount << endl;
    cout << "Array: ";
    for(int i = 0; i < uniqueCount; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    return 0;
}
```
