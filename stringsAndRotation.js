function solve(s1, s2) {
    let start = s1[0];
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] === start) {
            let t1 = s2.slice(i);
            let t2 = s2.slice(0, i);
            if (t1 + t2 === s1) return "Yes";
        }
    }
    return "No";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let s1 = newInput[0].trim();
    let s2 = newInput[1].trim();

    console.log(solve(s1, s2));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`carbon
    boncar`);
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
