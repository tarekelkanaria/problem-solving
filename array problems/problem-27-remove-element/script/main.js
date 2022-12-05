// Problem 27 Remove Element
var removeElement = function (nums, val) {
  let k = 0;
  // loop over the array using two pointers
  for (let i = 0; i < nums.length; i++) {
    // if the item not equal to val we put the item at the begining of the array
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 3
