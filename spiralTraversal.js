function stringToArray(el) {
    return el.split(" ").map(Number);
}

function printRectangular(arr) {
    var totalElements = arr.length * arr[0].length;

    var result = "";

    var top = 0; //topmost unvisted row
    var bottom = arr.length - 1; //bottom most unvisted row
    var left = 0; //leftmost unvisted column
    var right = arr[0].length - 1; //rightmost unvisited column

    var count = 0; //count of elements traversed

    while (count < totalElements) {
        for (var i = top; i <= bottom && count < totalElements; i++) {
            result += arr[i][left] + " ";
            count++;
        }
        left++;

        for (var i = left; i <= right && count < totalElements; i++) {
            result += arr[bottom][i] + " ";
            count++;
        }
        bottom--;

        for (var i = bottom; i >= top && count < totalElements; i--) {
            result += arr[i][right] + " ";
            count++;
        }
        right--;

        for (var i = right; i >= left && count < totalElements; i--) {
            result += arr[top][i] + " ";
            count++;
        }
        top++;


    }
    console.log(result);


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
        printRectangular(arr);


    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
5 4
1 2 3 0
4 5 6 0
7 8 9 0
10 11 12 0
0 0 0 0 0 `);
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