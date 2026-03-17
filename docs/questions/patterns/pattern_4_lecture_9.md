## Pattern 4 (Lecture 9)

### Question
Pattern 4 (Lecture 9)

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
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
```

### Code
Source: `lectures/Lecture_10/6_pattern_4_lec9.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //space
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        //left pattern
        for(int j=i;j<=2*i-1;j++){
            cout<<j<<" ";
        }
        for(int j=2*i-2;j>=i;j--){
            cout<<j<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```
