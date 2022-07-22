function maxAmount(arr, n) {
    let cache = [];
    if (n === 1) return arr[0];
    else if (n === 2) return Math.max(arr[0], arr[1]);

    cache[0] = arr[0];
    cache[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        cache[i] = Math.max(cache[i - 1], arr[i] + cache[i - 2]);
    }

    return cache[n - 1];
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let n = Number(newInput[i]);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(maxAmount(arr, n));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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
