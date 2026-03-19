# Array DSA Cheatsheet

A comprehensive reference guide for array Data Structures and Algorithms problems.

---

## Table of Contents
1. [Basic Array Operations](#basic-array-operations)
2. [Two Pointers Technique](#two-pointers-technique)
3. [Binary Search](#binary-search)
4. [Prefix Sum](#prefix-sum)
5. [Matrix Operations](#matrix-operations)
6. [Sorting & Searching](#sorting--searching)
7. [Pattern Solutions](#pattern-solutions)

---

## Basic Array Operations

### Array Initialization
```cpp
// Basic initialization
int arr[5] = {1, 2, 3, 4, 5};

// Vector initialization
vector<int> vec = {1, 2, 3, 4, 5};
vector<int> vec2(n, 0);  // Size n, all zeros
vector<int> vec3(n, val);  // Size n, all val

// 2D array
vector<vector<int>> matrix(m, vector<int>(n, 0));
```

### Common Operations
```cpp
// Traversal
for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}

// Range-based loop
for (int num : arr) {
    cout << num << " ";
}

// Find element
auto it = find(vec.begin(), vec.end(), target);

// Sort
sort(vec.begin(), vec.end());
sort(vec.rbegin(), vec.rend());  // Reverse

// Reverse
reverse(vec.begin(), vec.end());
```

---

## Two Pointers Technique

### Classic Patterns

#### Pattern 1: Start-End Pointers
```cpp
// For problems requiring search in sorted array
// or comparing elements from both ends

// Example: Check if array is palindrome
bool isPalindrome(vector<int>& arr) {
    int left = 0;
    int right = arr.size() - 1;

    while (left < right) {
        if (arr[left] != arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```

#### Pattern 2: Slow-Fast Pointers
```cpp
// For removal or in-place modification
// Slow pointer marks position, fast traverses

// Example: Remove duplicates from sorted array
int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;

    int slow = 0;
    for (int fast = 1; fast < nums.size(); fast++) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
```

#### Pattern 3: Sliding Window
```cpp
// For subarray/substring problems
// Variable size window

// Example: Maximum sum subarray of size k
int maxSumSubarray(vector<int>& arr, int k) {
    int n = arr.size();
    if (n < k) return -1;

    // Calculate first window
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    int maxSum = windowSum;

    // Slide the window
    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = max(maxSum, windowSum);
    }

    return maxSum;
}
```

### Two Pointers Problems Reference

| Problem | LeetCode | Pattern |
|---------|----------|---------|
| Remove Duplicates | 26 | Slow-Fast |
| Remove Element | 27 | Slow-Fast |
| Reverse String | 344 | Start-End |
| Valid Palindrome | 125 | Start-End |
| Move Zeroes | 283 | Slow-Fast |
| 3Sum | 15 | Multiple pointers |
| Container With Most Water | 11 | Start-End |
| Trapping Rain Water | 42 | Start-End |

---

## Binary Search

### Standard Binary Search
```cpp
int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;  // Prevent overflow

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;  // Not found
}
```

### Binary Search Variants

#### Find Left Boundary
```cpp
int findLeftBoundary(vector<int>& arr, int target) {
    int left = 0, right = arr.size();

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
```

#### Find Right Boundary
```cpp
int findRightBoundary(vector<int>& arr, int target) {
    int left = 0, right = arr.size();

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left - 1;
}
```

#### Binary Search in Rotated Array
```cpp
int searchRotated(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;

        // Left half is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}
```

### Binary Search Problems Reference

| Problem | LeetCode | Notes |
|---------|----------|-------|
| Binary Search | 704 | Standard implementation |
| Search 2D Matrix | 74 | Modified binary search |
| Search in Rotated Array | 33 | O(log n) time |
| Median of Two Sorted Arrays | 4 | Hard - divide and conquer |

---

## Prefix Sum

### Basic Prefix Sum
```cpp
// Build prefix sum array
vector<int> prefixSum(vector<int>& arr) {
    int n = arr.size();
    vector<int> prefix(n);
    prefix[0] = arr[0];

    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}

// Range sum query
int rangeSum(vector<int>& prefix, int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}
```

### Product Prefix (Left and Right Arrays)
```cpp
// Product of array except self
vector<int> productExceptSelf(vector<int>& arr) {
    int n = arr.size();
    vector<int> result(n, 1);

    // Left products
    for (int i = 1; i < n; i++) {
        result[i] = result[i - 1] * arr[i - 1];
    }

    // Right products
    int rightProduct = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }

    return result;
}
```

### Prefix Sum Problems Reference

| Problem | LeetCode | Pattern |
|---------|----------|---------|
| Find Pivot Index | 724 | Left == Right |
| Product Except Self | 238 | Left * Right |
| Find Middle Index | 1991 | Prefix sum |
| Maximum Subarray | 53 | Kadane's algorithm |

---

## Matrix Operations

### Spiral Traversal
```cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> result;
    if (matrix.empty()) return result;

    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;

    while (top <= bottom && left <= right) {
        // Traverse right
        for (int i = left; i <= right; i++) {
            result.push_back(matrix[top][i]);
        }
        top++;

        // Traverse down
        for (int i = top; i <= bottom; i++) {
            result.push_back(matrix[i][right]);
        }
        right--;

        // Traverse left
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                result.push_back(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse up
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                result.push_back(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}
```

### Rotate Matrix (90 degrees clockwise)
```cpp
void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();

    // Transpose
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }

    // Reverse each row
    for (int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}
```

### Set Matrix Zeroes
```cpp
void setZeroes(vector<vector<int>>& matrix) {
    int m = matrix.size();
    int n = matrix[0].size();
    bool firstRowZero = false;
    bool firstColZero = false;

    // Check if first row has zero
    for (int j = 0; j < n; j++) {
        if (matrix[0][j] == 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if first column has zero
    for (int i = 0; i < m; i++) {
        if (matrix[i][0] == 0) {
            firstColZero = true;
            break;
        }
    }

    // Use first row and column as markers
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set zeros based on markers
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Handle first row and column
    if (firstRowZero) {
        for (int j = 0; j < n; j++) matrix[0][j] = 0;
    }
    if (firstColZero) {
        for (int i = 0; i < m; i++) matrix[i][0] = 0;
    }
}
```

### Diagonal Traverse
```cpp
vector<int> findDiagonal(vector<vector<int>>& matrix) {
    vector<int> result;
    int m = matrix.size();
    int n = matrix[0].size();
    int row = 0, col = 0;
    bool up = true;

    while (row < m && col < n) {
        result.push_back(matrix[row][col]);

        if (up) {
            if (col == n - 1) {
                row++;
                up = false;
            } else if (row == 0) {
                col++;
                up = false;
            } else {
                row--;
                col++;
            }
        } else {
            if (row == m - 1) {
                col++;
                up = true;
            } else if (col == 0) {
                row++;
                up = true;
            } else {
                row++;
                col--;
            }
        }
    }

    return result;
}
```

---

## Sorting & Searching

### Dutch National Flag (3-way Partition)
```cpp
// Sort colors: 0=red, 1=white, 2=blue
// Also known as the Dutch National Flag algorithm
void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;

    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                swap(nums[low++], nums[mid++]);
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(nums[mid], nums[high--]);
                break;
        }
    }
}
```

### Merge Sorted Arrays (In-place)
```cpp
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int i = m - 1;
    int j = n - 1;
    int k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // Copy remaining elements from nums2
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}
```

---

## Pattern Solutions

### Kadane's Algorithm (Maximum Subarray)
```cpp
int maxSubArray(vector<int>& arr) {
    int maxSum = arr[0];
    int currentSum = arr[0];

    for (int i = 1; i < arr.size(); i++) {
        currentSum = max(arr[i], currentSum + arr[i]);
        maxSum = max(maxSum, currentSum);
    }

    return maxSum;
}

// For circular array
int maxSubarraySumCircular(vector<int>& arr) {
    int totalSum = 0;
    int maxSum = arr[0];
    int currentMax = arr[0];
    int minSum = arr[0];
    int currentMin = arr[0];

    for (int i = 1; i < arr.size(); i++) {
        // Kadane's for max subarray
        currentMax = max(arr[i], currentMax + arr[i]);
        maxSum = max(maxSum, currentMax);

        // Kadane's for min subarray
        currentMin = min(arr[i], currentMin + arr[i]);
        minSum = min(minSum, currentMin);

        totalSum += arr[i];
    }

    // If all numbers are negative
    if (maxSum < 0) return maxSum;

    // Max of normal max or wrap-around max
    return max(maxSum, totalSum - minSum);
}
```

### Next Permutation
```cpp
void nextPermutation(vector<int>& arr) {
    int n = arr.size();
    int i = n - 2;

    // Find first decreasing element from right
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Find element just larger than arr[i] from right
        int j = n - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }
        swap(arr[i], arr[j]);
    }

    // Reverse the suffix
    reverse(arr.begin() + i + 1, arr.end());
}
```

### Trapping Rain Water
```cpp
int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}
```

### Gas Station (Greedy)
```cpp
int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    int totalTank = 0;
    int currentTank = 0;
    int start = 0;

    for (int i = 0; i < gas.size(); i++) {
        totalTank += gas[i] - cost[i];
        currentTank += gas[i] - cost[i];

        if (currentTank < 0) {
            start = i + 1;
            currentTank = 0;
        }
    }

    return totalTank >= 0 ? start : -1;
}
```

### Majority Element (Boyer-Moore Voting)
```cpp
int majorityElement(vector<int>& arr) {
    int candidate = arr[0];
    int count = 1;

    for (int i = 1; i < arr.size(); i++) {
        if (count == 0) {
            candidate = arr[i];
        }
        count += (arr[i] == candidate) ? 1 : -1;
    }

    return candidate;
}
```

---

## Quick Reference Tables

### Time Complexity
| Operation | Time Complexity |
|-----------|-----------------|
| Access by index | O(1) |
| Search (unsorted) | O(n) |
| Search (sorted) | O(log n) |
| Insert at end | O(1) amortized |
| Insert at middle | O(n) |
| Delete at end | O(1) |
| Delete at middle | O(n) |

### Space Complexity
| Technique | Space |
|-----------|-------|
| In-place sorting | O(1) |
| Merging arrays | O(n) |
| Prefix sum array | O(n) |
| 2D matrix | O(m × n) |

### Array Methods Reference (C++ Vector)
| Method | Complexity |
|--------|------------|
| push_back() | O(1) amortized |
| pop_back() | O(1) |
| insert() | O(n) |
| erase() | O(n) |
| clear() | O(n) |
| size() | O(1) |
| empty() | O(1) |
| begin() | O(1) |
| end() | O(1) |

---

## Common Mistakes to Avoid

1. **Off-by-one errors**: Be careful with loop boundaries
2. **Overflow**: Use `left + (right - left) / 2` instead of `(left + right) / 2`
3. **Modifying while iterating**: Make copies when needed
4. **Not handling empty arrays**: Always check edge cases
5. **Forgetting to update pointers**: Especially in two-pointer solutions

---

*Cheatsheet created based on SAGE_6thSem_Section_B repository LeetCode problems*
