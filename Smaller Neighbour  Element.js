//Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.
//Mathematically,
//G[i] for an element A[i] is an element A[j] such that
//j is maximum possible AND
//j < i AND
//A[j] < A[i]
//Note: Elements for which no smaller element exist, consider next smaller element as -1

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, arr);

}
function solve(N, arr) {
    var ans = [];
    var stack = [];
    for (var i = 0; i < N; i++) {
        while (stack.length != 0 && peek(stack) >= arr[i]) {
            pop(stack);
        }
        if (top == -1) {
            ans[i] = -1;
        }
        else {
            ans[i] = peek(stack);
        }
        push(stack, arr[i]);
    }
    var bag = "";
    for (var i = 0; i < N; i++) {
        bag += ans[i] + " ";
    }
    console.log(bag);
}

var top = -1;
function push(array, data) {
    top++;
    array[top] = data;
}

function pop(array) {
    ans = array[top];
    top--;
    return ans;
}
function peek(array) {
    return array[top];
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