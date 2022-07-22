// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below


function sumofLeftLeaves(root){
    
   
   if(root == null){
       return 0;
   }else if( root.left != null && root.left.left == null && root.left.right == null){
       return root.left.val + sumofLeftLeaves(root.right);
   }else{
       return sumofLeftLeaves(root.left) + sumofLeftLeaves(root.right);
   }
   

}
