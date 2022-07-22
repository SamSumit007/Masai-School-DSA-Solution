function stringToArray(el) {
    return el.split(" ").map(Number);
}

function rotate(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var result = "";
        for (var j = arr[i].length - 1; j >= 0; j--)
            result += arr[i][j] + " ";
        console.log(result);
    }


}

function runProgram(input) {
    var newInput = input.split("\n");
    var index = 1;
    var t = Number(newInput[0]);
    while (t-- > 0) {
        //input
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, rows + index + 1);
        var arr = arr_lines.map(stringToArray);
        index = rows + index + 1;


        rotate(arr);
    }




}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6`);
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