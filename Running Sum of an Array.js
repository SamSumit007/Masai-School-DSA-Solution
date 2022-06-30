//You are given an arrayAcontaining N integers, find the running sum of the array.
//The running sum of the array is defined as the sum of all the elements of the array that exists before the current element, 
//including the current element.

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        solve(N, arr);
    }

}
function solve(N, arr) {
    var bag = "";
    var s = 0;
    for (var i = 0; i < N; i++) {
        s += arr[i];
        bag += s + " ";
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