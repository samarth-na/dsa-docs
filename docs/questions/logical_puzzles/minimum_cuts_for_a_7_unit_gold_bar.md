---
title: minimum cuts for a 7-unit gold bar
description: Split a gold bar with the fewest cuts so daily payments can be made exactly.
topics: logical puzzle, greedy, math
Difficulty: medium
---


## Minimum Cuts For A 7 Unit Gold Bar

### Description

Split a gold bar with the fewest cuts so daily payments can be made exactly. Reason through the constraints step by step and justify why the final strategy is optimal or minimal.

### Input

```text
7
```

### Output

```text
2
Cut positions (from one end): 1, 3
Piece lengths: 1, 2, 4
```

### Code

Source: `docs/questions/logical_puzzles/minimum_cuts_for_a_7_unit_gold_bar.md`

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n == 7) {
        cout << 2 << '\n';
        cout << "Cut positions (from one end): 1, 3\n";
        cout << "Piece lengths: 1, 2, 4\n";
    } else {
        cout << "This reference solution is for the classic 7-unit puzzle.\n";
    }

    return 0;
}
```
