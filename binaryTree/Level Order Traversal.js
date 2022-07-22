// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var levelOrder = function(root) {
    

    // first we will find height of the tree;=>

    function height(root){
        if(root == null){
            return 0;
        }
        
        return Math.max(height(root.left) , height(root.right)) +1;
    }
    
    let h = height(root);
    
    // console.log(h);
    
    /////////////////
    
    function printCurrLevel(root, level, ans){
        
        if(root == null){
            return;
        }
        if(level == 1){
          ans.push(root.val);
        }else if(level > 1){
            printCurrLevel(root.left, level -1, ans);
            printCurrLevel(root.right, level -1, ans)
        }
        
    }
    
    for(let i = 1; i <= h; i++ ){
        var ans = [];
        printCurrLevel(root, i, ans);
        console.log(ans.join(" "))
    }
    
    

}
