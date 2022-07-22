function logarithm(n) {
    if (n == 1)
        return 0;
    else
        return Math.log(n) + logarithm(n - 1);

}

function runProgram(input) {
    let n = Number(input);
    console.log(logarithm(n).toFixed(4));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3`);
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