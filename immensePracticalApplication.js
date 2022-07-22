let cache;

function solve(s1, s2, n, m) {
    if (n === 0) return m;
    else if (m === 0) return n;

    if (cache[n][m]) return cache[n][m];

    if (s1[n] === s2[m]) cache[n][m] = solve(s1, s2, n - 1, m - 1);
    else {
        cache[n][m] =
            1 +
            Math.min(
                solve(s1, s2, n - 1, m),
                solve(s1, s2, n, m - 1),
                solve(s1, s2, n - 1, m - 1)
            );
    }
    return cache[n][m];
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    for (let i = 1; i < t * 2; i += 2) {
        let s1 = newInput[i].trim();
        let s2 = newInput[i + 1].trim();

        let n = s1.length;
        let m = s2.length;

        cache = new Array(n + 1).fill(-1).map((el) => new Array(m + 1));

        console.log(solve(s1, s2, n, m));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde`);
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
