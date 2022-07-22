function stringToArray(el) {
    return el.split(" ").map(Number);
}

/*

0,0     0,1     0,2     0,3
1,0     1,1     1,2     1,3    
2,0     2,1     2,2     2,3 
3,0     3,1     3,2     3,3

*/



function arraySumCount(arr, s) {
    var count = 0;
    var n = arr.length;
    var m = arr[0].length;

    for (var i = 0; i < n; i++)
        for (var j = 0; j < m; j++) {
            //checking all rows
            if (j + 3 <= m)
                if (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] == s)
                    count++;

            //checking all columns
            if (i + 3 <= n)
                if (arr[i][j] + arr[i + 1][j] + arr[i + 2][j] == s)
                    count++;

            //checking all primary diagonals
            if (j + 3 <= m && i + 3 <= n)
                if (arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2] == s)
                    count++;

            //checking all secondary diagonals
            if (i >= 2 && j + 3 <= m)
                if (arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2] == s)
                    count++;

        }

    return count;


}


function runProgram(input) {
    var newInput = input.split("\n");
    var rcs = newInput[0].split(" ").map(Number);
    var s = rcs[2];
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);

    console.log(arraySumCount(arr, s));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 3 6
3 2 1 0 5
2 2 2 7 8
1 5 1 3 5`);
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