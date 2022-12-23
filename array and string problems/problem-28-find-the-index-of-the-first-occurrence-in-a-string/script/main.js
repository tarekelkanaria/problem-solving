// Problem 28 Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
  // loop over the main string
  for (let i = 0; i < haystack.length; i++) {
    // check if the substring is equal to the main string divided into multiple substrings respectively
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leto")); // -1
console.log(strStr("hello", "ll")); // 2
// another solution with the same time complexity but in one line using built-in method
var strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle);
};
console.log(strStr2("sadbutsad", "sad")); // 0
console.log(strStr2("leetcode", "leto")); // -1
console.log(strStr2("hello", "ll")); // 2
