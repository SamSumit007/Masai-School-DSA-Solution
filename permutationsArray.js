function swap(arr, a, b) {
    let temp = arr.slice(0);
    [temp[a], temp[b]] = [temp[b], temp[a]];
    return temp;
}

function solve(arr, l, r) {
    if (l === r) console.log(arr.join(" "));

    for (let i = l; i <= r; i++) {
        arr = swap(arr, l, i);
        solve(arr, l + 1, r);
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    solve(arr, 0, arr.length - 1);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
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
