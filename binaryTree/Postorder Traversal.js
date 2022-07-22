// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

let arr = []

function postorderTraversal(root){
    
    if(root === null){
        return;
    }
    
    
    postorderTraversal(root.left)
    postorderTraversal(root.right)
    arr.push(root.val);
   return arr;
    
}
