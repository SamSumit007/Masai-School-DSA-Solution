function hacks(n) {
    if (n == 0)
        return 1
    else if (n < 0)
        return 0
    else
        return hacks(n - 4) + hacks(n - 8)
}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = newInput[i];
        console.log(hacks(n));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`6
    28
    52
    14
    86
    146
    120`);
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