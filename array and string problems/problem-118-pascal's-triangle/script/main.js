// Problem 118 Pascal's Triangle
var generate = function (numRows) {
  let res = [];
  let subArr = [];
  // we know that the top row in triangle is [1]
  if (numRows >= 1) res.push([1]);
  // loop start from the second row from top
  for (let i = 2; i <= numRows; i++) {
    // modify first element as we know is 1
    subArr[0] = 1;
    // loop over subarray starting from the second element and make sure
    // the length of the subarray equal to every index of triangle rows
    for (let j = 1; j < i; j++) {
      // assign the value of subarray element to the sum of previous
      // array element with its next element if exist or add 0 to its value if not exist
      subArr[j] = res[i - 2][j - 1] + (res[i - 2][j] || 0);
    }
    // add the sub array to the result array then make the subarray empty again and repeat
    res.push(subArr);
    subArr = [];
  }
  return res;
};
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
