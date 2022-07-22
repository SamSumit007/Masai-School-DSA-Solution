function solve(arr, k) {
    let sum = arr.reduce((a, b) => a + b);
    if (sum % k !== 0) return 1;

    // Index of the first number
    // not divisible by K
    let left = 0;
    while (left < arr.length && arr[left] % k === 0) {
        ++left;
    }

    // Index of the last number
    // not divisible by K
    let right = arr.length - 1;
    while (right >= 0 && arr[right] % k === 0) {
        --right;
    }

    let len = Math.max(arr.length - left - 1, right);
    sum = 0;

    for (let i = 0; i < len; i++) sum += arr[i];

    let count = 0;

    if (sum % k !== 0) count++;

    for (let i = len; i < arr.length; i++) {
        sum += arr[i] - arr[i - len];
        if (sum % k !== 0) count++;
    }

    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");

    let [, k] = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);

    console.log(solve(arr, k));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 3
    2 3 4 6`);
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
