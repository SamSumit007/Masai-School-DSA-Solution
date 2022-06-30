// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
// and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the head of the updated linked list (In reverse order)




const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
    var node= new ListNode();
    var current=node;
    var sum=0;
    var carry=0;
    while(l1 !=null || l2!=null||sum>0){
        if(l1!=null){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2!=null){
            sum+=l2.val;
            l2=l2.next;
        }
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        current.next = new ListNode(sum);
        current = current.next;

        sum = carry;
        carry = 0;
        
    }
    return node.next;
};

