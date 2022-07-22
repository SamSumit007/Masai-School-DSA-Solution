let flag = false;

function subsequence(arr, ans, low, high, sum) {
    if (low <= high + 1)
        if (ans == sum)
            flag = true;

    for (let i = low; i <= high; i++)
        subsequence(arr, ans + arr[i], i + 1, high, sum)

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let sum = Number(newInput[2]);
    subsequence(arr, 0, 0, arr.length - 1, sum)
    if (flag)
        console.log("yes");
    else
        console.log("no");

}
if (process.env.USERNAME === "getsu") {
    runProgram(`6
    1 2 3 4
    9`);
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