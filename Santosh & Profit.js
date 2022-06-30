// number of ways first we can take 4 or we can take 8

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0]
    var line = 1;
    for (var i = 0; i < t; i++) {
        var N = +input[line];
        line++;
        solve(N);
    }
}
function solve(N) {
    function time(N) {
        if (N == 0) {
            return 1;
        }
        else if (N < 0) {
            return 0;
        }
        else {
            return time(N - 4) + time(N - 8);
        }

    }
    console.log(time(N));
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
