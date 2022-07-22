// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var hasPathSum = function(node,s) {
    
    if(node == null) return false
    
    if(node.left == null && node.right == null ) {
        return (s - node.val) == 0;
    }
    
    return hasPathSum(node.left, s-node.val) || hasPathSum(node.right, s-node.val);


}
