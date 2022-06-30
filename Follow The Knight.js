//You are very good at playing chess since childhood and you knew the rules very much. 
//You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.
//It is placed at (i,j) coordinate initially. 
//For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
    var i = input[0] - 1;
    var j = input[1] - 1;
    var N = input[2];
    solve(i, j, N);

}
function solve(r, c, N) {
    var board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]

    function followtheKnight(arr, N, R, C) {
        if (R < 0 || R > 9 || C < 0 || C > 9) {
            return;
        }
        else if (N == 0) {
            arr[R][C] = 1;
            return;
        }
        else {
            followtheKnight(arr, N - 1, R - 2, C + 1);
            followtheKnight(arr, N - 1, R - 2, C - 1);
            followtheKnight(arr, N - 1, R + 2, C + 1);
            followtheKnight(arr, N - 1, R + 2, C - 1);
            followtheKnight(arr, N - 1, R - 1, C - 2);
            followtheKnight(arr, N - 1, R - 1, C + 2);
            followtheKnight(arr, N - 1, R + 1, C - 2);
            followtheKnight(arr, N - 1, R + 1, C + 2);
        }
    }

    followtheKnight(board, N, r, c);
    //console.log(board)
    var count = 0;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (board[i][j] == 1) {
                count++;
            }
        }
    }
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