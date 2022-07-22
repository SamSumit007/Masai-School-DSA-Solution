function findEqui(arr) {
    let sum = 0;
    let lsum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (sum == lsum) return i + 1;

        lsum += arr[i];
    }
    return -1;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(findEqui(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    3 3 5 5 1`);
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
