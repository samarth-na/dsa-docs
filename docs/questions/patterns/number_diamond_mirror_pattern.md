## Number Diamond Mirror Pattern

### Question
Number Diamond Mirror Pattern

### Description

Print the classroom pattern shown in this lecture exercise. Build the output row by row with nested loops, paying close attention to spacing and alignment.

### Topic
Pattern, Loops, Math

### Difficulty
Medium

### Input
```text
5
```

### Output
```text
1                 9
2 8             8 2
3 7 3         7 3 7
4 6 4 6     6 4 6 4
5 5 5 5 5 5 5 5 5 5
6 4 6 4     4 6 4 6
7 3 7         3 7 3
8 2             2 8
9                 1
```

### Code
Source: `lectures/Lecture_11/1_test.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
1                 9
2 8             8 2
3 7 3         7 3 7
4 6 4 6     6 4 6 4
5 5 5 5 5 5 5 5 5 5
6 4 6 4     4 6 4 6
7 3 7         3 7 3
8 2             2 8
9                 1
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //number upper left
        for(int j=1;j<=i;j++){
            if(j%2!=0){
                cout<<i<<" ";
            }
            else{
                cout<<2*n-i<<" ";
            }
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            if(j%2==0){
                cout<<i<<" ";
            }
            else{
                cout<<2*n-i<<" ";
            }
        }
        cout<<endl;

    }
    for(int i=n-1;i>=1;i--){
        //number upper left
        for(int j=1;j<=i;j++){
            if(j%2==0){
                cout<<i<<" ";
            }
            else{
                cout<<2*n-i<<" ";
            }
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            if(j%2!=0){
                cout<<i<<" ";
            }
            else{
                cout<<2*n-i<<" ";
            }
        }
        cout<<endl;

    }
    return 0;
}
```
