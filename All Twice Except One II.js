//You are given a number N, and an array such that the array contains all the numbers from 1 to N including N twice, 
//except for one, which is present only once
//You have to find the number which is present only once, in the array


function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        solve(N, arr);
    }

}
function solve(N, arr) {
    arr.sort(function (a, b) { return a - b });
    var i = 0;
    while (i < 2 * N - 1) {
        if (arr[i] != arr[i + 1]) {
            console.log(arr[i]);
            break;
        }
        i += 2;
    }
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