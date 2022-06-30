//Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).
//You have to print the result up to 4 digits after the decimal point.
//ln(x ∙ y) = ln(x) + ln(y)

function runProgram(input) {
    var n = +input;
    solve(n);

}
function solve(n) {
    function fact(n) {
        if (n == 2) {
            return Math.log(2);
        }
        else {
            return Math.log(n) + fact(n - 1);
        }
    }

    console.log(fact(n).toFixed(4));
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
