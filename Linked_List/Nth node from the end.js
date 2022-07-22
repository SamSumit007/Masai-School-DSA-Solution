const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    
    let curr = head;
    let prev = null;
    
    while(curr){
        const next = curr.next;
        
        curr.next = prev
        prev = curr;
        curr = next;
    }
    
    // return prev;
    
    let i = 1;
    let newHead = prev;
    
    while(i < n){
        prev = prev.next;
        i++;
    }
    
    return prev.data
}
