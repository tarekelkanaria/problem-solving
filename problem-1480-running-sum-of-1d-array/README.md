# Running Sum of 1d Array

---

<font color="#1a237e">Given an array </font>`nums`. <font color="#1a237e">We define a running sum of an array as </font>`runningSum[i] = sum(nums[0]…nums[i])`.

<font color="#1a237e">Return the running sum of</font> `nums`.

## Example 1:

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

## Example 2:

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

## Example 3:

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

---

## About the solution

- **Time complexity :** `O(n)`

- **Space complexity :** `O(1)`
