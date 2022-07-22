function compare(a, b) {
    return a - b;
}

let ans = [];

function binarySerach(arr, n) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == n) {
            ans.push("YES");
            return;
        } else if (arr[mid] > n) high = mid - 1;
        else low = mid + 1;
    }
    ans.push("NO");
    return;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let nq = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    arr.sort(compare);
    let q = nq[1];
    for (let i = 2; i < 2 + q; i++) {
        let n = Number(newInput[i]);
        binarySerach(arr, n);
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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
