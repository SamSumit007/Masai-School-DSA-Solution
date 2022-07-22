function encrypt(s) {
    if (s.length <= 0) return "";
    else {
        let mid = Math.floor((s.length - 1) / 2);
        return (
            s[mid] +
            encrypt(s.slice(0, mid)) +
            encrypt(s.slice(mid + 1, s.length))
        );
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let s = newInput[i + 1].trim();
        console.log(encrypt(s));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk`);
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
