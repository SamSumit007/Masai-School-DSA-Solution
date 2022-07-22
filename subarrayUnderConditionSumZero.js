function findSubarray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === 0) console.log(i, j);
        }
    }
}

function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    findSubarray(arr);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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
