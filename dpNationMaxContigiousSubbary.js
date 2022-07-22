function solve(arr) {
    let max = arr[0];
    let currentMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(currentMax + arr[i], arr[i]);
        max = Math.max(max, currentMax);
    }

    return max;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(solve(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    3
    1 2 3
    4
    -1 -1 0 1
    3
    2 -1 2`);
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
