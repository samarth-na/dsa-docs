---
title: Number Theory Cheatsheet
description: Digits, primes, gcd, factors, base conversion
sidebar:
  order: 4
---

# Number Theory Cheatsheet

Most “number” problems reduce to digits, factors, or repeated reduction (gcd / mod loops).

## When to Use

- Digit extraction / transformation
- Prime/factors/divisors questions
- Base conversion (binary/decimal/any base)
- gcd/lcm style reductions

## Core Patterns

- Digits: `% 10` / `/ 10` loops
- Factors: loop to `i * i <= n` and handle paired factor `n / i`
- Primality: early exit on first divisor
- Base conversion: convert to decimal, then to target base (unless direct method is simple)
- Helpers: `gcd`, `isPrime`, `digitSum` to keep main logic readable

## Templates

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

## Practice From This Repo

- GCD Brute Force
- GCD Reverse Brute Force
- GCD Using Euclidean Algorithm
- Prime Number Check (all variants)
- Reverse a Number
- Sum of Digits
- Decimal to Binary
- Binary to Decimal
- Armstrong Number
- Boston Number
- Chewbacca Number
- Inverse of Number
- Convert Any Base to Any Base
- LeetCode 7 - Reverse Integer
- LeetCode 9 - Palindrome Number
- LeetCode 1492 - The Kth Factor of N
- LeetCode 202 - Happy Number
- LeetCode 3658 - GCD of Odd and Even Sums

## Common Pitfalls

- Overflow while reversing / multiplying / powering digits
- Prime edge cases: `n <= 1`, and handling `2` correctly
- Mixing “digits” of base-10 with digits of another base
- Losing the original value when you still need it (copy `n` first)

## Revision Checklist

- I can extract and process digits
- I can check prime efficiently
- I can compute gcd with Euclid's algorithm
- I can convert numbers between bases

## Related

- `docs/roadmap.md`
- `docs/questions_by_type.md`
