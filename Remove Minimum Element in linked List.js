// You are given the head of the linked list, you need to remove the minimum element in the linked list and return the head of the changed linked list.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMinimum = function (head) {
    
    var cur=head;
    while(cur!=null){
        var min=minimum(head);
    
        var idx=index(head,min);
    
        var current =deleteNode(head,idx);
        cur=cur.next;
        return current;
    }
    
};

function minimum(head){
    var min=501;
    var current=head;
    while(current!=null){
        if(current.data<min){
            min=current.data;
        }
        current=current.next;
    }
    return min;
}

function index(head,min){
    var current=head;
    var idx=undefined;
    var i=0;
    while(current!=null){
        if(current.data==min){
            idx=i;
        }
        i++;
        current=current.next;
    }
    return idx;
}
function deleteNode(head, position) {
   var current=head;
   var previous=null;
   var i=0;
   if(position==0){
       current=current.next;
       head=current;
       return head;
   }
   else{
       while(i<position){
            previous=current;
            current=current.next;
            i++;
        }
        current=current.next;
        previous.next=current;
        return head;
   }
}
