---
title: bridge and torch crossing
description: Find the minimum total time to move four people across a bridge with one torch.
topics: logical puzzle, greedy
Difficulty: medium
---


## Bridge And Torch Crossing

### Description

Find the minimum total time to move four people across a bridge with one torch. Reason through the constraints step by step and justify why the final strategy is optimal or minimal.

### Input

```text
4
1 2 7 10
```

### Output

```text
17
```

### Code

Source: `docs/questions/logical_puzzles/bridge_and_torch_crossing.md`

```cpp
#include <iostream>
#include <queue>
#include <tuple>
#include <vector>
using namespace std;

int minimumCrossingTime(const vector<int>& times) {
    int n = (int)times.size();
    int fullMask = (1 << n) - 1;
    const int INF = 1e9;

    vector<vector<int>> dist(1 << n, vector<int>(2, INF));
    priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>, greater<tuple<int, int, int>>> pq;

    // State: (cost, leftMask, torchSide) where torchSide 0 = left, 1 = right.
    dist[fullMask][0] = 0;
    pq.push({0, fullMask, 0});

    while (!pq.empty()) {
        auto [cost, leftMask, side] = pq.top();
        pq.pop();

        if (cost != dist[leftMask][side]) continue;
        if (leftMask == 0 && side == 1) return cost;

        if (side == 0) {
            // Move two people from left to right.
            for (int i = 0; i < n; i++) {
                if (!(leftMask & (1 << i))) continue;
                for (int j = i + 1; j < n; j++) {
                    if (!(leftMask & (1 << j))) continue;
                    int nextMask = leftMask ^ (1 << i) ^ (1 << j);
                    int nextCost = cost + max(times[i], times[j]);
                    if (nextCost < dist[nextMask][1]) {
                        dist[nextMask][1] = nextCost;
                        pq.push({nextCost, nextMask, 1});
                    }
                }
            }
        } else {
            // Move one person from right to left with torch.
            int rightMask = fullMask ^ leftMask;
            for (int i = 0; i < n; i++) {
                if (!(rightMask & (1 << i))) continue;
                int nextMask = leftMask | (1 << i);
                int nextCost = cost + times[i];
                if (nextCost < dist[nextMask][0]) {
                    dist[nextMask][0] = nextCost;
                    pq.push({nextCost, nextMask, 0});
                }
            }
        }
    }
    return -1;
}

int main() {
    int n;
    cin >> n;
    vector<int> times(n);
    for (int i = 0; i < n; i++) cin >> times[i];

    cout << minimumCrossingTime(times) << '\n';
    return 0;
}
```
