let max = 0;
let cache = {};

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

function findSubsequences(str, low, high, ans) {
    if (!cache[ans])
        if (low <= high + 1 && ans != "") {
            if (isPalindrome(ans)) {
                max = Math.max(max, ans.length);
                cache[ans] = ans.length;
            } else cache[ans] = 0;
        }

    for (let i = low; i <= high; i++) {
        findSubsequences(str, i + 1, high, ans + str[i]);
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let str = newInput[0].trim();
    findSubsequences(str, 0, str.length - 1, "");
    console.log(max);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`AABCDEBAZ`);
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
