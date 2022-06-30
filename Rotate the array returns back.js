//You are given an array of n elements and an integer k, you need to rotate the array by k units.

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var size = input[line].trim().split(" ").map(Number);
        var N = size[0];
        var K = size[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        solve(N, K, arr);
    }

}
function solve(N, K, arr) {
    var K = K % N;
    var i = 0;
    var j = N - K - 1;
    while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
    }
    var i = N - K;
    var j = N - 1;
    while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
    }
    var bag = "";
    for (var i = N - 1; i >= 0; i--) {
        bag += arr[i] + " ";
    }
    console.log(bag);

}
function swap(array, a, b) {
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
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