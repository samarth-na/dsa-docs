## LeetCode 118 - Pascal's Triangle

### Question
LeetCode 118 - Pascal's Triangle

### Description

Generate the first numRows of Pascal's triangle. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Dynamic Programming, Math

### Difficulty
Easy

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
Prints the computed answer for the provided input.
```

### Code
Source: `lectures/LeetCode/118.cpp`

```cpp
<<<<<<< HEAD
#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> generate(int numRows) {
    vector<vector<int>> ans;

    for (int i = 0; i < numRows; ++i)
      ans.push_back(vector<int>(i + 1, 1));

    for (int i = 2; i < numRows; ++i)
      for (int j = 1; j < ans[i].size() - 1; ++j)
        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];

    return ans;
}
int main() {
    int numRows = 5;
    vector<vector<int>> result = generate(numRows);
    for(auto row : result) {
        for(int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
=======
#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> generate(int numRows) {
    vector<vector<int>> ans;

    for (int i = 0; i < numRows; ++i)
      ans.push_back(vector<int>(i + 1, 1));

    for (int i = 2; i < numRows; ++i)
      for (int j = 1; j < ans[i].size() - 1; ++j)
        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];

    return ans;
}
int main() {
    
    return 0;
>>>>>>> 2169aa5ed0faf67289cc73db85a439fededbde77
}
```
