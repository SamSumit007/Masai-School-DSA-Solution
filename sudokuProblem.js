var flag = false;

function isValid(arr, x, y, num) {
    //row check
    for (let i = 0; i < arr.length; i++) {
        if (arr[x][i] == num)
            return false;
    }

    //column check
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][y] == num)
            return false;
    }

    //box check
    let bi = x - (x % 3); //finding initial index of the boxes
    let bj = y - (y % 3); //we can also do this by (index - (index%3))
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (arr[i + bi][j + bj] == num)
                return false;

    return true //if all the top checks are false

}

function solveSudoku(arr, i, j) {
    if (i == arr.length) {
        flag = true;
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i].join(" "));
        return
    }

    let ni = 0;
    let nj = 0;

    if (j == arr.length - 1) {
        ni = i + 1;
        nj = 0;
    } else {
        ni = i;
        nj = j + 1;
    }

    if (arr[i][j] != 0) {
        solveSudoku(arr, ni, nj);
    } else {
        for (let number = 1; number <= 9; number++)
            if (isValid(arr, i, j, number)) {
                arr[i][j] = number;
                solveSudoku(arr, ni, nj);
                if (flag == true)
                    break;
                arr[i][j] = 0;
            }
    }

}


function runProgram(input) {
    let newInput = input.trim().split("\n");
    let sudoku = [];
    for (let i = 0; i < newInput.length; i++) {
        let temp = newInput[i].trim().split(" ").map(Number);
        sudoku.push(temp);
    }
    solveSudoku(sudoku, 0, 0);
    if (!flag)
        console.log("-1");

}
if (process.env.USERNAME === "getsu") {
    runProgram(`0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
    9 2 8 0 0 0 0 6 0`);
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