//Given two integers a and b, we need to find the value of a^b recursively.

function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
    var a = input[0];
    var b = input[1];
    solve(a, b);


}
function solve(a, b) {
    function power(a, b, n) {
        if (b == 0) {
            return 1;
        }
        else if (b == 1) {
            return n;
        }
        else {
            return power(a, b - 1, a * n);
        }
    }
    console.log(power(a, b, a));
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