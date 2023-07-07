// Problem 202 Happy Number
const findSumOfSquares = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};
// Two Pointers one is fast and other is slow approach
const isHappy = (n) => {
  let slowPointer = n,
    fastPointer = n;
  while (true) {
    slowPointer = findSumOfSquares(slowPointer);
    fastPointer = findSumOfSquares(findSumOfSquares(fastPointer));

    if (slowPointer === 1 || fastPointer === 1) return true;

    if (slowPointer === fastPointer) return false;
  }
};
// Test cases
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
