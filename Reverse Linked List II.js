//Given the head of a singly linked list and two integers left and right where left <= right, 
//reverse the nodes of the list from position left to position right, and return the reversed list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, m, n) {
    var newHead = new ListNode(0);
      var now = newHead;
      var tmp = null;
      var reverseLast = null;
      var reverseHead = null;
      var reverseNow = null;
      var i = 0;
    
      newHead.next = head;
    
      while (now) {
        tmp = now.next;
    
        if (i === m - 1) {
          reverseHead = now;
        }
    
        if (i === m) {
          reverseLast = now;
          reverseNow = now;
        }
    
        if (i > m && i <= n) {
          now.next = reverseNow;
          reverseNow = now;
        }
    
        if (i === n) {
          reverseLast.next = tmp;
          reverseHead.next = reverseNow;
        }
    
        now = tmp;
        i++;
      }
    
      return newHead.next;
    };