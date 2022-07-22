//UNSOLVED

let ans = [];

function solve(arr) {
    let set = new Set();
    for (let i = 0; i < 1; i++)
        for (let j = 0; j < arr[i].length; j++) set.add(arr[i][j]);

    for (let i = 1; i < arr.length; i++) {
        let temp = new Set();
        for (let j = 0; j < arr[i].length; j++) {
            if (set.has(arr[i][j])) temp.add(arr[i][j]);
        }
        set = temp;
    }

    return set.size;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let [n, m] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput.splice(i + 1, n);
        arr = arr.map((el) => el.trim().split(" ").map(Number));
        ans.push(solve(arr));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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
