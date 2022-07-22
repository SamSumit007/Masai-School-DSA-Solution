function count(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (k - arr[i] >= 0) {
            k = k - arr[i];
            count++;
        }
    }
    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let k = nk[1];
    let arr = newInput[1].trim().split(" ").map(Number);
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(count(arr, k));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 10
    5 4 2 4`);
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
