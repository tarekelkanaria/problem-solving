// Problem 49 Group Anagrams
function sortString(str) {
  // helper function to sort the key string
  const sorted = str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  return sorted;
}
const groupAnagrams = (strs) => {
  const groupingChecker = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sortedString = sortString(strs[i]);
    // check if the sorted string key is exist
    if (groupingChecker.has(sortedString)) {
      let anagramExisted = groupingChecker.get(sortedString);
      // update the array of anagrams
      anagramExisted.push(strs[i]);
      groupingChecker.set(sortedString, anagramExisted);
    } else {
      // if the key doesn't exist add it with its value as array of anagrams
      groupingChecker.set(sortedString, [strs[i]]);
    }
  }
  return [...groupingChecker.values()];
};

// Test Cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
