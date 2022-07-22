function solve(arr) {
    for (let i = 0; i < arr[0].length; i++) {
        let result = "";
        for (let j = 0; j < arr.length; j++) {
            result += arr[j][i] + " ";
        }
        console.log(result);
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        let arr = newInput.splice(i + 1, n);
        arr = arr.map((el) => el.trim().split(" ").map(Number));
        solve(arr);
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    2 3 5 6
    4 5 7 9
    8 6 4 9
    1 3 5 6`);
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
