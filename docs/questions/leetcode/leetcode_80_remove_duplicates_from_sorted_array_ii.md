## LeetCode 80 - Remove Duplicates from Sorted Array II

### Question
LeetCode 80 - Remove Duplicates from Sorted Array II

### Description

Keep at most two occurrences of each value in a sorted array. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Two Pointers

### Difficulty
Medium

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
k = 5
Array: 1 1 2 2 3 
```

### Code
Source: `lectures/LeetCode/80.cpp`

```cpp
#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    int j = 1;
    for (int i = 1; i < nums.size(); i++) {
        if (j == 1 || nums[i] != nums[j - 2]) {
            nums[j++] = nums[i];
        }
    }
    return j;
}
int main() {
    vector<int> nums = {1,1,1,2,2,3};
    int k = removeDuplicates(nums);
    cout << "k = " << k << endl;
    cout << "Array: ";
    for (int i = 0; i < k; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    return 0;
}
```
