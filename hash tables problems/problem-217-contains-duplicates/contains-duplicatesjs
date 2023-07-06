// Problem 127 Contains Duplicate
const containsDuplicate = (nums) => {
  const checker = new Set();
  for (let i = 0; i < nums.length; i++) {
    checker.add(nums[i]);
  }
  return checker.size === nums.length ? false : true;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
