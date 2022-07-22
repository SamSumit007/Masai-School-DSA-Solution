let arr;
let cache;

function solve(shop_num, prev) {
    if (shop_num < 0) return 0;

    let temp = arr[shop_num].trim().split(" ").map(Number);

    if (prev != 0 && !cache[shop_num][0])
        cache[shop_num][0] = temp[0] + solve(shop_num - 1, 0);
    if (prev != 1 && !cache[shop_num][1])
        cache[shop_num][1] = temp[1] + solve(shop_num - 1, 1);
    if (prev != 2 && !cache[shop_num][2])
        cache[shop_num][2] = temp[2] + solve(shop_num - 1, 2);

    return Math.min(
        cache[shop_num][0] || Number.MAX_SAFE_INTEGER,
        cache[shop_num][1] || Number.MAX_SAFE_INTEGER,
        cache[shop_num][2] || Number.MAX_SAFE_INTEGER
    );
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        arr = newInput.splice(i + 1, n);
        cache = Array.from(Array(n), () => Array(3));

        console.log(solve(n - 1, -1));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    3
    1 50 50
    50 50 50
    1 50 50
    3
    1 50 50
    50 50 50
    1 50 50`);
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
