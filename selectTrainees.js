// select trainees
function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        arr.sort((a, b) => a - b);
        let n = Number(newInput[i]);
        console.log(arr[n] - arr[n - 1]);
    }
}
if (process.env.USERNAME === "") {
    runProgram(`3
    1
    1 1
    3
    6 5 4 1 2 3
    5
    13 4 20 13 2 5 8 3 17 16`);
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
