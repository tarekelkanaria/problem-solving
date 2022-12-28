// Problem 209 Minimum Size Subarray Sum
const minSubArrayLen = (target, nums) => {
  // as we need to return the min length, we need to compare it with large value
  let minLen = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    // add elements to sum
    sum += nums[i];
    // loop if sum greater or equal to target
    while (sum >= target) {
      // assign min length to the minimum bettwen min length and length - the start point
      minLen = Math.min(minLen, i + 1 - start);
      //   exclude the first element in subarray from the sum
      sum -= nums[start];
      //   increment the start point
      start++;
    }
  }
  // check if the min length reassigned, then return min length, else return 0
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
