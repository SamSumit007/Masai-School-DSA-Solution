//For last N days, you did nothing but eat, sleep and code.
//A close friend of you kept an eye on you for the last N days. For every single minute of the day, he kept track of your actions and prepared a log file.
//The log file contains exactly N lines, each line contains a string of length 1440 ( i.e. the number of minutes in 24 hours of the day).
//The string is made of characters E, S, and C only; representing Eat, Sleep and Code respectively. the ith character of the string represents what you were doing during the ith minute of the day.
//Your friend is now interested in finding out the maximum of the longest coding streak of the day - X.
//He also wants to find the longest coding streak of N days - Y.
//Coding streak means the number of C's without any E or S in between.

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = [];
    for (var i = 1; i < input.length; i++) {
        arr.push(input[i].trim());
    }
    solve(N, arr);
}
function solve(N, arr) {
    var X = 0;

    for (var i = 0; i < arr.length; i++) {
        var x = 0;
        var w = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "C") {
                w++;
                if (x < w) {
                    x = w;
                }
            }
            else {
                x = Math.max(x, w);
                w = 0;
            }
        }
        X = Math.max(X, x);
    }

    var str = "";
    for (var i = 0; i < N; i++) {
        str += arr[i];
    }
    var Y = 0;
    var z = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "C") {
            z++;
        }
        else {
            Y = Math.max(Y, z);
            z = 0;
        }
    }
    console.log(X, Y);
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