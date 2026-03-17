## Binary to Decimal

### Question
Binary to Decimal

### Description

Convert a binary number into decimal form. Convert between bases systematically while handling digit positions and valid symbol ranges correctly.

### Topic
Math, Base Conversion, Digit Manipulation

### Difficulty
Easy

### Input
```text
1011
```

### Output
```text
11
```

### Code
Source: `lectures/Lecture_15/5_binary_to_decimal.cpp`

```cpp
#include <iostream>
#include<cmath>
using namespace std;

int main() {
    int n;
    cin>>n;
    int sum=0;
    int g=0;
    while(n>0){
        int k=n%10;
        sum=sum+k*pow(2,g);
        n=n/10;
        g++;
    }
    cout<<sum<<endl;
    return 0;
}
```
