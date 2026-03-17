## LeetCode 134 - Gas Station

### Question
LeetCode 134 - Gas Station

### Description

Find the start station that allows completing the circular route. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Array, Greedy

### Difficulty
Medium

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
3
```

### Code
Source: `lectures/LeetCode/134.cpp`

```cpp
#include <iostream>
#include<vector>
using namespace std;
int startStation(vector<int> gas,vector<int> cost){
    int total=0;
    int bachihuigas=0;
    int ans=0;
    for(int i=0;i<gas.size();i++){
        total+=(gas[i]-cost[i]);
        bachihuigas+=(gas[i]-cost[i]);
        if(bachihuigas<0){
            bachihuigas=0;
            ans=i+1;
        }
    }
    if(total>=0){
        return ans;
    }
    return -1;
}
int main() {
    vector<int> gas = {1,2,3,4,5};
    vector<int> cost = {3,4,5,1,2};
    cout << startStation(gas, cost) << endl;
    return 0;
}
```
