/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let res = new ListNode(0), list = res, curr;

  while(l1 !== null || l2 !== null ){
    curr = list.next || new ListNode(0);
    list.next = curr;
    curr.val += (l1 && l1.val || 0);
    curr.val += (l2 && l2.val || 0);
    if(curr.val > 9){
        curr.val -= 10;
        curr.next = new ListNode(1);
    }
    list = curr;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return res.next; 
}