//For each test case, you are given N integers and K, 
//your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. 
//Else print "-1" (without quotes).


function runProgram(input) {
    var input = input.split("\n");
    var T = input[0];
    for (var i = 1; i < input.length; i += 2) {
        var line = input[i].split(" ").map(Number);
        var N = line[0];
        var K = line[1];
        var A = input[i + 1].split(" ").map(Number);
        suchpair(N, K, A);
    }

}
function suchpair(N, K, A) {
    var A = A.sort(function (a, b) {
        return a - b;
    });

    var flag = false;
    var start = 0;
    var end = N - 1;
    while (start < end) {
        if (A[start] + A[end] == K) {
            flag = true;
            break;
        }
        else if (A[start] + A[end] > K) {
            end--;
        }
        else {
            start++;
        }
    }
    if (flag) {
        console.log(1);
    }
    else {
        console.log(-1);
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