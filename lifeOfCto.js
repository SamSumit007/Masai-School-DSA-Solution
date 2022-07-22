function buggy(arr) {
    let ans = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            ans = i;
            break;
        }
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(buggy(arr));
}
if (process.env.USERNAME === "") {
    runProgram(`5
    0 0 0 1 1`);
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
