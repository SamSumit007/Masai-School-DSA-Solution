let ans = 0;

function subsetSum(arr, x, low, high, sum) {
    if (low <= high + 1 && sum == x) {
        ans++;
    }

    for (let i = low; i <= high; i++) {
        subsetSum(arr, x, i + 1, high, sum + arr[i])
    }

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let nx = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    let x = nx[1];
    subsetSum(arr, x, 0, arr.length - 1, 0);
    console.log(ans);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 10
    1 2 3 4`);
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