// Problem 941 Valid Mountain Array
var validMountainArray = function (arr) {
  // The array must have length >= 3
  if (arr.length < 3) return false;
  let check = true;
  let window = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // loop over the array and check if there is no sequence
    if (arr[i] === arr[i + 1]) check = false;
    // count the items that is smaller than its next item
    if (arr[i] < arr[i + 1]) window++;
  }
  // if all the array in the same sequence or there is no sequence then there is no mountain
  if (window === arr.length - 1 || window === 0) check = false;
  for (let i = window; i < arr.length - 1; i++) {
    // loop over the items that are not in the sequence and check if there is a decreasing sequence
    if (!(arr[i] > arr[i + 1])) check = false;
  }
  return check;
};
console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])); // true
console.log(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0])); // false
console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
console.log(validMountainArray([1, 3, 2])); // true
console.log(validMountainArray([0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 11])); // true
console.log(validMountainArray([2, 0, 2])); // false
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // false
console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // false
