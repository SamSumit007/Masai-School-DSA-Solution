function findOdd(arr) {
    let count = 0;
    let maxCount = 0;
    let prev = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0 && arr[i] == prev) count++;
        else if (arr[i] % 2 != 0) {
            maxCount = Math.max(maxCount, count);
            count = 1;
            prev = arr[i];
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(findOdd(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`12
    1 1 1 1 2 2 2 2 2 1 1 1`);
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
