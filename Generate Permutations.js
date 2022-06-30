//Given a collection of numbers, return all possible permutations.

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, arr);

}
function solve(N, arr) {
    var array = [];
    function permutation(arr, current) {
        if (current == N) {
            var bag = [];
            for (var i = 0; i < N; i++) {
                bag.push(arr[i]);
            }
            array.push(bag)
            return;
        }
        else {
            for (var i = current; i < N; i++) {
                swap(arr, i, current);
                permutation(arr, current + 1);
                swap(arr, i, current);
            }
        }
    }
    permutation(arr, 0);
    array.sort();
    for (var i = 0; i < array.length; i++) {
        var bag = "";
        for (var j = 0; j < N; j++) {
            bag += array[i][j] + " ";
        }
        console.log(bag);
    }
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