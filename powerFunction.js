function power(n, m) {
    if (m == 0)
        return 1;
    else if (m == 1)
        return n;
    else
        return n * power(n, m - 1)
}

function runProgram(input) {
    let newInput = input.trim().split(" ").map(Number);
    let n = newInput[0];
    let m = newInput[1];
    console.log(power(n, m));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2 4`);
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