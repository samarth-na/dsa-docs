---
title: add two numbers
description: Read two numbers and print their sum.
topics: basic programming, math
Difficulty: basic
---


## Add Two Numbers

### Description

Read two numbers and print their sum. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
2 3
```

### Output

```text
5
```

### Code

Source: `lectures/Lecture_4/1_addtwonumbers.cpp`

```cpp
#include<iostream>
using namespace std;
int main(){
    int a,b;
    cin>>a>>b;
    int c=a+b;
    cout<<c<<endl;
    return 0;
}
```
