function maxCount(arr) {
    let max = 0;
    let i = 0;
    let level = 1;
    while (i < arr.length) {
        i += level;
        level++;
        if (i <= arr.length) max++;
    }
    return max;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(maxCount(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    100 2 1 4 5 5`);
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
