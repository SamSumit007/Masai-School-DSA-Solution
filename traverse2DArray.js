function stringToArray(el) {
    return el.split(" ").map(Number);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);
    var result = "";

    for (var i = 0; i < arr[0].length; i++)
        for (var j = arr.length - 1; j >= 0; j--)
            result += arr[j][i] + " ";

    console.log(result);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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