function gp(n, r) {
    if (n == 0)
        return 1;
    else
        return (1 / r ** n) + gp(n - 1, r)
}

function runProgram(input) {
    let newInput = input.trim().split(" ").map(Number);
    let n = newInput[0];
    let r = newInput[1];

    console.log(gp(n, r).toFixed(4));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 5`);
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