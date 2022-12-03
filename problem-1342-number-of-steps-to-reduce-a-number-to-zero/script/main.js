// Problem 1342 Number of Steps to Reduce a Number to Zero
var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    // check if the num odd number decrement it, else devide it by 2
    num % 2 ? num-- : (num /= 2);
    // increment the count to store the count of steps
    count++;
  }
  return count;
};
console.log(numberOfSteps(14)); // 6
console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(123)); // 12
