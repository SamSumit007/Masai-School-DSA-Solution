// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    var max = 0;
    for(var i=0;i<nums.length;i++){
        
        if(i>max){
            return false;
        }
        else{
            max = Math.max(nums[i]+i,max);
        }
    }
    
    return true;
};