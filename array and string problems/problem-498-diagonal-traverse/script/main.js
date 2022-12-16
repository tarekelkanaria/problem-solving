// Problem 498 Diagonal Traverse
var findDiagonalOrder = function (mat) {
  let diagonal = {};
  // as each element in one diagonal have the same sum of indices [i + j]
  // store the index [i + j] as a key in an object and assign its value to array of diagonal
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (!diagonal[i + j]) diagonal[i + j] = [mat[i][j]];
      else diagonal[i + j].push(mat[i][j]);
    }
  }
  let res = [];
  // loop over the keys of object and check if the value is even reverse the array
  // and push its elements to the result, else push it to the result
  Object.keys(diagonal).forEach((key) => {
    let val = diagonal[key];
    if (key % 2 === 0) {
      val.reverse().forEach((num) => res.push(num));
      // or:
      //   res.push(...val.reverse());
    } else {
      val.forEach((num) => res.push(num));
      // or :
      //   res.push(...val);
    }
  });
  return res;
};
console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,4,7,5,3,6,8,9]
console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
); // [1,2,3,4]
