---
title: check whether a number is odd or even
description: Decide whether an integer is odd or even.
topics: basic programming, conditionals, math
Difficulty: basic
---


## Check Whether A Number Is Odd Or Even

### Description

Decide whether an integer is odd or even. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
7
```

### Output

```text
Odd
```

### Code

Source: `lectures/Lecture_4/3_check_wether_number.cpp`

```cpp
#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    if(n%2==0){
        cout<<"Even"<<endl;
    }
    else{
        cout<<"Odd"<<endl;
    }
    return 0;
}
```
