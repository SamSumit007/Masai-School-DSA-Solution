//Given a string s of length n, find out the number of distinct substrings possible from the given string.

function runProgram(input) {
    var input = input.split("\n");
    var line = 1;
    var t = +input[0];
    for (var i = 0; i < t; i++) {
        var N = +input[line];
        line++;
        var str = input[line].trim();
        line++;
        solve(N, str);
    }

}
function solve(N, str) {

    var count = new Map();
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            var bag = "";
            for (var k = i; k <= j; k++) {
                bag += str[k];
            }
            if (count.has(bag)) {
                count.set(bag, count.get(bag) + 1);
            }
            else {
                count.set(bag, 1);
            }
        }
    }
    console.log(count.size);
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