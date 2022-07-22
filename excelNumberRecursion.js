function excel(s, n, i) {
    if (n == 0)
        return (s.charCodeAt(i) - 64)
    else
        return (s.charCodeAt(i) - 64) * 26 ** n + excel(s, n - 1, i + 1)


}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let s = newInput[i].trim();
        console.log(excel(s, s.length - 1, 0));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    A
    AB
    ZY`);
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