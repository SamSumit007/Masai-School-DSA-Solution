function solve(n) {
    for (let i = 1; i <= n; i++) {
        let result = "* ";
        if (i === 1 || i === n) for (let j = 1; j < n; j++) result += "* ";
        console.log(result);
    }
}

function runProgram(input) {
    let n = Number(input);
    solve(n);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5`);
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
