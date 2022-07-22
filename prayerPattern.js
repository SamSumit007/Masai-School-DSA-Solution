function runProgram(input) {
    var n = Number(input);
    for (var i = 0; i < n; i++) {
        var result = "";
        for (var j = n - 1; j > i; j--)
            result += " ";
        result += "/";
        for (var k = 0; k < i * 2; k++)
            result += " ";
        result += "\\";
        console.log(result);

    }

}

if (process.env.USERNAME === "getsu") {
    runProgram(`10`);
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