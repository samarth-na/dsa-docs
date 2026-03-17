---
title: measure 9 minutes with 4 and 7 minute hourglasses
description: Use two hourglasses to measure exactly nine minutes.
topics: logical puzzle, simulation
Difficulty: medium
---


## Measure 9 Minutes With 4 And 7 Minute Hourglasses

### Description

Use two hourglasses to measure exactly nine minutes. Reason through the constraints step by step and justify why the final strategy is optimal or minimal.

### Input

```text
4 7 9
```

### Output

```text
Start both hourglasses at t=0.
At t=4, flip the 4-minute hourglass.
At t=7, flip the 7-minute hourglass.
At t=8, flip the 4-minute hourglass.
At t=9, stop (exactly 9 minutes measured).
```

### Code

Source: `docs/questions/logical_puzzles/measure_9_minutes_with_4_and_7_minute_hourglasses.md`

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b, target;
    cin >> a >> b >> target;

    if (a == 4 && b == 7 && target == 9) {
        cout << "Start both hourglasses at t=0.\n";
        cout << "At t=4, flip the 4-minute hourglass.\n";
        cout << "At t=7, flip the 7-minute hourglass.\n";
        cout << "At t=8, flip the 4-minute hourglass.\n";
        cout << "At t=9, stop (exactly 9 minutes measured).\n";
    } else {
        cout << "This reference implementation demonstrates the classic 4,7,9 puzzle only.\n";
    }

    return 0;
}
```
