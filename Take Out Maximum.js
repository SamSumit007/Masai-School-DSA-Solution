//Given an array of integers and a number k, find the maximum sum of a subarray of size k.

function runProgram(input) {
    var out = input.split("\n");
    var out1 = out[0].split(" ");
    var n = Number(out1[0]);
    var k = Number(out1[1]);
    var array = out[1].split(" ").map(Number);
    maxsum(array, n, k)

}
function maxsum(array, n, k) {
    var sum = 0;
    for (i = 0; i < k; i++) {
        sum += array[i];
    }
    var sum1 = sum;
    for (i = k; i < n; i++) {
        sum1 += array[i] - array[i - k];
        if (sum < sum1) {
            sum = sum1;
        }
    }

    console.log(sum);
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