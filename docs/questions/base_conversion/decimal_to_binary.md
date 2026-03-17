## Decimal to Binary

### Question
Decimal to Binary

### Description

Convert a decimal number into its binary representation. Convert between bases systematically while handling digit positions and valid symbol ranges correctly.

### Topic
Math, Base Conversion, Digit Manipulation

### Difficulty
Easy

### Input
```text
10
```

### Output
```text
1010
```

### Code
Source: `lectures/Lecture_15/4_decimal_to_binary.cpp`

```cpp
#include <iostream>
using namespace std;
int rev(int n){
    int rev=0;
    while(n!=0){
        int k=n%10;
        rev=rev*10+k;
        n=n/10;
    }
    return rev;
}
int main() {
    int n;
    cin>>n;
    int bn=1;
    while(n>0){
        int k=n%2;
        bn=bn*10+k;
        n=n/2;
    }
    cout<<rev(bn)/10<<endl;
    return 0;
}
```
