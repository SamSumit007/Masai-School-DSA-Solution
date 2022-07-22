
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below

let ans = 0;

var diameterOfBinaryTree = function(root) {
    
    function dia(root){
        
    if(root == null) return 0;
    
    let lh = dia(root.left);
    let rh = dia(root.right);
    
    ans = Math.max(ans, 1+lh+rh);
    
    return 1 + Math.max(lh, rh)
    
    }
    
    dia(root)
    
    return ans;
};

