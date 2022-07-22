function stringToArray(el) {
    return el.split(" ").map(Number);
}

function rotate(arr) {
    for (var i = arr[0].length - 1; i >= 0; i--) {
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
    rotate(arr);


}
if (process.env.USERNAME === "") {
    runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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