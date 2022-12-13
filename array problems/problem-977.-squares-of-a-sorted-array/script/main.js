// Problem 977 Squares of a Sorted Array
var sortedSquares = function (nums) {
  // loop over the array and modify each element
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= +nums[i];
  }
  // sort the result in place and return it
  return nums.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
