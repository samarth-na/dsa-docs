## Pattern 4 (Lecture 6)

### Question
Pattern 4 (Lecture 6)

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
      * ! *
    * ! * ! *
  * ! * ! * ! *
* ! * ! * ! * ! *
```

### Code
Source: `lectures/Lecture_8/1_pattern_4_lec6.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        *
      * ! *
    * ! * ! *
  * ! * ! * ! *
* ! * ! * ! * ! *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        //total pattern
        for(int j=1;j<=2*i-1;j++){
            if(j%2==0){
                //!
                cout<<"! ";
            }
            else{
                //star
                cout<<"* ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```
