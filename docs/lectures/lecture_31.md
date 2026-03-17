---
title: lecture 31 Matrix Traversal
content: "matrix, array, simulation, leetcode"
description: This lecture covers Wave print traversal; Spiral print traversal; Related LeetCode spiral problems; Matrix; Array; Simulation; LeetCode.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Matrix
- Array
- Simulation
- LeetCode

## Description

This lecture covers Wave print traversal; Spiral print traversal; Related LeetCode spiral problems; Matrix; Array; Simulation; LeetCode.

## Questions

### 1. Wave Print by Column
- Topic: Matrix, Array
- Description: Traverse a matrix column by column in alternating directions.
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/Lecture_31/1_wave_print_column.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;

int main() {
    int r,c;
    cin>>r>>c;
    vector<vector<int>> arr(r,vector<int>(c));
    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            cin>>arr[i][j];
        }
    }
    for(int j=0;j<c;j++){
        if(j%2!=0){
            for(int i=r-1;i>=0;i--){
                cout<<arr[i][j]<<" ";
            }
        }
        else{
            for(int i=0;i<r;i++){
                cout<<arr[i][j]<<" ";
            }
        }
    }
    return 0;
}
```

### 2. Spiral Print
- Topic: Matrix, Array, Simulation
- Description: Print a matrix in spiral order.
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/Lecture_31/2_spiral_print.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;

int main() {
    int r,c;
    cin>>r>>c;
    vector<vector<int>> arr(r,vector<int>(c));
    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            cin>>arr[i][j];
        }
    }
    int left=0,right=c-1,top=0,bottom=r-1;
    while(left<=right and top<=bottom){
        //left to right
        for(int i=left;i<=right;i++){
            //top
            cout<<arr[top][i]<<" ";
        }
        top++;
        //top to bottom
        for(int i=top;i<=bottom;i++){
            //right
            cout<<arr[i][right]<<" ";
        }
        right--;
        if(top<=bottom){
            //right to left
            for(int i=right;i>=left;i--){
                cout<<arr[bottom][i]<<" ";
            }
            bottom--;
        }
        if(left<=right){
            //bottom to top
            for(int i=bottom;i>=top;i--){
                cout<<arr[i][left]<<" ";
            }
        }
        left++;
    }

    return 0;
}
```

### 3. LeetCode 54 - Spiral Matrix
- Topic: LeetCode, Matrix, Simulation
- Description: Return all matrix elements in spiral order.
- Link: https://leetcode.com/problems/spiral-matrix/
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/LeetCode/54.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;
vector<int> spiralOrder(vector<vector<int>>& arr) {
    int r=arr.size();
    int c=arr[0].size();
    int left=0,right=c-1,top=0,bottom=r-1;
    vector<int> ans;
    while(left<=right and top<=bottom){
        //left to right
        for(int i=left;i<=right;i++){
            //top
            ans.push_back(arr[top][i]);
        }
        top++;
        //top to bottom
        for(int i=top;i<=bottom;i++){
            //right
            ans.push_back(arr[i][right]);
        }
        right--;
        if(top<=bottom){
            //right to left
            for(int i=right;i>=left;i--){
                ans.push_back(arr[bottom][i]);
            }
            bottom--;
        }
        if(left<=right){
            //bottom to top
            for(int i=bottom;i>=top;i--){
                ans.push_back(arr[i][left]);
            }
        }
        left++;
    }
    return ans;
}
int main() {
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    vector<int> result = spiralOrder(matrix);
    for(int val : result) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}
```

### 4. LeetCode 59 - Spiral Matrix II
- Topic: LeetCode, Matrix, Simulation
- Description: Generate an n x n matrix filled in spiral order.
- Link: https://leetcode.com/problems/spiral-matrix-ii/
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/LeetCode/59.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;

vector<vector<int>> generateMatrix(int n)
{
    vector<vector<int>> arr(n, vector<int>(n));
    int left = 0, right = n - 1, top = 0, bottom = n - 1, val = 1;
    while (left <= right and top <= bottom)
    {
        // left to right
        for (int i = left; i <= right; i++)
        {
            // top
            arr[top][i] = val;
            val++;
        }
        top++;
        // top to bottom
        for (int i = top; i <= bottom; i++)
        {
            // right
            arr[i][right] = val;
            val++;
        }
        right--;
        if (top <= bottom)
        {
            // right to left
            for (int i = right; i >= left; i--)
            {
                arr[bottom][i] = val;
                val++;
            }
            bottom--;
        }
        if (left <= right)
        {
            // bottom to top
            for (int i = bottom; i >= top; i--)
            {
                arr[i][left] = val;
                val++;
            }
        }
        left++;
    }
    return arr;
}
int main()
{
    int n = 3;
    vector<vector<int>> result = generateMatrix(n);
    for(auto row : result) {
        for(int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
```
