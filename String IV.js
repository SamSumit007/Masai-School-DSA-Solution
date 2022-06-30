//The first line of the input contains T, the number of test cases
//The next T lines containing the input string



function runProgram(input) {
    var input = input.split("\n");
    var t = input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var str = input[line].trim();
        line++;
        solve(str);
    }

}
function solve(str) {
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