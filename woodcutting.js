let arr;
let inp;

function runProgram(input) {
    let newInput = input.split("\n");
    let n = Number(newInput[0]);
    arr = newInput[1].trim().split(" ").map(Number);
    inp = [];

    for (let i = 1; i <= n; i++) inp.push(i);

    console.log(solve(arr.length, i));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    3 1 5 8`);
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
