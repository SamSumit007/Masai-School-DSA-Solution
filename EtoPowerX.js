function fact(n) {
    if (n == 1 || n == 0)
        return 1
    else
        return n * fact(n - 1);
}

function EtoPowerX(x, n) {
    if (n == 1)
        return x + EtoPowerX(x, n - 1);
    if (n == 0)
        return 1;

    return (x ** n) / fact(n) + EtoPowerX(x, n - 1);

}

function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let x = arr[0];
    let n = arr[1];
    console.log(EtoPowerX(x, n).toFixed(4));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 2`);
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