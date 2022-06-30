//group of 2 one minimum or second maximum
//You are given an array of size 2N, and the elements of the array denote the tax amount of the citizens. 
//Find out the tax collected if the citizens are divided into groups using the above strategy. 

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    two(N, arr);

}
function two(N, arr) {
    var n = N * 2;
    arr.sort(function (a, b) { return a - b });
    var ans = 0;
    //console.log(n,arr)
    for (var i = N; i < n; i++) {
        ans += arr[i];
    }
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