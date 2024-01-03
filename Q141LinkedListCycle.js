/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Solution 1 - Time Complexity: O(n), Space Complexity: O(n)
var hasCycle = (head) => {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

//Solution 2 - Time Complexity: O(n), Space Complexity: O(1)
var hasCycle1 = (head) => {
    let slowPointer = head, fastPointer = head;
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer === fastPointer) {
            return true;
        }
    }
    return false;
};