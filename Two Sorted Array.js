//You are given two arraysAandB, each of size N.
//The first array A, is sorted in ascending order, while the second array is sorted in descending order.
//You have to find the number of elements common in both the arrays.

function runProgram(input) {
    var input = input.split("\n");
    var T = input[0];
    for (var i = 1; i < input.length; i += 3) {
        var N = +(input[i]);
        var A = input[i + 1].split(" ").map(Number);
        var B = input[i + 2].split(" ").map(Number);
        twoshort(N, A, B);
    }

}
function twoshort(N, A, B) {
    var count = 0;
    var start = 0;
    var end = N - 1;
    while (start < N && end >= 0) {
        if (A[start] == B[end]) {
            count++;
            end--;
            start++;
        }
        else if (A[start] > B[end]) {
            end--;
        }
        else if (A[start] < B[end]) {
            start++;
        }
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