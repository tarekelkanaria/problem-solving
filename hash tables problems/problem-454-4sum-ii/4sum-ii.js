// Problem 4 Sum II
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  const targetSum = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      // Map sum of each two elements in first two arrays with its frequency
      targetSum.set(sum, targetSum.get(sum) + 1 || 1);
    }
  }
  let sumCount = 0;
  for (let k = 0; k < nums3.length; k++) {
    for (let l = 0; l < nums4.length; l++) {
      const remindSum = nums3[k] + nums4[l];
      // check if negative coin of the two previous arrays existed
      if (targetSum.has(-remindSum)) sumCount += targetSum.get(-remindSum);
      else sumCount += 0;
    }
  }
  targetSum.clear();
  return sumCount;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])); // 2
console.log(fourSumCount([0], [0], [0], [0])); // 1
