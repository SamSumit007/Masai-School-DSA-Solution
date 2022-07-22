function reverseStack(arr, n) {
    if (n == 1)
        return arr[0];
    else
        return arr[n - 1] + " " + reverseStack(arr, n - 1)

}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    let arr = newInput.slice(0, newInput.length - 1);

    let ans = (reverseStack(arr, arr.length)).split(" ");

    for (let i in ans) {
        console.log(ans[i]);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    2
    3
    4
    -1`);
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