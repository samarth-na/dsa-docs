# Number Theory Cheatsheet

## What to Learn

- gcd
- prime checking
- digit manipulation
- base conversion
- factor-based questions

## Common Patterns

- Use `% 10` and `/ 10` for digits
- Use `i * i <= n` for factor loops
- Convert through decimal for base conversion
- Write helper functions for repeated math tasks

## Template Ideas

```cpp
while (n > 0) {
    int digit = n % 10;
    // process digit
    n /= 10;
}
```

```cpp
for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        // factor found
    }
}
```

```cpp
while (b != 0) {
    int rem = a % b;
    a = b;
    b = rem;
}
```

## Repo Questions

- GCD Brute Force
- GCD Reverse Brute Force
- GCD Using Euclidean Algorithm
- Prime Number Check variants
- Reverse a Number
- Sum of Digits
- Decimal to Binary
- Binary to Decimal
- Armstrong Number
- Boston Number
- Chewbacca Number
- Inverse of Number
- Convert Any Base to Any Base
- LeetCode 7
- LeetCode 9
- LeetCode 1492
- LeetCode 202
- LeetCode 3658

## Pitfalls

- Overflow while reversing or multiplying
- Forgetting special cases like `n <= 1` for prime
- Mixing decimal digits with digits from another base
- Not preserving the original number when needed later

## Revision Checklist

- I can extract and process digits
- I can check prime efficiently
- I can compute gcd with Euclid's algorithm
- I can convert numbers between bases
