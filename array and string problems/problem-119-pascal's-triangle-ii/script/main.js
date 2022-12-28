// Problem 119 Pascal's Triangle II
// The  same solution in pascal's triangle but with modify to the range
const getRow = (rowIndex) => {
  let res = [];
  let subArr = [];
  // check if equal or greater than 0 as the input is different
  if (rowIndex >= 0) res.push([1]);
  // the range for row will be increment by 1 to include the last row index
  for (let i = 2; i <= rowIndex + 1; i++) {
    subArr[0] = 1;
    for (let j = 1; j < i; j++) {
      subArr[j] = res[i - 2][j - 1] + (res[i - 2][j] || 0);
    }
    res.push(subArr);
    subArr = [];
  }
  // return the array in the specified row index
  return res[rowIndex];
};
console.log(getRow(3)); // [1, 3, 3, 1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1, 1]
