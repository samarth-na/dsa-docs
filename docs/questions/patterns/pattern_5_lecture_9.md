## Pattern 5 (Lecture 9)

### Question
Pattern 5 (Lecture 9)

### Description

Print the classroom pattern shown in this lecture exercise. Build the output row by row with nested loops, paying close attention to spacing and alignment.

### Topic
Pattern, Loops

### Difficulty
Medium

### Input
```text
5
```

### Output
```text
5 4 3 2 *
5 4 3 * 1
5 4 * 2 1
5 * 3 2 1
* 4 3 2 1
```

### Code
Source: `lectures/Lecture_10/7_pattern_5_lec9.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
5 4 3 2 *
5 4 3 * 1
5 4 * 2 1
5 * 3 2 1
* 4 3 2 1
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=n;j>=1;j--){
            if(i==j){
                cout<<"* ";
            }
            else{
                cout<<j<<" ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```
