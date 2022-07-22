function isUnique(str, m, n) {
    let set = new Set();
    for (let i = m; i <= n; i++) {
        if (set.has(str[i])) return false;
        set.add(str[i]);
    }
    return true;
}

function solve(str, k) {
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
        if (isUnique(str, i, i + k - 1)) {
            count++;
        }
    }
    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let [, k] = newInput[0].trim().split(" ").map(Number);
    let str = newInput[1].trim();
    console.log(solve(str, k));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 2
    abcc`);
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
