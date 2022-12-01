// Problem 383 Ransom Note
// Hash Table approach
var canConstruct = function (ransomNote, magazine) {
  // create object to store the letters as keys and its frequency as values
  let check = {};
  // create variable to count the remain letters after excution
  let remainLetters = 0;
  // loop over the first string and store its letters in object with value of frequency
  for (let letter of ransomNote) {
    if (!check[letter]) check[letter] = 0;
    remainLetters++;
    check[letter]++;
  }
  // loop over second string and remove the same letters from the object
  for (let char of magazine) {
    if (check[char] > 0) {
      remainLetters--;
      check[char]--;
    }
  }
  // if any letter remain in the object it means the second string can't be constructor for first string
  return remainLetters > 0 ? false : true;
};
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("cabc", "dscbbac")); // true
