---
title: lecture 5 Pattern Printing Introduction
content: "basic programming, conditionals, math, basic loop revision"
description: This lecture covers Basic loop revision; Pattern-printing practice; Basic Programming; Conditionals; Math.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Basic Programming
- Conditionals
- Math
- Basic loop revision

## Description

This lecture covers Basic loop revision; Pattern-printing practice; Basic Programming; Conditionals; Math.

## Questions

### 1. Check Whether a Number is Odd or Even

- Topic: Basic Programming, Conditionals, Math
- Description: Decide whether an integer is odd or even.
- Output: Prints whether the given number is odd or even.
- Code: `lectures/lecture_5/1_SampleQuestionevenorodd.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    if(n%2==0){
        cout<<"Even"<<endl;
    }
    else{
        cout<<"Odd"<<endl;
    }

    return 0;
}
```

### 2. Pattern 1 (Lecture 5)

- Topic: Basic loop revision
- Description: Practice item covered in this lecture: Pattern 1 (Lecture 5).
- Output:

```text
* * * * *
```

- Code: `lectures/lecture_5/2_pattern_1_lec5.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        cout<<"* ";
    }
    cout<<endl;
    return 0;
}
```

### 3. Pattern 2 (Lecture 5)

- Topic: Basic loop revision
- Description: Practice item covered in this lecture: Pattern 2 (Lecture 5).
- Output:

```text
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

- Code: `lectures/lecture_5/3_pattern_2_lec5.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 4. Pattern 3 (Lecture 5)

- Topic: Basic loop revision
- Description: Practice item covered in this lecture: Pattern 3 (Lecture 5).
- Output:

```text
*
* *
* * *
* * * *
* * * * *
```

- Code: `lectures/lecture_5/4_pattern_3_lec5.cpp`

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
*/

int main() {
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
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

### 5. Pattern 4 (Lecture 5)

- Topic: Basic loop revision
- Description: Practice item covered in this lecture: Pattern 4 (Lecture 5).
- Output:

```text
*
      * *
    * * *
  * * * *
* * * * *
```

- Code: `lectures/lecture_5/5_pattern_4_lec5.cpp`

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
        cout<<endl;
    }
    return 0;
}
```

### 6. Pattern 5 (Lecture 5)

- Topic: Basic loop revision
- Description: Practice item covered in this lecture: Pattern 5 (Lecture 5).
- Output:

```text
* * * * *
  * * * *
    * * *
      * *
        *
```

- Code: `lectures/lecture_5/6_pattern_5_lec5.cpp`

```cpp
#include <iostream>
using namespace std;

/*
Sample input:
5

Sample output:
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
        for(int j=1;j<=i-1;j++){
            cout<<"  ";
        }
        for(int j=1;j<=n-i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}
```
