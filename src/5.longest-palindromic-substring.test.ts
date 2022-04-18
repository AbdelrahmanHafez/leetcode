import { longestPalindrome } from './5.longest-palindromic-substring.js';
import assert from 'node:assert';

describe('longestPalindrome(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof longestPalindrome, 'function');
  });

  const testCases: ITestCase[] = [
    {
      input: 'babad',
      output: 'bab'
    },
    {
      input: 'cbbd',
      output: 'bb'
    },
    {
      input: 'ac',
      output: 'a'
    },
    {
      input: 'abb',
      output: 'bb'
    },
    {
      input: 'bb',
      output: 'bb'
    }
  ];

  for (const testCase of testCases) {
    it(testCase.input, () => {
      assert.strictEqual(longestPalindrome(testCase.input), testCase.output);
    });
  }
});

interface ITestCase{
  input: string;
  output: string;
}