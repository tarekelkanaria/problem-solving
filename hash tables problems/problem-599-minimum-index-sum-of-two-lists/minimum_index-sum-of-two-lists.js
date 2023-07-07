// Problem 599 Minimum Index Sum of Two Lists
const findRestaurant = (list1, list2) => {
  const stringsChecker = new Map(),
    common = [];
  // map each string in list 1 as key and its index as value
  for (let i = 0; i < list1.length; i++) {
    stringsChecker.set(list1[i], i);
  }
  // loop on each string in list 2 and check if its exist in our map
  for (let j = 0; j < list2.length; j++) {
    if (stringsChecker.has(list2[j])) {
      // if the string exist push it and its corresponding sum of indicies in common array
      common.push([stringsChecker.get(list2[j]) + j, list2[j]]);
    }
  }
  // sort common array to determine which is minimum
  common.sort((a, b) => a[0] - b[0]);
  const commonWithLeast = [common[0][1]];
  // iterate over the common array to extract the strings with minimum indicies
  for (let k = 1; k < common.length; k++) {
    if (common[k][0] > common[k - 1][0]) {
      return commonWithLeast;
    } else {
      commonWithLeast.push(common[k][1]);
    }
  }
  return commonWithLeast;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
); // ["Shogun"]

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
); // ["Shogun"]

console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])); // ["sad","happy"]
