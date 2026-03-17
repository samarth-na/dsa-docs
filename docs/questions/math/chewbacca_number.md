---
title: chewbacca number
description: Transform each digit with 9-digit minimization rules to get the smallest number.
topics: math, digit manipulation, greedy
Difficulty: medium
---


## Chewbacca Number

### Description

Transform each digit with 9-digit minimization rules to get the smallest number. Apply the relevant mathematical rule carefully and validate edge cases such as zero, negatives, or single-digit values when applicable.

### Input

```text
4545
```

### Output

```text
4444
```

### Code

Source: `lectures/Lecture_23/1_chewbacca_number.cpp`

```cpp
#include <iostream>
using namespace std;
int reve(int n){
    int rev=0;
    while(n!=0){
        int k=n%10;
        rev=rev*10+k;
        n=n/10;
    }
    return rev;
}
int len(int n){
    int ans=0;
    while(n!=0){
        n=n/10;
        ans++;
    }
    return ans;
}
int main() {
    int n;
    cin>>n;
    int rev=1;
    int l=len(n);
    while(n!=0){
        int k=n%10;
        int inv=9-k;
        if(l==1 and k==9){
            rev=rev*10+k;
            l--;
        }
        if(inv<k){
            rev=rev*10+inv;
            l--;
        }
        else{
            rev=rev*10+k;
            l--;
        }
        n=n/10;
    }
    cout<<reve(rev)/10<<endl;
    return 0;
}
```
