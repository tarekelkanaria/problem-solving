# Group Anagrams

---

<font color="#1a237e">

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</font>

## Example 1:

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

## Example 2:

```
Input: strs = [""]
Output: [[""]]
```

## Example 3:

```
Input: strs = ["a"]
Output: [["a"]]
```

## About the solution

- **Time complexity :** `O(nm log(m))` where `n` is the number of words in `strs` and `m` is the maximum length of a word.

- **Space complexity :** `O(n)` where `n` is the number of words `strs`.
