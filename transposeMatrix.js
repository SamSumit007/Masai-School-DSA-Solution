function stringToArray(el) {
    return el.split(" ").map(Number);
}

function transposeMatrix(arr) {
    for (var i = 0; i < arr[0].length; i++) {
        var result = "";
        for (var j = 0; j < arr.length; j++)
            result += arr[j][i] + " ";
        console.log(result);
    }

}


function runProgram(input) {
    var newInput = input.split("\n");
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);
    transposeMatrix(arr);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
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