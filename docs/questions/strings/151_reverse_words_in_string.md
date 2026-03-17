## 151 - Reverse Words in a String

### Question
151 - Reverse Words in a String

### Description

Given an input string `s`, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

### Topic
Strings

### Difficulty
Medium

### Input
```
the sky is blue
```

### Output
```
blue is sky the
```

### Code
Source: `lectures/LeetCode/151.cpp`

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseWords(string s) {
    string ans = "";
    string j = "";
    
    for(int i = s.size() - 1; i >= 0; i--){
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
