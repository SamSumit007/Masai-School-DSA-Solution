//Given string str of lowercase alphabets of length n and an integer K, 
//the task is to count all substrings of length K which have exactly K distinct characters.

function runProgram(input) {
    var input = input.split("\n");
    var line = input[0].split(" ").map(Number);
    var n = line[0];
    var k = line[1];
    var str = input[1];
    var m = new Map();
    for (var i = 0; i < k; i++) {
        if (m.has(str[i])) {
            m.set(str[i], m.get(str[i]) + 1);
        }
        else {
            m.set(str[i], 1);
        }
    }
    var ans = 0;
    if (m.size == k) {
        ans++;
    }
    var l = 0;
    var r = k;
    while (r < n) {
        if (m.get(str[l]) == 1) {
            m.delete(str[l]);
        }
        else {
            m.set(str[l], m.get(str[l]) - 1);
        }
        if (m.has(str[r])) {
            m.set(str[r], m.get(str[r]) + 1);
        }
        else {
            m.set(str[r], 1);
        }
        if (m.size == k) {
            ans++;
        }
        l++;
        r++;
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