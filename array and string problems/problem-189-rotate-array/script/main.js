// Problem 189 Rotate Array
// helper function to reverse the array by swap
const reverseSub = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
// main function
const rotate = (nums, k) => {
  // check if k !> nums.length
  k = k % nums.length;
  // reverse the whole array
  nums.reverse();
  //   reverse the sub arrays
  reverseSub(nums, 0, k - 1);
  reverseSub(nums, k, nums.length - 1);
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
