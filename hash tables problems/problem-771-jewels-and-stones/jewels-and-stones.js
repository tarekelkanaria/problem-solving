// Problem 771 Jewels and Stones
const numJewelsInStones = (jewels, stones) => {
  const jewelsChars = new Set(jewels);
  let jewelsCount = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelsChars.has(stones[i])) {
      jewelsCount++;
    }
  }
  return jewelsCount;
};
// Test Cases
console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0
