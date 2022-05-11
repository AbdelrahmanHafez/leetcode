import { stringToInteger } from './8.string-to-integer-atoi.js';
import assert from 'node:assert';

describe('stringToInteger(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof stringToInteger, 'function');
  });

  const testCases: ITestCase[] = [
    {
      inputs: ['42'],
      output: 42
    },
    {
      inputs: ['   -42'],
      output: -42
    },
    {
      inputs: ['4193 with words'],
      output: 4193
    },
    {
      inputs: ['words and 987'],
      output: 0
    },
    {
      inputs: ['3.14159'],
      output: 3
    }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(stringToInteger(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [string];
  output: number;
}