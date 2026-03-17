---
title: camel and bananas
description: Maximize bananas delivered when the camel consumes bananas while traveling.
topics: logical puzzle, greedy, math
Difficulty: hard
---


## Camel And Bananas

### Description

Maximize bananas delivered when the camel consumes bananas while traveling. Reason through the constraints step by step and justify why the final strategy is optimal or minimal.

### Input

```text
3000 1000 1000
```

### Output

```text
533.33
```

### Code

Source: `docs/questions/logical_puzzles/camel_and_bananas.md`

```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
using namespace std;

double maxBananasDelivered(double bananas, double distance, double capacity) {
    while (distance > 1e-12 && bananas > 0.0) {
        double trips = ceil(bananas / capacity);

        if (trips <= 1.0) {
            bananas -= distance;
            return max(0.0, bananas);
        }

        double consumePerKm = 2.0 * trips - 1.0;
        double threshold = (trips - 1.0) * capacity;
        double maxAdvanceBeforeTripsDrop = (bananas - threshold) / consumePerKm;

        if (maxAdvanceBeforeTripsDrop >= distance) {
            bananas -= consumePerKm * distance;
            distance = 0.0;
        } else {
            bananas -= consumePerKm * maxAdvanceBeforeTripsDrop;
            distance -= maxAdvanceBeforeTripsDrop;
        }
    }
    return max(0.0, bananas);
}

int main() {
    double bananas, distance, capacity;
    cin >> bananas >> distance >> capacity;

    cout << fixed << setprecision(2)
         << maxBananasDelivered(bananas, distance, capacity) << '\n';
    return 0;
}
```
