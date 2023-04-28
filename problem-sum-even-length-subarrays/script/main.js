const sumEvenSubarrays = (nums) => {
  let sum = 0;

  // Loop through all possible pairs of indices i and j
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the length of the subarray nums[i...j] is even
      let subarrayLength = j - i + 1;
      if (subarrayLength % 2 === 0) {
        // Add the sum of the even-length subarray to the running total
        let subarray = nums.slice(i, j + 1);
        let subarraySum = subarray.reduce((acc, curr) => acc + curr, 0);
        sum += subarraySum;
      }
    }
  }

  return sum;
};

// Example usage:
let nums = [1, 2, 3, 4, 5];
console.log(sumEvenSubarrays(nums));
