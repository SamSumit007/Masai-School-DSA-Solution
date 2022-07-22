let p;

function peak(arr, low, high) {
    if (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            p = mid;
            return;
        } else if (arr[low] < arr[mid]) {
            //if left half is sorted, search right half for peak
            peak(arr, mid + 1, high);
        } else {
            //if right half is sorted, search left half for peak
            peak(arr, low, mid - 1);
        }
    }
}

function binary(arr, low, high, key) {
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == key) return mid;
        else if (arr[mid] > key) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nk = newInput[0].trim().split(" ").map(Number);
    let k = nk[1];
    let arr = newInput[1].trim().split(" ").map(Number);
    peak(arr, 0, arr.length - 1);
    if (k >= arr[0] && k <= arr[p]) {
        console.log(binary(arr, 0, p, k));
    } else {
        console.log(binary(arr, p + 1, arr.length - 1, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5 6
    3 4 7 9 1 2`);
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
