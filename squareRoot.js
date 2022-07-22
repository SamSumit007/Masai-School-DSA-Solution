function squareRoot(n) {
    let low = 0;
    let high = n;
    let ans;

    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (mid * mid <= n) {
            ans = mid;
            low = mid + 1;
        } else if (mid * mid > n) high = mid - 1;
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    let ans = [];
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        ans.push(squareRoot(n));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    4
    8`);
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
