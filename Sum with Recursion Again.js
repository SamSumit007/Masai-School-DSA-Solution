//You are given an array and you have to find the sum of the absolute difference between consecutive elements of the array.

function runProgram(input) {
    var input = input.split("\n");
    var tc = +input[0];
    var line = 1;
    for (var i = 0; i < tc; i++) {
        var n = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        sum(n, arr);
    }


}
function sum(n, arr) {
    function solve(arr, n, i) {
        if (i == n - 1) {
            return ; //return 0;
        }
        else {
            return (Math.abs(arr[i] - arr[i + 1]) + solve(arr, n, i + 1));
        }
    }

    console.log(solve(arr, n, 0));
}


if (process.env.USER === "") {
    runProgram(``);
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