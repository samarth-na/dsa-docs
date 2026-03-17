## Pattern 1 (Lecture 8)

### Question
Pattern 1 (Lecture 8)

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
* * * * *
    * * * *
        * * *
            * *
                *
            * *
        * * *
    * * * *
* * * * *
```

### Code
Source: `lectures/Lecture_9/3_pattern_1_lec8.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * *
    * * * *
        * * *
            * *
                *
            * *
        * * *
    * * * *
* * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=2*i-2;j++){
            cout<<"  ";
        }
        //stars
        for(int j=1;j<=n-i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        //spaces
        for(int j=1;j<=2*i-2;j++){
            cout<<"  ";
        }
        //stars
        for(int j=1;j<=n-i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```
