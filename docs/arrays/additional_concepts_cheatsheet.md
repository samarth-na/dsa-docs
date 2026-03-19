# Additional Concepts Cheatsheet

This cheatsheet covers advanced concepts and techniques that frequently appear in array problems from the SAGE repository. Master these to tackle medium and hard difficulty problems with confidence.

---

## Table of Contents
1. [Hash Maps & Hash Sets](#hash-maps--hash-sets)
2. [Dynamic Programming Basics](#dynamic-programming-basics)
3. [Mathematical Tricks](#mathematical-tricks)
4. [String Manipulation](#string-manipulation)
5. [Greedy Algorithms](#greedy-algorithms)
6. [Divide and Conquer](#divide-and-conquer)

---

## Hash Maps & Hash Sets

### When to Use Hash Maps
- Need O(1) lookup for elements
- Counting frequencies
- Finding pairs/triplets with specific sums
- Caching results

### Common Patterns

#### Pattern 1: Two Sum with Hash Map
```cpp
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> hashMap;

    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];

        if (hashMap.count(complement)) {
            return {hashMap[complement], i};
        }
        hashMap[nums[i]] = i;
    }

    return {};
}
```

#### Pattern 2: Count Frequency
```cpp
unordered_map<int, int> countFrequency(vector<int>& arr) {
    unordered_map<int, int> freq;

    for (int num : arr) {
        freq[num]++;
    }

    return freq;
}
```

#### Pattern 3: Anagram Check
```cpp
bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;

    unordered_map<char, int> count;

    for (char c : s) {
        count[c]++;
    }

    for (char c : t) {
        if (count.find(c) == count.end() || count[c] == 0) {
            return false;
        }
        count[c]--;
    }

    return true;
}
```

### Hash Map Problems Reference

| Problem | LeetCode | Key Insight |
|---------|----------|-------------|
| Two Sum | 1 | Complement lookup |
| Valid Anagram | 242 | Character frequency |
| Find the Difference | 389 | XOR or frequency |
| Max Points on a Line | 149 | Hash slope calculations |

### Time Complexity
| Operation | HashMap (avg) | HashMap (worst) | Vector Search |
|-----------|---------------|-----------------|---------------|
| Insert | O(1) | O(n) | O(1) |
| Delete | O(1) | O(n) | O(n) |
| Search | O(1) | O(n) | O(n) |

---

## Dynamic Programming Basics

### Key Concepts
1. **Optimal Substructure**: Solution can be built from subproblems
2. **Overlapping Subproblems**: Same subproblems solved multiple times
3. **State Definition**: What does dp[i] represent?
4. **Transition**: How to calculate dp[i] from previous states?

### Classic Array DP Patterns

#### Pattern 1: Maximum Subarray (Kadane's)
```cpp
// State: dp[i] = max sum ending at index i
// Transition: dp[i] = max(nums[i], dp[i-1] + nums[i])

int maxSubArray(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n);
    dp[0] = nums[0];
    int maxSum = nums[0];

    for (int i = 1; i < n; i++) {
        dp[i] = max(nums[i], dp[i-1] + nums[i]);
        maxSum = max(maxSum, dp[i]);
    }

    return maxSum;
}

// Space-optimized
int maxSubArrayOptimized(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }

    return maxSum;
}
```

#### Pattern 2: Pascal's Triangle
```cpp
vector<vector<int>> generate(int numRows) {
    vector<vector<int>> triangle;

    for (int i = 0; i < numRows; i++) {
        vector<int> row(i + 1, 1);

        for (int j = 1; j < i; j++) {
            row[j] = triangle[i-1][j-1] + triangle[i-1][j];
        }

        triangle.push_back(row);
    }

    return triangle;
}

// Get specific row
vector<int> getRow(int rowIndex) {
    vector<int> row(rowIndex + 1, 1);

    for (int i = 1; i < rowIndex; i++) {
        for (int j = i; j > 0; j--) {
            row[j] += row[j-1];
        }
    }

    return row;
}
```

#### Pattern 3: Stone Game
```cpp
bool stoneGame(vector<int>& piles) {
    // This problem guarantees Alice wins
    // But here's how to calculate max score

    int n = piles.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));

    // Base case: single pile
    for (int i = 0; i < n; i++) {
        dp[i][i] = piles[i];
    }

    // Fill table
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i + len <= n; i++) {
            int j = i + len - 1;
            dp[i][j] = max(piles[i] - dp[i+1][j],
                          piles[j] - dp[i][j-1]);
        }
    }

    return dp[0][n-1] > 0;
}
```

#### Pattern 4: Maximum Sum Circular Subarray
```cpp
int maxSubarraySumCircular(vector<int>& nums) {
    int totalSum = nums[0];
    int maxSum = nums[0];
    int minSum = nums[0];
    int curMax = nums[0];
    int curMin = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        // Kadane for maximum
        curMax = max(nums[i], curMax + nums[i]);
        maxSum = max(maxSum, curMax);

        // Kadane for minimum
        curMin = min(nums[i], curMin + nums[i]);
        minSum = min(minSum, curMin);

        totalSum += nums[i];
    }

    // If all numbers are negative
    if (totalSum == minSum) {
        return maxSum;
    }

    // Maximum of normal subarray OR wrapped subarray
    return max(maxSum, totalSum - minSum);
}
```

### DP Problems Reference

| Problem | LeetCode | Difficulty | Pattern |
|---------|----------|------------|---------|
| Maximum Subarray | 53 | Medium | Kadane's |
| Pascal's Triangle | 118 | Easy | Build table |
| Stone Game | 877 | Medium | Game DP |
| Circular Subarray | 918 | Hard | Kadane + Inversion |

---

## Mathematical Tricks

### Common Math Patterns

#### Reverse Integer
```cpp
int reverse(int x) {
    int reversed = 0;

    while (x != 0) {
        int digit = x % 10;
        x /= 10;

        // Check overflow
        if (reversed > INT_MAX / 10 ||
           (reversed == INT_MAX / 10 && digit > 7)) {
            return 0;
        }
        if (reversed < INT_MIN / 10 ||
           (reversed == INT_MIN / 10 && digit < -8)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return reversed;
}
```

#### Palindrome Number
```cpp
bool isPalindrome(int x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;

    // Reverse the number
    int original = x;
    int reversed = 0;

    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x /= 10;
    }

    return original == reversed;
}
```

#### Plus One
```cpp
vector<int> plusOne(vector<int>& digits) {
    int n = digits.size();

    for (int i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    // All digits were 9
    vector<int> result(n + 1, 0);
    result[0] = 1;
    return result;
}
```

#### Happy Number
```cpp
int sumOfSquares(int n) {
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum += digit * digit;
        n /= 10;
    }
    return sum;
}

bool isHappy(int n) {
    unordered_set<int> seen;

    while (n != 1 && !seen.count(n)) {
        seen.insert(n);
        n = sumOfSquares(n);
    }

    return n == 1;
}

// Floyd's cycle detection (more efficient)
bool isHappyFloyd(int n) {
    auto sumSquareDigits = [](int x) {
        int sum = 0;
        while (x) {
            int d = x % 10;
            sum += d * d;
            x /= 10;
        }
        return sum;
    };

    int slow = n;
    int fast = sumSquareDigits(n);

    while (fast != 1 && slow != fast) {
        slow = sumSquareDigits(slow);
        fast = sumSquareDigits(sumSquareDigits(fast));
    }

    return fast == 1;
}
```

### Math-Based Problems

| Problem | LeetCode | Key Technique |
|---------|----------|---------------|
| Reverse Integer | 7 | Overflow checking |
| Palindrome Number | 9 | Digit extraction |
| Plus One | 66 | Carry propagation |
| Happy Number | 202 | Floyd's cycle detection |
| Gas Station | 134 | Greedy math |
| kth Factor | 1492 | Divisor checking |

---

## String Manipulation

### Common String-Array Operations

#### String to Integer (atoi)
```cpp
int myAtoi(string s) {
    int i = 0, n = s.size();

    // Skip leading whitespace
    while (i < n && s[i] == ' ') i++;

    // Check sign
    int sign = 1;
    if (i < n && (s[i] == '+' || s[i] == '-')) {
        sign = (s[i++] == '-') ? -1 : 1;
    }

    // Convert digits
    int result = 0;
    while (i < n && isdigit(s[i])) {
        int digit = s[i] - '0';

        // Check overflow
        if (result > INT_MAX / 10 ||
           (result == INT_MAX / 10 && digit > 7)) {
            return (sign == 1) ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
}
```

#### Reverse Words in a String
```cpp
string reverseWords(string s) {
    string result;
    int n = s.size();
    int i = 0;

    while (i < n) {
        // Skip spaces
        while (i < n && s[i] == ' ') i++;
        if (i >= n) break;

        // Find end of word
        int j = i;
        while (j < n && s[j] != ' ') j++;

        // Extract word
        string word = s.substr(i, j - i);

        // Add to result
        if (!result.empty()) result += ' ';
        result = word + result;

        i = j;
    }

    return result;
}
```

#### Valid Palindrome
```cpp
bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;

    while (left < right) {
        // Skip non-alphanumeric
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;

        if (tolower(s[left]) != tolower(s[right])) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
```

### To Lower Case
```cpp
string toLowerCase(string s) {
    for (char& c : s) {
        if (c >= 'A' && c <= 'Z') {
            c = c - 'A' + 'a';
        }
    }
    return s;
}
```

### Goal Parser Interpretation
```cpp
string interpret(string command) {
    string result;
    for (int i = 0; i < command.size(); i++) {
        if (command[i] == 'G') {
            result += 'G';
        } else if (command[i] == '(' && command[i+1] == ')') {
            result += 'o';
            i++;
        } else if (command[i] == '(' && command[i+1] == 'a') {
            result += "al";
            i += 3;
        }
    }
    return result;
}
```

### Score of a String
```cpp
int scoreOfString(string s) {
    int score = 0;
    for (int i = 0; i < s.size() - 1; i++) {
        score += abs(s[i] - s[i+1]);
    }
    return score;
}
```

### String Problems Reference

| Problem | LeetCode | Key Technique |
|---------|----------|---------------|
| String to Integer | 8 | State machine |
| Length of Last Word | 58 | Traverse from end |
| Reverse Words | 151 | Stack or two-pass |
| Reverse Words III | 557 | In-place swap |
| Valid Palindrome | 125 | Two pointers |
| To Lower Case | 709 | Character mapping |

---

## Greedy Algorithms

### When to Use Greedy
- Local optimal leads to global optimal
- No need to reconsider previous choices
- Problems involving optimization with constraints

### Gas Station (Classic Greedy)
```cpp
int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    int totalTank = 0;
    int currentTank = 0;
    int start = 0;

    for (int i = 0; i < gas.size(); i++) {
        int diff = gas[i] - cost[i];
        totalTank += diff;
        currentTank += diff;

        // If can't reach station i+1, start from i+1
        if (currentTank < 0) {
            start = i + 1;
            currentTank = 0;
        }
    }

    // Can complete circuit if total >= 0
    return (totalTank >= 0) ? start : -1;
}
```

### Greedy vs Dynamic Programming

| Problem | Approach | Why |
|---------|----------|-----|
| Gas Station | Greedy | Local deficit doesn't affect global feasibility |
| Maximum Subarray | Either | Both work, DP is more intuitive |
| Activity Selection | Greedy | Always pick earliest finishing |

---

## Divide and Conquer

### Key Idea
1. Divide: Split problem into smaller subproblems
2. Conquer: Solve subproblems recursively
3. Combine: Merge solutions

### Median of Two Sorted Arrays
```cpp
double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) {
        swap(nums1, nums2);
    }

    int m = nums1.size();
    int n = nums2.size();
    int left = 0, right = m;

    while (left <= right) {
        int partition1 = (left + right) / 2;
        int partition2 = (m + n + 1) / 2 - partition1;

        int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1 - 1];
        int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];
        int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2 - 1];
        int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Found the correct partition
            if ((m + n) % 2 == 0) {
                return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
            } else {
                return max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }

    return 0.0;
}
```

### Majority Element (Divide and Conquer)
```cpp
int majorityElement(vector<int>& nums) {
    return majorityElementHelper(nums, 0, nums.size() - 1);
}

int majorityElementHelper(vector<int>& nums, int low, int high) {
    if (low == high) {
        return nums[low];
    }

    int mid = (low + high) / 2;
    int leftMajority = majorityElementHelper(nums, low, mid);
    int rightMajority = majorityElementHelper(nums, mid + 1, high);

    if (leftMajority == rightMajority) {
        return leftMajority;
    }

    // Count occurrences
    int leftCount = countInRange(nums, leftMajority, low, high);
    int rightCount = countInRange(nums, rightMajority, low, high);

    return (leftCount > rightCount) ? leftMajority : rightMajority;
}

int countInRange(vector<int>& nums, int num, int low, int high) {
    int count = 0;
    for (int i = low; i <= high; i++) {
        if (nums[i] == num) count++;
    }
    return count;
}
```

### Divide and Conquer Reference

| Problem | LeetCode | Key Insight |
|---------|----------|-------------|
| Median of Sorted Arrays | 4 | Binary search on partition |
| Majority Element | 169 | Boyer-Moore simpler |
| Maximum Subarray | 53 | Divide at midpoint |

---

## Algorithm Complexity Cheatsheet

### Sorting Algorithms
| Algorithm | Time (avg) | Time (worst) | Space |
|-----------|------------|--------------|-------|
| Quick Sort | O(n log n) | O(n²) | O(log n) |
| Merge Sort | O(n log n) | O(n log n) | O(n) |
| Heap Sort | O(n log n) | O(n log n) | O(1) |

### Searching
| Algorithm | Time | Space |
|-----------|------|-------|
| Linear Search | O(n) | O(1) |
| Binary Search | O(log n) | O(1) |
| Hash Search | O(1) | O(n) |

### Data Structures
| Structure | Access | Search | Insert | Delete |
|-----------|--------|--------|--------|--------|
| Array | O(1) | O(n) | O(n) | O(n) |
| HashMap | O(1) | O(1) | O(1) | O(1) |
| Set | - | O(1) | O(1) | O(1) |

---

## Common Pitfalls and Solutions

### 1. Integer Overflow
```cpp
// BAD: left + (right - left) / 2
// This can overflow if left and right are large
int mid = (left + right) / 2;

// GOOD: Use this instead
int mid = left + (right - left) / 2;
```

### 2. Off-by-One Errors
```cpp
// When using <= vs <
// Binary search on inclusive range
while (left <= right)  // NOT left < right

// Binary search on exclusive range
while (left < right)    // NOT left <= right
```

### 3. Empty/Edge Cases
```cpp
// Always check these
if (nums.empty()) return {};
if (nums.size() == 1) return nums[0];
if (left >= nums.size()) return -1;
```

### 4. Modifying Input
```cpp
// Some problems expect you NOT to modify input
// In such cases, make a copy first
vector<int> copy = nums;  // Make copy before sorting
```

---

## Practice Strategy

1. **Start with Basics**: Master hash maps and two pointers
2. **Learn Patterns**: Kadane's, Dutch National Flag, Prefix Sum
3. **Practice Variations**: Modify problems and solve differently
4. **Read Solutions**: Learn from editorial approaches
5. **Time Yourself**: Build speed for interviews

---

*Additional concepts cheatsheet for SAGE_6thSem_Section_B repository*
