/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
const ROMAN_NUMBERS_MAP = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};
const sortedNumbersFromMap = Object.keys(ROMAN_NUMBERS_MAP).map(Number).sort((a, b) => b - a);

function intToRoman(num: number): string {
  let result = '';

  for (const numberFromMap of sortedNumbersFromMap) {
    const occurenceCount = Math.floor(num / numberFromMap);
    result += ROMAN_NUMBERS_MAP[numberFromMap].repeat(occurenceCount);
    num = num % numberFromMap;
  }

  return result;
}
// @lc code=end

export { intToRoman };