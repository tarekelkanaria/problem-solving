// Problem 1 Two Sum
const twoSum = (nums, target) => {
  const checker = new Map();
  for (let i = 0; i < nums.length; i++) {
    // check if target - number is exist
    if (checker.get(target - nums[i]) !== undefined) {
      return [checker.get(target - nums[i]), i];
    }
    // map each number with its index
    checker.set(nums[i], i);
  }
  checker.clear();
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
