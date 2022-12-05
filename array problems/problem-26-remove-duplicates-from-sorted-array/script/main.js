// Problem 26 Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  let k = 0;
  // loop over the array using two pointers
  for (let i = 0; i < nums.length; i++) {
    // if the item not equal to val we put the item at the begining of the array
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
