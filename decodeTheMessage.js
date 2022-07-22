function solve(str) {
    let current;
    let count = 1;
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
        if (current !== str[i]) {
            ans = Math.max(ans, count);
            current = str[i];
            count = 1;
        } else if (current === str[i]) {
            count++;
        }
    }
    ans = Math.max(ans, count);
    return ans;
}

function runProgram(input) {
    let str = input;
    console.log(solve(str));
}
if (process.env.USERNAME === "A") {
    runProgram(`ATTCGGGA`);
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
