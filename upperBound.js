function upperBound(arr, k) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > k) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    let k = nk[1];
    console.log(upperBound(arr, k));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10`);
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