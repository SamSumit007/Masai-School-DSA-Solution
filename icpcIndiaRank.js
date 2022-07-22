function runProgram(input) {
    var newInput = input.split("\n");
    var countries = newInput.slice(1);
    var i = countries.indexOf("India");
    console.log(i + 1);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
Russia
USA
Japan
China
India`);
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