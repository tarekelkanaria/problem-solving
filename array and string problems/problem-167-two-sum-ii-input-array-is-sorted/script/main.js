// Problem 167. Two Sum II - Input Array Is Sorted
const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  let sum;
  while (left < right) {
    sum = numbers[left] + numbers[right];
    // if the target and sum are equal we should return the indicies
    if (sum === target) return [left + 1, right + 1];
    // we should exclude an element from the left if the sum is less than the target
    // we also should exclude element from the right if the sum is greater than the target
    sum < target ? left++ : right--;
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]
console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200)); // [3, 6]
// another approach using hash but taking more space complexity
var twoSumTwo = function (numbers, target) {
  let check = {};
  for (let i = 0; i < numbers.length; i++) {
    // check if the other part of target is a key in the check object
    if (check[target - numbers[i]]) {
      // return the index value of the key and index of second part
      return [check[target - numbers[i]], i + 1];
    }
    // add first part of the target as a key and its index as value
    check[numbers[i]] = i + 1;
  }
};
console.log(twoSumTwo([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSumTwo([2, 3, 4], 6)); // [1, 3]
console.log(twoSumTwo([-1, 0], -1)); // [1, 2]
console.log(twoSumTwo([3, 24, 50, 79, 88, 150, 345], 200)); // [3, 6]
