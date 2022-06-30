//Given an array of integers of length n and a positive integer K, 
//the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.

function runProgram(input) {
    var input = input.split("\n");
    var size = input[0].trim().split(" ").map(Number);
    var N = size[0];
    var K = size[1];
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, K, arr);

}
function solve(N, K, arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if (sum % K != 0) {
        console.log(1);
    }
    else {
        var left = N;
        var i = 0;
        while (i < N) {
            if (arr[i] % K != 0) {
                left--;
                break;
            }
            i++;
            left--;
        }
        var right = N;
        var i = N - 1;
        while (i >= 0) {
            if (arr[i] % K != 0) {
                right--;
                break;
            }
            i--;
            right--;
        }
        var slide;
        if (left > right) {
            slide = left;
        }
        else {
            slide = right;
        }

        var count = 0;
        var sum = 0;
        for (var i = 0; i < slide; i++) {
            sum += arr[i];
        }
        if (sum % K != 0) {
            count++;
        }
        for (var j = slide; j < N; j++) {
            sum += arr[j];
            sum -= arr[j - slide];
            if (sum % K != 0) {
                count++;
            }
        }
        console.log(count);
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