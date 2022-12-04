// Problem 1089 Duplicate Zeros
var duplicateZeros = function (arr) {
  let mainLength = arr.length;
  let zeroes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroes.push(i);
  }
  for (let i = 0; i < zeroes.length; i++) {
    zeroes[i] += arr.length - mainLength;
    arr.splice(zeroes[i], 0, 0);
  }
  arr.length = mainLength;
  return arr;
};

console.log(duplicateZeros([1, 4, 0, 2, 3, 0, 5, 6]));
console.log(duplicateZeros([1, 2, 3]));
console.log(duplicateZeros([0, 1, 7, 6, 0, 2, 0, 7]));
