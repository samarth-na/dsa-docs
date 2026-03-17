---
title: leetcode 15 3sum
description: Find all unique triplets whose sum is zero.
topics: leetcode, array, two pointers, sorting
Difficulty: medium
---


## Leetcode 15 3sum

### Description

Find all unique triplets whose sum is zero. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Input

```text
No stdin input. This source uses hardcoded values in main().
```

### Output

```text
Triplets with sum 0:
[-1, -1, 2]
[-1, 0, 1]
```

### Code

Source: `lectures/LeetCode/15.cpp`

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
