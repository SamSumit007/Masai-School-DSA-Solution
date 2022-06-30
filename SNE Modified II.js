//Andy and Mark are playing a game of arrays.
//The game involves finding the smallest neighbor element to the left side for each element in the array
//Andy counts the number of elements which do have a smaller neighbor element to the left side. Help Andy find the count

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    two(arr, N);

}
function two(arr, N) {
    var count = 0;
    var stack = [];
    for (var i = 0; i < N; i++) {
        while (stack.length !== 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        if (stack.length != 0) {
            count++;
        }
        stack.push(arr[i]);
    }
    console.log(count);
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