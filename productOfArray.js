function product(arr) {
    let n = arr.length;
    let result = "";

    let left = [];
    let right = [];

    left[0] = 1;
    right[n - 1] = 1;

    for (let i = 1; i < n; i++) left[i] = arr[i - 1] * left[i - 1];

    for (let i = n - 2; i >= 0; i--) right[i] = arr[i + 1] * right[i + 1];

    for (let i = 0; i < n; i++) result += left[i] * right[i] + " ";

    return result;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(product(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
