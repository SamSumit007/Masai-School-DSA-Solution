//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

//Method 1
var sortedSquares = function (nums) {
    var newarr = [];

    for (var i = 0; i < nums.length; i++) {
        newarr.push(0);
    }
    var i = 0;
    var j = nums.length - 1;
    var e = nums.length - 1;

    while (i <= j && e >= 0) {
        if ((nums[i] ** 2) == (nums[j] ** 2)) {
            newarr[e] = nums[i] ** 2;
            e--;
            i++;
        }
        else if ((nums[i] ** 2) > (nums[j] ** 2)) {
            newarr[e] = nums[i] ** 2;
            e--;
            i++;
        }
        else if ((nums[i] ** 2) < (nums[j] ** 2)) {
            newarr[e] = nums[j] ** 2;
            e--;
            j--;
        }
        else if (i == j) {
            newarr[e] = nums[i] ** 2;
            e--;
        }
    }
    return newarr;
};


//Method 2

var sortedSquares = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    return nums;
}
