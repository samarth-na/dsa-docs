## Pattern 1 (Lecture 5)

### Question
Pattern 1 (Lecture 5)

### Description

Print the classroom pattern shown in this lecture exercise. Build the output row by row with nested loops, paying close attention to spacing and alignment.

### Topic
Pattern, Loops

### Difficulty
Basic

### Input
```text
5
```

### Output
```text
* * * * *
```

### Code
Source: `lectures/lecture_5/2_pattern_1_lec5.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        cout<<"* ";
    }
    cout<<endl;
    return 0;
}
```
