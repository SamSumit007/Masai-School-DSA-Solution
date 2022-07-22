function solve(data, k) {
    let count = 1;
    let temp = data[0];
    for (let i = 0; i < data.length; i++) {
        if (data[i] - temp > 2 * k) {
            count++;
            temp = data[i];
        }
    }
    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let [, k] = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(solve(arr, k));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 2
    1 5 20`);
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
