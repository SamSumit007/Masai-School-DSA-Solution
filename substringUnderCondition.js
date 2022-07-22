function runProgram(input) {
    var count = 0;
    for (var i = 0; i < input.length; i++)
        for (var j = i + 1; j < input.length + 1; j++) {
            var s = input.substring(i, j);
            if (s[0] == s[s.length - 1])
                count++;
        }

    console.log(count);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`abcab`);
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