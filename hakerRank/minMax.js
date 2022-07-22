
function miniMaxSum(arr) {
    arr.sort()
    var minArr = 0;
    var maxArr = 0;
    for (var i = 0; i < 4; i++) {
        minArr += arr[i]
    }
    for (var j = arr.length - 1; j >= arr.length - 4; j--) {
        maxArr += arr[j]
    }

    console.log(minArr, maxArr);
    // console.log();



}

miniMaxSum([1,3,5,7,9])