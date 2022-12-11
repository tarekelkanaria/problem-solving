// Problem 448 Find All Numbers Disappeared in an Array
var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 1; i <= nums.length; i++) {
    // check if the array doesn't contain number of range
    if (!nums.includes(i)) {
      res.push(i);
    }
  }
  return res;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findDisappearedNumbers([1, 1])); // [2]
