
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    var node = new LinkedListNode(data);
    var current = head;
    var previous=null;
    var i=0;
    if(position==0){
        node.next=current;
        head=node;
        return head;
    }
    else{
        while(i<position){
            previous=current;
            current=current.next;
            i++;
        }
        previous.next=node;
        previous=previous.next;
        previous.next=current;
        return head;
    }
}

