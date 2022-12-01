// Problem 1480 Running Sum of 1d Array
var runningSum = function (nums) {
  // loop over the array starting from index 1 and sum each element with previous element
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};
