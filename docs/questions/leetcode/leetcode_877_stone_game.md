## LeetCode 877 - Stone Game

### Question
LeetCode 877 - Stone Game

### Description

Determine whether the first player can win the stone-picking game. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Game Theory, Dynamic Programming

### Difficulty
Medium

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
1
```

### Code
Source: `lectures/LeetCode/877.cpp`

```cpp
#include <iostream>
#include<vector>
using namespace std;
bool stoneGame(vector<int>& piles) {
    return true;
}
int main() {
    vector<int> piles={5,3,4,5};
    cout<<stoneGame(piles)<<endl;
    return 0;
}
```
