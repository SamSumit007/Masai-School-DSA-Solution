function findSum(arr, n) {
    if (n == 0)
        return 0
    else
        return Math.abs(arr[n] - arr[n - 1]) + findSum(arr, n - 1)

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let n = arr.length - 1;
        console.log(findSum(arr, n));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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