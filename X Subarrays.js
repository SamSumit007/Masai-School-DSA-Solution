//Given a array A having N positive integers. Count all the subarrays of A having length X,
//such that each subarray has no integer greater than K.

function runProgram(input) {
    var input = input.split("\n");
    var t = input[0];
    for (var i = 1; i < input.length; i += 2) {
        var line = input[i].split(" ").map(Number);
        var N = line[0];
        var K = line[1];
        var X = line[2];
        var A = input[i + 1].split(" ").map(Number);
        xsubarrays(N, K, X, A);
    }

}
function xsubarrays(N, K, X, A) {
    var ans = 0;
    var w = 0;
    for (var i = 0; i < N; i++) {
        if (A[i] <= K) {
            w++
        }
        else {
            ans += Math.max(0, w - X + 1);
            w = 0;
        }
    }
    ans += Math.max(0, w - X + 1);
    console.log(ans);


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