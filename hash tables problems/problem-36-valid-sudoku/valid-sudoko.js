// Problem 36 Valid Soduko
const isValidSudoku = (board) => {
  const validation = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const value = board[i][j];
      // check if the value is not empty
      if (value !== ".") {
        // add unique string for each row, column, and grid
        const rowString = `${value} in row ${i}`,
          columnString = `${value} in column ${j}`,
          gridString = `${value} in grid ${Math.floor(i / 3)} ${Math.floor(
            j / 3
          )}`;
        // check for repeating string and if it's not existed then initialize it
        if (
          validation.has(rowString) ||
          validation.has(columnString) ||
          validation.has(gridString)
        ) {
          return false;
        } else {
          validation.add(rowString);
          validation.add(columnString);
          validation.add(gridString);
        }
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // true

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // false
