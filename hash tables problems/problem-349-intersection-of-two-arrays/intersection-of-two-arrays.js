// Problem 349 Intersection of Two Arrays
const findIntersection = (smallest, biggest) => {
  const commonNums = new Set(),
    intersectionNums = [];
  for (let i = 0; i < smallest.length; i++) {
    commonNums.add(smallest[i]);
  }
  for (let j = 0; j < biggest.length; j++) {
    if (commonNums.has(biggest[j])) {
      intersectionNums.push(biggest[j]);
      commonNums.delete(biggest[j]);
    }
  }
  return intersectionNums;
};

const intersection = (nums1, nums2) => {
  if (nums1.length <= nums2.length) return findIntersection(nums1, nums2);
  else return findIntersection(nums2, nums1);
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
