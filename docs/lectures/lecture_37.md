---
title: lecture 37 Strings and String-Based LeetCode Practice
content: "string, matrix, math, leetcode"
description: This lecture covers String basics in C++; Matrix multiplication exercise; String-focused LeetCode set; String; Matrix; Math; LeetCode; Two Pointers.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- String
- Matrix
- Math
- LeetCode
- Two Pointers
- Simulation
- Digit Manipulation
- Hashing

## Description

This lecture covers String basics in C++; Matrix multiplication exercise; String-focused LeetCode set; String; Matrix; Math; LeetCode; Two Pointers.

## Questions

### 1. String Basics
- Topic: String
- Description: Demonstrates common C++ string operations such as length, append, insert, erase, replace, substr, find, and swap.
- Output: Prints the result of each demonstrated string operation step by step.
- Code: `lectures/Lecture_37/1_String_basic.cpp`
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {

    string s = "Hello";
    string s2 = "World";

    // 1. length() / size()
    // Kaam: String ki length (number of characters) batata hai
    cout << "Length: " << s.length() << endl;   // Output: 5
    cout << "Size: " << s.size() << endl;       // Output: 5

    // 2. push_back()
    // Kaam: String ke end me ek character add karta hai
    s.push_back('!');
    cout << "After push_back: " << s << endl;   // Output: Hello!

    // 3. pop_back()
    // Kaam: String ka last character remove karta hai
    s.pop_back();
    cout << "After pop_back: " << s << endl;    // Output: Hello

    // 4. append()
    // Kaam: Dusri string ko end me add karta hai
    s.append(" World");
    cout << "After append: " << s << endl;      // Output: Hello World

    // 5. insert()
    // Kaam: Given position par string insert karta hai
    s.insert(5, " ");
    cout << "After insert: " << s << endl;      // Output: Hello  World (2 spaces)

    // 6. erase()
    // Kaam: String ke kuch characters remove karta hai
    // erase(start_index, number_of_characters)
    s.erase(5,1);
    cout << "After erase: " << s << endl;       // Output: Hello World

    // 7. replace()
    // Kaam: String ke kisi part ko replace karta hai
    s.replace(0,5,"Hi");
    cout << "After replace: " << s << endl;     // Output: Hi World

    // 8. substr()
    // Kaam: String ka ek part (substring) nikalta hai
    cout << "Substring: " << s.substr(0,2) << endl;  // Output: Hi

    // 9. find()
    // Kaam: Kisi substring ki first position batata hai
    cout << "Find 'World': " << s.find("World") << endl;  // Output: 3

    // 10. compare()
    // Kaam: Do strings ko compare karta hai
    // 0 -> equal
    // <0 -> s chhota hai
    // >0 -> s bada hai
    cout << "Compare s and s2: " << s.compare(s2) << endl;
    // Output: negative value (kyunki "Hi World" lexicographically "World" se chhota hai)

    // 11. at()
    // Kaam: Given index ka character return karta hai
    cout << "Character at index 1: " << s.at(1) << endl;  // Output: i

    // 12. empty()
    // Kaam: Check karta hai string empty hai ya nahi
    // 0 = false (empty nahi hai)
    // 1 = true (empty hai)
    cout << "Is string empty? " << s.empty() << endl;     // Output: 0

    // 13. clear()
    // Kaam: Puri string ko empty kar deta hai
    s.clear();
    cout << "After clear, is empty? " << s.empty() << endl; // Output: 1

    // 14. swap()
    // Kaam: Do strings ki values exchange karta hai
    string a = "Apple";
    string b = "Banana";
    a.swap(b);

    cout << "After swap a: " << a << endl;   // Output: Banana
    cout << "After swap b: " << b << endl;   // Output: Apple

    return 0;
}
```

### 2. Matrix Multiplication
- Topic: Matrix, Math
- Description: Combine two matrices to produce a result matrix.
- Output: Prints the matrix result or traversal order produced by the program.
- Code: `lectures/Lecture_37/2_matrix_multiplication.cpp`
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n,m;
    cin>>n>>m;
    vector<vector<int>> a(n,vector<int>(m));
    vector<vector<int>> b(n,vector<int>(m));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>a[i][j];
        }
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>b[i][j];
        }
    }
    vector<vector<int>> c(n,vector<int>(m));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            c[i][j]=a[i][j]*b[i][j];
        }
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cout<<c[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 3. LeetCode 344 - Reverse String
- Topic: LeetCode, String, Two Pointers
- Description: Reverse a character array in place.
- Link: https://leetcode.com/problems/reverse-string/
- Output: Prints or returns the required transformed string result.
- Code: `lectures/LeetCode/344.cpp`
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void reverseString(vector<char>& s) {
    reverse(s.begin(), s.end());
}

int main() {
    int n;
    cin >> n;

    vector<char> s(n);
    for(int i = 0; i < n; i++){
        cin >> s[i];
    }

    reverseString(s);

    for(char c : s){
        cout << c << " ";
    }

    return 0;
}
```

### 4. LeetCode 3110 - Score of a String
- Topic: LeetCode, String
- Description: Sum absolute ASCII differences between adjacent characters.
- Link: https://leetcode.com/problems/score-of-a-string/
- Output: Prints or returns the required transformed string result.
- Code: `lectures/LeetCode/3110.cpp`
```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int scoreOfString(string s) {
    int sum = 0;
    for(int i = 1; i < s.size(); i++){
        sum += abs(s[i] - s[i-1]);
    }
    return sum;
}

int main() {
    string s;
    cin >> s;

    cout << scoreOfString(s);

    return 0;
}
```

