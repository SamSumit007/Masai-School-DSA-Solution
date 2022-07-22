function maxHeight(arr) {
    let dp = [];
    dp[0] = 1;
    let max = 1;

    for (let i = 1; i < arr.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(maxHeight(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`9
    10 22 9 33 21 50 41 60 80`);
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
