function solve(arr, n, m) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i][m - 1] !== "C" && arr[i][m - 1] === "R") count++;
    }

    for (let i = 0; i < m; i++) {
        if (arr[n - 1][i] !== "C" && arr[n - 1][i] === "D") count++;
    }

    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let [n, m] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput.splice(i + 1, n).map((el) => el.trim().split(""));
        console.log(solve(arr, n, m));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    3 3
    RRD
    DDR
    RRC
    1 4
    DDDC
    6 9
    RDDDDDRRR
    RRDDRRDDD
    RRDRDRRDR
    DDDDRDDRR
    DRRDRDDDR
    DDRDRRDDC
    1 1
    C`);
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
