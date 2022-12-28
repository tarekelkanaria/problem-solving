// Problem 344 Reverse String
var reverseString = function (s) {
  // using built-in method to reverse the array
  s.reverse();
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
// another approach
var reverseStringTwo = function (s) {
  // using two pointer and swap
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};
console.log(reverseStringTwo(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseStringTwo(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
