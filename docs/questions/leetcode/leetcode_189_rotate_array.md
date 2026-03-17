## LeetCode 189 - Rotate Array

### Question
LeetCode 189 - Rotate Array

### Description

Rotate an array to the right by k positions. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

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
5 6 7 1 2 3 4 
```

### Code
Source: `lectures/LeetCode/189.cpp`

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
void rotate(vector<int>& nums, int k) {
    int n=nums.size();
    k=k%n;
    reverse(nums.begin(),nums.end());
    //aakhri K elments aage chahiye
    reverse(nums.begin(),nums.begin()+k);
    //aage ke elements shift  ho jaaye
    // yah joh bache elements unka reverse kardo
    reverse(nums.begin()+k,nums.end());
    return;
}
int main() {
    vector<int> nums = {1,2,3,4,5,6,7};
    int k = 3;
    rotate(nums, k);
    for(int val : nums) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}
```
