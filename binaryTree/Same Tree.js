// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

function isSameTree(a,b){
    
    let arrA = [];
    let arrB = [];
    
    function preOrderA(a){
        
        if(a == null){
            return
        }
        
        arrA.push(a.val);
        preOrderA(a.left);
        preOrderA(a.right);
    }
    preOrderA(a);
    
    function preOrderB(b){
        
        if(b == null){
            return
        }
        
        arrB.push(b.val);
        preOrderB(b.left);
        preOrderB(b.right);
    }
    
    preOrderB(b);
    
    for(var i = 0; i < Math.max(arrA.length, arrB.length); i++){
        if(arrA[i] != arrB[i]){
            return false;
        }   
    }
    
    return true;

}
