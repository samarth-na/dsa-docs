---
title: "lecture 32 Matrix Rotation, Search, and Pascal Triangle"
content: "leetcode, matrix, binary search, array"
description: This lecture covers Pascal triangle generation; LeetCode; Matrix; Binary Search; Array; Dynamic Programming; Math.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- LeetCode
- Matrix
- Binary Search
- Array
- Dynamic Programming
- Math

## Description

This lecture covers Pascal triangle generation; LeetCode; Matrix; Binary Search; Array; Dynamic Programming; Math.

## Questions

### 1. LeetCode 48 - Rotate Image
- Topic: LeetCode, Matrix
- Description: Rotate an n x n matrix by 90 degrees in place.
- Link: https://leetcode.com/problems/rotate-image/
- Output: Rotate an n x n matrix by 90 degrees in place.
- Code: `lectures/LeetCode/48.cpp`
```cpp
#include <bits/stdc++.h>
using namespace std;
void rotate(vector<vector<int>>& matrix) {
    int n=matrix.size();
    for(int i=0;i<n;i++)
    {
        for(int j=i;j<n;j++)
        {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    for(int j=0;j<n;j++)
    {
        reverse(matrix[j].begin(),matrix[j].end());
    }
}
int main() {
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    rotate(matrix);
    for(auto row : matrix) {
        for(int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
```

### 2. LeetCode 74 - Search a 2D Matrix
- Topic: LeetCode, Matrix, Binary Search
- Description: Search a sorted 2D matrix for a target value.
- Link: https://leetcode.com/problems/search-a-2d-matrix/
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/LeetCode/74.cpp`
```cpp
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
}
```

### 3. LeetCode 118 - Pascal's Triangle
- Topic: LeetCode, Array, Dynamic Programming, Math
- Description: Generate the first numRows of Pascal's triangle.
- Link: https://leetcode.com/problems/pascals-triangle/
- Output: Prints the requested pattern for the given input size.
- Code: `lectures/LeetCode/118.cpp`
```cpp
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
}
```
