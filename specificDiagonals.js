function stringToArray(el) {
    return el.split(" ").map(Number);
}

function primaryDiagonalPrint(m, n, arr) {
    while (m > 0 && n > 0) {
        m--;
        n--;
    }
    /*    
    var min = Math.min(m, n);
    m = m - min;
    n = n - min;
     */
    var result = "";
    while (m < arr.length && n < arr[0].length) {
        result += arr[m][n] + " ";
        m++;
        n++;
    }
    console.log(result);

}

function secondaryDiagonalPrint(m, n, arr) {

    while (m > 0 && n < arr[0].length - 1) {
        m--;
        n++;
    }
    /*    
    var min = Math.min(m, arr[0].length - n - 1);
    m = m - min;
    n = n + min;
     */
    var result = "";
    while (m < arr.length && n >= 0) {
        result += arr[m][n] + " ";
        m++;
        n--;
    }
    console.log(result);

}


function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var arr_lines = newInput.slice(1, 1 + rc[0]);
    var arr = arr_lines.map(stringToArray);
    var k = Number(newInput[rc[0] + 1]);

    var m;
    var n;

    //finding index value of K
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr[i].length; j++)
            if (arr[i][j] == k) {
                m = i;
                n = j;
                i = arr.length;
                break;
            }

    primaryDiagonalPrint(m, n, arr);
    secondaryDiagonalPrint(m, n, arr);

}


if (process.env.USERNAME === "getsu") {
    runProgram(`3 3
1 2 3
4 5 6
7 8 9
5`);
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