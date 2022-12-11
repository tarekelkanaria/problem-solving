// Problem Height Checker
var heightChecker = function (heights) {
  let indices = 0;
  // create array from heights and sort it
  let expected = [...heights].sort((a, b) => a - b);
  // loop over the orginal array and compare each item to sorted array
  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) indices++;
  }
  return indices;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
console.log(heightChecker([5, 1, 2, 3, 4])); // 5
console.log(heightChecker([1, 2, 3, 4, 5])); // 0