### 5. LeetCode 1678 - Goal Parser Interpretation
- Topic: LeetCode, String, Simulation
- Description: Interpret the Goal Parser command string.
- Link: https://leetcode.com/problems/goal-parser-interpretation/
- Output: Prints or returns the required transformed string result.
- Code: `lectures/LeetCode/1678.cpp`
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

### 6. LeetCode 58 - Length of Last Word
- Topic: LeetCode, String
- Description: Return the length of the final word in a string.
- Link: https://leetcode.com/problems/length-of-last-word/
- Output: Prints or returns the required transformed string result.
- Code: `lectures/LeetCode/58.cpp`
```cpp
#include <iostream>
#include <string>
using namespace std;

int lengthOfLastWord(string s) {
    int l = 0;
    for(int i = s.size() - 1; i >= 0; i--){
        if(s[i] == ' ' && l == 0){
            continue;
        }
        if(s[i] != ' '){
            l++;
        }
        else{
            break;
        }
    }
    return l;
}

int main() {
    string s;
    getline(cin, s);

    cout << lengthOfLastWord(s);

    return 0;
}
```

### 7. LeetCode 151 - Reverse Words in a String
- Topic: LeetCode, String, Two Pointers
- Description: Reverse the order of words while trimming extra spaces.
- Link: https://leetcode.com/problems/reverse-words-in-a-string/
- Output: Prints or returns the required transformed string result.
- Code: `lectures/LeetCode/151.cpp`
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

### 8. LeetCode 557 - Reverse Words in a String III
- Topic: LeetCode, String, Two Pointers
- Description: Reverse every word in a sentence while preserving word order.
- Link: https://leetcode.com/problems/reverse-words-in-a-string-iii/
- Output: Prints or returns the required transformed string result.
- Code: `lectures/LeetCode/557.cpp`
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

### 9. LeetCode 125 - Valid Palindrome
- Topic: LeetCode, String, Two Pointers
- Description: Check whether a string is a palindrome after filtering non-alphanumerics.
- Link: https://leetcode.com/problems/valid-palindrome/
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/LeetCode/125.cpp`
```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindrome(string s) {
    int l = 0;
    int r = s.size() - 1;

    while(l < r){
        while(l < r && !isalnum(s[l])){
            l++;
        }
        while(l < r && !isalnum(s[r])){
            r--;
        }

        if(tolower(s[l]) != tolower(s[r])){
            return false;
        }

        l++;
        r--;
    }

    return true;
}

int main() {
    string s;
    getline(cin, s);

    if(isPalindrome(s)){
        cout << "true";
    } else {
        cout << "false";
    }

    return 0;
}
```

### 10. LeetCode 9 - Palindrome Number
- Topic: LeetCode, Math, Digit Manipulation
- Description: Check whether an integer reads the same forward and backward.
- Link: https://leetcode.com/problems/palindrome-number/
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/LeetCode/9.cpp`
```cpp
#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    if(x < 0){
        return false;
    }

    long rev = 0;
    int og = x;

    while(x > 0){
        int k = x % 10;
        rev = rev * 10 + k;
        x = x / 10;
    }

    return rev == og;
}

int main() {
    int x;
    cin >> x;

    if(isPalindrome(x)){
        cout << "true";
    } else {
        cout << "false";
    }

    return 0;
}
```

### 11. LeetCode 389 - Find the Difference
- Topic: LeetCode, String, Hashing
- Description: Find the extra character added to one string.
- Link: https://leetcode.com/problems/find-the-difference/
- Output: Prints or returns the required transformed string result.
- Code: `lectures/LeetCode/389.cpp`
```cpp
#include <iostream>
#include <string>
using namespace std;

char findTheDifference(string s, string t) {
    char se;
    int freq[26] = {0};

    for(int i = 0; i < t.size(); i++){
        freq[t[i] - 'a']++;
    }

    for(int i = 0; i < s.size(); i++){
        freq[s[i] - 'a']--;
    }

    for(int i = 0; i < 26; i++){
        if(freq[i] == 1){
            se = 'a' + i;
        }
    }

    return se;
}

int main() {
    string s, t;
    cin >> s >> t;

    cout << findTheDifference(s, t);

    return 0;
}
```

### 12. LeetCode 242 - Valid Anagram
- Topic: LeetCode, String, Hashing
- Description: Check whether two strings are anagrams of each other.
- Link: https://leetcode.com/problems/valid-anagram/
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/LeetCode/242.cpp`
```cpp
#include <iostream>
#include <string>
using namespace std;

bool isAnagram(string s, string t) {
    int freq[26] = {0};

    for(int i = 0; i < t.size(); i++){
        freq[t[i] - 'a']++;
    }

    for(int i = 0; i < s.size(); i++){
        freq[s[i] - 'a']--;
    }

    for(int i = 0; i < 26; i++){
        if(freq[i] != 0){
            return false;
        }
    }

    return true;
}

int main() {
    string s, t;
    cin >> s >> t;

    if(isAnagram(s, t)){
        cout << "true";
    } else {
        cout << "false";
    }

    return 0;
}
```
