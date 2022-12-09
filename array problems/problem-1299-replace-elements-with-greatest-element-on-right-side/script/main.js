// Problem 1299 Replace Elements with Greatest Element on Right Side
var replaceElements = function (arr) {
  // initlialize the greatest value with -1
  let greatest = -1;
  let current;
  // loop start from the right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // store the item in current variable
    current = arr[i];
    // assign the item to greatest value
    arr[i] = greatest;
    // compare the item with greatest and store the greater value into greatest
    if (current > greatest) greatest = current;
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]
