let arr = [];

function coinsRequired(n) {
    let count = 0;

    let temp = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

    for (let i = 0; i < temp.length; i++) {
        count += Math.floor(n / temp[i]);
        n = n % temp[i];
    }

    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        arr.push(coinsRequired(n));
    }
    console.log(arr.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    45
    93
    29`);
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
