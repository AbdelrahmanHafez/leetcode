import { findMedianSortedArrays } from "./4.median-of-two-sorted-arrays.js";
import assert from "node:assert";

describe("findMedianSortedArrays(...)", () => {
  it("is a function", () => {
    assert.strictEqual(typeof findMedianSortedArrays, "function");
  });

  const testCases: ITestCase[] = [
    {
      inputs: [[1, 3], [2]],
      output: 2,
    },
    {
      inputs: [
        [1, 2],
        [3, 4],
      ],
      output: 2.5,
    },
    {
      inputs: [[], [1]],
      output: 1,
    },
    {
      inputs: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      ],
      output: 9,
    },
  ];

  for (const testCase of testCases) {
    it(testCase.inputs.map((arr) => JSON.stringify(arr)).join(" "), () => {
      assert.strictEqual(
        findMedianSortedArrays(...testCase.inputs),
        testCase.output
      );
    });
  }
});

interface ITestCase {
  inputs: [number[], number[]];
  output: number;
}
