//Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must be unique and you may return the result in any order.

var intersection = function (nums1, nums2) {
    var m = new Map();
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                if (m.has(nums1[i])) {
                    m.set(nums1[i], m.get(nums1[i]) + 1)
                }
                else {
                    m.set(nums1[i], 1);
                }
            }
        }
    }
    var arr = [];
    for (var [key, value] of m) {
        arr.push(key);
    }
    return arr;
};