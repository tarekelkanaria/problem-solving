# Happy Number

---

<font color="#1a237e">Write an algorithm to determine if a number `n` is happy.

A _happy number_ is a number defined by the following process:

- Starting with any positive integer, replace the number by the `sum of the squares` of its **digits**.
- Repeat the process until the number equals `1` (where it will stay), or it loops endlessly in a **cycle** which does not include `1`.
- Those numbers for which this process ends in `1` are _happy_.
- Return `true` if `n` is a _happy number_, and `false` if not.</font>

## Example 1:

```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

## Example 2:

```
Input: n = 2
Output: false
```

## About the solution

- **Time complexity :** `O(log n)` where `n` is the positive integer.

- **Space complexity :** `O(1)`
