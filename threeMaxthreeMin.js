function solve(arr) {
    arr.sort((a, b) => a - b);
    let min = [];
    let max = [];
    let minResult = "";
    let maxResult = "";

    for (let i = 0; i < arr.length; i++) {
        if (min.length < 3 && !min.includes(arr[i])) {
            min.push(arr[i]);
            minResult += arr[i] + " ";
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (max.length < 3 && !max.includes(arr[i])) {
            maxResult = arr[i] + " " + maxResult;
            max.push(arr[i]);
        }
    }

    if (min.length < 3) console.log("Not Possible");
    else console.log(minResult);

    if (max.length < 3) console.log("Not Possible");
    else console.log(maxResult);
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    solve(arr);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`8
    1 2 3 4 2 1 6 5`);
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
