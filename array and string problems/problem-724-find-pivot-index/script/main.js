// Problem 724 Find Pivot Index
var pivotIndex = function (nums) {
  let sum = 0;
  let leftSum = 0;
  //   loop over the array to get the sum of all elements
  for (let num of nums) sum += num;
  for (let i = 0; i < nums.length; i++) {
    // loop again and compare each value of left sum with what
    // remains after the pivote element if it's equal return pivote index
    if (leftSum === sum - (leftSum + nums[i])) return i;
    leftSum += nums[i];
  }
  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
