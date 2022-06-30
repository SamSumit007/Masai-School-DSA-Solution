//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

var start = 0;
var end = 1;
while (start < nums.length - 1) 
{
    if (nums[start] + nums[end] == target) 
    {
        return [start, end];
        break;
    }
    end++;
    if (end == nums.length) 
    {
        start++;
        end = start + 1;
    }
}