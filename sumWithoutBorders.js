function stringToArray(el) {
    return el.split(" ").map(Number);
}

function sum(arr) {
    var sum = 0;
    var n = arr.length;
    var m = arr[0].length;
    for (var i = 0; i < n; i++)
        for (var j = 0; j < m; j++) {
            if (j != 0 && i != 0 && i != n - 1 && j != m - 1)
                sum += arr[i][j];

        }

    return sum;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        //input
        var rc = newInput[index].split(" ").map(Number);
        var r = rc[0];
        var arr_lines = newInput.slice(index + 1, index + r + 1);
        var arr = arr_lines.map(stringToArray);
        index = index + r + 1;

        console.log(sum(arr));

    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
3 3 
1 2 3
4 5 6
7 8 9 `);
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