function solve(arr, n) {
    let matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
    let top = 0;
    let left = 0;
    let right = n - 1;
    let down = n - 1;
    let count = 0;

    while (count < n * n) {
        for (let i = left; i <= right && count < n * n; i++) {
            matrix[top][i] = arr[count];
            count++;
        }
        top++;

        for (let i = top; i <= down && count < n * n; i++) {
            matrix[i][right] = arr[count];
            count++;
        }
        right--;

        for (let i = right; i >= left && count < n * n; i--) {
            matrix[down][i] = arr[count];
            count++;
        }
        down--;

        for (let i = down; i >= top && count < n * n; i--) {
            matrix[i][left] = arr[count];
            count++;
        }
        left++;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) sum += matrix[i][i];

    for (let i = 0; i < n; i++) sum += matrix[i][n - i - 1];

    if (n % 2 === 1) {
        let mid = Math.floor(n / 2);
        sum -= matrix[mid][mid];
    }

    return sum;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    for (let i = 1; i < t * 2; i += 2) {
        let n = Number(newInput[i]);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(solve(arr, n));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    3
    1 2 3 6 9 8 7 4 5`);
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
