// Problem 387 First Unique Character in a String
const firstUniqueChar = (s) => {
  const charIndicies = new Map();
  // Map each char with its corresponding index
  for (let i = 0; i < s.length; i++) {
    // if it's exist in the map set its value to -1
    if (charIndicies.has(s[i])) {
      charIndicies.set(s[i], -1);
    } else {
      charIndicies.set(s[i], i);
    }
  }
  // loop over map values and return the first value not equal to - 1
  for (const value of charIndicies.values()) {
    if (value !== -1) return value;
  }
  // return -1 if the function didn't return any value
  return -1;
};
// Test Cases
console.log(firstUniqueChar("leetcode")); // 0
console.log(firstUniqueChar("loveleetcode")); // 2
console.log(firstUniqueChar("aabb")); // -1
