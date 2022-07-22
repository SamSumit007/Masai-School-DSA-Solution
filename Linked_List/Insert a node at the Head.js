

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    
   let newNode = new LinkedListNode(data);
   
   if(head == null){
       head = newNode;
       return head;
   }
   
    newNode.next = head;
    
    return newNode
}

