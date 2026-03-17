## LeetCode 1678 - Goal Parser Interpretation

### Question
LeetCode 1678 - Goal Parser Interpretation

### Description

Interpret the Goal Parser command string. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, String, Simulation

### Difficulty
Easy

### Input
```text
G()(al)
```

### Output
```text
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
