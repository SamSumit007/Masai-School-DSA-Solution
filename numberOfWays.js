let obj = {};
obj[0] = 1;
obj[1] = 1;
obj[2] = 2;

//dynamic programming

function numberOfWays(n) {
    if (obj[n] != undefined) return obj[n];
    else
        obj[n] =
            numberOfWays(n - 3) + numberOfWays(n - 2) + numberOfWays(n - 1);

    return obj[n];
}

function runProgram(input) {
    let n = Number(input);
    console.log(numberOfWays(n));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4`);
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
