# Check If N and Its Double Exist

---

<font color="#1a237e"> Given an array `arr` of integers, check if there exist two indices `i` and `j` such that :

- i != j

- 0 <= i, j < arr.length

- arr[i] == 2 \* arr[j]

</font>

## Example 1:

```
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
```

## Example 2:

```
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

```

## About the solution

- **Time complexity :** `O(n)`

- **Space complexity :** `O(1)`
