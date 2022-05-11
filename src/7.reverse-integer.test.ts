import { reverseInteger } from './7.reverse-integer.js';
import assert from 'node:assert';

describe('reverseInteger(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof reverseInteger, 'function');
  });

  const testCases: ITestCase[] = [
    {
      inputs: [123],
      output: 321
    },
    {
      inputs: [-123],
      output: -321
    },
    {
      inputs: [120],
      output: 21
    }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(reverseInteger(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [number];
  output: number;
}