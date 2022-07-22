function stringToArray(el) {
    return el.split(" ").map(Number);
}

function printRectangular(arr) {
    var result = "";
    var count = 0;
    var n = arr.length;
    var m = arr[0].length;

    var left = 0; //leftmost column
    var right = m - 1; //rightmost column
    var top = 0; //topmost row
    var bottom = n - 1; //bottommost row

    while (count < n * m) {
        for (var i = bottom; i >= top && count < n * m; i--) {
            result += arr[i][left] + " ";
            count++;
        }
        left++;

        for (var i = left; i <= right && count < n * m; i++) {
            result += arr[top][i] + " ";
            count++;
        }
        top++;

        for (var i = top; i <= bottom && count < n * m; i++) {
            result += arr[i][right] + " ";
            count++;
        }
        right--;

        for (var i = right; i >= left && count < n * m; i--) {
            result += arr[bottom][i] + " ";
            count++;
        }
        bottom--;
    }

    return result;



}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        var rc = newInput[index].split(" ").map(Number);
        var rows = rc[0];
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);
        index += 1 + rows;
        console.log(printRectangular(arr));
    }
}

if (process.env.USERNAME === "getsu") {
    runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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