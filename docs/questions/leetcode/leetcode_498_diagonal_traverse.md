## LeetCode 498 - Diagonal Traverse

### Question
LeetCode 498 - Diagonal Traverse

### Description

Traverse a matrix diagonally in alternating directions. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Matrix, Simulation

### Difficulty
Medium

### Input
```text
mat = [[1,2,3],[4,5,6],[7,8,9]]
```

### Output
```text
[1,2,4,7,5,3,6,8,9]
```

### Code
Source: `docs/questions/leetcode/leetcode_498_diagonal_traverse.md`

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
    int m = (int)mat.size();
    int n = (int)mat[0].size();
    vector<int> ans;
    ans.reserve(m * n);

    for (int d = 0; d <= m + n - 2; d++) {
        vector<int> diagonal;
        int r = (d < n) ? 0 : d - n + 1;
        int c = (d < n) ? d : n - 1;

        while (r < m && c >= 0) {
            diagonal.push_back(mat[r][c]);
            r++;
            c--;
        }

        if (d % 2 == 0) {
            for (int i = (int)diagonal.size() - 1; i >= 0; i--) ans.push_back(diagonal[i]);
        } else {
            for (int x : diagonal) ans.push_back(x);
        }
    }
    return ans;
}

int main() {
    vector<vector<int>> mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    vector<int> ans = findDiagonalOrder(mat);

    cout << "[";
    for (int i = 0; i < (int)ans.size(); i++) {
        if (i) cout << ",";
        cout << ans[i];
    }
    cout << "]\n";
    return 0;
}
```
