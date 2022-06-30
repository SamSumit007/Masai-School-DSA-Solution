//The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
//Given an integer n, print the number of distinct solutions to the n-queens puzzle.

//solution by column wise
function runProgram(input) {
    var input = +(input);
    solve(input);

}
function solve(N) {
    var board = [];
    for (var i = 0; i < N; i++) {
        var b = [];
        for (var j = 0; j < N; j++) {
            b.push(0);
        }
        board.push(b);
    }

    function isSafe(board, row, col) {
        for (var i = 0; i < col; i++) {
            if (board[row][i] == 1) {
                return false;
            }
        }
        var i = row;
        var j = col;
        while (i >= 0 && j >= 0) {
            if (board[i][j] == 1) {
                return false;
            }
            i--;
            j--;
        }
        var i = row;
        var j = col;
        while (i < board.length && j >= 0) {
            if (board[i][j] == 1) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    var count = 0;
    function queen(N, board, col) {
        if (col == N) {
            count++;
        }
        else {
            for (var i = 0; i < N; i++) {
                if (isSafe(board, i, col)) {
                    board[i][col] = 1;
                    queen(N, board, col + 1);
                    board[i][col] = 0;
                }
            }
            return;
        }
    }


    queen(N, board, 0);

    console.log(count);

}



if (process.env.USER === "") {
    runProgram(``);
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