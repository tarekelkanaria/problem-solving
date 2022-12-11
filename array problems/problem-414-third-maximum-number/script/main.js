// Problem 414 Third Maximum Number
var thirdMax = function (nums) {
  // Create set of sorted nums
  let unique = new Set(nums.sort((a, b) => b - a));
  //   create array contain the values of the set
  let uniqueArr = [...unique];
  // check if the third item exist return it, else return the first item
  if (uniqueArr[2] !== undefined) return uniqueArr[2];
  else return uniqueArr[0];
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3])); // 0
