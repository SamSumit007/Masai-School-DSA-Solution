let arr;
let dp;

function solve(sum, i) {
    if (sum === 0) return true;
    else if (sum < 0) return false;
    else if (i === arr.length) return false;

    if (dp[sum][i] != -1) return dp[sum][i];

    dp[sum][i] = solve(sum - arr[i], i + 1) || solve(sum, i + 1);

    return dp[sum][i];
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nsum = newInput[0].trim().split(" ").map(Number);
    arr = newInput[1].trim().split(" ").map(Number);
    let sum = nsum[1];

    dp = new Array(1100).fill(-1).map((el) => new Array(arr.length).fill(-1));
    let flag = solve(sum, 0);

    if (flag) console.log("Party");
    else console.log("No Party");
}
if (process.env.USERNAME === "getsu") {
    runProgram(`6 9
    3 34 4 12 5 2`);
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
