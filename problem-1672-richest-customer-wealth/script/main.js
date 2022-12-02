// problem 1672 Richest Customer Wealth
var maximumWealth = function (accounts) {
  let total = 0;
  let current;
  // loop over accounts array to update total wealth
  for (let i = 0; i < accounts.length; i++) {
    current = 0;
    // loop over each customer array to update current customer wealth
    for (let j = 0; j < accounts[i].length; j++) {
      current += accounts[i][j];
    }
    // if current customer wealth > total wealth then update total value with current value
    total = total > current ? total : current;
  }
  return total;
};
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 6
console.log(
  maximumWealth([
    [1, 5],
    [3, 7],
    [3, 5],
  ])
); // 10
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
); // 17
