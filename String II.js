//The first line of the test case contains T, the number of test case
//The first line of each test case, contains N, the size of the string
//The next line contains the string itself

function runProgram(input) {
    var input = input.split("\n");
    var t = input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var size = +input[line];
        line++;
        var str = input[line].trim();
        line++;
        solve(size, str);
    }


}
function solve(size, str) {
    console.log(str);
}



if (process.env.USER === "") {
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