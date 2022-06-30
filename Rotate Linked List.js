//rotate link list by k times


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    var current=head;
    var length=1;
    while(current.next!=null){
        length++;
        current=current.next;
    }
    k=k%length;
    current.next=head;
    var temp=head;
    for(var i=1;i<length-k;i++){
        temp=temp.next;
    }
    head=temp.next;
    temp.next=null;
    return head;
    
};

