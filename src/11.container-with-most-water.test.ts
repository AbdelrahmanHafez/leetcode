import { maxArea } from './11.container-with-most-water.js';
import assert from 'node:assert';

describe('maxArea(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof maxArea, 'function');
  });

  const testCases: ITestCase[] = [
    {
      inputs: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
      output: 49
    },
    {
      inputs: [[1, 2, 1]],
      output: 2
    },
    {
      inputs: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      output: 25
    },
    {
      inputs: [[1, 1]],
      output: 1
    }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(maxArea(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [number[]];
  output: number
}