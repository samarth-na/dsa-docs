## Pattern 5 (Lecture 7)

### Question
Pattern 5 (Lecture 7)

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
* * * * * * * * *
* * * *   * * * *
* * *       * * *
* *           * *
*               *
```

### Code
Source: `lectures/Lecture_9/2_pattern_5_lec7.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * * * * * *
* * * *   * * * *
* * *       * * *
* *           * *
*               *
*/

int main() {
    int n;
    cin>>n;
    for(int i=n;i>=1;i--){
        //left star
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        //spaces
        for(int j=1;j<=2*(n-i)-1;j++){
            cout<<"  ";
        }
        //right star
        if(i!=n){
            for(int j=1;j<=i;j++){
                cout<<"* ";
            }
        }
        else{
            for(int j=1;j<=n-1;j++){
                cout<<"* ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```
