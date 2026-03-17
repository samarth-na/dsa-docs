## LeetCode 66 - Plus One

### Question
LeetCode 66 - Plus One

### Description

Add one to a large integer stored as an array of digits. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Math, Simulation

### Difficulty
Easy

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
1 2 4 
```

### Code
Source: `lectures/LeetCode/66.cpp`

```cpp
#include <iostream>
#include<vector>
using namespace std;
vector<int> plusOne(vector<int>& digits) {
        for(int i=digits.size()-1;i>=0;i--){
            if(digits[i]<9){
                digits[i]++;
                return digits;
            }
            digits[i]=0;
        }
        digits.insert(digits.begin(),1);
        return digits;
    }
int main() {
    vector<int> digits = {1,2,3};
    vector<int> result = plusOne(digits);
    for(int val : result) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}
```
