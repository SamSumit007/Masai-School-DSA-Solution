//check wethere given number is palindrome or not

var isPalindrome = function (x) {
    var x = "" + x;
    var y = "";
    for (var i = x.length - 1; i >= 0; i--) {
        y += x[i];
    }
    if (x == y) {
        return true;
    }
    else {
        return false;
    }
};