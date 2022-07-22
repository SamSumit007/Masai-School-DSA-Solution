function hacks(n) {
    if (n == 1)
        return true;
    else if (n < 1)
        return false;
    else
        return hacks(n / 10) || hacks(n / 20)


}

function runProgram(input) {
    let newInput = input.trim().split("\n").map(Number);
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let flag = hacks(newInput[i])
        if (flag)
            console.log("Yes");
        else
            console.log("No");
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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