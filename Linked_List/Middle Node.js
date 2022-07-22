const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    
    let size = 0;
    let curr = head;
    let pCurr = head;
    let i = 0;
    let prev = null
    
    while(curr){
        size++;
        curr = curr.next;
    }
    
    
    if(size %2 == 0){
        var position = size/2;
    }else{
        var position = Math.floor(size/2);
    }
    
    while(i < position){
        
        prev = pCurr;
        pCurr = pCurr.next;
        i++;
    }
    
    
    
    
    return pCurr.data;
};

