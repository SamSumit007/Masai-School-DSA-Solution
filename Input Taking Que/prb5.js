function mulby50(N){
    console.log(N * 50);
}
function runProgram(input) {
    // Write code here
    var N = +(input);
    mulby50(N);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`2`);
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