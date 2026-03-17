## Pattern 2 (Lecture 6)

### Question
Pattern 2 (Lecture 6)

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
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
```

### Code
Source: `lectures/Lecture_7/5_pattern_2_lec6.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //left
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        //right
         for(int j=1;j<=i-1;j++){
            cout<<"* ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }   
        cout<<endl;
    }
    return 0;
}
```
