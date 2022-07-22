function isPowerOf2(n) {
    if (n == 0)
        return false;
    while (n % 2 == 0) {
        n = n / 2;
    }
    return n == 1;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var n = Number(newInput[i]);
        if (isPowerOf2(n))
            console.log("YES");
        else
            console.log("NO");

    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
1
2
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