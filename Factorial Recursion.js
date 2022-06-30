//factorial by recursion

function runProgram(input) {
    var N = +input;
    factorial(N);
}

function factorial(a) {
    function fact(N) {
        if (N == 0 || N == 1) {
            return 1;
        }
        else {
            return N * fact(N - 1);
        }
    }

    console.log(fact(a));
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