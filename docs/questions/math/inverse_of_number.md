---
title: inverse of number
description: Invert the position-value relationship of the digits.
topics: math, digit manipulation
Difficulty: medium
---


## Inverse Of Number

### Description

Invert the position-value relationship of the digits. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
426135
```

### Output

```text
416253
```

### Code

Source: `lectures/Lecture_24/1_inverse_of_number.cpp`

```cpp
#include <iostream>
#include<vector>
using namespace std;
vector<int> convert(int n){
    vector<int> number;
    while(n!=0){
        int k=n%10;
        number.push_back(k);
        n=n/10;
    }
    return number;
}
int main() {
    int n;
    cin>>n;
    vector<int> number=convert(n);
    vector<int> ans(number.size()+1);
    for(int i=0;i<number.size();i++){
        ans[number[i]]=i+1;
    }
    for(int i=number.size();i>=1;i--){
        cout<<ans[i];
    }
    return 0;
}
```
