//The first line of the input containsN, the dimensions of the square matrix
//The nextNlines containsNspace separated integers, denoting the elements of the matrix

function runProgram(input) {
    var input = input.split("\n");
    var N = +(input[0]);
    var arr = [];
    for (var i = 1; i < input.length; i++) {
        arr.push(input[i].split(" ").map(Number));
    }
    solve(N, arr);

}
function solve(N, arr) {
    for (var i = 0; i < N; i++) {
        var bag = "";
        for (var j = 0; j < N; j++) {
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