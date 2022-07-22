let obj;

function solve(arr, i, sum) {
    if (sum === 0) return true;
    else if (sum < 0 || i >= arr.length) return false;

    if (obj[sum + "-" + i] !== undefined) return obj[sum + "-" + i];

    obj[sum + "-" + i] =
        solve(arr, i + 1, sum - arr[i]) || solve(arr, i + 1, sum);

    return obj[sum + "-" + i];
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let sum = Number(newInput[2]);
    obj = {};
    if (solve(arr, 0, sum)) console.log("yes");
    else console.log("no");
}
if (process.env.USERNAME === "getsu") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
