---
title: lecture 4 Basics of Programming Practice
content: "basic programming, loops, math, digit manipulation"
description: This lecture covers If-else statements; While loops and for loops; Basic Programming; Loops; Math; Digit Manipulation; Conditionals.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Basic Programming
- Loops
- Math
- Digit Manipulation
- Conditionals

## Description

This lecture covers If-else statements; While loops and for loops; Basic Programming; Loops; Math; Digit Manipulation; Conditionals.

## Questions

### 1. Factorial of a Number
- Topic: Basic Programming, Loops, Math
- Description: Calculate the factorial of a non-negative integer.
- Output: Prints the factorial of the input number.
- Code: `lectures/Lecture_4/10_factorial.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    long long fact=1;
    cin >> n;
    for(int i=1;i<=n;i++)
        fact*=i;
    cout << fact;
    return 0;
}
```

### 2. Even Numbers from 1 to 100
- Topic: Basic Programming, Loops
- Description: Print all even numbers in the range 1 to 100.
- Output: Print all even numbers in the range 1 to 100.
- Code: `lectures/Lecture_4/11_Even_numbers_from_1_to_100.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    for(int i=2;i<=100;i+=2)
        cout << i << " ";
    return 0;
}
```

### 3. Sum of Digits
- Topic: Basic Programming, Loops, Digit Manipulation, Math
- Description: Add all digits of an integer.
- Output: Prints the computed sum.
- Code: `lectures/Lecture_4/12_Sum_of_Digits.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int n,sum=0;
    cin >> n;
    while(n>0) {
        sum+=n%10;
        n/=10;
    }
    cout << sum;
    return 0;
}
```

### 4. Reverse a Number
- Topic: Basic Programming, Loops, Digit Manipulation, Math
- Description: Reverse the digits of an integer.
- Output: Prints the reversed number if it satisfies the problem conditions.
- Code: `lectures/Lecture_4/13_Reverse_of_Number.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int n,rev=0;
    cin >> n;
    while(n>0) {
        rev = rev*10 + n%10;
        n/=10;
    }
    cout << rev;
    return 0;
}
```

### 5. Add Two Numbers
- Topic: Basic Programming, Math
- Description: Read two numbers and print their sum.
- Output: Prints the sum of the two input numbers.
- Code: `lectures/Lecture_4/1_addtwonumbers.cpp`
```cpp
#include<iostream>
using namespace std;
int main(){
    int a,b;
    cin>>a>>b;
    int c=a+b;
    cout<<c<<endl;
    return 0;
}
```

### 6. Simple Interest Calculation
- Topic: Basic Programming, Math
- Description: Compute simple interest from principal, rate, and time.
- Output: Prints the calculated simple interest.
- Code: `lectures/Lecture_4/2_simple_interest_calculation.cpp`
```cpp
#include<iostream>
using namespace std;
int main(){
    int p,r,t;
    cin>>p>>r>>t;
    int si = (p*r*t)/100;
    cout<<si<<endl;
    return 0;
}
```

### 7. Check Whether a Number is Odd or Even
- Topic: Basic Programming, Conditionals, Math
- Description: Decide whether an integer is odd or even.
- Output: Prints whether the given number is odd or even.
- Code: `lectures/Lecture_4/3_check_wether_number.cpp`
```cpp
#include<iostream>
using namespace std;
int main(){
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

### 8. Maximum of Two Numbers
- Topic: Basic Programming, Conditionals
- Description: Compare two inputs and print the larger value.
- Output: Prints the maximum value.
- Code: `lectures/Lecture_4/4_Maximu_of_two_numbers.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int a,b;
    cin >> a >> b;
    if(a>b)
        cout << a;
    else
        cout << b;
    return 0;
}
```

### 9. Maximum of Three Numbers
- Topic: Basic Programming, Conditionals
- Description: Find the largest among three given numbers.
- Output: Prints the maximum value.
- Code: `lectures/Lecture_4/5_Maximum_of_three_numbers.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int a,b,c;
    cin >> a >> b >> c;
    if(a>=b && a>=c)
        cout << a;
    else if(b>=a && b>=c)
        cout << b;
    else
        cout << c;
    return 0;
}
```

### 10. Grade Card Program
- Topic: Basic Programming, Conditionals
- Description: Map marks to a grade using conditional logic.
- Output: Prints the grade for the given marks.
- Code: `lectures/Lecture_4/6_Grade_Card_problem.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int marks;
    cin >> marks;
    if(marks>=90)
        cout << "A";
    else if(marks>=75)
        cout << "B";
    else if(marks>=60)
        cout << "C";
    else if(marks>=40)
        cout << "D";
    else
        cout << "F";
    return 0;
}
```

### 11. Print Counting from 1 to N
- Topic: Basic Programming, Loops
- Description: Print numbers from 1 up to N.
- Output: Prints the requested sequence in order.
- Code: `lectures/Lecture_4/7_Print_counting_from_1_to_N.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    for(int i=1;i<=n;i++)
        cout << i << " ";
    return 0;
}
```

### 12. Sum of N Natural Numbers
- Topic: Basic Programming, Loops, Math
- Description: Compute the sum of the first N natural numbers.
- Output: Prints the computed sum.
- Code: `lectures/Lecture_4/8_Find_the_sum_of_N_Natural_Numbers.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    int n,sum=0;
    cin >> n;
    for(int i=1;i<=n;i++)
        sum+=i;
    cout << sum;
    return 0;
}
```

### 13. Multiplication Table of 7
- Topic: Basic Programming, Loops, Math
- Description: Print the multiplication table of 7.
- Output: Prints the requested sequence in order.
- Code: `lectures/Lecture_4/9_Seven_table.cpp`
```cpp
#include <iostream>
using namespace std;
int main() {
    for(int i=1;i<=10;i++)
        cout << 7*i << " ";
    return 0;
}
```
