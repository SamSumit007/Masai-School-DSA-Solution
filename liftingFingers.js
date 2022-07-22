function liftingFingers(s) {
    let ans = 1;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] != s[i + 1]) ans++;
    }

    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let s = newInput[i].trim();
        console.log(liftingFingers(s));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    aaaaa
    abbbaaz`);
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
