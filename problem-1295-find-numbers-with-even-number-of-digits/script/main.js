// problem 1295 Find Numbers with Even Number of Digits
var findNumbers = function (nums) {
  // convert each element in the array to string and filter the even length of each string
  let res = nums.map((ele) => `${ele}`).filter((num) => num.length % 2 === 0);
  return res.length;
};
