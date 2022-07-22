function fun(s) {
    if (s == "")
        return 0;
    else
        return 1 + fun(s.substring(1));

}

function runProgram(input) {

    console.log(fun(input));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`masai`);
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