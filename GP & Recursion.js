//Now that you have learnt about geometric progression in Masai School pre-course, we hope you remember about the sum of a geometric series:
//Assume, you are given
//S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)
//You will be given two integers n and r
//Your task is to calculate the sum S by writing a recursive function

function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
    var n = input[0];
    var r = input[1];
    solve(n, r);

}
function solve(n, r) {
    function gp(n, r) {
        if (n == 0) {
            return 1;
        }
        else {
            return 1 / (r ** n) + gp(n - 1, r);
        }
    }

    console.log(gp(n, r).toFixed(4));
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