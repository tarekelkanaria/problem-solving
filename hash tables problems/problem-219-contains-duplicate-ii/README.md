# Contains Duplicate II

---

<font color="#1a237e">

Given an integer array `nums` and an integer `k`, return `true` _if there are two distinct indices_ `i` _and_ `j` _in the array such that_ `nums[i] == nums[j]` and `abs(i - j) <= k`.</font>

## Example 1:

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

## Example 2:

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

## Example 3:

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

## About the solution

- **Time complexity :** `O(n)` where `n` is the length of `nums`.

- **Space complexity :** `O(n)` where `n` is the length of `nums`.
