//The first line of the input contains T, the number of test cases
//The first line of each test case contains N, the dimensions of the matrix
//The nextNlines containNspace separated integers, denoting the elements of the matrix


function runProgram(input) {
    var input = input.split("\n");
    var t = +(input[0]);
    var line = 1;
    for (var i = 0; i < t; i++) {
        var arr = [];
        var N = +(input[line]);
        line++;
        for (var j = 0; j < N; j++) {
            arr.push(input[line].split(" ").map(Number));
            line++;
        }
        solve(N, arr);
    }
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