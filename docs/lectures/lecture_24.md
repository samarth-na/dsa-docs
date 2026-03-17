---
title: lecture 24 Inverse Numbers and Base Conversion
content: "math, digit manipulation, base conversion"
description: This lecture covers Inverse of number problem; Converting any base to any base; Math; Digit Manipulation; Base Conversion.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Math
- Digit Manipulation
- Base Conversion

## Description

This lecture covers Inverse of number problem; Converting any base to any base; Math; Digit Manipulation; Base Conversion.

## Questions

### 1. Inverse of Number
- Topic: Math, Digit Manipulation
- Description: Invert the position-value relationship of the digits.
- Output: Prints the converted or transformed numeric result.
- Code: `lectures/Lecture_24/1_inverse_of_number.cpp`
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

### 2. Convert Any Base to Any Base
- Topic: Math, Base Conversion, Digit Manipulation
- Description: Convert a number from one base to another through decimal conversion.
- Output: Prints the converted or transformed numeric result.
- Code: `lectures/Lecture_24/2_conversion_any_to_any.cpp`
```cpp
#include <iostream>
using namespace std;

long long convertToDecimal(long long sn, int sb) {
    long long power = 1;
    long long ans = 0;

    while (sn > 0) {
        int digit = sn % 10;
        ans += digit * power;
        power *= sb;
        sn /= 10;
    }
    return ans;
}

long long convertFromDecimal(long long dec, int db) {
    long long power = 1;
    long long ans = 0;

    while (dec > 0) {
        int rem = dec % db;
        ans += rem * power;
        power *= 10;
        dec /= db;
    }
    return ans;
}

int main() {
    int sb, db;
    long long sn;

    cin >> sb;
    cin >> db;
    cin >> sn;

    long long decimal = convertToDecimal(sn, sb);
    long long result = convertFromDecimal(decimal, db);

    cout << result;
    return 0;
}
```
