function maximize(a, b, c, k) {
    let ans = 0;
    let low = 0;
    let high = k;
    while (low <= high) {
        let x = low + Math.floor((high - low) / 2);
        let eq = a * x * x + b * x + c;
        if (eq <= k) {
            ans = x;
            low = x + 1;
        } else high = x - 1;
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let inp = newInput[i].trim().split(" ").map(Number);
        let a = inp[0];
        let b = inp[1];
        let c = inp[2];
        let k = inp[3];
        console.log(maximize(a, b, c, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    1 1 1 20`);
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
