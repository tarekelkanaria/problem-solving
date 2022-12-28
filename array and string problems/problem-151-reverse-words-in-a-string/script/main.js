// Problem 151 Reverse Words in a String
const reverseWords = (s) => {
  let res = s
    .trim()
    .split(" ")
    .filter((str) => str.match(/(\w|\d)+/gi))
    .reverse()
    .join(" ");
  return res;
};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); //  "world hello"
console.log(reverseWords("a good   example")); // "example good a"
