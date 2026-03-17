---
title: lecture 8 Pattern Practice Progression
content: continuing nested-loop pattern work
description: This lecture covers Continuing nested-loop pattern work.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Continuing nested-loop pattern work

## Description

This lecture covers Continuing nested-loop pattern work.

## Questions

### 1. Pattern 4 (Lecture 6)
- Topic: Continuing nested-loop pattern work
- Description: Practice item covered in this lecture: Pattern 4 (Lecture 6).
- Output:
```text
*
      * ! *
    * ! * ! *
  * ! * ! * ! *
* ! * ! * ! * ! *
```
- Code: `lectures/Lecture_8/1_pattern_4_lec6.cpp`
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

### 2. Pattern 1 (Lecture 7)
- Topic: Continuing nested-loop pattern work
- Description: Practice item covered in this lecture: Pattern 1 (Lecture 7).
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
- Code: `lectures/Lecture_8/2_pattern_1_lec7.cpp`
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
    //upper
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 3. Pattern 2 (Lecture 7)
- Topic: Continuing nested-loop pattern work
- Description: Practice item covered in this lecture: Pattern 2 (Lecture 7).
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
- Code: `lectures/Lecture_8/3_pattern_2_lec7.cpp`
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
    int n;cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 4. Pattern 3 (Lecture 7)
- Topic: Continuing nested-loop pattern work
- Description: Practice item covered in this lecture: Pattern 3 (Lecture 7).
- Output:
```text
*
  *   *
*       *
  *   *
    *
```
- Code: `lectures/Lecture_8/4_pattern_3_lec7.cpp`
```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
    *
  *   *
*       *
  *   *
    *
*/

int main() {
    int m;
    cin>>m;
    int n=(m+1)/2;
    for(int i=1;i<=n;i++){
        //outer space
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        cout<<"* ";
        for(int j=1;j<=2*i-3;j++){
            cout<<"  ";
        }
        if(i!=1){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--){
        //outer space
        for(int j=1;j<=n-i;j++){
            cout<<"  ";
        }
        cout<<"* ";
        for(int j=1;j<=2*i-3;j++){
            cout<<"  ";
        }
        if(i!=1){
            cout<<"* ";
        }
        cout<<endl;
    }

    return 0;
}
```
