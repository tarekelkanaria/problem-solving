// Problem 205 Isomorphic Strings
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  const checkS = new Map();
  const checkT = new Map();

  for (let i = 0; i < s.length; i++) {
    // check if the current character is already exist
    // and its corresponding character is changed
    if (checkS.has(s[i]) && checkS.get(s[i]) !== t[i]) return false;
    if (checkT.has(t[i]) && checkT.get(t[i]) !== s[i]) return false;
    // map each character in string s to the corresponding character in string t
    checkS.set(s[i], t[i]);
    checkT.set(t[i], s[i]);
  }
  return true;
};
// Test Cases
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false
