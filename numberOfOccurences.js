function lowerBound(arr, k) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == k) {
            ans = mid;
            high = mid - 1;
        } else if (arr[mid] < k)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return ans;
}

function upperBound(arr, k) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == k) {
            ans = mid;
            low = mid + 1;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else
            high = mid - 1;

    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    let k = nk[1];
    let lb = lowerBound(arr, k);
    let ub = upperBound(arr, k);
    console.log(ub - lb + 1);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`10 22
    2 2 2 2 2 11 15 18 20 22`);
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