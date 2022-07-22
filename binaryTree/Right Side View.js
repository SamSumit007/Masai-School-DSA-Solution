 // Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below



var rightSideView = function(root) {
    
    let level = 0;
    let arr = [];
    
    function right(root, level){
        

        if(root === null){
            return ;
        } 
        
        if(arr[level] === undefined){
            
            arr.push(root.val)
        }
        
        right(root.right, level+1)
        right(root.left, level+1);
        
    }
    right(root, level);
    
    // console.log(arr);
    return arr;
}



 let level = 0;
    let arr = [];
    
    function left(root, level){
        
        if(root === null){
            return;
        }
        
        if(arr[level] === undefined){
            arr.push(root.val)
        }
        
        left(root.left, level+1);
        left(root.right, level+1);
    }
    
    left(root, level)
    
    
    return arr;
    
