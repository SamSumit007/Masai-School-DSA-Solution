let ans = 0;

function isQueenSafe(chess, row, col) {
    //not required to check any squares to the right or below as it's not filled yet

    //check vertical top
    for (let i = row - 1, j = col; i >= 0; i--)
        if (chess[i][j] === 1) return false;

    //check top-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (chess[i][j] === 1) return false;

    //check top-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < chess[0].length; i--, j++)
        if (chess[i][j] === 1) return false;

    return true;
}

function nQueen(chess, row) {
    //if row is equal to chess.length, then we filled in all the queens
    if (row >= chess.length) ans++;

    for (let col = 0; col < chess[0].length; col++) {
        if (isQueenSafe(chess, row, col)) {
            chess[row][col] = 1;
            nQueen(chess, row + 1);
            chess[row][col] = 0;
        }
    }
}

function runProgram(input) {
    let n = Number(input);
    let chess = new Array(n).fill(0).map((el) => new Array(n).fill(0));
    nQueen(chess, 0);
    console.log(ans);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4`);
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
