import { romanToInt } from './13.roman-to-integer.js';
import assert from 'node:assert';

describe('romanToInt(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof romanToInt, 'function');
  });

  const testCases: ITestCase[] = [
    { inputs: ['III'], output: 3 },
    { inputs: ['IV'], output: 4 },
    { inputs: ['V'], output: 5 },
    { inputs: ['IX'], output: 9 },
    { inputs: ['X'], output: 10 },
    { inputs: ['XL'], output: 40 },
    { inputs: ['L'], output: 50 },
    { inputs: ['XC'], output: 90 },
    { inputs: ['C'], output: 100 },
    { inputs: ['CD'], output: 400 },
    { inputs: ['D'], output: 500 },
    { inputs: ['CM'], output: 900 },
    { inputs: ['M'], output: 1000 }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(romanToInt(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [string];
  output: number
}