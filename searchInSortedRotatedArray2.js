function binarySearch(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == k) return mid;
        else if (arr[low] < arr[mid]) {
            //left half of mid is sorted
            if (k >= arr[low] && k < arr[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            //right half of mid is sorted
            if (k > arr[mid] && k <= arr[high]) low = mid + 1;
            else high = mid - 1;
        }
    }

    return -1;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let k = nk[1];
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(binarySearch(arr, k));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`15 14
    10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);
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
