// You are given a sorted linked list containing unique values. You have to manipulate the linked list such that the difference between every two adjacent node values should be exactly equal to 1. You can only insert some extra between existing nodes in the linked list


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
    var node=new LinkedListNode(0);
    var cur=node;
    var current=head;
    while(current!=null&&current.next!=null){
        //var d=0;
        //if(current.next!=null){
        var d=Math.abs(current.data-current.next.data);
        //}
        
        for(var i=current.data;i<current.data+d;i++){
            cur.next=new LinkedListNode(i);
            cur=cur.next;
        }
        current=current.next;
       // console.log(d)
    }
    cur.next=current;
    return node.next;
    
};
