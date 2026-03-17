## Fibonacci Pattern

### Question
Fibonacci Pattern

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
0
1 1
2 3 5
8 13 21 34
55 89 144 233 377
```

### Code
Source: `lectures/Lecture_15/3_fibbonacci_pattern.cpp`

```cpp
/*
Sample input:
5

Sample output:
0
1 1
2 3 5
8 13 21 34
55 89 144 233 377
*/

#include <iostream>
using namespace std;
int fibbo(int g){
    //base case
    if(g==0 or g==1){
        return g;
    }
    return fibbo(g-1)+fibbo(g-2);
}
int main() {
    int n;
    cin>>n;
    int g=0;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<fibbo(g)<<" ";
            g++;
        }
        cout<<endl;
    }
    return 0;
}
```
