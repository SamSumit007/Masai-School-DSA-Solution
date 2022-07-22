let ans = [];

function sumOfK(arr, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    return sum;
}

function cost(arr, k) {
    let ans = 999999;
    let min;
    for (let i = 0; i < arr.length; i++) {
        let cost = [];
        for (let j = 0; j < arr.length; j++) {
            let temp;
            if (arr[j] >= arr[i]) temp = (arr[j] - arr[i]) * 5;
            else temp = (arr[i] - arr[j]) * 3;
            cost.push(temp);
        }
        cost.sort((a, b) => a - b);
        min = sumOfK(cost, k);
        ans = Math.min(min, ans);
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let k = nk[1];
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        ans.push(cost(arr, k));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5 3
    9 4 9 7 4`);
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
