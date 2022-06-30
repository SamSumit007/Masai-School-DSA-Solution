//Given an integer N. In how many ways you can add numbers 1, 2, and, 5 such that the summation equals N.

function runProgram(input) {
    var input = input.split("\n");
    var tc = +input[0];
    var line = 1;
    for (var i = 0; i < tc; i++) {
        var N = +input[line];
        line++;
        solve(N);
    }

}
function solve(N) {
    var count = 0;
    function sum(n) {
        if (n == N) {
            count++;
            return 1;
        }
        else if (n > N) {
            return;
        }
        else {
            return sum(n + 1) + sum(n + 2) + sum(n + 5);
        }
    }
    sum(0);
    console.log(count);
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