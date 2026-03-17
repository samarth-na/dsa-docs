## Extra Border and Diagonals Pattern

### Question
Extra Border and Diagonals Pattern

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
* * * * *
* *   * *
*   *   *
* *   * *
* * * * *
```

### Code
Source: `lectures/Lecture_10/1_Extra_question.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * *
* *   * *
*   *   *
* *   * *
* * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(i==1 or j==1 or i==n or j==n or i==j or i+j==n+1){
                cout<<"* ";
            }
            else{
                cout<<"  ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```
