function leftSum(arr, mid) {
    let sum = 0;
    for (let i = 0; i < mid; i++) sum += arr[i];
    return sum;
}

function rightSum(arr, mid) {
    let sum = 0;
    for (let i = mid + 1; i < arr.length; i++) sum += arr[i];
    return sum;
}

function findEqui(arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let lsum = leftSum(arr, mid);
        let rsum = rightSum(arr, mid);
        if (lsum == rsum) return mid + 1;
        else if (lsum > rsum) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(findEqui(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    3 3 5 5 1`);
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
