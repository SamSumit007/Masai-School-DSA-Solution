//A number is given represented in the form of a linked list. Add one to it.


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    var node=new LinkedListNode(0);
    node.next=head;
    //reverse
    var previous = null;
    var current = node;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    node = previous;
    
    var cur=node;
    var carry;
    
    
    while(cur!=null){
        if(cur.data+1>9){
            carry=1;
            if(carry==1){
                cur.data=0;
                cur=cur.next;
                
                carry=0;
            }
            
        }
        else{
            cur.data=cur.data+1;
            break;
        }
    }
    
    
    var previous = null;
    var current = node;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    node = previous;
    
    if(node.data==0){
        return node.next;
    }
    else{
        return node;
    }
    
    
};



