// Problem 350 Intersection of Two Arrays II
const findIntersect = (smallest, biggest) => {
  const numsFrequencies = new Map(),
    intersections = [];
  for (let i = 0; i < smallest.length; i++) {
    // check if the number has seen before increment its value else initialize it with 1
    numsFrequencies.set(smallest[i], numsFrequencies.get(smallest[i]) + 1 || 1);
  }
  for (let j = 0; j < biggest.length; j++) {
    // check if the number has seen before
    if (numsFrequencies.has(biggest[j])) {
      const numFrequency = numsFrequencies.get(biggest[j]);
      // if it's exist and its value more than one decrement it, if it's one delete it.
      numFrequency > 1
        ? numsFrequencies.set(biggest[j], numFrequency - 1)
        : numsFrequencies.delete(biggest[j]);
      // push the intersections in array
      intersections.push(biggest[j]);
    }
  }
  return intersections;
};
const intersect = (nums1, nums2) => {
  if (nums1.length <= nums2.length) return findIntersect(nums1, nums2);
  else return findIntersect(nums2, nums1);
};
// Test Cases
console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9] || [9, 4]
console.log(intersect([3, 1, 2], [1, 1])); // [1]
