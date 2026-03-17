## Pattern 3 (Lecture 7)

### Question
Pattern 3 (Lecture 7)

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
  *   *
*       *
  *   *
    *
```

### Code
Source: `lectures/Lecture_8/4_pattern_3_lec7.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
    *
  *   *
*       *
  *   *
    *
*/

int main() {
    int m;
    cin>>m;
    int n=(m+1)/2;
    for(int i=1;i<=n;i++){
        //outer space
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        cout<<"* ";
        for(int j=1;j<=2*i-3;j++){
            cout<<"  ";
        }
        if(i!=1){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        //outer space
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        cout<<"* ";
        for(int j=1;j<=2*i-3;j++){
            cout<<"  ";
        }
        if(i!=1){
            cout<<"* ";
        }
        cout<<endl;
    }

    return 0;
}
```
