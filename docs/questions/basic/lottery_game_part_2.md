---
title: lottery game part 2
description: Use nested conditions to print a reward and its variant.
topics: basic programming, conditionals
Difficulty: easy
---


## Lottery Game Part 2

### Description

Use nested conditions to print a reward and its variant. Use simple control flow and clean input/output handling to produce the exact required result.

### Input

```text
350
```

### Output

```text
You won a Macbook
Model: M1 Mac
```

### Code

Source: `lectures/Lecture_6/3_Lottery_game_part2.cpp`

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
