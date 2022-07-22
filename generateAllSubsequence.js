function subsequence(ans, arr, low, high) {
    if (low <= high + 1 && ans.length != 0)
        console.log(ans);

    for (let i = low; i <= high; i++)
        subsequence(ans + arr[i], arr, i + 1, high);
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let arr = newInput[1].trim().split("");
    subsequence("", arr, 0, arr.length - 1);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    abcd`);
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