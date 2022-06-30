//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times. 
//You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
    var m = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i]) + 1)
        }
        else {
            m.set(nums[i], 1);
        }
    }
    var max = -1;
    var ans;
    for (var [key, value] of m) {
        if (m.get(key) > max) {
            max = m.get(key);
            ans = key;
        }
    }
    return ans;
};

