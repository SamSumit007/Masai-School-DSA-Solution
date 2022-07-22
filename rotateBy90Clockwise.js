function stringToArray(el) {
    return el.split(" ").map(Number);
}

function rotateBy90(arr) {
    for (var i = 0; i < arr.length; i++) {
        var result = "";
        for (var j = arr.length - 1; j >= 0; j--)
            result += arr[j][i] + " ";
        console.log(result);
    }
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;

    while (t-- > 0) {
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);

        rotateBy90(arr);


        index = index + 1 + rows;
        rows = Number(newInput[index]);
    }



}
if (process.env.USERNAME === "") {
    runProgram(`4
4
4 2 3 7
2 4 5 5
2 2 6 4
4 9 6 9
7
3 6 3 4 2 9 2
3 7 2 7 8 5 6
4 7 3 8 9 7 3
4 1 9 4 5 3 5
5 4 3 4 4 8 9
1 7 7 3 4 9 3
4 2 9 8 1 7 1
1
9
4
7 6 8 8
9 7 8 2
5 4 6 9
7 6 2 7`);
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