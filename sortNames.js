var arr = ['zeb', 'zebda', 'zeb', 'abb', 'def', 'abz', 'fwa'];

function sortNames(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (stringCompare(arr[j], arr[j + 1])) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }
}

function stringCompare(str1, str2) {
    var n = str1.length;
    var m = str2.length;
    for (var i = 0; i < Math.min(n, m); i++) {
        var char1 = str1.charAt(i);
        var char2 = str2.charAt(i);
        if (char1 != char2) {
            if (char1 > char2)
                return true;
            else
                return false;
        }
    }
    if (n > m)
        return true;
    else
        return false;
}


sortNames(arr);
console.log(arr);