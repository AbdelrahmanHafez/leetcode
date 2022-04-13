/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// @lc code=start
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
  const n1Stringified = convertListNodeToReversedStringifiedNumber(l1);
  const n2Stringified = convertListNodeToReversedStringifiedNumber(l2);

  const reversedSum = BigInt(n1Stringified) + BigInt(n2Stringified);
  return convertReversedNumberToList(reversedSum);
}


function convertListNodeToReversedStringifiedNumber(listNode: ListNode) {
  let stringifiedNumber = '';
  let currentNode = listNode;

  while (currentNode) {
    stringifiedNumber = `${currentNode.val}${stringifiedNumber}`;
    currentNode = currentNode.next;
  }

  return stringifiedNumber;
}

function convertReversedNumberToList(number: BigInt) {
  const digits = String(number).split('').reverse().join('');
  const rootNode = new ListNode(Number(digits[0]));
  let currentNode = rootNode;

  for (const digit of digits.slice(1)) {
    currentNode.next = new ListNode(Number(digit));
    currentNode = currentNode.next;
  }

  return rootNode;
}

// @lc code=end
export { addTwoNumbers };