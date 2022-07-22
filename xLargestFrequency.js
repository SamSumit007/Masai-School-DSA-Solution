function stringToArray(el) {
    return el.split(" ").map(Number);
}

function findDiagonalArr(arr) {
    var ans = [];
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr[i].length; j++) {
            if (i - j == 0)
                ans.push(arr[i][j]);
            if (i + j == arr.length - 1 && i != j)
                ans.push(arr[i][j])
        }
    return ans;
}

function findMaxFreq(arr) {
    var count = 0;
    var max = Math.max(...arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == max)
            count++;
    }
    return count;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);
        index = index + 1 + rows;
        var diagonalArr = findDiagonalArr(arr);
        console.log(findMaxFreq(diagonalArr));
    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
2
1 4
3 4
3
1 4 5
3 4 7
2 8 9`);
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