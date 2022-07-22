let arr = {};
arr[0] = 0;
arr[1] = 1;

function fibonacci(n) {
    if (arr[n] != undefined) return arr[n];
    else arr[n] = fibonacci(n - 1) + fibonacci(n - 2);

    return arr[n];
}

function runProgram(input) {
    let num = Number(input);
    console.log(fibonacci(num));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4`);
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
