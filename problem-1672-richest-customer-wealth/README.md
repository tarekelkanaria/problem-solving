# Richest Customer Wealth

---

<font color="#1a237e">You are given an </font>`m x n` <font color="#1a237e">integer grid </font>`accounts` <font color="#1a237e">where </font>`accounts[i][j]` <font color="#1a237e">is the amount of money the </font> `i`<sup>`​​​​​​​​​​​th`​​​</sup>​ <font color="#1a237e">customer has in the </font>`j​​​​​​​​​​`<sup>`​th`</sup>​​​​ <font color="#1a237e"> bank. Return _the **wealth** that the richest customer has_. </font>

<font color="#1a237e">A customer's **wealth** is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum **wealth**.</font>

## Example 1:

```
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

```

## Example 2:

```
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

```

## Example 3:

```
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

```

---

## About the solution

- **Time complexity :** `O(n x m)`

- **Space complexity :** `O(1)`
