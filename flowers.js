function solve(mid, newInput) {
    let money = Number(newInput[2]);
    let [r, y, b] = newInput[0].trim().split(" ").map(Number);
    let [nr, ny, nb] = newInput[1].trim().split(" ").map(Number);
    let [cr, cy, cb] = newInput[3].trim().split(" ").map(Number);

    let totalRed = mid * r;
    let totalYellow = mid * y;
    let totalBlue = mid * b;

    if (r !== 0 && totalRed > nr) totalRed -= nr;
    else totalRed = 0;
    if (y !== 0 && totalYellow > ny) totalYellow -= ny;
    else totalYellow = 0;
    if (b !== 0 && totalBlue > nb) totalBlue -= nb;
    else totalBlue = 0;

    let costRed = totalRed * cr;
    let costYellow = totalYellow * cy;
    let costBlue = totalBlue * cb;

    if (money >= costRed + costYellow + costBlue) return true;
    else return false;
}

function runProgram(input) {
    let newInput = input.split("\n");

    let ans = 0;
    let low = 0;
    let high = Number.MAX_SAFE_INTEGER;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (solve(mid, newInput)) {
            ans = mid;
            low = mid + 1;
        } else high = mid - 1;
    }

    console.log(ans);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1 9 8
    29 36 49
    491
    9 30 22`);
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
