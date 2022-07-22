function multiply(a, b) {
    if (b == 0)
        return 0;
    else
        return a + multiply(a, b - 1);
}

function runProgram(input) {

    let newInput = input.trim().split(" ").map(Number);
    let a = newInput[0];
    let b = newInput[1];
    console.log(multiply(a, b));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 6`);
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