## LeetCode 202 - Happy Number

### Question
LeetCode 202 - Happy Number

### Description

Repeat square-digit sums to determine whether the sequence reaches 1. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, Math, Number Theory, Simulation

### Difficulty
Easy

### Input
```text
19
```

### Output
```text
1
```

### Code
Source: `lectures/LeetCode/202.cpp`

```cpp
#include <iostream>
using namespace std;
bool isHappy(int n) {
    int sum=0;
    if(n==1 or n==7){
        return true;
    }
    else if(n<10){
        return false;
    }
    else{
        while(n!=0){
            int k=n%10;
            sum+=k*k;
            n=n/10;
        }
    }
    return isHappy(sum);
}
int main() {
    int n;
    cin>>n;
    cout<<isHappy(n)<<endl;
    return 0;
}
```
