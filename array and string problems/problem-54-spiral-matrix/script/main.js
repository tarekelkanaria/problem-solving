// Problem 54 Spiral Matrix
var spiralOrder = function (matrix) {
  // check for edge cases
  if (!matrix.length || matrix.length === 1) return matrix.flat();
  // track each direction in the matrix by pointer
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  // specify the length of the matrix
  let size = matrix.length * matrix[0].length;
  let res = [];
  // loop until the returned array length is equal to the matrix size
  while (res.length < size) {
    // loop from left to right
    for (let i = left; i <= right && res.length < size; i++) {
      res.push(matrix[top][i]);
    }
    // exclude the first row from top
    top++;
    // loop from top to bottom
    for (let i = top; i <= bottom && res.length < size; i++) {
      res.push(matrix[i][right]);
    }
    // exclude the last column from right
    right--;
    // loop from right to left
    for (let i = right; i >= left && res.length < size; i--) {
      res.push(matrix[bottom][i]);
    }
    // exclude the last row from bottom
    bottom--;
    // loop from bottom to top
    for (let i = bottom; i >= top && res.length < size; i--) {
      res.push(matrix[i][left]);
    }
    // exclude the first column from left
    left++;
    // repeat the process while the result array length < matrix size
  }
  return res;
};
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1]])); // [1]
console.log(spiralOrder([[2, 3]])); // [2,3]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
console.log(spiralOrder([[7], [9], [6]])); // [7, 9, 6]
console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
); // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]
