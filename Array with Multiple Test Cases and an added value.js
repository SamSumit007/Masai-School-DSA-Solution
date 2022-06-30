//The first line of the input containsT, the number of test cases
//The first line of each test case containsNandK, as explained in the problem statement
//The next line containsNspace separated integers, denoting the elements of the array
//add k in every element of array

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
    var bag = "";
    for (var i = 0; i < N; i++) {
        bag += (arr[i] + K) + " ";
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