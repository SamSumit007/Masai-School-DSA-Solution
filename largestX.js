function solve(arr) {
    let set = new Set();
    let max = -1;
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && set.has(Math.abs(arr[i])))
            max = Math.max(max, Math.abs(arr[i]));
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
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`);
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
