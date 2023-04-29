const findSpecialNumber = (nums) => {
  let check = {};

  // loop through the array and count the occurrences of each number
  for (let i = 0; i < nums.length; i++) {
    if (!check[nums[i]]) {
      check[nums[i]] = 1;
    } else {
      check[nums[i]]++;
    }
  }

  // loop through check and return the number that appears only once
  for (let num in check) {
    if (check[num] === 1) {
      return num;
    }
  }

  // if no number appears only once return null.
  return null;
};
// Example usage
let arr = [1, 2, 3, 2, 1];
console.log(findSpecialNumber(arr));
