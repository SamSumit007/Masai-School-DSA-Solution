//Given an array A of non-negative integers of size **m**. 
//Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

function runProgram(input) {
    var input = input.split("\n");
    var N = +(input[0].trim());
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, arr);
}
function solve(N, array) {
    var ar = [];
    for (var i = 0; i < N; i++) {
        ar.push(i);
    }

    for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                swap(ar, j, j + 1);
            }
        }
    }

    var bag = "";
    for (var i = 0; i < N; i++) {
        bag += ar[i] + " ";
    }
    console.log(bag);
}
function swap(array, a, b) {
    var temp = array[a];
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