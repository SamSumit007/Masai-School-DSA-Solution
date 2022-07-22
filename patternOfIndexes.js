function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let j = 0; j < n; j++) {
            if (j % 2 == 0)
                result += i + " ";
            else
                result += j + " ";
        }
        console.log(result);
    }
}

function runProgram(input) {
    let n = Number(input);
    printPattern(n);
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