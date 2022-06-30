
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    var node=new LinkedListNode(data);
    if(!head){
        head=node;
        return head;
    }
    var cur=head;
    while(cur.next){
        cur=cur.next;
    }
    cur.next=node;
    return head;
}

