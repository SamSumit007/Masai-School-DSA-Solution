//The first line of the input containsNandM, the dimensions of the matrix
//The nextNline containsMspace separated integers, denoting the elements of the matrix

function runProgram(input) {
    var input = input.split("\n");
    var arr = [];
    var size = input[0].split(" ").map(Number);
    var N = size[0];
    var M = size[1];
    for (var i = 1; i <= N; i++) {
        arr.push(input[i].split(" ").map(Number));
    }
    solve(N, M, arr);

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
