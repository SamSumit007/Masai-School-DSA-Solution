let ans = [];

function solve(str) {
    let set = new Set();
    for (let i = 0; i < str.length; i++) {
        let temp = "";
        for (let j = i; j < str.length; j++) {
            temp += str[j];
            set.add(temp);
        }
    }

    return set.size;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let str = newInput[i + 1].trim().split("");
        ans.push(solve(str));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "") {
    runProgram(`2
    5
    abcde
    3
    aaa`);
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
