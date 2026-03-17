---
title: lecture 7 Symmetric and Asymmetric Patterns
content: "pattern, loops"
description: This lecture covers Pattern; Loops; Row-based and column-based pattern construction.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Pattern
- Loops

## Description

This lecture covers Pattern; Loops; Row-based and column-based pattern construction.

## Questions

### 1. Row Symmetric Pattern 1
- Topic: Pattern, Loops
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
```text
*
* *
* * *
* * * *
* * * * *
* * * * *
* * * *
* * *
* *
*
```
- Code: `lectures/Lecture_7/1_row_symmetric_pattern_1.cpp`
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
* * * * *
* * * *
* * *
* *
*
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n;i>=1;i--){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 2. Row Asymmetric Pattern 2
- Topic: Pattern, Loops
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
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
- Code: `lectures/Lecture_7/2_row_asymmetric_pattern_2.cpp`
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

### 3. Column Symmetric Pattern 3
- Topic: Pattern, Loops
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
```text
* *
      * * * *
    * * * * * *
  * * * * * * * *
* * * * * * * * * *
```
- Code: `lectures/Lecture_7/3_column_symmetric_pattern_3.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        * *
      * * * *
    * * * * * *
  * * * * * * * *
* * * * * * * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
         for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }   
        cout<<endl;
    }
    return 0;
}
```

### 4. Column Asymmetric Pattern 4
- Topic: Pattern, Loops
- Description: Print the classroom pattern shown in this lecture exercise.
- Output:
```text
*
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
```
- Code: `lectures/Lecture_7/4_column_asymmetric_pattern_4.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //left
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        //right
         for(int j=1;j<=i-1;j++){
            cout<<"* ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }   
        cout<<endl;
    }
    return 0;
}
```

### 5. Pattern 2 (Lecture 6)
- Topic: Pattern
- Description: Practice item covered in this lecture: Pattern 2 (Lecture 6).
- Output:
```text
*
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
```
- Code: `lectures/Lecture_7/5_pattern_2_lec6.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        //left
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        //right
         for(int j=1;j<=i-1;j++){
            cout<<"* ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }   
        cout<<endl;
    }
    return 0;
}
```

### 6. Pattern 3 (Lecture 6)
- Topic: Pattern
- Description: Practice item covered in this lecture: Pattern 3 (Lecture 6).
- Output:
```text
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
```
- Code: `lectures/Lecture_7/6_pattern_3_lec6.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/

int main() {
    int n;
    cin>>n;
    for(int i=n;i>=1;i--){
        //left
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        //right
         for(int j=1;j<=i-1;j++){
            cout<<"* ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }   
        cout<<endl;
    }
    return 0;
}
```
