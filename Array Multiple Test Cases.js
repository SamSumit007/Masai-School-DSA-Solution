//The first line of the input containsT, the number of test cases
//The first line of each test case containsN, the size of the array
//The next line of the input containsN

function runProgram(input) {
    var input = input.split("\n");
    for (var i = 1; i < input.length; i += 2) {
        var N = +(input[i]);
        var arr = input[i + 1].split(" ").map(Number);
        solve(N, arr);
    }
}
function solve(N, arr) {
    var bag = "";
    for (var i = 0; i < N; i++) {
        bag += (arr[i] + 1) + " ";
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