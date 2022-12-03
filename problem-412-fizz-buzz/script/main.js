// Problem 412 Fizz Buzz
var fizzBuzz = function (n) {
  let result = [];
  // loop over the number start from one
  for (let i = 1; i <= n; i++) {
    // store into the array the string provided depending on the conditions
    if (!(i % 5) && !(i % 3)) result.push("FizzBuzz");
    else if (!(i % 3)) result.push("Fizz");
    else if (!(i % 5)) result.push("Buzz");
    // as default store into the array the value of i as string
    else result.push(`${i}`);
  }
  return result;
};
console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15));
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
