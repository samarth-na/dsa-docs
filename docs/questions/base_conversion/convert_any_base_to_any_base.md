## Convert Any Base to Any Base

### Question
Convert Any Base to Any Base

### Description

Convert a number from one base to another through decimal conversion. Convert between bases systematically while handling digit positions and valid symbol ranges correctly.

### Topic
Math, Base Conversion, Digit Manipulation

### Difficulty
Medium

### Input
```text
2
10
1011
```

### Output
```text
11
```

### Code
Source: `lectures/Lecture_24/2_conversion_any_to_any.cpp`

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
