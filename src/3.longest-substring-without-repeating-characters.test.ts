import { lengthOfLongestSubstring } from './3.longest-substring-without-repeating-characters.js';
import assert from 'node:assert';
describe('lengthOfLongestSubstring(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof lengthOfLongestSubstring, 'function');
  });
  const testCases = [
    { input: 'aab', output: 2 },
    { input: 'dvdf', output: 3 }
  ];
  for (const testCase of testCases) {
    it(testCase.input, () => assert.strictEqual(lengthOfLongestSubstring(testCase.input), testCase.output));
  }
});