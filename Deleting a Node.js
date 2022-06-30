
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   var current=head;
   var previous=null;
   var i=0;
   if(position==0){
       current=current.next;
       head=currnet;
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

