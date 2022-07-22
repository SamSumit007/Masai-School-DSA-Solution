class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below




var isSymmetric = function (root) {
    let arr = [];
    
   function inOrder(root){
       
       if(root == null){
           return;
       }
       
       inOrder(root.left);
       arr.push(root.val);
       inOrder(root.right);
       
       return arr;
       
   }
   
  inOrder(root)
    
    // console.log(arr);
    
    let left = 0;
    let right = arr.length-1;
    
    while(left < right){
        if(arr[left] !== arr[right]){
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
    
    
};

