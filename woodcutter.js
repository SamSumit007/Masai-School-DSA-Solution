function findWood(arr, blade) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > blade) sum += arr[i] - blade;
    }
    return sum;
}

function solve(arr, key) {
    let ans = -1;
    let low = 0;
    let high = 0;
    for (let i = 0; i < arr.length; i++) high = Math.max(high, arr[i]);

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let amount = findWood(arr, mid);
        if (amount === key) return mid;
        else if (amount > key) {
            ans = mid;
            low = mid + 1;
        } else high = mid - 1;
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let [, key] = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(solve(arr, key));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 7
    20 15 10 17 `);
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
