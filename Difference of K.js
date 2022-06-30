//You are given a sorted arrayAof size N, and another integerK
//You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
//If such a pair exists, printYes, else printNo

function runProgram(input) {
    var input = input.split("\n");
    var T = input[0];
    for (var p = 1; p < input.length; p += 2) {
        var line = input[p].split(" ").map(Number);
        var n = line[0];
        var k = line[1];
        var arr = input[p + 1].split(" ").map(Number);

        solve(n, k, arr);
    }

}
function solve(n, k, arr) {
    var flag = false;
    var j = 0;
    var i = 1;
    while (i < n && j < n) {
        var x = arr[i] - arr[j];
        if (x == k) {
            console.log("Yes");
            flag = true;
            break;
        }
        else if (x < k) {
            i++;
        }
        else {
            j++;
        }
    }
    if (!flag) {
        console.log("No");
    }
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