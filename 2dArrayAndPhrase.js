function stringToArray(el) {
    return el.split("");
}

function arrayCountString(arr) {
    var count = 0;
    var n = arr.length;
    var m = arr[0].length;
    var temp;

    for (var i = 0; i < n; i++)
        for (var j = 0; j < m; j++) {
            //horizontal
            if (m - j >= 4) {
                temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3];
                if (temp == "saba")
                    count++;
            }

            //vertical
            if (n - i >= 4) {
                temp = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 3][j];
                if (temp == "saba")
                    count++;
            }

            //primary diagonal
            if ((m - j >= 4) && (n - i >= 4)) {
                temp = arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2] + arr[i + 3][j + 3];
                if (temp == "saba")
                    count++;
            }

            //secondary diagonal
            if (i >= 3 && m - j >= 4) {
                temp = arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2] + arr[i - 3][j + 3];
                if (temp == "saba")
                    count++;
            }

        }
    return count;

}



function runProgram(input) {
    var newInput = input.split("\n");
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);

    console.log(arrayCountString(arr));


}
if (process.env.USERNAME === "getsu") {
    runProgram(`5 5
safer
amjad
babol
aaron
songs`);
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