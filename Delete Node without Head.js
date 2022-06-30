
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    var temp= node.next;
    node.data=node.next.data;
    node.next=node.next.next;
}
