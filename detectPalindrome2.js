let ans = [];

function solve(str) {
    let obj = {};
    let oddCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
            oddCount++;
        } else {
            obj[str[i]]++;
            if (obj[str[i]] % 2 === 0) oddCount--;
            else oddCount++;
        }
    }
    if (oddCount > 1) return "Not Possible!";
    else return "Possible!";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let str = newInput[i + 1].trim();
        ans.push(solve(str));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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
