// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    var n=matrix.length;
    if(n==0){
        return false;
    }
    var i=0;
    var j=matrix[0].length-1;
    while(i<=n-1&&j>=0){
        if(matrix[i][j]==target){
            return true;
        }
        else if(matrix[i][j]>target){
            j--;
        }
        else{
            i++;
        }
    }
    return false;
};