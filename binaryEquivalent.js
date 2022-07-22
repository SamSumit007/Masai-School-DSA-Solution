function binary(n) {
    if (n == 0 || n == 1)
        return n;
    else if (n % 2 == 0)
        return binary(n / 2) + '0';
    else
        return binary(Math.floor(n / 2)) + '1';
}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    let t = newInput[0];
    for (let i = 1; i <= t; i++) {
        console.log(binary(newInput[i]));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    15
    128`);
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