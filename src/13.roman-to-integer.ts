/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const ROMAN_NUMBERS_MAP = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const sortedRomanNumbersFromMap = Object.entries(ROMAN_NUMBERS_MAP).sort(([keyA, numA], [keyB, numB]) => numB - numA).map(([key]) => key);

function romanToInt(string: string) {
  let result = 0;

  for (const romanNumber of sortedRomanNumbersFromMap) {
    while (string.startsWith(romanNumber)) {
      result += ROMAN_NUMBERS_MAP[romanNumber];
      string = string.slice(romanNumber.length);
    }
  }


  return result;
}
// @lc code=end

export { romanToInt };