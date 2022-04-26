import { convertToZigzag } from './6.zigzag-conversion.js';
import assert from 'node:assert';

describe('convertToZigzag(...)', () => {
  it('is a function', () => {
    assert.strictEqual(typeof convertToZigzag, 'function');
  });

  const testCases: ITestCase[] = [
    {
      inputs: ['PAYPALISHIRING', 3],
      output: 'PAHNAPLSIIGYIR'
    },
    {
      inputs: ['PAYPALISHIRING', 4],
      output: 'PINALSIGYAHRPI'
    }
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.join(' '), () => {
      assert.strictEqual(convertToZigzag(...testCase.inputs), testCase.output);
    });
  }
});

interface ITestCase{
  inputs: [string, number];
  output: string;
}