
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
    
    // return head;
    
    let curr = head;
    let prev = null;
    let i = 0;
    let newHead = head;
    
    if(position == 0){
        curr = head.next;
        return curr;
    }
    
    while(i < position){
        
        prev = curr;
        curr = curr.next;
        i++;
        
    }
    
    prev.next = curr.next;
    
   return newHead
}

