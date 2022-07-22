function waysToSum(n, sum) {
    if (sum == n) return 1;
    else if (sum > n) return 0;
    else
        return (
            waysToSum(n, sum + 1) +
            waysToSum(n, sum + 2) +
            waysToSum(n, sum + 5)
        );
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        console.log(waysToSum(n, 0));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5`);
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
