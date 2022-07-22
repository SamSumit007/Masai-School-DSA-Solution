let ans = [];

function solve(n) {
    let ed = 0;
    let od = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (i % 2 === 0) ed++;
            else od++;
        }
    }

    if (ed > od) return "Even Skewed";
    else if (od > ed) return "Odd Skewed";
    else return "Not Skewed";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        ans.push(solve(n));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    4
    6
    11`);
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
