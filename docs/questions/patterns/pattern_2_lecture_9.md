## Pattern 2 (Lecture 9)

### Question
Pattern 2 (Lecture 9)

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
      2 3 4
    5 6 7 8 9
  10 11 12 13 14 15 16
17 18 19 20 21 22 23 24 25
```

### Code
Source: `lectures/Lecture_10/4_pattern_2_lec9.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        1
      2 3 4
    5 6 7 8 9
  10 11 12 13 14 15 16
17 18 19 20 21 22 23 24 25
*/

int main() {
    int n;
    cin>>n;
    int k=1;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=n-i;j++){
            cout<<" \t";
        }
        //pattern
        for(int j=1;j<=2*i-1;j++){
            cout<<k<<"\t";
            k++;
        }
        cout<<endl;
    }
    return 0;
}
```
