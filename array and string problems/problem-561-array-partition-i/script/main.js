// Problem 561 Array Partition
var arrayPairSum = function (nums) {
  // sort the array so we know the min in every pair is the first num
  nums.sort((a, b) => a - b);
  let max = 0;
  // loop over the sorted array and modify the max by only the min elements in pairs
  for (let i = 0; i < nums.length - 1; i += 2) {
    max += nums[i];
  }
  return max;
};
console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9
