function solve(arr) {
    let obj = {};
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (obj[ele] === undefined) obj[ele] = i;
        else max = Math.max(max, i - obj[ele]);
    }

    return max;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(solve(arr));
    }
}
if (process.env.USERNAME === "Ajit") {
    runProgram(`2
    5
    1 1 1 1 1
    5
    2 1 2 1 1`);
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
