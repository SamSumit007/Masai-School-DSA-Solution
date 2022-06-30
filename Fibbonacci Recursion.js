//In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
//such that each number is the sum of the two preceding ones, starting from 0 and 1. That is
//F (0) = 0 , F (1) = 1
//and
//F (n) = F (n − 1) + F (n − 2) ,
//for n > 1.

function runProgram(input) {
    var n = +input;
    fibo(n);

}
function fibo(n) {
    function fib(N) {
        if (N == 1 || N == 0) {
            return N;
        }
        else {
            return fib(N - 1) + fib(N - 2);
        }
    }

    console.log(fib(n));
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