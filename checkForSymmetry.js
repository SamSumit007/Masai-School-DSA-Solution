//can make extra function to check if array is symmetrical and pass each row/column into it.

function stringToArray(el) {
    return el.split("");
}


//take each row and check if its symmetrical
function isRowSymmetrical(arr) {
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        var j = 0;
        var k = row.length - 1;
        while (j < k) {
            if (row[j] != row[k])
                return false;
            j++;
            k--;
        }
    }
    return true;
}

//take each column and check if its symmetrical 
function isColumnSymmetrical(arr) {
    for (var i = 0; i < arr.length; i++) {
        var j = 0;
        var k = arr.length - 1;
        while (j < k) {
            if (arr[j][i] != arr[k][i])
                return false;
            j++;
            k--;
        }
    }
    return true;


}

//SQUARE MATRIX ONLY INPUT

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        //input
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, index + rows + 1);
        var arr = arr_lines.map(stringToArray);
        index = index + rows + 1;


        if (isRowSymmetrical(arr) && isColumnSymmetrical(arr))
            console.log("BOTH");
        else if (isRowSymmetrical(arr))
            console.log("VERTICAL");
        else if (isColumnSymmetrical(arr))
            console.log("HORIZONTAL");
        else
            console.log("NO");


    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`);
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