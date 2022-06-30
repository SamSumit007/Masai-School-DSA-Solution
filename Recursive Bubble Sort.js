//sorting by recursion and with bubble sort

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, arr);
}
function solve(N, arr) {
    function sort(arr, high) {
        if (high == 0) {
            return;
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                }
            }
            return sort(arr, high - 1);
        }
    }
    function swap(arr, a, b) {
        temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    sort(arr, N - 1);
    var bag = "";
    for (var i = 0; i < arr.length; i++) {
        bag += arr[i] + " ";
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