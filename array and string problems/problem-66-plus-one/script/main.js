// Problem 66 Plus One
var plusOne = function (digits) {
  // convert the array to number of type BigInt
  let res = BigInt(digits.join(""));
  // increment the number and convert it to array of strings then map
  // over the array to convert it to array of numbers
  return [...`${++res}`].map((num) => +num);
};
console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([1, 2])); // [1, 3]
console.log(plusOne([1, 0, 9])); // [1, 1, 0]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
