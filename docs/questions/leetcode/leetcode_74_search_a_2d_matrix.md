## LeetCode 74 - Search a 2D Matrix

### Question
LeetCode 74 - Search a 2D Matrix

### Description

Search a sorted 2D matrix for a target value. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Matrix, Binary Search

### Difficulty
Medium

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
Prints the computed answer for the provided input.
```

### Code
Source: `lectures/LeetCode/74.cpp`

```cpp
<<<<<<< HEAD
#include <bits/stdc++.h>
using namespace std;
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int  i = 0, j = matrix[0].size()-1;
    while (i<matrix.size() && j>=0){
        if (matrix[i][j] == target) return true;
        else if (target>matrix[i][j]) i+=1;
        else if (target<matrix[i][j]) j-= 1;

    }
    return false;
}
int main() {
    vector<vector<int>> matrix = {{1,3,5,7},{10,11,16,20},{23,30,34,60}};
    int target = 3;
    cout << searchMatrix(matrix, target) << endl;
    return 0;
=======
#include <bits/stdc++.h>
using namespace std;
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int  i = 0, j = matrix[0].size()-1;
    while (i<matrix.size() && j>=0){
        if (matrix[i][j] == target) return true;
        else if (target>matrix[i][j]) i+=1;
        else if (target<matrix[i][j]) j-= 1;

    }
    return false;
}
int main() {
    
    return 0;
>>>>>>> 2169aa5ed0faf67289cc73db85a439fededbde77
}
```
