function findKey(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = "Not Found";
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == k) return mid;
        else if (mid != 0 && arr[mid - 1] == k) return mid - 1;
        else if (mid != arr.length - 1 && arr[mid + 1] == k) return mid + 1;
        else if (k > arr[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let k = nk[1];
        console.log(findKey(arr, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    7 40
    10 3 40 20 80 70 90`);
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
