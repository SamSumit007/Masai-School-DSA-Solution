//Given an integer n, return true if it is a power of two. Otherwise, return false.
//An integer n is a power of two, if there exists an integer x such that n == 2x.

var isPowerOfTwo = function (n) {
    var flag = false;
    for (var i = 0; i < 31; i++) {
        if ((2 ** i) == n) {
            flag = true;
            break;
        }
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }

};