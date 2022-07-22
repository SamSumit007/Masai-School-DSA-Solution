
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    
    let newNode = new LinkedListNode(data);
    
    if(head === null){
        
        return newNode;
    }
    
     let newHead = head;
       
    while(head.next){
            head = head.next;
    }
        
      head.next = newNode;
    
    
    return newHead;
}
