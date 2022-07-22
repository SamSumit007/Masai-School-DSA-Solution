function stringToArray(el) {
    return el.split(" ").map(Number);
}

function printDiagonals(r, c, arr) {
    var primaryResult = "";
    var secondaryResult = "";

    var primary = r - c;
    var secondary = r + c;

    //all primary diagonal elements of an element will have the same difference index value
    //all secondary diagonal elements of an element will have the same index sum.

    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr[i].length; j++) {
            if (i - j == primary)
                primaryResult += arr[i][j] + " ";
            if (i + j == secondary)
                secondaryResult += arr[i][j] + " ";
        }

    console.log(primaryResult);
    console.log(secondaryResult);

}

function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var arr_lines = newInput.slice(1, rc[0] + 1);
    var arr = arr_lines.map(stringToArray);
    var k = Number(newInput[rc[0] + 1]);

    var r;
    var c;

    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr[i].length; j++)
            if (arr[i][j] == k) {
                r = i;
                c = j;
                i = arr.length;
                break;
            }

    printDiagonals(r, c, arr);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 3
1 2 3
4 5 6
7 8 9
6`);
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