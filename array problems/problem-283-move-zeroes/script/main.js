// Problem 283 Move Zeroes
var moveZeroes = function (nums) {
  // check for edge cases
  if (nums.length === 1 || !nums.length) return nums;
  let current;
  let zeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    // store each element into variable and assign it to 0
    current = nums[i];
    nums[i] = 0;
    // if the variable value not equal to 0 swap it with writepointer
    if (current !== 0) {
      nums[zeroes] = current;
      zeroes++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([-4, 0, -12, 22, 0, -5, 5, 0, 0])); // [-4, -12, 22, -5, 5, 0, 0, 0]
