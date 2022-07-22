let ans = [];

function solve(arr) {
    arr = arr.map((el) => el.trim().split("").sort().join(""));
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]]++;
    }

    let sum = 0;

    for (let key in obj) {
        let n = obj[key];
        sum += (n * (n - 1)) / 2;
    }

    return sum;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        let arr = newInput.splice(i + 1, n);
        ans.push(solve(arr));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    aaaaabbbbb
    baabbbbaaa
    aaaabbbbba
    xxxxxxxxxy
    yxxxxxxxxx
    2
    abcdefghij
    jighdefabc`);
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
