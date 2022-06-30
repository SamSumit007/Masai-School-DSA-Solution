//sum of an array by recursion

function runProgram(input) {
    var input = input.split("\n");
    var tc = +input[0]
    var line = 1;
    for (var i = 0; i < tc; i++) {
        var n = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        solve(arr, n);

    }

}
function solve(arr, n) {
    function sum(arr, i) {
        if (arr[i] == undefined) {
            return 0;
        }
        else {
            return arr[i] + sum(arr, i + 1);
        }
    }
    console.log(sum(arr, 0));

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