## Pattern 1 (Lecture 9)

### Question
Pattern 1 (Lecture 9)

### Description

Print the classroom pattern shown in this lecture exercise. Build the output row by row with nested loops, paying close attention to spacing and alignment.

### Topic
Pattern, Loops

### Difficulty
Easy

### Input
```text
5
```

### Output
```text
        1
      2 2 2
    3 3 3 3 3
  4 4 4 4 4 4 4
5 5 5 5 5 5 5 5 5
```

### Code
Source: `lectures/Lecture_10/3_pattern_1_lec9.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        1
      2 2 2
    3 3 3 3 3
  4 4 4 4 4 4 4
5 5 5 5 5 5 5 5 5
*/

int main() {
    int n;cin>>n;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        //pattern
        for(int j=1;j<=2*i-1;j++){
            cout<<i<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```
