function doubleall(one, two, three, four, five) {
    console.log(2 * (one+two+three+four+five))
}

function runProgram(input) {
    var input= input.split(" ").map(Number);
    var[one,two,three,four,five] = input;
    doubleall(one, two, three, four, five)

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`1 2 3 4 5`);
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