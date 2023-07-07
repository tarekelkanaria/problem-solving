// Problem 3 Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = (s) => {
  const lettersFrequencies = new Map();
  let longestLength = 0,
    j = 0;
  for (let i = 0; i < s.length; i++) {
    // Map each letter with the count of its frequency
    lettersFrequencies.set(s[i], lettersFrequencies.get(s[i]) + 1 || 1);
    // if there is a repeating letter shrink the window
    while (lettersFrequencies.get(s[i]) > 1) {
      let charFrequency = lettersFrequencies.get(s[j]);
      charFrequency > 1
        ? lettersFrequencies.set(s[j], charFrequency - 1)
        : lettersFrequencies.delete(s[j]);
      j++;
    }
    // extract the longest length of the window each iterate
    longestLength = Math.max(longestLength, i - j + 1);
  }
  return longestLength;
};
// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
