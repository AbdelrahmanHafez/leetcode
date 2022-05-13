import { intToRoman } from './12.integer-to-roman.js';
import assert from 'node:assert';

describe('intToRoman(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof intToRoman, 'function');
  });

  const testCases: ITestCase[] = [
    { inputs: [3], output: 'III' },
    { inputs: [4], output: 'IV' },
    { inputs: [5], output: 'V' },
    { inputs: [9], output: 'IX' },
    { inputs: [10], output: 'X' },
    { inputs: [40], output: 'XL' },
    { inputs: [50], output: 'L' },
    { inputs: [90], output: 'XC' },
    { inputs: [100], output: 'C' },
    { inputs: [400], output: 'CD' },
    { inputs: [500], output: 'D' },
    { inputs: [900], output: 'CM' },
    { inputs: [1000], output: 'M' }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(intToRoman(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [number];
  output: string
}