function maximum(arr) {
    if (arr.length == 1) return arr[0];
    if (arr[arr.length - 1] > arr[0]) return arr[arr.length - 1];
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return arr[mid];
        else if (arr[low] < arr[mid]) {
            low = mid;
        } else if (arr[mid] < arr[high]) high = mid;
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(maximum(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    6 7 8 9 10 11 12 14 1 2 3 4`);
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
