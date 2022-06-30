//check a LL that it is palindrome or not

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    var arr=[];
    var current=head;
    while(current !=null){
        var x=current.data;
        arr.push(x);
        current=current.next;
    }
    //console.log(arr)
    var flag=true;
    var i=0;
    var j=arr.length-1;
    while(i<j){
        if(arr[i]!=arr[j]){
            return false;
            break;
        }
        i++;
        j--;
    }
    return flag;
    
};




// method 2
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    //console.log(head)
    var slow=head;
    var fast=head;
    while(fast != null && fast.next != null){
        fast=fast.next.next;
        slow=slow.next;
    }
    var part2=slow.next;  //to fast ya tail right wala part
    var part1=head; //to mid left wala part
    var mid = slow;
    mid.next=null;
    
    var part2=reverse(part2);
    
    while(part1 !=null && part2 !=null){
        if(part1.data!=part2.data){
            return false;
        }
        part1=part1.next;
        part2=part2.next;
    }
    return true;

    
};
function reverse(head) {
    var previous = null;
    var current = head;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
    return head;
}
