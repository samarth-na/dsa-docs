---
title: lecture 33 Matrix Practice and 3Sum
content: "leetcode, array, two pointers, sorting"
description: This lecture covers Homework question assignment; LeetCode; Array; Two Pointers; Sorting; Matrix; Simulation; Math.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- LeetCode
- Array
- Two Pointers
- Sorting
- Matrix
- Simulation
- Math

## Description

This lecture covers Homework question assignment; LeetCode; Array; Two Pointers; Sorting; Matrix; Simulation; Math.

## Questions

### 1. LeetCode 15 - 3Sum
- Topic: LeetCode, Array, Two Pointers, Sorting
- Description: Find all unique triplets whose sum is zero.
- Link: https://leetcode.com/problems/3sum/
- Output: Prints or returns the required indices or combinations that satisfy the target condition.
- Code: `lectures/LeetCode/15.cpp`
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    int n=nums.size();
    sort(nums.begin(),nums.end());
    vector<vector<int>> ans;
    for(int i=0;i<n-2;i++){
        if(i>0 and nums[i]==nums[i-1]){
            continue;
        }
        int targetsum=-nums[i];
        int j=i+1;
        int k=n-1;
        while(j<k){
            int pairsum=nums[j]+nums[k];
            if(pairsum==targetsum){
                ans.push_back({nums[i],nums[j],nums[k]});
                j++;
                k--;
                while(j<k and nums[j]==nums[j-1]){
                    j++;
                }
                while(j<k and nums[k]==nums[k+1]){
                    k--;
                }
            }
            else if(pairsum>targetsum){
                k--;
            }
            else{
                j++;
            }
        }
    }
    return ans;
}
int main() {
    vector<int> nums = {-1, 0, 1, 2, -1, -4};
    vector<vector<int>> result = threeSum(nums);
    
    cout << "Triplets with sum 0:" << endl;
    for (auto triplet : result) {
        cout << "[";
        for (int i = 0; i < triplet.size(); i++) {
            cout << triplet[i];
            if (i < triplet.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }
    
    return 0;
}
```

### 2. LeetCode 73 - Set Matrix Zeroes
- Topic: LeetCode, Matrix
- Description: Zero out matrix rows and columns that contain a zero.
- Link: https://leetcode.com/problems/set-matrix-zeroes/
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/LeetCode/73.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;

void setZeroes(vector<vector<int>>& matrix) {
    int m=matrix.size();
    int n=matrix[0].size();
    vector<vector<int>> ans(m,vector<int>(n,1));
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(matrix[i][j]==0){
                for(int k=0;k<n;k++){
                    ans[i][k]=0;
                }
                for(int k=0;k<m;k++){
                    ans[k][j]=0;
                }
            }
        }
    }
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(ans[i][j]==0){
                matrix[i][j]=0;
            }
        }
    }
}

int main() {
    vector<vector<int>> matrix = {
        {1, 0, 3},
        {4, 5, 6},
        {7, 8, 0}
    };
    
    cout << "Original Matrix:" << endl;
    for (auto row : matrix) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    setZeroes(matrix);
    
    cout << "\nMatrix after setting zeroes:" << endl;
    for (auto row : matrix) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

### 3. LeetCode 566 - Reshape the Matrix
- Topic: LeetCode, Matrix, Simulation
- Description: Reshape matrix dimensions without changing element order.
- Link: https://leetcode.com/problems/reshape-the-matrix/
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/LeetCode/566.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
    int n=mat.size();
    int m=mat[0].size();
    if(n*m != r*c){
        return mat;
    }
    vector<vector<int>> ans(r,vector<int>(c));
    int x=0,y=0;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            ans[x][y]=mat[i][j];
            y++;
            if(y==c){
                x++;
                y=0;
            }

        }
    }
    return ans;
}

int main() {
    vector<vector<int>> mat = {
        {1, 2},
        {3, 4}
    };
    int r = 1, c = 4;
    
    cout << "Original Matrix:" << endl;
    for (auto row : mat) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    vector<vector<int>> result = matrixReshape(mat, r, c);
    
    cout << "\nReshaped Matrix (" << r << "x" << c << "):" << endl;
    for (auto row : result) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

### 4. LeetCode 1572 - Matrix Diagonal Sum
- Topic: LeetCode, Matrix, Math
- Description: Add the primary and secondary diagonal values of a square matrix.
- Link: https://leetcode.com/problems/matrix-diagonal-sum/
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/LeetCode/1572.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;

int diagonalSum(vector<vector<int>>& mat) {
    int n=mat.size();
    int sum=0;
    for(int i=0;i<n;i++){
        sum+=mat[i][i];
        sum+=mat[i][n-i-1];
    }
    if(n%2==1){
        sum-=mat[n/2][n/2];
    }
    return sum;
}
int main() {
    vector<vector<int>> mat = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    cout << "Matrix:" << endl;
    for (auto row : mat) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    int result = diagonalSum(mat);
    cout << "\nDiagonal Sum: " << result << endl;
    
    return 0;
}
```

### 5. LeetCode 498 - Diagonal Traverse
- Topic: LeetCode, Matrix, Simulation
- Description: Traverse a matrix diagonally in alternating directions.
- Note: Listed as homework in the lecture note.
- Link: https://leetcode.com/problems/diagonal-traverse/
- Output: Traverse a matrix diagonally in alternating directions.
- Code: No dedicated code file is available in the repo for this item.
