## Pattern 6 (Lecture 9)

### Question
Pattern 6 (Lecture 9)

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
1
2 * 2
3 * 3 * 3
4 * 4 * 4 * 4
5 * 5 * 5 * 5 * 5
4 * 4 * 4 * 4
3 * 3 * 3
2 * 2
1
```

### Code
Source: `lectures/Lecture_10/8_pattern_6_lec9.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
1
2 * 2
3 * 3 * 3
4 * 4 * 4 * 4
5 * 5 * 5 * 5 * 5
4 * 4 * 4 * 4
3 * 3 * 3
2 * 2
1
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=2*i-1;j++){
            if(j%2==0){
                //star
                cout<<"* ";
            }
            else{
                //number
                cout<<i<<" ";
            }
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        for(int j=1;j<=2*i-1;j++){
            if(j%2==0){
                //star
                cout<<"* ";
            }
            else{
                //number
                cout<<i<<" ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```
