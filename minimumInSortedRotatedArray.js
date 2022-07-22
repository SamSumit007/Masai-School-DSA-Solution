let p;

function peak(arr, low, high) {
    if (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            p = mid;
        } else if (arr[low] <= arr[mid]) {
            //if left half is sorted, search right half for peak
            peak(arr, mid + 1, high);
        } else {
            //if right half is sorted, search left half for peak
            peak(arr, low, mid - 1);
        }
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    p = arr[0];
    peak(arr, 0, arr.length - 1);
    let min = arr[0];
    console.log(Math.min(arr[p + 1], min));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`10
    1 1 1 1`);
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
