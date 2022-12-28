# Minimum Size Subarray Sum

---

<font color="#1a237e">

Given an array of positive integers `nums` and a positive integer `target`, return _the **minimal length** of a
<font color="rgb(0 122 125)">subarray</font> whose sum is greater than or equal to_ `target`. If there is no such subarray, return `0` instead.

</font>

## Example 1:

```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

## Example 2:

```
Input: target = 4, nums = [1,4,4]
Output: 1
```

## Example 3:

```
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

## About the solution

- **Time complexity :** `O(nlog(n))`

- **Space complexity :** `O(1)`
