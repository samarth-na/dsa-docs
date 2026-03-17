## Pattern 2 (Lecture 8)

### Question
Pattern 2 (Lecture 8)

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
* *     * *
*         *

*         *
* *     * *
```

### Code
Source: `lectures/Lecture_10/2_pattern_2_lec8.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* *     * *
*         *

*         *
* *     * *
*/

int main() {
    int m;
    cin>>m;
    int n=(m+1)/2;
    for(int i=1;i<=n;i++){
        //left star
        for(int j=1;j<=n-i;j++){
            cout<<"* ";
        }
        //spaces
        for(int j=1;j<=2*i;j++){
            cout<<"  ";
        }
        //right star
        for(int j=1;j<=n-i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        //left star
        for(int j=1;j<=n-i;j++){
            cout<<"* ";
        }
        //spaces
        for(int j=1;j<=2*i;j++){
            cout<<"  ";
        }
        //right star
        for(int j=1;j<=n-i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```
