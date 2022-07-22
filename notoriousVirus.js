function findSum(arr) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }

    return sum - max;
}

function solve(arr) {
    let currentMax = 0;
    let runningMax = 0;
    let ele = 0;
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        runningMax += arr[i];
        ele = Math.max(ele, arr[i]);
        if (runningMax > currentMax) currentMax = runningMax;

        if (runningMax < 0) {
            ans = Math.max(ans, currentMax - ele);
            runningMax = 0;
            ele = 0;
        }
    }
    console.log(ans);
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(solve(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`7
    0 -11 5 5 -10 0 50`);
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
