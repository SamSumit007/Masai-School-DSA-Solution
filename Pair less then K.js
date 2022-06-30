//You are given an array A of N integers, and an integer K. Find the maximum value of S, such S that S = a[i] + a[j], and S < K. 
//If no such value exists, then print -1.


//Method 2 pointers
function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        var K = +input[line];
        line++;
        solve(N, K, arr);
    }

}
function solve(N, K, arr) {
    arr.sort(function (a, b) { return a - b });
    var flag = false;
    var ans = 0;
    var i = 0;
    var j = N - 1;
    while (i < j) {
        sum = arr[i] + arr[j];
        if (sum < K) {
            if (ans < sum) {
                ans = sum;
                flag = true;
            }
            i++;

        }
        else {
            j--;
        }
    }
    if (flag) {
        console.log(ans);
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


// method brute force

function runProgram(input) {
    var input = input.split("\n");
    var t = input[0];
    for (var i = 1; i < input.length; i += 3) {
        var N = Number(input[i]);
        var A = input[i + 1].split(" ").map(Number);
        var K = Number(input[i + 2]);
        pairlessthenk(N, A, K);
    }

}
function pairlessthenk(N, A, K) {
    var re = 0;
    for (var i = 0; i < N - 1; i++) {
        for (var j = i + 1; j < N; j++) {
            s = A[i] + A[j];
            if (s < K) {
                if (re < s) {
                    re = s;
                }
            }
        }
    }
    if (re > 0) {
        console.log(re);
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