function stringToArray(el) {
    return el.split(" ").map(Number);
}

function reverseN(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++)
        result += arr[i][0] + " ";

    var j = 0;
    var i = arr.length - 1;

    while (j < arr.length - 1) {
        j++;
        i--;
        result += arr[i][j] + " ";
    }

    for (var i = 1; i < arr.length; i++)
        result += arr[i][arr.length - 1] + " ";

    console.log(result);

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
        reverseN(arr);
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
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