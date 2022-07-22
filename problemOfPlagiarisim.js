let ans = 0;

function swap(arr, a, b) {
    let tempArr = arr.slice(0);
    let temp = tempArr[a];
    tempArr[a] = tempArr[b];
    tempArr[b] = temp;
    return tempArr;
}

function isTrue(arr, l, r) {
    let sum = 0;
    for (let i = l; i <= r; i++) {
        sum += arr[i];
    }
    if (sum % 2 == 0) return false;
    else return true;
}

function findPermutations(arr, l, r, low, high) {
    if (low == high) {
        if (isTrue(arr, l, r)) ans++;
    } else {
        for (let i = low; i <= high; i++) {
            arr = swap(arr, low, i);
            findPermutations(arr, l, r, low + 1, high);
        }
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let n = Number(newInput[0]);
    let lr = newInput[1].trim().split(" ").map(Number);
    let l = lr[0];
    let r = lr[1];
    let arr = [];

    for (let i = 1; i <= n; i++) arr.push(i);

    findPermutations(arr, l, r, 0, arr.length - 1);
    console.log(ans);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    0 1`);
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
