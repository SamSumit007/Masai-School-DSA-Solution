//Given a sorted array of integers, return indices of two numbers such that they add up to a target value.
//Print -1 -1 if not found.

function runProgram(input) {
    var input = input.split("\n");
    var t = Number(input[0]);
    var k = 1;
    for (var i = 1; i <= t; i++) {
        var input1 = input[k].split(" ").map(Number);
        var n = input1[0];
        var b = input1[1];
        k++;
        var array = input[k].split(" ").map(Number);
        k++;
        //console.log(n,b,array)
        twosum(n, b, array)
    }
}
function twosum(n, b, arr) {
    var i = 0;
    var j = n - 1;
    var flag = false;
    while (i < j) {
        sum = arr[i] + arr[j];
        if (sum == b) {
            flag = true;
            console.log(i, j);
            break;
        }
        else if (sum > b) {
            j--;
        }
        else {
            i++;
        }

    }

    if (!flag) {
        console.log(-1, -1);
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