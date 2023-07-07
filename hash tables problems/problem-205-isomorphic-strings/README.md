# Isomorphic Strings

---

<font color="#1a237e">

Given two strings `s` and `t`, determine if they are _**isomorphic**_.

Two strings `s` and `t` are _**isomorphic**_ if the characters in `s` can be replaced to get `t`.

All occurrences of a character **must be replaced with another character** while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.</font>

## Example 1:

```
Input: s = "egg", t = "add"
Output: true
```

## Example 2:

```
Input: s = "foo", t = "bar"
Output: false
```

## Example 3:

```
Input: s = "paper", t = "title"
Output: true
```

## About the solution

- **Time complexity :** `O(n)` where `n` is the length of `s`.

- **Space complexity :** `O(n)` where `n` is the length of `s` \* 2.
