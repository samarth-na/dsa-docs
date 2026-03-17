## LeetCode 167 - Two Sum II - Input Array Is Sorted

### Question
LeetCode 167 - Two Sum II - Input Array Is Sorted

### Description

Find two indices in a sorted array whose values sum to the target. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

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
Indices: [1, 2]
```

### Code
Source: `lectures/LeetCode/167.cpp`

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0;
    int right = numbers.size() - 1;
    
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        
        if (sum == target) {
            return {left + 1, right + 1};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return {};
}

int main() {
    vector<int> numbers = {2,7,11,15};
    int target = 9;
    
    vector<int> result = twoSum(numbers, target);
    
    cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    
    return 0;
}
```
