const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    var current=head;
    var fast=head;
    for(var i=0;i<n;i++){
        fast=fast.next;
    }
    
    while(fast != null){
        fast=fast.next;
        current=current.next;
    }
    
    return current.data;
}
