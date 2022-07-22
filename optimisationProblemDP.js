let cache;
let arr;

function solve(totalWeight, n) {
    if (totalWeight <= 0 || n < 0) return 0;

    if (cache[totalWeight][n]) return cache[totalWeight][n];

    let [weight, value] = arr[n].trim().split(" ").map(Number);

    let included = 0;
    if (totalWeight >= weight)
        included = value + solve(totalWeight - weight, n - 1);

    let excluded = solve(totalWeight, n - 1);

    cache[totalWeight][n] = Math.max(included, excluded);
    return cache[totalWeight][n];
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    for (let i = 1; i <= t; i++) {
        let [totalWeight, n] = newInput[i].trim().split(" ").map(Number);
        arr = newInput.splice(i + 1, n);
        cache = Array.from(Array(totalWeight + 1), () => new Array(n + 1));
        console.log(solve(totalWeight, n - 1));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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
