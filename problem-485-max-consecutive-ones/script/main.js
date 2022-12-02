// problem 485  Max Consecutive Ones
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let check = 0;
  // loop over the array to increase the value of count if the item is 1
  // otherwise assign the value of count to 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else count = 0;
    // if check value greater than count the value of check remain the same
    // otherwise assign check to the count value
    check = check > count ? check : count;
  }
  return check;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
