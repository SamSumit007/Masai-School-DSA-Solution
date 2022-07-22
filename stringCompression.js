function solve2(str) {
    let temp = [];

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) temp.push(str[i]);
        else i++;
    }

    return temp;
}

function solve(str) {
    while (true) {
        let len = str.length;

        str = solve2(str);
        console.log(str);

        if (len === str.length) break;
    }
    return str.length;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let str = newInput[i + 1].trim().split("");
        console.log(solve(str));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    11000
    6
    100001`);
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
