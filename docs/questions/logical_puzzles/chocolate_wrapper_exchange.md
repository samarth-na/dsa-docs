---
title: chocolate wrapper exchange
description: Maximize chocolates when wrappers can be exchanged for free pieces.
topics: logical puzzle, math, simulation
Difficulty: medium
---


## Chocolate Wrapper Exchange

### Description

Maximize chocolates when wrappers can be exchanged for free pieces. Reason through the constraints step by step and justify why the final strategy is optimal or minimal.

### Input

```text
15 1 3
```

### Output

```text
22
```

### Code

Source: `docs/questions/logical_puzzles/chocolate_wrapper_exchange.md`

```cpp
#include <iostream>
using namespace std;

int main() {
    int money, pricePerChocolate, wrappersNeeded;
    cin >> money >> pricePerChocolate >> wrappersNeeded;

    int chocolates = money / pricePerChocolate;
    int wrappers = chocolates;

    while (wrappers >= wrappersNeeded) {
        int extra = wrappers / wrappersNeeded;
        chocolates += extra;
        wrappers = extra + (wrappers % wrappersNeeded);
    }

    cout << chocolates << '\n';
    return 0;
}
```
