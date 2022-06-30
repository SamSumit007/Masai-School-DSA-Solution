// a sorted array is given we have to remove duplicates from this array and return the length of that perticular array that have only unique elemnents
//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
//The relative order of the elements should be kept the same.
//Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
//More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
//It does not matter what you leave beyond the first k elements.

var removeDuplicates = function (nums) {
    var cur = 0;
    var previous;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != previous) {
            nums[cur] = (nums[i]);
            cur++;

        }
        previous = nums[i];
    }

    return cur;
};