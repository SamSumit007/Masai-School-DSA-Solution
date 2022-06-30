//You are given an array A, containingNintegers. Find the digit sum array for the given array.
//The digit sum array for a given arrayA, contains the sum of the digits present in a given number, stored at the corresponding index in A.

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ");
        line++;
        solve(N, arr);
    }

}
function solve(N, arr) {
    var bag = "";
    for (var i = 0; i < N; i++) {
        var s = 0;
        for (var j = 0; j < arr[i].length; j++) {
            s += +arr[i][j];
        }
        bag += s + " ";
    }
    console.log(bag);
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