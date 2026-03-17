## LeetCode 557 - Reverse Words in a String III

### Question
LeetCode 557 - Reverse Words in a String III

### Description

Reverse every word in a sentence while preserving word order. Aim for a correct and efficient implementation, and explain the core idea and edge-case handling.

### Topic
LeetCode, String, Two Pointers

### Difficulty
Easy

### Input
```text
Let's take LeetCode contest
```

### Output
```text
s'teL ekat edoCteeL tsetnoc
```

### Code
Source: `lectures/LeetCode/557.cpp`

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseWords(string s) {
    string ans = "";
    string j = "";

    for(int i = 0; i < s.size(); i++){
        if(s[i] == ' ' && j.empty()){
            continue;
        }
        if(s[i] != ' '){
            j.push_back(s[i]);
        }
        if(s[i] == ' ' && !j.empty()){
            reverse(j.begin(), j.end());
            ans.append(j);
            j.clear();
            ans.push_back(' ');
        }
    }

    if(!j.empty()){
        reverse(j.begin(), j.end());
        ans.append(j);
        j.clear();
    }

    if(!ans.empty() && ans[ans.size()-1] == ' '){
        ans.pop_back();
    }

    return ans;
}

int main() {
    string s;
    getline(cin, s);

    cout << reverseWords(s);

    return 0;
}
```
