class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var maxDepth = function(root) {
    
    if(root === null){
        return 0;
    }
    
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
    
    if(leftDepth > rightDepth){
        return leftDepth+1;
    }else{
        return rightDepth+1;
    }
    
    
};

