const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    var slow=head;
    var fast=head;
    while(fast != null && fast.next != null){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow.data;
};

