function runProgram(input) {
    var input = input.split("\n");
    var s1 = input[0];
    var s2 = input[1];
    var x = s2.split("").sort().join("").trim();
    var y = s1.split("").sort().join("").trim();

    if (x == y)
        console.log("True");
    else
        console.log("False");
}
if (process.env.USERNAME === "") {
    runProgram(``);
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