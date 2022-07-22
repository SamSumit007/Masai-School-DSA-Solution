let arr;
let cache;

function findWays(n, low) {
    if (n == 0) return 1;
    else if (n < 0) return 0;

    if (cache[n][low] !== -1) return cache[n][low];

    let ans = 0;
    for (let i = low; i < arr.length; i++) {
        ans = ans + findWays(n - arr[i], i);
    }

    cache[n][low] = ans;
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nm = newInput[0].trim().split(" ").map(Number);
    arr = newInput[1].trim().split(" ").map(Number);
    let n = nm[0];
    cache = new Array(1000).fill(-1).map(() => new Array(1000).fill(-1));
    console.log(findWays(n, 0));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 3
    1 2 3`);
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
