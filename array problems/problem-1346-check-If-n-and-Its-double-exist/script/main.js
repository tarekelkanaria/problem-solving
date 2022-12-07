// Problem 1346 Check If N and Its Double Exist
// hash map solution
var checkIfExist = function (arr) {
  // create object to store the elments as key value pair
  let check = {};
  for (let num of arr) {
    //check if the object contain the element multiplyed or devided by 2 or equal 0
    // if this the case then there is duplicates has been inserted in the object
    if (check[num * 2] || check[num / 2] || check[num] === 0) {
      return true;
    }
    // insert the element inside the object before looking to the next element
    check[num] = num;
  }
  return false;
};
// another solution but its time complexity o(n2)
var checkIfExist2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      // check for each element the rest of all elements if they are duplicates to the element
      if (arr[i] === arr[j] * 2 && i !== j) return true;
    }
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false
console.log(checkIfExist([7, 1, 14, 11])); // true
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8])); // false
console.log(checkIfExist([0, 0])); // true

console.log(checkIfExist2([10, 2, 5, 3])); // true
console.log(checkIfExist2([3, 1, 7, 11])); // false
console.log(checkIfExist2([7, 1, 14, 11])); // true
console.log(checkIfExist2([-2, 0, 10, -19, 4, 6, -8])); // false
console.log(checkIfExist2([0, 0])); // true
