## Pascal Triangle Pattern

### Question
Pascal Triangle Pattern

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
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
```

### Code
Source: `lectures/Lecture_17/1_Pascal_triangle.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/

int main() {
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        int val=1;
        for(int j=0;j<=i;j++){
            cout<<val<<" ";
            val=val*(i-j)/(j+1);
        }
        cout<<endl;
    }
    return 0;
}
```
