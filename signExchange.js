function stringToArray(el) {
    return el.split("");
}

function findCount(arr) {
    var plusSignCount = 0;
    var starSignCount = 0;
    var n = arr.length;

    for (var i = 0; i < n; i++)
        for (var j = 0; j < n; j++) {
            if (i + j < n - 1 && arr[i][j] == '+')
                plusSignCount++;
            if (i + j > n - 1 && arr[i][j] == '*')
                starSignCount++;
        }

    if (plusSignCount == starSignCount)
        return plusSignCount * 2;
    else
        return -1;

}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);
        console.log(findCount(arr));
        index = index + 1 + rows;

    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
3
+*x
+x*
x+*
2
*x
x*`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}