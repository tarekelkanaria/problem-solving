// Problem 747 Largest Number At Least Twice of Others
var dominantIndex = function (nums) {
  let largest = 0;
  let index = 0;
  // loop over the array to find the largest number and its index
  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
      index = i;
    }
  }
  // loop again to determine whether the largest is at least twice as much as
  // every other number in the array
  for (let j = 0; j < nums.length; j++) {
    if (largest !== nums[j] && largest < 2 * nums[j]) return -1;
  }
  return index;
};
console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
