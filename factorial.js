function factorial(num) {
    if (num == 0 || num == 1)
        return 1;
    else
        return num * factorial(num - 1);
}

function runProgram(input) {
    let num = Number(input);
    console.log(factorial(num));

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