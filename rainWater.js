let ans = [];

function rain(arr) {
    let n = arr.length;
    let left = [];
    let right = [];
    let max;
    let water = 0;

    //finding max element left of every ith element
    max = arr[0];
    for (let i = 0; i < n; i++) {
        max = Math.max(arr[i], max);
        left[i] = max;
    }

    //finding max element right of every ith element
    max = arr[n - 1];
    for (let i = n - 1; i >= 0; i--) {
        max = Math.max(max, arr[i]);
        right[i] = max;
    }

    //finding min of left and right of every ith element and subtracting with ith element
    for (let i = 0; i < arr.length; i++) {
        water += Math.min(left[i], right[i]) - arr[i];
    }
    return water;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        ans.push(rain(arr));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    3 2 0 4 6
    7
    7 0 3 6 2 3 5`);
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
