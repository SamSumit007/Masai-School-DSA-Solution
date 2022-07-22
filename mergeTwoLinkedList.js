const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(0);
    let temp = head;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    if (l1 !== null) temp.next = l1;
    if (l2 !== null) temp.next = l2;

    return head.next;
};
