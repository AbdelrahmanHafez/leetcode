import { isPalindrome } from './9.palindrome-number.js';
import assert from 'node:assert';

describe('isPalindrome(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof isPalindrome, 'function');
  });

  const testCases: ITestCase[] = [
    {
      inputs: [121],
      output: true
    },
    {
      inputs: [-121],
      output: false
    },
    {
      inputs: [10],
      output: false
    }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(isPalindrome(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [number];
  output: boolean;
}