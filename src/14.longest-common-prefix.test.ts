import { longestCommonPrefix } from './14.longest-common-prefix.js';
import assert from 'node:assert';

describe('longestCommonPrefix(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof longestCommonPrefix, 'function');
  });

  const testCases: ITestCase[] = [
    { inputs: [['flower', 'flow', 'flight']], output: 'fl' },
    { inputs: [['dog', 'racecar', 'car']], output: '' },
    { inputs: [['aa', 'a']], output: 'a' }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(longestCommonPrefix(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [string[]];
  output: string
}