// Problem 14 Longest Common Prefix
var longestCommonPrefix = function (strs) {
  let res = "";
  let check = {};
  let letterIndex = 0;
  let wordIndex = 0;
  let key = strs[wordIndex][letterIndex];
  // check edge cases for the array of words
  if (!strs.length || strs.length === 1) return strs.join("");
  //   loop until the end of the words and set a boundary to 'key' internally
  while (wordIndex < strs.length && letterIndex < strs[wordIndex].length) {
    // check edge cases for internal words
    if (!strs[wordIndex].length) return res;
    // change the letter value each iterate
    key = strs[wordIndex][letterIndex];
    // set letter as key in the object and its frequency in all words as value
    if (!check[key]) {
      check[key] = 1;
    } else {
      check[key] += 1;
    }
    // if the frequency of the letter equals to number of words
    if (check[key] === strs.length) {
      // append the letter to the result, increase the letter index, delete the key, value pair
      // start the loop again
      res += key;
      letterIndex++;
      delete check[key];
      wordIndex = -1;
    }
    wordIndex++;
  }
  return res;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix([""])); // ""
console.log(longestCommonPrefix(["a"])); // "a"
console.log(longestCommonPrefix(["", ""])); // ""
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"])); // "flower"
