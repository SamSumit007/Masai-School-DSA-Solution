//Given a matrix A of size n and m, you have to print the array of size n each element representing the maximum of ith row of the matrix A.

function runProgram(input) {
    var input = input.split("\n");
    var size = input[0].trim().split(" ").map(Number);
    var n = size[0];
    var m = size[1];
    var arr = [];
    var line = 1;
    for (var i = 0; i < n; i++) {
        arr.push(input[line].trim().split(" ").map(Number));
        line++;
    }
    solve(n, m, arr);

}
function solve(n, m, arr) {
    //console.log(n,m,arr)
    bag = "";
    for (var i = 0; i < n; i++) {
        var max = 0;
        for (var j = 0; j < m; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        bag += max + " ";
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