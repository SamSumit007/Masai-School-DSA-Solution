let ans = [];

function solve(arr) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "L") x--;
        else if (arr[i] === "R") x++;
        else if (arr[i] === "U") y++;
        else if (arr[i] === "D") y--;
    }

    if (x === 0 && y === 0) return "Yes";
    else return "No";
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
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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
