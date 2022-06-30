//Find the number of students who will be selected from this contest.
//Note that candidates with equal scores will have equal ranks, 
//but the candidate with the next lowest score will be ranked based on the position within the list of all candidates' scores.
//For example, if there are five candidates, and four candidates tie for first place, their ranks would be 1,1,1,1 and 5.



function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var size = input[line].trim().split(" ");
        var n = +size[0];
        var k = +size[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        solve(n, k, arr);
    }

}
function solve(n, k, arr) {
    arr.sort(function (a, b) { return b - a; });
    var m = [];
    var rank = 1;
    var count = 0;
    var previous = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == previous) {
            m.push(rank);
        }
        else {
            rank += count;
            m.push(rank);
            count = 0;
        }
        count++;
        previous = arr[i];
    }
    var ans = 0;
    for (var j = 0; j < n; j++) {
        if (m[j] < k) {
            ans++;
        }
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