import { isMatch } from './10.regular-expression-matching.js';
import assert from 'node:assert';

describe('isMatch(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof isMatch, 'function');
  });

  const testCases: ITestCase[] = [
    {
      inputs: ['aa', 'a'],
      output: false
    },
    {
      inputs: ['aa', 'a*'],
      output: true
    },
    {
      inputs: ['ab', '.*'],
      output: true
    },
    {
      inputs: ['aab', 'c*a*b'],
      output: true
    },
    {
      inputs: ['ab', '.*c'],
      output: false
    }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(isMatch(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [string, string];
  output: boolean;
}