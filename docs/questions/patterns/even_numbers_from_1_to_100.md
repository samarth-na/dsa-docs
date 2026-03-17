## Even Numbers from 1 to 100

### Question
Even Numbers from 1 to 100

### Description

Print all even numbers in the range 1 to 100. Build the output row by row with nested loops, paying close attention to spacing and alignment.

### Topic
Basic Programming, Loops

### Difficulty
Basic

### Input
```text
No stdin input. This source uses hardcoded values in main().
```

### Output
```text
2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100 
```

### Code
Source: `lectures/Lecture_4/11_Even_numbers_from_1_to_100.cpp`

```cpp
#include <iostream>
using namespace std;
int main() {
    for(int i=2;i<=100;i+=2)
        cout << i << " ";
    return 0;
}
```
