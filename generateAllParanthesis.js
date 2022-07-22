var ans = [];

function generate(s, n, open, close) {
    if (s.length == n * 2) {
        ans.push(s);
    }

    if (open < n)
        generate(s + "(", n, open + 1, close);

    if (open > close)
        generate(s + ")", n, open, close + 1);

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        ans = [];
        generate("", n, 0, 0);

        console.log(ans.length);
        for (let j = 0; j < ans.length; j++)
            console.log(ans[j]);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    3
    2
    1`);
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