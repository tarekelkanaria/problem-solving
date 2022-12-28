// Problem 557 Reverse Words in a String III
var reverseWords = function (s) {
  let res = s
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
  return res;
};
console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding")); // "doG gniD"
