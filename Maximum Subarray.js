// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

//brute force but time limit exceed
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currSum;  
    for (var i = 0; i < nums.length; i++) {  
      currSum = 0;   
      for (var j = i; j < nums.length; j++) {   
        currSum += nums[j];    
        if (maxSum < currSum) {   
          maxSum = currSum;      
        }   
      } 
    } 
    return maxSum;
  };

  //method 2
  /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = -Infinity;
     let maxSum = -Infinity;
     for(let i = 0; i < nums.length; i++) {
         currSum = Math.max(0, currSum);
         currSum += nums[i];
         maxSum = Math.max(maxSum, currSum);
     }
     return maxSum;
 };