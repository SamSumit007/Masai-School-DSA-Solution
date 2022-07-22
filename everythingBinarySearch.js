function lowerBound(arr, key) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= key) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    return ans;
}

function upperBound(arr, key) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] <= key) {
            ans = mid;
            low = mid + 1;
        } else high = mid - 1;
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let key = Number(newInput[2]);
    let lb = lowerBound(arr, key);
    let ub = upperBound(arr, key);
    if (lb == -1) console.log("-1 -1 0");
    else console.log(lb + " " + ub + " " + (ub - lb + 1));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`6
    1 1 1 2 2 2	
    1`);
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
