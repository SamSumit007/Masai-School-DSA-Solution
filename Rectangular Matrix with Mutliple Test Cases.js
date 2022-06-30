//The first line of the input containsT, the number of test cases
//The first line of each test case containsN, andMthe dimension of the matrix
//The nextNlines containMelements each denoting the elements of the matrix

function runProgram(input) {
    var input = input.split("\n");
    var t = +(input[0]);
    var line = 1;
    for (var i = 0; i < t; i++) {
        var size = input[line].trim().split(" ").map(Number);
        line++;
        var N = size[0];
        var M = size[1];
        var arr = [];


        for (var j = 1; j <= N; j++) {
            arr.push(input[line].trim().split(" ").map(Number));
            line++;
        }
        solve(N, M, arr);
    }

}
function solve(N, M, arr) {
    for (var i = 0; i < N; i++) {
        var bag = "";
        for (var j = 0; j < M; j++) {
            bag += (arr[i][j] + 1) + " ";
        }
        console.log(bag);
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
