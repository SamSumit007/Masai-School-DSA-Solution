let obj = {};
obj[0] = 0;

function sell(n) {
    if (obj[n] != undefined)
     return obj[n];
    else
        obj[n] = Math.max(
            n,
            sell(Math.floor(n / 2)) +
                sell(Math.floor(n / 3)) +
                sell(Math.floor(n / 4))
        );

    return obj[n];
}

function runProgram(input) {
    let arr = input.split("\n").map(Number);
    for (let i = 0; i < arr.length; i++) {
        console.log(sell(arr[i]));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`12
    2`);
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
