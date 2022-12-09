// Problem 905 Sort Array By Parity
var sortArrayByParity = function (nums) {
  // check for edge cases
  if (!nums.length || nums.length === 1) return nums;
  // filter odd numbers in an array
  let odd = nums.filter((num) => num % 2 !== 0);
  // concat even numbers and odd numbers in one sorted array
  let allNums = [...nums.filter((num) => num % 2 === 0), ...odd];
  return allNums;
};
console.log(sortArrayByParity([3, 1, 2, 4])); // [2, 4, 3, 1]
console.log(sortArrayByParity([0])); // [0]
