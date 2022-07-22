function requiredSpace(arr, space, employees) {
    let count = 1;
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - prev >= space) {
            prev = arr[i];
            count++;
        }
    }
    if (count >= employees) return true;
    else return false;
}

function solve(arr, k) {
    let max = 0;
    let ans = -1;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    let low = 0;
    let high = max;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (requiredSpace(arr, mid, k)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let [n, k] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput
            .splice(i + 1, n)
            .map(Number)
            .sort((a, b) => a - b);
        console.log(solve(arr, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5 3
    1
    2
    8
    4
    9`);
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
