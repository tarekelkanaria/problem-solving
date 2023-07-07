// Problem 219 Contains Duplicate II
const containsNearbyDuplicate = (nums, k) => {
  const numsFrequencies = new Map();
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // Map each number from the end of window with each frequency
    numsFrequencies.set(nums[i], numsFrequencies.get(nums[i]) + 1 || 1);

    // check if length of window > k
    while (i - j > k) {
      // decrement the number frequency from the start of window or delete it if it's last one
      let numFrequency = numsFrequencies.get(nums[j]);
      if (numFrequency > 1) {
        numsFrequencies.set(nums[j], numFrequency - 1);
      } else {
        numsFrequencies.delete(nums[j]);
      }
      j++;
    }
    if (numsFrequencies.get(nums[j]) > 1) return true;
  }
  return false;
};
// Test Cases
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
