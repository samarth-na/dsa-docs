---
title: lecture 10 Advanced Pattern Practice
content: "pattern, loops, advanced pattern-printing set"
description: This lecture covers Advanced pattern-printing set; Pattern; Loops.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Pattern
- Loops
- Advanced pattern-printing set

## Description

This lecture covers Advanced pattern-printing set; Pattern; Loops.

## Questions

### 1. Extra Border and Diagonals Pattern
- Topic: Pattern, Loops
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
```text
* * * * *
* *   * *
*   *   *
* *   * *
* * * * *
```
- Code: `lectures/Lecture_10/1_Extra_question.cpp`
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

### 2. Pattern 2 (Lecture 8)
- Topic: Advanced pattern-printing set
- Description: Practice item covered in this lecture: Pattern 2 (Lecture 8).
- Output:
```text
* *     * *
*         *
*         *
* *     * *
```
- Code: `lectures/Lecture_10/2_pattern_2_lec8.cpp`
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

### 3. Pattern 1 (Lecture 9)
- Topic: Advanced pattern-printing set
- Description: Practice item covered in this lecture: Pattern 1 (Lecture 9).
- Output:
```text
1
      2 2 2
    3 3 3 3 3
  4 4 4 4 4 4 4
5 5 5 5 5 5 5 5 5
```
- Code: `lectures/Lecture_10/3_pattern_1_lec9.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        1
      2 2 2
    3 3 3 3 3
  4 4 4 4 4 4 4
5 5 5 5 5 5 5 5 5
*/

int main() {
    int n;cin>>n;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        //pattern
        for(int j=1;j<=2*i-1;j++){
            cout<<i<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 4. Pattern 2 (Lecture 9)
- Topic: Advanced pattern-printing set
- Description: Practice item covered in this lecture: Pattern 2 (Lecture 9).
- Output:
```text
1
      2 3 4
    5 6 7 8 9
  10 11 12 13 14 15 16
17 18 19 20 21 22 23 24 25
```
- Code: `lectures/Lecture_10/4_pattern_2_lec9.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        1
      2 3 4
    5 6 7 8 9
  10 11 12 13 14 15 16
17 18 19 20 21 22 23 24 25
*/

int main() {
    int n;
    cin>>n;
    int k=1;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=n-i;j++){
            cout<<" \t";
        }
        //pattern
        for(int j=1;j<=2*i-1;j++){
            cout<<k<<"\t";
            k++;
        }
        cout<<endl;
    }
    return 0;
}
```

### 5. Pattern 3 (Lecture 9)
- Topic: Advanced pattern-printing set
- Description: Practice item covered in this lecture: Pattern 3 (Lecture 9).
- Output:
```text
1
      1 2 1
    1 2 3 2 1
  1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1
```
- Code: `lectures/Lecture_10/5_pattern_3_lec9.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        1
      1 2 1
    1 2 3 2 1
  1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //spaces
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        //pattern
        for(int j=1;j<=i;j++){
            cout<<j<<" ";
        }
        //right
        for(int j=i-1;j>=1;j--){
            cout<<j<<" ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 6. Pattern 4 (Lecture 9)
- Topic: Advanced pattern-printing set
- Description: Practice item covered in this lecture: Pattern 4 (Lecture 9).
- Output:
```text
1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
```
- Code: `lectures/Lecture_10/6_pattern_4_lec9.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //space
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        //left pattern
        for(int j=i;j<=2*i-1;j++){
            cout<<j<<" ";
        }
        for(int j=2*i-2;j>=i;j--){
            cout<<j<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 7. Pattern 5 (Lecture 9)
- Topic: Advanced pattern-printing set
- Description: Practice item covered in this lecture: Pattern 5 (Lecture 9).
- Output:
```text
5 4 3 2 *
5 4 3 * 1
5 4 * 2 1
5 * 3 2 1
* 4 3 2 1
```
- Code: `lectures/Lecture_10/7_pattern_5_lec9.cpp`
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

### 8. Pattern 6 (Lecture 9)
- Topic: Advanced pattern-printing set
- Description: Practice item covered in this lecture: Pattern 6 (Lecture 9).
- Output:
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
- Code: `lectures/Lecture_10/8_pattern_6_lec9.cpp`
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
