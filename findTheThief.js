function runProgram(input) {
    var newInput = input.split("\n");
    var n = Number(newInput[3]);
    var a = Number(newInput[0]);
    var b = Number(newInput[1]);
    var c = Number(newInput[2]);

    if (a > n)
        console.log("Person A");
    else if (b > n)
        console.log("Person B");
    else if (c > n)
        console.log("Person C");
    else
        console.log("Not found");



}
if (process.env.USERNAME === "getsu") {
    runProgram(`30000
12000
43000
31000`);
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