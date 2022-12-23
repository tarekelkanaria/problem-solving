// Problem 67 Add Binary
function addBinary(a, b) {
  // using BigInt data type to solve the problem of Double-precision floating-point format in JS
  // and use the prefix "0b" to denote that is binary then convert the sum to binary string
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}
console.log(addBinary("11", "1")); // 100
console.log(addBinary("1010", "1011")); // 10101
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
); // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
