---
title: lecture 6 More Patterns and Nested Conditionals
content: "pattern continuation, basic programming, conditionals"
description: This lecture covers Pattern continuation; Basic Programming; Conditionals.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Pattern continuation
- Basic Programming
- Conditionals

## Description

This lecture covers Pattern continuation; Basic Programming; Conditionals.

## Questions

### 1. Pattern 1 (Lecture 6)
- Topic: Pattern continuation
- Description: Practice item covered in this lecture: Pattern 1 (Lecture 6).
- Output:
```text
* * * * *
    * * * *
        * * *
            * *
                *
```
- Code: `lectures/Lecture_6/1_pattern_1_lec6.cpp`
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
        for(int j=1;j<=2*i-2;j++){
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

### 2. Lottery Game
- Topic: Basic Programming, Conditionals
- Description: Choose a reward based on the input number range.
- Output: Prints the reward selected for the input range.
- Code: `lectures/Lecture_6/2_Lottery_Game.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    if(n>=300 and n<=460){
        cout<<"Macbook"<<endl;
    }
    else if(n>=200 and n<=280){
        cout<<"Kurkure"<<endl;
    }
    else if(n>=1100 and n<=1500){
        cout<<"Cycle"<<endl;
    }
    else if(n>50 and n<=80){
        cout<<"Bike"<<endl;
    }
    else{
        cout<<"Better luck Next time"<<endl;
    }
    return 0;
}
```

### 3. Lottery Game Part 2
- Topic: Basic Programming, Conditionals
- Description: Use nested conditions to print a reward and its variant.
- Output: Prints the reward selected for the input range.
- Code: `lectures/Lecture_6/3_Lottery_game_part2.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    if(n>=300 and n<=460){
        cout<<"You won a Macbook"<<endl;
        if(n>=300 and n<=380){
            cout<<"Model: M1 Mac"<<endl;
        }
        else{
            cout<<"Model: M2 Mac"<<endl;
        }
    }
    else if(n>=200 and n<=280){
        cout<<"You won a pack of Kurkure"<<endl;
        if(n>=200 and n<=240){
            cout<<"Flavor: Chilli Kurkure"<<endl;
        }
        else{
            cout<<"Flavor: Onion Kurkure"<<endl;
        }
    }
    else if(n>=1100 and n<=1500){
        cout<<"You won a Cycle"<<endl;
        if(n>=1100 and n<=1300){
            cout<<"Brand: Avon Cycle"<<endl;
        }
        else{
            cout<<"Brand: Hero Cycle"<<endl;
        }
    }
    else if(n>50 and n<=80){
        cout<<"You won a Bike"<<endl;
        if(n>50 and n<=65){
            cout<<"Model: Bullet"<<endl;
        }
        else{
            cout<<"Model: Rajdoot"<<endl;
        }
    }
    else{
        cout<<"Better luck Next time"<<endl;
    }
    return 0;
}
```
