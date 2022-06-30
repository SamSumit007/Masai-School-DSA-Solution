//Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;

    for (var i = 0; i < t; i++) {
        var N = input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        solve(N, arr);
    }

}
function solve(N, arr) {
    var ans = [];
    var stack = [];
    for (var i = N - 1; i >= 0; i--) {
        while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            ans[i] = -1;
        }
        else {
            ans[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    var bag = "";
    for (var i = 0; i < N; i++) {
        bag += ans[i] + " ";
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