# Intersection of Two Arrays

---

<font color="#1a237e">Given two integer arrays</font> `nums1` and `nums2`<font color="#1a237e">, return an array of their intersection. Each element in the result must be **unique** and you may return the result in any order.</font>

## Example 1:

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

## Example 2:

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

## About the solution

- **Time complexity :** `O(n)` where `n` is the length of `nums1` + length of `nums2`. However, this can be simplified to `O(n)`.

- **Space complexity :** `O(n)` where `n` is the length of the smallest array between `nums1` and `nums2`.
