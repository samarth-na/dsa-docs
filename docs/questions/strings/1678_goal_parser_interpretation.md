## 1678 - Goal Parser Interpretation

### Question
1678 - Goal Parser Interpretation

### Description

You own a Goal Parser that can interpret a string `command`. The `command` consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string `command`, return the Goal Parser's interpretation of `command`.

### Topic
Strings

### Difficulty
Easy

### Input
```
G()(al)
```

### Output
```
Goal
```

### Code
Source: `lectures/LeetCode/1678.cpp`

```cpp
#include <iostream>
#include <string>
using namespace std;

string interpret(string command) {
    string ans = "";
    for(int i = 0; i < command.size(); ){
        if(command[i] == 'G'){
            ans.append("G");
            i++;
        }
        else if(command.substr(i,2) == "()"){
            ans.append("o");
            i += 2;
        }
        else if(command.substr(i,4) == "(al)"){
            ans.append("al");
            i += 4;
        }
    }
    return ans;
}

int main() {
    string command;
    cin >> command;

    cout << interpret(command);

    return 0;
}
```
