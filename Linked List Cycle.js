// Givenhead, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following thenextpointer. 
// Internally,posis used to denote the index of the node that the tail'snextpointer is connected to.


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    var slow=head;
    var fast=head;
    while(fast !=null && fast.next !=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;
};

