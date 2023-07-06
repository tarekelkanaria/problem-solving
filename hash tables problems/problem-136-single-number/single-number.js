// Problem 136 Single Number
const singleNumber = (nums) => {
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // Using Bitwise Operator
    temp = temp ^ nums[i];
  }
  return temp;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
