
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    
    
     if(position < 0){
        return false;
    }
    
    
    let newNode = new LinkedListNode(data);
    let newHead = head;
    let prev = null;
    let curr = head;
        // let newHead = head;
        
    let i = 0;
        
    
   
    if(position === 0){
        
        newNode.next = curr;
        head = newNode;
        return head;
    }
    else{
        
       
        while(i < position){
            prev = curr;
            curr = curr.next;
            i++;
        }
        
        prev.next = newNode;
        
        prev = prev.next;
        
        prev.next = curr;
        
    }
    
    return newHead;
    
}

