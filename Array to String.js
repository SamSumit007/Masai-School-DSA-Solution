//input by own
//if a negative integer occure then add 0 in ans string

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, arr);

}
function solve(N, arr) {
    var bag = "";
    for (var i = 0; i < N; i++) {
        if (arr[i] < 0) {
            bag += 0;
        }
        else {
            bag += arr[i];
        }
    }
    console.log(bag);
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