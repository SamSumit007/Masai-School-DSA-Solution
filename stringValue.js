function runProgram(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++)
        sum += input.charCodeAt(i) - 96;

    console.log(sum);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`aba`);
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