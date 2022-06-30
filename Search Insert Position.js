// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let low=0;
    let high=nums.length-1;
    let result=-1;
    while(low<=high){
        var mid= Math.floor(low+(high-low)/2);
        if(nums[mid]==target){
            
                result=mid;
                low=mid+1;
            
            
        }
        else if(nums[mid]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    
    if(result==-1){
        return(low);
    }
    else{
        return(result);
    }
};