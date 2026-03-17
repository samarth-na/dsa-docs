## Row Asymmetric Pattern 2

### Question
Row Asymmetric Pattern 2

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
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
```

### Code
Source: `lectures/Lecture_7/2_row_asymmetric_pattern_2.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
*/

int main() {
    int n;
    cin>>n;
    // upper
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    //lower
    for(int i=n-1;i>=1;i--){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```
