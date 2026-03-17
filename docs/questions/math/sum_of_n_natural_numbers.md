---
title: sum of n natural numbers
description: Compute the sum of the first N natural numbers.
topics: basic programming, loops, math
Difficulty: basic
---


## Sum Of N Natural Numbers

### Description

Compute the sum of the first N natural numbers. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
5
```

### Output

```text
15
```

### Code

Source: `lectures/Lecture_4/8_Find_the_sum_of_N_Natural_Numbers.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    int n,sum=0;
    cin >> n;
    for(int i=1;i<=n;i++)
        sum+=i;
    cout << sum;
    return 0;
}
```
