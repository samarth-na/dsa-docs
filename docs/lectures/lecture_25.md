---
title: lecture 25 Sorting Basics and LeetCode Practice
content: "array, sorting, leetcode, math"
description: This lecture covers Elementary sorting algorithms; LeetCode math and game problems; Array; Sorting; LeetCode; Math; Number Theory; Simulation.
---

## Contents

- [Topics](#topics)
- [Description](#description)
- [Questions](#questions)

## Topics

- Array
- Sorting
- LeetCode
- Math
- Number Theory
- Simulation
- Game Theory
- Dynamic Programming

## Description

This lecture covers Elementary sorting algorithms; LeetCode math and game problems; Array; Sorting; LeetCode; Math; Number Theory; Simulation.

## Questions

### 1. Bubble Sort
- Topic: Array, Sorting
- Description: Sort an array by repeatedly swapping adjacent out-of-order elements.
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/Lecture_25/1_bubble_sort.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    // bubble sort
    for(int i=0;i<n-1;i++){
        for(int j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }
    cout<<"Sorted array through bubbble sort"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```

### 2. Selection Sort
- Topic: Array, Sorting
- Description: Sort an array by repeatedly choosing the minimum remaining element.
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/Lecture_25/2_selection_sort.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    // selection sort
    for(int i=0;i<n;i++){
        int min=i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        swap(arr[i],arr[min]);
    }
    cout<<"Sorted array through selection sort"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```

### 3. Insertion Sort
- Topic: Array, Sorting
- Description: Build a sorted prefix by inserting each new value into place.
- Output: Prints the updated array or sequence after applying the operation.
- Code: `lectures/Lecture_25/3_insertion_sort.cpp`
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];

    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
```

### 4. LeetCode 202 - Happy Number
- Topic: LeetCode, Math, Number Theory, Simulation
- Description: Repeat square-digit sums to determine whether the sequence reaches 1.
- Link: https://leetcode.com/problems/happy-number/
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/LeetCode/202.cpp`
```cpp
#include <iostream>
using namespace std;
bool isHappy(int n) {
    int sum=0;
    if(n==1 or n==7){
        return true;
    }
    else if(n<10){
        return false;
    }
    else{
        while(n!=0){
            int k=n%10;
            sum+=k*k;
            n=n/10;
        }
    }
    return isHappy(sum);
}
int main() {
    int n;
    cin>>n;
    cout<<isHappy(n)<<endl;
    return 0;
}
```

### 5. LeetCode 877 - Stone Game
- Topic: LeetCode, Array, Game Theory, Dynamic Programming
- Description: Determine whether the first player can win the stone-picking game.
- Link: https://leetcode.com/problems/stone-game/
- Output: Prints or returns the classification or boolean-style answer for the given input.
- Code: `lectures/LeetCode/877.cpp`
```cpp
#include <iostream>
#include<vector>
using namespace std;
bool stoneGame(vector<int>& piles) {
    return true;
}
int main() {
    vector<int> piles={5,3,4,5};
    cout<<stoneGame(piles)<<endl;
    return 0;
}
```
