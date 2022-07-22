let ans = [];

function isPossible(m, n) {
    m.sort((a, b) => a - b);
    n.sort((a, b) => a - b);

    let flag = true;
    for (let i = 0; i < m.length; i++) {
        if (m[i] <= n[i]) {
            flag = false;
            break;
        }
    }

    if (flag) ans.push("YES");
    else ans.push("NO");
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 3; i += 3) {
        let m = newInput[i + 1].trim().split(" ").map(Number);
        let n = newInput[i + 2].trim().split(" ").map(Number);
        if (m.length > n.length) ans.push("NO");
        else {
            isPossible(m, n);
        }
    }

    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    2 8
    135 101
    170 125 79 159 163 65 106 146
    2 8
    162 92
    196 143 28 37 192 5 103 154`);
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
