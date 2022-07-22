function solve(arr, k) {
    let min = Infinity;
    let flag = false;
    let left = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        while (sum >= k) {
            min = Math.min(min, i - left + 1);
            flag = true;
            sum -= arr[left];
            left++;
        }
    }

    if (flag) return min;
    else return -1;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let [, k] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(solve(arr, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5 7
    1 2 3 4 5`);
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
