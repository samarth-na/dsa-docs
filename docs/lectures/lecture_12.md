---
title: lecture 12 Data Types and Functions Basics
content: Data types, c++ basics, functions
description: This lecture covers Strings and doubles; Data Types; C++ Basics; Functions; Primitive and larger numeric data types.
---

## Questions

### 1. Data Types Demo

- Topic: Data Types, C++ Basics
- Description: Demonstrates common C++ data types, arithmetic, and `sizeof`.
- Output: Prints example values and the memory size of the demonstrated data types.
- Code: `lectures/Lecture_12/1_datatypes.cpp`

```cpp
#include <iostream>
using namespace std;

int main() {
    //int
    int a=7323748;
    //long
    long b=732678234;
    //long long
    long long c=37583594797;
    cout<<a*a<<endl;
    cout<<b<<endl;
    cout<<c<<endl;
    string d="wduywreiugweuiyduyerfuyewtfgiuywtyeuytfiuytgewufytgiuwe";
    cout<<d<<endl;
    //float
    double e=7.93567;
    cout<<e*4.5577869<<endl;
    cout<<sizeof(a)<<endl;
    cout<<sizeof(b)<<endl;
    cout<<sizeof(c)<<endl;
    cout<<sizeof(d)<<endl;
    cout<<sizeof(e)<<endl;
    return 0;
}
```

### 2. Functions Demo

- Topic: Functions, C++ Basics
- Description: Shows functions with and without arguments and return values.
- Output: Prints the return values or greetings produced by the example functions.
- Code: `lectures/Lecture_12/2_functions.cpp`

```cpp
#include <iostream>
using namespace std;
//No arguement and No return
void greet(){
    cout<<"hello"<<endl;
}
//Arguement and no return
void great(string name){
    cout<<"hello "<<name<<endl;
}
// No arguement and return
int subtract(){
    int a=5;
    int b=3;
    int c=a-b;
    return c;
}
//Arguement and return
int add(int a,int b){
    int c=a+b;
    return c;
}
int main() {
    greet();
    great("Tulsi");
    // 1st way
    int a=add(8,3);
    cout<<a<<endl;
    //2nd way
    cout<<add(8,3)<<endl;
    cout<<subtract()<<endl;
    return 0;
}
```
