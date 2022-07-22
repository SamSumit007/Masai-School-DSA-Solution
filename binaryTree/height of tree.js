function height(root){
    if(root === null){
        return 0;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
}